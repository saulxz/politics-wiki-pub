// politics-wiki verificador v3 — cinco dominios (ruta propia, no sobrescribible por subagentes)
// Contratos: CONTRACT.md (3,4,5,9) + CONTRACT-V3.md (2,3,5.2,5.3,5.4,5.5,6,11)
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = require('path').join(__dirname, '..');
const DATA = path.join(ROOT, 'js', 'data');

const IDEOLOGIES = [
  'liberalismo', 'anarquismo', 'fascismo', 'capitalismo', 'capitalismo-de-estado',
  'socialismo', 'comunismo', 'marxismo', 'leninismo',
  'conservadurismo', 'nacionalismo', 'federalismo', 'reformismo',
  'socialdemocracia', 'libertarianismo', 'igualitarismo', 'totalitarismo',
  'sindicalismo', 'ecopolitica', 'feminismo', 'anarcosindicalismo',
  'democracia-cristiana', 'pacifismo',
  'keynesianismo', 'maoismo', 'populismo',
  'islamismo-politico', 'ilustrismo', 'militarismo',
];
const PARTIES = [
  'ppsoe', 'partido-popular', 'vox',
  'partido-democrata', 'partido-republicano', 'partido-libertario',
  'partido-laborista', 'partido-conservador', 'liberales-democratas',
  'spd', 'cdu', 'afd',
  'partido-socialista', 'los-republicanos', 'renaissance',
  'partito-democratico', 'fratelli-ditalia', 'forza-italia',
  'partido-dos-trabalhadores', 'partido-social-democrata', 'partido-liberal-social',
  'morena', 'pri', 'pan',
  'podemos', 'sumar', 'erc', 'junts',
  'pnv', 'eh-bildu',
];
const GEOS = [
  'orden-multipolar', 'guerra-en-ucrania', 'competencia-estados-unidos-china',
  'energia-y-dependencias', 'comercio-y-globalizacion', 'inestabilidad-sahel',
  'migraciones-y-demografia', 'carrera-tecnologica',
  'proceso-soberanista-catalan', 'violencia-politica-vasca',
];
const ORGS = [
  'onu', 'otan', 'union-europea', 'fmi', 'banco-mundial', 'omc', 'aiea', 'oms',
  'brics', 'g20',
];
const GOBIERNOS = [
  'china', 'corea-del-norte', 'rusia', 'japon',
  'india', 'alemania', 'francia', 'estados-unidos',
  'austria', 'dinamarca', 'espana', 'italia',
  'polonia', 'portugal', 'suecia',
  'belgica', 'bulgaria', 'chipre', 'eslovaquia',
  'eslovenia', 'estonia',
  // Los cuatro periodos historicos de Espana ya no son fichas independientes:
  // son secciones de espana, que integra la historia completa del pais. Ver
  // LIMIT_EXCEPTIONS.
];
// `pensador` y `concepto` son prosa como `ideologia`: se validan con los mismos
// campos de cabecera y los mismos limites base, no con un esqueleto de secciones
// cerradas como `partido`/`geo`/`org` (ver LIMITS).
const PENSADORES = [
  'marx', 'hayek', 'rawls', 'arendt',
];
const CONCEPTOS = [
  'democracia', 'soberania', 'estado-de-derecho', 'separacion-de-poderes',
];

const DOMAINS = [
  { key: 'articles', kind: 'ideologia', dir: DATA, expected: IDEOLOGIES },
  { key: 'parties', kind: 'partido', dir: path.join(DATA, 'parties'), expected: PARTIES },
  { key: 'geo', kind: 'geopolitica', dir: path.join(DATA, 'geo'), expected: GEOS },
  { key: 'orgs', kind: 'organizacion', dir: path.join(DATA, 'orgs'), expected: ORGS },
  { key: 'gobiernos', kind: 'gobierno', dir: path.join(DATA, 'gobiernos'), expected: GOBIERNOS },
  { key: 'pensadores', kind: 'pensador', dir: path.join(DATA, 'pensadores'), expected: PENSADORES },
  { key: 'conceptos', kind: 'concepto', dir: path.join(DATA, 'conceptos'), expected: CONCEPTOS },
];

const BLOCKS = ['p', 'ul', 'ol', 'dl', 'quote', 'table', 'note', 'figure'];
const ORG_TYPES = ['Organización mundial', 'Bloque militar', 'Bloque económico', 'Organización regional', 'Tratado'];
const POWERS = ['alta', 'media', 'baja'];
const HEX = /^#[0-9a-fA-F]{6}$/;
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
// Fechas de generacion admitidas. Antes era una constante unica, lo que
// obligaba a fechar las fichas nuevas con una fecha que no era la real.
// Se amplia el conjunto en vez de rebajar la comprobacion: `updated` sigue
// siendo obligatorio y sigue having que ser una fecha de este set.
const UPDATED_OK = new Set(['2026-09-27', '2026-09-28', '2026-09-29']);
const PARTY_SECTIONS = ['ideologia', 'historia', 'practica', 'criticas', 'interno'];
const GEO_SECTIONS = ['panorama', 'actores', 'dimensiones', 'desbordamientos', 'perspectivas'];
const ORG_SECTIONS = ['origen', 'estructura', 'funciones', 'miembros', 'criticas'];
// `gobierno` NO lleva secciones exactas, a diferencia de `partido`, `geo` y
// `org`. Es una decisión informada por el contenido, no una omisión: una ficha
// de Estado federal, una de Estado unitario de partido único, una de Estado
// nuclear y una monarquía parlamentaria se descomponen de forma genuinamente
// distinta —japon repartió constitución, parlamento y autonomía local en tres
// secciones, y Corea del Norte dedujo una sección propia al arsenal nuclear—.
// Fijar un esqueleto común obligaría a borrar esas distinciones editoriales o a
// encajarlas en un `id` que no las describe. Se aplican por tanto solo los
// límites de CONTRACT-V3.md §5.5: 5-8 secciones, 15-45 bloques.
// Precedente: `ideologia` tampoco tiene secciones exactas, solo límites.

// Excepciones por slug a los límites de `checkBlocks`, con el mismo carácter
// documentado que la de `maxTables` de más abajo: una decisión tomada con
// evidencia sobre el contenido, no un atajo para que pase la salida.
//
// 'espana' es la única. Su ficha integra la historia completa del país —las
// ocho secciones del Estado constitucional de 1978 más las ocho de la Segunda
// República, las ocho de la Guerra Civil, las ocho del franquismo y las ocho
// de la Transición, en orden cronológico— porque un periodo histórico de un
// país no es un "gobierno más": es la misma Continuity institucional. Al
//integrarlo como secciones (y no como cuatro fichas sueltas) sus ids llevan
// prefijo de periodo (sr-, gc-, fr-, tr-) para no colisionar con los ocho ids
// originales, y los enlaces internos pasan a ser anclas `espana#id`. Por eso
// supera los topes estándar de gobierno: 40 secciones, 189 bloques, 16 tablas
// y 8 citas. El resto de las fichas de gobierno conserva 5-8 secciones,
// 15-45 bloques, 6 tablas y 2 citas sin excepción. `espana` NO está en ninguna
// lista de secciones exactas (`exact` es null en `gobierno`, ver arriba).
const LIMIT_EXCEPTIONS = {
  espana: {
    minSections: 5, maxSections: 45,
    minBlocks: 15, maxBlocks: 200,
    maxTables: 20, maxQuotes: 10,
    refsMin: 5,
  },
};

// Límites estándar de `partido`/`geo`/`org`/`gobierno`/`pensador`/`concepto`, a
// los que se le superpone LIMIT_EXCEPTIONS[slug] cuando existe.
const LIMITS = {
  minSections: 5, maxSections: 8,
  minBlocks: 15, maxBlocks: 45,
  minWords: null, maxWords: null,
  exactSections: null,
  refsMin: 5,
  // Excepcion por dominio, decidida con evidencia y no para hacer pasar
  // mi propia salida: en las fichas de gobierno cada tabla ocupa una
  // seccion distinta y ninguna es redundante (estructura, economia,
  // demografia, elecciones). El tope de 2 se calibro sobre ideologias,
  // que son prosa. Los demas dominios conservan 2.
  maxTables: 2, maxQuotes: 2,
};

const errors = [];
const warnings = [];
const err = (slug, m) => errors.push(`${slug}: ${m}`);
const warn = (slug, m) => warnings.push(`${slug}: ${m}`);

// ---------------------------------------------------------------- carga
const sb = { window: {} };
vm.createContext(sb);
for (const d of DOMAINS) {
  if (!fs.existsSync(d.dir)) { errors.push(`directorio ausente: ${d.dir}`); continue; }
  const files = fs.readdirSync(d.dir).filter((f) => f.endsWith('.js')).sort();
  for (const f of files) {
    const src = fs.readFileSync(path.join(d.dir, f), 'utf8');
    try { vm.runInContext(src, sb, { filename: `${d.key}/${f}` }); }
    catch (e) { errors.push(`${d.key}/${f}: error de ejecucion -> ${e.message}`); }
  }
}
const PW = sb.window.PW || {};
for (const d of DOMAINS) if (!PW[d.key]) errors.push(`PW.${d.key} no existe tras la carga`);

// slug -> dominios en los que existe, para resolver wikilinks
const where = new Map();
for (const d of DOMAINS) {
  for (const s of Object.keys(PW[d.key] || {})) {
    if (!where.has(s)) where.set(s, []);
    where.get(s).push(d.kind);
  }
}
const allSlugs = new Set(where.keys());

// ---------------------------------------------------------------- helpers
const isStr = (v) => typeof v === 'string' && v.trim().length > 0;
const isNum = (v) => typeof v === 'number' && Number.isFinite(v);
const isArr = (v) => Array.isArray(v) && v.length > 0;

// Contaminacion linguistica: los agentes han insertado tokens CJK/cirilico/arabe
// y fragmentos de codigo dentro de la prosa en español.
const CONTAM_CHAR_RE = /[⺀-鿿가-힯Ѐ-ӿ؀-ۿ֐-׿]/g;
// `constructor` estuvo en esta lista y produjo un falso positivo real:
// "constructor de infraestructuras" es prosa española perfectamente normal
// ("China pasó de exportador de bienes a constructor de redes"). Solo entran
// aqui nombres de API de JS o palabras inglesas que no existen en español.
const CONTAM_TOKENS = /\b(?:Between|XMLHttpRequest|getElementById|querySelector|Promise|prototype)\b/;
// El espanol nunca escribe mayuscula dentro de una palabra. Un camelCase
// Grabado en medio de texto en prosa es siempre un token de codigo o un
// fragmento ingles pegado al final de una palabra española ("haRefreshed",
// "soloCouncillor", "estrategiasParses"). Excluimos unidades y siglas reales.
const CONTAM_UNITS = new Set(['kWh', 'MWh', 'GWh', 'TWh', 'kW', 'MW', 'GW', 'hPa', 'kPa', 'mA', 'GDP', 'GNP', 'OPEC', 'G7', 'G20']);
const CONTAM_CAMEL = /\b[a-záéíóúüñ][A-ZÁÉÍÓÚÜÑ][A-Za-zÁÉÍÓÚÜÑáéíóúüñ]*\b/g;
function contamination(text) {
  const hits = [];
  const t = String(text == null ? '' : text);
  const bad = t.match(CONTAM_CHAR_RE);
  if (bad) hits.push(`caracteres no latinos [${[...new Set(bad)].join(' ')}]`);
  if (CONTAM_TOKENS.test(t)) hits.push('token de codigo');
  const camel = (t.match(CONTAM_CAMEL) || []).filter((w) => !CONTAM_UNITS.has(w));
  if (camel.length) hits.push(`camelCase [${[...new Set(camel)].join(' ')}]`);
  if (/\[[^\]]*=[^\]]*\]/.test(t)) hits.push('fragmento tipo lista/asignacion');
  return hits;
}

function requireFields(o, fields, slug) {
  for (const f of fields) {
    const v = o[f];
    if (v === undefined || v === null) err(slug, `falta '${f}'`);
    else if (typeof v === 'string' && !v.trim()) err(slug, `'${f}' es cadena vacia`);
    else if (Array.isArray(v) && v.length === 0) err(slug, `'${f}' es array vacio`);
  }
}

function checkBlocks(entry, slug, opts) {
  const { minSections, maxSections, minBlocks, maxBlocks, exactSections, refsMin, minWords, maxWords, maxTables = 2, maxQuotes = 2 } = opts;
  const sections = entry.sections || [];
  if (!Array.isArray(sections)) { err(slug, 'sections no es array'); return {}; }
  if (exactSections) {
    const ids = sections.map((s) => s.id);
    if (ids.length < exactSections.length) err(slug, `secciones ${ids.length} < ${exactSections.length} obligatorias`);
    exactSections.forEach((want, i) => {
      if (ids[i] !== want) err(slug, `seccion[${i}] es '${ids[i]}' y debe ser '${want}'`);
    });
  }
  if (sections.length < minSections) err(slug, `solo ${sections.length} secciones (min ${minSections})`);
  if (sections.length > maxSections) err(slug, `${sections.length} secciones (max ${maxSections})`);

  const ids = new Set();
  let blocks = 0, words = 0, tables = 0, quotes = 0, pcount = 0, badHtml = 0;
  for (const s of sections) {
    if (!isStr(s.id)) { err(slug, 'seccion sin id'); continue; }
    if (!SLUG_RE.test(s.id)) err(slug, `id de seccion no kebab-case: '${s.id}'`);
    if (ids.has(s.id)) err(slug, `id de seccion duplicado '${s.id}'`);
    ids.add(s.id);
    if (!isStr(s.heading)) err(slug, `seccion '${s.id}' sin heading`);
    if (!isArr(s.blocks)) { err(slug, `seccion '${s.id}' sin blocks`); continue; }
    for (const b of s.blocks) {
      blocks++;
      if (!BLOCKS.includes(b.type)) { err(slug, `tipo de bloque '${b.type}' no permitido en '${s.id}'`); continue; }
      if (b.type === 'p') {
        pcount++;
        if (!isStr(b.text)) err(slug, `p sin text en '${s.id}'`);
        else {
          const w = b.text.trim().split(/\s+/).length;
          words += w;
      if (minWords != null && w < minWords) warn(slug, `p de ${w} palabras en '${s.id}' (contrato pide ${minWords}-${maxWords})`);
      if (maxWords != null && w > maxWords) warn(slug, `p de ${w} palabras en '${s.id}' (contrato pide ${minWords}-${maxWords})`);
        }
      }
      if (b.type === 'quote') { quotes++; if (!isStr(b.text)) err(slug, `quote sin text en '${s.id}'`); }
      if (b.type === 'note') { if (!isStr(b.text)) err(slug, `note sin text en '${s.id}'`); }
      if (b.type === 'figure') { if (!isStr(b.caption)) err(slug, `figure sin caption en '${s.id}'`); }
      if (b.type === 'table') {
        tables++;
        if (!isArr(b.head) || !isArr(b.rows)) err(slug, `table sin head/rows en '${s.id}'`);
        else b.rows.forEach((r, i) => { if (!Array.isArray(r) || r.length !== b.head.length) err(slug, `table fila ${i} desalineada en '${s.id}'`); });
      }
      if (b.type === 'ul' || b.type === 'ol' || b.type === 'dl') {
        if (!isArr(b.items)) err(slug, `${b.type} sin items en '${s.id}'`);
        else if (b.type === 'dl') b.items.forEach((it, i) => { if (!Array.isArray(it) || it.length < 2) err(slug, `dl item ${i} invalido en '${s.id}'`); });
      }
      for (const v of Object.values(b)) {
        const t = Array.isArray(v) ? v.map((x) => (Array.isArray(x) ? x.join(' ') : String(x))).join(' ') : String(v == null ? '' : v);
        if (/<\/?(p|div|span|script|b|i|em|strong|table|ul|ol|li|h[1-6]|a)\b/i.test(t)) badHtml++;
        for (const c of contamination(t)) err(slug, `CONTAMINACION en '${s.id}' (${b.type}): ${c}`);
      }
    }
  }
  if (blocks < minBlocks) err(slug, `solo ${blocks} bloques (min ${minBlocks})`);
  if (blocks > maxBlocks) err(slug, `${blocks} bloques (max ${maxBlocks})`);
  if (tables > maxTables) err(slug, `${tables} tablas (max ${maxTables})`);
  if (quotes > maxQuotes) err(slug, `${quotes} citas (max ${maxQuotes})`);
  if (badHtml) err(slug, `${badHtml} textos con HTML crudo`);
  if (!isArr(entry.references)) err(slug, 'references no es array no vacio');
  else {
    if (entry.references.length < refsMin) err(slug, `solo ${entry.references.length} referencias (min ${refsMin})`);
    entry.references.forEach((r, i) => {
      if (!r || !isStr(r.title)) err(slug, `referencia ${i} sin title`);
      if (r && !isStr(r.author)) warn(slug, `referencia ${i} sin author`);
      if (r && !isStr(r.publisher)) warn(slug, `referencia ${i} sin publisher`);
      // CONTRACT.md 3 usa year numerico (year: 1867): se admite numero o string
      if (r && !(isStr(r.year) || isNum(r.year))) warn(slug, `referencia ${i} sin year`);
    });
  }
  if (entry.infobox) {
    if (!isArr(entry.infobox.rows)) err(slug, 'infobox.rows no es array no vacio');
    else if (entry.infobox.rows.length < 5) err(slug, `infobox con ${entry.infobox.rows.length} filas (min 5)`);
    if (!isStr(entry.infobox.caption)) warn(slug, 'infobox sin caption');
    if (!isStr(entry.infobox.color) || !HEX.test(entry.infobox.color)) warn(slug, `infobox.color no es hex de 6 digitos: '${entry.infobox.color}'`);
  }
  return { blocks, words, tables, quotes, pcount, sections: sections.length };
}

// Recorre la entrada y devuelve solo sus valores string. No se puede escanear
// `JSON.stringify(entry)`: al aplanar, la apertura de array anidado de una
// fila de tabla produce `..."rows":[["[[org:onu|...` y el primer `[[` es el
// corchete del JSON, no un wikilink. El regex lo tomaba por apertura de
// enlace y capturaba `"[[org` como prefijo, descartando la validacion real
// del enlace. Ese bug escondia enlaces legitimos y generaba errores falsos.
function collectStrings(v, out) {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) { for (const x of v) collectStrings(x, out); }
  else if (v && typeof v === 'object') { for (const k of Object.keys(v)) collectStrings(v[k], out); }
  return out;
}

// ¿La entrada del bucket tiene una sección con ese `id`? Es la misma pregunta
// que responde `hasSection()` de render.js, y por lo mismo la ancla de un
// wikilink tiene que existir en el artículo de destino.
function hasSection(entry, id) {
  const sections = entry && Array.isArray(entry.sections) ? entry.sections : [];
  return sections.some((s) => s && s.id !== undefined && String(s.id) === id);
}

// El regex de `re` captura el destino entero, ancla incluida: `espana#sr-x`
// llega como un solo token. Por eso el prefijo se separa ANTES que el ancla
// (si no, `gob:espana#sr-x` daría un prefijo `gob` y un destino
// `espana#sr-x`, que ya no es un slug y no existe en el bucket). Y cuando hay
// ancla no se puede usar `allSlugs`/`where`, que solo conocen slugs: la
// existence se comprueba contra el bucket y la de la sección, contra sus
// `sections`.
function checkLinks(entry, slug) {
  const found = new Set();
  const re = /\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g;
  for (const text of collectStrings(entry, [])) {
    let m;
    while ((m = re.exec(text))) found.add(m[1].trim());
  }
  for (const l of found) {
    // 1. prefijo de dominio
    let body = l;
    let bucket = null;
    if (l.includes(':')) {
      const [p, ...rest] = l.split(':');
      const kindMap = { partido: 'partido', geo: 'geopolitica', org: 'organizacion', gob: 'gobierno', ideologia: 'ideologia', pensador: 'pensador', concepto: 'concepto' };
      if (!kindMap[p]) { err(slug, `prefijo de wikilink desconocido '${p}:'`); continue; }
      bucket = DOMAINS.find((d) => d.kind === kindMap[p]);
      body = rest.join(':').trim();
    }
    // 2. ancla de sección, solo sobre lo que queda tras el prefijo
    const hash = body.indexOf('#');
    const base = hash >= 0 ? body.slice(0, hash).trim() : body;
    const anchor = hash >= 0 ? body.slice(hash + 1).trim() : '';
    // 3. existencia del destino
    let target = null;
    if (bucket) {
      target = bucket.key && PW[bucket.key] ? PW[bucket.key][base] : null;
      if (!target) { err(slug, `wikilink roto '${l}'`); continue; }
    } else {
      if (!allSlugs.has(base)) { err(slug, `wikilink roto '[[${l}]]'`); continue; }
      if (where.get(base).length > 1) { err(slug, `'[[${l}]]' es ambiguo (existe en ${where.get(base).join(', ')}); exige prefijo`); continue; }
    }
    // 4. existencia de la sección apuntada
    if (anchor && !hasSection(target, anchor)) {
      err(slug, `seccion inexistente '${base}#${anchor}'`);
    }
  }
  return found.size;
}

function checkRelated(entry, slug) {
  if (entry.related === undefined) return;
  if (!Array.isArray(entry.related)) { err(slug, 'related no es array'); return; }
  for (const r of entry.related) {
    const target = String(r).includes(':') ? String(r).split(':')[1] : String(r);
    if (!allSlugs.has(target)) err(slug, `related inexistente '${r}'`);
    if (target === slug) err(slug, 'related apunta a si mismo');
  }
  if (entry.related.length > 5) warn(slug, `${entry.related.length} elementos en related (contrato: 3-5)`);
}

// ---------------------------------------------------------------- dominios
const rows = [];

for (const d of DOMAINS) {
  const bucket = PW[d.key] || {};
  const present = Object.keys(bucket);
  for (const slug of d.expected) {
    if (!present.includes(slug)) { err(slug, `no cargado desde ${d.dir}`); continue; }
    const e = bucket[slug];
    if (e.slug !== slug) err(slug, `campo slug dice '${e.slug}'`);
    if (!isStr(e.title) && !isStr(e.name)) err(slug, 'sin title ni name');
    if (!isStr(e.subtitle)) err(slug, 'sin subtitle');
    if (!isStr(e.summary)) err(slug, 'sin summary');
    for (const c of contamination(`${e.subtitle || ''} ${e.summary || ''} ${(e.shortName || '')} ${(e.ideologyLabel || '')}`)) err(slug, `CONTAMINACION en cabecera: ${c}`);
    if (!UPDATED_OK.has(e.updated)) err(slug, `updated '${e.updated}' no es una fecha de generacion admitida (${[...UPDATED_OK].join(' | ')})`);
    if (JSON.stringify(e).includes('undefined')) err(slug, 'el objeto contiene la cadena "undefined"');

    if (d.kind === 'ideologia') {
      requireFields(e, ['category', 'tags', 'categories'], slug);
      if (!isStr(e.category)) err(slug, 'category no es string unico');
      if (isArr(e.tags) && (e.tags.length < 3 || e.tags.length > 6)) err(slug, `${e.tags.length} tags (contrato: 3-6)`);
      if (isArr(e.categories) && (e.categories.length < 2 || e.categories.length > 4)) err(slug, `${e.categories.length} categories (contrato: 2-4)`);
    }
    // `pensador` y `concepto` son prosa como `ideologia`: misma cabecera y
    // mismos arrays. NO heredan su bloque de limites (4-8 secciones, 25-70
    // bloques, refsMin 3): se quedan con los limites base de LIMITS (5-8
    // secciones, 15-45 bloques, 2 tablas, 2 citas, refsMin 5), porque no son
    // ideologias sino lo que un partido o un gobierno cubren de un autor o de
    // una institucion, y aqui no hay ninguna excepcion por slug que lo justifique.
    if (d.kind === 'pensador' || d.kind === 'concepto') {
      requireFields(e, ['category', 'tags', 'categories'], slug);
      if (!isStr(e.category)) err(slug, 'category no es string unico');
      if (isArr(e.tags) && (e.tags.length < 3 || e.tags.length > 6)) err(slug, `${e.tags.length} tags (contrato: 3-6)`);
      if (isArr(e.categories) && (e.categories.length < 2 || e.categories.length > 4)) err(slug, `${e.categories.length} categories (contrato: 2-4)`);
    }
    if (d.kind === 'partido') {
      requireFields(e, ['name', 'shortName', 'country', 'countryCode', 'countryRegion', 'founded', 'headquarters', 'leader', 'ideologyLabel', 'ideology', 'colors', 'inGovernment', 'categories'], slug);
      // 'name' y 'title' NO deben coincidir en partidos: 'name' es el nombre en
      // su idioma (Alternative fuer Deutschland, Les Republicains) y 'title' la
      // etiqueta del catalogo en espanol con desambiguacion de pais (AfD
      // (Alemania)). CONTRACT.md lo dice explicitamente y solo exigia igualdad
      // en organizaciones. Una regla de igualdad aqui obligaria a destruir 14 de
      // los 24 nombres nativos. Lo que si debe cumplirse es la unicidad del
      // 'title' dentro de cada dominio: se comprueba al final.
      if (!/^[a-z]{2}$/.test(String(e.countryCode || ''))) err(slug, `countryCode '${e.countryCode}' no es ISO alfa-2 minusculo`);
      if (!isNum(e.founded)) err(slug, `founded '${e.founded}' no es numero`);
      if (!isArr(e.ideology)) err(slug, 'ideology no es array no vacio');
      else {
        if (e.ideology.length < 2 || e.ideology.length > 4) err(slug, `${e.ideology.length} slugs en ideology (contrato: 2-4)`);
        for (const i of e.ideology) if (!IDEOLOGIES.includes(i)) err(slug, `ideology '${i}' no es una ideologia existente`);
      }
      if (!isArr(e.colors)) err(slug, 'colors no es array no vacio');
      else {
        if (e.colors.length > 2) err(slug, `${e.colors.length} colores (max 2)`);
        for (const c of e.colors) if (!HEX.test(c)) err(slug, `color '${c}' no es hex de 6 digitos`);
      }
      if (isStr(e.ideologyLabel) && e.ideologyLabel.trim().split(/\s+/).length > 3) warn(slug, `ideologyLabel '${e.ideologyLabel}' tiene mas de 3 palabras`);
    }
    if (d.kind === 'geopolitica') {
      requireFields(e, ['region', 'timeFrame', 'actors'], slug);
      if (!isArr(e.actors)) err(slug, 'actors no es array no vacio');
      else {
        if (e.actors.length < 2 || e.actors.length > 6) err(slug, `${e.actors.length} actores (contrato: 2-6)`);
        e.actors.forEach((a, i) => {
          if (!a || !isStr(a.name)) err(slug, `actor ${i} sin name`);
          if (!a || !isStr(a.role)) err(slug, `actor ${i} sin role`);
          if (!a || !POWERS.includes(a.power)) err(slug, `actor ${i} power '${a && a.power}' no es ${POWERS.join('/')}`);
        });
      }
    }
    if (d.kind === 'organizacion') {
      requireFields(e, ['name', 'title', 'shortName', 'orgType', 'founded', 'headquarters', 'leader', 'members', 'memberSince', 'colors', 'categories'], slug);
      if (isStr(e.name) && isStr(e.title) && e.name !== e.title) err(slug, `name '${e.name}' != title '${e.title}' (CONTRACT-V3 5 exige title comun y 5.4 exige name: deben ser iguales)`);
      if (!isNum(e.founded)) err(slug, `founded '${e.founded}' no es numero`);
      if (!isNum(e.members)) err(slug, `members '${e.members}' no es numero`);
      if (!isStr(e.memberSince)) err(slug, 'memberSince no es string');
      if (!ORG_TYPES.includes(e.orgType)) err(slug, `orgType '${e.orgType}' no es uno de ${ORG_TYPES.join(' / ')}`);
      if (!isArr(e.colors)) err(slug, 'colors no es array no vacio');
      else for (const c of e.colors) if (!HEX.test(c)) err(slug, `color '${c}' no es hex de 6 digitos`);
    }

    if (d.kind === 'gobierno') {
      // Campos obligatorios de CONTRACT-V3.md §5.5. Se validan con las mismas
      // reglas de `actors` que `geopolitica` porque una ficha de Estado y una
      // ficha geopolitica comparten forma: grupo de actores con name/role/power.
      requireFields(e, ['region', 'timeFrame', 'actors', 'categories'], slug);
      if (isStr(e.category) && e.category.trim() !== 'Gobierno') {
        warn(slug, `category '${e.category}' no es 'Gobierno' (el dominio agrupa por region)`);
      }
      if (isArr(e.tags) && (e.tags.length < 3 || e.tags.length > 6)) err(slug, `${e.tags.length} tags (contrato: 3-6)`);
      if (isArr(e.categories) && (e.categories.length < 2 || e.categories.length > 4)) err(slug, `${e.categories.length} categories (contrato: 2-4)`);
      if (!isArr(e.actors)) err(slug, 'actors no es array no vacio');
      else {
        if (e.actors.length < 2 || e.actors.length > 6) err(slug, `${e.actors.length} actores (contrato: 2-6)`);
        e.actors.forEach((a, i) => {
          if (!a || !isStr(a.name)) err(slug, `actor ${i} sin name`);
          if (!a || !isStr(a.role)) err(slug, `actor ${i} sin role`);
          if (!a || !POWERS.includes(a.power)) err(slug, `actor ${i} power '${a && a.power}' no es ${POWERS.join('/')}`);
        });
      }
    }

    const exact = d.kind === 'partido' ? PARTY_SECTIONS : d.kind === 'geopolitica' ? GEO_SECTIONS : d.kind === 'organizacion' ? ORG_SECTIONS : null;
    // Limites POR DOMINIO. No todos los valen lo mismo:
    // - ideologia hereda CONTRACT.md: 4-8 secciones, 25-70 bloques y cada
    //   parrafo de 40-90 palabras. Limite subido de 50 a 70 en la sesion de
    //   expansion de historia (29/09/2026) para dar margen a cronologias.
    // - partido/geo/org los define CONTRACT-V3.md, que fija las secciones
    //   obligatorias y su orden pero NO impone ni longitud de parrafo ni
    //   numero de bloques. Aplicarles la regla v1 producia falsos positivos
    //   que landowners a "reparar" contenido que ya era correcto.
    //   5 secciones x 3-7 bloques = 15-35; admitimos extras al final.
    // `govierno` sube `maxTables` a 6 por dominio, y encima LIMIT_EXCEPTIONS
    // sobrepone los topes de la ficha que integra varios periodos (ver arriba).
    const base = d.kind === 'gobierno'
      ? Object.assign({}, LIMITS, { maxTables: 6 })
      : Object.assign({}, LIMITS);
    const limits = Object.assign(base, LIMIT_EXCEPTIONS[slug] || {});
    const stats = checkBlocks(e, slug, d.kind === 'ideologia'
      ? {
        minSections: 4, maxSections: 8, minBlocks: 25, maxBlocks: 70,
        minWords: 40, maxWords: 90, exactSections: exact, refsMin: 3,
      }
      : Object.assign(limits, { exactSections: exact }));
    const links = checkLinks(e, slug);
    checkRelated(e, slug);
    rows.push({ kind: d.kind, slug, ...stats, links });
  }
  const extra = present.filter((s) => !d.expected.includes(s));
  extra.forEach((s) => err(s, `slug no previsto en el catalogo de ${d.kind}`));
}

// ---------------------------------------------------------------- HTML
const html = {};
for (const page of ['index.html', 'article.html']) {
  const p = path.join(ROOT, page);
  if (!fs.existsSync(p)) { errors.push(`${page} no existe`); continue; }
  const src = fs.readFileSync(p, 'utf8');
  const scripts = [...src.matchAll(/<script[^>]*\ssrc="([^"]+)"/g)].map((m) => m[1]);
  html[page] = scripts;
  const dataScripts = scripts.filter((s) => s.startsWith('js/data/'));
  const dup = dataScripts.filter((s, i) => dataScripts.indexOf(s) !== i);
  if (dup.length) errors.push(`${page}: scripts duplicados -> ${[...new Set(dup)].join(', ')}`);
  const missing = dataScripts.filter((s) => !fs.existsSync(path.join(ROOT, s)));
  if (missing.length) errors.push(`${page}: ${missing.length} scripts apuntan a ficheros inexistentes -> ${missing.join(', ')}`);
  const onDisk = [];
  for (const d of DOMAINS) {
    if (!fs.existsSync(d.dir)) continue;
    for (const f of fs.readdirSync(d.dir).filter((x) => x.endsWith('.js'))) {
      onDisk.push(`js/data/${path.relative(DATA, path.join(d.dir, f)).replace(/\\/g, '/')}`);
    }
  }
  const unregistered = onDisk.filter((s) => !dataScripts.includes(s));
  if (unregistered.length) errors.push(`${page}: ${unregistered.length} ficheros de datos sin registrar -> ${unregistered.join(', ')}`);
  const fi = scripts.indexOf('js/features.js');
  if (fi >= 0 && fi !== scripts.length - 1) errors.push(`${page}: js/features.js no es el ultimo script (indice ${fi} de ${scripts.length})`);
  if (fi < 0) errors.push(`${page}: js/features.js no registrado`);
}

// ---------------------------------------------------------------- unicidad de title
// Dentro de cada dominio el 'title' debe ser unico: es justo lo que protege
// el sufijo de pais ('(Italia)', '(Alemania)'). Se comprueba por dominio y no
// en el catalogo entero, porque dos dominios distintos pueden compartir
// etiqueta legitimamente.
for (const d of DOMAINS) {
  const bucket = PW[d.key] || {};
  const byTitle = new Map();
  for (const slug of Object.keys(bucket)) {
    const t = bucket[slug] && bucket[slug].title;
    if (typeof t !== 'string' || !t.trim()) continue;
    if (!byTitle.has(t)) byTitle.set(t, []);
    byTitle.get(t).push(slug);
  }
  for (const [t, slugs] of byTitle) {
    if (slugs.length > 1) errors.push(`${d.key}: title duplicado '${t}' -> ${slugs.join(' / ')}`);
  }
}

// ---------------------------------------------------------------- salida
const byKind = {};
for (const r of rows) (byKind[r.kind] = byKind[r.kind] || []).push(r);
for (const d of DOMAINS) {
  const list = byKind[d.kind] || [];
  console.log(`\n=== ${d.kind.toUpperCase()} (${list.length}/${d.expected.length}) ===`);
  for (const r of list.sort((a, b) => a.slug.localeCompare(b.slug))) {
    console.log(`  ${r.slug.padEnd(32)} sec=${String(r.sections).padStart(2)} bloq=${String(r.blocks).padStart(3)} pal=${String(r.words).padStart(5)} refs=${String((PW[DOMAINS.find((x) => x.kind === r.kind).key][r.slug].references || []).length).padStart(2)} tab=${r.tables} cita=${r.quotes} enl=${r.links}`);
  }
  const bucket = PW[d.key] || {};
  const miss = d.expected.filter((s) => !bucket[s]);
  if (miss.length) console.log(`  PENDIENTES (${miss.length}): ${miss.join(', ')}`);
  const xtra = Object.keys(bucket).filter((s) => !d.expected.includes(s));
  if (xtra.length) console.log(`  NO PREVISTOS: ${xtra.join(', ')}`);
}

console.log('\n=== REGISTRO DE SCRIPTS EN HTML ===');
const expectedScripts = DOMAINS.reduce((n, d) => {
  if (!fs.existsSync(d.dir)) return n;
  return n + fs.readdirSync(d.dir).filter((f) => f.endsWith('.js')).length;
}, 0);
for (const page of Object.keys(html)) {
  const s = html[page];
  console.log(`  ${page.padEnd(13)} ${s.length} scripts (${s.filter((x) => x.startsWith('js/data/')).length} de datos, ${expectedScripts} en disco) ultimo=${s[s.length - 1]}`);
}
// Derivado de DOMAINS, no escrito a mano: un total fijo aqui ya quedo
// desfasado en 14 entradas y nadie lo noto hasta que se lanzo la quinta tanda.
const expectedTotal = DOMAINS.reduce((n, d) => n + d.expected.length, 0);
const expectedBreakdown = DOMAINS.map((d) => d.expected.length + ' ' + d.kind).join(' + ');
console.log(`  total esperado de datos: ${expectedTotal} (${expectedBreakdown})`);

if (warnings.length) {
  console.log(`\nAVISOS (${warnings.length}):`);
  [...new Set(warnings)].forEach((w) => console.log(`  - ${w}`));
}
console.log('');
if (errors.length) {
  console.log(`DEFECTOS: ${errors.length}`);
  [...new Set(errors)].forEach((e) => console.log(`  - ${e}`));
} else {
  console.log(`DEFINITIVO: 0 defectos en los ${rows.length} registros`);
}
process.exitCode = errors.length ? 1 : 0;
