# politics-wiki — CONTRATO TÉCNICO

> Este documento es la **fuente de verdad** del proyecto. Todo el código debe
> cumplirlo exactamente. No introduzcas campos, clases ni tipos de bloque que no
> estén listados aquí sin actualizar antes este documento.

---

## 1. Principios de arquitectura

| Decisión | Valor | Motivo |
|---|---|---|
| Build | **Ninguno** | Cero `npm install`. Se abre con doble clic en `index.html`. |
| Módulos | **Scripts clásicos** (`<script src>` sin `type="module"`) | Los ES modules fallan por CORS en `file://`. |
| Carga de datos | **Scripts JS, nunca `fetch()`** | `fetch` falla por CORS en `file://`. El contenido se registra en el objeto global `PW`. |
| Namespace | `window.PW` | Único punto de acoplamiento entre HTML, CSS y datos. |
| Idioma | Español (es-ES) | Contenido, UI y `lang="es"`. |
| Rutas | Estilo Wikipedia: `article.html?title=slug` | Authenticidad + URLs navegables. |
| Links externos | `_blank` + `rel="noopener noreferrer"` | Noropenesco. |

### Orden de carga en ambas páginas HTML (obligatorio)

```html
<!-- 1. Datos: un <script> por artículo, ANTES del renderizador -->
<script src="js/data/capitalismo.js"></script>
<script src="js/data/comunismo.js"></script>
<!-- ... resto de artículos ... -->

<!-- 2. Lógica -->
<script src="js/render.js"></script>
<script src="js/search.js"></script>
<script src="js/app.js"></script>
```

`render.js` expone `window.PW.render` y define `PW.register()`.
`app.js` se ejecuta al final y es el único punto de arranque (boot).

---

## 2. Estructura de archivos

```
politics-wiki/
├── index.html              Portada + catálogo (dominios ideology/partido/geopolitica/organizacion)
├── article.html            Visor de ficha
├── css/
│   └── wiki.css            Design system completo (única hoja de estilos)
├── js/
│   ├── data/
│   │   ├── <slug>.js           Ideologías, en la raíz de data/ — 23
│   │   ├── geo/<slug>.js       Geopolítica — 8
│   │   ├── orgs/<slug>.js      Organizaciones — 10
│   │   └── parties/<slug>.js   Partidos — 24
│   ├── render.js           PW.render + PW.register
│   ├── search.js           PW.search
│   ├── features.js         Capa de interfaz de lectura
│   └── app.js              Router / conmutador de dominio / boot
├── serve.js                Servidor estático sin dependencias
├── package.json
├── CONTRACT.md             Contrato base (v1)
├── CONTRACT-V3.md          Extensión de los dominios nuevos
└── README.md
```

Los 86 ficheros de datos viven bajo `js/data/`: las ideologías en la raíz y los cuatro
dominios nuevos en `parties/`, `gobiernos/`, `geo/` y `orgs/`. No existe `404.html`.

---

## 3. Esquema de datos de un artículo

Cada archivo `js/data/<slug>.js` tiene esta forma **exacta**:

```js
(function (PW) {
  'use strict';
  PW.articles['<slug>'] = {
    // --- Metadatos ---
    slug: 'capitalismo',                 // clave; debe coincidir con el nombre del archivo
    title: 'Capitalismo',                 // título visible del artículo
    subtitle: 'Sistema económico basado en la propiedad privada de los medios de producción',
    category: 'Ideologías económicas',     // una sola, para agrupar en la portada
    tags: ['economía', 'propiedad privada', 'mercado'],  // 3-6, para la búsqueda
    updated: '2026-09-27',                // ISO 'YYYY-MM-DD'
    summary: 'Párrafo de apertura (lead) de una o dos frases, sin formato HTML.',

    // --- Infobox opcional (panel de datos a la derecha) ---
    infobox: {
      caption: 'Capitalismo',             // título del panel
      color: '#2a4b8d',                   // color de acento de la cabecera (hex)
      rows: [                              // pares [etiqueta, valor]
        ['Origen', 'Siglo XVI'],
        ['Ámbito', 'Global'],
        ['También', 'Economía de mercado']
      ]
    },

    // --- Secciones del cuerpo (obligatorio, >= 3) ---
    sections: [
      {
        id: 'etimologia',                  // slug único dentro del artículo
        heading: 'Etimología',             // encabezado visible
        blocks: [ /* ver §4 */ ]
      }
    ],

    // --- Metadatos wiki ---
    categories: ['Capitalismo', 'Sistemas económicos'],  // 2-4, se muestran al final
    related: ['marxismo', 'socialismo', 'capitalismo-de-estado'],  // 3-5 slugs existentes
    references: [                          // >= 3 entradas, fuentes reales
      { title: 'El capital', author: 'Karl Marx', publisher: 'Librería El Pueblo', year: 1867, url: 'https://...', type: 'libro' }
    ]
  };
})(window.PW = window.PW || { articles: {} });
```

### Campos obligatorios

`slug`, `title`, `subtitle`, `category`, `tags`, `updated`, `summary`, `sections`, `categories`, `related`, `references`.

### Campos opcionales

`infobox` (si se omite, el artículo se renderiza sin panel lateral).

### Restricciones

- `slug` en kebab-case, sin espacios ni acentos: `capitalismo-de-estado`.
- `id` de sección en kebab-case, único dentro del artículo, sin acentos.
- Todos los `related` **deben existir** como slug en el proyecto.
- Nada de HTML dentro de los textos: usa el marcado en línea del §5.

---

## 4. Tipos de bloque del cuerpo

`sections[].blocks[]` es un array de objetos `type`. Estos son los **únicos**
tipos permitidos:

| `type` | Campos | Se renderiza como |
|---|---|---|
| `'p'` | `text` | `<p class="pw-p">` |
| `'ul'` | `items: string[]` | `<ul class="pw-list">` con `<li>` |
| `'ol'` | `items: string[]` | `<ol class="pw-list pw-list-num">` con `<li>` |
| `'dl'` | `items: [[term, def], ...]` | `<dl class="pw-dl">` con `<dt>`/`<dd>` |
| `'quote'` | `text`, `cite` (opcional), `author` (opcional) | `<blockquote class="pw-quote">` |
| `'table'` | `head: string[]`, `rows: string[][]` | `<table class="pw-wtable">` con `<thead>`/`<tbody>` |
| `'note'` | `text` | `<div class="pw-note">` con etiqueta "Nota" |
| `'figure'` | `caption`, `credit` (opcional) | `<figure class="pw-figure">` con marco de ilustración |

Reglas:

- Un artículo tiene entre **4 y 8 secciones**, la primera normalmente `Historia`
  o `Orígenes`, y la última una variante de `Críticas` o `Legado`.
- Total de bloques por artículo: **25-70** (ampliado desde 25-50 el 29/09/2026 para
  dar margen a cronologías e historia). Artículos con 3 párrafos por sección.
- Cada bloque de párrafo: 2-5 frases, 40-90 palabras. Contenido sustantivo,
  nunca relleno.
- Las tablas se usan para **comparaciones** (tabla de variantes, cronología).
- Máximo 2 tablas y máximo 2 citas por artículo.

### Excepción por dominio: la ficha de España (`js/data/gobiernos/espana.js`)

`espana.js` es la **única** ficha que supera estos topes, y lo hace de forma
deliberada y documentada: 40 secciones, 189 bloques, 16 tablas y 8 citas.

Motivo: integra la historia política completa del país. Además de sus ocho
secciones del Estado constitucional de 1978, incorpora dentro del mismo
artículo las ocho secciones de la Segunda República (`sr-*`), las ocho de la
Guerra Civil (`gc-*`), las ocho del franquismo (`fr-*`) y las ocho de la
Transición (`tr-*`), en orden cronológico. Un periodo histórico de un Estado no
es «un gobierno más» del que hacer una ficha aparte: es la misma continuidad
institucional, y separarlo obligaba a duplicar la cabecera, la infobox y los
actores en cuatro artículos que competían entre sí en el catálogo.

Consecuencias prácticas de la excepción:

- Los `id` de las secciones absorbidas llevan **prefijo de periodo** (`sr-`,
  `gc-`, `fr-`, `tr-`) para no colisionar con los ocho `id` originales
  (`origen`, `corona`, `cortes`, `autonomias`, `justicia`, `economia`,
  `estado-social`, `exterior`), que se conservan sin cambios. Los cuatro
  `id` `balance-y-memoria` que compartían los cuatro periodos son ahora
  `sr-balance-y-memoria`, `gc-balance-y-memoria`, `fr-balance-y-memoria` y
  `tr-balance-y-memoria`.
- Los enlaces que antes iban a esas cuatro fichas se resuelven ahora con la
  sintaxis de ancla del §5 (`[[gob:espana#gc-golpe-de-estado|la guerra civil]]`).
- Los enlaces **entre secciones del propio artículo** también pueden llevar
  ancla, y es lo preferible cuando apuntan a otra sección y no al artículo
  entero.

**El resto de las fichas conserva 4-8 secciones sin excepción.** La excepción
es de un solo fichero, está escrita como tal en `LIMIT_EXCEPTIONS` de
`tools/pwcheck3.js` y es del mismo tipo que la excepción de `maxTables` por
dominio que fija CONTRACT-V3.md §5.5 (seis tablas en las fichas de gobierno
frente a dos en el resto): una decisión tomada sobre el contenido, no un límite
relajado para que una salida pase. `espana` no está en ninguna lista de
secciones exactas, porque el dominio `gobierno` no las tiene.

---

## 5. Marcado en línea (dentro de los campos de texto)

No se permite HTML. Se admite este marcado, en el orden de parseo indicado:

| Marcado | Resultado | Ejemplo |
|---|---|---|
| `[[slug\|Label]]` | `<a class="pw-wikilink" href="article.html?title=slug">Label</a>` | `[[marxismo\|Marx]]` |
| `[[slug]]` | Wikilink cuyo texto es el título del artículo de destino | `[[marxismo]]` |
| `'''texto'''` | `<strong>` | `'''destacado'''` |
| `''texto''` | `<em>` | `''énfasis''` |
| `[etiqueta\|https://url]` | `<a href target="_blank" rel="noopener noreferrer">` | `[Wikipedia](https://es.wikipedia.org/...)` |

### Anclas de sección: `[[prefijo:slug#id-seccion|texto]]`

Un wikilink puede apuntar a una sección concreta del artículo de destino
escribiendo su `id` tras el `#`:

| Marcado | Resultado |
|---|---|
| `[[gob:espana#fr-autarquia\|el franquismo]]` | `<a class="pw-wikilink" href="article.html?tipo=gobierno&title=espana#fr-autarquia">el franquismo</a>` |
| `[[espana#origen]]` | Ídem, con el texto del título del artículo |
| `[[slug]]` | Sin ancla: se comporta exactamente como hasta ahora |

Reglas:

1. El `#` va **siempre después del slug**, nunca antes del prefijo:
   `gob:espana#sr-x` es prefijo `gob` + slug `espana` + ancla `sr-x`.
2. El `id` de la ancla **debe existir** como `id` de una sección del artículo de
   destino (el `id` que lleva su `<h2>`, y por tanto el que aparece en el índice
   de contenido). Si el artículo existe pero la sección no, el enlace se trata
   como roto: se dibuja `pw-wikilink-missing` y `render.js` avisa por
   `console.error` con el slug y el `id` que no encontró.
3. Sin etiqueta y con ancla, el texto del enlace es el título del artículo; con
   etiqueta, la etiqueta. Igual que sin ancla.
4. `related` **no** admite anclas: son slugs, y la tarjeta lleva al artículo
   completo.
5. Un enlace con ancla a otra sección **del propio artículo** está permitido y
   es lo preferible cuando el enlace es a una sección concreta y no al artículo
   entero.

Reglas de parseo:

1. Se extraen primero los `[[...]]` y `[...]` sustituyéndolos por tokens
   internos (para permitir marcado dentro de su etiqueta).
2. Se aplican `'''...'''` y `''...''` sobre el texto restante.
3. Se escapan los `<` y `>` del texto plano antes de insertar etiquetas.
4. Un wikilink a un slug inexistente se renderiza como
   `<a class="pw-wikilink pw-wikilink-missing">` (rojo punteado) **y** muestra
   el título en un `title="artículo pendiente"`. Una ancla que no corresponde a
   ninguna sección se dibuja igual, con el mismo aviso por `console.error`.

Los validadores de `tools/` reproducen esta resolución en lugar de suponerla:
`pwcheck3.js` (`checkLinks`) y `linkcheck.js` rechazan tanto el destino
inexistente como la sección inexistente; `refcheck.js` no le afecta porque solo
mira `references[].url`.

---

## 6. Contrato de DOM y clases CSS

**Toda clase usada en HTML/JS debe estar definida en `css/wiki.css`.**
Los autores de CSS no inventes HTML; los autores de JS no inventes clases.
Esta tabla es la frontera entre ambos.

### 6.1 Estructura global (presente en `index.html` y `article.html`)

```html
<body class="pw-body">
  <header class="pw-header">
    <a class="pw-brand" href="index.html">
      <span class="pw-brand-mark">PW</span>
      <span class="pw-brand-text">Politics Wiki</span>
    </a>
    <form class="pw-search" role="search" autocomplete="off">
      <input class="pw-search-input" type="search" placeholder="Buscar artículos..." aria-label="Buscar">
      <div class="pw-search-results" hidden></div>
    </form>
    <nav class="pw-header-links">
      <a class="pw-header-link" href="index.html#articulos">Artículos</a>
      <a class="pw-header-link" href="index.html#categorias">Categorías</a>
    </nav>
  </header>

  <div class="pw-layout">
    <nav class="pw-sidebar" aria-label="Navegación principal">
      <div class="pw-sidebar-title">Navegación</div>
      <ul class="pw-nav-list">
        <li class="pw-nav-item"><a class="pw-nav-link pw-nav-link-active" href="index.html">Portada</a></li>
        <!-- más .pw-nav-item / .pw-nav-link -->
      </ul>
      <div class="pw-sidebar-title">Ideologías</div>
      <ul class="pw-nav-list">...</ul>
    </nav>

    <main class="pw-main"><!-- contenido renderizado por JS --></main>
  </div>

  <footer class="pw-footer">
    <p class="pw-footer-text">El contenido de este sitio está disponible bajo licencia CC BY-SA 4.0.</p>
  </footer>
</body>
```

### 6.2 Vista de artículo (`article.html`)

```html
<div class="pw-article">
  <nav class="pw-breadcrumb" aria-label="Migas de pan">
    <a class="pw-breadcrumb-link" href="index.html">Portada</a>
    <span class="pw-breadcrumb-sep">›</span>
    <span class="pw-breadcrumb-current">Capitalismo</span>
  </nav>

  <h1 class="pw-title">Capitalismo</h1>
  <p class="pw-subtitle">Sistema económico basado en ...</p>

  <div class="pw-article-actions">
    <span class="pw-tag pw-tag-category">Ideologías económicas</span>
    <span class="pw-tag pw-tag-updated">Actualizado: 27 sep 2026</span>
  </div>

  <div class="pw-content">
    <div class="pw-text">
      <p class="pw-p pw-lead">Párrafo lead.</p>
      <!-- bloques -->
      <h2 class="pw-h2"><span class="pw-headline">Etimología</span></h2>
      <div class="pw-editlink">[<a href="#">editar</a>]</div>
      <!-- ... -->
      <div class="pw-references-wrap">
        <h2 class="pw-h2"><span class="pw-headline">Referencias</span></h2>
        <ol class="pw-references">...</ol>
      </div>
      <div class="pw-catlinks">
        <span class="pw-catlinks-label">Categorías</span>
        <ul class="pw-catlinks-list">...</ul>
      </div>
    </div>

    <aside class="pw-aside">
      <div class="pw-toc">
        <div class="pw-toc-title">Contenido</div>
        <ul class="pw-toc-list">
          <li class="pw-toc-item"><a class="pw-toc-link" href="#etimologia">Etimología</a></li>
          <!-- uno por sección -->
        </ul>
      </div>
      <table class="pw-infobox">...</table>
    </aside>
  </div>

  <section class="pw-related">
    <h2 class="pw-h2"><span class="pw-headline">Artículos relacionados</span></h2>
    <div class="pw-related-grid">...</div>
  </section>
</div>
```

### 6.3 Bloques renderizados

| Clase | Elemento | Notas |
|---|---|---|
| `.pw-p` | párrafo normal | `line-height` generoso, sangría francesa |
| `.pw-lead` | primer párrafo | Negrita en el texto, estilo introductorio |
| `.pw-h2` | `h2` de sección | Contiene `.pw-headline` (ancla navegable) |
| `.pw-h3` | `h3` de subsección | Igual que `.pw-h2`, un nivel menor |
| `.pw-list` | `ul` / `ol` | Viñetas y numeración |
| `.pw-dl` | `dl` | Término en negrita + definición |
| `.pw-quote` | `blockquote` | Barra lateral, cursiva, autor alineado a la derecha |
| `.pw-wtable` | `table` | Bordes, zebra, cabeceras con fondo |
| `.pw-note` | `div` | Fondo suave, borde izquierdo, prefijo "Nota" |
| `.pw-figure` | `figure` | Marco de ilustración + pie de foto |
| `.pw-wikilink` | `a` | Azul de enlace wiki; `.pw-wikilink-missing` en rojo punteado |
| `.pw-references` | `ol` | Numeración `[1]`, texto pequeño |
| `.pw-catlinks` | `div` | Chips de categoría |
| `.pw-infobox` | `table` | Panel de datos: cabecera con `background` inline desde `infobox.color` |

### 6.4 Vista de portada (`index.html`)

```html
<div class="pw-home">
  <section class="pw-hero">
    <h1 class="pw-hero-title">Enciclopedia de Ideologías Políticas</h1>
    <p class="pw-hero-sub">Historia, doctrina y figuras de los principales
       movimientos políticos y económicos de la era moderna.</p>
  </section>

  <section class="pw-section" id="articulos">
    <h2 class="pw-h2"><span class="pw-headline">Artículos</span></h2>
    <div class="pw-card-grid">   <!-- una .pw-card por artículo -->
      <a class="pw-card" href="article.html?title=capitalismo">
        <span class="pw-card-title">Capitalismo</span>
        <span class="pw-card-sub">Subtítulo corto</span>
        <span class="pw-card-text">Resumen de 2 líneas</span>
        <span class="pw-card-meta">Ideologías económicas</span>
      </a>
    </div>
  </section>

  <section class="pw-section" id="categorias">...</section>
  <section class="pw-section" id="buscador">...</section>
</div>
```

### 6.5 Buscador

```html
<div class="pw-search-results">
  <a class="pw-search-item" href="article.html?title=capitalismo">
    <span class="pw-search-item-title">Capitalismo</span>
    <span class="pw-search-item-sub">Ideologías económicas</span>
  </a>
</div>
```

---

## 7. API pública (lo que `js/*.js` debe exponer)

```js
window.PW = {
  articles: { '<slug>': { /* ver §3 */ } },
  register(article) {},                       // js/data/*.js  ->  PW.articles[slug] = article
  list()  -> Array<{slug,title,subtitle,category,summary,tags}>,   // orden alfabético por title
  get(slug) -> article|null,
  byCategory() -> { '<categoría>': Array<artículo> },
  categories() -> string[],
  renderArticle(article, rootEl) -> void,     // pinta en el DOM
  renderHome(rootEl) -> void,
  escapeHtml(str) -> string,
  inline(str) -> string,                      // §5
  search(query, limit) -> Array<{article, score}>,
  boot() -> void                              // app.js: enruta por location.search
};
```

Reglas de implementación:

- **Cero dependencias externas.** Solo JS del navegador.
- **Cero `fetch`, cero `import`, cero `export`.**
- Todo error de render debe registrarse en `console.error` con contexto y mostrar
  un estado vacío legible en el DOM, nunca una pantalla en blanco.
- `boot()` se invoca con `DOMContentLoaded` (o inmediatamente si el DOM ya está
  listo). Debe funcionar aunque se cargue al final del `<body>`.

---

## 8. Dirección de diseño

Objetivo: **evocar MediaWiki, no copiar Wikipedia**. Se busca que un lector
ignore la interfaz y solo lea el artículo, pero que la estructura
(encabezados, TOC, infobox, referencias, chips de categoría) sea
inequívocamente de enciclopedia.

- Tipografía: un nombre serif para títulos y otro sans para interfaz y cuerpo.
  Fuentes del sistema; **sin peticiones de red ni webfonts**.
- Paleta: blanco cálido, tinta oscura, un azul de enlace wiki, un gris de
  borde. Un color de acento por artículo, tomado de `infobox.color`.
- Bordes: 1px sólido gris claro. Sombras: mínimas (solo hover y panel infobox).
- Densidad: columnas de texto de 68-75 caracteres. Interlineado 1.65-1.75.
- Responsive: sidebar como columna fija ≥1024px; apilado y plegable por debajo.

---

## 9. Reglas de contenido

1. **Neutralidad.** Descripción equilibrada de la doctrina, sus variantes, sus
   críticas internas y externas. Sin juicios de valor, sin defender una opción.
2. **Precisión histórica.** Fechas, autores y hechos verificables. Nada
   inventado. Si un dato es disputado, se señala como disputa.
3. **Atribución de fuentes.** Toda cifra, dato histórico o afirmación fuerte
   necesita una entrada en `references` con autor, editorial y año reales.
   Fuentes admisibles: obras originales, repositorios públicos (Wikisource,
   Marxists Internet Archive), Britannica, fuentes académicas, enciclopedias
   y documentos oficiales.
4. **Sin antropomorfismo.** No se usan nombres propios de personas vivas como
   delegados de una organización sin documentar claramente su postura.
5. **Español neutro.** Evitar regionalismos marcados; nada de voseo.
6. `summary` y `subtitle` deben poder leerse aislados y tener sentido propio.
7. Terminología política: se usa el término estándar y, en la primera aparición,
   el sinónimo entre paréntesis si es de uso corriente (`bienestar social
   (welfare state)`).
