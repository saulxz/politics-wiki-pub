// Integridad de referencias cruzadas. Replica EXACTAMENTE la resolucion de
// render.js (splitPrefix + getIn + find) en vez de suponerla, para no marcar
// como roto lo que el navegador si resuelve.
//
//   render.js:899  var target = parsed.kind ? getIn(...) : find(...)
//   find()        ideologia, partido, gobierno, geopolitica, organizacion,
//                 pensador, concepto  (en ese orden)
//   getIn()       clave exacta -> slug plano -> slug o titulo plegados
//
// Regla de CONTRACT.md: "Todos los related deben existir como slug en el proyecto".
//
// Uso: node linkcheck.js
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const ROOT = require('path').join(__dirname, '..');

// Mismo orden que KINDS en render.js: define la precedencia de find().
const KINDS = ['ideologia', 'partido', 'gobierno', 'geopolitica', 'organizacion', 'pensador', 'concepto'];

const DIRS = {
  ideologia: 'js/data',
  partido: 'js/data/parties',
  gobierno: 'js/data/gobiernos',
  geopolitica: 'js/data/geo',
  organizacion: 'js/data/orgs',
  pensador: 'js/data/pensadores',
  concepto: 'js/data/conceptos'
};

// ALIASES de render.js (foldText -> kind). Sin prefijo => find() en los siete.
const ALIASES = {
  ideologia: 'ideologia', ideology: 'ideologia', article: 'ideologia', articles: 'ideologia',
  partido: 'partido', parties: 'partido', party: 'partido',
  gob: 'gobierno', gobierno: 'gobierno', gobiernos: 'gobierno', gov: 'gobierno',
  government: 'gobierno', governments: 'gobierno', estado: 'gobierno', estados: 'gobierno',
  state: 'gobierno', states: 'gobierno', pais: 'gobierno', paises: 'gobierno',
  country: 'gobierno', countries: 'gobierno',
  geo: 'geopolitica', geopolitica: 'geopolitica', geopolitics: 'geopolitica',
  org: 'organizacion', organizacion: 'organizacion', orgs: 'organizacion', organization: 'organizacion',
  pensador: 'pensador', pensadores: 'pensador', thinker: 'pensador',
  concepto: 'concepto', conceptos: 'concepto', concept: 'concepto'
};

// Slugs que todavia no estan en disco porque los esta escribiendo un agente.
// No son errores: se resolveran cuando el agente aterrice.
// Catalogo completo (65/65): este conjunto va vacio a proposito. Cualquier slug
// que se dejase aqui convertiria una referencia realmente rota en un
// "pendiente" y ocultaria el fallo, que es justo lo que hacia antes.
const EN_VUELO = new Set([]);

function foldText(s) {
  return String(s === null || s === undefined ? '' : s)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function slugify(s) {
  return foldText(s)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// --- carga de las entradas -------------------------------------------------
const store = {};   // kind -> { slug: entry }
const broken = [];

for (const kind of KINDS) {
  store[kind] = {};
  const dir = path.join(ROOT, DIRS[kind]);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.js'))) {
    const file = path.join(dir, f);
    const slug = f.replace(/\.js$/, '');
    const sandbox = { window: {} };
    try {
      vm.createContext(sandbox);
      vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: file, timeout: 5000 });
    } catch (err) {
      broken.push({ kind, slug, type: 'SINTAXIS', detail: String(err.message).slice(0, 70) });
      continue;
    }
    const PW = sandbox.window.PW;
    // Las fichas nuevas pre-inicializan los 7 shells de window.PW, asi que el
    // primer bucket truthy puede ser un shell vacio ({ parties: {} }). Hay que
    // elegir el primer bucket CON entradas, no el primer bucket definido.
    const BUCKET_ORDER = ['parties', 'geo', 'orgs', 'gobiernos', 'pensadores', 'conceptos', 'articles'];
    const bucket = PW && BUCKET_ORDER.map((k) => PW[k]).find((b) => b && Object.keys(b).length);
    if (!bucket) {
      broken.push({ kind, slug, type: 'CARGA', detail: 'no se registro ninguna entrada' });
      continue;
    }
    const e = Object.values(bucket)[0];
    e.slug = e.slug || slug;
    store[kind][e.slug] = e;
    // El nombre del fichero tambien es clave valida: los agentes lo usan.
    if (e.slug !== slug) { store[kind][slug] = e; }
  }
}

// --- resolucion identica a render.js ---------------------------------------
// `slug#ancla`: el destino se resuelve por la parte anterior al `#` y el
// fragmento se comprueba aparte contra los `sections` de la entrada, que es
// exactamente lo que hacen `splitPrefix()` y `wikilinkHtml()` en render.js.
// El prefijo de dominio va antes de los dos puntos, nunca antes del `#`, así
// que `gob:espana#sr-x` da prefix `gob` y base `espana`, no base `espana#sr-x`.
function splitPrefix(raw) {
  const key = String(raw === null || raw === undefined ? '' : raw).trim();
  const cut = key.indexOf(':');
  const rest = cut > 0 ? key.slice(cut + 1).trim() : key;
  const hash = rest.indexOf('#');
  const base = hash >= 0 ? rest.slice(0, hash).trim() : rest;
  const anchor = hash >= 0 ? rest.slice(hash + 1).trim() : '';
  if (cut <= 0) { return { kind: null, base, anchor }; }
  const kind = ALIASES[foldText(key.slice(0, cut))];
  return kind ? { kind, base, anchor } : { kind: null, base, anchor };
}

function getIn(kind, slug) {
  if (!slug) { return null; }
  const s = store[kind] || {};
  if (s[slug]) { return { kind, slug, entry: s[slug] }; }
  const flat = slugify(slug);
  if (flat && s[flat]) { return { kind, slug, entry: s[flat] }; }
  const folded = foldText(slug);
  for (const key of Object.keys(s)) {
    const e = s[key];
    if (foldText(e.slug) === folded || foldText(e.title) === folded) {
      return { kind, slug, entry: e };
    }
  }
  return null;
}

function find(slug) {
  for (const kind of KINDS) {
    const hit = getIn(kind, slug);
    if (hit) { return hit; }
  }
  return null;
}

function resolve(target) {
  const parsed = splitPrefix(target);
  return parsed.kind ? getIn(parsed.kind, parsed.base) : find(parsed.base);
}

// Replica `hasSection()` de render.js: el `id` que se pone en el `href` es el
// que lleva el `<h2>` de la seccion, asi que un ancla que no exista lleva a un
// fragmento que no esta en el documento.
function hasSection(entry, id) {
  const sections = entry && Array.isArray(entry.sections) ? entry.sections : [];
  return sections.some((s) => s && s.id !== undefined && String(s.id) === id);
}

// Wikilink con ancla: separa los dos fallos para informar de cada uno como lo
// que es. `DESTINO` es el enlace roto de siempre; `ANCLA` es un destino que
// existe pero cuya seccion no, que es lo que render.js dibuja tambien como
// `pw-wikilink-missing` avisando por consola.
function resolveLink(target) {
  const parsed = splitPrefix(target);
  const hit = parsed.kind ? getIn(parsed.kind, parsed.base) : find(parsed.base);
  if (!hit) { return { hit: null, problem: 'DESTINO', anchor: '' }; }
  if (parsed.anchor && !hasSection(hit.entry, parsed.anchor)) {
    return { hit, problem: 'ANCLA', anchor: parsed.anchor };
  }
  return { hit, problem: null, anchor: parsed.anchor };
}

// Canonicaliza un destino para poder consultarlo en EN_VUELO. `bare` es el
// destino sin la etiqueta del wikilink ("geo:x|y" -> "geo:x") y sin el ancla
// ("gob:espana#sr-x" -> "gob:espana"), que es el slug que puede estar volando.
function canonical(target) {
  const parsed = splitPrefix(target);
  if (parsed.kind) { return parsed.kind + ':' + parsed.base; }
  for (const kind of KINDS) {
    if (store[kind][parsed.base]) { return kind + ':' + parsed.base; }
  }
  // Aun no existe: puede estar en vuelo bajo cualquier dominio.
  for (const key of EN_VUELO) {
    if (key.slice(key.indexOf(':') + 1) === parsed.base) { return key; }
  }
  return parsed.base;
}

// --- recorrido de related y wikilinks --------------------------------------
const pending = [];
const real = [];
let nRelated = 0;
let nLinks = 0;

function textsOf(e) {
  const out = [];
  const push = (v) => { if (typeof v === 'string') { out.push(v); } };
  push(e.summary);
  push(e.subtitle);
  for (const s of (e.sections || [])) {
    for (const b of (s.blocks || [])) {
      if (b.type === 'ul' && Array.isArray(b.items)) { b.items.forEach(push); }
      if (b.type === 'dl' && Array.isArray(b.items)) {
        for (const it of b.items) { if (Array.isArray(it)) { it.forEach(push); } }
      }
      push(b.text);
      push(b.caption);
      if (Array.isArray(b.rows)) { for (const row of b.rows) { if (Array.isArray(row)) { row.forEach(push); } } }
    }
  }
  if (e.infobox && Array.isArray(e.infobox.rows)) {
    for (const row of e.infobox.rows) { if (Array.isArray(row)) { row.forEach(push); } }
  }
  return out;
}

function report(kind, slug, type, detail, bare) {
  // Para clasificar y para deduplicar se usa el destino SIN etiqueta
  // ("geo:x|y" -> "geo:x"); para mostrar, el texto entero del wikilink.
  const target = bare === undefined ? detail : bare;
  const rec = { kind, slug, type, detail, bare: target };
  if (EN_VUELO.has(canonical(target))) { pending.push(rec); } else { real.push(rec); }
}

for (const kind of KINDS) {
  for (const slug of Object.keys(store[kind])) {
    const e = store[kind][slug];
    for (const r of (Array.isArray(e.related) ? e.related : [])) {
      nRelated++;
      // `related` son slugs: render.js los resuelve por `base` e ignora
      // cualquier ancla, asi que aqui no se comprueba.
      if (!resolve(r)) { report(kind, slug, 'RELATED', String(r)); }
    }
    for (const t of textsOf(e)) {
      const re = /\[\[([^\]]+)\]\]/g;
      let m;
      while ((m = re.exec(t)) !== null) {
        nLinks++;
        const target = m[1].split('|')[0];
        const r = resolveLink(target);
        if (r.problem === 'ANCLA') {
          report(kind, slug, 'ANCLA', m[1] + ' -> seccion inexistente \'' + r.anchor + '\'', target);
        } else if (r.problem) {
          report(kind, slug, 'WIKILINK', m[1], target);
        }
      }
    }
  }
}

const total = KINDS.reduce((n, k) => n + Object.keys(store[k]).length, 0);
console.log('entradas cargadas: ' + total);
console.log('related comprobados: ' + nRelated + '   wikilinks comprobados: ' + nLinks);
console.log('');

if (broken.length) {
  console.log('=== ENTRADAS QUE NO CARGAN (' + broken.length + ') ===');
  for (const b of broken) { console.log('  ' + b.kind + '/' + b.slug + '  ->  ' + b.type + ': ' + b.detail); }
  console.log('');
}

if (!real.length) {
  console.log('>>> 0 REFERENCIAS ROTAS REALES <<<');
} else {
  console.log('=== REFERENCIAS ROTAS REALES (' + real.length + ') ===');
  for (const r of real) { console.log('  ' + r.kind + '/' + r.slug + '  ->  ' + r.type + ': ' + r.detail); }
  console.log('');
}

const uniq = [...new Set(pending.map((p) => canonical(p.bare)))].sort();
console.log('referencias pendientes de agentes en vuelo (' + uniq.length + ' destinos):');
for (const u of uniq) {
  console.log('  ' + u + '   <- ' + pending.filter((p) => canonical(p.bare) === u).length + ' referencia(s)');
}
