(function (PW) {
  'use strict';
  PW.gobiernos = PW.gobiernos || {};
  PW.gobiernos['china'] = {
    kind: 'gobierno',
    slug: 'china',
    title: 'El gobierno de China',
    subtitle: 'Dirección del Partido Comunista de China sobre un Estado unitario de partido único, con planificación quinquenal y un peso creciente en la economía mundial',
    category: 'Gobierno',
    tags: ['partido único', 'planificación quinquenal', 'economía dirigida por el Estado', 'unidad nacional', 'soberanía nacional', 'diligencia administrativa'],
    region: 'Asia Oriental',
    timeFrame: '1949-actualidad',
    updated: '2026-09-27',
    summary: 'Estado unitario de Asia Oriental gobernado por el Partido Comunista de China desde 1949, con la propiedad estatal y la planificación quinquenal en el centro de la economía, una administración extendida hasta el nivel local y un peso creciente en el comercio mundial y en la seguridad regional.',
    actors: [
      { name: 'Partido Comunista de China', role: 'define la línea política, controla los medios de comunicación y designa los cuadros de todo el aparato estatal', power: 'alta' },
      { name: 'Buró Político del Comité Central', role: 'órgano que adopta las decisiones más importantes entre plenos y las convierte en directivas obligatorias para toda la organización', power: 'alta' },
      { name: 'Asamblea Popular Nacional', role: 'órgano legislativo que aprueba la Constitución, los presupuestos, los planes quinquenales y las leyes, y elige a los altos cargos del Estado', power: 'media' },
      { name: 'Consejo de Estado', role: 'gobierno central que ejecuta la política económica y administrativa mediante ministerios y comisiones', power: 'media' },
      { name: 'Comisión Militar Central y Ejército Popular de Liberación', role: 'máxima instancia militar, responsable de la defensa, la Marina, la aviación, el programa espacial y la guerra cibernética', power: 'alta' },
      { name: 'Provincias, regiones autónomas y zonas especiales de Hong Kong y Macao', role: 'administraciones que aplican la política central en sus territorios con márgenes de decisión muy limitados', power: 'baja' }
    ],
    infobox: {
      caption: 'Gobierno de China',
      color: '#a8342a',
      rows: [
        ['Período', '1949-actualidad'],
        ['Forma de Estado', 'Estado unitario de partido único bajo la dirección del Partido Comunista de China'],
        ['Constitución', 'Aprobada el 4 de diciembre de 1982, con cinco revisiones, la última en marzo de 2018'],
        ['Capital', 'Pekín'],
        ['Líder del Estado', 'Xi Jinping, secretario general del Comité Central, presidente del país y presidente de la Comisión Militar Central'],
        ['Jefe de Gobierno', 'Li Qiang, presidente del Consejo de Estado desde marzo de 2023'],
        ['Partido en el poder', 'Partido Comunista de China, 101,29 millones de miembros a finales de 2025']
      ]
    },
    sections: [
      {
        id: 'estructura',
        heading: 'Estructura del Estado: partido, legislatura y gobierno',
        blocks: [
          {
            type: 'p',
            text: 'El gobierno chino se define por una dualidad explícita: un partido único que dirige el Estado y un Estado que ejecuta la línea del partido. La Constitución de 1982 consagra esa dirección en su primer artículo, de modo que la subordinación institucional no es una práctica consuetudinaria sino una norma constitucional, y esa diferencia separa a este régimen del papel limitado que los partidos ocupan en las democracias industrializadas.'
          },
          {
            type: 'table',
            head: ['Órgano', 'Composición', 'Qué decide'],
            rows: [
              ['Buró Político del Comité Central', 'Veinticinco miembros, siete de ellos en el Comité Permanente', 'La línea política entre plenos del partido'],
              ['Asamblea Popular Nacional', 'Diputados elegidos por los órganos locales de representación; 2.762 presentes en marzo de 2026', 'Constitución, leyes, presupuestos y planes quinquenales'],
              ['Consejo de Estado', 'Presidente, vicepresidentes, ministros y titulares de las comisiones', 'Política económica, administración y seguridad civil'],
              ['Comisión Central de Supervisión', 'Inspectores del partido con competencia sobre los cuadros en todos los niveles', 'Control ideológico, inspección y sanción disciplinaria']
            ]
          },
          {
            type: 'p',
            text: 'La decisión sigue un ciclo de varias fases. El Buró encarga los estudios, los ministerios preparan los borradores y el Comité Permanente debate hasta llegar al pleno o a la sesión anual de la legislatura. La aprobación del plan quinquenal de 2026 a 2030, el 12 de marzo de 2026, en la sesión de cierre de la cuarta sesión de la decimocuarta Asamblea Popular Nacional, es el ejemplo más reciente: la propuesta salió del Buró, se debatió en el pleno de octubre de 2025 como recomendaciones del Comité Central y se convirtió en plan quinquenal tras la votación de los diputados.'
          },
          {
            type: 'ul',
            items: [
              'El pleno del Comité Central reúne a unos doscientos miembros y constituye la máxima instancia del partido; el Buró actúa como órgano de gobierno ordinario entre plenos.',
              'El control de los cadres combina la inspección nacional, la evaluación periódica de los titulares en sus puestos y las comisiones de supervisión que pueden apartar a un funcionario de su cargo.',
              'La revisión constitucional de 2018 eliminó los límites de mandato de la presidencia del país, sin establecer un régimen transitorio.',
              'En la sesión de marzo de 2026 se aprobaron además el Código de Protección Ambiental, la Ley de Unidad Étnica y la Ley de Planificación Nacional del Desarrollo.'
            ]
          }
        ]
      },
      {
        id: 'planificacion',
        heading: 'Dirección de la economía: planificación quinquenal y sector privado',
        blocks: [
          {
            type: 'p',
            text: 'La economía sigue dirigida por el Estado. El plan quinquenal fija los objetivos de crecimiento, inversión pública, energía, educación y ambiente, y las empresas estatales se concentran en los sectores estratégicos de la energía, del transporte, de las telecomunicaciones y de la banca. La planificación no elimina el mercado, pero coloca las decisiones más relevantes de la economía dentro de un marco que el partido revisa cada cinco años.'
          },
          {
            type: 'table',
            head: ['Plan quinquenal', 'Período', 'Hito declarado'],
            rows: [
              ['Decimocuarto', '2021-2025', 'Construcción de una sociedad moderadamente prósera y eliminación de la pobreza extrema'],
              ['Decimoquinto', '2026-2030', 'Consolidar las bases y avanzar hacia la modernización socialista de 2035'],
              ['Decimosexto', '2031-2035', 'Culminar la modernización con un producto interior bruto per cápita de país desarrollado intermedio']
            ]
          },
          {
            type: 'p',
            text: 'El cierre del periodo de 2021 a 2025 coincidió con un crecimiento oficial del 5 % y un producto interior bruto de 140,19 billones de yuanes, unos veinte billones de dólares, la primera vez que la economía superaba esa cifra. Las cifras describen un sistema estable, pero el descenso de la inversión en activos fijos, del 3,8 % en 2025, y el crecimiento moderado del consumo, del 3,7 %, indican un desequilibrio entre oferta y demanda que los propios documentos oficiales reconocen al pedir un fortalecimiento de la demanda interna.'
          },
          {
            type: 'ul',
            items: [
              'Propiedad y dirección: el Estado controla la banca, la energía y la infraestructura básica, mientras las empresas privadas aportaron el 57,3 % del comercio exterior en 2025.',
              'Política industrial: programas como Made in China 2025 orientan la inversión pública y la financiación bancaria hacia los sectores considerados estratégicos.',
              'Demanda interna: la búsqueda de un modelo menos dependiente de las exportaciones se formula en la doctrina del doble circuito, que combina mercado internacional y mercado nacional.',
              'Financiación: el Banco Popular de China administra el crédito dirigido, la deuda de los gobiernos locales y las dificultades del sector inmobiliario que estallaron a partir de 2021.'
            ]
          }
        ]
      },
      {
        id: 'legitimidad',
        heading: 'Legitimidad: fundamento ideológico y resultados verificables',
        blocks: [
          {
            type: 'p',
            text: 'La ideología oficial combina el marxismo-leninismo, el pensamiento de Mao Zedong, las teorías de Deng Xiaoping, la teoría de las Tres Representaciones y el pensamiento de Xi Jinping sobre el socialismo con características chinas para una nueva era. Este último se incorporó al preámbulo de la Constitución en la revisión de 2018, con lo que un principio partidista pasó a ser norma constitucional.'
          },
          {
            type: 'quote',
            text: 'La República Popular China es un Estado socialista bajo la democracia popular, dirigida por la clase obrera y basada en la alianza de los trabajadores y los campesinos. El sistema socialista es el sistema fundamental de la República Popular China.',
            cite: 'Constitución de la República Popular China, artículo 1',
            author: 'Asamblea Popular Nacional'
          },
          {
            type: 'p',
            text: 'La legitimidad se apoya en un contrato de resultados más que en un contrato electoral. Tres décadas de crecimiento sostenido, la declaratoria oficial de haber eliminado la pobreza absoluta rural y la insistencia desde 2021 en la prosperidad común sostienen un intercambio en el que el partido aparece como la única fuerza organizada a escala nacional y el Estado como garante del bienestar.'
          },
          {
            type: 'ul',
            items: [
              'Ascenso por mérito: los cuadros son evaluados con un sistema que combina resultados económicos, disciplina política y valoración pública de su actuación en el cargo.',
              'Unidad nacional: la retórica de la reunificación del pueblo chino convierte la cuestión de Taiwán y las relaciones con las minorías étnicas en elementos centrales del proyecto nacional.',
              'Cohesión del partido: con 101,29 millones de miembros a finales de 2025 y más de cinco millones de organizaciones de base, el aparato es la mayor organización política del mundo por número de afiliados.',
              'Disciplina interna: la Comisión Central de Supervisión y la campaña contra la corrupción permiten apartar del cargo a los cuadros que estorban al centro desde 2012.'
            ]
          }
        ]
      },
      {
        id: 'fuerza-y-seguridad',
        heading: 'Fuerza armada, seguridad interior y tecnología',
        blocks: [
          {
            type: 'p',
            text: 'La Comisión Militar Central dirige el Ejército Popular de Liberación, que integra el Ejército de Tierra, la Marina, la Aviación y la Fuerza de Cohetes. El presupuesto de defensa previsto para 2026 se sitúa en 1,94 billones de yuanes dentro del presupuesto público general, un 6,9 % más que el año anterior, undécimo año consecutivo de crecimiento de una sola cifra y, según los portavoces oficiales, por debajo del 1,5 % del producto interior bruto.'
          },
          {
            type: 'table',
            head: ['Instrumento o hito', 'Año', 'Contenido'],
            rows: [
              ['Nueva Ley de Inversión Extranjera', '2020', 'Trato nacional previo, lista negativa y revisión de seguridad de las inversiones'],
              ['Nueva Ley de Control de Exportaciones', '2020', 'Control de bienes, tecnologías y servicios de doble uso'],
              ['Ley de Seguridad de los Datos', '2021', 'Clasificación de datos y localización obligatoria en sectores críticos'],
              ['Ley de Protección de la Información Personal', '2021', 'Obligaciones sobre datos personales y su transferencia al exterior'],
              ['Ley de contramedidas a las sanciones extranjeras', '2021', 'Represalias frente a medidas de terceros países contra empresas chinas']
            ]
          },
          {
            type: 'p',
            text: 'La superioridad tecnológica se construye sobre tres líneas: la producción industrial de doble uso, las cadenas de suministro de semiconductores, donde la máquina de litografía de ultravioleta extremo concentra la mayor dependencia mundial en territorio chino, y la planificación de la investigación científica. Los planes oficiales fijan la modernización de las fuerzas armadas para 2035 como objetivo y la autonomía tecnológica como condición previa para sostenerla.'
          },
          {
            type: 'ul',
            items: [
              'Seguridad interior: la red de cámaras, el reconocimiento biométrico y la vigilancia de las comunicaciones organizan una capacidad de seguimiento permanente sobre la población.',
              'Regiones autónomas: la autonomía de Xinjiang, Tibet, Mongolia Interior, Ningxia y Guangxi se limita al ámbito económico y cultural, y el control político permanece centralizado.',
              'Hong Kong: desde el 30 de junio de 2020 se aplica una ley de seguridad nacional impuesta por la legislatura, con definiciones amplias de sedición y de colaboración con el exterior.',
              'Estrecho de Taiwán: en diciembre de 2025 el mando del Teatro Oriental conduce ejercicios con fuego real alrededor de la isla, y por primera vez se declaró como objetivo la disuasión integral fuera de la cadena de islas.'
            ]
          }
        ]
      },
      {
        id: 'politica-exterior',
        heading: 'Política exterior: comercio, franja y ruta y competencia con Estados Unidos',
        blocks: [
          {
            type: 'p',
            text: 'La política exterior se define por la relación entre crecimiento económico y posición geopolítica. China entró en la [[org:omc|Organización Mundial del Comercio]] el 11 de diciembre de 2001 y puso en marcha en 2013 la Iniciativa de la Franja y la Ruta, que le permitió pasar de exportador de bienes a constructor de infraestructuras y redes de transporte en más de doscientos países y regiones.'
          },
          {
            type: 'ul',
            items: [
              'Comercio: 45,47 billones de yuanes de intercambios en 2025, con los socios de la Franja y la Ruta concentrando el 51,9 % del total, y China es socio comercial importante de más de ciento sesenta países y regiones.',
              'Organizaciones: China pide la reforma del Consejo de Seguridad de la [[org:onu|ONU]], donde ejerce el derecho de veto desde 1945, y da prioridad al grupo [[org:brics|BRICS]] y a los bancos de desarrollo multilaterales.',
              'Vecindario: las relaciones con Japón, Corea del Sur y los países de la ASEAN concentran buena parte de la fricción, sumadas a las disputas territoriales en el mar Meridional y el estrecho de Taiwán.',
              'Competencia: la rivalidad con Estados Unidos, tratada en [[geo:competencia-estados-unidos-china]], combina tecnología de exportación, tarifas, inversión y presencia militar en el Indo-Pacífico.'
            ]
          },
          {
            type: 'p',
            text: 'El patrón general es el de una potencia en ascenso que evita los compromisos militares y sí busca una estructura institucional que reconozca su peso. En la teoría de las relaciones internacionales esa combinación se describe como una revisión parcial: acepta las reglas comerciales, las aprovecha cuando favorecen su posición y las cuestiona cuando parecen disadvantajosas. La tensión está en si esa revisión limitada puede coexistir con la de los demás centros de poder del [[geo:orden-multipolar|orden multipolar]].'
          }
        ]
      },
      {
        id: 'sociedad',
        heading: 'Sociedad, unidades étnicas y derechos humanos',
        blocks: [
          {
            type: 'p',
            text: 'La sociedad china se organiza en 34 divisiones de nivel provincial, 23 provincias, cinco regiones autónomas, cuatro municipios bajo control central y dos zonas especiales, y reconoce 56 grupos étnicos, de los cuales el han representa algo más del 91 % de la población. La caída de la natalidad ha cambiado la relación entre el Estado y la sociedad, y el aparato legal ampliado desde 2017 alcanza también a las empresas extranjeras mediante la revisión de seguridad de las inversiones y la localización de datos.'
          },
          {
            type: 'quote',
            text: 'La magnitud de la detención arbitraria y discriminatoria de miembros de los uigures y de otros grupos mayoritariamente musulmanes puede constituir crímenes internacionales, en particular crímenes contra la humanidad.',
            cite: 'Evaluación de la Oficina del Alto Comisionado de las Naciones Unidas para los Derechos Humanos, 31 de agosto de 2022',
            author: 'Oficina del Alto Comisionado de las Naciones Unidas para los Derechos Humanos'
          },
          {
            type: 'p',
            text: 'En el plano demográfico, los datos oficiales del Buró Nacional de Estadística muestran una población de 1,405 billones de habitantes a finales de 2025, con un descenso de 3,39 millones respecto al año anterior y un cuarto año consecutivo de contracción. El número de nacimientos cayó a 7,92 millones y la tasa de fecundidad se sitúa en 0,96, mientras que las personas mayores de sesenta años representan cerca del 23 % del total. Ninguna medida natalicia aplicada hasta ahora ha revertido la tendencia, y la planificación se encuentra ante su principal límite, con un envejecimiento notable que las cifras oficiales sitúan en el horizonte de dos décadas.'
          }
        ]
      }
    ],
    categories: ['Gobiernos', 'Asia Oriental', 'Regímenes de partido único'],
    related: ['org:brics', 'geo:competencia-estados-unidos-china', 'geo:orden-multipolar', 'maoismo', 'nacionalismo'],
    references: [
      {
        title: 'Constitution of the People\'s Republic of China',
        author: 'Asamblea Popular Nacional',
        publisher: 'Asamblea Popular Nacional, Pekín',
        year: 1982,
        type: 'ley',
        url: 'http://www.npc.gov.cn/zgrdw/englishnpc/Constitution/node_2825.htm'
      },
      {
        title: 'Communique of the Fourth Plenary Session of the 20th Central Committee of the Communist Party of China',
        author: 'Comité Central del Partido Comunista de China',
        publisher: 'Partido Comunista de China, Pekín',
        year: 2025,
        type: 'documento',
        url: 'http://en.cppcc.gov.cn/2025-10/24/c_1135014.htm'
      },
      {
        title: 'CPC plenum concludes, adopting recommendations for China\'s 15th Five-Year Plan',
        author: 'Xinhua',
        publisher: 'Consejo de Estado de la República Popular China, Pekín',
        year: 2025,
        type: 'web',
        url: 'http://english.www.gov.cn/news/202510/23/content_WS68f9f337c6d00ca5f9a06fb2.html'
      },
      {
        title: 'CPC membership grows to over 101 mln as Party marks 105th anniversary',
        author: 'Departamento de Organización del Comité Central del Partido Comunista de China',
        publisher: 'Departamento Internacional del Comité Central del Partido Comunista de China, Pekín',
        year: 2026,
        type: 'dato',
        url: 'https://www.idcpc.org.cn/english2023/ttxw_5749/202606/t20260630_169698.html'
      },
      {
        title: 'China\'s GDP grows 5 pct in 2025, hitting annual target',
        author: 'Xinhua',
        publisher: 'Consejo de Estado de la República Popular China, Pekín',
        year: 2026,
        type: 'dato',
        url: 'https://english.www.gov.cn/archive/statistics/202601/19/content_WS696ddb7dc6d00ca5f9a08a7f.html'
      },
      {
        title: 'China\'s resilient foreign trade expands in 2025 amid global headwinds',
        author: 'Administración General de Aduanas de la República Popular China',
        publisher: 'Consejo de Estado de la República Popular China, Pekín',
        year: 2026,
        type: 'dato',
        url: 'https://english.www.gov.cn/archive/statistics/202601/15/content_WS6968cbfac6d00ca5f9a08969.html'
      },
      {
        title: 'OHCHR Assessment of human rights concerns in the Xinjiang Uyghur Autonomous Region, People\'s Republic of China',
        author: 'Oficina del Alto Comisionado de las Naciones Unidas para los Derechos Humanos',
        publisher: 'Naciones Unidas, Ginebra',
        year: 2022,
        type: 'informe',
        url: 'https://www.ohchr.org/sites/default/files/documents/countries/2022-08-31/22-08-31-final-assesment.pdf'
      },
      {
        title: 'Full Text: China\'s Export Controls',
        author: 'Consejo de Estado de la República Popular China',
        publisher: 'Consejo de Estado de la República Popular China, Pekín',
        year: 2021,
        type: 'documento',
        url: 'http://english.www.gov.cn/archive/whitepaper/202112/29/content_WS61cc01b8c6d09c94e48a2df0.html'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
