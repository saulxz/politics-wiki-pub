// registrar.mjs — alta por lotes de entradas de datos en el catalogo.
//
// Por que existe: anadir N entradas obliga a tocar TRES sitios que deben
// quedar de acuerdo, ypwcheck3.js:410-411 valida index.html y article.html por
// separado mientras pwengine4.js:81 deriva el catalogo esperado SOLO de
// index.html. Un desajuste entre las dos paginas no da un error legible: deja
// una entrada 'no registrada' que se ve como PENDING en pwengine4. Editar eso a
// mano 45 veces es como se cuelan las derivas, asi que se hace con una herramienta.
//
// Que hace, en un solo comando idempotente:
//   1. anade los slugs al array del dominio en tools/pwcheck3.js
//   2. anade un <script> por slug en index.html y article.html, en el bloque
//      del dominio correspondiente
//   3. recalcula el contador estatico pw-domain-count de index.html
//
// Que NO hace y por que:
//   - No crea ficheros de ficha. Si el .js no esta en disco, avisa por stderr
//     y sigue: el orden natural es escribir primero las fichas y registrar
//     despues, asi que un aviso aqui no es un error. Lo que si seria un error
//     es que un slug se registrase sin fichero, porque pwcheck3.js:275
//     daria 'no cargado desde <dir>' sin decir cual de los dos sitios fallo.
//   - No toca la seccion de las entradas existentes mas alla del contador.
//
// Uso:
//   node tools/registrar.mjs --check
//   node tools/registrar.mjs --domain gobierno --slugs a,b,c --dry-run
//   node tools/registrar.mjs --domain partido --from slugs.txt
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CHECK = path.join(ROOT, 'tools', 'pwcheck3.js');
const PAGES = [path.join(ROOT, 'index.html'), path.join(ROOT, 'article.html')];

// El dominio decide las tres cosas que hay que mantener sincronizadas.
const DOMAINS = {
  ideologia: { arr: 'IDEOLOGIES', dir: 'js/data/', sub: null, kind: 'ideologia' },
  partido: { arr: 'PARTIES', dir: 'js/data/parties/', sub: 'parties', kind: 'partido' },
  geopolitica: { arr: 'GEOS', dir: 'js/data/geo/', sub: 'geo', kind: 'geopolitica' },
  organizacion: { arr: 'ORGS', dir: 'js/data/orgs/', sub: 'orgs', kind: 'organizacion' },
  gobierno: { arr: 'GOBIERNOS', dir: 'js/data/gobiernos/', sub: 'gobiernos', kind: 'gobierno' },
  pensador: { arr: 'PENSADORES', dir: 'js/data/pensadores/', sub: 'pensadores', kind: 'pensador' },
  concepto: { arr: 'CONCEPTOS', dir: 'js/data/conceptos/', sub: 'conceptos', kind: 'concepto' },
};

const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

// --- argv ------------------------------------------------------------------
const argv = process.argv.slice(2);
const has = (f) => argv.includes(f);
const val = (f) => { const i = argv.indexOf(f); return i >= 0 ? argv[i + 1] : null; };
const dryRun = has('--dry-run');
const checkOnly = has('--check');
const domain = val('--domain');
const from = val('--from');

function readList() {
  if (from) {
    return fs.readFileSync(path.resolve(ROOT, from), 'utf8')
      .split(/[\s,;]+/).map((s) => s.trim()).filter(Boolean);
  }
  return (val('--slugs') || '').split(',').map((s) => s.trim()).filter(Boolean);
}

function die(msg) { console.error('! ' + msg); process.exit(1); }

// --- lectura del estado actual ---------------------------------------------
function readArray(src, name) {
  const start = src.indexOf(`const ${name} = [`);
  if (start < 0) return null;
  const open = src.indexOf('[', start);
  const close = src.indexOf('\n];', open);
  if (close < 0) return null;
  const body = src.slice(open + 1, close);
  const slugs = [];
  const re = /'([a-z0-9-]+)'/g;
  let m;
  while ((m = re.exec(body))) slugs.push(m[1]);
  return { start, open, close, body, slugs, text: src.slice(start, close + 3) };
}

// Cuenta los <script> de un dominio en una pagina. El patron replica el de
// pwengine4.js:77-81 para que este informe y el validador no puedan discrepar.
function pageSlugs(file, d) {
  const html = fs.readFileSync(file, 'utf8');
  const esc = d.dir.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(esc + '([a-z0-9-]+)\\.js', 'g');
  const out = [];
  let m;
  while ((m = re.exec(html))) out.push(m[1]);
  return out;
}

function diskSlugs(d) {
  const dir = d.sub ? path.join(ROOT, 'js', 'data', d.sub) : path.join(ROOT, 'js', 'data');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith('.js'))
    .map((f) => f.replace(/\.js$/, ''))
    .filter((s) => SLUG_RE.test(s));
}

const arrText = fs.readFileSync(CHECK, 'utf8');

// --- modo --check: informe de deriva ---------------------------------------
if (checkOnly) {
  let drift = 0;
  for (const [name, d] of Object.entries(DOMAINS)) {
    const a = readArray(arrText, d.arr);
    if (!a) { console.log(`  ${name.padEnd(13)} (sin array ${d.arr})`); continue; }
    const disk = diskSlugs(d);
    const ix = pageSlugs(PAGES[0], d);
    const ar = pageSlugs(PAGES[1], d);
    const missDisk = a.slugs.filter((s) => !disk.includes(s));
    const noArr = disk.filter((s) => !a.slugs.includes(s));
    const missIx = a.slugs.filter((s) => !ix.includes(s));
    const missAr = a.slugs.filter((s) => !ar.includes(s));
    const ixExtra = ix.filter((s) => !a.slugs.includes(s));
    const driftArr = ixExtra.length || missDisk.length || noArr.length || missIx.length || missAr.length;
    drift += driftArr;
    const mark = driftArr ? 'DESALINEADO' : 'ok';
    console.log(`  ${name.padEnd(13)} arr=${String(a.slugs.length).padEnd(4)} disco=${String(disk.length).padEnd(4)} index=${String(ix.length).padEnd(4)} article=${String(ar.length).padEnd(4)} ${mark}`);
    const rep = (lbl, v) => { if (v.length) console.log(`      ${lbl}: ${v.join(', ')}`); };
    rep('en array sin disco', missDisk);
    rep('en disco sin array', noArr);
    rep('falta en index.html', missIx);
    rep('falta en article.html', missAr);
    rep('sobra en index.html', ixExtra);
  }
  console.log(drift ? `\n  ${drift} dominio(s) desalineados` : '\n  catalogo coherente');
  process.exit(drift ? 1 : 0);
}

if (!domain) die('falta --domain (' + Object.keys(DOMAINS).join(' | ') + ')');
const d = DOMAINS[domain];
if (!d) die('dominio desconocido: ' + domain);

let slugs = readList();
if (!slugs.length) die('falta --slugs o --from');
for (const s of slugs) if (!SLUG_RE.test(s)) die(`slug invalido: '${s}'`);

// deduplicar conservando orden
slugs = [...new Set(slugs)];

// Aviso, no error: el orden natural es escribir las fichas y despues
// registrar. Un slug sin .js en disco es el estado de trabajo normal a mitad,
// pero dejaria pwcheck3.js:275 diciendo 'no cargado desde ...' sin decir
// cual de los dos sitios fallo. Aqui si se puede nombrar.
{
  const dirAbs = d.sub ? path.join(ROOT, 'js', 'data', d.sub) : path.join(ROOT, 'js', 'data');
  const huerfanos = slugs.filter((s) => !fs.existsSync(path.join(dirAbs, s + '.js')));
  if (huerfanos.length) {
    console.warn(`  aviso: ${huerfanos.length} slug(s) sin fichero en ${d.sub || 'js/data'}/: ${huerfanos.join(', ')}`);
    console.warn('         se registran igual, pero pwcheck3.js dara "no cargado" hasta que existan.');
  }
}

// --- 1 · pwcheck3.js ---------------------------------------------------------
const arr = readArray(arrText, d.arr);
if (!arr) die(`no encuentro 'const ${d.arr} = [' en tools/pwcheck3.js`);
const nuevos = slugs.filter((s) => !arr.slugs.includes(s));
const repetidos = slugs.filter((s) => arr.slugs.includes(s));

let newCheck = arrText;
if (nuevos.length) {
  // Formato heredado del fichero: 4 slugs por linea, comilla simple y coma
  // final, para que el array siga leyendose igual que a mano.
  let add = '';
  for (let i = 0; i < nuevos.length; i += 4) {
    const trozo = nuevos.slice(i, i + 4).map((s) => `'${s}'`).join(', ');
    add += (i === 0 ? '\n' : '') + '  ' + trozo + ',';
    if (i + 4 < nuevos.length) add += '\n';
  }
  newCheck = arrText.slice(0, arr.close) + add + arrText.slice(arr.close);
}

// --- 2 · las dos paginas HTML ----------------------------------------------
function insertInPage(file) {
  const src = fs.readFileSync(file, 'utf8');
  const lines = src.split('\n');
  const esc = d.dir.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(esc + '[a-z0-9-]+\\.js');
  const idxs = [];
  for (let i = 0; i < lines.length; i++) if (re.test(lines[i])) idxs.push(i);
  if (!idxs.length) {
    return { file, ok: false, msg: `no encuentro ningun <script> de ${d.dir} — no se toca` };
  }
  const anchor = idxs[idxs.length - 1];
  const add = nuevos
    .filter((s) => !new RegExp(esc + s + '\\.js').test(src))
    .map((s) => `<script src="${d.dir}${s}.js" defer></script>`);
  if (!add.length) return { file, ok: true, msg: 'sin cambios', text: src };
  lines.splice(anchor + 1, 0, ...add);
  return { file, ok: true, msg: `+${add.length} <script> tras la linea ${anchor + 1}`, text: lines.join('\n') };
}

const pages = PAGES.map(insertInPage);
for (const p of pages) if (!p.ok) die(`${path.basename(p.file)}: ${p.msg}`);

// --- 3 · contador estatico de index.html -----------------------------------
let newIx = pages[0].text;
const before = arr.slugs.length; // ojo: d.arr es el NOMBRE del array, no su tamano
const after = before + nuevos.length;
{
  const re = new RegExp(`(data-dominio="${d.kind}"[^>]*>.*?<span class="pw-domain-count">)(\\d+)(</span>)`, 's');
  const m = newIx.match(re);
  if (!m) {
    console.log(`  aviso: no encuentro el contador de data-dominio="${d.kind}" en index.html`);
  } else if (Number(m[2]) !== after) {
    if (!dryRun) newIx = newIx.replace(re, `$1${after}$3`);
  }
}

// --- escritura --------------------------------------------------------------
if (dryRun) {
  console.log(`\n  [dry-run] ${domain}: ${nuevos.length} nuevos, ${repetidos.length} ya estaban`);
  if (nuevos.length) console.log(`  nuevos: ${nuevos.join(', ')}`);
  for (const p of pages) console.log(`  ${path.basename(p.file)}: ${p.msg}`);
  console.log(`  pwcheck3.js: ${d.arr} ${before} -> ${after}`);
  console.log(`  contador index.html: ${before} -> ${after}`);
  if (repetidos.length) console.log(`  ya estaban: ${repetidos.join(', ')}`);
  console.log('');
  process.exit(0);
}

if (nuevos.length) fs.writeFileSync(CHECK, newCheck);
fs.writeFileSync(PAGES[0], newIx);
fs.writeFileSync(PAGES[1], pages[1].text);

console.log(`  ${domain}: ${nuevos.length} nuevos, ${repetidos.length} ya estaban`);
if (nuevos.length) console.log(`  nuevos: ${nuevos.join(', ')}`);
for (const p of pages) console.log(`  ${path.basename(p.file)}: ${p.msg}`);
console.log(`  pwcheck3.js: ${d.arr} ${before} -> ${after}`);
if (repetidos.length) console.log(`  ya estaban: ${repetidos.join(', ')}`);
console.log('');
