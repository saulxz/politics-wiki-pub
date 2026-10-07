/* politics-wiki · js/spectrum.js
 *
 * ===== v5 · mapa del espectro ideológico =====
 *
 * El mapa vive en su propia página (`espectro.html`), apartado del conmutador
 * de dominios de la portada (v4). Y ya no dibuja siempre las 29 ideologías del
 * catálogo: dibuja SOLO las que marca quien visita la página en el selector de
 * chips que hay encima del mapa, y recuerda esa elección entre sesiones.
 *
 * Mapa de dispersión sobre dos ejes: el económico (izquierda → derecha) y el
 * autoritario (abajo → arriba). Es una pieza de lectura, no de navegación:
 * cada nodo es un `<a>` real de SVG, así que el navegador sigue siendo quien
 * navega y el mapa no depende de JavaScript para llevar a ninguna parte.
 *
 * API: funciona con solo js/render.js (`PW.list`, `PW.get`, `PW.escapeHtml`,
 * `PW.articleUrl`). No necesita `PW.current` ni `js/app.js`: en una página
 * dedicada no hay dominio que consultar, así que el mapa se dibuja siempre.
 *
 * Script clásico (sin módulos, sin build, sin dependencias) para que la wiki
 * siga funcionando abierta con file://. Se carga con `defer` y antes de
 * `features.js`, que debe seguir siendo el último.
 *
 * allow: SIZE_OK — el proyecto es sin build; partir este bloque en módulos
 * exigiría un bundler y rompería "cero dependencias" y el arranque por file://.
 */
(function (PW) {
  'use strict';

  /* ================================================================
   * 0 · Constantes y estado
   * ================================================================ */

  var KIND = 'ideologia';
  var ARTICLE_FALLBACK = 'article.html?title=';

  // Clave de persistencia de la selección. Mismo patrón que §6.1: si el
  // almacenamiento falla (modo privado), el mapa arranca con el lote por
  // defecto y los cambios no se guardan; el sitio sigue funcionando.
  var PICK_KEY = 'politics-wiki:espectro';

  // Lote curado por defecto: la comparación de arranque. Ocho ideologías
  // repartidas por los cuatro cuadrantes del mapa. Quien visita la página las
  // sustituye por las suyas en el selector; la elección se guarda.
  var DEFAULT_SELECTION = [
    'anarquismo',
    'libertarianismo',
    'fascismo',
    'comunismo',
    'conservadurismo',
    'liberalismo',
    'socialdemocracia',
    'socialismo'
  ];

  /** Mínimo de ideologías para que el mapa tenga sentido como comparación. */
  var MIN_SELECTION = 2;

  // viewBox y plot. El margen lateral y el vertical existen para que las
  // marcas de los cuatro polos quepan fuera de la nube de puntos.
  var VIEW_W = 1000;
  var VIEW_H = 600;
  var PLOT_L = 170;
  var PLOT_R = 830;
  var PLOT_T = 46;
  var PLOT_B = 554;
  var CENTER_X = 500;
  var CENTER_Y = 300;

  var NODE_R = 15;
  var NODE_FONT = 18;
  var POLE_FONT = 18;
  var LABEL_GAP = 14;      // línea base de la etiqueta respecto al borde del círculo
  var MAX_CHARS = 14;      // tope de caracteres por etiqueta
  var CHAR_W = 0.55;       // ancho medio de un carácter, en fracción de la fuente
  var MIN_CHARS = 3;

  var POLES = [
    { text: 'Autoritario', x: CENTER_X, y: 26, anchor: 'middle' },
    { text: 'Libertario', x: CENTER_X, y: VIEW_H - 10, anchor: 'middle' },
    // Los dos polos horizontales van POR DEBAJO del eje, no encima: la línea
    // central cruzaría las letras y las partiría por la mitad.
    { text: 'Izquierda económica', x: 14, y: CENTER_Y + 22, anchor: 'start' },
    { text: 'Derecha económica', x: VIEW_W - 14, y: CENTER_Y + 22, anchor: 'end' }
  ];

  /**
   * Coordenadas curadas de las 29 ideologías del catálogo. `x` es el eje
   * económico (-1 extrema izquierda … +1 extrema derecha) y `y` el autoritario
   * (+1 autoritario … -1 libertario).
   *
   * Es una tabla editorial, no un cálculo: son las posiciones que sostienen la
   * lectura del mapa. Un slug que se añada al catálogo y no esté aquí no se
   * dibuja (se omite sin error); uno que se borre deja un hueco, también sin
   * error.
   */
  var COORDS = [
    ['liberalismo', 0.7, -0.5],
    ['anarquismo', -0.8, -0.9],
    ['fascismo', 0.5, 1.0],
    ['capitalismo', 0.9, -0.3],
    ['capitalismo-de-estado', 0.6, 0.6],
    ['socialismo', -0.7, -0.2],
    ['comunismo', -0.9, 0.7],
    ['marxismo', -0.8, 0.4],
    ['leninismo', -0.9, 0.8],
    ['conservadurismo', 0.6, 0.5],
    ['nacionalismo', 0.4, 0.7],
    ['federalismo', 0.0, -0.4],
    ['reformismo', -0.5, -0.1],
    ['socialdemocracia', -0.5, -0.2],
    ['libertarianismo', 0.8, -0.8],
    ['igualitarismo', -0.9, -0.3],
    ['totalitarismo', 0.3, 1.0],
    ['sindicalismo', -0.8, -0.6],
    ['ecopolitica', -0.4, 0.1],
    ['feminismo', -0.4, -0.3],
    ['anarcosindicalismo', -0.9, -0.9],
    ['democracia-cristiana', 0.3, -0.3],
    ['pacifismo', -0.3, -0.6],
    ['keynesianismo', 0.1, -0.1],
    ['maoismo', -0.7, 0.9],
    ['populismo', 0.0, 0.6],
    ['islamismo-politico', -0.1, 0.7],
    ['ilustrismo', 0.2, -0.5],
    ['militarismo', 0.4, 0.9]
  ];

  /** Índice `slug -> [x, y]`. Idempotente: se construye una vez al cargar. */
  var POSITIONS = (function () {
    var index = {};
    for (var i = 0; i < COORDS.length; i++) {
      index[COORDS[i][0]] = [COORDS[i][1], COORDS[i][2]];
    }
    return index;
  }());

  /** Etiquetas ya colocadas, para no superponer dos textos en la misma banda. */
  var placed = [];

  // Estado vivo del selector: la lista completa de nodos dibujables y la
  // selección activa (slugs). Se rellenan en `init()`.
  var allNodes = [];
  var selection = [];

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

  function closest(node, selector) {
    while (node && node.nodeType === 1) {
      if (node.matches && node.matches(selector)) { return node; }
      node = node.parentNode;
    }
    return null;
  }

  function warn(message, detail) {
    if (detail === undefined) { console.error('PW.spectrum: ' + message); }
    else { console.error('PW.spectrum: ' + message, detail); }
  }

  function round(value) {
    return Math.round(value * 10) / 10;
  }

  function mapX(x) {
    return PLOT_L + ((x + 1) / 2) * (PLOT_R - PLOT_L);
  }

  function mapY(y) {
    return PLOT_T + ((1 - y) / 2) * (PLOT_B - PLOT_T);
  }

  /** Ancho aproximado de un texto en unidades del viewBox. */
  function textWidth(text, font) {
    return String(text).length * CHAR_W * font;
  }

  /**
   * Recorta al máximo de caracteres. Se recorta SIEMPRE sobre el texto en crudo
   * y se escapa después: al revés, un corte a mitad de entidad produciría
   * markup roto.
   */
  function shorten(text, max) {
    var value = String(text === null || text === undefined ? '' : text);
    var limit = Math.floor(max);
    if (limit < MIN_CHARS) { limit = MIN_CHARS; }
    if (value.length <= limit) { return value; }
    return value.slice(0, limit - 1) + '…';
  }

  /**
   * Cuántos caracteres caben bajo un nodo sin salirse del viewBox: la mitad
   * libre a cada lado del centro, menos un margen. El tope editorial (14)
   * manda cuando la geometría da más sitio del que interesa.
   */
  function maxCharsAt(center, font, cap) {
    var room = Math.min(center, VIEW_W - center) - 10;
    if (room < CHAR_W * font) { return MIN_CHARS; }
    return Math.min(cap, Math.floor((room * 2) / (CHAR_W * font)));
  }

  /**
   * Una etiqueta choca con otra si comparten banda vertical y se solapan en
   * horizontal. El umbral es un poco más alto que el cuerpo del texto para que
   * dos renglones casi pegados todavía se separen.
   */
  function overlaps(center, y, half) {
    for (var i = 0; i < placed.length; i++) {
      var other = placed[i];
      if (Math.abs(other.y - y) < NODE_FONT + 8 && Math.abs(other.x - center) < other.half + half + 6) {
        return true;
      }
    }
    return false;
  }

  /**
   * Línea base de una etiqueta de nodo: centrada bajo su círculo y, si esa
   * banda ya está ocupada, en el primer renglón libre de los cuatro siguientes.
   * Se buscan huecos en vez de desplazar a ciegas: un desplazamiento fijo acaba
   * dejando dos etiquetas en la misma línea en cuanto la nube es cerrada.
   *
   * Agotadas las cuatro, se prueban dos bandas POR ENCIMA del círculo —la
   * convención de todo mapa rotulado— antes de aceptar la de partida. Si no
   * hay ninguna, el contorno de superficie del CSS deja la letra legible.
   */
  function labelBaseline(center, circleY, half) {
    var base = circleY + NODE_R + LABEL_GAP;
    var step = NODE_FONT + 8;
    var above = circleY - NODE_R - 6;
    var candidates = [base, base + step, base + step * 2, base + step * 3, above, above - step];
    for (var i = 0; i < candidates.length; i++) {
      var y = candidates[i];
      if (y < 12 || y > VIEW_H - 8) { continue; }
      if (!overlaps(center, y, half)) {
        placed.push({ x: center, y: y, half: half });
        return y;
      }
    }
    placed.push({ x: center, y: base, half: half });
    return base;
  }

  function articleUrlFor(slug) {
    if (typeof PW.articleUrl === 'function') {
      return PW.articleUrl({ kind: KIND, slug: slug });
    }
    return ARTICLE_FALLBACK + encodeURIComponent(slug);
  }

  /* ================================================================
   * 2 · Datos
   * ================================================================ */

  /**
   * Los nodos dibujables del mapa: las entradas de `PW.list('ideologia')` (que
   * ya vienen ordenadas por título, y por tanto ese es también el orden de
   * lectura con el teclado, tanto de los chips como de los nodos) que tienen
   * coordenada en la tabla.
   */
  function collectNodes() {
    var list = PW.list(KIND);
    if (!Array.isArray(list)) { return []; }
    var nodes = [];
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      if (!item || !item.slug) { continue; }
      var position = POSITIONS[item.slug];
      if (!position) { continue; } // slug sin coordenada: se omite sin error
      var full = PW.get(KIND, item.slug) || item;
      nodes.push({
        slug: item.slug,
        x: position[0],
        y: position[1],
        title: String(full.title || item.title || item.slug),
        category: String(full.category || item.category || '')
      });
    }
    return nodes;
  }

  /* ================================================================
   * 3 · Render del mapa (igual que v4)
   * ================================================================ */

  function renderAxis() {
    var out = [];
    out.push('<line class="pw-spectrum-axis" x1="' + PLOT_L + '" y1="' + CENTER_Y + '" x2="' + PLOT_R + '" y2="' + CENTER_Y + '" />');
    out.push('<line class="pw-spectrum-axis" x1="' + CENTER_X + '" y1="' + PLOT_T + '" x2="' + CENTER_X + '" y2="' + PLOT_B + '" />');
    return out.join('');
  }

  function renderPoles() {
    var out = [];
    for (var i = 0; i < POLES.length; i++) {
      var pole = POLES[i];
      out.push(
        '<text class="pw-spectrum-pole" x="' + pole.x + '" y="' + pole.y +
        '" text-anchor="' + pole.anchor + '">' + PW.escapeHtml(pole.text) + '</text>'
      );
    }
    return out.join('');
  }

  function renderNode(node) {
    var cx = round(mapX(node.x));
    var cy = round(mapY(node.y));
    var raw = shorten(node.title, maxCharsAt(cx, NODE_FONT, MAX_CHARS));
    var label = PW.escapeHtml(raw);
    var half = textWidth(raw, NODE_FONT) / 2;
    var y = labelBaseline(cx, cy, half);
    var href = articleUrlFor(node.slug);
    var hint = node.category ? node.title + ' — ' + node.category : node.title;

    return (
      '<a class="pw-spectrum-node" href="' + PW.escapeHtml(href) + '">' +
      '<title>' + PW.escapeHtml(hint) + '</title>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + NODE_R + '" />' +
      '<text class="pw-spectrum-label" x="' + cx + '" y="' + round(y) + '" text-anchor="middle">' + label + '</text>' +
      '</a>'
    );
  }

  function renderSvg(nodes) {
    var out = [];
    out.push(
      '<svg class="pw-spectrum" viewBox="0 0 ' + VIEW_W + ' ' + VIEW_H + '"' +
      ' width="100%" preserveAspectRatio="xMidYMid meet"' +
      ' role="img" focusable="false"' +
      ' aria-label="Mapa del espectro ideológico: eje económico de la izquierda a la derecha y eje autoritario de abajo arriba">' +
      renderAxis() + renderPoles()
    );
    for (var i = 0; i < nodes.length; i++) {
      out.push(renderNode(nodes[i]));
    }
    out.push('</svg>');
    return out.join('');
  }

  /* ================================================================
   * 4 · Selector de ideologías (nuevo en v5)
   * ================================================================ */

  /**
   * La selección guardada, validada contra los nodos que existen hoy: un slug
   * que ya no esté en el catálogo se descarta. Sin datos guardados —o si lo
   * guardado no es una lista— se devuelve el lote curado por defecto. Un `[]`
   * guardado se respeta: es la elección explícita de "no comparar ninguna".
   */
  function readSelection() {
    var valid = {};
    for (var i = 0; i < allNodes.length; i++) { valid[allNodes[i].slug] = true; }

    var stored = null;
    try {
      var raw = window.localStorage ? window.localStorage.getItem(PICK_KEY) : null;
      if (raw) {
        var parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          stored = [];
          for (var j = 0; j < parsed.length; j++) {
            if (valid[parsed[j]] && stored.indexOf(parsed[j]) === -1) { stored.push(parsed[j]); }
          }
        }
      }
    } catch (error) {
      warn('no se puede leer "' + PICK_KEY + '"; se parte del lote por defecto.', error);
    }

    if (stored) { return stored; }

    var chosen = [];
    for (var k = 0; k < DEFAULT_SELECTION.length; k++) {
      if (valid[DEFAULT_SELECTION[k]]) { chosen.push(DEFAULT_SELECTION[k]); }
    }
    return chosen;
  }

  function writeSelection() {
    if (window.localStorage) {
      try {
        window.localStorage.setItem(PICK_KEY, JSON.stringify(selection));
      } catch (error) {
        warn('no se puede guardar "' + PICK_KEY + '"; la elección se olvidará al recargar.', error);
      }
    }
  }

  /**
   * Los chips del selector. Cada chip es un `<button type="button">` con rol
   * de casilla; el estado activo vive en `aria-checked`, no en una clase, para
   * que las tecnologías de ayuda lean la misma verdad que pinta la página.
   */
  function renderPicker() {
    var selected = {};
    for (var i = 0; i < selection.length; i++) { selected[selection[i]] = true; }

    var out = [];
    out.push(
      '<div class="pw-spectrum-pick-head">' +
      '<span class="pw-spectrum-pick-label">Comparar:</span>' +
      '<button type="button" class="pw-btn-text" id="espectro-all">Todas</button>' +
      '<button type="button" class="pw-btn-text" id="espectro-none">Ninguna</button>' +
      '</div>' +
      '<div class="pw-spectrum-chips" role="group" aria-label="Ideologías que se muestran en el mapa">'
    );
    for (var j = 0; j < allNodes.length; j++) {
      var node = allNodes[j];
      var on = !!selected[node.slug];
      out.push(
        '<button type="button" class="pw-spectrum-chip' + (on ? ' pw-spectrum-chip-on' : '') + '"' +
        ' role="checkbox" aria-checked="' + (on ? 'true' : 'false') + '"' +
        ' data-slug="' + PW.escapeHtml(node.slug) + '"' +
        (node.category ? ' title="' + PW.escapeHtml(node.title + ' — ' + node.category) + '"' : '') +
        '>' + PW.escapeHtml(node.title) + '</button>'
      );
    }
    out.push('</div>');
    document.getElementById('espectro-pick').innerHTML = out.join('');
  }

  /**
   * Actualiza solo el estado de los chips tras un cambio de selección, sin
   * volver a pintarlos: reconstruir el `innerHTML` entero tiraría el foco de
   * teclado de quien acaba de pulsar un chip.
   */
  function syncChipStates() {
    var selected = {};
    for (var i = 0; i < selection.length; i++) { selected[selection[i]] = true; }
    var buttons = document.querySelectorAll('#espectro-pick .pw-spectrum-chip');
    for (var j = 0; j < buttons.length; j++) {
      var button = buttons[j];
      var on = !!selected[button.getAttribute('data-slug')];
      button.classList.toggle('pw-spectrum-chip-on', on);
      button.setAttribute('aria-checked', on ? 'true' : 'false');
    }
  }

  /**
   * Dibuja el mapa con SOLO las ideologías seleccionadas. Con menos del mínimo
   * no hay comparación que pintar: el SVG queda vacío y se abre el aviso, pero
   * el selector sigue activo para poder elegir más.
   */
  function draw() {
    var mount = document.getElementById('espectro-mount');
    var empty = document.getElementById('espectro-empty');
    if (!mount || !empty) { return; }

    var selected = {};
    for (var i = 0; i < selection.length; i++) { selected[selection[i]] = true; }

    var nodes = [];
    for (var j = 0; j < allNodes.length; j++) {
      if (selected[allNodes[j].slug]) { nodes.push(allNodes[j]); }
    }

    if (nodes.length < MIN_SELECTION) {
      mount.innerHTML = '';
      empty.removeAttribute('hidden');
      return;
    }

    empty.setAttribute('hidden', '');
    placed = [];
    mount.innerHTML = renderSvg(nodes);
  }

  function setSelection(next) {
    selection = Array.isArray(next) ? next.slice() : [];
    writeSelection();
    syncChipStates();
    draw();
  }

  function onPickClick(event) {
    if (event.target.closest && event.target.closest('#espectro-all')) {
      setSelection(allNodes.map(function (node) { return node.slug; }));
      return;
    }
    if (event.target.closest && event.target.closest('#espectro-none')) {
      setSelection([]);
      return;
    }
    var chip = closest(event.target, '.pw-spectrum-chip');
    if (!chip) { return; }
    var slug = chip.getAttribute('data-slug');
    var index = selection.indexOf(slug);
    if (index === -1) { setSelection(selection.concat([slug])); }
    else { setSelection(selection.slice(0, index).concat(selection.slice(index + 1))); }
  }

  /* ================================================================
   * 5 · Arranque
   * ================================================================ */

  function init() {
    var section = document.getElementById('espectro');
    var mount = document.getElementById('espectro-mount');
    var pick = document.getElementById('espectro-pick');
    var empty = document.getElementById('espectro-empty');
    if (!section || !mount || !pick || !empty) {
      warn('falta ' + [
        !section && '#espectro',
        !mount && '#espectro-mount',
        !pick && '#espectro-pick',
        !empty && '#espectro-empty'
      ].filter(Boolean).join(' o ') + ' en el HTML; el mapa no se dibuja.');
      return false;
    }

    if (typeof PW.list !== 'function' || typeof PW.get !== 'function' || typeof PW.escapeHtml !== 'function') {
      warn('PW.list, PW.get o PW.escapeHtml no están disponibles; el mapa no se dibuja.');
      return false;
    }

    allNodes = collectNodes();
    if (!allNodes.length) {
      warn('no hay ideologías con coordenadas; el mapa queda vacío.');
      return false;
    }

    selection = readSelection();
    renderPicker();
    pick.addEventListener('click', onPickClick);
    writeSelection(); // normaliza: descarta slugs que ya no existen en el catálogo
    draw();
    return true;
  }

  PW.spectrum = {
    init: init,
    positions: function () { return POSITIONS; },
    selection: function () { return selection.slice(); }
  };

  onReady(init);
})(window.PW = window.PW || {});