/* politics-wiki · js/graph.js
 *
 * ===== v4 · grafo de conexiones de la ficha =====
 *
 * Un grafo radial, no un diagrama de fuerzas: el artículo actual en el centro y
 * sus vecinos (los de `related` y los wikilinks que aparecen en su texto) en un
 * anillo. Es un índice de salta —cada nodo es un `<a>` real de SVG— para leer
 * de un vistazo qué hay alrededor sin recorrer la ficha entera.
 *
 * `.pw-aside` no existe en el HTML estático: lo crea `render.js` en cada
 * render. Por eso el grafo se busca en el DOM en vez de aparecer en una plantilla
 * inerte, y se reconstruye con un MutationObserver si `render.js` vuelve a
 * pintar. Este script se carga antes que `features.js` a propósito: así su
 * `appendChild` corre antes que el de la ficha del artículo y el orden final del
 * panel lateral queda índice → infobox → conexiones → datos del artículo.
 *
 * Script clásico (sin módulos, sin build, sin dependencias) para que la wiki
 * siga funcionando abierta con file://.
 *
 * allow: SIZE_OK — el proyecto es sin build; partir este bloque en módulos
 * exigiría un bundler y rompería "cero dependencias" y el arranque por file://.
 */
(function (PW) {
  'use strict';

  /* ================================================================
   * 0 · Constantes y estado
   * ================================================================ */

  var VIEW_W = 480;
  var VIEW_H = 240;

  var CENTER_X = 70;      // nodo central, a la izquierda
  var CENTER_Y = 115;
  var CENTER_R = 26;
  var CENTER_FONT = 13;
  var CENTER_CHARS = 16;

  var RING_X = 300;       // centro del anillo de vecinos
  var RING_Y = 115;
  var RING_R = 88;
  var NODE_R = 13;
  var LABEL_FONT = 12;
  var LABEL_CHARS = 10;

  // La circunferencia del anillo admite ~7 etiquetas de tamaño completo antes
  // de pisarse (2·π·R ≈ 553px contra ~70px por etiqueta), así que el dibujo se
  // queda en 8 vecinos: los cinco de `related` y los tres primeros wikilinks
  // del texto, que son los más significativos en orden de lectura. `related`
  // primero, wikilinks después, y el resto se descarta sin más.
  var RENDER_MAX = 8;
  // La RECOPILACIÓN sí admite más (el texto de una ficha densa enlaza decenas
  // de destinos): 24 es el tope duro de lo que se recorre antes de rendirse.
  var MAX_NEIGHBORS = 24;
  var CHAR_W = 0.55;      // ancho medio de un carácter, en fracción de la fuente
  var MIN_CHARS = 3;

  var MAX_DEPTH = 8;      // los datos son planos; esto es una red de seguridad
  var MAX_STRINGS = 4000;

  var state = { observer: null };
  var warned = {};

  /* ================================================================
   * 1 · Utilidades
   * ================================================================ */

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  function warnOnce(key, message, detail) {
    if (warned[key]) { return; }
    warned[key] = true;
    if (detail === undefined) { console.error('PW.graph: ' + message); }
    else { console.error('PW.graph: ' + message, detail); }
  }

  function round(value) {
    return Math.round(value * 10) / 10;
  }

  function shorten(text, max) {
    var value = String(text === null || text === undefined ? '' : text);
    var limit = Math.floor(max);
    if (limit < MIN_CHARS) { limit = MIN_CHARS; }
    if (value.length <= limit) { return value; }
    return value.slice(0, limit - 1) + '…';
  }

  /** Caracteres que caben centrados en `center` sin salirse del viewBox. */
  function maxCharsAt(center, font, cap) {
    var room = Math.min(center, VIEW_W - center) - 10;
    if (room < CHAR_W * font) { return MIN_CHARS; }
    return Math.min(cap, Math.floor((room * 2) / (CHAR_W * font)));
  }

  function articleUrlFor(kind, slug) {
    if (typeof PW.articleUrl === 'function') {
      return PW.articleUrl({ kind: kind, slug: slug });
    }
    return 'article.html?title=' + encodeURIComponent(slug);
  }

  /* ================================================================
   * 2 · Vecinos
   * ================================================================ */

  /** Dominio de un prefijo (`geo` de `geo:x`), o `null` si no es un prefijo. */
  function prefixKind(value) {
    var text = String(value === null || value === undefined ? '' : value).toLowerCase().trim();
    var kinds = Array.isArray(PW.KINDS) && PW.KINDS.length
      ? PW.KINDS
      : ['ideologia', 'partido', 'gobierno', 'geopolitica', 'organizacion', 'pensador', 'concepto'];
    if (kinds.indexOf(text) >= 0) { return text; }
    if (text === 'geo') { return 'geopolitica'; }
    if (text === 'org') { return 'organizacion'; }
    if (text === 'gob') { return 'gobierno'; }
    if (text === 'pensadores') { return 'pensador'; }
    if (text === 'conceptos') { return 'concepto'; }
    return null;
  }

  /**
   * Resuelve un destino. Con prefijo se busca en ese dominio (`partido:ppsoe`);
   * sin prefijo, en los cinco con la precedencia de `PW.find`. Un prefijo que
   * no es dominio no es prefijo: es parte del slug, igual que en el renderizador.
   */
  function resolve(raw) {
    var target = String(raw === null || raw === undefined ? '' : raw).trim();
    if (!target) { return null; }
    var cut = target.indexOf(':');
    var kind = null;
    var slug = target;
    if (cut > 0) {
      kind = prefixKind(target.slice(0, cut));
      if (kind) { slug = target.slice(cut + 1).trim(); }
    }
    var found = null;
    try {
      if (kind) {
        if (typeof PW.getIn === 'function') { found = PW.getIn(kind, slug); }
        else if (typeof PW.get === 'function') { found = PW.get(kind, slug); }
      } else if (typeof PW.find === 'function') {
        found = PW.find(slug);
      }
    } catch (error) {
      warnOnce('resolve', 'no se pudo resolver el destino "' + target + '".', error);
      return null;
    }
    return found || null;
  }

  /**
   * Todos los strings de la entrada, en orden de aparición. Es un recorrido
   * completo a propósito: `linkcheck` solo mira `text`/`caption`/`items`/`rows`
   * y con eso se pierde lo que va en `note` y en `quote`, que es justo donde
   * hay enlaces de verdad.
   */
  function collectStrings(value, out, depth) {
    if (depth > MAX_DEPTH || out.length >= MAX_STRINGS) { return out; }
    if (typeof value === 'string') { out.push(value); return out; }
    if (Array.isArray(value)) {
      for (var i = 0; i < value.length; i++) {
        collectStrings(value[i], out, depth + 1);
      }
      return out;
    }
    if (value && typeof value === 'object') {
      for (var key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          collectStrings(value[key], out, depth + 1);
        }
      }
    }
    return out;
  }

  /**
   * `related` primero y luego los wikilinks por orden de aparición, deduplicados
   * por dominio+slug y sin el propio artículo. Lo que no resuelve se ignora sin
   * ruido: el validador ya lo cuenta como referencia rota si lo es.
   */
  function collectNeighbors(entry, self) {
    var out = [];
    var seen = {};
    if (!entry) { return out; }

    function push(raw) {
      if (out.length >= MAX_NEIGHBORS) { return; }
      var found = resolve(raw);
      if (!found) { return; }
      var kind = String(found.kind || '');
      var slug = String(found.slug || '');
      if (!kind || !slug) { return; }
      if (kind === self.kind && slug === self.slug) { return; }
      var key = kind + ':' + slug;
      if (seen[key]) { return; }
      seen[key] = true;
      out.push({ kind: kind, slug: slug, title: String(found.title || slug) });
    }

    if (Array.isArray(entry.related)) {
      for (var i = 0; i < entry.related.length; i++) { push(entry.related[i]); }
    }

    var texts = collectStrings(entry, [], 0);
    for (var t = 0; t < texts.length && out.length < MAX_NEIGHBORS; t++) {
      // Un regex nuevo por llamada: uno con `g` recuerda `lastIndex` entre usos.
      var re = /\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g;
      var match = re.exec(texts[t]);
      while (match) {
        push(match[1].trim());
        match = re.exec(texts[t]);
      }
    }
    return out;
  }

  /* ================================================================
   * 3 · Render
   * ================================================================ */

  function renderEdge(x1, y1, x2, y2) {
    return (
      '<line class="pw-graph-edge" x1="' + x1 + '" y1="' + y1 +
      '" x2="' + x2 + '" y2="' + y2 + '" />'
    );
  }

  /** Ancho aproximado de un texto en unidades del viewBox. */
  function textWidth(text, font) {
    return String(text).length * CHAR_W * font;
  }

  /**
   * Una etiqueta choca con otra si comparten banda horizontal (tolerancia de
   * un cuerpo de texto) y se solapan en vertical. El umbral horizontal manda
   * sobre las mitades reales: es la distancia a la que dos renglones con un
   * ligero desfase empiezan a leerse como uno solo.
   */
  function collides(placed, x, y, half) {
    for (var i = 0; i < placed.length; i++) {
      var other = placed[i];
      if (Math.abs(other.y - y) < LABEL_FONT + 6 && Math.abs(other.x - x) < other.half + half + 4) {
        return true;
      }
    }
    return false;
  }

  /**
   * Línea base de la etiqueta de un vecino. En la mitad superior del anillo se
   * prefiere ponerla por encima del círculo y en la inferior por debajo, y en
   * ambos casos fuera del radio: nunca dentro, donde cortaría una arista o un
   * vecino. Dentro del lado elegido se prueban cuatro peldaños de 16px en orden
   * (el primero cerca del nodo, el resto aplazados hacia el borde del lienzo)
   * y se acepta el primero que no choca con las ya colocadas.
   */
  function neighborLabelY(placed, x, above, below, half) {
    var step = 16;
    var candidates = [
      above, above - step, above - step * 2,
      below, below + step, below + step * 2
    ];
    for (var i = 0; i < candidates.length; i++) {
      var y = candidates[i];
      if (y < 12 || y > VIEW_H - 8) { continue; }
      if (!collides(placed, x, y, half)) { return y; }
    }
    return below;
  }

  /** Etiqueta del centro del nodo: la del propio artículo, tinta maciza. */
  function renderCenter(self) {
    var raw = shorten(self.title, maxCharsAt(CENTER_X, CENTER_FONT, CENTER_CHARS));
    return (
      '<a class="pw-graph-node pw-graph-hub" href="' + PW.escapeHtml(articleUrlFor(self.kind, self.slug)) + '">' +
      '<title>' + PW.escapeHtml(self.title) + '</title>' +
      '<circle cx="' + CENTER_X + '" cy="' + CENTER_Y + '" r="' + CENTER_R + '" />' +
      '<text class="pw-graph-label pw-graph-label-hub" x="' + CENTER_X + '" y="' + (CENTER_Y + CENTER_R + 15) + '" text-anchor="middle">' +
      PW.escapeHtml(raw) + '</text>' +
      '</a>'
    );
  }

  function renderNeighbor(node, x, y, labelY) {
    return (
      '<a class="pw-graph-node" href="' + PW.escapeHtml(articleUrlFor(node.kind, node.slug)) + '">' +
      '<title>' + PW.escapeHtml(node.title) + '</title>' +
      '<circle cx="' + x + '" cy="' + y + '" r="' + NODE_R + '" />' +
      '<text class="pw-graph-label" x="' + x + '" y="' + labelY + '" text-anchor="middle">' +
      PW.escapeHtml(node.label) + '</text>' +
      '</a>'
    );
  }

  /**
   * Los vecinos van repartidos por el anillo, cada uno con su ángulo, y la
   * etiqueta se coloca FUERA del radio (arriba en la mitad superior, abajo en
   * la inferior) eligiendo entre cuatro peldaños el primero que no choca con
   * las ya dibujadas: con siete u ocho etiquetas alrededor del anillo es lo
   * que evita que se pisen, sobre todo cerca de los polos donde el anillo casi
   * no avanza en horizontal.
   */
  function renderRing(neighbors) {
    var out = [];
    var placed = [];
    var step = (Math.PI * 2) / neighbors.length;
    for (var i = 0; i < neighbors.length; i++) {
      var angle = -Math.PI / 2 + step * i;
      var x = round(RING_X + Math.cos(angle) * RING_R);
      var y = round(RING_Y + Math.sin(angle) * RING_R);
      var raw = shorten(neighbors[i].title, maxCharsAt(x, LABEL_FONT, LABEL_CHARS));
      neighbors[i].label = raw;
      var above = y - NODE_R - 5;
      var below = y + NODE_R + 11;
      var half = textWidth(raw, LABEL_FONT) / 2;
      var labelY = neighborLabelY(placed, x, above, below, half);
      // Tras la resolución de colisiones la mitad se guarda para las siguientes.
      placed.push({ x: x, y: labelY, half: half });

      out.push(renderEdge(CENTER_X, CENTER_Y, x, y));
      out.push(renderNeighbor(neighbors[i], x, y, labelY));
    }
    return out.join('');
  }

  function renderSvg(self, neighbors) {
    return (
      '<svg class="pw-graph" viewBox="0 0 ' + VIEW_W + ' ' + VIEW_H + '"' +
      ' width="100%" preserveAspectRatio="xMidYMid meet"' +
      ' role="img" focusable="false"' +
      ' aria-label="' + PW.escapeHtml('Conexiones de ' + self.title) + '">' +
      renderRing(neighbors) + renderCenter(self) +
      '</svg>'
    );
  }

  /** El panel lateral solo existe si el artículo trae índice o infobox. */
  function build(aside) {
    var context = typeof PW.current === 'function' ? PW.current() : null;
    var entry = context && context.entry ? context.entry : null;
    if (!entry) { return null; }

    var self = {
      kind: String(entry.kind || (context && context.kind) || 'ideologia'),
      slug: String(entry.slug || (context && context.slug) || ''),
      title: String(entry.title || entry.slug || '')
    };
    if (!self.slug || !self.title) { return null; }

    var neighbors = collectNeighbors(entry, self);
    if (neighbors.length === 0) { return null; } // sin vecinos no hay panel que pintar
    // Límite editorial del dibujo: `related` primero y los primeros wikilinks
    // del texto. El resto se descarta sin más: son el largo de cola del texto,
    // no los vecinos de verdad.
    if (neighbors.length > RENDER_MAX) { neighbors = neighbors.slice(0, RENDER_MAX); }

    var box = document.createElement('div');
    box.className = 'pw-contextmap';
    // Un solo `innerHTML`: el rótulo es un marcado literal (el patrón de
    // INFO_MARKUP de features.js, sin datos que escapar) y todo lo que se
    // interpola en el SVG ha pasado por escapeHtml, incluidos los href que
    // salen de PW.articleUrl.
    box.innerHTML = '<div class="pw-contextmap-title">Conexiones</div>' + renderSvg(self, neighbors);
    aside.appendChild(box);
    return box;
  }

  /* ================================================================
   * 4 · Arranque
   * ================================================================ */

  /** Reconstruye solo si falta el grafo: es lo que corta el bucle del observador. */
  function sync() {
    var aside = document.querySelector('.pw-aside');
    if (!aside) { return null; }                    // artículo sin panel lateral
    if (aside.querySelector('.pw-contextmap')) { return null; }  // ya está
    return build(aside);
  }

  function watchArticle() {
    if (state.observer) { state.observer.disconnect(); state.observer = null; }
    var main = document.querySelector('main.pw-main');
    if (!main) {
      warnOnce('main', 'no se encuentra <main>; el grafo no se reconstruirá si el artículo se vuelve a pintar.');
      return;
    }
    if (typeof window.MutationObserver !== 'function') {
      warnOnce('observer', 'sin MutationObserver; el grafo solo se calcula al arrancar.');
      return;
    }
    var pending = 0;
    state.observer = new window.MutationObserver(function () {
      if (pending) { return; }
      pending = window.requestAnimationFrame(function () {
        pending = 0;
        sync();
      });
    });
    state.observer.observe(main, { childList: true, subtree: true });
  }

  function init() {
    var context = typeof PW.current === 'function' ? PW.current() : null;
    var page = context
      ? context.page
      : (document.getElementById('articulo') ? 'article' : 'home');
    if (page !== 'article') { return false; } // este fichero solo existe en la ficha

    if (typeof PW.escapeHtml !== 'function'
      || typeof PW.find !== 'function'
      || (typeof PW.getIn !== 'function' && typeof PW.get !== 'function')) {
      warnOnce('api', 'PW.escapeHtml, PW.find y PW.getIn no están disponibles; el grafo no se dibuja.');
      return false;
    }
    if (!context || !context.entry) { return false; }

    sync();
    watchArticle();
    return true;
  }

  PW.graph = {
    init: init,
    teardown: function () {
      if (state.observer) { state.observer.disconnect(); state.observer = null; }
    }
  };

  onReady(init);
})(window.PW = window.PW || {});
