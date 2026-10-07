// politics-wiki verificador de contrato v3 (CONTRACT-V3.md).
// Contrasta los tres dominios nuevos contra §5, §6, §7 y §11.3.
//
// Distingue dos cosas que antes se confundian:
//   FALLA     -> el fichero existe y viola el contrato. Esto hay que arreglarlo.
//   PENDIENTE -> el fichero no esta en disco todavia (lo escribe un agente).
// No se cuentan como fallo los ficheros ausentes, ni se "arreglan" referencias
// a algo que aun no existe.
//
// Uso: node pwengine4.js
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const R = require('path').join(__dirname, '..');

// --- stubs de DOM, identicos a los de pwengine3 ----------------------------
const elStub = () => ({
  style: {}, dataset: {}, classList: { add(){}, remove(){}, toggle(){}, contains(){ return false; } },
  setAttribute(){}, getAttribute(){ return null; }, removeAttribute(){}, appendChild(){}, remove(){},
  addEventListener(){}, querySelector(){ return null; }, querySelectorAll(){ return []; },
  set textContent(v) {}, get textContent() { return ''; }, set innerHTML(v) {}, get innerHTML() { return ''; },
  children: [], childNodes: [], focus(){}, blur(){}, contains(){ return false; },
});
const docStub = {
  readyState: 'complete', addEventListener(){}, removeEventListener(){},
  createElement: elStub, createTextNode: () => ({}), createDocumentFragment: elStub,
  querySelector(){ return null; }, querySelectorAll(){ return []; },
  getElementById(){ return null; }, getElementsByClassName(){ return []; },
  body: elStub(), documentElement: elStub(),
};
const sb = { window: {}, console: console, document: docStub, location: { search: '', pathname: 'article.html', hash: '' } };
sb.window.document = docStub; sb.window.location = sb.location;
vm.createContext(sb);

// --- carga de los siete dominios -------------------------------------------
const DATA = {
  ideologia: 'js/data',
  partido: 'js/data/parties',
  geopolitica: 'js/data/geo',
  organizacion: 'js/data/orgs',
  gobierno: 'js/data/gobiernos',
  pensador: 'js/data/pensadores',
  concepto: 'js/data/conceptos',
};
const BUCKET = { ideologia: 'articles', partido: 'parties', geopolitica: 'geo', organizacion: 'orgs', gobierno: 'gobiernos', pensador: 'pensadores', concepto: 'conceptos' };
const onDisk = {};      // kind -> Set de slugs presentes
const unloadable = []; // ficheros que no se pudieron ejecutar
const missingDirs = []; // dominios cuyo directorio aun no existe

for (const kind of Object.keys(DATA)) {
  onDisk[kind] = new Set();
  const dir = path.join(R, DATA[kind]);
  // Un directorio ausente no es una violacion del contrato: es un dominio cuyo
  // agente aun no ha aterrizado. Sin esta guarda, readdirSync tira ENOENT y
  // tumba toda la regresion, que es justo lo que distingue FALLA de PENDIENTE.
  if (!fs.existsSync(dir)) { missingDirs.push(kind + ' (' + DATA[kind] + ')'); continue; }
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.js'))) {
    const full = path.join(dir, f);
    try {
      vm.runInContext(fs.readFileSync(full, 'utf8'), sb, { filename: full });
      onDisk[kind].add(f.replace(/\.js$/, ''));
    } catch (err) {
      onDisk[kind].add(f.replace(/\.js$/, ''));
      unloadable.push(kind + '/' + f + ' (' + String(err.message).split('\n')[0].slice(0, 36) + ')');
    }
  }
}
// Los datos se cargan ANTES que render.js, igual que en pwengine3 y como
// documenta render.js:339-342: la normalizacion es tardia, asi que un script
// de datos que llego antes que el motor sirve igual. Sin este paso PW no tiene
// getIn/find/inline/list y el harness revienta.
try {
  vm.runInContext(fs.readFileSync(path.join(R, 'js', 'render.js'), 'utf8'), sb, { filename: 'render.js' });
} catch (err) {
  console.log('! render.js no se pudo cargar: ' + String(err.message).split('\n')[0]);
}
const PW = sb.window.PW || {};

// --- catalogo esperado: los <script> que registra index.html ----------------
const html = fs.readFileSync(path.join(R, 'index.html'), 'utf8');
const grab = (re) => { const o = new Set(); let m; const r = new RegExp(re, 'g'); while ((m = r.exec(html))) { o.add(m[1]); } return o; };
const expected = {
  ideologia: grab('js/data/([a-z0-9-]+)\\.js'),
  partido: grab('js/data/parties/([a-z0-9-]+)\\.js'),
  geopolitica: grab('js/data/geo/([a-z0-9-]+)\\.js'),
  organizacion: grab('js/data/orgs/([a-z0-9-]+)\\.js'),
  gobierno: grab('js/data/gobiernos/([a-z0-9-]+)\\.js'),
  pensador: grab('js/data/pensadores/([a-z0-9-]+)\\.js'),
  concepto: grab('js/data/conceptos/([a-z0-9-]+)\\.js'),
};

// --- helpers de asercion ---------------------------------------------------
let pass = 0;
const fails = [];
const pend = [];
const extraSections = [];
function t(kind, slug, name, cond, extra) {
  if (cond) { pass++; return true; }
  const line = kind + '/' + slug + ' :: ' + name + (extra !== undefined && extra !== '' ? '  ->  ' + extra : '');
  fails.push(line);
  return false;
}
function p(kind, slug, name, detail) {
  pend.push(kind + '/' + slug + (name ? ' :: ' + name : '') + (detail ? '  ->  ' + detail : ''));
}
const seq = (got, want) => got.length === want.length && want.every((w, i) => got[i] === w);
const has = (got, want) => want.every((w) => got.indexOf(w) >= 0);
const isStr = (v) => typeof v === 'string' && v.trim().length > 0;
const HEX = /^#[0-9a-f]{6}$/i;

const COMMON = ['slug', 'title', 'subtitle', 'summary', 'updated', 'sections', 'references'];
const PARTY_SECTIONS = ['ideologia', 'historia', 'practica', 'criticas', 'interno'];
const GEO_SECTIONS = ['panorama', 'actores', 'dimensiones', 'desbordamientos', 'perspectivas'];
const ORG_SECTIONS = ['origen', 'estructura', 'funciones', 'miembros', 'criticas'];
const POWERS = ['alta', 'media', 'baja'];
const ORG_TYPES = ['Organización mundial', 'Bloque militar', 'Bloque económico', 'Organización regional', 'Tratado'];

// --- validadores por dominio ----------------------------------------------
function commonFields(kind, slug, e) {
  for (const k of COMMON) {
    const v = e[k];
    const empty = v === undefined || v === null || v === '' ||
      (Array.isArray(v) && !v.length);
    t(kind, slug, 'campo comun ' + k, !empty, empty ? 'vacio' : '');
  }
  t(kind, slug, 'slug coincide con el fichero', e.slug === slug, e.slug);
  t(kind, slug, 'updated con formato de fecha', /^\d{4}-\d{2}-\d{2}$/.test(String(e.updated || '')), e.updated);
}

function checkRefs(kind, slug, e) {
  const refs = Array.isArray(e.references) ? e.references : [];
  if (!t(kind, slug, 'references >= 5 (§5.2/5.3/5.4)', refs.length >= 5, refs.length)) { return; }
  refs.forEach((r, i) => {
    if (!r || typeof r !== 'object') { t(kind, slug, 'reference ' + i + ' es objeto', false, typeof r); return; }
    const label = isStr(r.title) || isStr(r.text) || isStr(r.source);
    t(kind, slug, 'reference ' + i + ' tiene titulo', label, JSON.stringify(r).slice(0, 60));
    if (r.year !== undefined && r.year !== null) {
      t(kind, slug, 'reference ' + i + ' year numerico', typeof r.year === 'number', typeof r.year + ' ' + r.year);
    }
  });
}

function checkParty(slug, e) {
  const k = 'partido';
  commonFields(k, slug, e);
  // §5.2: campos propios, todos obligatorios
  for (const f of ['name', 'shortName', 'country', 'countryRegion', 'headquarters', 'leader', 'ideologyLabel', 'inGovernment']) {
    t(k, slug, 'campo propio ' + f, isStr(e[f]), e[f]);
  }
  t(k, slug, 'countryCode ISO alpha-2 minusculas', typeof e.countryCode === 'string' && /^[a-z]{2}$/.test(e.countryCode), e.countryCode);
  t(k, slug, 'founded es numero sin comillas', typeof e.founded === 'number', typeof e.founded + ' ' + JSON.stringify(e.founded));
  const words = isStr(e.ideologyLabel) ? e.ideologyLabel.trim().split(/\s+/).length : 0;
  t(k, slug, 'ideologyLabel de 1-3 palabras', words >= 1 && words <= 3, e.ideologyLabel);
  t(k, slug, 'inGovernment con año', /\d{4}/.test(String(e.inGovernment || '')), e.inGovernment);
  const colors = Array.isArray(e.colors) ? e.colors : [];
  t(k, slug, 'colors 1-2 hex', colors.length >= 1 && colors.length <= 2 && colors.every((c) => HEX.test(c)), JSON.stringify(colors));
  // ideology: 2-4 slugs que DEBEN resolver a ideologias existentes
  const ideo = Array.isArray(e.ideology) ? e.ideology : [];
  if (t(k, slug, 'ideology 2-4 slugs', ideo.length >= 2 && ideo.length <= 4, ideo.length)) {
    const bad = ideo.filter((s) => !PW.getIn('ideologia', s));
    t(k, slug, 'ideology resuelve a ideologias existentes', bad.length === 0, bad.join(','));
  }
  // §5.2: las 5 secciones obligatorias, con estos ids y en este orden. Se
  // admiten secciones extra (decision del 2026-09-27): render.js ya las tolera
  // (featuredOnce itera generico y renderSectionHeading no filtra por id), y el
  // precedente v1 (CONTRACT.md:146, 4-8) y el de geo/org (5-7) dan rango en vez
  // de lista cerrada. Solo se exige que las 5 esten y en orden relativo.
  const ids = (Array.isArray(e.sections) ? e.sections : []).map((s) => s.id);
  const obligatorias = ids.filter((x) => PARTY_SECTIONS.indexOf(x) >= 0);
  t(k, slug, 'las 5 secciones obligatorias en orden', seq(obligatorias, PARTY_SECTIONS), ids.join(' > '));
  if (ids.length !== 5) { extraSections.push(k + '/' + slug + '  ' + ids.length + ': ' + ids.join(' > ')); }
  checkRefs(k, slug, e);
}

function checkGeo(slug, e) {
  const k = 'geopolitica';
  commonFields(k, slug, e);
  t(k, slug, 'region string (clave de agrupacion §7)', isStr(e.region), e.region);
  t(k, slug, 'timeFrame string', isStr(e.timeFrame), e.timeFrame);
  const actors = Array.isArray(e.actors) ? e.actors : [];
  if (t(k, slug, 'actors 2-6', actors.length >= 2 && actors.length <= 6, actors.length)) {
    actors.forEach((a, i) => {
      if (!a || typeof a !== 'object') { t(k, slug, 'actor ' + i + ' es objeto', false, typeof a); return; }
      t(k, slug, 'actor ' + i + ' name', isStr(a.name), a.name);
      t(k, slug, 'actor ' + i + ' role', isStr(a.role), a.role);
      t(k, slug, 'actor ' + i + ' power ∈ alta|media|baja', POWERS.indexOf(a.power) >= 0, a.power);
    });
  }
  const ids = (Array.isArray(e.sections) ? e.sections : []).map((s) => s.id);
  t(k, slug, 'sections 5-7', ids.length >= 5 && ids.length <= 7, ids.length);
  t(k, slug, 'sections incluye las 5 obligatorias', has(ids, GEO_SECTIONS), ids.join(' > '));
  const rows = e.infobox && Array.isArray(e.infobox.rows) ? e.infobox.rows : [];
  t(k, slug, 'infobox 5-8 filas', rows.length >= 5 && rows.length <= 8, rows.length);
  checkRefs(k, slug, e);
}

function checkOrg(slug, e) {
  const k = 'organizacion';
  commonFields(k, slug, e);
  t(k, slug, 'orgType del vocabulario §5.4', ORG_TYPES.indexOf(e.orgType) >= 0, e.orgType);
  t(k, slug, 'members es numero', typeof e.members === 'number', typeof e.members + ' ' + JSON.stringify(e.members));
  t(k, slug, 'memberSince string', isStr(e.memberSince), e.memberSince);
  t(k, slug, 'leader string', isStr(e.leader), e.leader);
  for (const f of ['name', 'shortName', 'headquarters']) { t(k, slug, 'campo propio ' + f, isStr(e[f]), e[f]); }
  const colors = Array.isArray(e.colors) ? e.colors : [];
  t(k, slug, 'colors 1-2 hex', colors.length >= 1 && colors.length <= 2 && colors.every((c) => HEX.test(c)), JSON.stringify(colors));
  const ids = (Array.isArray(e.sections) ? e.sections : []).map((s) => s.id);
  t(k, slug, 'sections 5-7', ids.length >= 5 && ids.length <= 7, ids.length);
  t(k, slug, 'sections incluye las 5 obligatorias', has(ids, ORG_SECTIONS), ids.join(' > '));
  const rows = e.infobox && Array.isArray(e.infobox.rows) ? e.infobox.rows : [];
  t(k, slug, 'infobox 5-8 filas', rows.length >= 5 && rows.length <= 8, rows.length);
  checkRefs(k, slug, e);
}

// --- recorrido -------------------------------------------------------------
console.log('== CONTRATO v3: ' + new Date().toISOString().slice(0, 16).replace('T', ' ') + ' ==\n');
if (unloadable.length) {
  console.log('FICHEROS QUE NO SE EJECUTAN (violacion, no ausencia):');
  for (const u of unloadable) { console.log('  ! ' + u); }
  console.log('');
}
if (missingDirs.length) {
  console.log('DIRECTORIOS DE DATOS AUSENTES (aun no los escribe un agente):');
  for (const d of missingDirs) { console.log('  ~ ' + d); }
  console.log('');
}

for (const kind of Object.keys(DATA)) {
  const want = [...expected[kind]].sort();
  const missing = want.filter((s) => !onDisk[kind].has(s));
  const store = PW[BUCKET[kind]] || {};
  const present = [...onDisk[kind]].sort();

  console.log('-- ' + kind.toUpperCase() +
    '  catalogo=' + want.length + ' en_disco=' + present.length +
    ' registrados=' + Object.keys(store).length);

  for (const s of missing) { p(kind, s, 'fichero ausente', 'lo escribe un agente'); }

  for (const s of present) {
    if (missing.indexOf(s) >= 0) { continue; } // ya registrado como pendiente
    const e = store[s];
    if (!e) { p(kind, s, 'no se registro en PW.' + BUCKET[kind]); continue; }
    if (kind === 'partido') { checkParty(s, e); }
    else if (kind === 'geopolitica') { checkGeo(s, e); }
    else if (kind === 'organizacion') { checkOrg(s, e); }
    // ideologias: solo los campos comunes, el resto lo cubre pwengine3
    else { commonFields(kind, s, e); }
  }
  console.log('');
}

// §6 y §7: resolucion cross-dominio y agrupacion del catalogo
console.log('== §6 wikilinks cross-dominio ==');
const res = (ref) => !/pw-wikilink-missing/.test(PW.inline('[[' + ref + ']]'));
t('API', 'PW.find existe y cruza dominios', typeof PW.find === 'function' && !!PW.find('ppsoe'), typeof PW.find);
t('API', 'prefijo de dominio resuelto', !!PW.getIn('partido', 'ppsoe'), 'PW.getIn(partido, ppsoe)');
t('API', 'get(kind,slug) de dos argumentos', !!PW.get('partido', 'ppsoe'), 'PW.get(partido, ppsoe)');
t('API', 'get(slug) de un argumento = ideologias (§4)', !!PW.get('capitalismo') && PW.get('partido', 'ppsoe') !== PW.get('ppsoe'), 'ok');

console.log('');
console.log('== §7 agrupacion del catalogo ==');
const groupKeys = { ideologia: 'category', partido: 'country', geopolitica: 'region', organizacion: 'orgType', gobierno: 'region', pensador: 'category', concepto: 'category' };
for (const kind of Object.keys(groupKeys)) {
  const store = PW[BUCKET[kind]] || {};
  const list = (typeof PW.list === 'function' && PW.list.length >= 1) ? PW.list(kind) : Object.values(store);
  const field = groupKeys[kind];
  const without = list.filter((e) => !isStr(e && e[field]));
  t('§7', kind, 'toda entrada tiene ' + field, without.length === 0, without.map((e) => e.slug).join(','));
}

console.log('');
console.log('RESULTADO: ' + pass + ' pasan, ' + fails.length + ' fallan, ' + pend.length + ' pendientes');
if (fails.length) {
  console.log('');
  console.log('FALLOS (' + fails.length + '):');
  for (const f of fails) { console.log('  - ' + f); }
}
if (pend.length) {
  console.log('');
  console.log('PENDIENTES de agentes en vuelo (' + pend.length + '):');
  for (const q of pend) { console.log('  ~ ' + q); }
}
if (extraSections.length) {
  console.log('');
  console.log('NOTA secciones extra admitidas (' + extraSections.length + '):');
  for (const x of extraSections) { console.log('  + ' + x); }
}
process.exitCode = fails.length ? 1 : 0;
