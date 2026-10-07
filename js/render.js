/* politics-wiki · js/render.js
 * Renderizador de artículos y portada. Script clásico (sin módulos, sin build)
 * para que también funcione abierto con file://. Ver CONTRACT.md §3-§7.
 *
 * allow: SIZE_OK — CONTRACT.md §2 obliga a que la lógica viva en exactamente
 * estos tres ficheros de js/ y §1 garantiza un orden de carga único; partir el
 * renderizador en más módulos exigiría un bundler y rompería el requisito de
 * "cero dependencias". El fichero está dividido en secciones por responsabilidad.
 *
 * v3 — CONTRACT-V3.md: cinco dominios. `ideologia` conserva exactamente el
 * comportamiento de v1; `partido`, `geopolitica` y `organizacion` se añaden
 * encima, reutilizando el mismo renderizador de secciones y bloques.
 */
(function (PW) {
  'use strict';

  /* ================================================================
   * 0 · Los cinco dominios (CONTRACT-V3.md §2)
   * ================================================================ */

  var KINDS = ['ideologia', 'partido', 'gobierno', 'geopolitica', 'organizacion', 'pensador', 'concepto'];

  /** Registro, etiqueta y clave de agrupación de cada dominio (§7). */
  var DOMAINS = {
    ideologia: {
      registry: 'articles',
      label: 'Ideologías',
      group: 'category',
      groupFallback: 'Sin categoría',
      groupSort: 'title'
    },
    partido: {
      registry: 'parties',
      label: 'Partidos',
      group: 'country',
      groupFallback: 'Sin país',
      groupSort: 'title'
    },
    gobierno: {
      registry: 'gobiernos',
      label: 'Gobiernos',
      group: 'region',
      groupFallback: 'Sin región',
      groupSort: 'title'
    },
    geopolitica: {
      registry: 'geo',
      label: 'Geopolítica',
      group: 'region',
      groupFallback: 'Sin región',
      groupSort: 'title'
    },
    organizacion: {
      registry: 'orgs',
      label: 'Organizaciones',
      group: 'orgType',
      groupFallback: 'Sin tipo',
      groupSort: 'shortName'
    },
    // `pensador` y `concepto` son prosa como `ideologia`: se agrupan por su
    // `category` y se ordenan por titulo, asi que reutilizan su configuracion
    // sin ningun caso especial.
    pensador: {
      registry: 'pensadores',
      label: 'Pensadores',
      group: 'category',
      groupFallback: 'Pensadores',
      groupSort: 'title'
    },
    concepto: {
      registry: 'conceptos',
      label: 'Conceptos',
      group: 'category',
      groupFallback: 'Conceptos',
      groupSort: 'title'
    }
  };

  /** Sinónimos aceptados en `?tipo=` y en los prefijos de wikilink (§6). */
  var ALIASES = {
    ideologia: 'ideologia',
    ideologias: 'ideologia',
    ideology: 'ideologia',
    partido: 'partido',
    partidos: 'partido',
    party: 'partido',
    gobierno: 'gobierno',
    gobiernos: 'gobierno',
    gob: 'gobierno',
    gobs: 'gobierno',
    government: 'gobierno',
    governments: 'gobierno',
    estado: 'gobierno',
    estados: 'gobierno',
    state: 'gobierno',
    states: 'gobierno',
    pais: 'gobierno',
    paises: 'gobierno',
    country: 'gobierno',
    countries: 'gobierno',
    geo: 'geopolitica',
    geopolitica: 'geopolitica',
    geopoliticas: 'geopolitica',
    geopolitics: 'geopolitica',
    organizacion: 'organizacion',
    organizaciones: 'organizacion',
    organization: 'organizacion',
    org: 'organizacion',
    orgs: 'organizacion',
    pensador: 'pensador',
    pensadores: 'pensador',
    thinker: 'pensador',
    concepto: 'concepto',
    conceptos: 'concepto',
    concept: 'concepto'
  };

  /**
   * Los cinco registros existen siempre, sea cual sea el orden de carga.
   * Los 9 scripts v1 crean `window.PW` con `window.PW || { articles: {} }`:
   * como aquí `window.PW` ya existe, ese `||` no puede borrar lo que se crea
   * a continuación. Y al revés: un script de datos nuevo que llegue después
   * de este fichero encuentra ya `PW.parties`, `PW.geo` y `PW.orgs`.
   */
  KINDS.forEach(function (kind) { registry(kind); });

  var MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  var ARTICLE_URL = 'article.html?title=';
  var SAFE_URL = /^https?:\/\//i;
  var HEX_COLOR = /^#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
  // Dos espacios de nombres de token distintos: un enlace nunca puede ser
  // restaurado con el HTML del almacén de énfasis (y viceversa).
  var LINK_OPEN = '\u0001';
  var LINK_CLOSE = '\u0002';
  var MARK_OPEN = '\u0003';
  var MARK_CLOSE = '\u0004';

  /* ================================================================
   * 1 · Texto: escape (§5) y marcado en línea
   * ================================================================ */

  /** Escapa los cinco caracteres de HTML. Seguro también dentro de atributos. */
  function escapeHtml(str) {
    if (str === null || str === undefined) { return ''; }
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /** Paso 3 del §5: el texto plano sólo necesita escapar `<` y `>`. */
  function escapeText(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /** Guarda un fragmento HTML y devuelve el token que lo representa. */
  function keep(store, html) {
    store.items.push(html);
    return store.open + (store.items.length - 1) + store.close;
  }

  /** Sustituye todos los tokens de un almacén por su HTML. */
  function restore(str, store) {
    if (!store.items.length) { return str; }
    return str.replace(store.pattern, function (_match, index) {
      var html = store.items[parseInt(index, 10)];
      return html === undefined ? '' : html;
    });
  }

  function tokenStore(open, close) {
    return { items: [], open: open, close: close, pattern: new RegExp(open + '(\\d+)' + close, 'g') };
  }

  /** Paso 2 del §5: `'''negrita'''` y `''cursiva''`, sin tocar el escapado. */
  function emphasize(text, marks) {
    return String(text)
      .replace(/'''([\s\S]+?)'''/g, function (_match, inner) {
        return keep(marks, '<strong>') + inner + keep(marks, '</strong>');
      })
      .replace(/''([\s\S]+?)''/g, function (_match, inner) {
        return keep(marks, '<em>') + inner + keep(marks, '</em>');
      });
  }

  /** Pasos 2 y 3 sobre un texto que ya no contiene enlaces (etiquetas, etc.). */
  function markup(text, marks) {
    return restore(escapeText(emphasize(text, marks)), marks);
  }

  /** Paso 1 del §5: extrae `[[slug|Etiqueta]]`, `[[slug]]` y `[etiqueta|url]`. */
  function extractLinks(text, links, marks) {
    return text
      .replace(/\[\[([^\]|]+)(?:\|([^\]]*))?\]\]/g, function (_match, slug, label) {
        return keep(links, wikilinkHtml(String(slug).trim(), label, marks));
      })
      .replace(/\[([^\]|]*)\|([^\]]+)\]/g, function (_match, label, url) {
        return keep(links, externalHtml(String(label), String(url).trim(), marks));
      });
  }

  /**
   * Convierte el marcado en línea del §5 en HTML seguro.
   * Orden fijo: enlaces → tokens, énfasis, escapado, restauración.
   */
  function inline(str) {
    if (str === null || str === undefined) { return ''; }
    var text = String(str);
    if (text === '') { return ''; }

    var links = tokenStore(LINK_OPEN, LINK_CLOSE);
    var marks = tokenStore(MARK_OPEN, MARK_CLOSE);

    text = extractLinks(text, links, marks);
    text = restore(escapeText(emphasize(text, marks)), marks);
    return restore(text, links);
  }

  /**
   * §5 y §6: `[[slug]]` busca en los cinco dominios y gana la ideología;
   * `[[partido:ppsoe]]` obliga al dominio. `[[gob:espana#fr-autarquia]]`
   * añade un ancla de sección: el destino se resuelve por la parte anterior
   * al `#` y, si existe y la sección tiene ese `id`, el `href` la lleva para
   * que el navegador salte al heading (que es quien lleva ese `id`). Un
   * destino inexistente se sigue dibujando rojo punteado, sin cambios
   * respecto a v1, y una ancla que no corresponde a ninguna sección se
   * trata como enlace roto.
   */
  function wikilinkHtml(raw, label, marks) {
    var parsed = splitPrefix(raw);
    var target = parsed.kind ? getIn(parsed.kind, parsed.base) : find(parsed.base);
    var given = label === null || label === undefined || String(label) === '';
    var fallback = parsed.kind ? parsed.base : String(raw === null || raw === undefined ? '' : raw);
    var text = given ? (target && target.title ? target.title : fallback) : String(label);
    var inner = markup(text, marks);

    if (!target) {
      // §5 regla 4: enlace rojo punteado, sin destino y con título explicativo.
      return '<a class="pw-wikilink pw-wikilink-missing" title="artículo pendiente">' + inner + '</a>';
    }
    if (parsed.anchor && !hasSection(target, parsed.anchor)) {
      // El destino existe pero la sección no: mismo tratamiento que roto.
      console.error(
        'PW.wikilinkHtml: "' + String(raw) + '" apunta a una sección inexistente de "' + target.slug + '".',
        parsed.anchor
      );
      return '<a class="pw-wikilink pw-wikilink-missing" title="artículo pendiente">' + inner + '</a>';
    }
    // El fragmento se añade fuera de `articleUrl`: la ruta no cambia, solo el
    // punto al que salta el navegador dentro del artículo de destino.
    var href = articleUrl(target);
    if (parsed.anchor) { href += '#' + parsed.anchor; }
    return '<a class="pw-wikilink" href="' + href + '">' + inner + '</a>';
  }

  /** ¿La entrada tiene una sección con ese `id`? Sin `sections` no hay anclas. */
  function hasSection(entry, id) {
    var sections = entry && Array.isArray(entry.sections) ? entry.sections : [];
    for (var i = 0; i < sections.length; i++) {
      if (sections[i] && sections[i].id !== undefined && String(sections[i].id) === id) { return true; }
    }
    return false;
  }

  /** Ruta de una entrada. Las ideologías conservan la URL de v1, sin `tipo`. */
  function articleUrl(entry) {
    if (!entry || !entry.slug) { return ARTICLE_URL; }
    var kind = KINDS.indexOf(entry.kind) >= 0 ? entry.kind : 'ideologia';
    // ARTICLE_URL ya lleva `?title=`: aquí solo se añade el slug.
    var title = encodeURIComponent(entry.slug);
    return kind === 'ideologia'
      ? ARTICLE_URL + title
      : 'article.html?tipo=' + encodeURIComponent(kind) + '&title=' + title;
  }

  function externalHtml(label, url, marks) {
    var inner = markup(label, marks);
    if (!SAFE_URL.test(url)) {
      console.error('PW.inline: se ignora un enlace con esquema no permitido.', url);
      return inner;
    }
    return '<a href="' + escapeHtml(url) + '" target="_blank" rel="noopener noreferrer">' + inner + '</a>';
  }

  /* ================================================================
   * 2 · Acceso a los datos (§3 y §7)
   * ================================================================ */

  /** Minúsculas y sin diacríticos, para comparar y para generar slugs. */
  function foldText(str) {
    var value = String(str === null || str === undefined ? '' : str).toLowerCase();
    if (typeof value.normalize === 'function') {
      value = value.normalize('NFD');
    }
    return value.replace(/[\u0300-\u036f]/g, '');
  }

  function slugify(str) {
    return foldText(str).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  function compareByTitle(a, b) {
    return String(a.title).localeCompare(String(b.title), 'es');
  }

  /** §7: en organizaciones, dentro del grupo manda el nombre corto. */
  function compareByShortName(a, b) {
    return String(a.shortName || a.title).localeCompare(String(b.shortName || b.title), 'es');
  }

  /** Normaliza y valida `?tipo=` o un prefijo de wikilink. Nunca lanza (§4). */
  function kindOf(value, quiet) {
    try {
      if (value === null || value === undefined) { return 'ideologia'; }
      var key = foldText(value).trim();
      if (!key) { return 'ideologia'; }
      if (KINDS.indexOf(key) >= 0) { return key; }
      if (ALIASES[key]) { return ALIASES[key]; }
      if (!quiet) {
        console.error('PW.kindOf: "?tipo=' + String(value) + '" no es un dominio conocido.', KINDS);
      }
      return 'ideologia';
    } catch (error) {
      if (!quiet) { console.error('PW.kindOf: no se pudo interpretar el dominio.', error); }
      return 'ideologia';
    }
  }

  function kindLabel(kind) {
    return DOMAINS[kind] ? DOMAINS[kind].label : DOMAINS.ideologia.label;
  }

  /** El registro de un dominio, creándolo si falta (§2). */
  function registry(kind) {
    var name = DOMAINS[kind].registry;
    if (!PW[name] || typeof PW[name] !== 'object') {
      PW[name] = {};
    }
    return PW[name];
  }

  /**
   * Completa los campos comunes que una entrada pueda no escribir (§5): `kind`,
   * `slug`, `title` y la clave de agrupación. Nunca pisa un valor del dato.
   */
  function normalizeEntry(kind, key, entry) {
    if (entry.kind !== kind) { entry.kind = kind; }
    if (!entry.slug) { entry.slug = key; }
    if (!entry.title) { entry.title = entry.shortName || entry.name || key; }
    if (!entry.category) { entry.category = entry[DOMAINS[kind].group] || ''; }
    return entry;
  }

  /**
   * Pasada de normalización de los cinco dominios: descarta lo que no sea un
   * objeto y completa lo que falte. Es idempotente y no toca el contenido.
   */
  function normalizeAll() {
    KINDS.forEach(function (kind) {
      var store = registry(kind);
      Object.keys(store).forEach(function (key) {
        var entry = store[key];
        if (!entry || typeof entry !== 'object') {
          delete store[key];
          console.error(
            'PW: se descarta la entrada "' + key + '" de ' + kind + ' porque no es un objeto.', entry
          );
          return;
        }
        normalizeEntry(kind, key, entry);
      });
    });
  }

  /**
   * Separa el prefijo de dominio de un wikilink (§6): `partido:ppsoe`.
   * Un prefijo desconocido no es un prefijo: el slug entero no existirá y el
   * enlace se dibuja rojo punteado, que es lo que corresponde.
   * También separa el ancla de sección: `gob:espana#fr-autarquia` da
   * `{ kind, base: 'espana', anchor: 'fr-autarquia' }`, de forma que la
   * resolución de destino siga usando solo `base` y el prefijo siga siendo
   * lo que va antes de los dos puntos, no antes del `#`.
   */
  function splitPrefix(raw) {
    var key = String(raw === null || raw === undefined ? '' : raw).trim();
    var cut = key.indexOf(':');
    var rest = cut > 0 ? key.slice(cut + 1).trim() : key;
    var hash = rest.indexOf('#');
    var base = hash >= 0 ? rest.slice(0, hash).trim() : rest;
    var anchor = hash >= 0 ? rest.slice(hash + 1).trim() : '';
    if (cut <= 0) { return { kind: null, base: base, anchor: anchor }; }
    var kind = ALIASES[foldText(key.slice(0, cut))];
    return kind
      ? { kind: kind, base: base, anchor: anchor }
      : { kind: null, base: base, anchor: anchor };
  }

  /** `PW.register` sigue siendo el alta de ideologías de §7, la de v1. */
  function register(article) {
    if (!article || typeof article !== 'object') {
      console.error('PW.register: se esperaba un objeto de artículo.', article);
      return null;
    }
    if (!article.slug) {
      console.error('PW.register: el artículo no tiene "slug".', article);
      return null;
    }
    var kind = DOMAINS[article.kind] ? article.kind : 'ideologia';
    registry(kind)[article.slug] = article;
    return normalizeEntry(kind, article.slug, article);
  }

  /**
   * Busca dentro de un dominio: clave exacta, slug plano y, por último, título.
   * Lo que devuelve siempre viene normalizado, así que un script de datos que
   * llegue después de `render.js` sirve igual que uno que llegó antes.
   */
  function getIn(kind, slug) {
    if (slug === null || slug === undefined) { return null; }
    var key = String(slug).trim();
    if (!key) { return null; }
    var store = registry(kind);
    if (store[key]) { return asEntry(kind, key, store[key]); }

    var flat = slugify(key);
    if (flat && store[flat]) { return asEntry(kind, flat, store[flat]); }

    // Estilo Wikipedia: `?title=Capitalismo de Estado` también debe funcionar.
    var folded = foldText(key);
    var keys = Object.keys(store);
    for (var i = 0; i < keys.length; i++) {
      var article = store[keys[i]];
      if (!article) { continue; }
      if (foldText(article.slug) === folded || foldText(article.title) === folded) {
        return asEntry(kind, keys[i], article);
      }
    }
    return null;
  }

  /**
   * Sobrecarga por aridad (CONTRACT-V3.md §4): con **un** argumento sigue
   * significando ideologías, que es lo que hace el código v1; con **dos** es
   * `PW.get('partido', 'ppsoe')`.
   */
  function get(a, b) {
    if (arguments.length > 1) { return getIn(kindOf(a, true), b); }
    return getIn('ideologia', a);
  }

  /**
   * Busca en los cinco dominios con la precedencia de §6
   * (ideología, partido, geopolítica, organización). Es lo que usan el
   * buscador y los wikilinks sin prefijo.
   */
  function find(slug) {
    for (var i = 0; i < KINDS.length; i++) {
      var entry = getIn(KINDS[i], slug);
      if (entry) { return entry; }
    }
    return null;
  }

  function asArticle(value) {
    return value && typeof value === 'object' ? value : null;
  }

  /** `asArticle` + normalización: lo que sale de `getIn` y de `find` está completo. */
  function asEntry(kind, key, value) {
    var entry = asArticle(value);
    return entry ? normalizeEntry(kind, key, entry) : null;
  }

  /** Igual que `get`: sin argumento es el catálogo de ideologías de v1. */
  function list(kind) {
    if (kind === null || kind === undefined || kind === '') { return listIn('ideologia'); }
    return listIn(kindOf(kind, true));
  }

  /** Etiquetas de búsqueda de cada dominio; las ideologías usan las suyas. */
  function derivedTags(kind, entry) {
    if (kind === 'ideologia') { return Array.isArray(entry.tags) ? entry.tags : []; }
    var tags = [];
    function add(value) {
      if (value === null || value === undefined || value === '') { return; }
      if (Array.isArray(value)) { value.forEach(add); return; }
      tags.push(String(value));
    }
    add(entry.ideologyLabel);
    add(entry.ideology);
    add(entry.orgType);
    add(entry.region);
    add(entry.countryRegion);
    add(entry.timeFrame);
    return tags;
  }

  /**
   * `PW.list()` sigue siendo el catálogo de ideologías de v1, campo por campo.
   * Los otros tres dominios añaden los datos que necesitan sus tarjetas (§8.2).
   */
  function listIn(kind) {
    var store = registry(kind);
    return Object.keys(store).map(function (key) {
      var article = normalizeEntry(kind, key, store[key]);
      var entry = {
        slug: article.slug || key,
        title: article.title || key,
        subtitle: article.subtitle || '',
        category: article.category || '',
        summary: article.summary || '',
        tags: derivedTags(kind, article)
      };
      if (kind === 'ideologia') { return entry; }
      entry.kind = kind;
      entry.name = article.name || '';
      entry.shortName = article.shortName || '';
      entry.orgType = article.orgType || '';
      entry.colors = Array.isArray(article.colors) ? article.colors : [];
      entry.ideologyLabel = article.ideologyLabel || '';
      entry.founded = article.founded === undefined || article.founded === null ? '' : article.founded;
      entry.country = article.country || '';
      entry.headquarters = article.headquarters || '';
      entry.members = article.members === undefined || article.members === null ? '' : article.members;
      entry.memberSince = article.memberSince || '';
      entry.region = article.region || '';
      entry.timeFrame = article.timeFrame || '';
      return entry;
    }).sort(compareByTitle);
  }

  function byCategory() {
    return byGroup('ideologia');
  }

  /**
   * Agrupa un dominio por su clave de §7: `category` en ideologías —igual que
   * hasta ahora—, `country` en partidos, `region` en geopolítica y `orgType` en
   * organizaciones, donde dentro del grupo manda el nombre corto. Trabaja sobre
   * la proyección de `listIn`, que es lo que pintan las tarjetas.
   */
  function byGroup(kind) {
    var domain = DOMAINS[kind];
    var groups = {};
    listIn(kind).forEach(function (entry) {
      var name = entry[domain.group] || domain.groupFallback;
      if (!groups[name]) { groups[name] = []; }
      groups[name].push(entry);
    });
    Object.keys(groups).forEach(function (name) {
      groups[name].sort(domain.groupSort === 'shortName' ? compareByShortName : compareByTitle);
    });
    return groups;
  }

  function categories() {
    return Object.keys(byCategory()).sort(function (a, b) {
      return a.localeCompare(b, 'es');
    });
  }

  /* ================================================================
   * 3 · Utilidades de DOM
   * ================================================================ */

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (text !== null && text !== undefined && text !== '') {
      node.textContent = String(text);
    }
    return node;
  }

  /** Elemento cuyo contenido pasa por el marcado en línea ya escapado (§5). */
  function richEl(tag, className, text) {
    var node = el(tag, className);
    node.innerHTML = inline(text);
    return node;
  }

  function clear(node) {
    while (node && node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  function pick(root, id) {
    var scope = root && root.querySelector ? root : document;
    return scope.querySelector('#' + id) || document.getElementById(id);
  }

  function formatDate(iso) {
    var parts = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(iso || '').trim());
    if (!parts) { return ''; }
    var month = MONTHS[parseInt(parts[2], 10) - 1];
    if (!month) { return ''; }
    return parseInt(parts[3], 10) + ' ' + month + ' ' + parts[1];
  }

  /* ================================================================
   * 4 · Bloques del cuerpo (§4): los 8 tipos permitidos
   * ================================================================ */

  function blockError(block, detail) {
    console.error(
      'PW.renderArticle: bloque de tipo "' + String(block && block.type) + '" ' + detail + '.',
      block
    );
    return null;
  }

  function inlineCell(tag, value) {
    var cell = el(tag);
    cell.innerHTML = inline(value);
    return cell;
  }

  function renderList(block, tag, className) {
    if (!Array.isArray(block.items) || !block.items.length) {
      return blockError(block, 'sin "items" utilizables');
    }
    var list = el(tag, className);
    block.items.forEach(function (item, index) {
      if (typeof item !== 'string') {
        console.error('PW.renderArticle: elemento ' + index + ' de la lista no es texto.', block);
        return;
      }
      list.appendChild(inlineCell('li', item));
    });
    return list.childNodes.length ? list : blockError(block, 'sin elementos válidos');
  }

  function renderDefList(block) {
    if (!Array.isArray(block.items) || !block.items.length) {
      return blockError(block, 'sin "items" utilizables');
    }
    var list = el('dl', 'pw-dl');
    block.items.forEach(function (pair, index) {
      if (!Array.isArray(pair) || pair.length < 2) {
        console.error('PW.renderArticle: el par ' + index + ' de la definición no es [término, definición].', block);
        return;
      }
      list.appendChild(el('dt', null, pair[0]));
      list.appendChild(inlineCell('dd', pair[1]));
    });
    return list.childNodes.length ? list : blockError(block, 'sin pares válidos');
  }

  function renderQuote(block) {
    if (!block.text) { return blockError(block, 'sin "text"'); }
    var quote = el('blockquote', 'pw-quote');
    quote.appendChild(inlineCell('p', block.text));

    var attribution = [];
    if (block.author) { attribution.push(String(block.author)); }
    if (block.cite) { attribution.push(String(block.cite)); }
    if (attribution.length) {
      quote.appendChild(inlineCell('cite', attribution.join(' — ')));
    }
    return quote;
  }

  function renderTable(block) {
    if (!Array.isArray(block.rows) || !block.rows.length) {
      return blockError(block, 'sin "rows" utilizables');
    }
    var table = el('table', 'pw-wtable');
    if (block.caption) { table.appendChild(el('caption', null, block.caption)); }

    if (Array.isArray(block.head) && block.head.length) {
      var head = el('thead');
      var headRow = el('tr');
      block.head.forEach(function (cell) {
        headRow.appendChild(inlineCell('th', cell));
      });
      head.appendChild(headRow);
      table.appendChild(head);
    }

    var body = el('tbody');
    block.rows.forEach(function (row, index) {
      if (!Array.isArray(row) || !row.length) {
        console.error('PW.renderArticle: la fila ' + index + ' de la tabla no es un array de celdas.', block);
        return;
      }
      var tr = el('tr');
      row.forEach(function (cell) {
        tr.appendChild(inlineCell('td', cell));
      });
      body.appendChild(tr);
    });
    table.appendChild(body);
    return table;
  }

  function renderNote(block) {
    if (!block.text) { return blockError(block, 'sin "text"'); }
    var note = el('div', 'pw-note');
    note.appendChild(el('span', 'pw-note-label', 'Nota'));
    note.appendChild(inlineCell('p', block.text));
    return note;
  }

  function renderFigure(block) {
    if (!block.caption) { return blockError(block, 'sin "caption"'); }
    var figure = el('figure', 'pw-figure');
    if (block.src) {
      var img = document.createElement('img');
      img.setAttribute('src', String(block.src));
      img.setAttribute('alt', block.alt ? String(block.alt) : String(block.caption));
      img.setAttribute('loading', 'lazy');
      figure.appendChild(img);
    }
    var caption = el('figcaption');
    caption.innerHTML = inline(block.caption);
    if (block.credit) {
      caption.appendChild(el('span', 'pw-figure-credit', block.credit));
    }
    figure.appendChild(caption);
    return figure;
  }

  /** Desvío único para los 8 tipos de bloque. Cualquier otro se registra y se salta. */
  function renderBlock(block) {
    if (!block || typeof block !== 'object') {
      console.error('PW.renderArticle: bloque no válido.', block);
      return null;
    }
    switch (block.type) {
      case 'p':
        return block.text ? richEl('p', 'pw-p', block.text) : blockError(block, 'sin "text"');
      case 'ul':
        return renderList(block, 'ul', 'pw-list');
      case 'ol':
        return renderList(block, 'ol', 'pw-list pw-list-num');
      case 'dl':
        return renderDefList(block);
      case 'quote':
        return renderQuote(block);
      case 'table':
        return renderTable(block);
      case 'note':
        return renderNote(block);
      case 'figure':
        return renderFigure(block);
      default:
        return blockError(block, 'tipo desconocido, se omite');
    }
  }

  /* ================================================================
   * 5 · Piezas del artículo (§6.2)
   * ================================================================ */

  function safeColor(value) {
    return typeof value === 'string' && HEX_COLOR.test(value.trim()) ? value.trim() : '';
  }

  function renderBreadcrumb(article) {
    var nav = el('nav', 'pw-breadcrumb');
    nav.setAttribute('aria-label', 'Migas de pan');
    var home = el('a', 'pw-breadcrumb-link', 'Portada');
    home.setAttribute('href', 'index.html');
    nav.appendChild(home);
    nav.appendChild(el('span', 'pw-breadcrumb-sep', '›'));
    nav.appendChild(el('span', 'pw-breadcrumb-current', article.title));
    return nav;
  }

  function renderHead(article, headerExtra) {
    var head = document.createDocumentFragment();
    // Lo específico de un dominio va antes del título: con ideologías no hay
    // extra y la cabecera sale idéntica a la de v1.
    if (headerExtra) { headerExtra(head); }
    var title = el('h1', 'pw-title', article.title);
    var accent = article.infobox ? safeColor(article.infobox.color) : '';
    if (accent) {
      // Excepción documentada al "sin estilos en línea": el color de acento.
      // Via CSSOM (style.setProperty) para seguir siendo compatible con una
      // CSP estricta sin 'unsafe-inline'.
      title.style.setProperty('--accent', accent);
    } else if (article.infobox && article.infobox.color) {
      console.error('PW.renderArticle: infobox.color no es un color hexadecimal válido.', article.infobox.color);
    }
    head.appendChild(title);
    if (article.subtitle) { head.appendChild(el('p', 'pw-subtitle', article.subtitle)); }
    return head;
  }

  function renderActions(article) {
    var box = el('div', 'pw-article-actions');
    if (article.category) {
      box.appendChild(el('span', 'pw-tag pw-tag-category', article.category));
    }
    var updated = formatDate(article.updated);
    if (updated) {
      box.appendChild(el('span', 'pw-tag pw-tag-updated', 'Actualizado: ' + updated));
    } else if (article.updated) {
      console.error('PW.renderArticle: "updated" no es una fecha ISO válida.', article.updated);
    }
    return box.childNodes.length ? box : null;
  }

  /**
   * §8.3: `.pw-section-featured` marca **una sola** sección por ficha, la
   * `practica` de un partido. Gana la primera que coincide y el resto se queda
   * sin marcar, aunque el artículo traiga más de una con ese criterio.
   */
  function featuredOnce(sections, extras) {
    var ids = extras && extras.featured;
    if (!ids || !ids.length) { return null; }
    for (var i = 0; i < sections.length; i++) {
      if (sections[i] && sections[i].id && ids.indexOf(String(sections[i].id)) >= 0) {
        return String(sections[i].id);
      }
    }
    return null;
  }

  function renderSectionHeading(section, featured) {
    var heading = el('h2', featured ? 'pw-h2 pw-section-featured' : 'pw-h2');
    if (section.id) { heading.setAttribute('id', String(section.id)); }
    heading.appendChild(el('span', 'pw-headline', section.heading));
    return heading;
  }

  function renderEditLink() {
    var box = el('div', 'pw-editlink');
    var link = el('a', null, 'editar');
    link.setAttribute('href', '#');
    box.appendChild(document.createTextNode('['));
    box.appendChild(link);
    box.appendChild(document.createTextNode(']'));
    return box;
  }

  function renderToc(sections) {
    var links = [];
    var toc = el('div', 'pw-toc');
    toc.appendChild(el('div', 'pw-toc-title', 'Contenido'));
    var list = el('ul', 'pw-toc-list');

    sections.forEach(function (section) {
      if (!section || !section.id) { return; }
      var item = el('li', 'pw-toc-item');
      var link = el('a', 'pw-toc-link', section.heading);
      link.setAttribute('href', '#' + section.id);
      item.appendChild(link);
      list.appendChild(item);
      links.push(link);
    });

    if (!links.length) { return null; }
    toc.appendChild(list);
    return { node: toc, links: links };
  }

  function renderInfobox(article) {
    var info = article.infobox;
    if (!info || typeof info !== 'object') { return null; }
    var rows = Array.isArray(info.rows) ? info.rows : [];
    if (!rows.length) {
      console.error('PW.renderArticle: "infobox" sin filas.', info);
      return null;
    }

    var table = el('table', 'pw-infobox');
    var head = el('thead');
    var headRow = el('tr');
    var headCell = el('th', null, info.caption || article.title);
    headCell.setAttribute('colspan', '2');
    var color = safeColor(info.color);
    if (color) {
      headCell.style.setProperty('background', color);
    } else if (info.color) {
      console.error('PW.renderArticle: infobox.color no es un color hexadecimal válido.', info.color);
    }
    headRow.appendChild(headCell);
    head.appendChild(headRow);
    table.appendChild(head);

    var body = el('tbody');
    rows.forEach(function (pair, index) {
      if (!Array.isArray(pair) || pair.length < 2) {
        console.error('PW.renderArticle: la fila ' + index + ' de la infobox no es [etiqueta, valor].', info);
        return;
      }
      var row = el('tr');
      row.appendChild(el('th', null, pair[0]));
      row.appendChild(inlineCell('td', pair[1]));
      body.appendChild(row);
    });
    table.appendChild(body);
    return table;
  }

  function renderReferences(article) {
    var refs = Array.isArray(article.references) ? article.references : [];
    if (!refs.length) {
      console.error('PW.renderArticle: el artículo "' + article.slug + '" no tiene "references".', article);
      return null;
    }
    var wrap = el('div', 'pw-references-wrap');
    var heading = el('h2', 'pw-h2');
    heading.appendChild(el('span', 'pw-headline', 'Referencias'));
    wrap.appendChild(heading);

    var list = el('ol', 'pw-references');
    refs.forEach(function (ref) {
      if (!ref || typeof ref !== 'object') {
        console.error('PW.renderArticle: referencia no válida.', ref);
        return;
      }
      var item = el('li');
      item.appendChild(document.createTextNode(referenceText(ref)));
      if (ref.url) {
        if (SAFE_URL.test(String(ref.url))) {
          var link = el('a', null, 'enlace');
          link.setAttribute('href', String(ref.url));
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
          item.appendChild(document.createTextNode(' '));
          item.appendChild(link);
        } else {
          console.error('PW.renderArticle: se omite una referencia con esquema no permitido.', ref.url);
        }
      }
      list.appendChild(item);
    });
    wrap.appendChild(list);
    return wrap;
  }

  /** Autor, título, editorial y año. `type` es opcional y no se muestra. */
  function referenceText(ref) {
    var parts = [];
    if (ref.author) { parts.push(String(ref.author)); }
    if (ref.title) { parts.push('«' + String(ref.title) + '»'); }
    if (ref.publisher) { parts.push(String(ref.publisher)); }
    if (ref.year !== null && ref.year !== undefined && ref.year !== '') {
      parts.push(String(ref.year));
    }
    return parts.length ? parts.join(', ') + '.' : 'Referencia sin datos.';
  }

  function renderCatlinks(article) {
    var names = Array.isArray(article.categories) ? article.categories : [];
    if (!names.length) {
      console.error('PW.renderArticle: el artículo "' + article.slug + '" no tiene "categories".', article);
      return null;
    }
    var box = el('div', 'pw-catlinks');
    box.appendChild(el('span', 'pw-catlinks-label', 'Categorías'));
    var list = el('ul', 'pw-catlinks-list');
    names.forEach(function (name) {
      // Los nombres de categoría wiki no son slugs: no hay página a la que enlazar.
      var item = el('li');
      item.appendChild(el('span', null, name));
      list.appendChild(item);
    });
    box.appendChild(list);
    return box;
  }

  function renderRelated(article) {
    var slugs = Array.isArray(article.related) ? article.related : [];
    if (!slugs.length) {
      console.error('PW.renderArticle: el artículo "' + article.slug + '" no tiene "related".', article);
      return null;
    }
    var grid = el('div', 'pw-related-grid');
    slugs.forEach(function (slug) {
      // §6: `related` admite los cinco dominios, con prefijo opcional.
      // `related` no admite anclas: la tarjeta lleva al artículo, no a una
      // sección, así que se resuelve por `base` y se descarta el `#ancla`.
      var parsed = splitPrefix(slug);
      var target = parsed.kind ? getIn(parsed.kind, parsed.base) : find(parsed.base);
      if (!target) { return; } // Slug inexistente: se omite en silencio, sin tarjeta rota.
      var card = el('a', 'pw-related-card');
      card.setAttribute('href', articleUrl(target));
      card.appendChild(el('span', 'pw-card-title', target.title));
      if (target.subtitle) {
        card.appendChild(el('span', 'pw-card-sub', target.subtitle));
      }
      grid.appendChild(card);
    });
    if (!grid.childNodes.length) { return null; }

    var section = el('section', 'pw-related');
    var heading = el('h2', 'pw-h2');
    heading.appendChild(el('span', 'pw-headline', 'Artículos relacionados'));
    section.appendChild(heading);
    section.appendChild(grid);
    return section;
  }

  /* ================================================================
   * 6 · Índice con scrollspy (un solo IntersectionObserver vivo)
   * ================================================================ */

  var spy = null;

  function stopSpy() {
    if (spy) {
      spy.disconnect();
      spy = null;
    }
  }

  function startSpy(headings, links) {
    stopSpy();
    if (typeof window.IntersectionObserver !== 'function') {
      console.error('PW.renderArticle: sin IntersectionObserver, el índice no se resalta.', headings);
      return;
    }

    var current = -1;
    var visible = [];

    function paint(index) {
      if (index === current || index < 0 || index >= links.length) { return; }
      if (current >= 0 && links[current]) {
        links[current].removeAttribute('aria-current');
      }
      current = index;
      links[index].setAttribute('aria-current', 'true');
    }

    var observer = new window.IntersectionObserver(function (entries) {
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

    headings.forEach(function (heading) { observer.observe(heading); });
    spy = observer;
    paint(0);
  }

  /* ================================================================
   * 7 · Vista de artículo
   * ================================================================ */

  /** Índice del primer bloque `p` de la primera sección: es el lead (§6.2). */
  function leadIndex(sections) {
    if (!sections.length) { return -1; }
    var blocks = sections[0] && sections[0].blocks;
    if (!Array.isArray(blocks)) { return -1; }
    for (var i = 0; i < blocks.length; i++) {
      if (blocks[i] && blocks[i].type === 'p' && blocks[i].text) { return i; }
    }
    return -1;
  }

  function renderBody(article, text, aside, extras) {
    var sections = Array.isArray(article.sections) ? article.sections : [];
    if (!sections.length) {
      console.error('PW.renderArticle: el artículo "' + article.slug + '" no tiene "sections".', article);
      text.appendChild(el('p', 'pw-p', 'Este artículo todavía no tiene secciones publicadas.'));
      return;
    }

    var lead = leadIndex(sections);
    if (lead >= 0) {
      text.appendChild(richEl('p', 'pw-p pw-lead', sections[0].blocks[lead].text));
    }

    // Ficha de un dominio: lo que va entre el lead y las secciones.
    if (extras && extras.afterLead) { extras.afterLead(text); }

    var featured = featuredOnce(sections, extras);
    var headings = [];
    sections.forEach(function (section, index) {
      if (!section || typeof section !== 'object') {
        console.error('PW.renderArticle: sección no válida en "' + article.slug + '".', section);
        return;
      }
      var heading = renderSectionHeading(section, section.id !== undefined && section.id === featured);
      if (section.id) { headings.push(heading); }
      text.appendChild(heading);
      text.appendChild(renderEditLink());

      var blocks = Array.isArray(section.blocks) ? section.blocks : [];
      if (!blocks.length) {
        console.error('PW.renderArticle: la sección "' + section.id + '" no tiene bloques.', section);
      }
      blocks.forEach(function (block, position) {
        if (index === 0 && position === lead) { return; } // ya emitido como lead
        var node = renderBlock(block);
        if (node) { text.appendChild(node); }
      });
    });

    var references = renderReferences(article);
    if (references) { text.appendChild(references); }
    var catlinks = renderCatlinks(article);
    if (catlinks) { text.appendChild(catlinks); }

    var toc = renderToc(sections);
    if (toc) { aside.appendChild(toc.node); }
    var infobox = renderInfobox(article);
    if (infobox) { aside.appendChild(infobox); }
    startSpy(headings, toc ? toc.links : []);
  }

  /**
   * Ficha completa. `extras` es lo único específico de un dominio (franja de
   * colores, chips, actores, contador de miembros y la sección destacada); con
   * `null` —ideologías y todo el código v1— el DOM es el de siempre.
   */
  function renderArticle(article, root, extras) {
    if (!root || typeof root.appendChild !== 'function') {
      console.error('PW.renderArticle: falta el elemento raíz donde pintar.', article);
      return;
    }
    if (!article || typeof article !== 'object') {
      console.error('PW.renderArticle: artículo no válido.', article);
      return;
    }

    stopSpy();
    clear(root);

    var wrap = el('div', 'pw-article');
    wrap.appendChild(renderBreadcrumb(article));
    wrap.appendChild(renderHead(article, extras && extras.header));
    var actions = renderActions(article);
    if (actions) { wrap.appendChild(actions); }
    if (extras && extras.afterActions) { extras.afterActions(wrap); }

    var content = el('div', 'pw-content');
    var text = el('div', 'pw-text');
    var aside = el('aside', 'pw-aside');
    renderBody(article, text, aside, extras);
    content.appendChild(text);
    if (aside.childNodes.length) { content.appendChild(aside); }
    wrap.appendChild(content);

    var related = renderRelated(article);
    if (related) { wrap.appendChild(related); }

    root.appendChild(wrap);
    if (article.title) { document.title = 'Politics Wiki — ' + article.title; }
  }

  /* ================================================================
   * 8 · Vista de portada (§6.4) y catálogos por dominio (§7)
   * ================================================================ */

  /** Tarjeta de ideología: exactamente la de v1, sin un solo cambio. */
  function ideologyCard(article) {
    var card = el('a', 'pw-card');
    card.setAttribute('href', ARTICLE_URL + encodeURIComponent(article.slug));
    card.appendChild(el('span', 'pw-card-title', article.title));
    card.appendChild(el('span', 'pw-card-sub', article.subtitle));
    card.appendChild(el('span', 'pw-card-text', article.summary));
    card.appendChild(el('span', 'pw-card-meta', article.category));
    return card;
  }

  /** ¿Tiene el actor al menos un color válido (para decidir si dibujar la franja)?
   *  Separado de applyFlagStyle para poder preguntar sin mutar un nodo. */
  function hasFlagColors(colors) {
    return (Array.isArray(colors) ? colors : []).some(function (c) { return !!safeColor(c); });
  }

  /** Aplica los colores de un actor al nodo vía CSSOM (compatible con CSP
   *  estricta sin 'unsafe-inline': setAttribute('style') quedaría bloqueado).
   *  Solo entra hexadecimal, ya validado por safeColor.
   *  Devuelve true si había colores y se aplicaron. */
  function applyFlagStyle(node, colors) {
    var safe = (Array.isArray(colors) ? colors : []).map(safeColor).filter(Boolean);
    if (!safe.length) { return false; }
    node.style.setProperty('--flag-a', safe[0]);
    node.style.setProperty('--flag-b', safe[1] || safe[0]);
    return true;
  }

  /** §8.2: franja de 4px con el color real del partido o de la organización. */
  function flagNode(colors) {
    var node = el('div', 'pw-card-flag');
    if (!applyFlagStyle(node, colors)) { return null; }
    return node;
  }

  function joinDot(first, second) {
    if (first && second) { return first + ' · ' + second; }
    return first || second || '';
  }

  function cardSubtitle(entry) {
    if (entry.kind === 'partido') { return joinDot(entry.name, entry.country); }
    if (entry.kind === 'organizacion') { return joinDot(entry.name, entry.headquarters); }
    return entry.subtitle || '';
  }

  function hasValue(value) {
    return value !== null && value !== undefined && value !== '';
  }

  /** Etiquetas cortas de la tarjeta: las de §8.2, con `.pw-tag` dentro. */
  function cardTags(entry) {
    var out = [];
    if (hasValue(entry.ideologyLabel)) { out.push(String(entry.ideologyLabel)); }
    if (hasValue(entry.orgType)) { out.push(String(entry.orgType)); }
    if (hasValue(entry.founded)) { out.push('fundado ' + entry.founded); }
    if (hasValue(entry.members)) { out.push(entry.members + ' miembros'); }
    if (hasValue(entry.region)) { out.push(String(entry.region)); }
    if (hasValue(entry.timeFrame)) { out.push(String(entry.timeFrame)); }
    return out;
  }

  /** Tarjeta de los dominios nuevos, con el marcado exacto de §8.2. */
  function domainCard(entry) {
    var card = el('a', 'pw-card');
    card.setAttribute('href', articleUrl(entry));

    var flag = flagNode(entry.colors);
    if (flag) { card.appendChild(flag); }

    var title = document.createElement('h3');
    title.className = 'pw-card-title';
    title.textContent = entry.title;
    card.appendChild(title);

    var sub = document.createElement('p');
    sub.className = 'pw-card-sub';
    sub.textContent = cardSubtitle(entry);
    card.appendChild(sub);

    if (hasValue(entry.summary)) {
      card.appendChild(el('p', 'pw-card-summary', entry.summary));
    }

    var meta = el('div', 'pw-card-meta');
    cardTags(entry).forEach(function (text) {
      meta.appendChild(el('span', 'pw-tag', text));
    });
    if (meta.childNodes.length) { card.appendChild(meta); }
    return card;
  }

  function renderCards(grid) {
    clear(grid);
    var articles = list();
    if (!articles.length) {
      console.error('PW.renderHome: no hay artículos registrados.');
      grid.appendChild(el('div', 'pw-empty', 'Todavía no hay artículos publicados.'));
      return;
    }
    articles.forEach(function (article) {
      grid.appendChild(ideologyCard(article));
    });
  }

  /**
   * Catálogo de un dominio (§7). Las ideologías conservan su portada de v1
   * tal cual; los otros tres dominios agrupan con el patrón ya existente,
   * `.pw-catgroup` + `.pw-catgroup-title`, y su propia rejilla de tarjetas.
   */
  function renderIndex(kind, root) {
    var scope = root && root.querySelector ? root : document;
    var target = kindOf(kind, true);
    if (target === 'ideologia') { return renderHome(scope); }

    var grid = pick(scope, 'articulos-grid');
    if (!grid) {
      console.error('PW.renderIndex: no se encuentra el punto de montaje #articulos-grid.');
      return;
    }
    clearSearchPanel(scope);
    clear(grid);

    var groups = byGroup(target);
    var names = Object.keys(groups).sort(function (a, b) {
      return a.localeCompare(b, 'es');
    });
    if (!names.length) {
      console.error('PW.renderIndex: no hay entradas de "' + target + '" registradas.');
      grid.appendChild(el('div', 'pw-empty', 'Todavía no hay entradas publicadas en este dominio.'));
      return;
    }

    names.forEach(function (name) {
      var group = el('section', 'pw-catgroup');
      group.appendChild(el('h3', 'pw-catgroup-title', name));
      var inner = el('div', 'pw-card-grid');
      groups[name].forEach(function (entry) {
        inner.appendChild(domainCard(entry));
      });
      group.appendChild(inner);
      grid.appendChild(group);
    });
  }

  function renderCategories(browse) {
    clear(browse);
    var groups = byCategory();
    var names = Object.keys(groups);
    if (!names.length) {
      console.error('PW.renderHome: no hay categorías que mostrar.');
      browse.appendChild(el('div', 'pw-empty', 'Todavía no hay categorías publicadas.'));
      return;
    }
    names.forEach(function (name) {
      browse.appendChild(el('h3', 'pw-h3', name));
      var list = el('ul', 'pw-list');
      groups[name].forEach(function (article) {
        var link = el('a', null, article.title);
        link.setAttribute('href', ARTICLE_URL + encodeURIComponent(article.slug));
        var item = el('li');
        item.appendChild(link);
        list.appendChild(item);
      });
      browse.appendChild(list);
    });
  }

  /**
   * Zona de resultados del buscador principal: se deja limpia y oculta;
   * search.js la rellena al escribir. La comparten la portada y los catálogos.
   */
  function clearSearchPanel(scope) {
    var hero = pick(scope, 'buscador-input');
    var results = hero ? hero.querySelector('.pw-search-results') : null;
    if (!results) {
      console.error('PW.renderHome: no se encuentra el panel de resultados del buscador principal.');
      return;
    }
    clear(results);
    results.hidden = true;
  }

  function renderHome(root) {
    var scope = root && root.querySelector ? root : document;

    var grid = pick(scope, 'articulos-grid');
    if (!grid) {
      console.error('PW.renderHome: no se encuentra el punto de montaje #articulos-grid.');
    } else {
      renderCards(grid);
    }

    var browse = pick(scope, 'categorias-browse');
    if (!browse) {
      console.error('PW.renderHome: no se encuentra el punto de montaje #categorias-browse.');
    } else {
      renderCategories(browse);
    }

    clearSearchPanel(scope);
  }

  /* ================================================================
   * 9 · Fichas de partido, geopolítica y organización (§8.3)
   *
   * No hay un segundo renderizador: las tres fichas llaman a `renderArticle`
   * con un pequeño `extras` que solo añade la franja de colores, los chips de
   * ideología, la rejilla de actores y el contador de miembros. Con ideologías
   * `extras` es `null` y el DOM es byte a byte el de v1.
   * ================================================================ */

  var POWER_LEVELS = ['alta', 'media', 'baja'];

  /** Donde se pinta una ficha si quien la llama no pasa el contenedor. */
  function mountRoot(root) {
    if (root && typeof root.appendChild === 'function') { return root; }
    var mount = pick(document, 'articulo');
    if (mount) { return mount; }
    var main = document.querySelector('main.pw-main') || document.querySelector('main');
    if (main) { return main; }
    console.error('PW.renderEntry: no se encuentra ni #articulo ni <main> donde pintar la ficha.');
    return null;
  }

  /** §8.3: franja de la cabecera de la ficha de partido. */
  function colorBar(colors, className) {
    var node = el('div', className);
    applyFlagStyle(node, colors);
    return node;
  }

  /**
   * §8.3: la etiqueta de ideología y las ideologías enlazadas del §5.2.
   * Solo se enlaza lo que existe de verdad en `PW.articles`.
   */
  function ideologyChips(entry) {
    var slugs = Array.isArray(entry.ideology) ? entry.ideology : [];
    if (!slugs.length && !entry.ideologyLabel) { return null; }
    var box = el('div', 'pw-ideology-chips');
    if (entry.ideologyLabel) { box.appendChild(el('span', 'pw-chip', entry.ideologyLabel)); }
    slugs.forEach(function (slug) {
      var target = find(slug);
      if (!target) {
        console.error('PW: la ideología "' + slug + '" del partido "' + entry.slug + '" no existe.', slug);
        return;
      }
      var link = el('a', 'pw-chip pw-wikilink');
      link.setAttribute('href', articleUrl(target));
      link.textContent = target.title;
      box.appendChild(link);
    });
    return box.childNodes.length ? box : null;
  }

  /** §8.3: quién decide en el asunto. El poder va en tinta, como texto. */
  function actorGrid(entry) {
    var actors = Array.isArray(entry.actors) ? entry.actors : [];
    if (!actors.length) { return null; }
    var grid = el('div', 'pw-actors');
    actors.forEach(function (actor, index) {
      if (!actor || typeof actor !== 'object') {
        console.error('PW.renderGeo: el actor ' + index + ' no es un objeto.', actor);
        return;
      }
      var card = el('div', 'pw-actor');
      card.appendChild(el('span', 'pw-card-title', actor.name || ''));
      if (actor.role) { card.appendChild(el('span', 'pw-card-sub', actor.role)); }
      if (actor.power) {
        var power = foldText(actor.power);
        if (POWER_LEVELS.indexOf(power) < 0) {
          console.error('PW.renderGeo: "power" debería ser alta, media o baja.', actor);
        }
        card.appendChild(el('span', 'pw-tag', 'potencia ' + String(actor.power)));
      }
      grid.appendChild(card);
    });
    return grid.childNodes.length ? grid : null;
  }

  /** §8.3: la cifra grande de miembros, con `memberSince` al lado. */
  function memberBox(entry) {
    if (!hasValue(entry.members) && !hasValue(entry.memberSince)) { return null; }
    var box = el('div', 'pw-member-count');
    if (hasValue(entry.members)) {
      box.appendChild(el('span', 'pw-card-title', String(entry.members)));
    } else {
      console.error('PW.renderOrg: la organización "' + entry.slug + '" no indica "members".', entry);
      box.appendChild(el('span', 'pw-card-title', '—'));
    }
    var side = 'miembros';
    if (hasValue(entry.memberSince)) { side += ' desde ' + entry.memberSince; }
    box.appendChild(el('span', 'pw-card-sub', side));
    return box;
  }

  /** Lo único específico de cada dominio. Las ideologías no tienen nada. */
  function domainExtras(kind, entry) {
    if (kind === 'partido') {
      return {
        // §8.3: una sola sección destacada por ficha, y es `practica`.
        featured: ['practica'],
        header: function (head) {
          if (hasFlagColors(entry.colors)) { head.appendChild(colorBar(entry.colors, 'pw-party-colors')); }
        },
        afterActions: function (wrap) {
          var chips = ideologyChips(entry);
          if (chips) { wrap.appendChild(chips); }
        }
      };
    }
    if (kind === 'geopolitica') {
      return {
        afterLead: function (text) {
          var grid = actorGrid(entry);
          if (grid) { text.appendChild(grid); }
        }
      };
    }
    if (kind === 'organizacion') {
      return {
        afterLead: function (text) {
          var members = memberBox(entry);
          if (members) { text.appendChild(members); }
        }
      };
    }
    if (kind === 'gobierno') {
      // Mismo trato que `geopolitica`: los actores de una ficha de Estado son
      // otros Estados y organizaciones, y `actors` es campo obligatorio del dominio.
      return {
        afterLead: function (text) {
          var grid = actorGrid(entry);
          if (grid) { text.appendChild(grid); }
        }
      };
    }
    return null;
  }

  /** Una entrada de cualquier dominio, resuelta a partir de su `kind`. */
  function renderEntry(entry, root) {
    var resolved = typeof entry === 'string' ? find(entry) : entry;
    if (!resolved || typeof resolved !== 'object') {
      console.error('PW.renderEntry: entrada no válida.', entry);
      return;
    }
    var kind = KINDS.indexOf(resolved.kind) >= 0 ? resolved.kind : 'ideologia';
    var target = mountRoot(root);
    if (!target) { return; }
    renderArticle(resolved, target, domainExtras(kind, resolved));
  }

  function renderParty(entry, root) {
    var resolved = typeof entry === 'string' ? getIn('partido', entry) : entry;
    if (!resolved) {
      console.error('PW.renderParty: no hay ningún partido para "' + entry + '".', entry);
      return;
    }
    renderEntry(resolved, root);
  }

  function renderGeo(entry, root) {
    var resolved = typeof entry === 'string' ? getIn('geopolitica', entry) : entry;
    if (!resolved) {
      console.error('PW.renderGeo: no hay ninguna ficha geopolítica para "' + entry + '".', entry);
      return;
    }
    renderEntry(resolved, root);
  }

  function renderOrg(entry, root) {
    var resolved = typeof entry === 'string' ? getIn('organizacion', entry) : entry;
    if (!resolved) {
      console.error('PW.renderOrg: no hay ninguna organización para "' + entry + '".', entry);
      return;
    }
    renderEntry(resolved, root);
  }

  /* ================================================================
   * 10 · API pública (§7 y CONTRACT-V3.md §4)
   * ================================================================ */

  // Normalización de arranque: los cinco registros existen y están completos
  // antes de que nadie pueda leerlos, sea cual sea el orden de carga.
  normalizeAll();

  PW.KINDS = KINDS;
  PW.register = register;
  PW.list = list;
  PW.get = get;
  PW.getIn = getIn;
  PW.find = find;
  PW.kindOf = kindOf;
  PW.kindLabel = kindLabel;
  PW.articleUrl = articleUrl;
  PW.byCategory = byCategory;
  PW.byGroup = byGroup;
  PW.categories = categories;
  PW.renderArticle = renderArticle;
  PW.renderEntry = renderEntry;
  PW.renderIndex = renderIndex;
  PW.renderParty = renderParty;
  PW.renderGeo = renderGeo;
  PW.renderOrg = renderOrg;
  PW.renderHome = renderHome;
  PW.escapeHtml = escapeHtml;
  PW.inline = inline;
  // §1 pide exponer `window.PW.render`; §7 nombra la misma función renderArticle.
  PW.render = renderArticle;
})(window.PW = window.PW || {});
