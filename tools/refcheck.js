// refcheck.js — comprueba que las references[].url de las fichas existan de verdad.
//
// Por que existe: linkcheck.js valida los wikilinks, pero NADA en la bateria
// comprueba que una URL de referencia resuelva. Un 404 en una referencia es una
// mentira silenciosa, y el contrato exige >=5 por entrada: del orden de 225 en
// solo las 45 fichas de gobierno que van a entrar. Verificar 225 URLs a mano no
// es viable.
//
// Interpretacion de codigos (importante: NO es "viva o muerta"):
//   2xx              viva
//   3xx              viva tras redireccion (se sigue la redireccion)
//   401/403          bloqueada. NO prueba que la URL sea invalida: muchos
//                    parlamentos la rechazan a un user-agent automatizado. Se
//                    informa aparte para decidir a mano.
//   404/410          muerta. Casi siempre URL mal escrita: fallo real.
//   5xx / red        inconcluyente: el servidor esta caido o el corte es nuestro.
//
// Uso:
//   node tools/refcheck.js                 # todas las fichas
//   node tools/refcheck.js --only gobierno # un solo dominio
//   node tools/refcheck.js --cache         # reutilizar la pasada anterior
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CACHE = path.join(ROOT, 'tools', '.refcheck-cache.json');

const argv = process.argv.slice(2);
const only = argv.includes('--only') ? argv[argv.indexOf('--only') + 1] : null;
const useCache = argv.includes('--cache');
const CONC = 8;
const TIMEOUT = 12000;

const DIRS = {
  ideologia: path.join(ROOT, 'js', 'data'),
  partido: path.join(ROOT, 'js', 'data', 'parties'),
  geopolitica: path.join(ROOT, 'js', 'data', 'geo'),
  organizacion: path.join(ROOT, 'js', 'data', 'orgs'),
  gobierno: path.join(ROOT, 'js', 'data', 'gobiernos'),
  pensador: path.join(ROOT, 'js', 'data', 'pensadores'),
  concepto: path.join(ROOT, 'js', 'data', 'conceptos'),
};

// El formato es estable en todo el proyecto: `url: 'https://...'`.
const RE = /url:\s*'([^']+)'/g;
const items = [];
for (const [kind, dir] of Object.entries(DIRS)) {
  if (only && kind !== only) continue;
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.js'))) {
    const src = fs.readFileSync(path.join(dir, f), 'utf8');
    const slug = f.replace(/\.js$/, '');
    let m;
    while ((m = RE.exec(src))) items.push({ kind, slug, url: m[1] });
  }
}

const unique = [...new Map(items.map((i) => [i.url, i])).values()];
const fichas = new Set(items.map((i) => i.kind + '/' + i.slug)).size;
console.log(`  ${items.length} referencias en ${fichas} fichas, ${unique.length} URLs unicas\n`);

let cache = {};
if (useCache && fs.existsSync(CACHE)) {
  try { cache = JSON.parse(fs.readFileSync(CACHE, 'utf8')); } catch { cache = {}; }
}

function classify(code) {
  if (code >= 200 && code < 400) return 'viva';
  if (code === 401 || code === 403) return 'bloqueada';
  if (code === 404 || code === 410) return 'MUERTA';
  if (code === 0 || code >= 500) return 'inconcluyente';
  return 'revisar';
}

async function probe(url) {
  if (cache[url]) return cache[url];
  let out;
  try {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), TIMEOUT);
    const res = await fetch(url, {
      redirect: 'follow',
      signal: ctl.signal,
      headers: {
        // Identificarse es lo honesto: esto NO es saltarse un control de
        // acceso, es decir que la peticion no es un navegador.
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) politics-wiki-refcheck/1.0',
        accept: 'text/html,application/xhtml+xml,*/*;q=0.8',
        'accept-language': 'es,en;q=0.8',
      },
    });
    clearTimeout(t);
    out = { code: res.status, cls: classify(res.status) };
  } catch (err) {
    const msg = String((err && err.message) || err);
    out = { code: 0, cls: 'inconcluyente', note: /abort/i.test(msg) ? 'timeout' : msg.slice(0, 50) };
  }
  cache[url] = out;
  return out;
}

async function main() {
  const queue = unique.slice();
  const results = new Map();
  await Promise.all(Array.from({ length: Math.min(CONC, queue.length) }, async () => {
    while (queue.length) {
      const it = queue.shift();
      results.set(it.url, await probe(it.url));
      process.stdout.write(`\r  comprobadas ${results.size}/${unique.length}    `);
    }
  }));
  process.stdout.write('\r' + ' '.repeat(50) + '\r');

  const bucket = { viva: [], MUERTA: [], bloqueada: [], inconcluyente: [], revisar: [] };
  for (const [url, r] of results) bucket[r.cls].push({ url, ...r });

  for (const k of ['MUERTA', 'bloqueada', 'inconcluyente', 'revisar']) {
    if (!bucket[k].length) continue;
    console.log(`  ${k.toUpperCase()} (${bucket[k].length})`);
    for (const b of bucket[k].sort((a, c) => a.code - c.code)) {
      const owners = [...new Set(items.filter((i) => i.url === b.url).map((i) => i.kind + '/' + i.slug))];
      console.log(`    ${String(b.code).padStart(3)}  ${b.url}`);
      console.log(`         en: ${owners.join(', ')}`);
    }
    console.log('');
  }
  console.log(`  resumen: ${bucket.viva.length} vivas | ${bucket.MUERTA.length} muertas | ${bucket.bloqueada.length} bloqueadas | ${bucket.inconcluyente.length} inconcluyentes`);
  fs.writeFileSync(CACHE, JSON.stringify(cache));
  if (bucket.MUERTA.length) process.exitCode = 1;
}

main();
