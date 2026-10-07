# politics-wiki — CONTRATO v3: Partidos, Geopolítica y Organizaciones

> **Extiende** a `CONTRACT.md` (sigue vigente).
> Este documento define **solo** el delta: los dominios nuevos, su esquema de
> datos, enrutado y las clases nuevas. Lo que no aparece aquí, no se toca.

---

## 1. Principio rector

El sitio tiene 9 ideologías que funcionan y están verificadas. Esta iteración
**añade tres dominios** y **amplía el primero**. Reglas duras:

- **No se rompe nada existente.** `article.html?title=capitalismo` sigue
  funcionando igual, sin parámetro nuevo.
- **Cero build, cero dependencias, sin módulos ES, sin `fetch`.** Debe seguir
  funcionando con doble clic bajo `file://`.
- Los datos de contenido van en ficheros **nuevos** que no existían. El motor
  se **extiende**; no se reescribe a ciegas.
- Toda la documentación de contenido sigue mandando: neutralidad, fuentes
  reales, sin regionalismos.

## 2. Los siete dominios

| Dominio | `tipo` | Registro | Ruta del fichero | Entradas |
|---|---|---|---|---|
| Ideologías | `ideologia` | `PW.articles` | `js/data/<slug>.js` | 9 → **29** |
| Partidos | `partido` | `PW.parties` | `js/data/parties/<slug>.js` | 24 → **30** |
| Gobiernos | `gobierno` | `PW.gobiernos` | `js/data/gobiernos/<slug>.js` | 15 → **21** |
| Geopolítica | `geopolitica` | `PW.geo` | `js/data/geo/<slug>.js` | 8 → **10** |
| Organizaciones | `organizacion` | `PW.orgs` | `js/data/orgs/<slug>.js` | **10** |
| Pensadores | `pensador` | `PW.pensadores` | `js/data/pensadores/<slug>.js` | **4** |
| Conceptos | `concepto` | `PW.conceptos` | `js/data/conceptos/<slug>.js` | **4** |

**Los agentes de contenido escriben un único fichero de datos.** No tocan
`index.html` ni `article.html`. Los `<script>` de las 108 entradas están escritos a
mano en los dos HTML y se mantienen en un único paso deliberado, no programático: el
sitio tiene que funcionar bajo `file://` sin `fetch`, así que no hay forma de generar
esa lista en tiempo de ejecución. La regla evita que 13 agentes se pisen los mismos
dos ficheros.

## 3. Rutas

| URL | Resultado |
|---|---|
| `index.html` | Portada, dominio `ideologia` (comportamiento actual) |
| `index.html?tipo=partido` | Catálogo de partidos, agrupado por país |
| `article.html?title=capitalismo` | Ideología (por defecto, sin cambios) |
| `article.html?tipo=partido&title=ppsoe` | Ficha de un partido |
| `article.html?tipo=geopolitica&title=guerra-ucrania` | Ficha geopolítica |
| `article.html?tipo=organizacion&title=onu` | Ficha de organización |

Reglas de enrutado, en orden de precedencia:

1. `tipo` ausente o vacío → `ideologia`.
2. `tipo` con un valor desconocido → `ideologia` (y `console.error`).
3. `title` ausente o slug inexistente → el estado "no encontrado" que ya existe.
4. La barra lateral se adapta al dominio activo.
5. `index.html?tipo=X` marca el dominio activo y actualiza el enlace canónico.

## 4. API nueva (en `render.js`)

Todo lo de `CONTRACT.md` §5 se conserva **intacto**. Se añade:

```js
PW.KINDS = ['ideologia', 'partido', 'geopolitica', 'organizacion'];

PW.kindOf(param)     // string: normaliza y valida ?tipo=; nunca lanza
PW.list(kind)        // Array<{slug, title, ...}> en orden alfabético es
PW.get(kind, slug)   // entrada | null
PW.renderIndex(kind) // catalogo, agrupado por la seccion 7
PW.renderIndex(kind) // catalogo, agrupado segun la seccion 7
PW.renderParty(entry)// ficha de partido
PW.renderGeo(entry)  // ficha de geopolítica
PW.renderOrg(entry)  // ficha de organización
```

**Compatibilidad:** `PW.list()` y `PW.get(slug)` con **un** argumento siguen
significando ideologías. `PW.get('partido', 'ppsoe')` es la forma de dos
argumentos. Es una sobrecarga por aridad, no un cambio de contrato: el código
v1 que llama `PW.get('capitalismo')` sigue funcionando sin tocarlo.

`PW.find(slug)` es lo que permite que el buscador y los wikilinks resuelvan
across dominios sin pedirle al usuario el tipo.

## 5. Esquemas de datos

Los cuatro campos comunes a todo dominio, obligatorios:
`slug`, `title`, `subtitle`, `summary`, `updated`, `sections`, `references`.
`kind` lo inyecta el propio fichero, no hay que escribirlo.

### 5.1 Ideología (`PW.articles`) — sin cambios

El catálogo completo son **108 entradas**: 29 ideologías, 30 partidos, 21 fichas de
gobierno, 10 de geopolítica, 10 organizaciones, 4 pensadores y 4 conceptos. Las 9
ideologías existentes del contrato original no se tocan.

### 5.2 Partido (`PW.parties`)

```js
(function (PW) {
  'use strict';
  // El init va AQUI, dentro del cuerpo, y no en el argumento del IIFE.
  // Los 9 articulos v1 se cargan antes y crean `window.PW = { articles: {} }`.
  // Como `window.PW` ya es truthy, un fallback en el argumento NO llega a
  // evaluarse nunca: `PW.parties` queda undefined y la asignacion revienta al
  // cargar la pagina. Este init defensivo es obligatorio en los 4 dominios.
  PW.parties = PW.parties || {};
  PW.parties['ppsoe'] = {
    kind: 'partido',
    slug: 'ppsoe',
    name: 'Partido Socialista Obrero Español',
    shortName: 'PSOE',
    country: 'España',
    countryCode: 'es',
    countryRegion: 'Sur de Europa',
    founded: 1879,
    headquarters: 'Madrid, España',
    leader: 'Pedro Sánchez',
    ideologyLabel: 'Centroizquierda',
    ideology: ['socialdemocracia', 'marxismo', 'reformismo'],
    colors: ['#b21d38', '#f0c000'],
    inGovernment: 'mayoría absoluta desde 2023',
    summary: 'Párrafo de una frase, sin formato, legible suelto.',
    infobox: {
      caption: 'PSOE',
      color: '#b21d38',
      rows: [['Fundación', '1879'], ['Líder', 'Pedro Sánchez'], ['Ideología', 'Centroizquierda']]
    },
    sections: [ /* 5 secciones, ids obligatorios: ver abajo */ ],
    related: ['socialdemocracia', 'reformismo', 'marxismo'],
    categories: ['PSOE', 'España'],
    references: [ /* mínimo 5 */ ]
  };
  PW.parties['ppsoe'].kind = 'partido';
})(window.PW = window.PW || { articles: {} });
```

Campos propios de un partido, todos **obligatorios**:

| Campo | Tipo | Regla |
|---|---|---|
| `name` | string | Nombre completo oficial |
| `shortName` | string | Siglas o nombre corto. Sin `undefined` |
| `country` | string | País. Es la **clave de agrupación** del catálogo |
| `countryCode` | string | ISO 3166-1 alfa-2 en minúsculas (`es`, `us`, `de`) |
| `countryRegion` | string | Región mundial. Estable, para agrupar países |
| `founded` | número | Año, sin comillas |
| `headquarters` | string | Ciudad, país |
| `leader` | string | Líder actual. Con fecha si es volátil |
| `ideologyLabel` | string | 1-3 palabras. `Centroizquierda`, `Derecha`, etc. |
| `ideology` | array de slugs | 2-4 slugs de **ideologías que existen**. Deben resolver |
| `colors` | array de 1-2 hex | Colores corporativos del partido |
| `inGovernment` | string | Situación actual. Con año |

**Nota sobre `countryCode` e `inGovernment`:** ambos campos son obligatorios y se validan, pero la UI actual **no los renderiza**. La bandera de una ficha se construye a partir de `colors` (colores corporativos mediante `flagNode()`/`colorBar()` en `js/render.js`), no a partir del código de país, y la situación de gobierno no tiene vista propia. Quedan disponibles para filtrado y para trabajo futuro; no son requisito de ninguna vista existente.

**Las 5 secciones son obligatorias y con estos `id` exactos y este orden:**

1. `ideologia` — Doctrina: qué dice, de qué corriente viene, qué autores
2. `historia` — Historia: fundación, etapas, splits, hitos
3. `practica` — **La ideología en la práctica** ← lo que hace de verdad
4. `criticas` — Críticas internas y externas, con quién y por qué
5. `interno` - Vida interna: facciones, corrientes internas, evolucion reciente

Se pueden **añadir secciones extra** a partir de ahí, con `id` propios. Las 5 de la
lista son obligatorias y no se reordenan nunca. El tope real depende del dominio y
`pwengine4` es la autoridad: en geopolítica y organizaciones exige **5-7** secciones,
de modo que ahí caben hasta **2** extras; en partidos no fija tope total, solo comprueba
que las 5 estén presentes y en orden relativo, y cualquier surplus se reporta como
nota al final de la ejecución. El motor las
pinta con la misma plantilla y sin trato especial. Ninguna sección extra sustituye
a `practica`, que siempre es la que el motor marca.

`practica` **no** puede ser una repeticion de `ideologia`. Es donde se contrasta lo
que el partido dice con lo que ha hecho: los gobiernos que ha tenido, los presupuestos que ha
aprobado, las privatizaciones, los pactos con fuerzas que no comparten su ideologia, el coste de
las crisis que ha tenido que gestionar y los momentos en que se ha apartado de su propio programa.
Es la seccion que el lector no encuentra en otro sitio, asi que es la que mas valor tiene.
Concrecion por encima de generalidades: fechas, cifras y nombres.

### 5.3 Geopolítica (`PW.geo`)

```js
PW.geo['orden-multipolar'] = {
  kind: 'geopolitica',
  slug: 'orden-multipolar',
  title: 'El orden multipolar',
  subtitle: '...',
  region: 'Sistema internacional',
  timeFrame: '1991-actualidad',
  summary: '...',
  actors: [
    { name: 'Estados Unidos', role: 'hegemonía en curso', power: 'alta' },
    { name: 'China', role: 'contestar el orden', power: 'alta' }
  ],
  infobox: { caption: 'Orden multipolar', color: '#4a6d8c', rows: [/* 5-8 */] },
  sections: [ /* 5-7 secciones */ ],
  related: [], categories: [], references: [/* mínimo 5 */ ]
};
```

Campos propios: `region` (string, agrupación del catálogo), `timeFrame`
(string), `actors` (array de 2-6 objetos `{name, role, power}`; `power` ∈
`alta`, `media`, `baja`; `name` **debe** ser un nombre de actor real y
reconocible, no un país genérico).

Secciones mínimas: `panorama` (el estado del asunto), `actores` (quién decide y
por qué), `dimensiones` (dimensiones económicas, militar, energética,etc),
`desbordamientos` (crisis, tensiones, casos donde se rompió el equilibrio),
`perspectivas` (escenarios razonables, no predicciones).

### 5.4 Organización (`PW.orgs`)

```js
PW.orgs['onu'] = {
  kind: 'organizacion',
  slug: 'onu',
  name: 'Organización de las Naciones Unidas',
  shortName: 'ONU',
  orgType: 'Organización mundial',
  founded: 1945,
  headquarters: 'Nueva York, Estados Unidos',
  leader: 'António Guterres (Secretario General)',
  members: 193,
  memberSince: '1945',
  colors: ['#4a90a4'],
  summary: '...',
  infobox: { caption: 'ONU', color: '#4a90a4', rows: [/* 5-8 */] },
  sections: [/* 5-7 secciones */],
  related: [], categories: [], references: [/* mínimo 5 */]
};
```

Campos propios: `orgType` (string: `Organización mundial`, `Bloque militar`,
`Bloque económico`, `Organización regional`, `Tratado`), `members` (número),
`memberSince` (string), `leader` (string).

Secciones mínimas: `origen` (por qué se creó y con qué problema), `estructura`
(órganos y cómo se decide), `funciones` (qué hace de verdad), `miembros`
(composición, las grandes potencias, los que se quedan fuera), `criticas`
(por qué se la critica y con qué fundamento).

### 5.5 Gobierno (`PW.gobiernos`)

```js
PW.gobiernos['alemania'] = {
  kind: 'gobierno',
  slug: 'alemania',
  title: 'Alemania',
  subtitle: 'República Federal de Alemania',
  category: 'Gobierno',
  tags: [],
  region: 'Europa Occidental',
  timeFrame: '1949-actualidad',
  updated: '2026-09-27',
  summary: '...',
  actors: [/* 2-6 */],
  infobox: { caption: 'Alemania', color: '#4a6d8c', rows: [/* 6-8 */] },
  sections: [/* 5-8 secciones */],
  categories: [], related: [], references: [/* mínimo 5 */]
};
```

Campos propios: `region` (string, clave de agrupación del dominio) y `timeFrame`
(string). `category` es informativo y vale `'Gobierno'`: **el dominio agrupa por
`region`, no por `category`**, igual que `geopolitica`. `actors` comparte contrato
con `geopolitica`: 2-6 elementos `{ name, role, power }` con `power` en
`alta | media | baja`.

Secciones: **5-8**, sin lista de `id` obligatorios. A diferencia de `partido`, `geo`
y `org`, el dominio `gobierno` no fija un esqueleto de secciones, y es deliberado:
un Estado federal, uno unitario de partido único, uno con arsenal nuclear y una
monarquía parlamentaria se descomponen de forma genuinamente distinta, y un
esqueleto común obligaría a borrar esas diferencias. Los límites sí se aplican
(5-8 secciones, 15-45 bloques, máximo 6 tablas, mínimo 5 referencias), y
`ideologia` sigue el mismo criterio: límites, no ids.

Esqueleto recomendado, no normativo: `panorama` (el Estado en una frase: qué es y
desde cuándo), `instituciones` (órganos, constitución y cómo se decide),
`liderazgo` (quién manda y cómo se renueva), `politicas` (políticas públicas y
resultados), `relaciones` (relaciones exteriores), `criticas` (por qué se lo
critica y con qué fundamento).

## 6. Wikilinks y referencias cruzadas

El marcado `[[slug]]` de `CONTRACT.md` §7 se extiende:

- `[[slug]]` → busca en los **cinco** dominios, en orden
  `ideologia, partido, gobierno, geopolitica, organizacion`. Si hay más de uno, gana
  la ideología.
- `[[slug|Texto visible]]` → igual, con etiqueta propia.
- `[[partido:ppsoe]]`, `[[geo:guerra-ucrania]]`, `[[org:onu]]`, `[[gob:alemania]]` →
  **obligatorio** cuando el slug existe en más de un dominio, para no adivinar.
- Un enlace a algo inexistente sigue dibujándose en rojo punteado. Sin cambios.

`related` acepta los cinco dominios con el mismo prefijo opcional.

## 7. Catálogo: agrupación por dominio

`PW.renderIndex(kind)` agrupa según el dominio:

- `ideologia` → por `category`. **Exactamente como hoy.** Sin cambios visibles
- `partido` → por `country`, en orden alfabético es, con un encabezado de país
- `geopolitica` → por `region`
- `organizacion` → por `orgType`, después por `shortName`

Cada grupo es `<section class="pw-catgroup">` con `<h3 class="pw-catgroup-title">`
y su rejilla. Es el mismo patrón que ya usa la portada con las categorías, con
las mismas clases: no se inventan clases de agrupación.

## 8. Clases nuevas (contrato CSS ↔ JS)

### 8.1 Conmutador de dominio (portada)

```html
<nav class="pw-domains" id="pw-domains" aria-label="Secciones de la enciclopedia">
  <button type="button" class="pw-domain" data-dominio="ideologia" aria-pressed="true">Ideologías</button>
  <button type="button" class="pw-domain" data-dominio="partido" aria-pressed="false">Partidos <span class="pw-domain-count">24</span></button>
  <button type="button" class="pw-domain" data-dominio="geopolitica" aria-pressed="false">Geopolítica <span class="pw-domain-count">8</span></button>
  <button type="button" class="pw-domain" data-dominio="organizacion" aria-pressed="false">Organizaciones <span class="pw-domain-count">10</span></button>
</nav>
```

`aria-pressed="true"` en el activo. El contador se rellena por JS desde
`PW.list(kind).length`. Va **entre el héroe y la primera sección** de
`index.html`.

### 8.2 Tarjetas

Reutiliza `.pw-card` y `.pw-card-grid` de `CONTRACT.md` §6. Solo añade, dentro
de la tarjeta:

```html
<a class="pw-card" href="article.html?tipo=partido&title=ppsoe">
  <div class="pw-card-flag" style="--flag-a: #b21d38; --flag-b: #f0c000"></div>
  <h3 class="pw-card-title">PSOE</h3>
  <p class="pw-card-sub">Partido Socialista Obrero Español · España</p>
  <p class="pw-card-summary">...</p>
  <div class="pw-card-meta">
    <span class="pw-tag">Centroizquierda</span>
    <span class="pw-tag">fundado 1879</span>
  </div>
</a>
```

| Clase | Dónde | Regla |
|---|---|---|
| `.pw-card-flag` | Tarjeta de partido y de organización | Franja de 4px con los colores del actor. `--flag-a` y `--flag-b`, con degradado entre ambos. **No** es un color de acento del sitio: es un dato, el color real del partido |
| `.pw-card-summary` | Las 4 tarjetas | El `summary` del artículo. En las tarjetas actuales no se usa; en las nuevas sí |
| `.pw-tag` | `.pw-card-meta` de las tarjetas nuevas | Etiqueta corta. Mismo lenguaje visual que `.pw-catlinks-list a` |
| `.pw-domain-count` | Conmutador | Contador, `2ch` mínimo |

### 8.3 Dentro de las fichas

| Clase | Dónde | Regla |
|---|---|---|
| `.pw-party-colors` | Cabecera de la ficha de partido | Franja con los colores del partido |
| `.pw-ideology-chips` | Ficha de partido | Una línea de enlaces a las ideologías del §5.2 `ideology` |
| `.pw-chip` | Cada chip | `Centroizquierda` + las ideologías enlazadas |
| `.pw-section-featured` | La sección `practica` | Marca visual discreta. **Una sola por ficha.** Resalta «La ideología en la práctica» sin gritar |
| `.pw-actors` | Ficha de geopolítica | Rejilla de actores, 2-3 columnas |
| `.pw-actor` | Cada actor | Nombre, `role` y un indicador de `power`. El indicador usa **tinta**, no rojo/verde/acento |
| `.pw-member-count` | Ficha de organización | Cifra grande de miembros, con `memberSince` al lado |
| `.pw-articleinfo-title` | Ya existe | Se reutiliza tal cual |

### 8.4 Reglas de estilo

- Todo lo nuevo **extiende** los tokens de `:root`. Ningún color literal fuera
  de los que ya existen, salvo `--flag-a` / `--flag-b` que son datos del
  contenido y no color de marca.
- Los estados activos (`.pw-domain[aria-pressed="true"]`) usan **tinta**, nunca
  un color de acento sobre superficie redondeada. Igual que ya hace
  `.pw-seg[aria-checked="true"]`.
- Bordes redondeados: los mismos `--pw-radius` (4px) y `--pw-radius-sm` (2px).
  `.pw-domain` no es un botón rojo con esquinas grandes.
- `.pw-card-flag`: `height: 4px`, `border-radius: var(--pw-radius-sm)` arriba.
  Si solo hay un color, degradado de un tono a su versión más clara.
- Rejilla de actores: `repeat(auto-fill, minmax(13rem, 1fr))`.
- `.pw-actor` con borde 1px y superficie, **sin** sombra.
- Debe seguir funcionando con `data-pw-size="xl"` a 375px **sin desbordamiento
  horizontal**, igual que se comprobó en v2.
- Contraste AA en los cinco dominios del tema, con texto de la ficha y con
  las tarjetas.

## 9. Buscador

`search.js` amplía su alcance: ahora busca en los cinco dominios.

- Los resultados se agrupan por dominio, con un encabezado de dominio.
- El `href` de cada resultado lleva su `tipo`.
- Puntuación: primero por **significancia** de la coincidencia (un título exacto
  gana a un título parcial), luego por `title`. Mantiene el comportamiento v1 de
  acentos y mayúsculas, que ya funciona: `comunis` encuentra `Comunismo`.
- El límite por defecto sigue respetándose.
- Si la búsqueda no cruza dominios, el comportamiento es idéntico al actual.

## 10. Qué NO se hace

- **No** se toca el esquema de las 9 ideologías existentes ni su contenido.
- **No** se reescribe `render.js` desde cero: se extiende. Si una función v1
  puede atender los cinco dominios sin bifurcación, se generaliza; si hace
  falta un caso nuevo, se añade un caso, no se sustituye el anterior.
- **No** se reescribe la capa de interfaz de `features.js`. Sigue funcionando; si
  necesita conocer el dominio activo, se le añade un método público, no se le
  reescribe.
- **No** se añaden imágenes, ni iconos de archivo, ni fuentes remotas.
- **No** se añaden `<script>` a mano al registrar una entrada nueva. Los `<script>`
  de los 65 datos ya están escritos en `index.html` y `article.html` y solo se
  tocan en un único paso deliberado, porque bajo `file://` no hay `fetch` con el que
  generarlos en tiempo de ejecución.
- **No** se introduce ninguna librería.
- **No** se inventa ninguna clase que no esté en este documento. Si de verdad
  hace falta una, se deja como comentario al final de la respuesta del agente
  explicando por qué, y quien decide es quien mantiene el contrato.

## 11. Verificación obligatoria (todos)

1. `node --check` de **todos** los `.js` que se hayan tocado: exit 0.
2. Ningún fichero nuevo puede romper el arranque: cargar `index.html` y no debe
   haber ni un `console.error`.
3. Contar entradas: `PW.articles` 23, `PW.parties` 24, `PW.geo` 8, `PW.orgs` 10.
4. Los 9 artículos v1 siguen con sus mismas palabras, secciones y referencias.
5. Las 4 clases base de la barra lateral siguen ahí.

Salida real pegada, sin resumen de memoria.
