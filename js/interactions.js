/* politics-wiki · js/interactions.js
 *
 * ===== v7 · interacción =====
 *
 * Capa de interacción: sigue al puntero sobre secciones y tarjetas, cuenta las
 * cifras cuando llegan a la vista, condensa la cabecera al bajar, mueve el
 * indicador del índice flotante y publica el gancho de las transiciones de
 * vista. Script clásico (sin módulos, sin build) para que también funcione
 * abierto con file://, como el resto del sitio.
 *
 * Es la hermana de `js/motion.js` —el mismo esqueleto, el mismo espacio de
 * nombres, el mismo cuidado con `prefers-reduced-motion`— y se carga con
 * `defer` justo antes de `features.js`. Como llega después de `render.js`,
 * `app.js`, `graph.js` y `spectrum.js`, el artículo ya está pintado cuando esto
 * arranca; lo que esas capas montan después (el índice flotante, las
 * cronologías, las cifras de palabras) se recoge con un MutationObserver sobre
 * `main.pw-main`, igual que hace `motion.js` §4.
 *
 * ===== CONTRATO CON `css/wiki.css` (no negociable) =====
 *
 *   · Esta capa no escribe NI UNA regla visual. Colores, tamaños, easings,
 *     duraciones y keyframes son de la hoja de estilos. Aquí no hay un solo
 *     `style.color`, ni una regla suelta, ni una hoja inyectada: solo las seis
 *     propiedades personalizadas del contrato, cuatro clases y un atributo.
 *   · `html.pw-fx` es el interruptor maestro, y lo pone SOLO esta capa y SOLO
 *     con movimiento permitido. CSS solo atenúa lo que lleva esa clase, así que
 *     si este fichero falta, falla o va tarde la página se ve entera: no hay
 *     forma de esconder contenido por un error de JavaScript.
 *   · Lo único que se escribe:
 *       `--pw-fx-x`, `--pw-fx-y`, `--pw-fx-strength`  §3 · foco del puntero
 *       `--pw-magnet-x`, `--pw-magnet-y`              §4 · botón magnético
 *       `--pw-count`                                  §5 · contadores
 *       `--pw-toc-y`                                  §7 · indicador del índice
 *       `--pw-line-i`                                 §2 · líneas del titular
 *       `is-condensed` §6 · `is-counted` §5 · `data-pw-count` §5
 *       `pw-line` §2 · `pw-toc-indicator` §7
 *     Ni una clase presentacional más.
 *   · `--pw-fx-x` / `--pw-fx-y` son el desplazamiento del puntero respecto al
 *     CENTRO del elemento, en px, y no coordenadas absolutas: así el mismo
 *     `--pw-fx-strength` sirve para un foco de 300px y para uno de 1200px.
 *   · `data-pw-no-split` sobre `<html>` es el opting-out documentado de §2. Esta
 *     capa lo LEE y nunca lo escribe.
 *   · `prefers-reduced-motion` se respeta AQUÍ, no solo en CSS: el bloque global
 *     de `wiki.css` §15 anula transiciones y animaciones, pero no puede parar
 *     un `transform` escrito a mano desde JS. El guardia de verdad es este. Con
 *     movimiento reducido se siguen añadiendo `is-counted` —para que las cifras
 *     se lean— pero no se anima, no se parte el titular y no se escucha el
 *     puntero.
 *   · Lo único que se toca de otra capa es `aria-current`, y solo para leerlo:
 *     la decisión de qué enlace del índice está activo es de `features.js` §6
 *     (`watchFloatToc`). Esta capa mueve el PÍNDULO, nunca elige la sección.
 *   · §8b es la única excepción al contrato de "nada visual", y sigue sin
 *     escribirlo: mueve un bloque que ya se ha puesto visible con la Web
 *     Animations API, que es un efecto transitorio y no una regla —nada queda
 *     en el `style` en línea al terminar—. Lo único que escribe es el atributo
 *     `hidden` que quien llama tenía que poner igualmente, y lo pone siempre en
 *     el mismo valor: esta capa mueve, `features.js` sigue mandando.
 *
 * allow: SIZE_OK — la misma razón que `features.js` §0 y `motion.js`: el
 * proyecto es sin build, así que partir esto en módulos exigiría un bundler y
 * rompería "cero dependencias" y el arranque por file://.
 */
(function (PW) {
  'use strict';

  /* ================================================================
   * 0 · Constantes y estado
   * ================================================================ */

  // Todo lo que puede engancharse, en una lista por pieza. Cada selector se
  // ignora solo si la página no lo tiene: `.pw-related-card` no existe en la
  // portada, `.pw-toc-float` solo en las fichas largas, `.pw-hero-title` no
  // existe en `espectro.html` (allí el título es otro elemento).
  var SURFACES = '.pw-section, .pw-card, .pw-related-card';
  var MAGNETS = '.pw-btn';
  var HERO_TITLE = '.pw-hero-title';
  var HEADER = '.pw-header';
  var FLOAT_TOC = '.pw-toc-float';
  // Enlace activo, por la clase del índice lateral de `render.js` y por la del
  // flotante de `features.js`. Los dos escriben `aria-current`; los dos se leen.
  var TOC_ACTIVE = '.pw-toc-link[aria-current="true"], .pw-toc-float-link[aria-current="true"]';
  // Cifras que el sitio ya trae en el HTML. Se marcan solas con `data-pw-count`
  // (§5). Los `#pw-info-*` son ids, no clases: su `<dd>` no lleva ninguna.
  var KNOWN_COUNTS = '.pw-domain-count, .pw-favs-count, .pw-btn-badge, ' +
    '.pw-info-words, #pw-info-words, .pw-info-refs, #pw-info-refs';

  var ROOT_CLASS = 'pw-fx';           // el interruptor que lee el CSS
  var LINE_CLASS = 'pw-line';         // una línea visual del titular
  var LINE_PROP = '--pw-line-i';      // su índice, para el escalonado de CSS
  var CONDENSED_CLASS = 'is-condensed'; // cabecera streteada al bajar
  var COUNTED_CLASS = 'is-counted';   // cifra ya contada: estado final
  var COUNT_ATTR = 'data-pw-count';   // "esto es una cifra animable"
  var INDICATOR_CLASS = 'pw-toc-indicator'; // el único píndulo del índice
  var NO_SPLIT_ATTR = 'data-pw-no-split';   // opting-out de §2 (SOLO se lee)

  var FX_X = '--pw-fx-x';
  var FX_Y = '--pw-fx-y';
  var FX_STRENGTH = '--pw-fx-strength';
  var MAGNET_X = '--pw-magnet-x';
  var MAGNET_Y = '--pw-magnet-y';
  var COUNT_PROP = '--pw-count';
  var TOC_PROP = '--pw-toc-y';

  // §8b: los tokens del movimiento se LEEN, no se repiten. La página es la que
  // decide cuánto dura una entrada —`--pw-dur-2` es lo que tarda un recuadro en
  // instalarse—, así que si el valor sube aquí no hay nada que tocar.
  var DUR_TOKEN = '--pw-dur-2';       // duración de una entrada de bloque
  var SHIFT_TOKEN = '--pw-reveal-shift'; // cuánto sube un bloque antes de asentarse
  var EASE_TOKEN = '--pw-ease-out';   // frenada de la entrada
  var DUR_FALLBACK = 220;            // ms, el valor de § v6 · 1 del contrato
  var SHIFT_FALLBACK = '14px';       // el mismo contrato, por si el token no está
  var EASE_FALLBACK = 'cubic-bezier(0.22, 1, 0.36, 1)';

  var RAMP = 0.18;            // suavizado exponencial por fotograma
  var MAGNET_PULL = 0.22;     // cuánto tira el botón hacia el puntero
  var MAGNET_MAX = 10;        // tope en px: un botón a 40px de sitio ya no es botón
  var MAGNET_EPS = 0.05;      // por debajo de esto se considera "en casa"
  var SPOT_EPS = 0.004;       // lo mismo para la intensidad del foco
  var COUNT_MS = 900;         // duración del conteo
  var COUNT_ROOT_MARGIN = '0px 0px 8% 0px'; // cuenta al empezar a verse, no después
  var CONDENSE_ENTER = 120;   // px de scroll a partir de los cuales se condensa
  var CONDENSE_LEAVE = 96;    // banda de histéresis: no parpadea en el borde
  var MAX_SPLIT_CHARS = 240;  // un titular no se mide carácter a carácter

  // Opting-outs por JS, para quien llame a esta capa desde otro script. Se leen
  // al arrancar; para cambiarlos después: teardown() y luego init().
  var optOut = {
    spotlight: false,
    magnets: false,
    counters: false,
    condensed: false,
    indicator: false,
    viewTransitions: false
  };

  var warned = {};      // un solo aviso por clave, para no inundar la consola
  var started = false;  // evita doble arranque (bfcache)
  var bound = false;    // evita doble escucha si init() se repite
  var lineSpans = [];   // los <span class="pw-line"> que ha creado ESTA capa
  var spot = { el: null, x: 0, y: 0, strength: 0, target: 0 };
  var fade = { el: null, strength: 0 }; // el elemento que se está apagando
  var magnet = { el: null, x: 0, y: 0, tx: 0, ty: 0 };
  var pointerX = 0;
  var pointerY = 0;
  var seenPointer = false;
  var frame = 0;        // fotograma vivo del bucle de puntero
  var headerFrame = 0;  // fotograma vivo de la cabecera condensada
  var tocFrame = 0;     // fotograma vivo del indicador del índice
  var watchFrame = 0;   // fotograma vivo del re-armado
  var countRuns = [];   // conteos en marcha, con su fotograma
  var counterSpy = null; // IntersectionObserver de contadores
  var tocSpy = null;     // MutationObserver de `aria-current`
  var watcher = null;    // MutationObserver de re-armado
  var indicator = null;  // el único `.pw-toc-indicator` vivo
  var indicatorOurs = false; // el indicador lo creó esta capa (y se puede borrar)
  var transitioning = false; // ya hay una transición de vista en marcha
  var running = new WeakMap(); // §8b: el bloque → su animación y su final

  /* ================================================================
   * 1 · Utilidades: el helper de propiedades
   * ================================================================ */

  function warnOnce(key, message, detail) {
    if (warned[key]) { return; }
    warned[key] = true;
    if (detail === undefined) { console.error('PW.interactions: ' + message); }
    else { console.error('PW.interactions: ' + message, detail); }
  }

  function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList || []);
  }

  /**
   * EL helper de tokens, y el ÚNICO camino por el que esta capa escribe algo que
   * CSS pueda leer. Comprueba que el nodo existe y que sabe escribir en su
   * estilo, porque un nodo sin estilo propio —el SVG de un navegador, un
   * elemento degradado— no es un sitio donde volcar una cifra.
   *
   * Devuelve si ha escrito. Nunca lanza: que falte un nodo es un caso normal,
   * no un error.
   */
  function setVar(el, prop, value) {
    if (!el || !el.style || typeof el.style.setProperty !== 'function') { return false; }
    el.style.setProperty(prop, value);
    return true;
  }

  /**
   * Misma semántica que la de `features.js` §1 y `motion.js`: `matchMedia`
   * ausente se interpreta como "no hay preferencia declarada", y en ese caso se
   * permite el movimiento. Quien no lo quiere lo dice con la preferencia del
   * sistema.
   */
  function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  /**
   * ¿Hay puntero que se mueve sobre la página? En táctil sin hover no tiene
   * sentido escuchar `pointermove`: no hay dónde dejarlo y, según qué navegador,
   * el toque se queda pegado al dedo. Sin `matchMedia` se asume que sí, por el
   * mismo motivo que arriba.
   */
  function canHover() {
    if (!window.matchMedia) { return true; }
    return window.matchMedia('(hover: hover)').matches;
  }

  function hasRaf() {
    return typeof window.requestAnimationFrame === 'function' &&
      typeof window.cancelAnimationFrame === 'function';
  }

  /** `requestAnimationFrame` con reserva: sin fotogramas, se ejecuta ya y una vez. */
  function raf(fn) {
    if (!hasRaf()) {
      fn(0);
      return 0;
    }
    return window.requestAnimationFrame(fn);
  }

  function caf(id) {
    if (id && typeof window.cancelAnimationFrame === 'function') {
      window.cancelAnimationFrame(id);
    }
  }

  /** Una pasada por fotograma como mucho: hay ratones que repiten píxel. */
  function schedule() {
    if (frame) { return; }
    frame = raf(loop);
  }

  function matches(el, selector) {
    var fn = el.matches || el.msMatchesSelector || el.webkitMatchesSelector;
    return typeof fn === 'function' ? fn.call(el, selector) : false;
  }

  /** El ancestro más cercano que case con el selector, o null. */
  function closest(node, selector) {
    var el = node && node.nodeType === 1 ? node : (node && node.parentElement);
    while (el && el.nodeType === 1) {
      if (matches(el, selector)) { return el; }
      el = el.parentElement;
    }
    return null;
  }

  /** Centro del elemento en coordenadas de pantalla, sin tocar el DOM. */
  function centre(el) {
    var box = el.getBoundingClientRect();
    return { x: box.left + box.width / 2, y: box.top + box.height / 2 };
  }

  function clamp(value, min, max) {
    return value < min ? min : (value > max ? max : value);
  }

  /** easeOutCubic: rápido al principio, frenando al final. Como una cuenta real. */
  function easeOutCubic(t) {
    var u = 1 - t;
    return 1 - u * u * u;
  }

  /**
   * Número "de verdad" a partir de un texto que ya está en la página: enteros y
   * enteros con separador de millares ("1.234" en español, "1,234" en inglés).
   * "3,5" o "—" NO son contadores: es preferible no animar una cifra a animarla
   * mal.
   */
  function readNumber(text) {
    var raw = String(text === null || text === undefined ? '' : text)
      .replace(/[\s\u00a0\u202f]/g, '');
    if (!raw) { return null; }
    if (/^\d{1,3}(?:[.,]\d{3})+$/.test(raw)) {
      return parseInt(raw.replace(/[.,]/g, ''), 10);
    }
    if (/^\d+$/.test(raw)) { return parseInt(raw, 10); }
    return null;
  }

  /** Escucha pasiva; en navegadores que no aceptan el objeto, sin pasividad. */
  function listen(target, type, handler) {
    if (!target || typeof target.addEventListener !== 'function') { return; }
    try {
      target.addEventListener(type, handler, { passive: true });
    } catch (error) {
      warnOnce('passive-' + type, 'el navegador no acepta escuchas pasivas de ' + type + '.', error);
      target.addEventListener(type, handler);
    }
  }

  /* ================================================================
   * 2 · Partir el titular en líneas
   * ================================================================ */

  /**
   * Envuelve cada LÍNEA VISUAL de `.pw-hero-title` en un `<span class="pw-line">`
   * con su `--pw-line-i`, que es lo que CSS necesita para escalonar la entrada.
   *
   * Cómo se mide: un Range por carácter da el `top` de su caja, y los caracteres
   * que comparten `top` son la misma línea. Cortar el texto por número de
   * caracteres o con un `split(' ')` no sirve: en un titular que envuelve, la
   * última palabra puede acabar en la primera línea o en la segunda según el
   * ancho, y cualquier división fija parte una línea por la mitad. Medir es lo
   * único que aguanta el reflujo, y por eso se mide DESPUÉS de que las fuentes
   * estén cargadas (`document.fonts.ready`), nunca en el arranque.
   *
   * Reglas de alcance, para no romper nada:
   *   · si ya hay un `.pw-line` dentro, no se toca (idempotencia);
   *   · el titular se mide ENTERO, no nodo a nodo: si llega con el texto repartido
   *     en varios nodos —tras un cambio de idioma, o después de un
   *     `teardown()`— la medida por nodos ve una línea en cada uno y se rinde;
   *   · solo se parte si el titular es texto puro: si trae marcado dentro se
   *     deja entero, porque partir media estructura es peor que no partir nada;
   *   · si es larguísimo, se deja como está (tope `MAX_SPLIT_CHARS`);
   *   · si el titular no existe o no tiene caja, no pasa nada.
   */
  function splitHeroTitle() {
    if (document.documentElement.hasAttribute(NO_SPLIT_ATTR)) {
      // Opting-out documentado: la página dice que no, y no se dice dos veces.
      return 0;
    }
    var title = document.querySelector(HERO_TITLE);
    if (!title) { return 0; }
    return splitTitleIn(title);
  }

  function splitTitleIn(title) {
    if (!title || !title.childNodes) { return 0; }
    // Ya partido, o partido por la página: en los dos casos no se repite.
    if (title.querySelector('.' + LINE_CLASS)) { return 0; }

    // Mapa de cada carácter a su nodo y su desplazamiento, para poder medir con
    // un solo Range aunque el texto venga en varios nodos.
    var nodes = toArray(title.childNodes);
    var text = '';
    var map = [];
    for (var i = 0; i < nodes.length; i++) {
      if (!nodes[i] || nodes[i].nodeType !== 3) { return 0; } // texto puro o nada
      var value = nodes[i].nodeValue || '';
      for (var c = 0; c < value.length; c++) {
        map.push({ node: nodes[i], offset: c });
      }
      text += value;
    }
    if (!text.replace(/\s/g, '')) { return 0; }
    if (text.length > MAX_SPLIT_CHARS) {
      warnOnce('split-long', 'titular demasiado largo para medirse; se deja entero.');
      return 0;
    }

    var bounds = lineBounds(map, text.length);
    // Una sola línea no necesita nada partido: cero nodos añadidos al DOM.
    if (!bounds || bounds.length < 2) { return 0; }

    var frag = document.createDocumentFragment();
    for (var k = 0; k < bounds.length; k++) {
      var span = document.createElement('span');
      span.className = LINE_CLASS;
      // El índice va como propiedad personalizada, no como clase ni como
      // atributo de datos: es para CSS, y CSS lo lee como número.
      span.style.setProperty(LINE_PROP, String(k));
      // El espacio que cierra la línea se queda dentro del span: fuera se
      // colapsaría igual, y dentro el texto del titular sigue siendo el mismo
      // cuando alguien lo copia o lo lee con un lector de pantalla.
      span.textContent = text.slice(bounds[k][0], bounds[k][1]);
      frag.appendChild(span);
      lineSpans.push(span);
    }
    var tail = bounds[bounds.length - 1][1];
    if (tail < text.length) {
      frag.appendChild(document.createTextNode(text.slice(tail)));
    }
    // Los nodos que había ya han cumplido su papel —medirse—: se vacían y se
    // deja un solo árbol de spans, para que partir y des-partir sean la misma
    // operación exacta y el titular nunca se acumule.
    title.textContent = '';
    title.appendChild(frag);
    return bounds.length;
  }

  /**
   * Tramos `[inicio, fin)` de cada línea, medidos carácter a carácter sobre el
   * DOM vivo (por eso `map` apunta a los nodos reales y no a una copia). Los
   * caracteres sin caja —los espacios colapsados al final de línea— no dicen
   * nada de la geometría, así que no abren línea ni cortan.
   */
  function lineBounds(map, total) {
    var range = null;
    try {
      range = document.createRange();
    } catch (error) {
      warnOnce('range', 'sin document.createRange; el titular no se parte.', error);
      return null;
    }
    var bounds = [];
    var start = -1;
    var lastTop = 0;
    for (var i = 0; i < total; i++) {
      var rects = null;
      try {
        range.setStart(map[i].node, map[i].offset);
        range.setEnd(map[i].node, map[i].offset + 1);
        rects = range.getClientRects();
      } catch (error) {
        // Un fallo al medir no puede dejar el titular partido por la mitad.
        warnOnce('measure', 'no se ha podido medir el titular; se deja entero.', error);
        return null;
      }
      if (!rects || rects.length === 0) { continue; }
      var top = Math.round(rects[rects.length - 1].top);
      if (start < 0) {
        start = 0;
        lastTop = top;
        continue;
      }
      if (top !== lastTop) {
        bounds.push([start, i]);
        start = i;
        lastTop = top;
      }
    }
    if (start >= 0) { bounds.push([start, total]); }
    return bounds;
  }

  /**
   * Deshace SOLO lo que hizo esta capa: cada span creado vuelve a ser su texto y
   * los trozos se funden en un solo nodo, que es como estaba. Un `.pw-line` que
   * ya estuviera en el HTML no se toca — no es nuestro y no sabemos qué es.
   */
  function unwrapLines() {
    var undone = 0;
    var parent = null;
    for (var i = lineSpans.length - 1; i >= 0; i--) {
      var span = lineSpans[i];
      if (!span || !span.parentNode) { continue; }
      parent = span.parentNode;
      span.parentNode.replaceChild(
        document.createTextNode(span.textContent || ''),
        span
      );
      undone++;
    }
    lineSpans.length = 0;
    // `normalize()` funde los textos sueltos en el nodo que tenía el titular de
    // origen. Sin esto, un `teardown()` dejaría el título partido en varios
    // nodos y la siguiente medición vería una línea en cada uno.
    if (parent && typeof parent.normalize === 'function') { parent.normalize(); }
    return undone;
  }

  /* ================================================================
   * 3 · Foco que sigue al puntero
   * ================================================================ */

  /**
   * Un solo par de escuchas para toda la página, por delegación: convertir
   * cuarenta tarjetas en ochenta escuchas es la forma rápida de hacer que un
   * portátil se caliente por nada.
   *
   * `--pw-fx-strength` sube a 1 al entrar y vuelve a 0 al salir, y se escribe
   * SOLO dentro del bucle de fotogramas: un `pointermove` llega a 120 por
   * segundo en un portátil, y forzar estilo en cada uno es un cartel de
   * fotogramas perdidos.
   */
  function onPointerMove(event) {
    // El mismo píxel repetido no se escribe dos veces.
    if (seenPointer && event.clientX === pointerX && event.clientY === pointerY) { return; }
    pointerX = event.clientX;
    pointerY = event.clientY;
    seenPointer = true;

    var surface = optOut.spotlight ? null : closest(event.target, SURFACES);
    if (surface !== spot.el) {
      // Salto de foco: el que se va pasa al hueco de apagado y el nuevo entra.
      startFade();
      spot.el = surface;
      spot.strength = 0;
      spot.target = surface ? 1 : 0;
    }
    if (surface) {
      var mid = centre(surface);
      spot.x = pointerX - mid.x;
      spot.y = pointerY - mid.y;
    }

    if (!optOut.magnets) { aimMagnet(closest(event.target, MAGNETS)); }
    schedule();
  }

  /**
   * El elemento que se va se apaga con rampa. Dos huecos (foco y apagado) valen
   * porque nunca hay más de un elemento saliendo y otro entrando a la vez; si
   * llega un tercero mientras el primero se apaga, ese primero se va a cero de
   * golpe antes de quedarse con la propiedad puesta.
   */
  function startFade() {
    if (spot.el) {
      if (fade.el && fade.el !== spot.el) { setVar(fade.el, FX_STRENGTH, '0'); }
      fade.el = spot.el;
      fade.strength = spot.strength;
    }
    spot.el = null;
    spot.strength = 0;
    spot.target = 0;
  }

  /** El puntero salió de la página: todo a reposo, sin dejar nada encendido. */
  function onPointerLeave() {
    startFade();
    restMagnet();
    schedule();
  }

  /**
   * El bucle: el ÚNICO sitio donde se escriben `--pw-fx-*` y `--pw-magnet-*`.
   * Cada `pointermove` solo actualiza los objetivos y pide un fotograma, así que
   * escribir 120 veces por segundo no ocurre nunca: ocurre como mucho una vez por
   * paint, y solo si algo se está moviendo de verdad.
   *
   * El bucle se para solo cuando no queda nada que interpolar —foco encendido en
   * su valor 1 y imán en su desplazamiento— y lo arranca de nuevo el siguiente
   * `pointermove`, porque entonces sí hay un valor nuevo que escribir.
   */
  function loop() {
    frame = 0;
    var alive = false;

    if (fade.el) {
      fade.strength -= fade.strength * RAMP;
      if (fade.strength < SPOT_EPS) {
        setVar(fade.el, FX_STRENGTH, '0');
        fade.el = null;
        fade.strength = 0;
      } else {
        setVar(fade.el, FX_STRENGTH, fade.strength.toFixed(3));
        alive = true;
      }
    }

    if (spot.el) {
      spot.strength += (spot.target - spot.strength) * RAMP;
      if (spot.strength > 0.999) { spot.strength = 1; }
      setVar(spot.el, FX_X, spot.x.toFixed(1) + 'px');
      setVar(spot.el, FX_Y, spot.y.toFixed(1) + 'px');
      setVar(spot.el, FX_STRENGTH, spot.strength.toFixed(3));
      if (spot.target === 1 && spot.strength < 1) { alive = true; }
    }

    if (magnet.el) {
      magnet.x += (magnet.tx - magnet.x) * RAMP;
      magnet.y += (magnet.ty - magnet.y) * RAMP;
      if (Math.abs(magnet.tx - magnet.x) < MAGNET_EPS) { magnet.x = magnet.tx; }
      if (Math.abs(magnet.ty - magnet.y) < MAGNET_EPS) { magnet.y = magnet.ty; }
      setVar(magnet.el, MAGNET_X, magnet.x.toFixed(1) + 'px');
      setVar(magnet.el, MAGNET_Y, magnet.y.toFixed(1) + 'px');
      if (magnet.x !== 0 || magnet.y !== 0) { alive = true; }
      if (magnet.x === 0 && magnet.y === 0) { magnet.el = null; }
    }

    if (alive && hasRaf()) { frame = window.requestAnimationFrame(loop); }
  }

  function restSpot() {
    if (spot.el) { setVar(spot.el, FX_STRENGTH, '0'); }
    if (fade.el) { setVar(fade.el, FX_STRENGTH, '0'); }
    spot.el = null;
    fade.el = null;
    spot.strength = 0;
    fade.strength = 0;
    spot.target = 0;
  }

  function restMagnet() {
    if (magnet.el) {
      setVar(magnet.el, MAGNET_X, '0px');
      setVar(magnet.el, MAGNET_Y, '0px');
    }
    magnet.el = null;
    magnet.x = 0;
    magnet.y = 0;
    magnet.tx = 0;
    magnet.ty = 0;
  }

  /* ================================================================
   * 4 · Botones magnéticos
   * ================================================================ */

  /**
   * `--pw-magnet-x` / `--pw-magnet-y` son el desplazamiento del botón hacia el
   * puntero, con tope. Al salir vuelve a `0px`: un botón que se queda a medio
   * camino se lee como un fallo de la página, no como un efecto, así que aquí no
   * hay rampa de vuelta —la del foco sí la hay porque allí hay una luz que
   * apagar.
   */
  function aimMagnet(button) {
    if (button !== magnet.el) {
      restMagnet();
      magnet.el = button;
    }
    if (!button) { return; }
    var mid = centre(button);
    magnet.tx = clamp((pointerX - mid.x) * MAGNET_PULL, -MAGNET_MAX, MAGNET_MAX);
    magnet.ty = clamp((pointerY - mid.y) * MAGNET_PULL, -MAGNET_MAX, MAGNET_MAX);
  }

  /* ================================================================
   * 5 · Contadores
   * ================================================================ */

  /**
   * Las cifras SE CUENTAN, pero el número de verdad sigue escrito en la página:
   * `--pw-count` va de 0 a 1 como progreso y CSS decide qué hace con él. Aquí no
   * se toca `textContent` en ningún momento, porque el texto ES el dato: tiene
   * que estar con el JS apagado y también con el JS encendido. Por eso la cifra
   * final nunca depende de que esta capa haya terminado su animación.
   *
   * Se marcan solas las cifras que el sitio ya traía (`.pw-domain-count`,
   * `#pw-info-words`…) cuando su texto es un número, y se respetan las que la
   * página marcó a mano con `data-pw-count`. Lo que no es un número no se toca.
   */
  function collectCounters(scope) {
    var root = scope || document;
    if (optOut.counters) { return 0; }

    var nodes = toArray(root.querySelectorAll('[' + COUNT_ATTR + ']'));
    var known = toArray(root.querySelectorAll(KNOWN_COUNTS));
    for (var i = 0; i < known.length; i++) {
      var node = known[i];
      if (!node || !node.setAttribute) { continue; }
      if (node.hasAttribute(COUNT_ATTR)) { continue; }
      if (readNumber(node.textContent) === null) { continue; }
      node.setAttribute(COUNT_ATTR, '');
      nodes.push(node);
    }

    var reduced = prefersReducedMotion();
    var watching = 0;
    for (var k = 0; k < nodes.length; k++) {
      var el = nodes[k];
      if (!el || !el.classList) { continue; }
      if (el.classList.contains(COUNTED_CLASS)) { continue; }
      if (readNumber(el.textContent) === null) { continue; } // no es una cifra
      // Sin movimiento no hay contador, pero el estado final sí: la cifra tiene
      // que leerse igual, y CSS espera `is-counted` para soltar el estilo.
      if (reduced || !counterSpy) { finishCount(el); continue; }
      counterSpy.observe(el);
      watching++;
    }
    return watching;
  }

  /** Estado final: progreso a 1 y marca. Idempotente. */
  function finishCount(el) {
    if (!el || !el.classList) { return; }
    setVar(el, COUNT_PROP, '1');
    el.classList.add(COUNTED_CLASS);
    if (counterSpy) { counterSpy.unobserve(el); }
  }

  function countIn(entries) {
    var observer = counterSpy;
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      if (!entry || !entry.isIntersecting) { continue; }
      var el = entry.target;
      if (!el || el.classList.contains(COUNTED_CLASS)) { continue; }
      if (observer) { observer.unobserve(el); } // ya no hace falta vigilarlo
      startCount(el);
    }
  }

  function startCount(el) {
    if (prefersReducedMotion() || !hasRaf()) { finishCount(el); return; }
    var run = { id: 0, el: el, since: -1 };
    run.step = function (stamp) {
      if (run.since < 0) { run.since = stamp; }
      var progress = (stamp - run.since) / COUNT_MS;
      if (progress >= 1) {
        dropRun(run);
        finishCount(el);
        return;
      }
      setVar(el, COUNT_PROP, easeOutCubic(progress).toFixed(4));
      run.id = window.requestAnimationFrame(run.step);
    };
    setVar(el, COUNT_PROP, '0');
    countRuns.push(run);
    run.id = window.requestAnimationFrame(run.step);
  }

  function dropRun(run) {
    var at = countRuns.indexOf(run);
    if (at >= 0) { countRuns.splice(at, 1); }
  }

  /** Los conteos a medias se terminan de golpe: nunca a medias. */
  function stopCounts() {
    while (countRuns.length) {
      var run = countRuns.pop();
      caf(run.id);
      finishCount(run.el);
    }
  }

  function startCounterSpy() {
    stopCounterSpy();
    if (typeof window.IntersectionObserver !== 'function') {
      // Sin observador no hay forma de saber qué entra en pantalla. No es drama:
      // `collectCounters` marca las cifras al vuelo y se ven enteras.
      warnOnce('io', 'sin IntersectionObserver; las cifras salen ya contadas.');
      return;
    }
    try {
      counterSpy = new window.IntersectionObserver(countIn, {
        rootMargin: COUNT_ROOT_MARGIN,
        threshold: 0
      });
    } catch (error) {
      counterSpy = null;
      warnOnce('count-io', 'no se ha podido observar las cifras; salen contadas.', error);
    }
  }

  function stopCounterSpy() {
    if (counterSpy) {
      counterSpy.disconnect();
      counterSpy = null;
    }
  }

  /* ================================================================
   * 6 · Cabecera condensada
   * ================================================================ */

  /**
   * `is-condensed` a partir de `CONDENSE_ENTER` px de scroll, y se retira por
   * debajo de `CONDENSE_LEAVE`. Los 24px entre los dos son histéresis: sin esa
   * banda, un ratón parado sobre el umbral —o un temblor del trackpad— deja la
   * cabecera parpadeando, que es el peor defecto visual que puede tener una
   * cabecera. Lectura pasiva y un fotograma de guarda, porque el scroll dispara
   * más de un evento por paint.
   */
  function updateCondensed() {
    var header = document.querySelector(HEADER);
    if (!header || !header.classList) { return; }
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;
    if (header.classList.contains(CONDENSED_CLASS)) {
      if (y <= CONDENSE_LEAVE) { header.classList.remove(CONDENSED_CLASS); }
      return;
    }
    if (y >= CONDENSE_ENTER) { header.classList.add(CONDENSED_CLASS); }
  }

  function onScroll() {
    if (headerFrame) { return; }
    headerFrame = raf(function () {
      headerFrame = 0;
      updateCondensed();
    });
  }

  /* ================================================================
   * 7 · Indicador del índice flotante
   * ================================================================ */

  /**
   * Un único `.pw-toc-indicator` dentro de `.pw-toc-float`, que se mueve con
   * `--pw-toc-y`: el desplazamiento, en px, del enlace activo medido desde el
   * borde superior de su contenedor (la lista si existe; si no, el propio nav).
   * Es justo lo que necesita un `position: absolute` de altura fija, y es todo
   * lo que se publica: la altura la decide CSS.
   *
   * IMPORTANTE: cuál es el enlace activo lo decide `features.js` §6
   * (`watchFloatToc`) escribiendo `aria-current`. Esta capa NO escribe ese
   * atributo, NO escribe `is-active` y no monta ningún observer de títulos: lo
   * lee con un MutationObserver de atributos sobre el propio índice. Dos capas
   * decidiendo lo mismo se pelean; una lee y la otra mueve, no.
   */
  function mountIndicator() {
    if (indicator && indicator.parentNode) { return indicator; }
    var nav = document.querySelector(FLOAT_TOC);
    if (!nav) { return null; } // sin índice flotante no hay dónde ponerlo
    var found = nav.querySelector('.' + INDICATOR_CLASS);
    if (found) {
      // Ya estaba (lo puso la página): se usa tal cual y no se duplica.
      indicator = found;
      indicatorOurs = false;
      return indicator;
    }
    indicator = document.createElement('span');
    indicator.className = INDICATOR_CLASS;
    indicator.setAttribute('aria-hidden', 'true'); // es decoración pura
    indicatorOurs = true;
    nav.appendChild(indicator);
    return indicator;
  }

  function updateIndicator() {
    if (!indicator || !indicator.parentNode) { return; }
    var nav = indicator.parentNode;
    // Sin caja no hay geometría que medir: en una ventana estrecha el índice
    // flotante no se ve y todas las medidas darían cero. No se escribe nada,
    // porque un `--pw-toc-y: 0px` sobre un elemento invisible no dice nada y
    // solo invita a perseguir un fallo que no existe. En cuanto se ensancha la
    // ventana, el scroll lo vuelve a medir bien.
    if (nav.getClientRects && nav.getClientRects().length === 0) { return; }
    var list = nav.querySelector('.pw-toc-float-list') || nav;
    var active = nav.querySelector(TOC_ACTIVE);
    if (!active) {
      // Sin enlace activo no hay a dónde ir: el indicador se apaga en vez de
      // quedarse clavado en la sección anterior.
      setVar(indicator, TOC_PROP, '0px');
      return;
    }
    var y = active.getBoundingClientRect().top - list.getBoundingClientRect().top;
    setVar(indicator, TOC_PROP, Math.round(y) + 'px');
  }

  function startTocSpy() {
    stopTocSpy();
    var nav = document.querySelector(FLOAT_TOC);
    if (!nav) { return; } // todavía no lo ha montado `features.js`
    if (typeof window.MutationObserver !== 'function') {
      warnOnce('toc-observer', 'sin MutationObserver; el indicador se queda quieto.');
      return;
    }
    try {
      tocSpy = new window.MutationObserver(function () { updateIndicator(); });
      tocSpy.observe(nav, {
        subtree: true,
        attributes: true,
        attributeFilter: ['aria-current']
      });
    } catch (error) {
      tocSpy = null;
      warnOnce('toc-spy', 'no se ha podido observar el indice flotante.', error);
    }
  }

  function stopTocSpy() {
    if (tocSpy) {
      tocSpy.disconnect();
      tocSpy = null;
    }
  }

  /**
   * El observer de `aria-current` cubre el cambio de sección, pero no el cambio
   * de geometría: al ensanchar la ventana el índice flotante pasa de no verse a
   * verse y sus medidas cambian sin que nadie escriba el atributo. Por eso el
   * scroll también lo repasa: dos rects por fotograma, nada más.
   */
  function onTocScroll() {
    if (tocFrame) { return; }
    tocFrame = raf(function () {
      tocFrame = 0;
      updateIndicator();
    });
  }

  function removeIndicator() {
    // Solo se borra lo que creó esta capa: un indicador que venía del HTML se
    // respeta y se deja puesto.
    if (indicatorOurs && indicator && indicator.parentNode) {
      indicator.parentNode.removeChild(indicator);
    }
    indicator = null;
    indicatorOurs = false;
  }

  /* ================================================================
   * 8 · Transiciones de vista
   * ================================================================ */

/**
   * Techo de seguridad de una transición de vista.
   *
   * Todo lo que este gancho suelta —el candazo y el aviso a quien envuelve—
   * colgaba de `transition.finished`, que se resuelve cuando la animación
   * termina. Esa promesa se rechaza cuando la transición se salta —porque otra
   * empieza antes, o porque el documento estaba oculto—, pero hay motores y
   * documentos en los que no llega a resolverse NI a rechazarse, y entonces el
   * candazo se quedaba puesto para siempre: `canTransition()` pasaba a devolver
   * `false` y ninguna transición del resto del sitio volvía a empezar, sin un
   * solo error en consola que explicara por qué. Es un fallo silencioso, que es
   * la clase de fallo que más caro sale.
   *
   * Por eso el estado se suelta también con un reloj. La transición más larga de
   * la casa dura `--pw-dur-2`, 320 ms, así que 1200 ms es holgado para cualquier
   * motor y llega antes de que el ojo note que algo se ha quedado a medias. El
   * reloj solo actúa si la promesa no ha dicho nada; si la promesa llega después,
   * `settle` ya se habrá cerrado y no hace nada.
   */
  var TRANSITION_GUARD_MS = 1200;

  /**
   * `PW.interactions.withViewTransition(actualiza[, alTerminar])`: envuelve un
   * cambio y devuelve si hubo transición. Es el gancho documentado para el resto
   * del sitio, y quien quiera adoptarlo —el cambio de tema de `features.js` §3,
   * por ejemplo— lo llama desde ahí.
   *
   * `alTerminar(hubo)` es el segundo argumento y es opcional: sin él este gancho
   * se comporta exactamente como antes. Existe porque quien envuelve necesita
   * saber CUÁNDO termina, no solo si empezó: el cambio de tema de `features.js` §3
   * deja una clase puesta en `root` para que el CSS de § v8 · 2 sepa que eso es
   * un cambio de luz y no una navegación, y esa clase tiene que irse. Se avisa
   * también del caso SIN transición, que es el que hay que limpiar enseguida.
   *
   * Aquí NO se intercepta el clic al tema. `features.js` lo resuelve por
   * delegación sobre `document` y ya funciona y está probado; prevenirlo o
   * replicarlo dejaría dos caminos para el mismo `data-pw-theme`, y ese riesgo no
   * compra un fundido. Se publica el gancho y se deja que lo adopte quien pueda
   * hacerlo sin tocar lo que funciona.
   */
  function withViewTransition(update, done) {
    if (typeof update !== 'function') { return false; }
    if (!canTransition()) { update(); reportTransition(done, false); return false; }
    var settled = false;
    var guard = 0;

    /**
     * Un solo camino de salida para el candazo y para el aviso. Los tres finales
     * posibles —la promesa resuelve, la promesa rechaza, se pasa el reloj— pasan
     * por aquí, y solo el primero cuenta como transición hecha. Que sea `settled`
     * lo que decide y no el propio `done` es lo que impide el doble aviso cuando
     * el reloj y la promesa se cruzan.
     */
    function settle(happened) {
      if (settled) { return; }
      settled = true;
      if (guard) { window.clearTimeout(guard); guard = 0; }
      unlockTransition();
      reportTransition(done, happened);
    }

    try {
      var transition = document.startViewTransition(function () { update(); });
      transitioning = true;
      guard = window.setTimeout(function () {
        warnOnce('view-transition-guard',
          'una transicion de vista no ha terminado a tiempo; se suelta el candazo igualmente.');
        settle(false);
      }, TRANSITION_GUARD_MS);
      if (transition && transition.finished && typeof transition.finished.then === 'function') {
        transition.finished.then(function () { settle(true); }, function () { settle(false); });
      } else {
        settle(true);
      }
      return true;
    } catch (error) {
      warnOnce('view-transition', 'la transicion de vista ha fallado; se aplica sin ella.', error);
      if (guard) { window.clearTimeout(guard); guard = 0; }
      update();
      unlockTransition();
      reportTransition(done, false);
      return false;
    }
  }

  function reportTransition(done, happened) {
    if (typeof done === 'function') { done(happened); }
  }

  function canTransition() {
    if (optOut.viewTransitions) { return false; }
    if (typeof document.startViewTransition !== 'function') { return false; }
    if (document.hidden) { return false; }
    if (prefersReducedMotion()) { return false; }
    if (transitioning) { return false; } // dos a la vez: primero la que está
    return true;
  }

  function unlockTransition() {
    transitioning = false;
  }

  /* ================================================================
   * 8b · Entrada y salida de un bloque oculto
   * ================================================================ */

  /*
   * El puente de `hidden`. `wiki.css` § v2 · 4 convierte el atributo en
   * `display: none !important`, y en `display: none` no hay nada que animar:
   * por eso el filtro por letra y el buscador de la cabecera entraban de golpe.
   * La solución es siempre la misma y está en este orden, no en el otro:
   *
   *   · al aparecer, se QUITA `hidden` primero y se anima el elemento ya
   *     pintado —si se animara antes, se animaría un `display: none`—;
   *   · al desaparecer, se anima primero y `hidden = true` va AL TERMINAR.
   *
   * `hidden` acaba siempre valiendo exactamente lo que valía sin animación:
   * esto mueve, quien llama decide. Con movimiento reducido, sin WAAPI o sin
   * esta capa arrancada, el par de funciones hace el giro de `hidden` y nada
   * más, que es lo que pasaba antes.
   */

  /**
   * `PW.interactions.reveal(el, opts)`: quita `hidden` y deja que el bloque
   * entre. `opts.delay` (ms) retrasa la entrada, que es lo que escalona las
   * tarjetas del filtro por letra. Nunca lanza: si el movimiento no está
   * disponible, el bloque aparece y ya está.
   */
  function reveal(el, opts) {
    if (!el) { return; }
    // Lo que hubiera en marcha se cancela ANTES de decidir nada: si este bloque
    // se estaba desvaneciendo a medias, su final —`hidden = true`— se aplicaría
    // después y dejaría una tarjeta a medio fundir que ya no responde al filtro.
    // Al cancelar, ese final se aplica ya y el estado queda coherente.
    stopMotion(el);
    var settle = once(function () { el.hidden = false; });
    if (!motionAllowed(el)) {
      settle();
      return;
    }
    settle(); // primero el atributo: en `display: none` no hay nada que animar
    var entry = { animation: null, settle: settle };
    var animation = animate(el, [
      { opacity: 0, transform: 'translate3d(0, ' + revealShift() + ', 0)' },
      { opacity: 1, transform: 'none' }
    ], opts);
    if (!animation) { return; } // sin animación ya está visible: ese es el final
    entry.animation = animation;
    running.set(el, entry);
    onSettled(animation, function () { forget(el, entry); });
  }

  /**
   * `PW.interactions.collapse(el, opts, done)`: desvanece el bloque y, cuando la
   * animación ha terminado —o cuando se ha cancelado y no hay nada más que
   * esperar—, le pone `hidden = true` y llama a `done()`. Sin movimiento
   * disponible el par de llamadas hace lo mismo al instante, así que quien
   * llama puede apoyar su estado en `done` en los dos casos.
   */
  function collapse(el, opts, done) {
    if (!el) { return; }
    stopMotion(el);
    var settle = once(function () {
      el.hidden = true;
      if (typeof done === 'function') { done(); }
    });
    if (!motionAllowed(el)) {
      settle();
      return;
    }
    var entry = { animation: null, settle: settle };
    var animation = animate(el, [
      { opacity: 1, transform: 'none' },
      { opacity: 0, transform: 'none' }
    ], opts);
    if (!animation) {
      settle();
      return;
    }
    entry.animation = animation;
    running.set(el, entry);
    onSettled(animation, function () {
      settle();
      forget(el, entry);
    });
  }

  /**
   * ¿Se mueve este bloque? Las tres condiciones son de "¿el movimiento existe?",
   * no de estilo: sin `el.animate` no hay entrada; sin `getComputedStyle` no hay
   * token que leer; y sin esta capa arrancada —o con movimiento reducido— el
   * interruptor `html.pw-fx` no está puesto y el movimiento no se pide.
   */
  function motionAllowed(el) {
    if (!el || el.nodeType !== 1 || typeof el.animate !== 'function') { return false; }
    if (typeof window.getComputedStyle !== 'function') { return false; }
    if (prefersReducedMotion()) { return false; }
    return started && rootHasFlag();
  }

  function rootHasFlag() {
    var root = document.documentElement;
    return !!(root && root.classList && root.classList.contains(ROOT_CLASS));
  }

  /**
   * Cancela lo que estuviera en marcha sobre este bloque y aplica su final, que
   * es la mitad importante: sin esto, una entrada cancelada a medias dejaría el
   * atributo en el valor viejo y el bloque se quedaría pegado a la pantalla.
   */
  function stopMotion(el) {
    var entry = el ? running.get(el) : null;
    if (!entry) { return; }
    running.delete(el);
    if (entry.animation && typeof entry.animation.cancel === 'function') {
      try {
        entry.animation.cancel();
      } catch (error) {
        warnOnce('cancel', 'no se ha podido cancelar una animacion en marcha; se aplica su final.', error);
      }
    }
    entry.settle();
  }

  /** El bloque ya no tiene nada en marcha; la promesa de `finished` lo confirma. */
  function forget(el, entry) {
    if (running.get(el) === entry) { running.delete(el); }
  }

  /**
   * `finished` no está en todas partes, y además se RECHAZA al cancelar —que es
   * el camino normal de este puente—. Los dos finales que importan se tratan
   * igual: se aplica el final. Sin promesa, `onfinish` cubre el final feliz y
   * `stopMotion` cubre el cancelado.
   */
  function onSettled(animation, run) {
    if (animation.finished && typeof animation.finished.then === 'function') {
      animation.finished.then(run, run);
      return;
    }
    animation.onfinish = run;
  }

  /**
   * La Web Animations API, o `null` si no se puede. Los tokens se leen AQUÍ, en
   * el momento del movimiento: es lo que hace que subir `--pw-dur-2` en el CSS
   * cambie también esta entrada sin tocar este fichero.
   *
   * `fill: 'backwards'` es lo que hace que el retardo se vea como un retardo: sin
   * él, una tarjeta con 400ms de espera se queda en su sitio final hasta que
   * empieza a moverse, y el escalonado se lee como un fogonazo tardío.
   */
  function animate(el, frames, opts) {
    try {
      return el.animate(frames, {
        duration: motionDuration(),
        delay: opts && opts.delay > 0 ? opts.delay : 0,
        easing: motionEasing(),
        fill: 'backwards'
      });
    } catch (error) {
      warnOnce('animate', 'el.animate() no ha podido mover el bloque; aparece o desaparece sin fundido.', error);
      return null;
    }
  }

  /** `--pw-dur-2` en ms. Acepta `ms` y `s`; sin token o sin número, el contrato. */
  function motionDuration() {
    var read = readCssUnit(DUR_TOKEN);
    if (!read || !(read.value > 0)) { return DUR_FALLBACK; }
    return read.unit === 's' ? read.value * 1000 : read.value;
  }

  /** El desplazamiento se pasa tal cual: `px`, `rem` o `em`, lo que diga el token. */
  function revealShift() {
    return readCssValue(SHIFT_TOKEN) || SHIFT_FALLBACK;
  }

  function motionEasing() {
    return readCssValue(EASE_TOKEN) || EASE_FALLBACK;
  }

  /** Un token del `:root` ya calculado, sin espacios sobrantes. */
  function readCssValue(token) {
    var root = document.documentElement;
    if (!root) { return ''; }
    return String(window.getComputedStyle(root).getPropertyValue(token) || '').trim();
  }

  /** `{ value, unit }` de un token numérico, o `null` si no es un número. */
  function readCssUnit(token) {
    var match = /^(-?\d*\.?\d+)(ms|s|px|rem|em)?$/.exec(readCssValue(token));
    return match ? { value: parseFloat(match[1]), unit: match[2] || '' } : null;
  }

  /** Un final que se puede aplicar dos veces —cancelar y `finished` lo piden— sin repetir el efecto. */
  function once(run) {
    var used = false;
    return function () {
      if (used) { return; }
      used = true;
      run();
    };
  }

  /* ================================================================
   * 9 · Ciclo de vida
   * ================================================================ */

  function onPageHide() {
    teardown();
  }

  function onPageShow(event) {
    if (event.persisted) { init(); } // restaurado del bfcache: todo se había desmontado
  }

  function bind() {
    if (bound) { return; }
    bound = true;
    window.addEventListener('pagehide', onPageHide);
    window.addEventListener('pageshow', onPageShow);
    // El puntero se va de golpe (otra ventana, un diálogo): nada encendido.
    window.addEventListener('blur', onPointerLeave);
  }

  function unbind() {
    if (!bound) { return; }
    bound = false;
    window.removeEventListener('pagehide', onPageHide);
    window.removeEventListener('pageshow', onPageShow);
    window.removeEventListener('blur', onPointerLeave);
  }

  /**
   * Escuchas de puntero, solo si hay puntero que se mueva. En táctil sin hover no
   * se engancha NADA: ni el foco ni los botones, para que el primer toque en
   * una tarjeta vaya a la tarjeta y no a un efecto.
   */
  function attachPointer() {
    if (optOut.spotlight && optOut.magnets) { return; }
    if (!canHover()) { return; }
    var root = document.documentElement;
    if (!root) { return; }
    listen(root, 'pointermove', onPointerMove);
    listen(root, 'pointerleave', onPointerLeave);
    listen(root, 'pointercancel', onPointerLeave);
  }

  function detachPointer() {
    var root = document.documentElement;
    if (!root) { return; }
    root.removeEventListener('pointermove', onPointerMove);
    root.removeEventListener('pointerleave', onPointerLeave);
    root.removeEventListener('pointercancel', onPointerLeave);
  }

  /**
   * `render.js` rehizo el artículo entero con `clear(root)` y `features.js` monta
   * encima el índice flotante, las cronologías y las cifras de palabras. Este
   * observador los recoge; el `requestAnimationFrame` agrupa el lote, igual que
   * `motion.js` §4 y `features.js` §6.4.
   */
  function refresh() {
    if (!started) { return; }
    splitHeroTitle();
    collectCounters(document);
    if (optOut.indicator) { return; }
    if (!mountIndicator()) { return; }
    updateIndicator();
    // El índice flotante lo construye `features.js`, que carga después: puede
    // que en el arranque todavía no exista, así que el observer se engancha en
    // cuanto aparece y no antes.
    if (!tocSpy) { startTocSpy(); }
  }

  function watchMain() {
    stopWatch();
    var main = document.querySelector('main.pw-main') || document.querySelector('main');
    if (!main) {
      warnOnce('main', 'no se encuentra <main>; solo se vigila lo que haya al arrancar.');
      return;
    }
    if (typeof window.MutationObserver !== 'function') {
      warnOnce('observer', 'sin MutationObserver; la capa solo se calcula al arrancar.');
      return;
    }
    watcher = new window.MutationObserver(function () {
      if (watchFrame) { return; } // una pasada por fotograma, no una por mutación
      watchFrame = raf(function () {
        watchFrame = 0;
        refresh();
      });
    });
    watcher.observe(main, { childList: true, subtree: true, characterData: true });
  }

  function stopWatch() {
    if (watcher) {
      watcher.disconnect();
      watcher = null;
    }
  }

  /**
   * Las fuentes mandan sobre la geometría: partir el titular antes de que
   * carguen parte por donde no es y luego no hay vuelta atrás. Sin
   * `document.fonts` se mide en el siguiente fotograma, que es lo más cerca que
   * se puede estar sin romper nada.
   */
  function whenFontsReady(run) {
    var fonts = document.fonts;
    if (!fonts || !fonts.ready || typeof fonts.ready.then !== 'function') {
      raf(run);
      return;
    }
    try {
      fonts.ready.then(function () { raf(run); }, function (error) {
        warnOnce('fonts', 'las fuentes no han resuelto; se mide igual.', error);
        raf(run);
      });
    } catch (error) {
      warnOnce('fonts', 'no se ha podido esperar a las fuentes.', error);
      raf(run);
    }
  }

  /** Nada debe seguir corriendo tras navegar: sin observadores ni fotogramas vivos. */
  function teardown() {
    unbind();
    detachPointer();
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('scroll', onTocScroll);
    stopWatch();
    stopTocSpy();
    stopCounterSpy();
    // Los conteos se quedan en su estado final (`is-counted`, progreso a 1) y no
    // a medias: lo que se ve tiene que ser el número entero, pase lo que pase.
    stopCounts();
    restSpot();
    restMagnet();
    removeIndicator();
    // El titular se devuelve tal cual: lo que esta capa partió, lo junta. Un
    // `pageshow` del bfcache vuelve a medirlo, pero medir un titular ya partido
    // sería medir los trozos.
    unwrapLines();
    if (frame) {
      caf(frame);
      frame = 0;
    }
    if (headerFrame) {
      caf(headerFrame);
      headerFrame = 0;
    }
    if (tocFrame) {
      caf(tocFrame);
      tocFrame = 0;
    }
    if (watchFrame) {
      caf(watchFrame);
      watchFrame = 0;
    }
    // La cabecera y el interruptor se dejan como están a propósito: `init()` los
    // vuelve a evaluar en el siguiente arranque, y al volver del bfcache el
    // usuario puede estar arriba del todo.
    started = false;
  }

  function init() {
    if (started) { return true; }
    if (!fxAllowed()) { return false; }

    try {
      // El interruptor va PRIMERO y los trabajos DESPUÉS, en el mismo turno: al
      // pintar, el CSS ya encuentra la clase. Si se invirtiera, se vería un
      // fogonazo de cifras atenuadas antes de que existiera nada que atenuarlas.
      document.documentElement.classList.add(ROOT_CLASS);

      // Los contadores no dependen de la geometría: se cuentan ya, sin esperar
      // fuentes. El titular sí depende, y por eso va dentro de `whenFontsReady`.
      startCounterSpy();
      collectCounters(document);

      attachPointer();
      if (!optOut.condensed) {
        listen(window, 'scroll', onScroll);
        updateCondensed();
      }
      if (!optOut.indicator) {
        mountIndicator();
        updateIndicator();
        startTocSpy();
        listen(window, 'scroll', onTocScroll);
      }
      whenFontsReady(function () {
        if (!started) { return; } // la página se fue mientras esperábamos
        splitHeroTitle();
        if (!optOut.indicator) {
          mountIndicator();
          updateIndicator();
          if (!tocSpy) { startTocSpy(); }
        }
      });
      watchMain();
    } catch (error) {
      // Cualquier fallo inesperado deja la página como estaba, no peor.
      teardown();
      document.documentElement.classList.remove(ROOT_CLASS);
      warnOnce('init', 'error inesperado al arrancar la interaccion; se queda desactivada.', error);
      return false;
    }

    bind();
    started = true;
    return true;
  }

  /** Sin movimiento reducido y con fotogramas disponibles: el interruptor va. */
  function fxAllowed() {
    if (prefersReducedMotion()) {
      // No es un fallo: es una preferencia del sistema y el sitio la respeta sin
      // quejarse por la consola.
      return false;
    }
    if (!hasRaf()) {
      warnOnce('raf', 'sin requestAnimationFrame; no hay capa de puntero.');
      return false;
    }
    return true;
  }

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  /* ================================================================
   * 10 · API pública
   * ================================================================ */

  /**
   * `PW.interactions`:
   *   init() / teardown()    arranque y parada (los usa también el bfcache).
   *   fxAllowed()            si esta capa puede tocar algo ahora mismo.
   *   prefersReducedMotion() /
   *   canHover()             las dos preguntas del contrato, por si otro script
   *                          quiere tomar la misma decisión.
   *   optOut                 banderas para apagar bloques sueltos.
   *   splitLines()           vuelve a partir el titular; devuelve cuántos
   *                          <span class="pw-line"> ha creado.
   *   unwrapLines()          deshace SOLO los spans que creó esta capa.
   *   collectCounters(scope) marca contadores de un fragmento; devuelve cuántos
   *                          quedan vigilados.
   *   withViewTransition(fn) GANCHO de la transición de vista: envuelve un cambio
   *                          y devuelve si hubo transición. `features.js` sigue
   *                          intacto a propósito; quien lo adopte, lo llama desde
   *                          allí.
   *   reveal(el, opts)       §8b · quita `hidden` y deja entrar al bloque.
   *                          `opts.delay` en ms, para escalonar una lista.
   *   collapse(el, o, done)  §8b · desvanece el bloque, le pone `hidden` al
   *                          terminar y llama a `done()`. `hidden` acaba igual
   *                          que sin animación; `done()` también, porque se
   *                          llama igual sin movimiento que con él.
   */
  PW.interactions = {
    init: init,
    teardown: teardown,
    fxAllowed: fxAllowed,
    prefersReducedMotion: prefersReducedMotion,
    canHover: canHover,
    optOut: optOut,
    splitLines: splitHeroTitle,
    unwrapLines: unwrapLines,
    collectCounters: collectCounters,
    withViewTransition: withViewTransition,
    reveal: reveal,
    collapse: collapse
  };

  onReady(init);
})(window.PW = window.PW || {});
