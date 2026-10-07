// Servidor de prueba TEMPORAL para validar la CSP de _headers en un
// navegador real. Sirve el sitio y aplica exactamente las cabeceras del
// fichero _headers, replicando la semantica de Cloudflare Pages:
//   - Todas las reglas cuyo patron coincide con la ruta se aplican.
//   - Si una cabecera se repite, los valores se unen con ", ".
//   - "! Cabecera" dentro de una regla ELIMINA esa cabecera (detach),
//     sustituyendo las de reglas mas pervasivas antes de re-anadir.
// Solo para QA local, NO se sube a produccion.
var http = require('http');
var fs = require('fs');
var path = require('path');

var ROOT = path.join(__dirname, '..');

// Parseamos _headers completo: secciones separadas por patron de ruta.
// Formato (igual que Cloudflare):
//   # comentario
//   <patron>
//     Cabecera: valor
//     ! Cabecera   <- elimina la cabecera de reglas previas
function loadRules() {
  var raw = fs.readFileSync(path.join(ROOT, '_headers'), 'utf8');
  var rules = [];
  var current = null;
  raw.split('\n').forEach(function (line) {
    var line = line.replace(/\r$/, '');
    var trimmed = line.trim();
    if (!trimmed || trimmed.charAt(0) === '#') { return; }
    // Linea sin indentacion = patron de ruta (nueva regla).
    if (line.charAt(0) !== ' ') {
      current = { pattern: trimmed, headers: {}, remove: [] };
      rules.push(current);
      return;
    }
    if (!current) { return; }
    if (trimmed.charAt(0) === '!') {
      current.remove.push(trimmed.slice(1).trim());
      return;
    }
    var idx = trimmed.indexOf(':');
    if (idx > 0) {
      current.headers[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim();
    }
  });
  return rules;
}

// Mismo matching que Cloudflare: /* cubre todo, /sw.js solo esa ruta.
function matches(pattern, urlPath) {
  if (pattern === '/*' || pattern === 'https://:project.pages.dev/*') { return true; }
  var splat = pattern.indexOf('*');
  if (splat !== -1) {
    return urlPath.indexOf(pattern.slice(0, splat)) === 0;
  }
  return urlPath === pattern;
}

function headersFor(urlPath) {
  var out = {};
  RULES.forEach(function (rule) {
    if (!matches(rule.pattern, urlPath)) { return; }
    // Detach primero: elimina lo que hayan puesto reglas pervasivas.
    rule.remove.forEach(function (name) { delete out[name]; });
    // Despues aplica/une.
    Object.keys(rule.headers).forEach(function (name) {
      if (out[name] !== undefined) { out[name] = out[name] + ', ' + rule.headers[name]; }
      else { out[name] = rule.headers[name]; }
    });
  });
  return out;
}

var RULES = loadRules();
console.log('Reglas cargadas:', RULES.map(function (r) { return r.pattern; }).join(', '));

var MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.md': 'text/plain; charset=utf-8'
};

http.createServer(function (req, res) {
  var urlPath = decodeURIComponent(req.url.split('?')[0]);
  var filePath = path.join(ROOT, urlPath === '/' ? 'index.html' : urlPath);
  if (!filePath.startsWith(ROOT)) { res.writeHead(403); return res.end('403'); }

  fs.readFile(filePath, function (err, data) {
    if (err) {
      // SPA: cualquier ruta sin fichero -> index.html (como en prod)
      filePath = path.join(ROOT, 'index.html');
      fs.readFile(filePath, function (err2, data2) {
        if (err2) { res.writeHead(404); return res.end('404 ' + filePath); }
        res.writeHead(200, Object.assign({ 'Content-Type': 'text/html; charset=utf-8' }, headersFor(urlPath)));
        res.end(data2);
      });
      return;
    }
    var ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, Object.assign({ 'Content-Type': MIME[ext] || 'application/octet-stream' }, headersFor(urlPath)));
    res.end(data);
  });
}).listen(4322, function () {
  console.log('CSP test server en http://localhost:4322');
});