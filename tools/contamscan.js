// Detector de contaminacion con codepoints exactos, para reparation quirurgica.
// Uso: node contamscan.js [<fichero.js> ...]
// Sin argumentos escanea TODO js/data. Antes de cambiar, una ejecucion sin
// argumentos recorria cero ficheros y aun asi imprimia 'total: 0', lo que
// parece un aprobado y no lo era.
// Salida: por linea, cada caracter fuera del rango latino con su U+XXXX y contexto.
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const RE = /[\uFFFD\u4E00-\u9FFF\u3040-\u30FF\uAC00-\uD7AF\u0400-\u04FF\u0600-\u06FF\u0590-\u05FF\u0370-\u03FF]/g;

function scan(file) {
  const src = fs.readFileSync(file, 'utf8');
  const lines = src.split(/\r?\n/);
  const out = [];
  lines.forEach((line, i) => {
    RE.lastIndex = 0;
    const hits = [];
    let m;
    while ((m = RE.exec(line)) !== null) {
      const cp = m[0].codePointAt(0);
      const hx = cp.toString(16).toUpperCase().padStart(4, '0');
      const already = hits.some((h) => h.hx === hx);
      if (!already) hits.push({ ch: m[0], hx });
    }
    if (hits.length) {
      const first = line.search(RE);
      const from = Math.max(0, first - 80);
      out.push({
        line: i + 1,
        chars: hits.map((h) => 'U+' + h.hx + ' "' + h.ch + '"').join(', '),
        context: line.slice(from, first + 80)
      });
    }
  });
  return out;
}

let total = 0;
const ARGOS = process.argv.slice(2);
const FILES = ARGOS.length ? ARGOS : (function walk(d, out) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, out); else if (e.name.endsWith('.js')) out.push(p);
  }
  return out;
})(path.join(ROOT, 'js', 'data'), []);
if (!FILES.length) { console.error('ABORTO: 0 ficheros que escanear'); process.exit(1); }
console.log('ESCANEADOS ' + FILES.length + ' ficheros'
  + (ARGOS.length ? ' (argumentos dados)' : ' (todo js/data por defecto)'));
for (const file of FILES) {
  let rows;
  try {
    rows = scan(file);
  } catch (err) {
    console.log('NO SE PUDO LEER: ' + file + ' (' + err.message + ')');
    continue;
  }
  const name = file.replace(/^.*[\\/]/, '');
  if (!rows.length) {
    console.log('LIMPIO  ' + name);
    continue;
  }
  console.log('SUCIO  ' + name + '  (' + rows.length + ' linea(s))');
  for (const r of rows) {
    console.log('  linea ' + r.line + ' -> ' + r.chars);
    console.log('     ...' + r.context + '...');
  }
  total += rows.length;
}
console.log('---');
console.log('total de lineas contaminadas: ' + total);
