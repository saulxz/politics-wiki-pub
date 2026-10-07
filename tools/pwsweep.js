// Barrido mecanico del defecto de registro de dominios.
//
// CAUSA: los 9 articulos v1 cargan antes en el HTML y crean
//   window.PW = { articles: {} }
// Por eso un fallback del tipo
//   })(window.PW = window.PW || { articles: {}, parties: {}, ... })
// NUNCA se evalua: window.PW ya es truthy, luego PW.parties queda undefined
// y `PW.parties['x'] = ...` revienta en tiempo de ejecucion.
// node --check no lo detecta porque el codigo es sintacticamente valido.
//
// ARREGLE: un init defensivo como PRIMERA sentencia dentro del cuerpo del IIFE.
//   (function (PW) {
//     PW.parties = PW.parties || {};
//     ...
//   })(window.PW = window.PW || { articles: {} });
//
// Uso:
//   node pwsweep.js                  -> solo informe
//   node pwsweep.js --fix            -> inyecta el init donde falte
//   node pwsweep.js --fix --root=DIR -> opera sobre otra raiz (ensayos)
//   node pwsweep.js --fix --only=a,b -> limita a esos slugs
//
// Por que existe --only: mientras los agentes escriben, el directorio esta
// vivo y un barrido global corromperia ficheros a medias. --only permite
// tratar solo los ficheros cuyos agentes ya han terminado.
//
// Es idempotente: los ficheros que ya tengan el init no se tocan.

const fs = require('fs');
const path = require('path');

const rootArg = process.argv.find((a) => a.startsWith('--root='));
const ROOT = rootArg ? rootArg.slice('--root='.length) : require('path').join(__dirname, '..', 'js', 'data');
const FIX = process.argv.includes('--fix');
const onlyArg = process.argv.find((a) => a.startsWith('--only='));
const ONLY = onlyArg ? new Set(onlyArg.slice('--only='.length).split(',').map((s) => s.trim()).filter(Boolean)) : null;
const REGISTRIES = [
  { dir: 'parties', reg: 'parties' },
  { dir: 'geo', reg: 'geo' },
  { dir: 'orgs', reg: 'orgs' },
  { dir: 'gobiernos', reg: 'gobiernos' },
  { dir: 'pensadores', reg: 'pensadores' },
  { dir: 'conceptos', reg: 'conceptos' },
];

// Abre el IIFE y captura la indentacion de la linea siguiente.
const IIFE = /(\(\s*function\s*\(\s*PW\s*\)\s*\{[ \t]*\r?\n)([ \t]*)/;

let fixed = 0;
let ok = 0;
let skipped = 0;
const problems = [];

for (const { dir, reg } of REGISTRIES) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) {
    console.log(`[${dir}] todavia no existe`);
    continue;
  }
  const files = fs.readdirSync(abs).filter((f) => f.endsWith('.js')).sort();
  const bad = [];
  for (const f of files) {
    const slug = f.replace(/\.js$/, '');
    if (ONLY && !ONLY.has(slug)) continue;
    const full = path.join(abs, f);
    const src = fs.readFileSync(full, 'utf8');

    if (src.includes(`PW.${reg} = PW.${reg} || {}`)) {
      ok++;
      continue;
    }

    if (!FIX) {
      bad.push(`${dir}/${f}`);
      continue;
    }

    if (!IIFE.test(src)) {
      problems.push(`${dir}/${f}: no encuentro elcabecera (function (PW) {`);
      continue;
    }
    const out = src.replace(IIFE, (m, head, indent) => `${head}${indent}PW.${reg} = PW.${reg} || {};\n${indent}`);
    fs.writeFileSync(full, out, 'utf8');
    fixed++;
    console.log(`  corregido ${dir}/${f}  ->  PW.${reg} = PW.${reg} || {};`);
  }
  if (bad.length) problems.push(...bad);
}

console.log('');
console.log(`con init correcto: ${ok}`);
console.log(FIX ? `corregidos ahora:  ${fixed}` : `SIN init (pendientes): ${problems.length}`);
if (!FIX && problems.length) {
  console.log('');
  for (const p of problems) console.log(`  - ${p}`);
}
for (const p of problems) if (p.includes('no encuentro')) console.log(`  ! ${p}`);
