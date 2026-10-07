(function (PW) {
  'use strict';
  PW.gobiernos = PW.gobiernos || {};
  PW.gobiernos['india'] = {
    kind: 'gobierno',
    slug: 'india',
    title: 'La República de la India',
    subtitle: 'Potencia federal de Asia Meridional con la población más numerosa del mundo, un federalismo de tres listas y una diplomacia de autonomía estratégica',
    category: 'Gobierno',
    tags: ['federalismo', 'constitución', 'parlamento', 'economía emergente', 'diplomacia', 'demografía'],
    region: 'Asia Meridional',
    timeFrame: '1950-actualidad',
    updated: '2026-09-27',
    summary: 'República federal de Asia Meridional que agrupa 28 estados y 8 territorios de la Unión, con la población más numerosa del planeta, un Parlamento de 543 diputados y una economía que crece por encima del 7% anual, y la mayor potencia emergente del Sur Global.',
    actors: [
      { name: 'China', role: 'principal competencia sistémica de la India en el Indo-Pacífico y en la frontera himalayana', power: 'alta' },
      { name: 'Estados Unidos', role: 'contraparte en el Cuádrilátero de Seguridad y fuente de tecnología, inversión y financiación', power: 'media' },
      { name: 'Pakistán', role: 'contesto territorial y nuclear, y principal destino rival de la emigración india de mano de obra', power: 'media' },
      { name: 'Unión Europea', role: 'principal bloque comercial y fuente de inversión, tecnología y normas regulatorias', power: 'media' },
      { name: 'BRICS', role: 'plataforma de coordinación económica y política del Sur Global, copresidida por la India en 2026', power: 'media' }
    ],
    infobox: {
      caption: 'República de la India',
      color: '#b5561c',
      rows: [
        ['Período', '1950-actualidad'],
        ['Forma de Estado', 'República federal con Parlamento bicameral'],
        ['División territorial', '28 estados y 8 territorios de la Unión'],
        ['Población', '1.463,9 millones de habitantes según la estimación de las Naciones Unidas para 2025'],
        ['Parlamento', 'Cámara del Pueblo con 543 diputados y Consejo de los Estados con 245 miembros'],
        ['Lenguas y PIB', 'Hindi en devanagari e inglés; en torno a 3,92 billones de dólares de producto interior bruto']
      ]
    },
    sections: [
      {
        id: 'origen',
        heading: 'Origen: de la colonia a la República federal',
        blocks: [
          {
            type: 'p',
            text: 'La India independiente nació el 15 de agosto de 1947, tras casi dos siglos de dominio británico, y su Constitución entró en vigor el 26 de enero de 1950. Es un texto extraordinariamente rígido: solo se modifica por el procedimiento del artículo 368, que exige mayoría reforzada en cada Cámara y la ratificación de al menos la mitad de las legislaturas estatales, razón por la que India se cuenta entre los sistemas constitucionales más difíciles de alterar del mundo.'
          },
          {
            type: 'p',
            text: 'El nombre del país figura en el artículo 1.1, que hasta 2023 decía «India shall be a Union of States» y que la Enmienda veintinueva sustituyó por «India, that is Bharat, shall be a Union of States». El cambio no altera la arquitectura constitucional, que describe al país como una unión de estados y no como un Estado unitario desmembrado en provincias. Esa arquitectura se consolidó en 1956, cuando la reorganización de los estados trazó las fronteras administrativas siguiendo criterios lingüísticos, un criterio casi excepcional en el derecho comparado.'
          },
          {
            type: 'table',
            head: ['Fecha', 'Hito institucional', 'Consecuencia política'],
            rows: [
              ['1947', 'Independencia y partición del subcontinente', 'Nace una República que debe integrar a varios cientos de Estados principescos'],
              ['1950', 'Entrada en vigor de la Constitución', 'Separación de poderes, control de constitucionalidad y Estado federal'],
              ['1956', 'Reorganización de los estados', 'Fronteras administrativas dibujadas sobre líneas lingüísticas'],
              ['1992', 'Enmiendas setenta y tres y setenta y cuatro', 'El gobierno local rural y urbano adquiere rango constitucional'],
              ['2026', 'Nueva base del producto interior bruto, 2022-23', 'Revisión a la baja del PIB nominal por reestimación de la economía informal']
            ]
          },
          {
            type: 'p',
            text: 'El Estado de Emergencia declarado en 1975 y levantado en 1977 dejó una huella profunda en la cultura constitucional del país. La declaración suspendió los derechos fundamentales y permitió gobernar por decreto, pero ningún gobierno posterior ha vuelto a recurrir a ella. Sobre esa experiencia se construyeron después décadas de sentencias que limitan el uso de la potencia ejecutiva y convierten a los tribunales en el último árbitro de los conflictos políticos. La Constitución reconoce además a los estados como componentes constituyentes de la Unión y no como simples demarcaciones de la administración central.'
          }
        ]
      },
      {
        id: 'federalismo',
        heading: 'Arquitectura federal: la Séptima Lista y el reparto de competencias',
        blocks: [
          {
            type: 'p',
            text: 'El federalismo indio se articula sobre tres mecanismos. La Séptima Lista reparte las materias entre la Unión, los estados y una lista concurrente; los artículos 245 a 263 demarcan las competencias dentro de la Unión; y el artículo 248 reconoce al Parlamento la potestad residual sobre todo lo no enumerado. En la práctica el Gobierno central domina la fiscalidad, la defensa, la política exterior, las comunicaciones, la banca y el comercio, mientras los estados conservan la educación, la salud, la policía, la agricultura y la administración civil.'
          },
          {
            type: 'table',
            head: ['Lista', 'Materias reservadas', 'Titularidad efectiva'],
            rows: [
              ['Lista de la Unión', 'Defensa, política exterior, moneda, banca, impuestos directos e indirectos, telecomunicaciones', 'Gobierno central, con transferencia de recursos a los estados'],
              ['Lista de los estados', 'Policía, prisiones, educación, salud pública, agricultura, ganadería y servicios locales', 'Gobiernos autonómicos, sin equivalente institucional en la Unión'],
              ['Lista concurrente', 'Bosques, aviación civil, matrimonios, sucesiones, educación superior y comercio', 'Los tres niveles, con primacía legal de la Unión en caso de conflicto'],
              ['Poder residual', 'Materias no enumeradas en ninguna de las tres listas', 'Parlamento mediante ley, previa consulta al Consejo de los Estados']
            ]
          },
          {
            type: 'p',
            text: 'La rigidez tiene consecuencias ambiguas. Facilita la continuidad institucional, porque ningún partido puede derogar con facilidad las conquistas de sus rivales, pero también hace que la reforma sea lenta y que los estados se conviertan en los grandes laboratorios de las políticas sociales. La Enmienda ochenta y nueve, de 2003, permite trasladar con mayoría simple de la Lista de la Unión a la concurrente cualquier materia, y con ello ha ido vaciando de contenido la separación original entre niveles. El artículo 280 añade a este edificio un Consejo interestatal que investiga, concilia y arbitra las controversias entre la Unión y los estados y entre los estados entre sí.'
          },
          {
            type: 'ul',
            items: [
              'Federalismo asimétrico: Jammu y Cachemira tuvo un estatuto especial hasta 2019, y los estados del Noreste mantienen la Sexta Lista, que reconoce a las comunidades tribales y regula sus zonas con leyes distintas de las ordinarias.',
              'Federalismo fiscal: las Comisiones Finance, creadas cada cinco años desde 1951, reparten los ingresos del impuesto sobre bienes y servicios entre la Unión y los estados.',
              'Poder de excepción: el artículo 356 permite que el presidente se haga cargo de un estado cuando su gobierno deja de funcionar, el mecanismo más conflictivo del constitucionalismo indio y el más discutido en la práctica.',
              'Gobierno local: las Enmiendas setenta y tres y setenta y cuatro de 1992 dan a los panchayats rurales y a los municipios la condición de unidades de autogobierno, con un tercio de los puestos reservados a mujeres y Comisiones Finance propias, aunque su financiación siga dependiendo en buena medida de los estados y de la Unión.'
            ]
          }
        ]
      },
      {
        id: 'instituciones',
        heading: 'Instituciones: presidencia, Parlamento, justicia y competencia partidista',
        blocks: [
          {
            type: 'p',
            text: 'La presidencia aporta muy poco poder cotidiano. El presidente es elegido por un colegio electoral compuesto por miembros de ambas Cámaras y de las asambleas estatales, y sus competencias más relevantes, indultar, nombrar, firmar tratados o disolver el Lok Sabha bajo condiciones tasadas, se administran bajo el consejo del Consejo de Ministros. Desde el 25 de julio de 2022 el puesto lo ocupa la presidenta Droupadi Murmu, primera mujer y primera persona procedente de una tribu reconocida constitucionalmente, y desde septiembre de 2025 la vicesidencia la ostenta C. P. Radhakrishnan, que por Constitución preside el Consejo de los Estados.'
          },
          {
            type: 'table',
            head: ['Órgano', 'Composición', 'Función principal'],
            rows: [
              ['Presidente de la India', 'Cargo único, elegido por colegio electoral', 'Jefe del Estado y garante de la forma republicana'],
              ['Primer ministro', 'Jefe del Gobierno, responsable ante el Lok Sabha', 'Dirección política y vigilancia de la Administración civil'],
              ['Cámara del Pueblo o Lok Sabha', '543 diputados elegidos por sufragio universal directo', 'Mayoría reforzada para aprobar reformas constitucionales y para derogar el carácter federal del Estado'],
              ['Consejo de los Estados o Rajya Sabha', '245 miembros, 233 electos y 12 nombrados por el presidente', 'Representa a los estados por población y funciona como cámara permanente'],
              ['Corte Suprema', 'Jueces nombrados por el presidente y presididos por el presidente de la Corte', 'Control de constitucionalidad y tutela última de los derechos fundamentales']
            ]
          },
          {
            type: 'p',
            text: 'Las elecciones generales de 2024 se celebraron entre abril y junio con 968 millones de electores registrados, el mayor censo electoral del mundo, y una participación del 66,10%. La coalición dirigida por el Bharatiya Janata Party obtuvo la mayoría con 293 diputados sobre 543, pero el partido se quedó con 240, frente a los 303 de 2019. El Indian National Congress, fundado en 1885 y dos veces partido único en la historia del país, recuperó los 99 que había perdido, y el bloque INDIA de la oposición agrupó 234 en total. Ninguna formación gobierna sola: los partidos regionales deciden el resultado en Uttar Pradesh, Bengala Occidental, Andhra Pradesh o Bihar.'
          },
          {
            type: 'p',
            text: 'El sistema electoral es, pese a esa fragmentación, extraordinariamente inclusivo. El sufragio universal se aplicó desde las primeras elecciones de 1951-1952, sin propiedad, casta ni alfabetización, y la participación de las mujeres se ha acercado ya a la de los varones. La Comisión Electoral es un órgano constitucional autónomo desde 1993, y el método combina el uninominal mayoritario con la presentación de candidatos en varios distritos, lo que relaja los límites de la proporcionalidad. El artículo 14 de la Constitución garantiza la igualdad ante la ley sin discriminación por religión, raza, casta, sexo o lugar de nacimiento, y la Enmienda ciento seis, de 2023, reserva un tercio de los puestos de la Cámara del Pueblo y de las asambleas estatales para las mujeres, con aplicación ligada a la delimitación que siga al próximo censo.'
          }
        ]
      },
      {
        id: 'economia',
        heading: 'Economía: liberalización, consolidación fiscal y nueva base de contabilidad',
        blocks: [
          {
            type: 'p',
            text: 'La India mantuvo entre 1956 y 1991 un modelo de planificación con licencias de importación, precios controlados y un sector público centralizado. La crisis de reservas de 1991 obligó a un giro completo: se liberalizó la cuenta de pagos, se redujeron los aranceles, se privatizaron empresas públicas y se abrió el mercado de capitales. Treinta años después el país es la sexta economía mundial por producto interior bruto nominal, en torno a 3,92 billones de dólares según el análisis de abril de 2026 del Fondo Monetario, y la que más rápido crece entre las grandes economías, con un avance real del 7,6% en 2025-26 frente al 7,1% del año anterior.'
          },
          {
            type: 'table',
            head: ['Indicador, en porcentaje del producto interior bruto', '2024-25', '2025-26 revisado', '2026-27 presupuestario'],
            rows: [
              ['Déficit fiscal', '4,8', '4,4', '4,3'],
              ['Déficit primario', '1,4', '0,8', '0,7'],
              ['Gasto de capital', '3,2', '3,1', '3,1'],
              ['Deuda pública', '56,5', '56,1', '55,6']
            ]
          },
          {
            type: 'p',
            text: 'Los presupuestos presentados el 1 de febrero de 2026 consolidaron esa trayectoria. El Gobierno fijó un déficit fiscal del 4,3% del producto interior bruto, por debajo del 4,4% revisado del ejercicio anterior, y estableció un objetivo de deuda sobre el PIB de 50±1 puntos en 2030-31. El gasto total se estima en 53,5 billones de rupias, con un gasto de capital de 12,2 billones y unas emisiones netas de mercado por 17,2 billones. La Decimosexta Comisión Finance repartió 1,4 billones de rupias en subvenciones a los estados, y la nueva Ley del Impuesto sobre la Renta de 2025 entró en vigor en abril de 2026. La prioridad absoluta sigue siendo la inversión pública en infraestructura, transporte y energía.'
          },
          {
            type: 'p',
            text: 'Hay que leer estas cifras con dos advertencias. La primera es la base de cálculo: en febrero de 2026 el producto interior bruto se reestimó con base 2022-23, lo que rebajó entre un tres y un cuatro por ciento los niveles nominales de los últimos ejercicios al reevaluar el tamaño de la economía informal. La segunda es el perímetro: el Gobierno federal es prudente, pero el conjunto de la administración pública, con los estados incluidos, registra un déficit cercano al 7,4% y una deuda en torno al 84,5% según el Banco Mundial. El banco central, fundado en 1935 e independiente desde 1949, y el impuesto sobre bienes y servicios, en vigor desde 2017, completan el marco institucional de la economía.'
          }
        ]
      },
      {
        id: 'diplomacia',
        heading: 'Diplomacia: autonomía estratégica, BRICS y disuasión nuclear',
        blocks: [
          {
            type: 'p',
            text: 'La política exterior india hereda del no alineamiento de la era Nehru, pero lo ha sustituido por una doctrina de autonomía estratégica más explícita y más asertiva. India no mantiene ningún tratado de alianza militar, rechaza la pertenencia a bloques y sostiene relaciones con Estados que muchos analistas consideran hostiles, como Rusia, Irán o Corea del Norte. Al mismo tiempo ha construido con Occidente una cooperación muy densa en el Cuádrilátero de Seguridad Indo-Pacífico, en la cadena de semiconductores y en el control de la fentanyl. Sus actos de mayor visibilidad son la presidencia del G20 en 2023, la Cumbre de la Voz del Sur Global, la defensa de una reforma del Consejo de Seguridad de la [[org:onu|ONU]] y la cuarta presidencia de la [[org:brics|BRICS]], ejercida en 2026 tras 2012, 2016 y 2021.'
          },
          {
            type: 'table',
            head: ['Foro o espacio', 'Papel de la India'],
            rows: [
              ['[[org:onu|Consejo de Seguridad de la ONU]]', 'Reclama un asiento permanente para el Sur Global, junto a Brasil y Sudáfrica'],
              ['Grupo del G20', 'Presidido en 2023, impulsó la infraestructura digital pública y la reforma multilateral'],
              ['[[org:brics|BRICS]]', 'Miembro fundador; cuarta presidencia en 2026, con una agenda de desarrollo y de reforma institucional'],
              ['[[geo:competencia-estados-unidos-china|Competencia entre Estados Unidos y China]]', 'Busca un lugar propio como la potencia que no elige bando en la rivalidad']
            ]
          },
          {
            type: 'ul',
            items: [
              'Defensa y disuasión nuclear: cuenta con el ejército más numeroso del mundo en servicio voluntario, ensayó armas nucleares en 1974 y en 1998, no se adhirió en 1968 al Tratado de No Proliferación ni al de Prohibición Completa, y sostiene una doctrina declarada de no primer uso unilateral.',
              'Energía y rutas: controla el mar Arábigo mediante el puerto de Chabahar y promueve el Corredor Internacional Norte-Sur como alternativa a las rutas del arco de Levante.',
              'Cooperación sur-sur: es el mayor proveedor mundial de cooperación técnica y combina ayuda al desarrollo, formación de cuadros y financiación de proyectos de infraestructura en el continente vecino.',
              'Coaliciones: el Cuádrilátero de Seguridad Indo-Pacífico, la Unión Económica de la Commonwealth y la Organización de la Cooperación Islámica articulan consultas regulares con Nueva Delhi sobre comercio, energía y seguridad.'
            ]
          }
        ]
      },
      {
        id: 'demografia',
        heading: 'Demografía, lenguas y el censo de 2027',
        blocks: [
          {
            type: 'p',
            text: 'La India es el país más poblado del planeta. El Censo de 2011 registró 1.210.854.977 habitantes, con una densidad de 382 personas por kilómetro cuadrado y una tasa de alfabetización del 74,04%. Frente a esa fecha, las estimaciones de las Naciones Unidas sitúan la población en 1.463,9 millones en 2025 y la proyectan hasta un techo cercano a 1.700 millones en las décadas siguientes. India superó a China en 2023 y su tasa de fecundidad ha descendido por debajo del nivel de reposición, mientras la pirámide demográfica sigue siendo extraordinariamente joven. Esa juventud es a la vez su principal expectativa económica y su mayor riesgo de desempleo y de unrest social, como analizan los datos demográficos en [[geo:migraciones-y-demografia|el contexto de las migraciones globales]].'
          },
          {
            type: 'table',
            head: ['Indicador', 'Censo de 2011', 'Estimación de las Naciones Unidas para 2025'],
            rows: [
              ['Población', '1.210.854.977 habitantes', '1.463,9 millones de habitantes'],
              ['Densidad', '382 habitantes por kilómetro cuadrado', 'Reparto muy desigual entre estados'],
              ['Alfabetización', '74,04%', 'Crecimiento sostenido en las décadas posteriores'],
              ['Urbanización', '31,2% de la población en ciudades', 'India por debajo de la media mundial']
            ]
          },
          {
            type: 'p',
            text: 'La pluralidad lingüística es el otro rasgo estructural del país. El artículo 343 de la Constitución fija el hindi en devanagari como idioma oficial de la Unión, y el inglés se mantiene para los fines oficiales; las veintiduas lenguas de la Octava Lista tienen rango constitucional. La reorganización de 1956 trazó las fronteras estatales siguiendo esas líneas lingüísticas, y ese mapa sigue determinando buena parte de la competencia electoral actual. La administración reconoce además cientos de idiomas y dialectos que no figuran en la Octava Lista, lo que convierte la cuestión de la lengua en un asunto de recursos, de representación y de identidad política, no solo de cultura.'
          },
          {
            type: 'p',
            text: 'Los datos oficiales están desactualizados, porque el censo intermedio que correspondía a 2021 se aplazó indefinidamente, en parte por la pandemia. La notificación de 16 de junio de 2025 ha cerrado esa espera. El Censo de 2027 será el primero plenamente digital, se realizará con aplicación móvil y una plataforma de monitorización en tiempo real, incluirá por primera vez la enumeración de castas y costará 11.718,24 crore de rupias, con unas 640.000 aldeas, 7.092 subdistritos y 36 estados o territorios. La primera fase, el censo de viviendas, transcurre entre abril y septiembre de 2026, y la segunda, la enumeración de la población, en febrero de 2027, con fecha de referencia del 1 de marzo de 2027. El artículo 15 de la Census Act de 1948 obliga a tratar los datos individuales como secretos, de modo que el recuento de castas no puede usarse como prueba judicial ni compartirse con ninguna institución.'
          }
        ]
      }
    ],
    categories: ['Gobiernos', 'Asia Meridional', 'Federalismo', 'Democracia'],
    related: ['geo:orden-multipolar', 'geo:migraciones-y-demografia', 'org:brics', 'federalismo', 'nacionalismo'],
    references: [
      {
        title: 'Country’s Population Reaches 1210 Million as Per Census 2011',
        author: 'Press Information Bureau, Ministry of Housing and Urban Affairs',
        publisher: 'Gobierno de la India, Nueva Delhi',
        year: 2011,
        type: 'dato',
        url: 'https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=71383'
      },
      {
        title: 'The Constitution of India',
        author: 'Asamblea Constituyente de la India',
        publisher: 'Legislative Department, Ministry of Law and Justice, Gobierno de la India',
        year: 1950,
        type: 'ley'
      },
      {
        title: 'Budget Speech 2026-2027',
        author: 'Nirmala Sitharaman, Ministra de Finanzas y Asuntos Corporativos',
        publisher: 'Ministry of Finance, Gobierno de la India, Nueva Delhi',
        year: 2026,
        type: 'documento',
        url: 'https://www.indiabudget.gov.in/doc/Budget_Speech.pdf'
      },
      {
        title: 'Reserve Bank of India Bulletin',
        author: 'Reserve Bank of India',
        publisher: 'Reserve Bank of India, Bombay',
        year: 2026,
        type: 'informe',
        url: 'https://www.rbi.org.in/Scripts/BS_ViewBulletin.aspx?Id=23979'
      },
      {
        title: 'India Development Update',
        author: 'Banco Mundial',
        publisher: 'World Bank Group, Washington',
        year: 2026,
        type: 'informe',
        url: 'https://thedocs.worldbank.org/en/doc/bc420dc95d716bc0ab8d956efd0b873c-0310012026/original/April-2026-India-Development-Update-Executive-Summary.pdf'
      },
      {
        title: 'Strategy and Culture: India’s Continued Relevance in a Complex Multipolar World',
        author: 'S. K. Gadeock',
        publisher: 'Observer Research Foundation, Nueva Delhi',
        year: 2025,
        type: 'informe',
        url: 'https://www.orfonline.org/research/strategy-and-culture-india-s-continued-relevance-in-a-complex-multipolar-world'
      },
      {
        title: 'World Population Prospects 2024',
        author: 'División de Población de las Naciones Unidas',
        publisher: 'Naciones Unidas, Nueva York',
        year: 2024,
        type: 'dato',
        url: 'https://population.un.org/wpp/'
      },
      {
        title: 'BRICS India 2026',
        author: 'Presidencia india de la BRICS',
        publisher: 'Gobierno de la India, Nueva Delhi',
        year: 2026,
        type: 'web',
        url: 'https://www.brics2026.gov.in/about-us/'
      },
      {
        title: 'The Indian Constitution: Cornerstone of a Nation',
        author: 'Granville Austin',
        publisher: 'Oxford University Press, Oxford',
        year: 1999,
        type: 'libro'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
