/* politics-wiki · js/motion.js
 *
 * ===== v3 · movimiento =====
 *
 * Capa de movimiento: marca los bloques que deben entrar al hacer scroll y los
 * destapa cuando llegan a la ventana. Script clásico (sin módulos, sin build)
 * para que también funcione abierto con file://, como el resto del sitio.
 *
 * Se carga justo antes de `features.js` y con `defer`, así que cuando arranca en
 * DOMContentLoaded `app.js` (o `graph.js` / `spectrum.js`) ya ha pintado la
 * vista. Lo que llega después —el índice flotante, las cronologías o las
 * flechas anterior/siguiente de `features.js`— se recoge con un
 * MutationObserver sobre `main.pw-main`.
 *
 * ===== CONTRATO CON `css/wiki.css` (no negociable) =====
 *
 *   · Esta capa no escribe NI UNA regla visual. Colores, tamaños, easings,
 *     duraciones y keyframes son de la hoja de estilos.
 *   · `html.pw-motion` es el interruptor maestro. CSS esconde
 *     `html.pw-motion [data-pw-reveal]`; como la clase la pone solo esta capa y
 *     solo cuando el movimiento está permitido, si este fichero falta, falla o
 *     va tarde el artículo se ve entero. No hay forma de esconder contenido
 *     por un error de JavaScript.
 *   · Lo único que esta capa escribe son tres cosas: el atributo
 *     `data-pw-reveal`, la clase `is-revealed` y la propiedad CSSOM
 *     `--pw-reveal-delay`. Ni una clase presentacional propia.
 *   · `prefers-reduced-motion` se respeta AQUÍ, no solo en CSS: el bloque global
 *     de `wiki.css` §15 anula transiciones y animaciones, pero no puede parar
 *     un `transform` escrito a mano desde JS. El guardia de verdad es este.
 *   · NADA marcado puede quedarse invisible. `IntersectionObserver` solo informa
 *     de lo que llega a cruzarse con la ventana, y un salto de scroll —ir al
 *     final con la barra espaciadora, un ancla, el fin de la página restaurada
 *     del bfcache— se salta los bloques intermedios sin avisar. Esos nodos
 *     quedaban vigilados, con `data-pw-reveal` puesto y `--pw-reveal-delay`
 *     asignado, pero sin `is-revealed` nunca: el CSS los dejaba en `opacity: 0`
 *     de forma permanente. Por eso `sweep()` destapa, en cada scroll, todo lo
 *     marcado cuya caja ya ha pasado por encima del borde superior. Es una red
 *     de seguridad, no la vía normal: el reveal sigue siendo el observer.
 *
 * allow: SIZE_OK — la misma razón que `features.js` §0: el proyecto es sin
 * build, así que partir esto en módulos exigiría un bundler y rompería
 * "cero dependencias" y el arranque por file://.
 */
(function (PW) {
  'use strict';

  /* ================================================================
   * 0 · Constantes y estado
   * ================================================================ */

  // Todo lo que puede entrar con una animación. La lista es larga a propósito:
  // cada clase se ignora sola si la página no la tiene (`.pw-spectrum-node` no
  // existe en `article.html`, `.pw-graph-node` no existe en `espectro.html`).
  var TARGETS = [
    '.pw-hero',
    '.pw-hero-title',
    '.pw-hero-sub',
    '.pw-section',
    '.pw-catgroup',
    '.pw-card',
    '.pw-related-card',
    '.pw-h2',
    '.pw-timeline-item',
    '.pw-prevnext-link',
    '.pw-spectrum-chip',
    '.pw-spectrum-node',
    '.pw-graph-node',
    '.pw-nav-item'
  ].join(', ');

  var ROOT_CLASS = 'pw-motion';        // el interruptor que lee el CSS
  var REVEAL_ATTR = 'data-pw-reveal';  // "esto está marcado para entrar"
  var REVEALED_CLASS = 'is-revealed';  // "ya ha entrado"
  var DELAY_PROP = '--pw-reveal-delay';

  var STEP_MS = 24;      // escalonado entre hermanos del mismo grupo
  var MAX_DELAY_MS = 240; // tope: 29 chips y 11 ítems de menú no se encadenan
  // Antes era `0px 0px -12% 0px`, o sea "espera a que se haya visto el 12% de su
  // caja para empezar a entrar". Sumado a un escalón de 40ms, la queja más
  // repetida sobre revelados al scroll era que la página aparece medio vacía
  // mientras el contenido baja: el disparador llega tarde y el retardo se suma
  // detrás. Un margen POSITIVO hace lo contrario —empieza a entrar antes de que
  // el bloque llegue al borde— y 24ms de escalón es lo justo para que se lea
  // como una cascada y no como un barrido. El cambio está medido sobre el
  // comentario más repetido de la comunidad, no es una tasteada.
  var ROOT_MARGIN = '0px 0px 8% 0px';

  var warned = {};   // un solo aviso por clave, para no inundar la consola
  var started = false; // evita doble arranque (bfcache)
  var bound = false;   // evita doble escucha si init() se repite
  var spy = null;      // IntersectionObserver de revelado
  var watcher = null;  // MutationObserver de re-armado
  var frame = 0;       // requestAnimationFrame pendiente del re-armado
  var pending = [];    // nodos marcados que aún no han entrado (red de seguridad)
  var sweepFrame = 0;  // requestAnimationFrame pendiente del barrido

  /* ================================================================
   * 1 · Utilidades
   * ================================================================ */

  function warnOnce(key, message, detail) {
    if (warned[key]) { return; }
    warned[key] = true;
    if (detail === undefined) { console.error('PW.motion: ' + message); }
    else { console.error('PW.motion: ' + message, detail); }
  }

  function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList || []);
  }

  /**
   * Misma semántica que la de `features.js` §1: `matchMedia` ausente se
   * interpreta como "no hay preferencia declarada", y en ese caso se permite
   * el movimiento. Quien no lo quiere lo dice con la preferencia del sistema.
   */
  function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  /* ================================================================
   * 2 · Permisos: aquí es donde se decide si hay movimiento
   * ================================================================ */

  /**
   * Sin movimiento reducido y con IntersectionObserver disponible. Si esto no
   * se cumple, `init()` no pone `pw-motion` y la página se queda estática y,
   * sobre todo, visible.
   */
  function motionAllowed() {
    if (prefersReducedMotion()) {
      // No es un fallo: es una preferencia del sistema y el sitio la respeta
      // sin quejarse por la consola.
      return false;
    }
    if (typeof window.IntersectionObserver !== 'function') {
      warnOnce('io', 'sin IntersectionObserver; el contenido se queda estático y visible.');
      return false;
    }
    return true;
  }

  /* ================================================================
   * 3 · Observador de entrada
   * ================================================================ */

  /** Escalonado dentro de un mismo grupo de hermanos, con tope. */
  function stagger(index) {
    return Math.min(index * STEP_MS, MAX_DELAY_MS) + 'ms';
  }

  function reveal(entries) {
    var observer = spy;
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      if (!entry || !entry.isIntersecting) { continue; }
      var node = entry.target;
      if (node.classList.contains(REVEALED_CLASS)) { continue; }
      node.classList.add(REVEALED_CLASS);
      // Destapado y fuera: un artículo de 16000px no puede dejar 300 nodos
      // vigilados para el resto de la sesión.
      if (observer) { observer.unobserve(node); }
    }
  }

  function startSpy() {
    stopSpy();
    try {
      spy = new window.IntersectionObserver(reveal, {
        rootMargin: ROOT_MARGIN,
        threshold: 0
      });
    } catch (error) {
      spy = null;
      // Sin observador no hay forma de saber qué está a la vista: mejor quitar
      // el interruptor y dejar la página enteramente visible.
      warnOnce('spy', 'no se ha podido crear el IntersectionObserver; se quita el movimiento.', error);
      document.documentElement.classList.remove(ROOT_CLASS);
    }
  }

  function stopSpy() {
    if (spy) {
      spy.disconnect();
      spy = null;
    }
  }

  /**
   * Red de seguridad del revelado. El observer destapa lo que entra por el
   * borde inferior; esto destapa lo que ya ha pasado por el superior, que es
   * justo lo que un salto de scroll se salta sin avisar.
   *
   * El criterio es `rect.top < 0`: el bloque ya está por encima del borde
   * superior, o asomando por él. En los dos casos el usuario lo tiene a la
   * vista o lo tiene detrás, y dejarlo en `opacity: 0` no es una animación
   * discreta: es contenido que no existe. Por eso se destapa de golpe, sin
   * escalonado, y no se toca nada que siga por debajo: ahí el reveal normal
   * sigue teniendo su efecto.
   *
   * Solo corre mientras queden nodos pendientes, y se vacía en cuanto el
   * observer los ha revelado todos, así que un artículo largo no paga un
   * `getBoundingClientRect()` por nodo y por fotograma durante toda la sesión.
   */
  function sweep() {
    sweepFrame = 0;
    if (!pending.length) { return; }
    var rest = [];
    for (var i = 0; i < pending.length; i++) {
      var node = pending[i];
      // Un nodo ya revelado, o que el DOM se llevó por delante, no se cuenta.
      if (!node.isConnected || node.classList.contains(REVEALED_CLASS)) { continue; }
      if (node.getBoundingClientRect().top < 0) {
        node.classList.add(REVEALED_CLASS);
        if (spy) { spy.unobserve(node); }
        continue;
      }
      rest.push(node);
    }
    pending = rest;
  }

  function requestSweep() {
    if (sweepFrame || !pending.length) { return; }
    if (typeof window.requestAnimationFrame !== 'function') {
      sweep();
      return;
    }
    sweepFrame = window.requestAnimationFrame(sweep);
  }

  /** Un solo manejador para scroll y resize: si no hay nada pendiente, no hace nada. */
  function onScrollOrResize() {
    requestSweep();
  }

  function stopSweep() {
    if (sweepFrame) {
      if (typeof window.cancelAnimationFrame === 'function') {
        window.cancelAnimationFrame(sweepFrame);
      }
      sweepFrame = 0;
    }
    pending = [];
  }

  /* ================================================================
   * 4 · Recogida de objetivos
   * ================================================================ */

  /**
   * Marca y vigila todo lo que aún no haya entrado. Es idempotente a propósito,
   * porque la llaman el arranque y cada lote de cambios dentro de `main`:
   *
   *   · no vuelve a marcar lo que ya tiene `data-pw-reveal`, ni a reescribir
   *     su retardo, así que el MutationObserver no se realimenta;
   *   · lo que ya tiene `is-revealed` ni se marca ni se observa, porque ya
   *     está visible y volver a mirarlo no cambia nada;
   *   · el contador del escalonado se reinicia en cuanto cambia el padre, de
   *     modo que las 29 fichas del espectro escalonan entre ellas y no se
   *     acumulan 29 retardos seguidos.
   *
   * Devuelve cuántos nodos quedan vigilados ahora mismo.
   */
  function collect(scope) {
    var nodes = toArray((scope || document).querySelectorAll(TARGETS));
    var observer = spy;
    var watching = 0;
    var lastParent = null;
    var index = 0;
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (!node || !node.classList) { continue; }
      if (node.classList.contains(REVEALED_CLASS)) { continue; }
      // Sin caja no hay animacion posible: un nodo dentro de un contenedor
      // `display: none` —la lista de la navegacion movil antes de abrirla— nunca
      // dispara el IntersectionObserver, se quedaria marcado para siempre y el
      // CSS lo dejaria invisible sin nada que lo despierte. Los que estan fuera
      // de pantalla si tienen caja, asi que el scroll sigue revelandolos.
      if (!node.getClientRects || node.getClientRects().length === 0) { continue; }
      if (node.parentNode !== lastParent) {
        lastParent = node.parentNode;
        index = 0;
      }
      if (!node.hasAttribute(REVEAL_ATTR)) {
        node.setAttribute(REVEAL_ATTR, '');
        if (node.style && node.style.setProperty) {
          node.style.setProperty(DELAY_PROP, stagger(index));
        }
      }
      if (observer) { observer.observe(node); }
      // La red de seguridad necesita su propia lista: el observer solo avisa de
      // lo que se cruza con la ventana, y esto tiene que acordarse de lo que
      // queda vigilado por si el scroll se lo salta de un salto.
      if (pending.indexOf(node) === -1) { pending.push(node); }
      watching++;
      index++;
    }
    // Al arrancar, o con cada lote de cambios, puede haber bloques ya por encima
    // del borde superior —una página restaurada del bfcache, un ancla— que el
    // observer no llegará a ver nunca. Se destapan en el mismo turno.
    requestSweep();
    return watching;
  }

  /**
   * `render.js` rehizo el artículo entero con `clear(root)` y `features.js`
   * monta encima las cronologías, el índice flotante y las flechas
   * anterior/siguiente. Este observador los recoge; el `requestAnimationFrame`
   * agrupa el lote para que una ficha de cuarenta tablas no provoke cuarenta
   * pasadas, igual que hace `features.js` §6.4.
   */
  function watchMain() {
    stopWatch();
    var main = document.querySelector('main.pw-main') || document.querySelector('main');
    if (!main) {
      warnOnce('main', 'no se encuentra <main>; solo se animará lo que haya al arrancar.');
      return;
    }
    if (typeof window.MutationObserver !== 'function') {
      warnOnce('observer', 'sin MutationObserver; el movimiento solo se calcula al arrancar.');
      return;
    }
    watcher = new window.MutationObserver(function () {
      if (frame) { return; } // una pasada por fotograma, no una por mutación
      if (typeof window.requestAnimationFrame !== 'function') {
        collect(main);
        return;
      }
      frame = window.requestAnimationFrame(function () {
        frame = 0;
        collect(main);
      });
    });
    watcher.observe(main, { childList: true, subtree: true });
  }

  function stopWatch() {
    if (watcher) {
      watcher.disconnect();
      watcher = null;
    }
  }

  /* ================================================================
   * 5 · Ciclo de vida
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
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
  }

  function unbind() {
    if (!bound) { return; }
    bound = false;
    window.removeEventListener('pagehide', onPageHide);
    window.removeEventListener('pageshow', onPageShow);
    window.removeEventListener('scroll', onScrollOrResize);
    window.removeEventListener('resize', onScrollOrResize);
  }

  /** Nada debe seguir corriendo tras navegar: sin observadores ni fotogramas vivos. */
  function teardown() {
    unbind();
    stopWatch();
    stopSpy();
    stopSweep();
    if (frame) {
      window.cancelAnimationFrame(frame);
      frame = 0;
    }
    // `pageshow` vuelve a llamar a `init()` al restaurar del bfcache, así que la
    // capa tiene que poder arrancar otra vez. La clase y los atributos se dejan
    // puestos a propósito: lo ya revelado sigue visible (CSS no lo esconde) y lo
    // marcado sin revelar vuelve a entrar en el observador, sin fogonazo.
    started = false;
  }

  function init() {
    if (started) { return true; }
    if (!motionAllowed()) { return false; }

    try {
      startSpy();
      if (!spy) { return false; }
      // El interruptor va PRIMERO y los objetivos DESPUÉS, en el mismo turno:
      // al pintar, el CSS ya encuentra la clase y todos los nodos marcados a la
      // vez. Si se invirtiera el orden, se vería un fogonazo de texto ya
      // oculto antes de que existiera nada que ocultar.
      document.documentElement.classList.add(ROOT_CLASS);
      collect(document);
      watchMain();
    } catch (error) {
      // Cualquier fallo inesperado deja la página como estaba, no peor.
      teardown();
      document.documentElement.classList.remove(ROOT_CLASS);
      warnOnce('init', 'error inesperado al arrancar el movimiento; se queda desactivado.', error);
      return false;
    }

    bind();
    started = true;
    return true;
  }

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  PW.motion = {
    init: init,
    teardown: teardown
  };

  onReady(init);
})(window.PW = window.PW || {});
