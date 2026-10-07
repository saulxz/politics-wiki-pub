/* politics-wiki · js/app.js
 * Router y punto de arranque. Script clásico, sin dependencias.
 * Ver CONTRACT.md §1 (arranque), §7 (PW.boot) y CONTRACT-V3.md §3 (rutas).
 */
(function (PW) {
  'use strict';

  function onReady(fn) {
    // Los scripts son `defer`: el DOM ya está parseado cuando se ejecutan, pero
    // si alguien los mueve al final del <body> o los quita el `defer`, aquí se
    // cubre el caso "aún no hay DOM".
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  function mainEl() {
    return document.querySelector('main.pw-main') || document.querySelector('main');
  }

  /** Vista de artículo o portada, por nombre de fichero y, si no, por los montajes. */
  function currentPage() {
    var path = String(window.location.pathname || '');
    var file = path.substring(path.lastIndexOf('/') + 1).toLowerCase();
    if (file.indexOf('article') >= 0) { return 'article'; }
    if (!file || file.indexOf('index') >= 0) { return 'home'; }
    if (document.getElementById('articulo')) { return 'article'; }
    if (document.getElementById('articulos-grid')) { return 'home'; }
    return 'home';
  }

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
      console.error('PW.boot: no se pudo interpretar la query "?title=".', error);
      return '';
    }
  }

  function removeLoading() {
    var loading = document.querySelector('.pw-loading');
    if (loading && loading.parentNode) { loading.parentNode.removeChild(loading); }
  }

  /** Estado vacío legible: nunca una pantalla en blanco (§7). */
  function renderEmpty(root, heading, detail) {
    if (!root) { return; }
    var box = document.createElement('div');
    box.className = 'pw-empty';

    var title = document.createElement('p');
    var strong = document.createElement('strong');
    strong.textContent = heading;
    title.appendChild(strong);
    box.appendChild(title);

    if (detail) {
      var note = document.createElement('p');
      note.textContent = detail;
      box.appendChild(note);
    }

    var line = document.createElement('p');
    var link = document.createElement('a');
    link.setAttribute('href', 'index.html');
    link.textContent = 'Volver a la portada';
    line.appendChild(link);
    box.appendChild(line);

    root.appendChild(box);
  }

  function scrollToHash() {
    var hash = String(window.location.hash || '').replace(/^#/, '');
    if (!hash) { return; }
    var target = document.getElementById(hash);
    if (!target || typeof target.scrollIntoView !== 'function') { return; }
    target.scrollIntoView();
  }

  /** Salvaguarda final: `main` nunca se queda sin contenido visible. */
  function ensureVisible(main, fallbackRoot) {
    if (main && main.textContent.replace(/\s+/g, '').length) { return; }
    console.error('PW.boot: la vista ha quedado vacía; se muestra un estado legible.');
    renderEmpty(
      fallbackRoot || main,
      'Contenido no disponible',
      'Esta página no ha podido mostrar ningún contenido.'
    );
  }

  /* ================================================================
   * Dominio activo (CONTRACT-V3.md §3.4 y §3.5)
   * ================================================================ */

  /** §8.1: el conmutador marca el dominio activo y lleva los contadores. */
  function markDomains(kind) {
    var nav = document.getElementById('pw-domains');
    if (!nav) { return; } // el HTML todavía no lo trae: no es un error
    var buttons = nav.querySelectorAll('.pw-domain');
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      var own = button.getAttribute('data-dominio') || '';
      button.setAttribute('aria-pressed', own === kind ? 'true' : 'false');
      var count = button.querySelector('.pw-domain-count');
      if (count && PW.KINDS.indexOf(own) >= 0) {
        count.textContent = String(PW.list(own).length);
      }
    }
  }

  /** §8.1: el conmutador navega al catálogo del dominio. `markDomains` solo
   *  marca cuál está activo, de modo que sin esto los botones se quedaban
   *  inertes: contaban bien y no hacían nada al pulsarlos. */
  function bindDomainSwitcher() {
    var nav = document.getElementById('pw-domains');
    if (!nav || nav.getAttribute('data-pw-bound') === 'true') { return; }
    nav.setAttribute('data-pw-bound', 'true');
    nav.addEventListener('click', function (event) {
      var button = event.target && event.target.closest
        ? event.target.closest('.pw-domain')
        : null;
      if (!button || !nav.contains(button)) { return; }
      var own = button.getAttribute('data-dominio') || '';
      // Se valida contra KINDS y no con `PW.kindOf`, porque `kindOf` nunca
      // lanza: devuelve el dominio por defecto ante un valor desconocido y
      // dejaría pasar un `data-dominio` inválido.
      if (PW.KINDS.indexOf(own) < 0) { return; }
      var active = nav.querySelector('.pw-domain[aria-pressed="true"]');
      // Si ya se está en ese dominio, no se recarga la misma página.
      if (active && (active.getAttribute('data-dominio') || '') === own) { return; }
      window.location.href = 'index.html?tipo=' + encodeURIComponent(own);
    });
  }

  /** §3.4: la barra lateral sigue siendo la misma y señala dónde se está. */
  function syncSidebar(kind, entry) {
    var sidebar = document.querySelector('.pw-sidebar');
    if (!sidebar) { return; }
    var links = sidebar.querySelectorAll('.pw-nav-link');
    var target = entry ? PW.articleUrl(entry) : 'index.html';
    var i;

    for (i = 0; i < links.length; i++) {
      if ((' ' + links[i].className + ' ').indexOf(' pw-nav-link-active ') >= 0) {
        links[i].className = 'pw-nav-link';
        links[i].removeAttribute('aria-current');
      }
    }

    // Enlace al catálogo del dominio activo, en el grupo «Navegación».
    var navList = sidebar.querySelector('.pw-nav-list');
    var domainLink = null;
    if (navList) {
      var added = navList.querySelector('[data-dominio-nav]');
      if (added && added.parentNode) { added.parentNode.removeChild(added); }
      if (kind !== 'ideologia') {
        var item = document.createElement('li');
        item.className = 'pw-nav-item';
        domainLink = document.createElement('a');
        domainLink.className = 'pw-nav-link';
        domainLink.setAttribute('data-dominio-nav', kind);
        domainLink.setAttribute('href', 'index.html?tipo=' + encodeURIComponent(kind));
        domainLink.textContent = PW.kindLabel(kind);
        item.appendChild(domainLink);
        navList.appendChild(item);
      }
    }

    function activate(link, current) {
      link.className = 'pw-nav-link pw-nav-link-active';
      link.setAttribute('aria-current', current);
    }

    // En el catálogo de un dominio, el activo es el dominio: `index.html` a
    // secas es la portada de ideologías, que no es lo que se está viendo.
    if (domainLink && !entry) {
      activate(domainLink, 'true');
      return;
    }
    // El artículo, si su enlace está en la barra lateral; si no, el dominio.
    for (i = 0; i < links.length; i++) {
      if (links[i].getAttribute('href') === target) {
        activate(links[i], 'page');
        return;
      }
    }
    if (domainLink) { activate(domainLink, 'true'); }
  }

  /** §3.5: el enlace canónico refleja la ruta que se está viendo. */
  function canonicalHref(kind, entry) {
    var base = String(window.location.href || '').split('#')[0].split('?')[0];
    if (entry && entry.slug) {
      return kind === 'ideologia'
        ? base + 'article.html?title=' + encodeURIComponent(entry.slug)
        : base + 'article.html?tipo=' + encodeURIComponent(kind) +
          '&title=' + encodeURIComponent(entry.slug);
    }
    return kind === 'ideologia' ? base + 'index.html' : base + 'index.html?tipo=' + encodeURIComponent(kind);
  }

  function updateCanonical(kind, entry) {
    try {
      if (!document.head) { return; }
      var link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonicalHref(kind, entry));
    } catch (error) {
      console.error('PW.boot: no se pudo actualizar el enlace canónico.', error);
    }
  }

  function applyArticleDomain(kind, entry) {
    markDomains(kind);
    syncSidebar(kind, entry);
    updateCanonical(kind, entry);
  }

  /** §3.5: la portada deja de ser un catálogo único y pasa a ser el del dominio. */
  function applyIndexDomain(kind) {
    if (kind === 'ideologia') {
      markDomains(kind);
      syncSidebar(kind, null);
      updateCanonical(kind, null);
      return;
    }

    var section = document.getElementById('articulos');
    var headline = section ? section.querySelector('.pw-headline') : null;
    if (headline) { headline.textContent = PW.kindLabel(kind); }

    // El catálogo ya viene agrupado: el browse de categorías es de ideologías.
    var categories = document.getElementById('categorias');
    if (categories) { categories.hidden = true; }

    document.title = 'Politics Wiki — ' + PW.kindLabel(kind);
    markDomains(kind);
    syncSidebar(kind, null);
    updateCanonical(kind, null);
  }

  function renderArticlePage() {
    var main = mainEl();
    var mount = document.getElementById('articulo');

    if (!mount) {
      console.error('PW.boot: no se encuentra el punto de montaje #articulo.');
      renderEmpty(
        main,
        'Artículo no disponible',
        'La página no contiene la zona de artículo esperada.'
      );
      return;
    }

    // §3: `tipo` ausente o vacío es ideología; un valor desconocido también,
    // con un error en consola. Sin `tipo` la ruta es la de siempre.
    var kind = PW.kindOf(queryParam('tipo'));
    var slug = queryParam('title');
    var article = slug ? PW.get(kind, slug) : null;

    if (!article) {
      console.error('PW.boot: no hay ningún artículo para ?title=' + JSON.stringify(slug));
      renderEmpty(
        mount,
        'Artículo no encontrado',
        slug
          ? 'No existe ninguna entrada llamada «' + slug + '»' +
            (kind === 'ideologia'
              ? ' en esta enciclopedia.'
              : ' en el catálogo de ' + PW.kindLabel(kind) + '.')
          : 'No se ha indicado qué artículo abrir.'
      );
      applyArticleDomain(kind, null);
      ensureVisible(main, mount);
      return;
    }

    PW.renderEntry(article, mount);
    applyArticleDomain(kind, article);
    scrollToHash();
    ensureVisible(main, mount);
  }

  function renderHomePage() {
    var main = mainEl();
    if (!main) {
      console.error('PW.boot: no se encuentra <main> en esta página.');
      return;
    }
    // `renderIndex('ideologia')` es la portada de v1, sin un solo cambio.
    var kind = PW.kindOf(queryParam('tipo'));
    PW.renderIndex(kind, main);
    applyIndexDomain(kind);
    scrollToHash();
    ensureVisible(main, main);
  }

  /**
   * §10 de CONTRACT-V3: método público para que la capa v2 sepa en qué dominio
   * está la página sin tener que reescribirse. `js/features.js` todavía no lo
   * consume: hoy resuelve el artículo con `PW.get(slug)`, que por aridad sigue
   * siendo ideologías.
   */
  PW.current = function current() {
    var kind = PW.kindOf(queryParam('tipo'));
    var slug = queryParam('title');
    return {
      page: currentPage(),
      kind: kind,
      slug: slug,
      entry: slug ? PW.get(kind, slug) : null
    };
  };

  PW.boot = function boot() {
    try {
      removeLoading();
      bindDomainSwitcher();
      if (currentPage() === 'article') {
        renderArticlePage();
      } else {
        renderHomePage();
      }
    } catch (error) {
      console.error('PW.boot: error inesperado durante el arranque.', error);
      renderEmpty(
        mainEl(),
        'Error de carga',
        'No se ha podido mostrar el contenido de esta página.'
      );
    }
  };

  onReady(function () { PW.boot(); });
})(window.PW = window.PW || {});
