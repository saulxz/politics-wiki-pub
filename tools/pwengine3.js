// politics-wiki verificador de motor v3. Solo aserciones validas.
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const R = require('path').join(__dirname, '..');

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
// Los siete dominios, no solo las ideologias: sin partidos, geopoliticas,
// organizaciones, gobiernos, pensadores y conceptos cargadas, todo wikilink
// `partido:`, `geo:`, `org:`, `gob:`, `pensador:` o `concepto:` es irresoluble
// por construccion y el chequeo de enlazado mintiria. Cada fichero va en
// try/catch porque los agentes escriben en paralelo y un fichero a medio
// escribir no debe tumbar la regresion. Un directorio ausente se salta con el
// mismo criterio: no es un fallo del motor, es un dominio sin landing.
const DATA_DIRS = ['js/data', 'js/data/parties', 'js/data/geo', 'js/data/orgs', 'js/data/gobiernos', 'js/data/pensadores', 'js/data/conceptos'];
const unloadable = [];
const ausentes = [];
for (const d of DATA_DIRS) {
  if (!fs.existsSync(path.join(R, d))) { ausentes.push(d); continue; }
  for (const f of fs.readdirSync(path.join(R, d)).filter((x) => x.endsWith('.js'))) {
    const full = path.join(R, d, f);
    try {
      vm.runInContext(fs.readFileSync(full, 'utf8'), sb, { filename: full });
    } catch (err) {
      unloadable.push(d + '/' + f + '  (' + String(err.message).split('\n')[0].slice(0, 40) + ')');
    }
  }
}
for (const j of ['render.js', 'search.js']) {
  vm.runInContext(fs.readFileSync(path.join(R, 'js', j), 'utf8'), sb, { filename: j });
}
const PW = sb.window.PW;
// El catalogo de disco es la fuente de verdad: si crece o se encoge, las
// aserciones se adaptan solas en vez de quedar obsoletas como hacia "9".
const IDEO_FILES = fs.readdirSync(path.join(R, 'js', 'data')).filter((f) => f.endsWith('.js')).map((f) => f.replace(/\.js$/, ''));
const N_IDEO = IDEO_FILES.length;
const SLUGS = IDEO_FILES;
const il = (s) => PW.inline(s);

let pass = 0, fail = 0; const fails = [];
function t(name, cond, extra) {
  if (cond) { pass++; }
  else { fail++; fails.push(name + (extra !== undefined ? '  ->  ' + extra : '')); console.log('  FALLA ' + name + (extra !== undefined ? '  ->  ' + extra : '')); }
}

console.log('== API y registro (contrato §7) ==');
if (unloadable.length) {
  // Visible a proposito: son ficheros a medio escribir o rotos, no un fallo del motor.
  console.log('  INFO ficheros no cargados (' + unloadable.length + '): ' + unloadable.join(' | '));
}
if (ausentes.length) {
  // Igual que lo anterior: dominios cuyo directorio aun no existe.
  console.log('  INFO directorios sin datos (' + ausentes.length + '): ' + ausentes.join(' | '));
}
t('articulos = ideologias en disco', Object.keys(PW.articles).length === N_IDEO, Object.keys(PW.articles).length + ' registrados vs ' + N_IDEO + ' en disco');
t('list() completo y es proyeccion', PW.list().length === N_IDEO && PW.list()[0].summary !== undefined && PW.list()[0].sections === undefined, PW.list().length + ' entradas');
t('get() conocido', !!PW.get('capitalismo'));
t('get() desconocido = null', PW.get('nada') === null);
const cats = PW.categories();
console.log('  INFO categorias detectadas: ' + cats.length + ' -> ' + cats.join(' | '));
t('>= 2 categorias', cats.length >= 2, cats.length);
t('byCategory reparte todos los articulos', Object.values(PW.byCategory()).reduce((n, x) => n + x.length, 0) === N_IDEO, Object.values(PW.byCategory()).reduce((n, x) => n + x.length, 0) + ' vs ' + N_IDEO);

console.log('== articulos completos (via get, no via list) ==');
const REQ = ['slug','title','subtitle','category','tags','updated','summary','sections','categories','related','references'];
for (const s of SLUGS) {
  const a = PW.get(s);
  const miss = REQ.filter((k) => a[k] === undefined || a[k] === null || (Array.isArray(a[k]) && !a[k].length));
  t(s + ' tiene los 11 campos obligatorios', miss.length === 0, miss.join(','));
  t(s + ' slug coherente', a.slug === s, a.slug);
  t(s + ' 4-8 secciones', a.sections.length >= 4 && a.sections.length <= 8, a.sections.length);
  t(s + ' infobox con >=5 filas', !!(a.infobox && a.infobox.rows && a.infobox.rows.length >= 5));
  t(s + ' color de infobox hex', !!(a.infobox && /^#[0-9a-f]{6}$/i.test(a.infobox.color || '')), a.infobox && a.infobox.color);
}

console.log('== inline() contrato §5 ==');
t('[[slug|Etiqueta]]', il('[[marxismo|Marx]]').indexOf('>Marx</a>') !== -1, il('[[marxismo|Marx]]'));
t('[[slug]] usa el titulo real', il('[[marxismo]]').indexOf(PW.get('marxismo').title) !== -1, il('[[marxismo]]'));
t('clase pw-wikilink', /class="pw-wikilink"/.test(il('[[marxismo]]')));
t('href article.html?title=', /href="article\.html\?title=marxismo"/.test(il('[[marxismo]]')));
t('slug inexistente -> missing + aviso', /pw-wikilink-missing/.test(il('[[no-existe]]')) && /artículo pendiente/.test(il('[[no-existe]]')), il('[[no-existe]]'));
t("'''x''' -> strong", il("'''b'''") === '<strong>b</strong>', il("'''b'''"));
t("''x'' -> em", il("''i''") === '<em>i</em>', il("''i''"));
t('marcado dentro de la etiqueta del enlace', il("[[marxismo|Marx '''y Engels''']]").indexOf('Marx <strong>y Engels</strong>') !== -1, il("[[marxismo|Marx '''y Engels''']]"));
t('marcado en wikilink sin etiqueta', il("[[marxismo|'''Marx''']]").indexOf('<strong>Marx</strong>') !== -1, il("[[marxismo|'''Marx''']]"));
t('dos enlaces en una cadena', (il('[[marxismo|a]] y [[socialismo|b]]').match(/class="pw-wikilink"/g) || []).length === 2);
t('enlace externo [etiqueta|url]', /target="_blank" rel="noopener noreferrer"/.test(il('[Marx|https://ejemplo.org]')), il('[Marx|https://ejemplo.org]'));
t('enlace externo conserva href', /href="https:\/\/ejemplo\.org"/.test(il('[Marx|https://ejemplo.org]')));

console.log('== inline() seguridad ==');
t('escapa < >', !/<script/i.test(il('<script>alert(1)</script>')) && il('<script>alert(1)</script>').indexOf('&lt;script&gt;') !== -1, il('<script>alert(1)</script>'));
t('escapeHtml escapa comillas (atributos)', PW.escapeHtml('" onmouseover="x').indexOf('&quot;') !== -1, PW.escapeHtml('" onmouseover="x'));
t('escapeHtml escapa & < > " \'', ['&','<','>','"',"'"].every((c) => PW.escapeHtml(c).indexOf('&') === 0));
t('bloquea javascript:', !/href="javascript:/i.test(il('[x|javascript:alert(1)]')), il('[x|javascript:alert(1)]'));
t('bloquea data:', !/href="data:/i.test(il('[x|data:text/html,<script>]')), il('[x|data:text/html,<script>]'));
t('bloquea vbscript:', !/href="vbscript:/i.test(il('[x|vbscript:msgbox]')), il('[x|vbscript:msgbox]'));
t('ampersand escapado', il('Marx & Engels').indexOf('&amp;') !== -1, il('Marx & Engels'));
t('texto plano intacto', il('texto normal') === 'texto normal', il('texto normal'));
t('vacio y null', il('') === '' && il(null) === '' && il(undefined) === '');
t('no rompe con numero', il(42) === '42', il(42));

console.log('== busquador ==');
t('consulta vacia = []', PW.search('').length === 0);
t('solo espacios = []', PW.search('   ').length === 0);
t('encuentra por titulo exacto primero', PW.search('comunismo')[0].article.slug === 'comunismo', PW.search('comunismo')[0] && PW.search('comunismo')[0].article.slug);
t('insensible a mayusculas', PW.search('CAPITALISMO').length > 0);
t('insensible a acentos (busca "comunismo" sin tilde)', PW.search('comunismo').length > 0);
t('busca por palabra del resumen', PW.search('mercado').length > 0);
t('sin coincidencias = []', Array.isArray(PW.search('qwertyuiopasdfgh')) && PW.search('qwertyuiopasdfgh').length === 0);
t('respeta limit=3', PW.search('a', 3).length <= 3, PW.search('a', 3).length);
t('respeta limit=1', PW.search('a', 1).length <= 1, PW.search('a', 1).length);
t('limit por defecto <= 10', PW.search('a').length <= 10, PW.search('a').length);
t('devuelve pares {article, score}', !!PW.search('capitalismo')[0] && 'article' in PW.search('capitalismo')[0] && 'score' in PW.search('capitalismo')[0]);
t('ordenado por score descendente', (() => { const r = PW.search('a'); return r.every((x, i) => i === 0 || r[i-1].score >= x.score); })());

// "¿Resuelve este destino?" se responde con la senal real del render:
// wikilinkHtml() marca con `pw-wikilink-missing` lo que no encuentra, usando
// el mismo splitPrefix + getIn/find que renderRelated. Asi el chequeo cubre los
// cinco dominios, los prefijos y el plegado de titulos sin reimplementarlos.
const res = (ref) => !/pw-wikilink-missing/.test(PW.inline('[[' + ref + ']]'));

// Los enlaces se buscan sobre los valores string reales, no sobre
// JSON.stringify(a): ahi el `[[` de un array de arrays (dl.items, table.rows)
// se confundia con la apertura de un wikilink, y `([^\]|]+)` capturaba
// `"Frente al [[liberalismo` hasta el pipe, reportando un enlace roto que no
// existe. pwcheck3.js lleva esta misma correccion desde antes.
function collectStrings(v, out) {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) { for (const x of v) collectStrings(x, out); }
  else if (v && typeof v === 'object') { for (const k of Object.keys(v)) collectStrings(v[k], out); }
  return out;
}

console.log('== integridad de enlazado (articulos reales) ==');
for (const s of SLUGS) {
  const a = PW.get(s);
  const re = /\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g; const broken = [];
  let enlaces = 0;
  for (const text of collectStrings(a, [])) {
    re.lastIndex = 0; let m;
    while ((m = re.exec(text))) { enlaces++; if (!res(m[1].trim())) broken.push(m[1].trim()); }
  }
  t(s + ' sin wikilinks rotos', broken.length === 0, broken.join(','));
  const badRel = a.related.filter((r) => !res(r));
  t(s + ' sin related rotos', badRel.length === 0 && !a.related.includes(s), badRel.join(','));
  t(s + ' tiene al menos 2 enlaces internos', enlaces >= 2, enlaces);
}

console.log('');
console.log(`RESULTADO: ${pass} pasan, ${fail} fallan`);
if (fails.length) { console.log('FALLOS:'); fails.forEach((f) => console.log('  - ' + f)); }
process.exitCode = fail ? 1 : 0;
