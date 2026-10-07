/* politics-wiki · js/features.js
 *
 * ===== v2 · interfaz y funciones =====
 *
 * Tercera capa: preferencias de lectura, progreso, volver arriba, artículo
 * aleatorio, ficha del artículo, favoritos, atajos de teclado, hovercards,
 * permalinks de sección e índice alfabético. Script clásico (sin módulos, sin
 * build) para que también funcione abierto con file://. Contrato: FEATURES.md.
 *
 * Se carga el último y con `defer`, así que cuando arranca en DOMContentLoaded
 * `app.js` ya ha renderizado la vista. Todo lo que añade lo hace sobre el DOM ya
 * pintado; no toca `render.js`, `search.js` ni `app.js` (§3.8).
 *
 * allow: SIZE_OK — FEATURES.md §2 exige que esta lógica viva en un único
 * fichero nuevo y prohíbe crear ningún otro; el proyecto es sin build, así que
 * partirlo en módulos exigiría un bundler y rompería "cero dependencias" y el
 * arranque por file://. El fichero está dividido en secciones por
 * responsabilidad.
 */
(function (PW) {
  'use strict';

  /* ================================================================
   * 0 · Constantes y estado
   * ================================================================ */

  var PREFS_KEY = 'politics-wiki:prefs';
  var FAVS_KEY = 'politics-wiki:favs';
  var ARTICLE_URL = 'article.html?title=';

  // §3 y §4 de CONTRACT-V3.md: `?tipo=` vacío o ausente es ideología, y así
  // sigue siendo la ruta de v1. Solo los otros tres dominios llevan `tipo`.
  var DEFAULT_KIND = 'ideologia';

  var DEFAULTS = { theme: 'auto', size: 'md', measure: 'normal' };
  var THEMES = ['claro', 'oscuro', 'sepia', 'auto'];
  var SIZES = ['sm', 'md', 'lg', 'xl'];
  var MEASURES = ['estrecha', 'normal', 'amplia'];
  var SIZE_LABELS = { sm: 'Pequeño', md: 'Normal', lg: 'Grande', xl: 'Muy grande' };
  var PANELS = {
    prefs: { button: 'pw-btn-prefs', panel: 'pw-prefs-panel', label: 'preferencias de lectura' },
    favs: { button: 'pw-btn-favs', panel: 'pw-favs-panel', label: 'mis artículos' }
  };

  var MAX_FAVS = 50;         // §6.5: tope razonable
  var WORDS_PER_MINUTE = 220;
  var TOTOP_PX = 600;        // §6.2
  var HOVER_DELAY_MS = 120;  // §6.7
  var COPIED_MS = 1200;      // §6.8
  var SUMMARY_CHARS = 180;   // §6.7

  // Escalonado del filtro por letra (§12). 50ms es lo que tarda el ojo en
  // seguir el siguiente escalón sin perder la serie; el tope evita la rampa
  // larga: con treinta artículos por letra, sin tope, el último entraría más de
  // un segundo después del primero y la rejilla parecería rota. A partir del
  // escalón `AZ_STEP_CAP` ya no crece el retardo y todas las restantes salen
  // con el del último escalonado, en bloque.
  var AZ_STEP_MS = 50;
  var AZ_STEP_CAP = 8;

  // Marcados literales del §3.4 y §3.7: no interpolan datos de artículos, así
  // que no pasan por escapeHtml. Todo lo que sí lleve datos se escapa en su punto.
  var INFO_MARKUP = [
    '<div class="pw-articleinfo-title">Datos del artículo</div>',
    '<dl class="pw-articleinfo-list">',
    '<div class="pw-articleinfo-row"><dt>Palabras</dt><dd id="pw-info-words">—</dd></div>',
    '<div class="pw-articleinfo-row"><dt>Lectura</dt><dd id="pw-info-time">—</dd></div>',
    '<div class="pw-articleinfo-row"><dt>Secciones</dt><dd id="pw-info-sections">—</dd></div>',
    '<div class="pw-articleinfo-row"><dt>Referencias</dt><dd id="pw-info-refs">—</dd></div>',
    '</dl>',
    '<button type="button" class="pw-fav-toggle" id="pw-fav-toggle" aria-pressed="false">',
    '<span class="pw-fav-star" aria-hidden="true">★</span>',
    '<span class="pw-fav-label">Guardar en mis artículos</span>',
    '</button>'
  ].join('');

  var HOVERCARD_MARKUP = [
    '<div class="pw-hovercard-title"></div>',
    '<div class="pw-hovercard-sub"></div>',
    '<div class="pw-hovercard-text"></div>'
  ].join('');

  var prefs = copyOf(DEFAULTS);
  var favs = [];
  var dom = {};            // nodos del §3 resueltos en init()
  var timers = [];         // temporizadores vivos, para limpiar en pagehide
  var warned = {};         // un solo aviso por clave, para no inundar la consola
  var azGroups = [];       // [{ link, letter, card, cards }]: el índice del §3.9
  var azActive = '';       // letra filtrada ('' = sin filtro) en #articulos-grid
  var azWas = '';          // la letra de la pulsación anterior, para saber qué cambia
  var headerSearch = null; // form de la cabecera, oculto tras la lupa
  var headerSearchOpen = false; // su estado LÓGICO; el atributo va con retardo
  var frame = 0;           // requestAnimationFrame pendiente de la barra
  var hoverTimer = 0;      // retardo de entrada de la hovercard
  var hoverFor = null;     // enlace que tiene programada la hovercard
  var bound = false;       // evita doble escucha si init() se repite (bfcache)

  /* ================================================================
   * 0b · Dominio activo y claves por entrada (CONTRACT-V3.md §2, §3, §4, §6)
   * ================================================================ */

  /*
   * Desde v3 el sitio tiene cinco dominios y esta capa ya no puede suponer que
   * todo es ideología. Aquí vive el único sitio donde se traduce "dominio" a
   * algo usable —una clave de almacenamiento o una ruta— para que ninguna otra
   * parte tenga que saber cómo se escribe.
   */

  /** Los dominios de §2, o los que publique el motor. Nunca lanza. */
  function kinds() {
    if (Array.isArray(PW.KINDS) && PW.KINDS.length) { return PW.KINDS; }
    return ['ideologia', 'partido', 'gobierno', 'geopolitica', 'organizacion', 'pensador', 'concepto'];
  }

  /**
   * Dominio de un prefijo (`partido` de `partido:ppsoe`, `tipo=` de un href), o
   * `null` si no es un dominio: entonces no era un prefijo, era parte del slug.
   * Acepta los dos atajos de §6 (`geo`, `org`). No delega en `PW.kindOf`
   * porque este necesita distinguir "no es un prefijo" de "es ideología".
   */
  function prefixKind(value) {
    var text = String(value === null || value === undefined ? '' : value).toLowerCase().trim();
    if (kinds().indexOf(text) >= 0) { return text; }
    if (text === 'geo') { return 'geopolitica'; }
    if (text === 'org') { return 'organizacion'; }
    return null;
  }

  /** `?tipo=` normalizado. Delega en el motor; sin él, contra la lista local. */
  function kindOf(value, quiet) {
    if (typeof PW.kindOf === 'function') { return PW.kindOf(value, quiet); }
    return prefixKind(value) || DEFAULT_KIND;
  }

  /**
   * Clave de almacenamiento de una entrada: `dominio:slug`. Sin ella, un partido y
   * una ideología con el mismo nombre se pisaban. La clave vive DENTRO del
   * array de `politics-wiki:favs`, así que no puede chocar ni con
   * `politics-wiki:prefs` ni con ninguna otra clave del almacén.
   */
  function storeKey(kind, slug) {
    var name = String(slug === null || slug === undefined ? '' : slug).trim();
    if (!name) { return ''; }
    return kindOf(kind, true) + ':' + name;
  }

  /**
   * Lee una clave de almacenamiento. Una clave SIN prefijo es de la v1, cuando
   * solo había ideologías: se interpreta como ideología, que es lo que el
   * usuario tenía guardado. La migración es este `if`, no un paso aparte.
   */
  function parseStoreKey(value) {
    var text = String(value === null || value === undefined ? '' : value).trim();
    if (!text) { return null; }
    var cut = text.indexOf(':');
    if (cut > 0) {
      var kind = prefixKind(text.slice(0, cut));
      if (kind) { return { kind: kind, slug: text.slice(cut + 1).trim() }; }
    }
    return { kind: DEFAULT_KIND, slug: text };
  }

  /** Dominio de una entrada ya resuelta. `normalizeEntry` siempre lo pone. */
  function kindOfEntry(entry) {
    return prefixKind(entry && entry.kind) || DEFAULT_KIND;
  }

  /** Búsqueda dentro de un dominio, con el motor de v3 y con el de v1. */
  function getIn(kind, slug) {
    if (typeof PW.getIn === 'function') { return PW.getIn(kind, slug); }
    // `PW.get` con un argumento es ideologías por aridad (CONTRACT-V3.md §4).
    if (PW.get.length > 1) { return PW.get(kind, slug); }
    return kindOf(kind, true) === DEFAULT_KIND ? PW.get(slug) : null;
  }

  /**
   * Resuelve una entrada desde una clave, un slug o la entrada misma. `null` si
   * no existe: así una clave muerta se descarta igual que antes.
   */
  function entryOf(value) {
    if (value && typeof value === 'object') { return value; }
    var pair = parseStoreKey(value);
    if (!pair || !pair.slug) { return null; }
    return getIn(pair.kind, pair.slug);
  }

  /**
   * Clave de una entrada, de una clave o de un slug. No comprueba que exista:
   * para quitar un favorito y para medirlo basta con la clave, y así no se hace
   * una búsqueda de más.
   */
  function keyOf(value) {
    if (value && typeof value === 'object') { return storeKey(kindOfEntry(value), value.slug); }
    var pair = parseStoreKey(value);
    return pair ? storeKey(pair.kind, pair.slug) : '';
  }

  /**
   * Ruta de una entrada. Las ideologías conservan la URL de v1, sin `tipo`; los
   * otros tres lo llevan delante. Se delega en `PW.articleUrl` cuando existe
   * para que un favorito y una tarjeta apunten a la misma dirección.
   */
  function articleUrl(kind, slug) {
    var name = String(slug === null || slug === undefined ? '' : slug).trim();
    if (!name) { return ARTICLE_URL; }
    var domain = kindOf(kind, true);
    if (typeof PW.articleUrl === 'function') {
      return PW.articleUrl({ kind: domain, slug: name });
    }
    return domain === DEFAULT_KIND
      ? ARTICLE_URL + encodeURIComponent(name)
      : 'article.html?tipo=' + encodeURIComponent(domain) + '&title=' + encodeURIComponent(name);
  }

  /* ================================================================
   * 1 · Utilidades
   * ================================================================ */

  function copyOf(source) {
    return {
      theme: source.theme,
      size: source.size,
      measure: source.measure
    };
  }

  function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList || []);
  }

  function closest(node, selector) {
    return node && node.closest ? node.closest(selector) : null;
  }

  function find(selector) {
    return document.querySelector(selector);
  }

  /** `scope` es opcional: sin él, `document`, como en el resto del fichero. */
  function findAll(selector, scope) {
    return toArray((scope || document).querySelectorAll(selector));
  }

  function clear(node) {
    while (node && node.firstChild) { node.removeChild(node.firstChild); }
  }

  /**
   * Deja ver un bloque, con entrada si hay quien la sepa hacer. El puente es
   * `js/interactions.js` §8b: pone `hidden = false` y anima lo que ya está
   * pintado. Sin esa capa —o con movimiento reducido— el par de funciones hace
   * el giro del atributo y nada más, que es como funcionaba todo hasta aquí.
   *
   * Estas dos son el ÚNICO sitio de este fichero que llama al puente, y las dos
   * dejan `hidden` en el mismo valor que habrían dejado escribiendo a mano.
   */
  function showBlock(el, delay) {
    var fx = PW.interactions;
    if (fx && typeof fx.reveal === 'function') { fx.reveal(el, { delay: delay || 0 }); return; }
    el.hidden = false;
  }

  /** Como `showBlock`, al revés: primero se desvanece y `hidden` va al final.
   *
   *  `done` es opcional y lo usa §4b. El reflow de la rejilla no está terminado
   *  hasta que la última tarjeta que se va ha salido del flujo, que es justo lo
   *  que `collapse` avisa al terminar —con o sin movimiento—: el hueco solo se
   *  cierra en ese instante. */
  function hideBlock(el, delay, done) {
    var fx = PW.interactions;
    if (fx && typeof fx.collapse === 'function') { fx.collapse(el, { delay: delay || 0 }, done); return; }
    el.hidden = true;
    if (typeof done === 'function') { done(); }
  }

  function warnOnce(key, message, detail) {
    if (warned[key]) { return; }
    warned[key] = true;
    if (detail === undefined) { console.error('PW.features: ' + message); }
    else { console.error('PW.features: ' + message, detail); }
  }

  /** Nodo obligatorio por id. Si falta, se informa una vez y se sigue (§6.10). */
  function need(id, purpose) {
    var node = document.getElementById(id);
    if (!node) {
      warnOnce('id:' + id, 'falta #' + id + ' (' + purpose + '); se omite esa parte.');
    }
    return node;
  }

  /**
   * Escribe solo si el valor cambia. Además de evitar trabajo inútil, corta el
   * bucle con el MutationObserver de §6.4: reescribir el mismo texto genera un
   * childList nuevo y la ficha volvería a pedir que se reescriba.
   */
  function setText(scope, selector, value) {
    var node = scope ? scope.querySelector(selector) : null;
    if (node && node.textContent !== value) { node.textContent = value; }
    return !!node;
  }

  function later(fn, ms) {
    var id = window.setTimeout(function () {
      var at = timers.indexOf(id);
      if (at >= 0) { timers.splice(at, 1); }
      fn();
    }, ms);
    timers.push(id);
    return id;
  }

  function cancelTimer(id) {
    if (!id) { return; }
    window.clearTimeout(id);
    var at = timers.indexOf(id);
    if (at >= 0) { timers.splice(at, 1); }
  }

  function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  /** Dependencias de render.js. Sin ellas esta capa no tiene sentido (§7). */
  function requireApi() {
    var missing = ['get', 'list', 'escapeHtml'].filter(function (name) {
      return typeof PW[name] !== 'function';
    });
    if (missing.length) {
      console.error(
        'PW.features: falta ' + missing.map(function (name) { return 'PW.' + name; }).join(', ') +
        '; se omite la capa de funciones. ¿Se cargó js/render.js?'
      );
      return false;
    }
    return true;
  }

  /* ================================================================
   * 2 · Almacenamiento: puede lanzar en modo privado (§6.1)
   * ================================================================ */

  function readKey(key) {
    try {
      return window.localStorage ? window.localStorage.getItem(key) : null;
    } catch (error) {
      warnOnce('read:' + key, 'no se puede leer "' + key + '"; el sitio funciona sin persistencia.', error);
      return null;
    }
  }

  function writeKey(key, value) {
    try {
      if (!window.localStorage) { return false; }
      window.localStorage.setItem(key, value);
      return true;
    } catch (error) {
      warnOnce('write:' + key, 'no se puede escribir "' + key + '"; los cambios no se guardarán.', error);
      return false;
    }
  }

  function dropKey(key) {
    try {
      if (window.localStorage) { window.localStorage.removeItem(key); }
    } catch (error) {
      warnOnce('drop:' + key, 'no se puede borrar "' + key + '".', error);
    }
  }

  function parse(raw, key) {
    if (!raw) { return null; }
    try {
      return JSON.parse(raw);
    } catch (error) {
      warnOnce('json:' + key, '"' + key + '" no contiene JSON válido; se usan los valores por defecto.', error);
      return null;
    }
  }

  /* ================================================================
   * 3 · Preferencias de lectura (§6.1)
   * ================================================================ */

  function pick(value, allowed) {
    var text = String(value === null || value === undefined ? '' : value).trim();
    return allowed.indexOf(text) >= 0 ? text : null;
  }

  function readPrefs() {
    var stored = parse(readKey(PREFS_KEY), PREFS_KEY);
    if (!stored || typeof stored !== 'object') { return copyOf(DEFAULTS); }
    return {
      theme: pick(stored.theme, THEMES) || DEFAULTS.theme,
      size: pick(stored.size, SIZES) || DEFAULTS.size,
      measure: pick(stored.measure, MEASURES) || DEFAULTS.measure
    };
  }

  function applyPrefs() {
    var root = document.documentElement;
    root.setAttribute('data-pw-theme', prefs.theme);
    root.setAttribute('data-pw-size', prefs.size);
    root.setAttribute('data-pw-measure', prefs.measure);
  }

  /**
   * El cambio de tema es el adoptante que le faltaba a `withViewTransition`
   * (§8 de `js/interactions.js`): el mismo `startViewTransition` que en v6
   * mantiene la cabecera en su sitio entre páginas, pero aquí sobre `root` y con
   * una clase que le dice al CSS de § v8 · 2 que esto es un cambio de luz y no una
   * navegación —sin ella el bloque se aplicaría también a la navegación, donde
   * ya hay un fundido propio—.
   *
   * La clase va ANTES de la llamada porque la instantánea antigua se toma ahí, y
   * se quita en cuanto el gancho avise. Se avisa también cuando NO hubo
   * transición —movimiento reducido, motor sin soporte, otra en marcha—, que es
   * justo el caso en que la clase tenía que irse sin esperar: los
   * pseudo-elementos no existen sin transición, así que una clase colgada no
   * rompe nada, pero dejarla puesta mentiría sobre el estado del documento.
   */
  function applyThemed() {
    var fx = PW.interactions;
    var root = document.documentElement;
    if (!fx || typeof fx.withViewTransition !== 'function') { applyPrefs(); return; }
    root.classList.add('pw-vt-theme');
    fx.withViewTransition(applyPrefs, function () { root.classList.remove('pw-vt-theme'); });
  }

  /** Refleja el estado en los `.pw-seg` y en la etiqueta del tamaño (§3.2). */
  function syncPrefsUI() {
    var panel = document.getElementById(PANELS.prefs.panel);
    toArray(panel ? panel.querySelectorAll('.pw-seg') : []).forEach(function (seg) {
      var group = seg.hasAttribute('data-theme') ? 'theme'
        : seg.hasAttribute('data-measure') ? 'measure'
          : null;
      if (!group) { return; }
      var checked = prefs[group] === seg.getAttribute('data-' + group);
      seg.setAttribute('aria-checked', checked ? 'true' : 'false');
    });
    if (dom.sizeValue) { dom.sizeValue.textContent = SIZE_LABELS[prefs.size] || prefs.size; }
  }

  function setPref(name, value) {
    var allowed = name === 'theme' ? THEMES : name === 'size' ? SIZES : name === 'measure' ? MEASURES : null;
    if (!allowed) {
      console.error('PW.features: preferencia desconocida "' + String(name) + '".', value);
      return copyOf(prefs);
    }
    var clean = pick(value, allowed);
    if (clean === null) {
      console.error('PW.features: valor no válido para "' + name + '".', value);
      return copyOf(prefs);
    }
    if (prefs[name] !== clean) {
      prefs[name] = clean;
      // Solo el tema pasa por la transición de vista: el tamaño y la medida
      // cambian el flujo del texto, y fundir el documento entero para eso sería
      // tapar el ajuste que el lector acaba de pedir. § v8 · 2.
      if (name === 'theme') { applyThemed(); } else { applyPrefs(); }
      writeKey(PREFS_KEY, JSON.stringify(prefs));
    }
    syncPrefsUI();
    return copyOf(prefs);
  }

  function resetPrefs() {
    prefs = copyOf(DEFAULTS);
    dropKey(PREFS_KEY);
    applyPrefs();
    syncPrefsUI();
    return copyOf(prefs);
  }

  function stepSize(delta) {
    var at = SIZES.indexOf(prefs.size);
    if (at < 0) { at = SIZES.indexOf(DEFAULTS.size); }
    return setPref('size', SIZES[(at + delta + SIZES.length) % SIZES.length]);
  }

  /* ================================================================
   * 4 · Progreso de lectura y volver arriba (§6.2)
   * ================================================================ */

  function scrollTop() {
    return document.documentElement.scrollTop || window.pageYOffset || 0;
  }

  /* ¿El motor mueve la barra de progreso por su cuenta?
   *
   * `css/wiki.css` § v2 · 7 declara, bajo `@supports (animation-timeline:
   * scroll())`, que la barra crezca con `animation-timeline: scroll(root
   * block)`. Cuando eso está activo, escribirle `style.transform` aquí no hace
   * falta Y estorba: una propiedad inline gana a la animación, así que el
   * escuchador seguiría mandando sobre el hilo principal y habríamos pagado la
   * vía nativa sin haberla usado. El `@supports` se comprueba con
   * `CSS.supports`, y no assumiendo que existir `scroll()` equivale a soportarla.
   *
   * El resto de `paintScroll` —el botón de volver arriba y el resaltado del
   * índice alfabético— se queda igual en los dos casos: son estado de interfaz,
   * no una posición continua, y no tienen versión en CSS. */
  var nativeScrollTimeline = !!(window.CSS && typeof window.CSS.supports === 'function' &&
    window.CSS.supports('animation-timeline', 'scroll()'));

  function scrollRatio() {
    var doc = document.documentElement;
    var span = doc.scrollHeight - doc.clientHeight;
    if (span <= 0) { return 0; }
    var ratio = scrollTop() / span;
    return ratio < 0 ? 0 : ratio > 1 ? 1 : ratio;
  }

  /* ------------------------------------------------------------------
   * v8 · 1 · LA VELOCIDAD DE LECTURA
   *
   * La barra sabía DÓNDE estabas. No distinguía leer despacio de bajar a toda
   * leche, que es la diferencia que el ojo nota y la que una barra de progreso
   * no expresaba. Esto mide la velocidad con la que se llega y la suaviza para
   * que un solo tirón no la dispare y un temblor del dedo no la altere.
   *
   * `VELOCITY_CEILING` son 2.4 px por milisegundo, unas tres pantallas por
   * segundo: más rápido de lo que se lee, más lento que un flick con inercia.
   * Por encima la variable se recorta a 1 y da igual si son 3 o 12 px/ms, porque
   * la barra no tiene más grosor que ese. El recorte está en la MEDIDA, no
   * después: un valor sin recortar haría que el suavizado tardara más en volver
   * a reposo cuanto mayor fuera el tirón.
   *
   * `VELOCITY_TAU` es la constante de tiempo del suavizado, en milisegundos. Va
   * en tiempo y no en fotogramas a propósito: a 60 Hz y a 144 Hz el mismo barrido
   * tiene que dejar la misma estela, o el efecto dependería del monitor.
   * ------------------------------------------------------------------ */
  var VELOCITY_CEILING = 2.4;
  var VELOCITY_TAU = 90;
  var VELOCITY_FLOOR = 0.0008; // por debajo de esto ya se considera reposo
  var velocity = 0;          // 0..1, la suavizada
  var velocityTop = 0;       // `scrollTop` de la muestra anterior
  var velocityAt = 0;        // reloj de la muestra anterior
  var velocityReady = false; // ¿hay ya una muestra con la que comparar?
  var velocityWritten = '';  // lo último puesto, para no escribir dos veces lo mismo

  function velocityNow() {
    return (window.performance && typeof window.performance.now === 'function')
      ? window.performance.now()
      : Date.now();
  }

  /**
   * Escribe `--pw-progress-v` en `.pw-progress`, que es donde el CSS de
   * § v8 · 1 la lee para escalar el CONTENEDOR. No en `.pw-progress-bar`: el
   * `transform` de la barra ya está ocupado —por la `animation-timeline` del
   * scroll en los motores que la tienen, por `paintScroll` en los que no— y en
   * el padre no hay competencia, porque el `transform` del padre y el del hijo
   * se componen en vez de pisarse.
   *
   * Con movimiento reducido no se escribe nada, y por `--pw-progress-v` el valor
   * inicial 0 la barra se queda en su grosor normal. El CSS vuelve a repetir lo
   * mismo con una regla propia: una cosa que depende de una custom property y
   * tiene un efecto visible tiene que ser correcta también cuando esa variable
   * no llega.
   *
   * Devuelve si QUEDA VELOCIDAD por decaer. Sin scroll, `elapsed` es 0 y el
   * factor de suavizado vale 0, así que `velocity` se queda congelada en su
   * último valor y la barra se engorda para siempre; quien llama usa este retorno
   * para seguir pidiendo fotogramas hasta que llegue a reposo.
   */
  function paintVelocity(top) {
    var track = dom.progressTrack;
    if (!track || prefersReducedMotion()) { return false; }
    var now = velocityNow();
    if (!velocityReady) {
      velocityReady = true;
      velocityTop = top;
      velocityAt = now;
      return false;
    }
    var elapsed = now - velocityAt;
    if (!(elapsed > 0)) { return velocity > 0; } // mismo milisegundo: aún queda vida
    var instant = Math.abs(top - velocityTop) / elapsed; // px por ms
    velocityTop = top;
    velocityAt = now;
    var target = instant / VELOCITY_CEILING;
    if (target > 1) { target = 1; }
    velocity += (target - velocity) * (1 - Math.exp(-elapsed / VELOCITY_TAU));
    if (velocity < VELOCITY_FLOOR) { velocity = 0; } // asintótico: sin tope nunca llega
    var rounded = velocity.toFixed(3);
    // El guard de escritura y el final del decaimiento son dos cosas distintas y
    // no pueden ser la misma línea. La estela se aplana en el mismo redondeo
    // durante varias iteraciones —`0.004` tras `0.004`—, así que cortar aquí el
    // fotograma dejaría la velocidad a medio camino para siempre. Se escribe solo
    // si cambia lo que se ve, y el decaimiento sigue hasta llegar a cero.
    if (rounded !== velocityWritten) {
      velocityWritten = rounded;
      track.style.setProperty('--pw-progress-v', rounded);
    }
    return velocity > 0; // el reloj corre hasta 0, no hasta que el redondeo se repita
  }

  function paintScroll() {
    frame = 0;
    var top = scrollTop();
    if (dom.progressBar && !nativeScrollTimeline) {
      dom.progressBar.style.transform = 'scaleX(' + scrollRatio().toFixed(4) + ')';
    }
    // Pedir otro fotograma mientras la velocidad decae es lo único que la lleva
    // a reposo: al terminar el scroll no queda ningún evento que llame a esta
    // función. Solo se reagenda si de verdad queda vida, para no dejar un rAF
    // vivo para siempre. Sin rAF no hay decaimiento y no hay nada que agendar.
    var decaying = paintVelocity(top);
    if (decaying && typeof window.requestAnimationFrame === 'function') {
      frame = window.requestAnimationFrame(paintScroll);
    }
    if (dom.toTop) { dom.toTop.hidden = top < TOTOP_PX; }
    markAzIndex(top);
  }

  function onScroll() {
    if (frame) { return; } // una sola pintura por fotograma, nunca por evento
    if (typeof window.requestAnimationFrame !== 'function') {
      warnOnce('raf', 'sin requestAnimationFrame; la barra se pinta en cada scroll.');
      paintScroll();
      return;
    }
    frame = window.requestAnimationFrame(paintScroll);
  }

  function goTop() {
    if (prefersReducedMotion()) {
      window.scrollTo(0, 0);
      return;
    }
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      window.scrollTo(0, 0); // navegadores que solo aceptan las dos sueltas
    }
  }

  /* ================================================================
   * 5 · Artículo actual y artículo aleatorio (§6.3)
   * ================================================================ */

  /** Un parámetro de la query. `app.js` no expone su `queryParam` (§7). */
  function queryParam(name) {
    try {
      var search = String(window.location.search || '').replace(/^\?/, '');
      if (!search) { return ''; }
      var pairs = search.split('&');
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        var key = decodeURIComponent(pair[0] || '').replace(/\+/g, ' ').trim();
        if (key !== name) { continue; }
        return decodeURIComponent(pair.slice(1).join('=') || '').replace(/\+/g, ' ').trim();
      }
      return '';
    } catch (error) {
      console.error('PW.features: no se pudo interpretar el parámetro "?' + name + '=".', error);
      return '';
    }
  }

  /** `?title=` de la URL, sea del dominio que sea. */
  function queryTitle() {
    return queryParam('title');
  }

  /**
   * Lo que se está viendo: página, dominio, slug y entrada. `PW.current()` es el
   * método público que el motor publica para esto (CONTRACT-V3.md §10); si no
   * estuviera —o fallara— se cae a la query, que es de donde lo saca él.
   */
  function currentPage() {
    if (typeof PW.current === 'function') {
      try {
        var state = PW.current();
        if (state) { return state; }
      } catch (error) {
        warnOnce('current', 'PW.current() falló; el dominio se resuelve por la query.', error);
      }
    }
    return {
      page: '',
      kind: kindOf(queryParam('tipo')),
      slug: queryTitle(),
      entry: null
    };
  }

  /** Dominio activo. En `index.html` a secas es ideologías, como siempre (§3). */
  function currentKind() {
    return kindOf(currentPage().kind);
  }

  /** Entrada que se está leyendo, del dominio que sea; `null` si no hay ninguna. */
  function currentArticle() {
    var state = currentPage();
    if (state.entry) { return state.entry; }
    var slug = String(state.slug || '').trim();
    return slug ? entryOf(storeKey(state.kind, slug)) : null;
  }

  /** Clave de almacenamiento de lo que se está leyendo, o '' si no hay nada. */
  function currentKey() {
    var article = currentArticle();
    return article ? keyOf(article) : '';
  }

  function random() {
    // §6.3 con los cinco dominios: el aleatorio sorts del dominio que se está
    // viendo, nunca de la enciclopedia entera. En la portada de v1 sigue siendo
    // el de ideologías, que es lo que siempre se ha hecho.
    var kind = currentKind();
    var pool = PW.list(kind).map(function (entry) { return entry.slug; });
    var here = currentKey();
    if (here) {
      // Nunca el artículo que ya se está leyendo. Comparar por clave y no por
      // slug: un partido y una ideología pueden llamarse igual.
      pool = pool.filter(function (slug) { return storeKey(kind, slug) !== here; });
    }
    if (!pool.length) {
      console.error('PW.features.random: no hay ningún artículo al que ir.');
      return null;
    }
    var slug = pool[Math.floor(Math.random() * pool.length)];
    window.location.href = articleUrl(kind, slug);
    return slug;
  }

  /* ================================================================
   * 6 · Ficha del artículo (§6.4)
   * ================================================================ */

  /**
   * `.pw-aside` lo crea `render.js` en cada render, así que la ficha se añade
   * sobre el DOM ya pintado (§3.4 y §3.8). El marcado llega en el
   * `<template>` inerte de la página: se clona para no duplicar aquí una copia
   * del §3.4 que se quedaría desincronizada. Sin `<template>`, se construye.
   */
  function ensureArticleInfo() {
    var aside = find('.pw-aside');
    if (!aside) {
      // Se llega aquí solo con un `.pw-text` presente, así que el artículo se ha
      // renderizado sin panel lateral: la ficha no tiene dónde ir (§3.4).
      warnOnce('aside', 'el artículo se ha renderizado sin <aside class="pw-aside">; no hay ficha del artículo.');
      return null;
    }
    var box = aside.querySelector('.pw-articleinfo');
    if (box) {
      ensureUpdatedRow(box);
      return box;
    }

    var template = document.getElementById('pw-articleinfo-tpl');
    if (template && template.content && template.content.firstElementChild) {
      box = template.content.firstElementChild.cloneNode(true);
    } else {
      if (!template) {
        warnOnce('info-tpl', 'falta el <template id="pw-articleinfo-tpl">; se construye la ficha con el marcado del §3.4.');
      }
      box = document.createElement('div');
      box.className = 'pw-articleinfo';
      box.innerHTML = INFO_MARKUP;
    }
    aside.appendChild(box);
    // La fila «Actualizado» no está en el `<template>` de §3.4 (que es HTML
    // estático y esta capa no puede tocar): se añade al `dl` ya clonado, con el
    // mismo criterio que el resto —una vez, y marcada para no repetirla.
    ensureUpdatedRow(box);
    return box;
  }

  /**
   * Fila «Actualizado» del `dl` de la ficha. Idempotente por `data-pw-updated`:
   * la ficha se clona del `<template>` en cada re-render de `render.js`, así que
   * el `dl` llega siempre sin la fila y `updateInfo()` la vuelve a poner.
   * Se anota al FINAL del `dl` para que la cebra de `.pw-articleinfo-row:nth-child(even)`
   * siga alternando igual que con cuatro filas, y para que la última quede sin
   * filete inferior (`…:last-child`).
   */
  function ensureUpdatedRow(box) {
    if (!box || box.querySelector('[data-pw-updated]')) { return null; }
    var list = box.querySelector('.pw-articleinfo-list');
    if (!list) { return null; }
    var row = document.createElement('div');
    row.className = 'pw-articleinfo-row';
    row.setAttribute('data-pw-updated', '1');
    // Marcado literal: sin datos, así que no pasa por escapeHtml.
    row.innerHTML = '<dt>Actualizado</dt><dd id="pw-info-updated">—</dd>';
    list.appendChild(row);
    return row;
  }

  function countWords(text) {
    var source = String(text.innerText || text.textContent || '');
    var refs = text.querySelector('.pw-references-wrap');
    if (refs) {
      var drop = String(refs.innerText || refs.textContent || '');
      if (drop) { source = source.replace(drop, ' '); } // el bloque de referencias no cuenta
    }
    return source.split(/\s+/).filter(Boolean).length;
  }

  function updateInfo() {
    var text = find('.pw-text');
    if (!text) { return; } // aún no hay artículo (o esta página no lo tiene)
    var box = ensureArticleInfo();
    if (!box) { return; }

    var words = countWords(text);
    setText(box, '#pw-info-words', String(words));
    setText(box, '#pw-info-time', Math.max(1, Math.round(words / WORDS_PER_MINUTE)) + ' min');
    setText(box, '#pw-info-sections', String(findAll('.pw-h2[id]').length));
    setText(box, '#pw-info-refs', String(findAll('.pw-references li').length));
    updateUpdatedCell(box);
  }

  /**
   * Rellena la fila «Actualizado» desde la etiqueta que pinta `render.js`. La
   * fecha legible solo existe ahí —`formatDate` es privado de §3.8—, así que se
   * lee su texto y se quita el prefijo «Actualizado:», que la fila ya pone en su
   * `dt`. Si el artículo no trae `updated`, la etiqueta no existe y la fila se
   * oculta: un «—» colgado en la ficha informa peor que su ausencia.
   */
  function updateUpdatedCell(box) {
    var row = ensureUpdatedRow(box);
    if (!row) { return; }
    var tag = find('.pw-article-actions .pw-tag-updated');
    row.hidden = !tag;
    if (!tag) { return; }
    var when = String(tag.textContent || '')
      .replace(/^\s*Actualizado\s*:?\s*/i, '')
      .trim();
    setText(row, '#pw-info-updated', when || '—');
  }

  /** Recalcula cuando `render.js` vuelve a pintar (p. ej. con las flechas del navegador). */
  function watchArticle() {
    if (dom.infoObserver) { dom.infoObserver.disconnect(); dom.infoObserver = null; }
    var main = find('main.pw-main');
    if (!main) {
      warnOnce('main', 'no se encuentra <main>; la ficha del artículo no se recalculará.');
      return;
    }
    if (typeof window.MutationObserver !== 'function') {
      warnOnce('observer', 'sin MutationObserver; la ficha solo se calcula al arrancar.');
      return;
    }
    var pending = 0;
    dom.infoObserver = new window.MutationObserver(function () {
      if (pending) { return; }
      pending = window.requestAnimationFrame(function () {
        pending = 0;
        updateInfo();
        syncFavToggle();
        // §14: `render.js` rehizo el artículo entero con `clear(root)`, así que
        // breadcrumbs, botones, ficha, anterior/siguiente, cronologías, índice
        // flotante y resaltado de `?q=` vuelven a montarse aquí. Es idempotente:
        // este mismo lote es el que dispara, y solo rellena lo que faltaba.
        syncArticleExtras();
      });
    });
    dom.infoObserver.observe(main, { childList: true, subtree: true });
  }

  /* ================================================================
   * 7 · Favoritos (§6.5)
   * ================================================================ */

  function loadFavs() {
    var stored = parse(readKey(FAVS_KEY), FAVS_KEY);
    if (!Array.isArray(stored)) { return []; }
    var seen = {};
    var clean = [];
    var migrated = false;
    stored.forEach(function (key) {
      if (typeof key !== 'string') { return; }
      var article = entryOf(key);
      if (!article) { return; }   // sin slugs muertos
      var id = keyOf(article);
      if (seen[id]) { return; }   // sin duplicados: `ppsoe` y `partido:ppsoe` son el mismo
      seen[id] = true;
      // La clave guardada puede ser un slug desnudo de la v1: al vuelo se
      // normaliza a `dominio:slug` y se persiste, sin tocar nada más.
      if (id !== key.trim()) { migrated = true; }
      clean.push(id);
    });
    if (clean.length > MAX_FAVS) {
      warnOnce('favs-cap', 'se guardaban más de ' + MAX_FAVS + ' favoritos; se conservan los primeros.', clean.length);
      clean = clean.slice(0, MAX_FAVS);
    }
    if (migrated) { writeKey(FAVS_KEY, JSON.stringify(clean)); }
    return clean;
  }

  function isFav(value) {
    var id = keyOf(value);
    return !!id && favs.indexOf(id) >= 0;
  }

  function addFav(value) {
    var article = entryOf(value);
    if (!article) {
      warnOnce('fav-unknown', 'no se puede guardar: esa entrada no existe.', value);
      return false;
    }
    var id = keyOf(article);
    if (favs.indexOf(id) >= 0) { return false; }
    if (favs.length >= MAX_FAVS) { favs.shift(); } // tope: sale el más antiguo
    favs.push(id);
    writeKey(FAVS_KEY, JSON.stringify(favs));
    syncFavs();
    return true;
  }

  function removeFav(value) {
    var id = keyOf(value);
    if (!id) { return; }
    var at = favs.indexOf(id);
    if (at < 0) { return; }
    favs.splice(at, 1);
    writeKey(FAVS_KEY, JSON.stringify(favs));
    syncFavs();
  }

  function toggleFav(value) {
    if (isFav(value)) {
      removeFav(value);
      return false;
    }
    return addFav(value);
  }

  function toggleCurrentFav() {
    var id = currentKey();
    if (!id) {
      warnOnce('fav-scope', 'la tecla «f» solo guarda artículos en la vista de artículo.');
      return false;
    }
    return toggleFav(id);
  }

  function syncFavToggle() {
    var button = document.getElementById('pw-fav-toggle');
    if (!button) { return; } // no hay ficha: no hay botón que reflejar
    var saved = isFav(currentKey());
    button.setAttribute('aria-pressed', saved ? 'true' : 'false');
    setText(button, '.pw-fav-label', saved ? 'Quitar de mis artículos' : 'Guardar en mis artículos');
  }

  function renderFavPanel() {
    if (!dom.favsList) { return; }
    clear(dom.favsList);
    dom.favsList.hidden = favs.length === 0;
    if (dom.favsEmpty) { dom.favsEmpty.hidden = favs.length > 0; }
    if (!favs.length) { return; }

    // La clave es la fuente: de ella salen el dominio, la ruta y el botón de
    // quitar. El título y la categoría solo son lo que se pinta (§6.5).
    var items = favs.map(function (id) {
      var pair = parseStoreKey(id) || { kind: DEFAULT_KIND, slug: id };
      var article = entryOf(id);
      return {
        id: id,
        kind: pair.kind,
        slug: pair.slug,
        title: (article && article.title) || pair.slug,
        category: (article && article.category) || ''
      };
    }).sort(function (a, b) {
      return String(a.title).localeCompare(String(b.title), 'es');
    });

    items.forEach(function (item) {
      var title = PW.escapeHtml(item.title);
      var node = document.createElement('a');
      node.className = 'pw-fav-item';
      node.setAttribute('href', articleUrl(item.kind, item.slug));
      node.innerHTML =
        '<span class="pw-fav-item-title">' + title + '</span>' +
        '<span class="pw-fav-item-sub">' + PW.escapeHtml(item.category) + '</span>' +
        '<button type="button" class="pw-fav-remove" data-slug="' + PW.escapeHtml(item.id) + '"' +
        ' aria-label="Quitar ' + title + ' de mis artículos">×</button>';
      dom.favsList.appendChild(node);
    });
  }

  function syncFavs() {
    if (dom.favsCount) {
      dom.favsCount.textContent = String(favs.length);
      dom.favsCount.hidden = favs.length === 0;
    }
    renderFavPanel();
    syncFavToggle();
  }

  /* ================================================================
   * 8 · Paneles, modal y cierre (§6.6)
   * ================================================================ */

  function panelButton(which) {
    return document.getElementById(PANELS[which].button);
  }

  function panelNode(which) {
    return document.getElementById(PANELS[which].panel);
  }

  function setOpen(which, open) {
    var button = panelButton(which);
    var panel = panelNode(which);
    if (!button) { warnOnce('btn:' + which, 'falta #' + PANELS[which].button + '; el panel no se puede abrir.'); }
    if (!panel) { warnOnce('panel:' + which, 'falta #' + PANELS[which].panel + '; se omite el panel de ' + PANELS[which].label + '.'); }
    if (panel) {
      panel.hidden = !open;
      if (open) { panel.classList.add('is-open'); }
      else { panel.classList.remove('is-open'); }
      if (which === 'favs' && open) { renderFavPanel(); }
    }
    if (button) { button.setAttribute('aria-expanded', open ? 'true' : 'false'); }
  }

  function closePanels() {
    setOpen('prefs', false);
    setOpen('favs', false);
  }

  function togglePanel(which) {
    var open = panelNode(which);
    var wasOpen = !!open && !open.hidden;
    closePanels();
    setOpen(which, !wasOpen);
  }

  function isHelpOpen() {
    return !!(dom.helpModal && dom.helpModal.open);
  }

  function openHelp() {
    if (!dom.helpModal) { return; }
    if (typeof dom.helpModal.showModal !== 'function') {
      warnOnce('dialog', 'este navegador no tiene <dialog>.showModal(); la ayuda no se abre.');
      return;
    }
    dom.helpModal.showModal();
  }

  function closeHelp() {
    if (isHelpOpen()) { dom.helpModal.close(); }
  }

  function closeSearchResults() {
    findAll('.pw-search-results').forEach(function (panel) { panel.hidden = true; });
  }

  /**
   * Despliega u oculta el buscador de la cabecera (v3 · lupa). `force` fija el
   * estado —true abre, false cierra—; sin él alterna, que es lo que hace la
   * lupa. Al abrir enfoca el campo: `focus()` sobre un input dentro de un
   * contenedor `hidden` no hace nada, así que el `hidden = false` va antes.
   *
   * El estado que decide el alternado es `headerSearchOpen`, no el atributo:
   * al cerrar, el panel se desvanece ANTES de esconderse, y leer `hidden` a
   * mitad de ese fundido daría la respuesta contraria a la que acaba de pedir
   * quien ha pulsado. Con la variable, un abrir→cerrar→abrir rápido se entiende
   * bien y el `aria-expanded` del botón dice la verdad en el acto.
   *
   * Devuelve el estado resultante para que quien llame sepa si hay buscador.
   */
  function toggleHeaderSearch(force) {
    if (!headerSearch) {
      warnOnce('header-search', 'no se encuentra #pw-search-cabecera; no hay buscador en la cabecera.');
      return false;
    }
    var open = force === undefined ? !headerSearchOpen : !!force;
    headerSearchOpen = open;
    var button = document.getElementById('pw-btn-search');
    if (button) { button.setAttribute('aria-expanded', open ? 'true' : 'false'); }
    if (!open) {
      // Los resultados se van YA y no al final del fundido: si esperaran, el
      // panel de resultados se vería desvanecerse por su cuenta detrás del
      // buscador, que es una segunda animación que nadie ha pedido.
      closeSearchResults();
      hideBlock(headerSearch); // desvanece y THEN se esconde
      return false;
    }
    // `showBlock` quita `hidden` antes de animar, que es lo que permite que el
    // `focus()` de abajo haga algo. Si una apertura corta el fundido de un
    // cierre en marcha, el puente cancela ese fundido y el panel se queda.
    showBlock(headerSearch);
    var input = headerSearch.querySelector('.pw-search-input');
    if (input) {
      input.focus();
      if (typeof input.select === 'function') { input.select(); }
    }
    return true;
  }

  function closeAll() {
    closePanels();
    closeHelp();
    hideHovercard();
    closeSearchResults();
    // El buscador de la cabecera también es "una cosa abierta". Salvo que el
    // foco esté dentro: si el usuario está escribiendo en él, ni Escape ni
    // otra tecla deben llevarse el campo por delante (search.js ya gestiona su
    // propio panel de resultados al recibir Escape dentro del input).
    if (!inEditable(document.activeElement)) { toggleHeaderSearch(false); }
  }

  /**
   * Atajo «/»: enfoca un input VISIBLE, que es lo que exige el atajo. Primero
   * el de la cabecera, que vive oculto tras la lupa y hay que abrir; si esta
   * página no lo tiene, se cae al primer `.pw-search-input` de la página —el
   * buscador grande del héroe de la portada, que sí está siempre visible—.
   */
  function focusSearch() {
    var input = headerSearch ? headerSearch.querySelector('.pw-search-input') : null;
    if (input) {
      if (!headerSearchOpen) { toggleHeaderSearch(true); }
      else {
        input.focus();
        if (typeof input.select === 'function') { input.select(); }
      }
      return;
    }
    input = find('.pw-search-input');
    if (!input) {
      warnOnce('search', 'no se encuentra ningún .pw-search-input; el atajo «/» no hace nada.');
      return;
    }
    input.focus();
    if (typeof input.select === 'function') { input.select(); }
  }

  /* ================================================================
   * 9 · Atajos de teclado (§6.6)
   * ================================================================ */

  function inEditable(node) {
    var at = node;
    while (at && at.nodeType === 1) {
      var tag = at.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || at.isContentEditable) { return true; }
      at = at.parentNode;
    }
    return false;
  }

  function onKeydown(event) {
    // Ctrl/Alt/Meta son del navegador y del sistema; `isComposing` cubre la
    // composición con tecla muerta del teclado español.
    if (event.ctrlKey || event.altKey || event.metaKey || event.isComposing) { return; }

    var key = String(event.key || '');

    // Escape dentro del buscador desplegable lo cierra, pero solo si el foco
    // está en ÉL: en el buscador del héroe de la portada Escape es cosa de
    // `search.js` (cierra su panel) y no debe cerrarse nada más. El resto de
    // atajos se ignoran mientras se escribe, como siempre.
    if ((key === 'Escape' || key === 'Esc') && inEditable(event.target)) {
      if (headerSearch && headerSearch.contains(event.target)) { toggleHeaderSearch(false); }
      return;
    }

    if (inEditable(event.target)) { return; }
    if (key === 'Escape' || key === 'Esc') {
      closeAll();
      return;
    }

    switch (key.length === 1 ? key.toLowerCase() : key) {
      case '/':
        event.preventDefault();
        closeAll();
        focusSearch();
        return;
      case 'r':
        closeAll();
        random();
        return;
      case 'f':
        closeAll();
        toggleCurrentFav();
        return;
      case 'p':
        togglePanel('prefs');
        return;
      case 't':
        closeAll();
        goTop();
        return;
      case '?':
        if (isHelpOpen()) { closeHelp(); } else { closeAll(); openHelp(); }
        return;
      default:
        return;
    }
  }

  /* ================================================================
   * 10 · Hovercards (§6.7)
   * ================================================================ */

  function buildHovercard() {
    var card = document.getElementById('pw-hovercard');
    if (card) { return card; }
    card = document.createElement('div');
    card.id = 'pw-hovercard';
    card.className = 'pw-hovercard';
    card.setAttribute('role', 'tooltip');
    card.hidden = true;
    card.innerHTML = HOVERCARD_MARKUP;
    // Se fija aquí el sistema de coordenadas: se posiciona con getBoundingClientRect,
    // que es relativo al viewport, así que depende de `position: fixed`.
    card.style.position = 'fixed';
    document.body.appendChild(card);
    return card;
  }

  function truncate(text) {
    var value = String(text || '').replace(/\s+/g, ' ').trim();
    if (value.length <= SUMMARY_CHARS) { return value; }
    var cut = value.slice(0, SUMMARY_CHARS);
    var space = cut.lastIndexOf(' ');
    if (space > SUMMARY_CHARS * 0.6) { cut = cut.slice(0, space); }
    return cut + '…';
  }

  /**
   * Artículo al que apunta un wikilink interno, o null si no procede. En v3 el
   * href de un enlace lleva su dominio (`article.html?tipo=partido&title=...`),
   * así que el destino se resuelve donde el enlace dice, no por precedencia.
   */
  function linkArticle(link) {
    if (!link || link.classList.contains('pw-wikilink-missing')) { return null; }
    var href = link.getAttribute('href');
    if (!href || href.charAt(0) === '#' || /^[a-z][a-z0-9+.-]*:/i.test(href)) { return null; }
    var found = /[?&]title=([^&#]*)/.exec(href);
    if (!found) { return null; }
    try {
      var slug = decodeURIComponent(found[1].replace(/\+/g, ' '));
      var tipo = /[?&]tipo=([^&#]*)/.exec(href);
      if (tipo) {
        var domain = kindOf(decodeURIComponent(tipo[1].replace(/\+/g, ' ')), true);
        return entryOf(storeKey(domain, slug));
      }
      // Sin `tipo` el enlace es de v1, donde solo había ideologías. `find` mantiene
      // esa precedencia y además resuelve los enlaces cruzados (§6).
      return typeof PW.find === 'function' ? PW.find(slug) : entryOf(storeKey(DEFAULT_KIND, slug));
    } catch (error) {
      warnOnce('wikilink', 'no se pudo interpretar el destino de un wikilink.', href);
      return null;
    }
  }

  function placeHovercard(card, link) {
    var box = link.getBoundingClientRect();
    var gap = 8;
    var viewW = document.documentElement.clientWidth;
    var viewH = document.documentElement.clientHeight;
    var width = card.offsetWidth;
    var height = card.offsetHeight;

    var left = box.left;
    if (left + width + gap > viewW) { left = viewW - width - gap; }
    if (left < gap) { left = gap; }

    var top = box.bottom + gap;
    if (top + height + gap > viewH) { top = box.top - height - gap; }
    if (top < gap) { top = Math.min(box.bottom + gap, viewH - height - gap); }

    card.style.left = Math.round(left) + 'px';
    card.style.top = Math.round(top) + 'px';
  }

  function showHovercard(article, link) {
    var card = dom.hovercard;
    if (!card) { return; }
    setText(card, '.pw-hovercard-title', article.title || article.slug);
    setText(card, '.pw-hovercard-sub', article.category || '');
    setText(card, '.pw-hovercard-text', truncate(article.summary));
    card.hidden = false;
    placeHovercard(card, link);
  }

  function hideHovercard() {
    cancelTimer(hoverTimer);
    hoverTimer = 0;
    hoverFor = null;
    if (dom.hovercard) { dom.hovercard.hidden = true; }
  }

  function onMouseOver(event) {
    var link = closest(event.target, 'a.pw-wikilink');
    if (link === hoverFor) { return; }
    var article = linkArticle(link);

    cancelTimer(hoverTimer);
    hoverTimer = 0;
    hoverFor = link;
    if (dom.hovercard) { dom.hovercard.hidden = true; }
    if (!article) { return; }

    hoverTimer = later(function () {
      hoverTimer = 0;
      showHovercard(article, link);
    }, HOVER_DELAY_MS);
  }

  function onMouseOut() {
    hideHovercard(); // cierre inmediato
  }

  /* ================================================================
   * 11 · Permalinks de sección (§6.8)
   * ================================================================ */

  function addPermalinks() {
    findAll('.pw-h2[id]').forEach(function (heading) {
      if (heading.querySelector('.pw-permalink')) { return; }
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'pw-permalink';
      button.setAttribute('data-href', '#' + heading.getAttribute('id'));
      button.setAttribute('aria-label', 'Copiar enlace a esta sección');
      // «¶» (U+00B6) y no «§» (U+00A7): el signo de párrafo es el que se
      // entiende como «ancla a un párrafo» y está en Latin-1 Supplement, así
      // que ninguna fuente de sistema lo deja en caja vacía.
      button.textContent = '¶';
      // Hermano de `.pw-headline` dentro del propio encabezado: así el §4 puede
      // mostrarlo al enfocar la sección o al pasar por encima.
      heading.appendChild(button);
    });
  }

  function sectionUrl(id) {
    // `location.origin` es "null" bajo file://, así que se parte siempre del href
    // completo sin fragmento. Funciona en file:// y en http(s), y además conserva
    // el `?title=` del artículo (la fórmula de §6.8 lo perdería).
    return String(window.location.href).split('#')[0] + '#' + id;
  }

  function confirmCopy(button) {
    button.classList.add('is-copied');
    later(function () { button.classList.remove('is-copied'); }, COPIED_MS);
  }

  function copySection(button) {
    var id = String(button.getAttribute('data-href') || '').replace(/^#/, '');
    if (!id) { return; }
    copyText(sectionUrl(id), function (ok) {
      if (ok) { confirmCopy(button); }
    });
  }

  function copyText(text, done) {
    var clipboard = window.navigator ? window.navigator.clipboard : null;
    if (clipboard && typeof clipboard.writeText === 'function') {
      try {
        var pending = clipboard.writeText(text);
        if (pending && typeof pending.then === 'function') {
          pending.then(function () { done(true); }, function (error) {
            console.error('PW.features: el portapapeles ha denegado la escritura.', error);
            done(legacyCopy(text));
          });
          return;
        }
        done(true);
        return;
      } catch (error) {
        console.error('PW.features: el portapapeles no responde.', error);
      }
    }
    done(legacyCopy(text));
  }

  /** Reserva para navegadores sin portapapeles y para `file://`. */
  function legacyCopy(text) {
    var scratch = document.createElement('textarea');
    scratch.value = text;
    scratch.setAttribute('readonly', 'readonly');
    scratch.setAttribute('aria-hidden', 'true');
    scratch.style.position = 'fixed';
    scratch.style.opacity = '0';
    document.body.appendChild(scratch);
    scratch.select();
    var ok = false;
    try {
      ok = document.execCommand('copy');
    } catch (error) {
      console.error('PW.features: no se puede copiar el enlace permanente.', error);
    }
    document.body.removeChild(scratch);
    if (!ok) { console.error('PW.features: el navegador ha bloqueado la copia del enlace.'); }
    return ok;
  }

  /* ================================================================
   * 12 · Índice alfabético (§6.9)
   * ================================================================ */

  /** Inicial en mayúscula: Ñ se conserva, el resto se pliega sin diacríticos. */
  function initial(title) {
    var first = String(title || '').trim().charAt(0);
    if (!first) { return ''; }
    var upper = first.toLocaleUpperCase('es');
    if (/^[A-ZÑ]$/.test(upper)) { return upper; }
    if (typeof upper.normalize === 'function') { upper = upper.normalize('NFD'); }
    var folded = upper.replace(/[\u0300-\u036f]/g, '').toLocaleUpperCase('es').charAt(0);
    return /^[A-ZÑ]$/.test(folded) ? folded : '';
  }

  function cardTitle(card) {
    var title = card.querySelector('.pw-card-title');
    return title ? title.textContent : card.textContent;
  }

  function renderAzIndex() {
    var nav = document.getElementById('pw-azindex');
    var grid = document.getElementById('articulos-grid');
    if (!grid || !grid.parentNode) {
      // §3.9: el índice alfabético solo vive en index.html. En un artículo su
      // ausencia es lo esperado, así que no se avisa de un fallo inexistente.
      return;
    }
    if (!nav) {
      nav = document.createElement('nav');
      nav.id = 'pw-azindex';
      nav.className = 'pw-azindex';
      nav.setAttribute('aria-label', 'Índice alfabético');
      grid.parentNode.insertBefore(nav, grid); // §3.9: justo antes de la rejilla
    }

    clear(nav);
    azGroups = [];
    azActive = ''; // el índice se reconstruye: cualquier filtro anterior se cae
    azWas = '';     // y no queda nada a medias: la rejilla vuelve a verse entera

    // `cards` guarda TODAS las tarjetas de la letra, no solo la primera: el
    // filtro necesita todas, y el scroll-spy (§3.9) solo usa `card`, la
    // representativa —la primera en orden de documento—. Con la rejilla
    // agrupada de los dominios nuevos las tarjetas no son contiguas, así que
    // la representativa se toma tal cual y el resto se filtra por `initial`.
    var byLetter = {};
    var letters = [];
    findAll('.pw-card').forEach(function (card) {
      var letter = initial(cardTitle(card));
      if (!letter) { return; }
      if (!byLetter[letter]) {
        byLetter[letter] = { letter: letter, card: card, cards: [], link: null };
        letters.push(letter);
      }
      byLetter[letter].cards.push(card);
    });
    if (!letters.length) {
      warnOnce('azindex-empty', 'no hay tarjetas de artículo; el índice alfabético queda vacío.');
      return;
    }

    letters.sort(function (a, b) { return a.localeCompare(b, 'es'); });
    letters.forEach(function (letter) {
      var link = document.createElement('a');
      link.className = 'pw-azindex-link';
      link.setAttribute('href', '#articulos');
      link.setAttribute('data-letter', letter);
      link.setAttribute('aria-pressed', 'false');
      link.textContent = letter;
      nav.appendChild(link);
      byLetter[letter].link = link;
      azGroups.push(byLetter[letter]);
    });
  }

  /* ================================================================
   * 12b · LA REJILLA NO TELEPORTA (v8 · 2)
   * ================================================================ */

  /**
   * Estado del FLIP.
   *
   * `flipFirst` guarda dónde estaba cada tarjeta visible ANTES de que el filtro
   * mueva nada. `flipToken` es la generación: si el lector pulsa otra letra
   * mientras la anterior todavía se está apagando, el lote viejo queda
   * invalidado y su aviso —que llega tarde, porque la salida se desvanece antes
   * de terminar— no dispara nada. `flipRuns` son las animaciones del lote en
   * curso, para poder cancelar las anteriores antes de empezar otras nuevas: cuatro
   * letras seguidas tienen que dar cuatro movimientos limpios, no cuatro
   * animaciones peleándose por la misma propiedad.
   *
   * La medida es `getBoundingClientRect`, o sea coordenadas de VENTANA. Da igual
   * que la página se desplace entre la primera medida y la segunda: lo que
   * importa es el desplazamiento RELATIVO de la tarjeta, que es la resta de las
   * dos medidas.
   */
  var flipFirst = [];
  var flipToken = 0;
  var flipRuns = [];
  var FLIP_DUR_TOKEN = '--pw-dur-3';
  var FLIP_EASE_TOKEN = '--pw-ease-out';
  var FLIP_DUR_FALLBACK = 300;
  var FLIP_EASE_FALLBACK = 'cubic-bezier(0.22, 1, 0.36, 1)';

  /** Sin `Element.animate`, sin tokens o con movimiento reducido, no hay FLIP. */
  function flipAllowed() {
    if (prefersReducedMotion()) { return false; }
    if (typeof Element === 'undefined' || typeof Element.prototype.animate !== 'function') { return false; }
    return typeof window.getComputedStyle === 'function';
  }

  /**
   * Primera mitad: dónde está cada tarjeta visible ahora mismo. Se llama ANTES
   * de que el filtro toque nada, y devuelve el token de este lote.
   *
   * Se invalidan los avisos del lote anterior aquí y no al terminar, porque el
   * filtro puede solaparse: el que llegue tarde tiene que comprobar su token y
   * marcharse sin hacer nada.
   */
  function flipMeasure(grid) {
    flipToken += 1;
    for (var i = 0; i < flipRuns.length; i += 1) { flipRuns[i].cancel(); }
    flipRuns = [];
    flipFirst = [];
    if (!flipAllowed() || !grid) { return flipToken; }
    findAll('.pw-card', grid).forEach(function (card) {
      if (card.hidden) { return; }
      var box = card.getBoundingClientRect();
      if (!box.width && !box.height) { return; }
      flipFirst.push({ card: card, x: box.left, y: box.top });
    });
    return flipToken;
  }

  /**
   * Segunda mitad: cada tarjeta que SE QUEDÓ en la rejilla se lleva desde donde
   * estaba hasta donde ha acabado.
   *
   * Se llama cuando todas las salidas han terminado de apagarse, y no antes:
   * mientras una tarjeta se desvanece sigue ocupando su hueco —`collapse` solo
   * pone `hidden` al final—, así que la rejilla no se ha movido y la resta daría
   * cero. Medir en el momento equivocado no da una animación mala: da ninguna.
   *
   * `fill` se deja en su valor a propósito, sin `both`. Con `fill: both` el
   * último fotograma se quedaría aplicado para siempre y pisaría el
   * `translateY(-2px)` de `.pw-card:hover` (§7) hasta la siguiente navegación.
   * Sin retardo, una animación sin `fill` empieza en su primer fotograma igual.
   */
  function flipPlay(token) {
    if (token !== flipToken) { return; }
    var first = flipFirst;
    flipFirst = [];
    if (!first.length) { return; }
    var duration = flipDuration();
    var easing = flipEasing();
    var moves = [];
    // Primera pasada: SOLO lecturas. Medir y animar en el mismo bucle alterna
    // lectura con escritura, y cada `card.animate()` invalida el estilo, de modo
    // que el `getBoundingClientRect()` siguiente fuerza un reflow síncrono por
    // cada tarjeta. Con dos pasadas se mide todo de una vez y luego se escribe
    // todo: el coste es el mismo y el reflow, uno solo.
    first.forEach(function (entry) {
      var card = entry.card;
      if (card.hidden) { return; }               // se ha ido con el filtro: no la muevas
      var box = card.getBoundingClientRect();
      if (!box.width && !box.height) { return; } // dentro de un `.pw-catgroup` oculto
      var dx = entry.x - box.left;
      var dy = entry.y - box.top;
      if (!dx && !dy) { return; }                // no se ha movido: no se anima
      moves.push({ card: card, dx: dx, dy: dy });
    });
    // Segunda pasada: SOLO escrituras.
    moves.forEach(function (move) {
      flipRuns.push(move.card.animate([
        { transform: 'translate(' + move.dx.toFixed(1) + 'px,' + move.dy.toFixed(1) + 'px)' },
        { transform: 'translate(0,0)' }
      ], { duration: duration, easing: easing }));
    });
  }

  /** Un token del `:root` ya calculado, sin espacios sobrantes. */
  function readRootToken(name) {
    var root = document.documentElement;
    if (!root) { return ''; }
    return String(window.getComputedStyle(root).getPropertyValue(name) || '').trim();
  }

  /** `--pw-dur-3` en ms. Acepta `ms` y `s`; sin token o sin número, el contrato. */
  function flipDuration() {
    var match = /^(\d*\.?\d+)(ms|s)$/.exec(readRootToken(FLIP_DUR_TOKEN));
    if (!match) { return FLIP_DUR_FALLBACK; }
    return match[2] === 's' ? parseFloat(match[1]) * 1000 : parseFloat(match[1]);
  }

  /** La curva se pasa tal cual, como la leería el CSS: la que diga el token. */
  function flipEasing() {
    return readRootToken(FLIP_EASE_TOKEN) || FLIP_EASE_FALLBACK;
  }

  /**
   * Filtra la rejilla por inicial. Pulsar la letra activa la deja sin efecto
   * (toggle): vuelve a verse todo. Solo se usa el atributo `hidden`, que la
   * regla global de wiki.css (v2 · 4) convierte en `display:none !important`:
   * así las tarjetas ocultas salen del flujo de la rejilla y `auto-fill` no
   * deja huecos, y ni una sola regla nueva depende de `style` en línea.
   *
   * Lo que se ha añadido es el escalonado de §8b de `js/interactions.js`, que
   * no cambia ese atributo ni su valor: solo el momento en que se pone. Las que
   * entran lo hacen una detrás de otra —retardo `index * AZ_STEP_MS`, con tope
   * `AZ_STEP_CAP` escalones— y las que salen se desvanecen. El mecanismo sigue
   * siendo `hidden` y no `visibility`: una tarjeta en la rejilla se retira del
   * flujo, y `auto-fill` cierra el hueco.
   *
   * Y lo que se ha añadido en v8 · 2 es que las que SE QUEDAN se muevan. Hasta
   * aquí, al apagar una tarjeta sus vecinas aparecían ya en el hueco: el destino
   * era correcto y el camino, un salto. `flipMeasure` mide antes de que se toque
   * nada y `flipPlay` devuelve a cada superviviente desde donde estaba. El gasto
   * es de `getBoundingClientRect`, que fuerza disposición, pero son dos medidas
   * por pulsación —una antes y una al final, cuando ya no queda nada más que
   * mutar— y no una por tarjeta y por fotograma.
   */
  function applyAzFilter(link) {
    if (!azGroups.length) { return; }
    var letter = link ? String(link.getAttribute('data-letter') || '') : '';
    azWas = azActive; // el filtro de la pulsación anterior, no el atributo: §8b va con retardo
    azActive = letter && letter === azActive ? '' : letter; // la misma letra desactiva

    // `grid` se resuelve antes de medir, y no donde estaba: la medida de v8 · 2
    // lo necesita antes de que empiece el bucle de grupos.
    var grid = document.getElementById('articulos-grid');

    // El aviso de salida. `pending` lleva la cuenta de las tarjetas que se están
    // apagando y `counting` impide soltar el FLIP mientras el bucle sigue
    // sumando: sin movimiento, `collapse` avisa EN EL MISMO MOMENTO en que se le
    // llama, así que en pleno bucle `pending` pasa por negativo y la cuenta solo
    // es buena al terminar. Se suelta después, en el punto de salida del filtro.
    var token = flipMeasure(grid);
    var pending = 0;
    var counting = true;
    var released = false;
    function release() {
      if (released || token !== flipToken) { return; }
      released = true;
      flipPlay(token);
    }
    function onGone() {
      if (token !== flipToken) { return; }
      pending -= 1;
      if (!counting && pending <= 0) { release(); }
    }

    // El escalonado cuenta ENTRADAS y lleva la cuenta sobre TODA la rejilla, no
    // sobre la letra: el índice va por orden de aparición, no dentro del grupo.
    // Por letra quedaba anulado -la portada reparte 29 tarjetas en ~20 grupos, y
    // casi todos tienen una o dos, así que casi todas recibían retardo 0 y la
    // rejilla entraba de un solo golpe, que es justo lo contrario de "saliendo
    // progresivamente"-. Sólo consume escalón la tarjeta que de verdad entra: las
    // que se quedan donde están no lo hacen avanzar, o al filtrar por una letra
    // los huecos de las que no matchean se correrían sin motivo.
    var step = 0;
    azGroups.forEach(function (group) {
      group.cards.forEach(function (card) {
        var entering = azShows(group.letter, azActive) && !azShows(group.letter, azWas);
        if (azPlace(card, group.letter, entering ? step++ : 0, onGone)) { pending += 1; }
      });
      if (group.link) { group.link.setAttribute('aria-pressed', group.letter === azActive ? 'true' : 'false'); }
    });

    // Una tarjeta cuyo título no empieza por una letra no está en ningún grupo
    // y no la cubre el bucle anterior: con filtro tampoco sale. Sin filtro se
    // deja como la pintó render.js.
    findAll('.pw-card', grid).forEach(function (card) {
      if (!initial(cardTitle(card))) {
        if (azPlace(card, '', 0, onGone)) { pending += 1; }
      }
    });

    // Los catálogos por dominio de §7 agrupan las tarjetas en `.pw-catgroup`.
    // Con un filtro puesto un grupo puede quedarse sin ninguna: su encabezado
    // se vería solo, que es peor que no verlo. Se ocultan los vacíos, y al
    // quitar el filtro vuelven todos (no hay otra forma de saber cuáles lo
    // estaban de origen: un grupo sin tarjetas ya es imposible en el catálogo).
    //
    // El recuento va contra `azShows`, NO contra `!card.hidden`: con §8b las
    // tarjetas tardan en ocultarse, y contar las que aún no han terminado de
    // apagarse dejaría en pie el encabezado de un grupo que ya está vacío. El
    // encabezado va con el estado final, no con el intermedio.
    findAll('.pw-catgroup', grid).forEach(function (group) {
      var left = findAll('.pw-card', group).filter(function (card) {
        return azShows(initial(cardTitle(card)), azActive);
      }).length;
      group.hidden = !left;
    });

    // Con el filtro puesto solo quedan tarjetas de `azActive`, y el índice se
    // construye por inicial, así que la rejilla nunca puede quedar vacía. Si
    // algún día una letra perdiera todas sus tarjetas, la vista se quedaría
    // vacía sin inventarse un mensaje: se recupera volviendo a pulsar la letra.
    markAzIndex(scrollTop());

    // Último punto, y no antes: `flipPlay` mide, y la medida tiene que ser
    // finales. Aquí los `.pw-catgroup` ya están ocultados y ya no queda nada por
    // mutar, así que lo que mida `flipPlay` es la rejilla en su estado definitivo.
    counting = false;
    if (pending <= 0) { release(); }
  }

  /**
   * ¿Verá esta letra —o esta tarjeta sin inicial— el filtro `active`? Sin
   * filtro, todas. Es la pregunta del ESTADO FINAL de una tarjeta, y por eso
   * lleva el filtro como argumento y no se deduce de `card.hidden`: mientras
   * §8b apaga y enciende con retardo, el atributo va por detrás de la intención.
   */
  function azShows(letter, active) {
    return !active || letter === active;
  }

  /**
   * Pone una tarjeta de la rejilla donde la deja el filtro, y la mueve solo si
   * de verdad cambia de estado: una tarjeta que ya estaba —o no estaba— donde
   * tiene que estar no se toca. Animarla igual le daría una entrada que no ha
   * ocurrido, y una que se está apagando acabaría poniendo `hidden` en un sitio
   * donde ya se ve. `index` es el escalón que le toca EN LA REJILLA ENTERA -los
   * cuenta `applyAzFilter`, no el grupo- y es lo que escalona la entrada.
   *
   * `done` es lo que le pasa a `hideBlock`, y lo que le permite a v8 · 2 saber
   * cuándo ha terminado de apagarse la última salida: hasta ese instante las
   * tarjetas que se van siguen ocupando su hueco y la rejilla no se ha movido.
   *
   * Devuelve `true` solo cuando ha EMPEZADO una salida. Es lo que permite
   * contar cuántas hay sin contar dos veces: quien llama suma y el aviso, que
   * puede llegar en el mismo instante, resta. Las dos medidas coinciden al
   * terminar el bucle, que es cuando la cuenta se da por buena.
   */
  function azPlace(card, letter, index, done) {
    var showsNow = azShows(letter, azActive);
    if (showsNow === azShows(letter, azWas)) {
      card.hidden = !showsNow;
      return false;
    }
    if (showsNow) {
      showBlock(card, azDelay(index));
      return false;
    }
    hideBlock(card, 0, done);
    return true;
  }

  /** Retardo del escalón `index` de la entrada: crece hasta el tope y ahí se queda. */
  function azDelay(index) {
    return Math.min(index, AZ_STEP_CAP) * AZ_STEP_MS;
  }

  function markAzIndex(top) {
    if (!azGroups.length) { return; }
    // Con un filtro activo el scroll-spy no puede opinar: la rejilla ya no está
    // ordenada por letras y casi todas las tarjetas representatives están
    // ocultas, así que su posición en pantalla no dice nada de la letra
    // "actual". Se retira entonces el `aria-current` que hubiera y la letra
    // activa se comunica solo con `aria-pressed`: un solo indicador de estado
    // visible, sin que los dos se peleen.
    if (azActive) {
      azGroups.forEach(function (group) {
        if (group.link) { group.link.removeAttribute('aria-current'); }
      });
      return;
    }
    var line = top + document.documentElement.clientHeight * 0.3;
    var current = 0;
    for (var i = 0; i < azGroups.length; i++) {
      if (azGroups[i].card.getBoundingClientRect().top > line) { break; }
      current = i;
    }
    azGroups.forEach(function (group, index) {
      if (!group.link) { return; }
      if (index === current) { group.link.setAttribute('aria-current', 'true'); }
      else { group.link.removeAttribute('aria-current'); }
    });
  }

  /* ================================================================
   * 13 · Eventos, arranque, limpieza y API (§6.10)
   * ================================================================ */

  // Cada control del §3 lleva su propia clase, así que se despacha por ella y
  // no por un único `.pw-btn`: `.pw-step`, `.pw-fav-toggle`, `.pw-totop` y
  // `.pw-btn-text` no son `.pw-btn`.
  function onClick(event) {
    var target = event.target;

    // v8 · 3: la tarjeta que se pulsa es el ORIGEN del nombre de la transición de
    // vista. Solo con clic principal y sin modificadores. Un clic con Ctrl, Cmd o
    // Shift abre en otra pestaña o ventana, y entonces este documento sigue vivo:
    // su `pageshow` no vuelve a pasar, la tarjeta se quedaría nombrada para la
    // navegación siguiente y —peor— dos elementos con el mismo
    // `view-transition-name` abortan la transición entera. Va lo primero y no
    // devuelve nada: nombrar no es una acción que se consuma el clic, y el switch
    // de abajo tiene que seguir viéndolo entero.
    if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey &&
      (!event.button || event.button === 0)) {
      nameOpenCard(closest(target, 'a.pw-card'));
    }

    // El índice alfabético va antes que `.pw-btn`: es un `a`, no un botón, y su
    // href="#articulos" solo serviría para saltar a la sección. Con filtro
    // puesto saltaría además fuera de la rejilla filtrada, así que se anula.
    var letter = closest(target, '.pw-azindex-link');
    if (letter) {
      event.preventDefault();
      applyAzFilter(letter);
      return;
    }

    // Los controles del §14 van antes que `.pw-btn` por dos razones: los tres
    // botones de acción son hijos de `.pw-article-actions` y tienen clase propia,
    // y `.pw-search-item` es un `a` de navegación propia que hay que ENRIQUECER
    // (§13) antes de que la cola de cierre de abajo lo toque. Los cuatro
    // despachan con `closest`, como el resto del switch.
    var cite = closest(target, '.pw-cite-btn');
    if (cite) {
      copyCitation();
      return;
    }

    var share = closest(target, '.pw-share-btn');
    if (share) {
      shareArticle();
      return;
    }

    var print = closest(target, '.pw-print-btn');
    if (print) {
      printPage();
      return;
    }

    var result = closest(target, '.pw-search-item');
    if (result) {
      carryQuery(result); // sin preventDefault: la navegación sigue siendo del `a`
      return;
    }

    var tool = closest(target, '.pw-btn');
    if (tool) {
      switch (tool.id) {
        case 'pw-btn-search': toggleHeaderSearch(); return;
        case 'pw-btn-random': closeAll(); random(); return;
        case 'pw-btn-favs': togglePanel('favs'); return;
        case 'pw-btn-prefs': togglePanel('prefs'); return;
        case 'pw-btn-help':
          if (isHelpOpen()) { closeHelp(); } else { closeAll(); openHelp(); }
          return;
        default: break;
      }
    }

    var seg = closest(target, '.pw-seg');
    if (seg && seg.hasAttribute('data-theme')) { setPref('theme', seg.getAttribute('data-theme')); return; }
    if (seg && seg.hasAttribute('data-measure')) { setPref('measure', seg.getAttribute('data-measure')); return; }

    var step = closest(target, '.pw-step');
    if (step) {
      if (step.id === 'pw-size-up') { stepSize(1); return; }
      if (step.id === 'pw-size-down') { stepSize(-1); return; }
    }

    var plain = closest(target, '.pw-btn-text');
    if (plain) {
      if (plain.id === 'pw-prefs-reset') { resetPrefs(); return; }
      if (plain.id === 'pw-help-close') { closeHelp(); return; }
    }

    var fav = closest(target, '.pw-fav-toggle');
    if (fav) {
      toggleCurrentFav();
      return;
    }

    var drop = closest(target, '.pw-fav-remove');
    if (drop) {
      // El × vive dentro del <a> del favorito: sin stopPropagation navegaría.
      event.preventDefault();
      event.stopPropagation();
      removeFav(drop.getAttribute('data-slug'));
      return;
    }

    var top = closest(target, '.pw-totop');
    if (top) {
      goTop();
      return;
    }

    var permalink = closest(target, '.pw-permalink');
    if (permalink) {
      event.preventDefault();
      copySection(permalink);
      return;
    }

    if (dom.helpModal && target === dom.helpModal) { closeHelp(); return; } // clic en el fondo
    if (!closest(target, '.pw-tools')) {
      closePanels();
      // El buscador de la cabecera vive dentro de `.pw-tools`, así que esta misma
      // comprobación lo cubre: pulsar dentro del campo o de sus resultados no lo
      // cierra. `closePanels()` no lo toca, porque `search.js` es quien gestiona
      // su propio panel de resultados.
      if (!headerSearch) { return; }
      if (!closest(target, '#pw-search-cabecera')) { toggleHeaderSearch(false); }
    }
  }

  function onHashChange() {
    hideHovercard(); // §6.7: también al cambiar de sección
  }

  function onPageHide() {
    teardown();
  }

  function onPageShow(event) {
    // La tarjeta que se pulsó antes de irse lleva el nombre de v8 · 3, y desde el
    // bfcache este script no vuelve a ejecutarse. Sin esta limpieza, la
    // navegación siguiente intentaría tener dos elementos con el mismo nombre,
    // que es justo el error que hace que el motor deseche la transición entera.
    if (event.persisted) { clearOpenCard(); init(); } // restaurado: todo se había desmontado
  }

  function bind() {
    if (bound) { return; }
    bound = true;
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKeydown);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('pagehide', onPageHide);
    window.addEventListener('pageshow', onPageShow);
  }

  function unbind() {
    if (!bound) { return; }
    bound = false;
    document.removeEventListener('click', onClick);
    document.removeEventListener('keydown', onKeydown);
    document.removeEventListener('mouseover', onMouseOver);
    document.removeEventListener('mouseout', onMouseOut);
    document.removeEventListener('scroll', onScroll);
    window.removeEventListener('hashchange', onHashChange);
    window.removeEventListener('pagehide', onPageHide);
    window.removeEventListener('pageshow', onPageShow);
  }

  /** Nada debe seguir corriendo tras navegar: sin temporizadores ni observadores vivos. */
  function teardown() {
    unbind();
    if (frame) {
      window.cancelAnimationFrame(frame);
      frame = 0;
    }
    timers.forEach(function (id) { window.clearTimeout(id); });
    timers = [];
    hoverTimer = 0; // ya estaba en `timers`; solo queda soltar la referencia
    if (dom.infoObserver) {
      dom.infoObserver.disconnect();
      dom.infoObserver = null;
    }
    // El scrollspy del índice flotante (§14) también es un observador vivo: sin
    // soltarlo seguiría vigilando nodos de un artículo que ya no está en la
    // página, y el teardown lo exige.
    stopFloatToc();
  }

  function init() {
    if (!requireApi()) { return false; }

    // PWA: registrar el service worker (solo en servidor; file:// no lo permite).
    registerServiceWorker();

    dom.favsList = need('pw-favs-list', 'lista de favoritos');
    dom.favsEmpty = need('pw-favs-empty', 'aviso de favoritos vacíos');
    dom.favsCount = need('pw-favs-count', 'contador de favoritos');
    dom.sizeValue = need('pw-size-value', 'etiqueta del tamaño de texto');
    dom.progressBar = need('pw-progress-bar', 'barra de progreso de lectura');
    // La velocidad se escribe en el CONTENEDOR, no en la barra: el `transform` de
    // la barra ya lo tiene la `animation-timeline` del scroll —o `paintScroll` donde
    // no hay timeline— y en el padre no hay competencia, porque el `transform` del
    // padre y el del hijo se componen en vez de pisarse (§ v8 · 1). Se sube por el
    // padre y no por id porque en el HTML solo la barra lleva id.
    dom.progressTrack = dom.progressBar ? dom.progressBar.parentNode : null;
    if (!dom.progressTrack || !dom.progressTrack.classList ||
        !dom.progressTrack.classList.contains('pw-progress')) {
      warnOnce('track', 'la barra de progreso no cuelga de un .pw-progress; la velocidad no se aplica.');
      dom.progressTrack = null;
    }
    dom.toTop = need('pw-totop', 'botón de volver arriba');
    dom.helpModal = need('pw-help-modal', 'diálogo de atajos de teclado');
    dom.hovercard = buildHovercard();
    // El buscador de la cabecera es opcional (`need` avisa una vez y sigue):
    // en una página sin él, la lupa y el atajo «/» caen al buscador de la
    // página. No se registra en `dom` porque lo consume la lógica del desplegable.
    headerSearch = need('pw-search-cabecera', 'buscador desplegable de la cabecera');
    // El estado lógico arranca donde lo dejó el HTML: si esta página trajera el
    // buscador desplegado, el primer alternado tiene que cerrarlo, no abrirlo
    // otra vez. A partir de aquí manda la variable, no el atributo.
    headerSearchOpen = !!(headerSearch && !headerSearch.hidden);

    bind();

    prefs = readPrefs();
    applyPrefs();
    syncPrefsUI();

    // El botón de favorito lo crea `updateInfo()` al clonar la ficha del §3.4:
    // primero se monta el artículo y después se refleja lo guardado. Al revés,
    // el botón se quedaba con el `aria-pressed` del marcado hasta que lo
    // despertara el MutationObserver del §6.4, y al recargar con un artículo
    // guardado decía que no lo estaba.
    addPermalinks();
    updateInfo();

    favs = loadFavs();
    syncFavs();
    renderFavPanel();
    syncFavToggle();

    watchArticle();
    renderAzIndex();
    onScroll();

    // §14: las ocho features de navegación y lectura, sobre el DOM ya pintado.
    // El MutationObserver de arriba las vuelve a montar en cada re-render de
    // `render.js`, así que aquí solo hace falta la primera pasada. Se registra
    // DESPUÉS de `watchArticle()` a propósito: si un constructor de los de §14
    // tocara `main`, el observador ya lo está vigilando y no se pierde nada.
    syncArticleExtras();
    return true;
  }

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  PW.features = {
    init: init,
    teardown: teardown,
    prefs: function () { return copyOf(prefs); },
    setPref: setPref,
    resetPrefs: resetPrefs,
    favs: function () { return favs.slice(); },
    isFav: isFav,
    addFav: addFav,
    removeFav: removeFav,
    toggleFav: toggleFav,
    random: random,
    closeAll: closeAll,
    updateInfo: updateInfo,
    renderAzIndex: renderAzIndex,
    sectionUrl: sectionUrl,
    // §14: lo mismo que hacen los botones, publicado para que se pueda usar
    // desde la consola o desde una QA sin pulsar nada.
    citationText: citationText,
    copyCitation: copyCitation,
    shareArticle: shareArticle,
    printPage: printPage
  };

  /* ================================================================
   * 14 · v3.3 · Mejoras de navegación y lectura (§13-§19)
   * ------------------------------------------------------------
   * Todo lo que sigue se ejecuta SOBRE el DOM que `render.js` ya ha pintado, y
   * por eso vive aquí y no en los HTML estáticos: los botones de citar, compartir
   * e imprimir se cuelgan de `.pw-article-actions`, que `render.js` crea en
   * runtime y en cada re-render. Reglas que valen para las ocho features:
   *
   *  · Idempotencia por atributo `data-pw-*` o por `find()` en vivo. Nunca se
   *    guarda el nodo en una variable de módulo para decidir si existe: un
   *    `clear(root)` de `render.js` se lo lleva y la comprobación en vivo es la
   *    única que no miente tras un re-render.
   *  · Reenganche desde el MutationObserver del §6.4 (`syncArticleExtras`).
   *  · Cero `innerHTML` con datos: todo lo que lleva texto de artículo se pinta
   *    con `textContent`. Los dos `innerHTML` de esta sección son literales sin
   *    datos, igual que `INFO_MARKUP` y `HOVERCARD_MARKUP`.
   *  · Cero estilos en línea: ni `setAttribute('style')` ni `style=`, porque la
   *    CSP no admite 'unsafe-inline'. Todo el color y la medida salen de
   *    variables `--pw-*` en el bloque `v3.3` de wiki.css.
   * ================================================================ */

  var MIN_FLOAT_TOC = 3;      // §14: por debajo de tres secciones no hay índice que valga
  var SHOW_TEXT = 4;          // NodeFilter.SHOW_TEXT, en crudo: no depende de window
  var SITE_NAME = 'Politics Wiki';

  // Cabeceras de una tabla que la convierten en cronología. Lista y no objeto:
  // buscar en un objeto plano dejaría pasar claves como «constructor».
  var TIMELINE_HEADS = ['año', 'fecha', 'período', 'periodo', 'años'];

  // Étiquetas de dominio por si el motor no publica `PW.kindLabel` (§0b ya
  // anticipa que esta capa no puede suponer nada del motor).
  var KIND_LABELS = {
    ideologia: 'Ideologías',
    partido: 'Partidos',
    gobierno: 'Gobiernos',
    geopolitica: 'Geopolítica',
    organizacion: 'Organizaciones',
    pensador: 'Pensadores',
    concepto: 'Conceptos'
  };

  // Los tres botones de acción. Solo texto: un glifo como «⎙» (U+2399) no está
  // en las fuentes de sistema de Windows ni de Linux y cae en una caja vacía
  // (el mismo aviso que dejó escrito el SVG de la lupa en wiki.css · v3).
  var ACTION_BTN_MARKUP = [
    '<button type="button" class="pw-cite-btn" data-pw-action="cite">',
    '<span class="pw-action-label">Citar</span>',
    '</button>',
    '<button type="button" class="pw-share-btn" data-pw-action="share">',
    '<span class="pw-action-label">Compartir</span>',
    '</button>',
    '<button type="button" class="pw-print-btn" data-pw-action="print">',
    '<span class="pw-action-label">Imprimir</span>',
    '</button>'
  ].join('');

  var qScrolled = false;      // el primer `<mark>` solo desplaza una vez por página

  /** Fábrica de elemento local: `render.js` tiene la suya, pero es privada (§7). */
  function makeEl(tag, className, text) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (text !== null && text !== undefined && text !== '') { node.textContent = String(text); }
    return node;
  }

  /** Etiqueta visible de un dominio, del motor si la publica (§15). */
  function kindLabelOf(kind) {
    if (typeof PW.kindLabel === 'function') {
      var label = PW.kindLabel(kind);
      if (label) { return String(label); }
    }
    return KIND_LABELS[kind] || KIND_LABELS[DEFAULT_KIND];
  }

  /**
   * Catálogo de un dominio. Las ideologías conservan la portada de v1, sin
   * `tipo`; los demás lo llevan delante, igual que en `canonicalHref` de
   * `app.js` y que en `PW.articleUrl` de §0b.
   */
  function catalogUrl(kind) {
    return kind === DEFAULT_KIND ? 'index.html' : 'index.html?tipo=' + encodeURIComponent(kind);
  }

  /** URL del artículo sin fragmento: la misma base que usa `sectionUrl`. */
  function articleBaseUrl() {
    // `location.origin` es "null" bajo file://, así que se parte del href, como
    // en §6.8. Conserva el `?tipo=&title=` con el que se ha llegado aquí.
    return String(window.location.href).split('#')[0];
  }

  /* ----------------------------------------------------------------
   * 14.1 · Migas de pan con dominio y categoría (§15)
   * ---------------------------------------------------------------- */

  /**
   * Inserta el dominio —y la categoría, si la hay— entre «Portada» y el título.
   * El dominio es un enlace al catálogo de §7; la categoría no tiene ruta, así
   * que va como texto. Idempotente por `data-pw-breadcrumb`, que `clear(root)`
   * se lleva con el resto y por eso hay que volver a aplicarla.
   */
  function enhanceBreadcrumb() {
    var nav = find('.pw-breadcrumb');
    if (!nav) { return null; }
    if (nav.getAttribute('data-pw-breadcrumb') === '1') { return nav; }
    var current = nav.querySelector('.pw-breadcrumb-current');
    if (!current) { return null; }

    var kind = currentKind();
    var article = currentArticle();

    function crumb(label, href) {
      var node;
      if (href) {
        node = makeEl('a', 'pw-breadcrumb-domain', label);
        node.setAttribute('href', href);
      } else {
        node = makeEl('span', 'pw-breadcrumb-domain', label);
      }
      nav.insertBefore(makeEl('span', 'pw-breadcrumb-sep', '›'), current);
      nav.insertBefore(node, current);
    }

    crumb(kindLabelOf(kind), catalogUrl(kind));
    if (article && article.category) { crumb(String(article.category), ''); }
    nav.setAttribute('data-pw-breadcrumb', '1');
    return nav;
  }

  /* ----------------------------------------------------------------
   * 14.2 · Botones de citar, compartir e imprimir (§17, §19)
   * ---------------------------------------------------------------- */

  /**
   * Inyecta los tres botones en `.pw-article-actions`, que `render.js` crea en
   * runtime (y solo si el artículo trae categoría o `updated`). Van en un
   * envoltorio para separarlos de las etiquetas con un filete, sin tocar el
   * `gap` del flex que las alinea. Idempotente por clase propia.
   */
  function ensureActionButtons() {
    var box = find('.pw-article-actions');
    if (!box) { return null; }
    if (box.querySelector('.pw-cite-btn')) { return box; }
    var group = makeEl('span', 'pw-action-btns');
    group.setAttribute('data-pw-actions', '1');
    group.innerHTML = ACTION_BTN_MARKUP; // literal, sin datos
    box.appendChild(group);
    return box;
  }

  /** Rótulo efímero tras copiar: mismo tiempo que el destello de §6.8. */
  function flashLabel(button, text) {
    var label = button ? button.querySelector('.pw-action-label') : null;
    if (!label) { return; }
    var was = label.textContent;
    setText(button, '.pw-action-label', text);
    later(function () { setText(button, '.pw-action-label', was); }, COPIED_MS);
  }

  /**
   * Cita estilo APA de lo que se está leyendo. El año sale del `updated` en
   * crudo —`formatDate` es privado de `render.js`— y solo se toman sus cuatro
   * primeros dígitos, que en un ISO `AAAA-MM-DD` son el año y nada más.
   */
  function citationText() {
    var article = currentArticle();
    if (!article) { return ''; }
    var year = /^(\d{4})/.exec(String(article.updated || '').trim());
    var out = String(article.title || article.slug || '');
    out += year ? ' (' + year[1] + ')' : ' (s. f.)';
    out += '. ' + SITE_NAME + '.';
    if (article.category) { out += ' ' + article.category + '.'; }
    return out + ' ' + articleBaseUrl();
  }

  /** §17: citar al portapapeles con `copyText` — cero código de portapapeles nuevo. */
  function copyCitation() {
    var text = citationText();
    if (!text) {
      warnOnce('cite-none', 'no hay ningún artículo en esta página que citar.');
      return false;
    }
    var button = find('.pw-cite-btn');
    copyText(text, function (ok) {
      if (!ok || !button) { return; }
      confirmCopy(button);
      flashLabel(button, 'Cita copiada');
    });
    return true;
  }

  /**
   * §17: `navigator.share` si el navegador lo trae, y si no, copiar el mensaje.
   * `AbortError` es el usuario cerrando el panel: se calla, no es un fallo.
   */
  function shareArticle() {
    var article = currentArticle();
    if (!article) {
      warnOnce('share-none', 'no hay ningún artículo en esta página que compartir.');
      return false;
    }
    var url = articleBaseUrl();
    var message = 'Mira este artículo en ' + SITE_NAME + ': ' + url;
    var button = find('.pw-share-btn');
    var nav = window.navigator;

    if (nav && typeof nav.share === 'function') {
      var payload = {
        title: String(article.title || article.slug || document.title),
        text: message,
        url: url
      };
      var pending;
      try {
        pending = nav.share(payload);
      } catch (error) {
        warnOnce('share-sync', 'navigator.share() no ha podido abrirse.', error);
        return false;
      }
      if (pending && typeof pending.then === 'function') {
        pending.then(function () {
          if (button) { confirmCopy(button); }
        }, function (error) {
          if (error && error.name === 'AbortError') { return; } // cerrado a propósito
          warnOnce('share', 'el navegador ha denegado compartir.', error);
        });
      }
      return true;
    }

    copyText(message, function (ok) {
      if (!ok || !button) { return; }
      confirmCopy(button);
      flashLabel(button, 'Enlace copiado');
    });
    return true;
  }

  /** §19. El botón se oculta solo al imprimir: `.pw-article-actions` es `display:none`. */
  function printPage() {
    window.print();
  }

  /* ----------------------------------------------------------------
   * 14.3 · Anterior / siguiente (§16)
   * ---------------------------------------------------------------- */

  /**
   * Enlace de vecino en el catálogo. `PW.list()` ya viene ordenado por título (§2
   * de `render.js`), así que el índice en la lista ES el sitio en el catálogo: no
   * hace falta reordenar ni guardar nada.
   */
  function prevNextLink(kind, entry, label, where) {
    var link = makeEl('a', 'pw-prevnext-link pw-prevnext-' + where);
    link.setAttribute('href', articleUrl(kind, entry.slug));
    link.appendChild(makeEl('span', 'pw-prevnext-label', label));
    link.appendChild(makeEl('span', 'pw-prevnext-title', entry.title || entry.slug));
    return link;
  }

  /**
   * Va como bloque propio al final de `.pw-article` —después de `.pw-related` si
   * lo hay— y no dentro de la ficha: la ficha mide `--pw-aside-w` (18rem) y un
   * título de partido no cabe en una columna estrecha sin partirse en tres
   * líneas. Como bloque ancho, los dos enlaces se leen de un vistazo.
   */
  function renderPrevNext() {
    var article = currentArticle();
    if (!article) { return null; }
    var wrap = find('.pw-article');
    if (!wrap) { return null; }
    var existing = wrap.querySelector('.pw-prevnext');
    if (existing) { return existing; }

    var kind = currentKind();
    var list = PW.list(kind);
    var here = currentKey();
    var at = -1;
    var i;
    for (i = 0; i < list.length; i++) {
      if (storeKey(kind, list[i].slug) === here) { at = i; break; }
    }
    if (at < 0 || list.length < 2) { return null; }

    var box = makeEl('nav', 'pw-prevnext');
    box.setAttribute('aria-label', 'Artículo anterior y siguiente');
    box.setAttribute('data-pw-prevnext', '1');
    if (at > 0) { box.appendChild(prevNextLink(kind, list[at - 1], 'Anterior', 'prev')); }
    if (at < list.length - 1) { box.appendChild(prevNextLink(kind, list[at + 1], 'Siguiente', 'next')); }
    if (!box.firstChild) { return null; }

    wrap.appendChild(box);
    return box;
  }

  /* ----------------------------------------------------------------
   * 14.4 · Índice flotante (§14)
   * ---------------------------------------------------------------- */

  function stopFloatToc() {
    if (dom.floatSpy) {
      dom.floatSpy.disconnect();
      dom.floatSpy = null;
    }
  }

  /**
   * Scrollspy propio, con el MISMO contrato que el de `render.js` §6
   * (`rootMargin: '0px 0px -70% 0px'`, `aria-current` en el primero visible de
   * arriba): los dos índices resaltan la misma sección leída como la misma, y
   * quien use el teclado o un lector de pantalla obtiene el mismo estado. El de
   * `render.js` es privado, así que aquí solo se repite el patrón; el observador
   * se suelta en `stopFloatToc()`, que se llama al rehacer y en `teardown()`.
   */
  function watchFloatToc(headings, links) {
    stopFloatToc();
    if (typeof window.IntersectionObserver !== 'function') {
      warnOnce('float-io', 'sin IntersectionObserver; el índice flotante no se resalta.', headings);
      return;
    }
    var current = -1;
    var visible = [];

    function paint(index) {
      if (index === current || index < 0 || index >= links.length) { return; }
      if (current >= 0 && links[current]) { links[current].removeAttribute('aria-current'); }
      current = index;
      links[index].setAttribute('aria-current', 'true');
    }

    dom.floatSpy = new window.IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var index = headings.indexOf(entry.target);
        if (index < 0) { return; }
        var at = visible.indexOf(index);
        if (entry.isIntersecting) {
          if (at < 0) { visible.push(index); }
        } else if (at >= 0) {
          visible.splice(at, 1);
        }
      });
      if (visible.length) { paint(Math.min.apply(null, visible)); }
    }, { rootMargin: '0px 0px -70% 0px', threshold: 0 });

    headings.forEach(function (heading) { dom.floatSpy.observe(heading); });
    paint(0);
  }

  /**
   * Índice lateral de secciones, para las pantallas en las que el `.pw-toc` de
   * `render.js` no está pegado al texto; EN QUÉ PANTALLAS SE VE lo decide el
   * bloque `v3.3 · 4` de wiki.css, no esta función, que siempre lo construye
   * cuando el artículo tiene tres o más secciones con `id`.
   *
   * Se cuelga de `.pw-content` —la REJILLA de §8— y no de `.pw-article`, que es
   * un bloque: como elemento de la rejilla es lo que le permite ocupar su
   * columna al lado del texto sin superponerse a nada, ni siquiera a una tabla
   * ancha. Y al ser hijo de `main`, un `clear(root)` de `render.js` lo destruye
   * con el artículo, así que nunca puede quedar un índice de las secciones de
   * otro; el guard se hace con `find()` en vivo por lo mismo.
   */
  function buildFloatingToc() {
    if (find('.pw-toc-float')) { return null; }
    var headings = findAll('.pw-h2[id]');
    if (headings.length < MIN_FLOAT_TOC) { return null; }
    var grid = find('.pw-content') || find('.pw-article');
    if (!grid) { return null; }

    var nav = makeEl('nav', 'pw-toc-float');
    nav.setAttribute('aria-label', 'Índice de secciones');
    nav.setAttribute('data-pw-toc-float', '1');
    nav.appendChild(makeEl('div', 'pw-toc-float-title', 'En esta página'));

    var list = makeEl('ul', 'pw-toc-float-list');
    var links = [];
    headings.forEach(function (heading) {
      var id = String(heading.getAttribute('id') || '');
      if (!id) { return; }
      // El texto del encabezado está en `.pw-headline`; el `¶` del permalink del
      // §6.8 vive en el mismo `h2` y ensuciaría el título del índice.
      var headline = heading.querySelector('.pw-headline');
      var item = makeEl('li', 'pw-toc-float-item');
      var link = makeEl('a', 'pw-toc-float-link', headline ? headline.textContent : heading.textContent);
      link.setAttribute('href', '#' + id);
      item.appendChild(link);
      list.appendChild(item);
      links.push(link);
    });
    if (links.length < MIN_FLOAT_TOC) { return null; }

    nav.appendChild(list);
    grid.appendChild(nav);
    watchFloatToc(headings, links);
    return nav;
  }

  /* ----------------------------------------------------------------
   * 14.5 · Líneas de tiempo desde tablas-cronología (§18)
   * ---------------------------------------------------------------- */

  function timelineItem(year, text, link) {
    var item = makeEl('li', 'pw-timeline-item');
    item.appendChild(makeEl('span', 'pw-timeline-year', year));
    if (link) {
      var anchor = makeEl('a', 'pw-timeline-text pw-timeline-link', text);
      anchor.setAttribute('href', link.getAttribute('href') || '#');
      item.appendChild(anchor);
    } else {
      item.appendChild(makeEl('span', 'pw-timeline-text', text));
    }
    return item;
  }

  /**
   * No hay ningún campo de datos para esto: se deriva SOLO de las tablas cuya
   * primera cabecera es una fecha, que es lo que ya significa «cronología» en
   * el cuerpo de un artículo. Se pinta DESPUÉS de la tabla, no en su lugar: la
   * tabla sigue siendo la fuente —con sus cifras y sus enlaces— y la línea es
   * su lectura de un vistazo. Menos de dos filas no se marca: sería una línea
   * de un punto, que no es una cronología.
   */
  function renderTimelines() {
    findAll('.pw-text table.pw-wtable').forEach(function (table) {
      if (table.getAttribute('data-pw-timeline') === '1') { return; }
      if (!table.parentNode) { return; }
      var head = table.querySelector('thead tr');
      var first = head ? head.querySelector('th') : null;
      if (!first) { return; }
      var label = String(first.textContent || '').trim().toLowerCase();
      if (TIMELINE_HEADS.indexOf(label) < 0) { return; }

      var rows = findAll('tbody tr', table).filter(function (row) {
        return findAll('td', row).length >= 2;
      });
      if (rows.length < 2) { return; }

      var line = makeEl('ul', 'pw-timeline');
      line.setAttribute('data-pw-timeline', '1');
      rows.forEach(function (row) {
        var cells = findAll('td', row);
        var year = String(cells[0].textContent || '').trim();
        var text = String(cells[1].textContent || '').trim();
        if (!year || !text) { return; }
        line.appendChild(timelineItem(year, text, cells[1].querySelector('a')));
      });
      if (!line.firstChild) { return; }

      // La marca va en la TABLA, que es la que vuelve a existir en cada
      // re-render: si fuera en la línea, un re-render la dejaría huérfana.
      table.setAttribute('data-pw-timeline', '1');
      table.parentNode.insertBefore(line, table.nextSibling);
    });
  }

  /* ----------------------------------------------------------------
   * 14.6 · Resaltado de la búsqueda: productor y consumidor (§13)
   * ---------------------------------------------------------------- */

  /**
   * Minúsculas y sin diacríticos, igual que el `fold` de `search.js` §1: sin
   * él, buscar «fascismo» no encontraría «fascísmo». El de `search.js` no está
   * publicado en `PW`, así que aquí se repite; si algún día se publica, esta
   * función debe pasar a delegar como hacen el resto de adaptadores de §0b.
   */
  function foldText(value) {
    var text = String(value === null || value === undefined ? '' : value).toLowerCase();
    if (typeof text.normalize === 'function') { text = text.normalize('NFD'); }
    return text.replace(/[\u0300-\u036f]/g, '');
  }

  /**
   * Texto plegado y mapa de cada carácter plegado a su índice en el original.
   * Sin el mapa, quitar tildes correría las posiciones y el corte se haría en
   * medio de una letra acentuada.
   */
  function foldMap(text) {
    var map = [];
    var out = [];
    for (var i = 0; i < text.length; i++) {
      var piece = foldText(text.charAt(i));
      for (var j = 0; j < piece.length; j++) {
        map.push(i);
        out.push(piece.charAt(j));
      }
    }
    return { text: out.join(''), map: map };
  }

  /** Rangos de coincidencia, en índices del texto ORIGINAL del nodo. */
  function matchRanges(node, needle) {
    var folded = foldMap(node.nodeValue);
    var ranges = [];
    var at = folded.text.indexOf(needle);
    while (at >= 0) {
      var start = folded.map[at];
      var end = folded.map[at + needle.length - 1] + 1;
      if (end > start) { ranges.push({ start: start, end: end }); }
      at = folded.text.indexOf(needle, at + needle.length);
    }
    return ranges;
  }

  /**
   * Envuelve las coincidencias en `<mark>`. Va de la última a la primera porque
   * `splitText` parte el nodo: hacerlo al revés dejaría los índices de las
   * siguientes sin validez. `splitText` + `appendChild` es DOM puro: ni un
   * `innerHTML` ni un `style` en línea, que es lo que la CSP y el contrato
   * exigen.
   */
  function wrapMatches(node, ranges) {
    for (var i = ranges.length - 1; i >= 0; i--) {
      var start = ranges[i].start;
      var end = ranges[i].end;
      if (end > node.nodeValue.length) { continue; }
      node.splitText(end);
      var middle = node.splitText(start);
      var mark = document.createElement('mark');
      mark.className = 'pw-qmark';
      mark.setAttribute('data-pw-qmark', '1');
      middle.parentNode.insertBefore(mark, middle);
      mark.appendChild(middle);
    }
  }

  /** Primer resaltado, al centro y sin saltos si el usuario pidió menos movimiento. */
  function scrollToQueryMark() {
    var mark = find('.pw-text [data-pw-qmark]');
    if (!mark || typeof mark.scrollIntoView !== 'function') { return; }
    try {
      mark.scrollIntoView({ block: 'center', behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    } catch (error) {
      mark.scrollIntoView(); // navegadores que solo aceptan las dos sueltas
    }
  }

  /**
   * Consumidor de `?q=`. Solo se llega aquí desde un enlace de resultados de
   * búsqueda (§14.7), así que un `?q=` escrito a mano también resalta: es el
   * mismo contrato y no cuesta nada. Idempotente por `[data-pw-qmark]`.
   */
  function syncQueryHighlight() {
    var text = find('.pw-text');
    if (!text) { return 0; }
    var needle = foldText(queryParam('q')).replace(/\s+/g, ' ').trim();
    if (!needle) { return 0; }

    // Se recogen los nodos ANTES de partir ninguno: partir un nodo invalida
    // el recorrido del TreeWalker.
    var walker = document.createTreeWalker(text, SHOW_TEXT, null, false);
    var nodes = [];
    var node = walker.nextNode();
    while (node) {
      nodes.push(node);
      node = walker.nextNode();
    }

    var total = 0;
    nodes.forEach(function (target) {
      var parent = target.parentNode;
      if (!parent || !parent.tagName) { return; }
      var tag = parent.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'MARK') { return; }
      // La línea de tiempo repite el texto de la tabla que la ha generado, y el
      // `¶` del permalink es un glifo, no una palabra: ni uno ni otro se marcan.
      if (closest(parent, '.pw-timeline, .pw-permalink')) { return; }
      if (foldText(target.nodeValue).indexOf(needle) < 0) { return; } // prefiltro
      var ranges = matchRanges(target, needle);
      if (!ranges.length) { return; }
      wrapMatches(target, ranges);
      total += ranges.length;
    });

    if (total && !qScrolled) {
      qScrolled = true;
      scrollToQueryMark();
    }
    return total;
  }

  /**
   * Productor: el input que gobierna el panel donde vive el resultado. Se
   * busca el panel del propio enlace y se pregunta a cada `.pw-search-input` si
   * lo contiene —es la relación que usa el `findPanel` de `search.js`, que no
   * está publicado—, y si no, el de la cabecera, que es el que está abierto.
   */
  function searchInputOf(anchor) {
    var panel = closest(anchor, '.pw-search-results');
    var inputs = findAll('.pw-search-input');
    var i;
    if (panel) {
      for (i = 0; i < inputs.length; i++) {
        if (inputs[i].parentElement === panel || (inputs[i].form && inputs[i].form.contains(panel))) {
          return inputs[i];
        }
      }
    }
    if (headerSearch) {
      var head = headerSearch.querySelector('.pw-search-input');
      if (head) { return head; }
    }
    return inputs[0] || null;
  }

  /**
   * Añade `&q=` al enlace del resultado y DEJA navegar: el resaltado del §13 lo
   * hace la vista de destino al leer la query. No es `preventDefault` + ir a
   * mano porque el enlace ya lleva `tipo` y `title` bien formados.
   */
  function carryQuery(anchor) {
    var href = String(anchor.getAttribute('href') || '');
    if (!href || /[?&]q=/.test(href)) { return false; }
    var input = searchInputOf(anchor);
    var query = input ? String(input.value || '').trim() : '';
    if (!query) { return false; }
    anchor.setAttribute('href', href + (href.indexOf('?') >= 0 ? '&' : '?') + 'q=' + encodeURIComponent(query));
    return true;
  }

  /* ----------------------------------------------------------------
   * 14.7 · Un solo punto de entrada para todo lo anterior
   * ---------------------------------------------------------------- */

  /**
   * Lo que las ocho features añaden sobre el artículo ya pintado. Se llama una
   * vez desde `init()` y otra por cada lote de mutaciones del §6.4, porque
   * `render.js` rehace el artículo entero con `clear(root)`. Todas las piezas
   * son idempotentes, así que esta segunda pasada solo rellena lo que falte; y
   * como solo INSERTA (nunca reescribe lo que hay), el propio observador se
   * estabiliza en un lote más.
   */
  function syncArticleExtras() {
    enhanceBreadcrumb();
    ensureActionButtons();
    // Mismo criterio que `updateInfo`: sin `.pw-text` esta página no está
    // mostrando un artículo (portada, espectro) y `ensureArticleInfo()` avisaría
    // de un fallo inexistente. Un `console.error` en la portada es exactamente
    // lo que este fichero no debe dejar.
    if (find('.pw-text')) {
      updateUpdatedCell(ensureArticleInfo());
      // El nombre del §15 (v8 · 3) va AQUÍ y no en `init()`: `render.js` rehace
      // el artículo entero con `clear(root)` en cada re-render, y el `h1` que lo
      // nombra se va con él. Esta función es la que se vuelve a pasar en cada
      // mutación, así que es la que puede devolverle el nombre. Es idempotente
      // por `classList.contains`.
      nameOpenTarget();
    }
    renderPrevNext();
    renderTimelines();
    buildFloatingToc();
    syncQueryHighlight();
    return true;
  }

  /* ----------------------------------------------------------------
   * 15 · v8 · 3 · LA TARJETA SE CONVIERTE EN LA FICHA
   * ---------------------------------------------------------------- */

  /**
   * El nombre de la transición de vista va en el elemento que se PULSA, y se
   * pone en el `click`, no antes. La razón es de coste, y conviene tenerla
   * presente porque parece un detalle y no lo es:
   *
   * Si el nombre se pusiera al pintar la rejilla, todas las tarjetas de
   * `#articulos-grid` llevarían `view-transition-name: pw-vt-open` a la vez. Un
   * nombre repetido es el error que hace que el motor DESECHE la transición
   * entera —no que la salga mal—: se quedarían sin fundido de contenido y sin
   * la cabecera quieta de §3 de v6. Con un solo elemento con nombre no puede
   * haber colisión, y encima solo se paga una captura en la que se navega de
   * verdad.
   *
   * En la ficha el nombre va en el `h1` del título, y ese `h1` lo crea
   * `render.js` en cada re-render del §6.4. Por eso se busca en vivo con `find()`
   * y no con un nodo guardado en una variable de módulo: un `clear(root)` se
   * llevaría el nodo y la comprobación en vivo es la única que no miente.
   *
   * No se impide la navegación ni se espera a nada: se pone el nombre y se deja
   * que el motor haga su trabajo. Donde no hay transición entre documentos —y
   * ahora mismo Firefox es uno de esos motores— la clase no hace nada, que es
   * un `view-transition-name` inerte y no un error.
   *
   * Un clic con modificador abre en otra pestaña o en otra ventana, donde no hay
   * documento propio que transicionar, y este documento sigue vivo sin que vuelva
   * a pasarle `pageshow`. Por eso §13 no nombra nada en ese caso: nombrarla
   * dejaría la tarjeta con el nombre puesto para la navegación siguiente. El
   * `clearOpenCard()` de `pageshow` sigue haciendo falta para el bfcache, que es
   * el otro camino por el que este script no vuelve a ejecutarse.
   */
  function nameOpenTarget() {
    if (prefersReducedMotion()) { return false; }
    var title = find('.pw-article h1.pw-title');
    if (!title || title.classList.contains('pw-vt-open')) { return false; }
    title.classList.add('pw-vt-open');
    return true;
  }

  /**
   * El origen del nombre: la tarjeta que se va a pulsar.
   *
   * Limpia antes cualquier nombre previo. `view-transition-name` es único en la
   * captura —si dos elementos lo comparten, el motor aborta la transición
   * entera—, así que nombrar sin limpiar antes convierte un descuido en una
   * transición que no ocurre y que no explica ningún error.
   */
  function nameOpenCard(card) {
    if (!card || prefersReducedMotion()) { return false; }
    clearOpenCard();
    card.classList.add('pw-vt-open');
    return true;
  }

  /** Al volver con la caché, la tarjeta conserva la clase del clic anterior. */
  function clearOpenCard() {
    var named = find('a.pw-card.pw-vt-open');
    if (!named) { return false; }
    named.classList.remove('pw-vt-open');
    return true;
  }

  /* ----------------------------------------------------------------
   * 14.8 · Service worker (PWA)
   * ---------------------------------------------------------------- */

  /**
   * Registra `sw.js` para el modo offline. Solo desde aquí y nunca desde el
   * HTML: la CSP no admite scripts en línea, y el registro necesita esperar al
   * arranque de la página. No toca el DOM y `register()` sobre el mismo
   * scope devuelve el registro vivo, así que `init()` puede llamarla sin
   * miedo a duplicar nada.
   */
  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) { return; }
    // file:// y http://localhost no tienen SW; solo en servidor real.
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') { return; }
    if (window.location.protocol === 'file:') { return; }
    navigator.serviceWorker.register('sw.js').catch(function (error) {
      // El fastidioso CSP worker-src... en Cloudflare Pages ya está permitido.
      window.console && console.error('no se pudo registrar el service worker', error);
    });
  }

  onReady(init);
})(window.PW = window.PW || {});
