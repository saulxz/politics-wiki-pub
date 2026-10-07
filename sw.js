// sw.js - service worker de politics-wiki (vanilla, sin modulos ni dependencias).
//
// Estrategia: cache-first. El sitio es estatico y su CSP declara connect-src 'none',
// asi que en tiempo de ejecucion la aplicacion no hace peticiones de red propias:
// el precache de abajo es el mecanismo real del modo offline, no un extra.
//
//   INSTALL  -> precachea las 123 rutas del sitio completo
//              (nucleo + las 108 fichas) y toma el control al instante.
//              Los documentos HTML se cachean ADEMAS bajo su URL limpia (ver DOCS).
//   ACTIVATE -> borra las caches que no sean de esta version y reclama las pestanas.
//   FETCH    -> cache primero; si no hay entrada, va a la red y cachea la respuesta solo
//              si es correcta y del mismo origen (res.ok && res.type === 'basic').
//              Si la red falla, se sirve la portada cacheada.
//
// ---------------------------------------------------------------------------
// POR QUE ESTE FICHERO ES TAN DEFENSIVO (bug de produccion, 2026-09-30)
// ---------------------------------------------------------------------------
// Cloudflare Pages NO sirve /article.html: responde 308 hacia /article. Eso tiene
// una consecuencia muy grave:
//
//   Una Response cacheada que viene de una redireccion lleva res.redirected === true,
//   y el NAVEGADOR RECHAZA usar esa Response para responder a una navegacion:
//   falla con net::ERR_FAILED. Con `addAll` sobre las rutas .html, TODAS las
//   paginas quedaban con redirected === true, asi que cualquier navegacion que
//   pasara por el SW reventaba. Como el handler no tenia `.catch()` en la
//   promesa exterior de `caches.match`, un solo fallo infestaba TODAS las
//   peticiones siguientes: portada viva, resto de URLs con ERR_FAILED.
//
// El arreglo tiene tres partes:
//   1. INSTALL pide tambien la URL limpia de cada documento (200 directo, sin
//      redireccion) y la guarda bajo la clave .html, que es la que usan los
//      enlaces del sitio. Asi la entrada cacheada SI vale para navegar.
//   2. FETCH lleva un .catch() exterior: un fallo puntual ya no puede matar el SW.
//   3. FETCH, en navegaciones, cae a `ignoreSearch` para que las 108 fichas
//      funcionen offline con una sola entrada (el HTML es un contenedor vacio:
//      el texto lo pinta render.js con los datos, que si estan precacheados).
//
// Nota sobre las URLs de ficha: article.html?tipo=...&title=... con un titulo
// inexistente devuelve 404 y no se cachea (404 no cumple res.ok); el fallo de red si
// cae en la portada.

const CACHE = 'politics-wiki-v9';

// Documentos HTML: se cachean dos veces, bajo la clave .html (la que usan los
// enlaces) y con el contenido de la URL limpia (la que no viene de redireccion).
var DOCS = [
  '/index.html',
  '/article.html',
  '/espectro.html',
  '/about.html',
  '/404.html',
];

// Rutas nucleo del sitio.
const CORE = [
  '/', // portada
  '/index.html', // la portada bajo el nombre que sirve Cloudflare
  '/article.html', // contenedor de fichas
  '/espectro.html', // mapa del espectro
  '/about.html', // sobre el proyecto
  '/404.html', // pagina de error
  '/css/wiki.css', // hoja de estilos
  '/js/render.js', // render de fichas
  '/js/search.js', // indice de busqueda
  '/js/features.js', // controles de tema e idioma
  '/js/app.js', // arranque de la portada
  '/js/graph.js', // grafo de definiciones
  '/js/spectrum.js', // pintado del espectro
  '/js/motion.js', // movimiento de entrada al hacer scroll
  '/js/interactions.js', // interacciones de puntero y scroll
  '/manifest.webmanifest', // manifiesto PWA
];

// Fichas de datos: cada fichero se carga con su propio <script> (sin bundler).
const DATA = [
  // ideologias (29)
  '/js/data/anarcosindicalismo.js',
  '/js/data/anarquismo.js',
  '/js/data/capitalismo.js',
  '/js/data/capitalismo-de-estado.js',
  '/js/data/comunismo.js',
  '/js/data/conservadurismo.js',
  '/js/data/democracia-cristiana.js',
  '/js/data/ecopolitica.js',
  '/js/data/fascismo.js',
  '/js/data/federalismo.js',
  '/js/data/feminismo.js',
  '/js/data/igualitarismo.js',
  '/js/data/ilustrismo.js',
  '/js/data/islamismo-politico.js',
  '/js/data/keynesianismo.js',
  '/js/data/leninismo.js',
  '/js/data/liberalismo.js',
  '/js/data/libertarianismo.js',
  '/js/data/maoismo.js',
  '/js/data/marxismo.js',
  '/js/data/militarismo.js',
  '/js/data/nacionalismo.js',
  '/js/data/pacifismo.js',
  '/js/data/populismo.js',
  '/js/data/reformismo.js',
  '/js/data/sindicalismo.js',
  '/js/data/socialdemocracia.js',
  '/js/data/socialismo.js',
  '/js/data/totalitarismo.js',
  // partidos (30)
  '/js/data/parties/ppsoe.js',
  '/js/data/parties/partido-popular.js',
  '/js/data/parties/vox.js',
  '/js/data/parties/partido-democrata.js',
  '/js/data/parties/partido-republicano.js',
  '/js/data/parties/partido-libertario.js',
  '/js/data/parties/partido-laborista.js',
  '/js/data/parties/partido-conservador.js',
  '/js/data/parties/liberales-democratas.js',
  '/js/data/parties/spd.js',
  '/js/data/parties/cdu.js',
  '/js/data/parties/afd.js',
  '/js/data/parties/partido-socialista.js',
  '/js/data/parties/los-republicanos.js',
  '/js/data/parties/renaissance.js',
  '/js/data/parties/partito-democratico.js',
  '/js/data/parties/fratelli-ditalia.js',
  '/js/data/parties/forza-italia.js',
  '/js/data/parties/partido-dos-trabalhadores.js',
  '/js/data/parties/partido-social-democrata.js',
  '/js/data/parties/partido-liberal-social.js',
  '/js/data/parties/morena.js',
  '/js/data/parties/pri.js',
  '/js/data/parties/pan.js',
  '/js/data/parties/podemos.js',
  '/js/data/parties/sumar.js',
  '/js/data/parties/erc.js',
  '/js/data/parties/junts.js',
  '/js/data/parties/pnv.js',
  '/js/data/parties/eh-bildu.js',
  // gobiernos (21)
  '/js/data/gobiernos/china.js',
  '/js/data/gobiernos/corea-del-norte.js',
  '/js/data/gobiernos/rusia.js',
  '/js/data/gobiernos/japon.js',
  '/js/data/gobiernos/india.js',
  '/js/data/gobiernos/alemania.js',
  '/js/data/gobiernos/francia.js',
  '/js/data/gobiernos/estados-unidos.js',
  '/js/data/gobiernos/austria.js',
  '/js/data/gobiernos/dinamarca.js',
  '/js/data/gobiernos/espana.js',
  '/js/data/gobiernos/italia.js',
  '/js/data/gobiernos/polonia.js',
  '/js/data/gobiernos/portugal.js',
  '/js/data/gobiernos/suecia.js',
  '/js/data/gobiernos/belgica.js',
  '/js/data/gobiernos/bulgaria.js',
  '/js/data/gobiernos/chipre.js',
  '/js/data/gobiernos/eslovaquia.js',
  '/js/data/gobiernos/eslovenia.js',
  '/js/data/gobiernos/estonia.js',
  // geopolitica (10)
  '/js/data/geo/orden-multipolar.js',
  '/js/data/geo/guerra-en-ucrania.js',
  '/js/data/geo/competencia-estados-unidos-china.js',
  '/js/data/geo/energia-y-dependencias.js',
  '/js/data/geo/comercio-y-globalizacion.js',
  '/js/data/geo/inestabilidad-sahel.js',
  '/js/data/geo/migraciones-y-demografia.js',
  '/js/data/geo/carrera-tecnologica.js',
  '/js/data/geo/proceso-soberanista-catalan.js',
  '/js/data/geo/violencia-politica-vasca.js',
  // organizaciones (10)
  '/js/data/orgs/onu.js',
  '/js/data/orgs/otan.js',
  '/js/data/orgs/union-europea.js',
  '/js/data/orgs/fmi.js',
  '/js/data/orgs/banco-mundial.js',
  '/js/data/orgs/omc.js',
  '/js/data/orgs/aiea.js',
  '/js/data/orgs/oms.js',
  '/js/data/orgs/brics.js',
  '/js/data/orgs/g20.js',
  // pensadores (4)
  '/js/data/pensadores/marx.js',
  '/js/data/pensadores/hayek.js',
  '/js/data/pensadores/rawls.js',
  '/js/data/pensadores/arendt.js',
  // conceptos (4)
  '/js/data/conceptos/democracia.js',
  '/js/data/conceptos/soberania.js',
  '/js/data/conceptos/estado-de-derecho.js',
  '/js/data/conceptos/separacion-de-poderes.js',
];

const PRECACHE = CORE.concat(DATA);

// Cachea un documento HTML de forma navegable.
//
// `cache.add()` NO sirve aqui: cuando la ruta sufre el 308 de Cloudflare, el
// `add` falla y no deja entrada, y cuando si la deja queda marcada con
// redirected === true, que el navegador no acepta para una navegacion. Asi que
// lo hacemos a mano, y solo guardamos Responses que NO vengan de redireccion:
//
//   1) Si la ruta .html responde 200 sin redireccion (servidor local, file://),
//      se guarda tal cual. No se pide jamas la URL limpia en este caso: un
//      servidor con fallback SPA devuelve la portada con 200 ante cualquier ruta
//      desconocida, y cachearla aqui serviria la portada en todas las paginas.
//   2) Si viene de redireccion, se pide la URL limpia, que llega 200 y sin
//      redireccion. Si el servidor no la sirve, no se guarda nada: es preferible
//      quedarse sin entrada offline que guardar una respuesta envenenada.
function cacheDoc(c, doc) {
  var clean = doc.replace(/\.html$/, '') || '/';
  // Guardamos la Response solo si es utilizable para navegar. Devolvemos la
  // promesa de `put` (o null), nunca el resultado de `put`: `cache.put()`
  // resuelve con `undefined`, y comprobar ese valor daria siempre falso.
  var guardar = function (res) {
    if (res && res.ok && res.type === 'basic' && !res.redirected) {
      return c.put(doc, res);
    }
    return null;
  };
  return fetch(doc, { cache: 'reload' })
    .then(guardar)
    .catch(function () { return null; })
    .then(function (hecho) {
      if (hecho !== null) { return hecho; }
      return fetch(clean, { cache: 'reload' })
        .then(guardar)
        .catch(function () { return null; });
    });
}

self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(CACHE).then(function (c) {
    // Precache tolerante: `addAll` es todo-o-nada, de modo que un unico 404
    // aborta la instalacion completa y el sitio se queda sin SW. Vamos entrada
    // por entrada, con `cache: 'reload'` para no leer de una cache vieja, e
    // ignorando los fallos: una ruta que el servidor no sirva no es motivo para
    // dejar al resto sin precachear. Los documentos HTML se dejan fuera: los
    // lleva cacheDoc(), que necesita mas control sobre la redireccion.
    var adds = PRECACHE.filter(function (url) { return DOCS.indexOf(url) === -1; })
      .map(function (url) {
        return c.add(new Request(url, { cache: 'reload' })).catch(function () { return null; });
      });
    return Promise.all(adds).then(function () {
      return Promise.all(DOCS.map(function (doc) { return cacheDoc(c, doc); }));
    });
  }));
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (key) {
      // El prefijo identifica las caches de ESTE sitio: se borran las versiones
      // anteriores y se respetan las de otros. Sin esta distincion, subir CACHE
      // no purga la v vieja y el `caches.match` de FETCH la sigue encontrando:
      // quien ya habia visitado se quedaria con el HTML y el JS antiguos.
      if (key.indexOf('politics-wiki-') !== 0) { return null; }
      return key === CACHE ? null : caches.delete(key);
    }));
  }));
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  var request = event.request;
  if (request.method !== 'GET') { return; }
  var isNav = request.mode === 'navigate';

  event.respondWith(
    // 1) Coincidencia exacta. Nunca devolvemos a una navegacion una entrada
    //    que venga de una redireccion: el navegador la rechaza (ERR_FAILED).
    caches.match(request).then(function (hit) {
      if (hit && isNav && hit.redirected) { return null; }
      return hit;
    }).catch(function () {
      return null;
    }).then(function (hit) {
      if (hit) { return hit; }

      // 2) En navegaciones, segunda pasada ignorando el query string: asi las
      //    108 fichas se sirven con una sola entrada (el HTML es un contenedor
      //    vacio; el texto lo pinta render.js con los datos precacheados).
      if (isNav) {
        return caches.match(request, { ignoreSearch: true }).then(function (loose) {
          if (loose && !loose.redirected) { return loose; }
          return null;
        }).catch(function () {
          return null;
        }).then(function (loose) {
          if (loose) { return loose; }
          return networkThenCache(request);
        });
      }
      return networkThenCache(request);
    }).catch(function () {
      // 3) Sin red: servimos la portada cacheada. Preferimos la clave "/" porque es la
      //    unica que NO pasa por el 308, y una respuesta con redirected === true
      //    no vale para una navegacion.
      return caches.match('/').then(function (home) {
        return home || caches.match('/index.html');
      }).then(function (page) {
        // Nunca resolvamos a null: `respondWith(null)` es un ERR_FAILED
        // garantizado, y seria justo el fallo que este handler evita.
        return page || new Response(
          'Sin conexion y sin cache guardada. Conectate una vez para instalar la version offline.',
          { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
        );
      });
    })
  );
});

function networkThenCache(request) {
  return fetch(request).then(function (res) {
    // Solo Responses del mismo origen y con estado correcto: excluye los 404 de
    // article.html?tipo=...&title=... y cualquier recurso de otro origen.
    if (res && res.ok && res.type === 'basic') {
      var copy = res.clone();
      caches.open(CACHE).then(function (c) {
        c.put(request, copy);
        // Si vino de una redireccion (el 308 de Cloudflare), guardala tambien
        // bajo la URL final: es la que acabara pidiendo el navegador.
        if (res.redirected && res.url) {
          c.put(res.url, copy.clone());
        }
      });
    }
    return res;
  });
}
