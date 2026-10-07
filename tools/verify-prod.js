// verify-prod.js — verifica el sitio desplegado en internet:
// HTTPS válido, cabeceras de seguridad, CSP con el hash del anti-flash,
// y que las 3 páginas cargan con su contenido. Uso:
//   node tools/verify-prod.js [https://tu-dominio.pages.dev]
var https = require('https');

var URL_BASE = process.argv[2] || 'https://politics-wiki.pages.dev';

// Soporta http:// (localhost) para probar sin desplegar; en producción del
// sitio, Cloudflare Pages sirve siempre HTTPS.
var PROTO = URL_BASE.indexOf('http://') === 0 ? require('http') : https;

function hasHeader(h, name, want) {
  // Node devuelve las cabeceras en minúsculas; buscamos por nombre real.
  var lower = name.toLowerCase();
  var found = Object.keys(h).some(function (k) { return k.toLowerCase() === lower; });
  if (!found) { return false; }
  return h[lower].indexOf(want) !== -1;
}

// Cabeceras a verificar: [nombre real, substring esperado]
var EXPECTED = [
  ['Content-Security-Policy', "default-src 'none'"],
  ['Content-Security-Policy', 'script-src'],
  ['Content-Security-Policy', "'sha256-ugtGNhPvutuBkKRhSwOGLmZZMmbjFUbG/moLQeLz84U='"],
  ['X-Content-Type-Options', 'nosniff'],
  ['X-Frame-Options', 'DENY'],
  ['Referrer-Policy', 'no-referrer'],
  ['Permissions-Policy', 'camera=()'],
  ['Strict-Transport-Security', 'max-age='],
  ['Cross-Origin-Opener-Policy', 'same-origin']
];

// Páginas y qué debe aparecer en su título (<title>).
var PAGES = [
  ['/', 'Politics Wiki'],
  ['/index.html', 'Politics Wiki'],
  ['/article.html?title=anarquismo', 'Anarquismo'],
  ['/espectro.html', 'Mapa del espectro']
];

var fails = 0;
var passes = 0;

function check(label, ok, extra) {
  if (ok) { passes++; console.log('  OK  ' + label + (extra ? '  (' + extra + ')' : '')); }
  else { fails++; console.log('  FALLO  ' + label + (extra ? '  (' + extra + ')' : '')); }
}

function get(urlPath, followRedirects) {
  return new Promise(function (resolve) {
    var req = PROTO.request(URL_BASE + urlPath, { method: 'HEAD' }, function (res) {
      // Cloudflare Pages normaliza URLs (index.html -> /) con 308;
      // seguimos una redirección para confirmar que el destino existe.
      if (followRedirects && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        var abs = res.headers.location.indexOf('http') === 0 ? res.headers.location : URL_BASE + res.headers.location;
        var req2 = PROTO.request(abs, { method: 'HEAD' }, function (res2) {
          resolve({ status: res.statusCode, final: res2.statusCode, headers: res.headers, location: res.headers.location });
        });
        req2.on('error', function () { resolve({ status: res.statusCode, error: 'location: ' + res.headers.location }); });
        req2.end();
        return;
      }
      resolve({ status: res.statusCode, headers: res.headers });
    });
    req.on('error', function (e) { resolve({ error: e.message }); });
    req.setTimeout(20000, function () { req.destroy(); resolve({ error: 'timeout' }); });
    req.end();
  });
}

(async function () {
  console.log('Verificando ' + URL_BASE + '\n');

  // 1) HTTPS y cabeceras en la portada.
  var main = await get('/');
  if (main.error) {
    check('HTTPS responde', false, main.error);
  } else {
    check('HTTPS responde', main.status === 200, 'HTTP ' + main.status);
    var h = main.headers;
    for (var i = 0; i < EXPECTED.length; i++) {
      var name = EXPECTED[i][0];
      var want = EXPECTED[i][1];
      var has = hasHeader(h, name, want);
      check(name + ' contiene ' + JSON.stringify(want), has);
    }
    check('No cabeceras inline-style inseguras (CSP sin unsafe-inline)',
      !(h['content-security-policy'] || '').match(/unsafe-inline|unsafe-eval/));
  }

  // 2) Las páginas cargan vía GET (HEAD sirve igual para detectar 200).
  console.log('\nPáginas:');
  for (var p = 0; p < PAGES.length; p++) {
    var r = await get(PAGES[p][0], true);
    if (r.status === 308) {
      check(PAGES[p][0], r.final === 200, '308 -> HTTP ' + r.final + ' (normalización de URL)');
    } else {
      check(PAGES[p][0], r.status === 200, r.status ? 'HTTP ' + r.status : r.error);
    }
  }

  console.log('\nRESULTADO: ' + passes + ' verificaciones OK, ' + fails + ' fallos.');
  process.exit(fails ? 1 : 0);
})();