// Auditoria fiable: evalua cada IIFE en un sandbox y valida SOLO valores de prosa.
// Uso: node audit-prose.js
// Por que: los regex sobre el fuente de texto daban falsos positivos (las URLs y los
// titulos de referencia contienen palabras inglesas legitimas) y el detector de dominio
// fallaba. Aqui se evalua el objeto real y se recorren sus campos, no su serializacion.
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const ROOT = require('path').join(__dirname, '..');

const DOMAINS = [
  { key: 'ideologia', label: 'IDEOLOGIA', dir: 'js/data', prefix: null },
  { key: 'partido', label: 'PARTIDOS', dir: 'js/data/parties', prefix: 'parties/' },
  { key: 'geopolitica', label: 'GEOPOLITICA', dir: 'js/data/geo', prefix: 'geo/' },
  { key: 'organizacion', label: 'ORGANIZACION', dir: 'js/data/orgs', prefix: 'orgs/' },
  { key: 'gobierno', label: 'GOBIERNO', dir: 'js/data/gobiernos', prefix: 'gobiernos/' },
  { key: 'pensador', label: 'PENSADOR', dir: 'js/data/pensadores', prefix: 'pensadores/' },
  { key: 'concepto', label: 'CONCEPTO', dir: 'js/data/conceptos', prefix: 'conceptos/' }
];

// U+FFFD (caracter de reemplazo) se incluye a proposito: un texto leido con la
// codificacion equivocada lo produce, y antes pasaba inadvertido en los datos.
const NON_LATIN = /[\uFFFD\u4E00-\u9FFF\u3040-\u30FF\uAC00-\uD7AF\u0400-\u04FF\u0600-\u06FF\u0590-\u05FF\u0370-\u03FF]/;

// Palabras inglesas de CONTENIDO, sin equivalente espanol. Significativo.
// Se descartan a proposito los funcionamientos (the, and, with, from) porque
// aparecen legitimamente en los titulos de las fuentes citadas: "An Inquiry into
// the Nature and Causes of the Wealth of Nations", "Anarchy, State, and Utopia".
// Esos titulos no se traducen, asi que detectarlos seria un falso positivo garantizado.
//
// Tampoco los topónimos, y esto se comprobo empiricamente el 2026-09-27: anadir
// /\bFrance\b/ marco 7 lineas legitimas de js/data, todas correctas:
//   - titulo frances citado: 'La droite en France de 1815 a nos jours'
//   - editorial: 'Presses universitaires de France, Paris'
//   - partido: 'La France insoumise'
//   - empresa: 'France Telecom'
// Un toponimo pertenece al nombre propio, no a la prosa: traducirlo seria un
// error, no una correccion. /\bAfghanistan\b/ seria peor en este repositorio,
// porque las fuentes sobre la guerra de Afganistán son en ingles y las citas no
// se traducen. La regla sigue siendo: solo palabras inglesas de CONTENIDO sin
// equivalente espanol, y solo si de verdad aparecieron en prosa espanola real.
const ENGLISH = [/\bweakness\b/, /\bsupervising\b/, /\btastes\b/, /\boffshoot\b/, /\bprogrammatically\b/, /\bshallow\b/, /\bheadcount\b/, /\brollback\b/,
  // Anadidos 2026-09-27 tras la auditoria: todos aparecieron en prosa espanola real.
  /\bpeaceful\b/, /\bmembers?\b/, /\binstitutions\b/, /\bstatistics\b/, /\brestraint\b/, /\brestrainer\b/,
  /\bricher\b/, /\bmerging\b/, /\boffshore\b/, /\bgrassroots\b/, /\bholdings\b/, /\blabour\b/,
  /\blawmakers?\b/, /\belectorate\b/];

const PARTY_SECTIONS = ['ideologia', 'historia', 'practica', 'criticas', 'interno'];
const GEO_SECTIONS = ['panorama', 'actores', 'dimensiones', 'desbordamientos', 'perspectivas'];
// Vocabulario real observado en los ficheros. Ningun contrato enumera los tipos
// permitidos: CONTRACT.md solo muestra type:'libro' como ejemplo. La lista siguiente
// sale de probe-ground-truth.js, no de una regla inventada.
const REF_TYPES = [
  'libro', 'enciclopedia', 'documento', 'articulo',
  'informe', 'ley', 'web', 'dato'
];

function loadEntry(file) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: file, timeout: 5000 });
  const PW = sandbox.window.PW;
  if (!PW) return { error: 'no se ha definido window.PW' };
  // Las fichas nuevas pre-inicializan los 7 shells de window.PW, asi que el
  // primer bucket truthy puede ser un shell vacio ({ parties: {} }). Hay que
  // elegir el primer bucket CON entradas, no el primer bucket definido.
  const BUCKET_ORDER = ['parties', 'geo', 'orgs', 'gobiernos', 'pensadores', 'conceptos', 'articles'];
  const bucket = BUCKET_ORDER.map((k) => PW[k]).find((b) => b && Object.keys(b).length);
  if (!bucket) return { error: 'no hay registro de articulos' };
  const keys = Object.keys(bucket);
  if (!keys.length) return { error: 'registro vacio' };
  return { entry: bucket[keys[0]] };
}

function proseProblems(text, out, allowForeign) {
  if (typeof text !== 'string' || !text) return;
  const bad = text.match(NON_LATIN);
  if (bad) {
    const uniq = [...new Set(bad)].slice(0, 6)
      .map((c) => 'U+' + c.codePointAt(0).toString(16).toUpperCase().padStart(4, '0'));
    out.push('no-latino(' + bad.length + (uniq.length ? ':' + uniq.join(',') : '') + ')');
  }
  if (allowForeign) return;
  for (const re of ENGLISH) {
    if (re.test(text)) out.push('ingles-' + re.source.replace(/[\\b^$]/g, ''));
  }
  // Participios ingleses en -ing, la firma de la contaminacion de este proyecto
  // ("que leaving en 2021"). El espanol no los usa como verbo. Se exige distincion
  // de mayusculas para no marcar nombres propios como "Beijing" o "Peking".
  const ing = text.match(/\b[a-z]{3,}ing\b/g);
  if (ing) out.push('ingles-ing:' + [...new Set(ing)].slice(0, 3).join(','));
  // camelCase real: minuscula->Mayuscula en inicio de palabra. El lookbehind
  // descarta los nombres propios, donde la transicion va precedida de otra letra
  // (MacArthur -> "cA" con 'a' delante). Asi "aFeatures" salta y "MacArthur" no.
  if (/(?<![A-Za-zÀ-Þ])[a-zà-ÿáéíóúñ][A-ZÀ-Þ][a-zà-ÿ]/.test(text)) out.push('camelCase');
  if (/\]\(x\)/.test(text) || /\[\|/.test(text)) out.push('enlace-roto');
  if (/&[a-z]+;/.test(text)) out.push('entidad-html');
}

function auditFile(file, domain) {
  const problems = [];
  let loaded;
  try {
    loaded = loadEntry(file);
  } catch (err) {
    return { syntaxError: String(err.message).slice(0, 80) };
  }
  if (loaded.error) return { syntaxError: loaded.error };
  const e = loaded.entry;
  if (!e || typeof e !== 'object') return { syntaxError: 'entrada no es un objeto' };

  // 'kind' NO es obligatorio en ideologia ni organizacion: CONTRACT.md no lo lista
  // entre los campos obligatorios y render.js lo normaliza en caliente
  // (render.js:282). Exigirlo aqui producia 31 falsos positivos.
  for (const field of ['slug', 'updated', 'summary']) {
    if (!e[field]) problems.push('falta-' + field);
  }
  // En los dominios nuevos si es obligatorio, y ademas con el valor exacto.
  if (domain.key === 'partido' || domain.key === 'geopolitica') {
    if (e.kind !== domain.key) problems.push('kind-incorrecto:' + String(e.kind));
  }
  if (domain.key === 'partido') {
    for (const f of ['name', 'shortName', 'country', 'countryCode', 'founded', 'headquarters', 'leader', 'ideologyLabel', 'inGovernment']) {
      if (e[f] === undefined || e[f] === '') problems.push('falta-' + f);
    }
    if (!Array.isArray(e.ideology) || e.ideology.length < 2) problems.push('ideology-corta');
    if (!Array.isArray(e.colors) || !e.colors.length) problems.push('sin-colores');
  }

  proseProblems(e.summary, problems, false);
  proseProblems(e.subtitle, problems, false);

  const secs = Array.isArray(e.sections) ? e.sections : [];
  if (!secs.length) problems.push('sin-secciones');
  const expected = domain.key === 'partido' ? PARTY_SECTIONS
    : domain.key === 'geopolitica' ? GEO_SECTIONS : null;
  if (expected) {
    const ids = secs.map((s) => s.id);
    for (let i = 0; i < expected.length; i++) {
      if (ids[i] !== expected[i]) {
        problems.push('seccion-orden-esperaba-' + expected[i] + '-pos-' + i + '-hay-' + (ids[i] || 'nada'));
        break;
      }
    }
  }

  let blocks = 0;
  for (const s of secs) {
    for (const b of (s.blocks || [])) {
      blocks++;
      if (b.type === 'ul' && Array.isArray(b.items)) {
        for (const it of b.items) proseProblems(it, problems, false);
      } else if (b.type === 'quote') {
        proseProblems(b.text, problems, true);
        if (b.cite) proseProblems(b.cite, problems, true);
      } else {
        proseProblems(b.text, problems, false);
      }
    }
  }
  if (blocks < 15) problems.push('pocos-bloques(' + blocks + ')');

  const refs = Array.isArray(e.references) ? e.references : [];
  if (refs.length < 5) problems.push('pocas-referencias(' + refs.length + ')');
  for (const r of refs) {
    if (typeof r.year !== 'number') problems.push('year-no-numerico');
    // 'url' es opcional: laMayoria de las referencias reales no la traen
    // (ideologias 102 sin url frente a 48 con url). Solo se valida si existe.
    if (r.url !== undefined && !/^https?:\/\//.test(r.url)) problems.push('url-invalida');
    if (r.type !== undefined && !REF_TYPES.includes(r.type)) problems.push('type-invalido:' + r.type);
    if (r.title) proseProblems(r.title, problems, true);
  }

  return { problems: [...new Set(problems)], blocks, refs: refs.length };
}

function expectedSlugs() {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const out = {};
  for (const d of DOMAINS) {
    const re = new RegExp('js/data/' + (d.prefix || '') + '([a-z0-9-]+)\\.js', 'g');
    const set = new Set();
    let m;
    while ((m = re.exec(html)) !== null) set.add(m[1]);
    out[d.key] = [...set];
  }
  return out;
}

const expected = expectedSlugs();
console.log('=== RESUMEN POR DOMINIO ===');
let gTotal = 0, gClean = 0;
for (const d of DOMAINS) {
  const slugs = expected[d.key];
  let exists = 0, parsed = 0, clean = 0;
  for (const s of slugs) {
    const file = path.join(ROOT, d.dir, s + '.js');
    if (!fs.existsSync(file)) continue;
    exists++;
    const r = auditFile(file, d);
    if (!r.syntaxError) { parsed++; if (!r.problems.length) clean++; }
  }
  gTotal += slugs.length; gClean += clean;
  console.log(
    (clean === slugs.length ? 'OK   ' : 'PEND ') + d.label.padEnd(13) +
    ' catalogo=' + String(slugs.length).padStart(2) +
    ' en_disco=' + String(exists).padStart(2) +
    ' parsean=' + String(parsed).padStart(2) +
    ' limpios=' + String(clean).padStart(2)
  );
}

console.log('\n=== PENDIENTES ===');
let n = 0;
for (const d of DOMAINS) {
  for (const s of expected[d.key]) {
    const file = path.join(ROOT, d.dir, s + '.js');
    if (!fs.existsSync(file)) { console.log('  FALTA   ' + d.label.padEnd(13) + s); n++; continue; }
    const r = auditFile(file, d);
    if (r.syntaxError) { console.log('  SINTAXIS ' + d.label.padEnd(13) + s + ' :: ' + r.syntaxError); n++; continue; }
    if (r.problems.length) { console.log('  DANO     ' + d.label.padEnd(13) + s + ' :: ' + r.problems.join(', ')); n++; }
  }
}
console.log('\n=== TOTAL ===');
console.log('catalogo: ' + gTotal + '   limpios: ' + gClean + '   pendientes: ' + (gTotal - gClean));
