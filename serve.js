/**
 * Servidor est\u00e1tico sin dependencias para politics-wiki.
 *
 *   node serve.js            -> http://localhost:4321
 *   node serve.js 8080       -> http://localhost:8080
 *
 * El sitio tambi\u00e9n funciona abriendo index.html directamente en el navegador
 * (dise\u00f1ado con scripts cl\u00e1sicos, sin ES modules ni fetch), pero este
 * servidor es lo recomendado para desarrollo.
 */

'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const ROOT = __dirname;
const PORT = Number(process.argv[2] || process.env.PORT || 4321);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, {
    'Content-Type': 'text/plain; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
    ...headers,
  });
  res.end(body);
}

function resolveSafe(relative) {
  const decoded = decodeURIComponent(relative.split('?')[0].split('#')[0]);
  const target = path.resolve(ROOT, '.' + path.posix.normalize(decoded));
  // Impide escapar del directorio ra\u00edz (path traversal).
  if (target !== ROOT && !target.startsWith(ROOT + path.sep)) return null;
  return target;
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url);
  let pathname = parsed.pathname || '/';

  if (pathname === '/') pathname = '/index.html';

  let filePath = resolveSafe(pathname);
  if (!filePath) return send(res, 403, '403 Forbidden');

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        const notFoundPage = path.join(ROOT, '404.html');
        if (fs.existsSync(notFoundPage)) {
          const body = fs.readFileSync(notFoundPage);
          return send(res, 404, body, { 'Content-Type': MIME['.html'] });
        }
        return send(res, 404, '404 - No encontrado: ' + pathname);
      }

      const type = MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
      send(res, 200, data, {
        'Content-Type': type,
        'Cache-Control': 'no-cache',
      });
    });
  });
});

server.listen(PORT, () => {
  console.log('');
  console.log('  politics-wiki en marcha');
  console.log('  ->  http://localhost:' + PORT);
  console.log('');
  console.log('  Ctrl+C para detener.');
  console.log('');
});
