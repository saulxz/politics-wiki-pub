# politics-wiki · Guía de desarrollo

> Documento técnico interno para mantenedores: arquitectura, contratos de
> contenido, validación y cómo añadir entradas. Para una presentación general
> del proyecto, ver [README.md](README.md).

Enciclopedia en español sobre ideologías, partidos, asuntos geopolíticos y
organizaciones internacionales, con formato de enciclopedia y referencias
verificables. Empezó como nueve artículos de ideología y hoy se distribuye en
cinco dominios.

La regla que manda sobre todas las demás: **es un sitio estático**. No hay paso de
compilación, ni dependencias, ni empaquetador, ni módulos ES, y tiene que
seguir funcionando con doble clic sobre `index.html`, es decir, bajo `file://`.
Todo lo que hagas debe respetar eso.

---

## Índice

- [Qué es y por qué está hecho así](#qué-es-y-por-qué-está-hecho-Así)
- [Arrancar el sitio en local](#arrancar-el-sitio-en-local)
- [Estructura de ficheros](#estructura-de-ficheros)
- [Los cinco dominios](#los-cinco-dominios)
- [Las dos formas de URL](#las-dos-formas-de-url)
- [El patrón de registro y su trampa](#el-patrón-de-registro-y-su-trampa)
- [Añadir una entrada nueva](#añadir-una-entrada-nueva)
- [Reglas de contenido por dominio](#reglas-de-contenido-por-dominio)
- [Validación](#validación)
- [Superficie de interfaz](#superficie-de-interfaz)
- [Estado actual](#estado-actual)
- [Licencia](#licencia)

---

## Qué es y por qué está hecho así

El sitio son dos páginas HTML, una hoja de estilos y unos cuantos scripts
clásicos. El navegador los carga tal cual, sin nada que los transforme. Abre
`index.html` desde el disco y funciona.

De ahí salen tres prohibiciones que no se negocian:

| No | Por qué |
|---|---|
| `fetch()` | Bajo `file://` el protocolo no es `http` y la petición se rechaza por CORS |
| `import` / `export` | Los módulos ES también fallan por CORS bajo `file://` |
| CDN, webfonts, librerías remotas | El sitio no debe depender de la red para leerse |

Y una consecuencia directa: **cada fichero de datos es una IIFE que escribe en un
registro global**. No hay nada que importar, así que la única forma de que un
fichero de datos exista para el motor es que se autoinserte en `window.PW` al
ejecutarse. Esa es también la razón de que la lista de entradas viva en el HTML
y no en un índice autogenerado: sin build, nadie genera ese índice.

Un detalle sobre `references[].url`: son metadatos de bibliografía que el lector
puede pulsar. **El sitio nunca los descarga.** Solo se comprueban los que tienen
esquema `http` o `https` y se dibujan como enlace externo con
`target="_blank"` y `rel="noopener noreferrer"`. Ningún `url` de una ficha es un
recurso que la página cargue.

## Arrancar el sitio en local

```bash
node serve.js          # http://localhost:4321
node serve.js 8080     # http://localhost:8080
```

`serve.js` es un servidor estático sin dependencias, escrito con el módulo `http`
de Node. Es la opción recomendada para desarrollar, porque los errores de carga y
los 404 salen en la consola del navegador.

`serve.js` es **solo Node**: el navegador nunca lo carga, y no hay ningún `<script>`
que lo mencione. El `package.json` no tiene dependencias que instalar; sus dos
scripts (`start` y `dev`) solo lanzan este mismo servidor.

El sitio también funciona abriendo `index.html` directamente. Es el escenario para
el que está diseñado, así que si algo solo funciona con servidor, es un defecto.

## Estructura de ficheros

```
politics-wiki/
├── index.html              Portada y catálogo, con el conmutador de dominio
├── article.html            Ficha de una entrada
├── css/wiki.css            Design system completo, única hoja de estilos
├── js/
│   ├── data/
│   │   ├── <slug>.js               Ideologías
│   │   ├── parties/<slug>.js       Partidos
│   │   ├── geo/<slug>.js           Geopolítica
│   │   └── orgs/<slug>.js          Organizaciones
│   ├── render.js           Registro, catálogo, fichas y marcado en línea
│   ├── search.js           Buscador, cruza los cinco dominios
│   ├── app.js              Router y arranque
│   └── features.js         Capa de interfaz, siempre el último script
├── serve.js                Servidor estático, solo Node
├── CONTRACT.md             Contrato v1: esquema de artículo, bloques, clases
├── CONTRACT-V3.md          Contrato v3: los dominios nuevos
└── README.md
```

Los dos documentos de contrato son la fuente de verdad. Esta guía resume lo
que hay que saber para trabajar; las tablas de campos, los límites y las clases
viven allí, y mandan sobre cualquier resumen.

### Orden de carga de los scripts

Idéntico en `index.html` y en `article.html`, y obligatorio:

1. **Datos**: un `<script>` por entrada, todos con `defer`, antes que el motor.
   Primero los ficheros de ideología, después los de partidos, los de
   geopolítica y los de organizaciones.
2. **Lógica**: `render.js`, `search.js`, `app.js`, en ese orden.
3. **Interfaz**: `features.js`, siempre el último.

`app.js` es el único punto de arranque: enruta según el nombre del fichero y la
query. Como todos los scripts son `defer`, se ejecutan en orden de documento y
para cuando `features.js` arranca, `app.js` ya ha pintado.

## Los siete dominios

| Dominio | `tipo` | Registro | Fichero | Se agrupa por |
|---|---|---|---|---|
| Ideologías | `ideologia` | `PW.articles` | `js/data/<slug>.js` | `category` |
| Partidos | `partido` | `PW.parties` | `js/data/parties/<slug>.js` | `country` |
| Gobiernos | `gobierno` | `PW.gobiernos` | `js/data/gobiernos/<slug>.js` | `region` |
| Geopolítica | `geopolitica` | `PW.geo` | `js/data/geo/<slug>.js` | `region` |
| Organizaciones | `organizacion` | `PW.orgs` | `js/data/orgs/<slug>.js` | `orgType` |
| Pensadores | `pensador` | `PW.pensadores` | `js/data/pensadores/<slug>.js` | `category` |
| Conceptos | `concepto` | `PW.conceptos` | `js/data/conceptos/<slug>.js` | `category` |

Los siete registros existen siempre. El motor los crea al arrancar, sea cual sea
el orden de carga de los datos.

**Si `tipo` no viene, o viene vacío, o no es un dominio conocido, la respuesta es
`ideología`.** Con un valor desconocido además se registra un `console.error`. Las
URLs de las ideologías nunca llevan `tipo`, y esa es la razón: es el valor por
defecto y la URL antigua sigue siendo válida.

### API del registro

Todo cuelga de un único objeto global, `window.PW`:

- `PW.KINDS` devuelve la lista de dominios.
- `PW.kindOf(valor)` normaliza y valida un `tipo`. Nunca lanza.
- `PW.list(dominio)` devuelve la proyección que pintan las tarjetas, ordenada.
- `PW.get(dominio, slug)` devuelve una entrada o `null`.
- `PW.find(slug)` busca en los cinco dominios. Es lo que permite que el buscador
  y los wikilinks resuelvan sin pedirle el tipo al lector.
- `PW.renderIndex(dominio)`, `PW.renderParty`, `PW.renderGeo`, `PW.renderOrg`
  pintan cada vista. `PW.renderEntry` acepta una entrada de cualquier dominio y
  la dibuja con la plantilla correcta.

`PW.list()` y `PW.get(slug)` con **un** argumento siguen significando ideologías,
que es lo que usaba el código de v1. La forma de dos argumentos
`PW.get('partido', 'ppsoe')` es la nueva. Es una sobrecarga por número de
argumentos, no un cambio de contrato.

## Las dos formas de URL

```
index.html?tipo=<dominio>
article.html?tipo=<dominio>&title=<slug>
```

Ejemplos:

| URL | Resultado |
|---|---|
| `index.html` | Portada, catálogo de ideologías |
| `index.html?tipo=partido` | Catálogo de partidos, agrupado por país |
| `article.html?title=capitalismo` | Ideología, sin `tipo` porque es el dominio por defecto |
| `article.html?tipo=partido&title=ppsoe` | Ficha del partido |
| `article.html?tipo=geopolitica&title=orden-multipolar` | Ficha de geopolítica |
| `article.html?tipo=organizacion&title=onu` | Ficha de organización |
| `article.html?tipo=partido&title=no-existe` | Estado de "no encontrado", no una pantalla en blanco |

Conviene tener claro qué viaja en `title`: **el slug**, no el título visible. Es
la clave bajo la que la entrada está guardada en su registro. El título visible lo
pone el campo `title` del dato, y ahí hay una pequeña trampa de nombres:

- `slug`: la clave del registro y el valor de `?title=`. Kebab-case, sin acentos.
- `title`: lo que se ve en la cabecera de la ficha y en la tarjeta.
- `name` y `shortName`: nombres propios de partidos y organizaciones.

`name` y `title` no tienen por qué coincidir. En organizaciones sí, y el validador
lo exige. En partidos no: en el PSOE, por ejemplo, `name` es el nombre oficial
completo y `title` es la sigla. Si a una entrada le falta `title`, el motor lo
completa por este orden: `shortName`, luego `name`, y en último lugar la clave del
registro. Nunca pisa un valor que el dato ya traiga.

Los wikilinks pasan lo mismo: `[[slug]]` busca en los cinco dominios, en el orden
`ideologia`, `partido`, `geopolitica`, `organizacion`, y gana la ideología si el
mismo slug está en dos sitios. Cuando hay colisión hay que desambiguar con
prefijo: `[[partido:ppsoe]]`, `[[geo:orden-multipolar]]`, `[[org:onu]]`. El campo
`related` acepta la misma notación. Un enlace a algo inexistente se dibuja rojo
punteado y no rompe la página.

## El patrón de registro y su trampa

Un fichero de datos es una IIFE que inserta **una** entrada en **su** registro.
Para los dominios nuevos, el patrón correcto es este:

```js
(function (PW) {
  'use strict';
  PW.parties = PW.parties || {};
  PW.parties['<slug>'] = {
    kind: 'partido',
    slug: '<slug>',
    /* ... el resto de la entrada ... */
  };
})(window.PW = window.PW || { articles: {} });
```

Fíjate en las dos primeras líneas del cuerpo. `PW.parties = PW.parties || {}`
**es obligatorio** en los tres dominios nuevos.

### La trampa

Los nueve ficheros de ideología originales se cargan antes que nada y crean
`window.PW = { articles: {} }`. A partir de ahí `window.PW` ya es truthy. Si
alguien escribe el fallback en el **argumento** de la IIFE:

```js
})(window.PW = window.PW || { articles: {}, parties: {}, geo: {}, orgs: {} });
```

**no funciona, y no da ningún error de sintaxis.** `node --check` lo aprueba. Lo
que pasa es que `window.PW` ya era truthy, así que el lado derecho del `||` nunca
llega a evaluarse, `PW.parties` se queda en `undefined` y la línea siguiente
`PW.parties['<slug>'] = ...` revienta al cargar la página. Se rompe **toda** la
sección de partidos, no solo el fichero que lo hizo.

Este fallo ya ocurrió una vez y dejó sin funcionar todas las fichas de partido, no
solo la del fichero que lo introdujo. Es la razón de que exista `pwsweep.js`. El
arreglo es el init defensivo **dentro del cuerpo**, como primera sentencia, y no
en el argumento.

## Añadir una entrada nueva

Lista ordenada. Los pasos 1 y 3 no se saltan nunca.

### 1. Crear el fichero de datos

En el directorio del dominio (`js/data/`, `js/data/parties/`, `js/data/geo/`,
`js/data/orgs/`), con el nombre `<slug>.js`, usando el registro de su dominio y con
los `id` de sección obligatorios de ese dominio, en ese orden. Los campos
obligatorios y las enumeraciones están en el contrato del dominio, no aquí.

### 2. Validarlo

```bash
node tools/pwcheck3.js
```

Mientras el validador marque defectos en tu fichero, no sigas. Es más barato que
descubrir a posteriori que faltaba una sección.

### 3. Registrar el `<script>` en las dos páginas HTML

En `index.html` **y** en `article.html`, en la **misma posición** relativa: dentro
del bloque de datos de su dominio, con el resto de scripts de ese mismo bloque.

```html
<script src="js/data/parties/<slug>.js" defer></script>
```

`js/features.js` se queda el último en las dos páginas. Si no fuera el último, el
validador lo dice.

Los dos fallos que más se repiten:

- **Fichero en disco sin `<script>` en el HTML**: la entrada es invisible. No
  aparece en el catálogo, ni en la búsqueda, ni en el artículo aleatorio. Ni un
  error en consola: simplemente no existe. El validador lo detecta como fichero de
  datos sin registrar.
- **`<script>` en el HTML sin fichero en disco**: un 404 en la consola en cada
  carga, y el resto de la página sigue funcionando. El validador lo detecta como
  script que apunta a un fichero inexistente.

Los dos HTML también se comparan entre sí: si un script está en uno y no en el
otro, la mitad del sitio lo ignora.

## Reglas de contenido por dominio

Las tablas completas están en `CONTRACT.md` (ideologías) y `CONTRACT-V3.md` (los
tres dominios nuevos). Lo que sigue es el índice de lo que hay que mirar.

### Ideologías, `CONTRACT.md`

Siguen vigentes sin cambios: entre 4 y 8 secciones, la primera de orígenes o
historia y la última una variante de críticas o legado; entre 25 y 70 bloques en
total (límite subido de 50 a 70 en la expansión de historia, 29/09/2026); **cada
párrafo de 40 a 90 palabras**; **máximo 2 tablas y máximo 2 citas**
por artículo; mínimo 3 referencias. Los tipos de bloque permitidos son `p`, `ul`,
`ol`, `dl`, `quote`, `table`, `note` y `figure`. Nada de HTML dentro de los
textos: solo el marcado en línea (`[[wikilink]]`, `'''negrita'''`, `''cursiva''`,
`[enlace](url)`).

### Partidos, `CONTRACT-V3.md` §5.2

Cinco secciones con estos `id` exactos y en este orden:

1. `ideologia` (doctrina)
2. `historia`
3. `practica`, la ideología en la práctica
4. `criticas`
5. `interno`

`practica` no puede ser una repetición de `ideologia`. Es donde se contrasta lo que
el partido dice con lo que ha hecho, con fechas, cifras y nombres. El motor la
marca sola con `.pw-section-featured`, una sola vez por ficha.

Los tres dominios nuevos no heredan las reglas de longitud de `CONTRACT.md`: en
`CONTRACT-V3.md` no se fija ni el número de palabras por párrafo ni el número de
bloques. La regla de 40 a 90 palabras es solo de las ideologías.

Enumeraciones que importan: `countryCode` es ISO 3166-1 alfa-2 en minúsculas,
`colors` es de uno a dos hex de seis dígitos, `ideology` es de dos a cuatro slugs
que tienen que existir, `founded` es un número sin comillas. `country` es la clave
por la que se agrupa el catálogo.

### Geopolítica, `CONTRACT-V3.md` §5.3

Cinco secciones mínimas: `panorama`, `actores`, `dimensiones`, `desbordamientos`,
`perspectivas`. `region` agrupa el catálogo y `timeFrame` sitúa el periodo.
`actors` son de dos a seis objetos con `name`, `role` y `power`, y `power` solo
puede ser `alta`, `media` o `baja`. Cualquier otro valor es un defecto.

### Organizaciones, `CONTRACT-V3.md` §5.4

Cinco secciones mínimas: `origen`, `estructura`, `funciones`, `miembros`,
`criticas`. `name` y `title` llevan el mismo valor. `orgType` es uno de
`Organización mundial`, `Bloque militar`, `Bloque económico`, `Organización
regional` o `Tratado`. `members` es un número y `memberSince` una cadena.

### Referencias

Los tres dominios nuevos exigen mínimo 5, con la forma
`{ title, author, publisher, year, url, type }`. `url` es la fuente que el lector
puede consultar, no un recurso que la página cargue. En las ideologías el mínimo
es 3.

### Una discrepancia conocida

`countryCode` e `inGovernment` son obligatorios en el contrato de partidos y el
validador los comprueba, pero **la interfaz no los pinta**. La bandera de la ficha
se construye a partir del array `colors` con `flagNode()` y `colorBar()` en
`js/render.js`, no a partir del código de país, y la situación de gobierno no tiene
vista propia. Están disponibles para filtrar y para trabajo futuro, pero no son
requisito de ninguna vista existente. Se documenta aquí en lugar de esconderlo.

## Validación

Las siete herramientas viven **dentro del repositorio**, en `tools/`. Localizan el
proyecto por sí solas (`path.join(__dirname, '..')`), así que funcionan con la
carpeta donde sea que esté clonado y no contienen rutas absolutas. No forman parte
del sitio, no se sirven y el navegador no las carga nunca: `tools/` no aparece en
ningún `<script>`.

| herramienta | qué comprueba |
| --- | --- |
| `pwcheck3.js` | esquema, secciones, enlaces, registro en el HTML, catálogo. Informe completo. |
| `pwengine3.js` | aserciones del motor: render, búsqueda, integridad de enlazado. |
| `pwengine4.js` | `CONTRACT-V3.md`: campos y orden de secciones por dominio. |
| `audit-prose.js` | limpieza de prosa: 108 entradas, sin inglés ni caracteres no latinos. |
| `contamscan.js` | Localiza y reporta por línea cada carácter fuera del rango latino. |
| `linkcheck.js` | `related` y wikilinks contra entradas reales. |
| `pwsweep.js` | barrido del init `PW.<dominio> = ... || {}`. |

La batería completa, desde la raíz del repositorio:

```bash
node tools/pwcheck3.js
node tools/pwengine3.js
node tools/pwengine4.js
node tools/audit-prose.js
node tools/contamscan.js
node tools/linkcheck.js
```

`contamscan.js` **sin argumentos escanea los 108 ficheros** de `js/data` e imprime
cuántos ha recorrido. Antes recorría cero y aun así imprimía
`total de lineas contaminadas: 0`, lo que parecía un aprobado y no lo era: si
tienes que leer una sola cifra de este repositorio, comprueba que el número de
ficheros examinados no sea cero.

### `pwcheck3.js`, el validador

```bash
node tools/pwcheck3.js
```

Es de solo lectura: lee el repositorio, ejecuta cada fichero de datos en un
contexto aislado para poder trabajar con los objetos que producen, y escribe un
informe. Comprueba:

- **Esquema** de cada entrada según el dominio, campos obligatorios, tipos y
  enumeraciones.
- **Ejecución** de los ficheros en una caja de arena, para que un error en tiempo
  de ejecución se reporte como defecto de ese fichero y no rompa la comprobación.
- **Secciones**: que existan y que el orden de los `id` sea el del contrato, en los
  cinco dominios.
- **Wikilinks** y entradas de `related`, incluidos los que cruzan de dominio con
  prefijo: tienen que resolver a algo que exista de verdad.
- **Registro en el HTML**, en las dos páginas: scripts duplicados, scripts que
  apuntan a ficheros inexistentes, ficheros de datos que no están registrados y
  `features.js` fuera de última posición.
- **Contaminación de los textos**: busca caracteres no latinos (CJK, cirílico,
  árabe), tokens de código en inglés, `camelCase` pegado en mitad de una palabra
  española y fragmentos tipo lista o asignación.
- Que el conjunto de slugs sea el previsto en el catálogo. Una entrada con un slug
  nuevo se reporta como no prevista, así que hay que decidir a propósito si entra
  o no.

Límites que aplica, y conviene no confundir: para **ideologías** rigen los de
`CONTRACT.md` §4, de 4 a 8 secciones, 25 a 70 bloques, 40 a 90 palabras por párrafo
y mínimo 3 referencias. Para **partidos, geopolítica y organizaciones** comprueba
los `id` de sección obligatorios y su orden, entre 5 y 8 secciones, entre 15 y 45
bloques y mínimo 5 referencias, y **no** impone longitud de párrafo, porque
`CONTRACT-V3.md` no la fija.

### `pwsweep.js`, el barrido del init de registro

```bash
node tools/pwsweep.js                              # solo informe
node tools/pwsweep.js --fix                        # inyecta el init donde falte
node tools/pwsweep.js --fix --only=ppsoe,vox      # limitado a esos slugs
node tools/pwsweep.js --root=C:\...\js\data        # otra raíz
```

Comprueba, en los tres directorios nuevos, que el fichero tenga
`PW.parties = PW.parties || {}` (o el equivalente de su dominio) dentro del cuerpo
de la IIFE. Con `--fix` lo inyecta. Es idempotente: lo que ya está bien no se
toca. Sin argumentos opera sobre `js/data` del repositorio.

**El fallo real que hay que evitar:** no lances un `--fix` global mientras otros
procesos siguen escribiendo contenido. El directorio está vivo, el fichero puede
estar a medias, y el barrido lo corrompe. Usa `--only` sobre ficheros que ya están
estables, y deja el barrido global para cuando nadie esté escribiendo.

## Superficie de interfaz

La capa vive en `js/features.js` y en el bloque de interfaz de `css/wiki.css`.
A nivel de lo que ve el lector, y funcionando en los siete dominios:

- **Favoritos**: guardar y quitar entradas desde la ficha, con su panel de listado
  y contador en la cabecera. Se guarda en el navegador, por dominio, así que es
  local de cada navegador y no se sincroniza.
- **Progreso de lectura**: barra superior que avanza con el scroll, y botón de
  volver arriba.
- **Entrada aleatoria**: un clic abre una entrada distinta de la que estás
  leyendo.
- **Tarjetas al pasar el ratón**: al pasar por un enlace interno aparece una
  tarjeta con el título y un resumen del destino, sin salir de la página.

Además, las preferencias de lectura (tema, tamaño de texto, ancho de columna) se
aplican antes del primer pintado, así que no hay destello al recargar, y hay
atajos de teclado con su ayuda.

## Estado actual

El motor y la hoja de estilos están terminados y funcionan, incluida la búsqueda
que cruza los siete dominios y la generación de enlaces con `?tipo=`.

El catálogo objetivo que fija `CONTRACT-V3.md` es de 29 ideologías, 30 partidos,
21 fichas de gobierno, 10 de geopolítica, 10 organizaciones, 4 pensadores y
4 conceptos: 108 entradas en total.
**Las 108 deben estar escritas, cargando sin error y registradas** en las dos páginas
HTML, y `node tools/pwcheck3.js` debe terminar con `DEFINITIVO: 0 defectos en los 108
registros`. La batería de `tools/` da: 2529 aserciones de contrato (pwengine4),
272 aserciones del motor (pwengine3), 108 entradas limpias de prosa (audit-prose,
0 pendientes), 0 referencias rotas (linkcheck: 513 `related` y 725 wikilinks
comprobados) y 0 líneas contaminadas (contamscan).

**Aun así, no des por supuesto el estado del catálogo.** Las cifras cambian cuando
se edita contenido, y esta guía puede quedarse atrás sin que se note. Lo único
fiable es ejecutarlo:

```bash
node tools/pwcheck3.js
```

El informe dice, por dominio, cuántas entradas hay, cuántas faltan y cuáles
sobran. No des por hecha ninguna ficha hasta haberlo visto ahí.

Dos cosas que el validador **no** decide por ti, y que conviene no confundir con un
aprobado: los datos de hecho se corrigen con una fuente, no reejecutando el
validador; y en partidos `name` y `title` **no** tienen por qué coincidir, porque
`name` es el nombre en su idioma y `title` la etiqueta del catálogo en español. La
igualdad solo se exige en organizaciones.

## Licencia

Contenido bajo [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
Código bajo MIT.
