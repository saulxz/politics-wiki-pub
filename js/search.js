/* politics-wiki · js/search.js
 * Búsqueda y autocompletado. Script clásico, sin dependencias.
 * Ver CONTRACT.md §6.5 (markup del panel) y §7 (PW.search).
 * v3: los cinco dominios de CONTRACT-V3.md §9, agrupados y con su `tipo`.
 */
(function (PW) {
  'use strict';

  var DEBOUNCE_MS = 120;
  var MAX_RESULTS = 8;
  var SCORE = {
    exact: 1000,    // el título normalizado es la consulta
    prefix: 900,    // el título empieza por la consulta
    tag: 800,       // la consulta aparece en alguna etiqueta
    summary: 700,   // la consulta aparece en el resumen
    subtitle: 200,  // campos secundarios: sólo desempatan
    category: 100
  };

  /** Minúsculas y sin diacríticos: «FAscismo» y «fascismo» son la misma búsqueda. */
  function fold(str) {
    var value = String(str === null || str === undefined ? '' : str).toLowerCase();
    if (typeof value.normalize === 'function') {
      value = value.normalize('NFD');
    }
    return value.replace(/[\u0300-\u036f]/g, '');
  }

  function indexOf(haystack, needle) {
    return fold(haystack).indexOf(needle);
  }

  /**
   * Busca sobre título, etiquetas, resumen, subtítulo y categoría, en los
   * cinco dominios. La puntuación es la de v1: primero la significancia de la
   * coincidencia y después el título (§9).
   * @returns {Array<{article: Object, score: number, kind: string}>}
   */
  function search(query, limit) {
    var q = fold(query).replace(/\s+/g, ' ').trim();
    if (!q) { return []; }
    var max = (typeof limit === 'number' && limit > 0) ? Math.floor(limit) : 10;

    var results = [];
    PW.KINDS.forEach(function (kind) {
      PW.list(kind).forEach(function (entry) {
        var article = PW.get(kind, entry.slug) || {};
        var title = fold(entry.title);
        var score = 0;

        if (title === q) {
          score = SCORE.exact;
        } else if (title.indexOf(q) === 0) {
          // A igualdad de prefijo, gana el título más corto.
          score = SCORE.prefix - Math.min(title.length, 99) / 100;
        } else {
          var tagHits = 0;
          (entry.tags || []).forEach(function (tag) {
            if (indexOf(tag, q) >= 0) { tagHits++; }
          });
          if (tagHits) { score = SCORE.tag + tagHits; }
          if (indexOf(entry.summary, q) >= 0) { score = Math.max(score, SCORE.summary); }
        }

        if (indexOf(entry.subtitle, q) >= 0) { score += SCORE.subtitle; }
        if (indexOf(entry.category, q) >= 0) { score += SCORE.category; }
        if (score > 0) { results.push({ article: article, score: score, kind: kind }); }
      });
    });

    results.sort(function (a, b) {
      return b.score - a.score || String(a.article.title).localeCompare(String(b.article.title), 'es');
    });
    return results.slice(0, max);
  }

  /* ================================================================
   * Panel de resultados (§6.5)
   * ================================================================ */

  var panels = [];

  function findPanel(input) {
    var parent = input.parentElement;
    if (parent && parent.querySelector('.pw-search-results')) {
      return parent.querySelector('.pw-search-results');
    }
    if (input.form && input.form.querySelector('.pw-search-results')) {
      return input.form.querySelector('.pw-search-results');
    }
    return null;
  }

  /**
   * §9: cada resultado lleva su `tipo`, también el de ideologías. Es la única
   * URL del sitio que no reutiliza `PW.articleUrl`, que mantiene la forma de v1
   * (`article.html?title=slug`) para tarjetas, wikilinks y canónicos.
   */
  function resultUrl(article, kind) {
    if (!article || !article.slug) { return 'article.html'; }
    return 'article.html?tipo=' + encodeURIComponent(kind) +
      '&title=' + encodeURIComponent(article.slug);
  }

  /** §9: cada resultado lleva su `tipo`, para que la ruta sepa qué dominio es. */
  function searchItem(article, kind) {
    var link = document.createElement('a');
    link.className = 'pw-search-item';
    link.setAttribute('href', resultUrl(article, kind));
    var title = document.createElement('span');
    title.className = 'pw-search-item-title';
    title.textContent = article.title || '';
    link.appendChild(title);
    var sub = document.createElement('span');
    sub.className = 'pw-search-item-sub';
    sub.textContent = article.category || article.subtitle || '';
    link.appendChild(sub);
    return link;
  }

  /** §9: encabezado de dominio. Reutiliza el título de grupo ya existente. */
  function searchGroupTitle(kind) {
    var heading = document.createElement('h3');
    heading.className = 'pw-catgroup-title';
    heading.textContent = PW.kindLabel(kind);
    return heading;
  }

  function emptyPanel(message) {
    var box = document.createElement('div');
    box.className = 'pw-empty';
    var line = document.createElement('p');
    line.textContent = message;
    box.appendChild(line);
    return box;
  }

  function wire(input) {
    // Evita dobles escuchas si el buscador se reinicializa.
    if (input.pwSearchWired) { return; }
    var panel = findPanel(input);
    if (!panel) {
      console.error('PW.search: el campo de búsqueda no tiene un panel .pw-search-results.', input);
      return;
    }
    input.pwSearchWired = true;

    var timer = null;
    var items = [];
    var active = -1;

    function clearPanel() {
      while (panel.firstChild) { panel.removeChild(panel.firstChild); }
      items = [];
      active = -1;
    }

    function close() {
      panel.hidden = true;
    }

    function highlight(index) {
      if (active >= 0 && items[active]) { items[active].removeAttribute('aria-current'); }
      active = index;
      if (index < 0) { return; }
      items[index].setAttribute('aria-current', 'true');
      items[index].focus();
    }

    function render(text) {
      clearPanel();
      if (!text) {
        close();
        return;
      }
      var found = search(text, MAX_RESULTS);
      if (!found.length) {
        panel.appendChild(emptyPanel('Sin resultados para «' + text + '»'));
        panel.hidden = false;
        return;
      }
      // §9: los resultados se agrupan por dominio, en el orden de PW.KINDS.
      // Solo los enlaces entran en la lista de teclado.
      PW.KINDS.forEach(function (kind) {
        var hits = found.filter(function (hit) { return hit.kind === kind; });
        if (!hits.length) { return; }
        panel.appendChild(searchGroupTitle(kind));
        hits.forEach(function (hit) {
          var item = searchItem(hit.article, hit.kind);
          items.push(item);
          panel.appendChild(item);
        });
      });
      panel.hidden = false;
    }

    function go(href) {
      if (!href) { return; }
      close();
      window.location.href = href;
    }

    function debounce() {
      if (timer) { window.clearTimeout(timer); }
      timer = window.setTimeout(function () {
        timer = null;
        render(input.value.trim());
      }, DEBOUNCE_MS);
    }

    input.addEventListener('input', debounce);
    input.addEventListener('focus', function () {
      if (input.value.trim()) { render(input.value.trim()); }
    });
    input.addEventListener('keydown', function (event) {
      var key = event.key;
      if (key === 'ArrowDown' || key === 'ArrowUp') {
        if (panel.hidden) { render(input.value.trim()); }
        if (!items.length) { return; }
        event.preventDefault();
        var next;
        if (active < 0) { next = 0; }
        else if (key === 'ArrowDown') { next = (active + 1) % items.length; }
        else { next = active === 0 ? items.length - 1 : active - 1; }
        highlight(next);
        return;
      }
      if (key === 'Enter') {
        event.preventDefault();
        if (active >= 0 && items[active]) {
          go(items[active].getAttribute('href'));
        } else if (items.length) {
          go(items[0].getAttribute('href'));
        }
        return;
      }
      if (key === 'Escape' || key === 'Esc') {
        if (!panel.hidden) {
          event.preventDefault();
          close();
        }
      }
    });

    // Enter con el formulario (sin desplegable) lleva al primer resultado.
    if (input.form) {
      input.form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (active >= 0 && items[active]) {
          go(items[active].getAttribute('href'));
          return;
        }
        var found = search(input.value.trim(), 1);
        if (found.length && found[0].article.slug) {
          go(resultUrl(found[0].article, found[0].kind));
          return;
        }
        render(input.value.trim());
      });
    }

    // El panel nunca sobrevive a la navegación ni a un clic fuera.
    panel.addEventListener('click', function (event) {
      if (event.target.closest && event.target.closest('a')) { close(); }
    });

    panels.push({
      input: input,
      panel: panel,
      close: close,
      holds: function (node) {
        return input === node || panel === node || input.contains(node) || panel.contains(node);
      }
    });
  }

  function onDocumentClick(event) {
    for (var i = 0; i < panels.length; i++) {
      if (!panels[i].holds(event.target)) { panels[i].close(); }
    }
  }

  function onDocumentKeydown(event) {
    if (event.key !== 'Escape' && event.key !== 'Esc') { return; }
    for (var i = 0; i < panels.length; i++) { panels[i].close(); }
  }

  function init() {
    var inputs = document.querySelectorAll('.pw-search-input');
    if (!inputs.length) {
      console.error('PW.search: no se encuentra ningún campo .pw-search-input.');
      return;
    }
    for (var i = 0; i < inputs.length; i++) { wire(inputs[i]); }
    if (panels.length && !onDocumentClick.bound) {
      onDocumentClick.bound = true;
      document.addEventListener('click', onDocumentClick);
      document.addEventListener('keydown', onDocumentKeydown);
    }
  }

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  PW.search = search;
  onReady(init);
})(window.PW = window.PW || {});
