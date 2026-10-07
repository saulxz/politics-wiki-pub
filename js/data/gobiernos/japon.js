(function (PW) {
  'use strict';
  PW.gobiernos = PW.gobiernos || {};
  PW.gobiernos['japon'] = {
    kind: 'gobierno',
    slug: 'japon',
    title: 'Japón',
    subtitle: 'Monarquía constitucional unitaria con el emperador como símbolo del Estado, un gabinete responsable ante la Dieta y una autonomía local de dos niveles',
    category: 'Gobierno',
    tags: ['monarquía constitucional', 'sistema parlamentario', 'descentralización', 'demografía', 'economía industrial', 'seguridad regional'],
    region: 'Asia Oriental',
    timeFrame: '1947-actualidad',
    updated: '2026-09-27',
    summary: 'Gobierno de una monarquía constitucional unitaria vigente desde 1947, con el emperador como símbolo del Estado, un gabinete responsable ante una Dieta bicameral y una autonomía local de dos niveles, sobre una población de 123 millones que encoge y envejece.',
    actors: [
      { name: 'Estados Unidos', role: 'garante de la seguridad de Japón mediante el tratado de 1960 y principal fuente de inversión extranjera y de tecnología', power: 'alta' },
      { name: 'China', role: 'mayor socio comercial del Japón y principal origen de la presión diplomática en el mar Meridional y sobre el estrecho de Taiwán', power: 'alta' },
      { name: 'Partido Liberalocrático', role: 'principal formación del Parlamento, aporta al primer ministro y sostiene la coalición con el Japón Innovador', power: 'alta' },
      { name: 'Banco de Japón', role: 'banco central que fija el tipo de interés y compra deuda pública, y objeto de la presión política por la independencia monetaria', power: 'media' },
      { name: 'Grandes grupos empresariales', role: 'tejido de empresas unidas por participaciones cruzadas que canaliza inversión, crédito y empleo más allá del Estado', power: 'alta' },
      { name: 'Organización Mundial del Comercio', role: 'foro donde las reglas multilaterales condicionan la competencia de las exportaciones japonesas', power: 'media' }
    ],
    infobox: {
      caption: 'Gobierno del Japón',
      color: '#8c2f39',
      rows: [
        ['Período', '1947-actualidad'],
        ['Constitución', 'Promulgada el 3 de noviembre de 1946, en vigor el 3 de mayo de 1947'],
        ['Jefe del Estado', 'Emperador, símbolo del Estado y sin poderes de gobierno (artículos 1 y 4)'],
        ['Jefe del Gobierno', 'Primer ministro, designado por la Dieta entre sus miembros (artículo 67)'],
        ['Parlamento', 'Dieta bicameral: 465 diputados y 248 consejeros, con mandatos de cuatro y seis años'],
        ['Gobierno vigente', 'Sanae Takaichi, primera mujer en el cargo desde octubre de 2025'],
        ['Población', '123,05 millones en el censo de 2025, con un 29,4 % de mayores de 65 años']
      ]
    },
    sections: [
      {
        id: 'constitucion',
        heading: 'La Constitución de 1947 y el Estado que se reconstituyó',
        blocks: [
          {
            type: 'p',
            text: 'La Constitución promulgada el 3 de noviembre de 1946 entró en vigor el 3 de mayo de 1947 y redefinió por completo el Estado japonés. Consagra la soberanía popular, garantiza el sufragio universal de adultos en el artículo 15 y reconoce derechos individuales que el orden anterior no otorgaba. Su artículo 41 coloca a la Dieta como máximo poder del Estado y único poder legislativo, y el artículo 65 vierte el poder ejecutivo en el gabinete.'
          },
          {
            type: 'p',
            text: 'La monarquía queda reducida a un símbolo sin gobierno efectivo. El artículo 1 define al emperador como símbolo del Estado y de la unidad del pueblo, el artículo 4 le prohíbe ejercer poderes de gobierno y el artículo 3 exige el asesoramiento y la aprobación del gabinete para todo acto suyo. En la práctica el emperador se limita a actos ceremoniales y a la promulgación formal de la Constitución, de las leyes y de los tratados.'
          },
          {
            type: 'quote',
            text: 'Aspirando sinceramente a la paz internacional fundada en la justicia y el orden, el pueblo japonés renuncia para siempre a la guerra como derecho soberano de la nación y a la amenaza o al empleo de la fuerza como medios de resolver las controversias internacionales.',
            cite: 'Constitución de Japón, artículo 9, párrafo primero',
            author: 'Asamblea Nacional de Japón'
          },
          {
            type: 'table',
            head: ['Artículo', 'Contenido', 'Efecto práctico'],
            rows: [
              ['1, 3, 4 y 7', 'El emperador es símbolo del Estado y sus actos requieren el consentimiento del gabinete', 'Monarquía ceremonial, con el gabinete como poder ejecutivo real'],
              ['41, 59, 65 y 67', 'La Dieta legisla, la Cámara de Representantes prevalece con dos tercios y el primer ministro es designado por la Dieta', 'Gobierno responsable ante el Parlamento, sin ley bloqueada por la cámara alta'],
              ['92 a 96', 'La autonomía local se regula por ley y la reforma del texto exige dos tercios y referéndum', 'Cambios muy costosos política y electoralmente']
            ]
          }
        ]
      },
      {
        id: 'parlamento-y-gabinete',
        heading: 'Dieta y gabinete: el poder de la mayoría',
        blocks: [
          {
            type: 'p',
            text: 'La Dieta se compone de dos cámaras elegidas por separado. La Cámara de Representantes, la única disoluble, reúne 465 miembros con mandato de cuatro años: 289 en distritos uninominales por plurality simple y 176 en representación proporcional en once bloques. La Cámara de Consejeros reúne 248 miembros con mandato de seis años y renovación parcial cada tres años, de los que 148 son electos en distritos prefecturales y 100 en representación proporcional nacional.'
          },
          {
            type: 'p',
            text: 'La arquitectura está diseñada para que la Cámara de Representantes prevalezca. Un proyecto que la cámara alta rechaza solo se convierte en ley con mayoría de dos tercios en la Cámara baja, según el artículo 59; el presupuesto se presenta primero en esta última y su decisión prevalece, en el artículo 60; lo mismo vale para la ratificación de tratados. Además, la Cámara baja elige al primer ministro cuando las dos cámaras discrepan, en el artículo 67, y puede exigir la dimisión del gabinete con una votación de desconfianza, en el artículo 69.'
          },
          {
            type: 'p',
            text: 'El equilibrio real no lo fija la Constitución sino la aritmética electoral. Las elecciones generales del 8 de febrero de 2026 dieron al Partido Liberalocrático 316 de los 465 puestos, con el apoyo de los 36 del Japón Innovador, mientras la Cámara de Consejeros mantiene al bloque gubernamental en desventaja. El voto mixto y la existencia de partidos muy pequeños permiten coaliciones minoritarias y hacen habitual el cambio de partido de los electores entre una votación y otra.'
          }
        ]
      },
      {
        id: 'autonomia-local',
        heading: 'Gobierno local: prefecturas y municipios',
        blocks: [
          {
            type: 'p',
            text: 'La Constitución dedica su capítulo VIII a la autonomía local y obliga a regular por ley la organización de las entidades locales conforme al principio de autonomía, en el artículo 92. Las asambleas locales y los cargos ejecutivos se eligen por sufragio directo, en el artículo 93, y las entidades pueden gestionar sus bienes y asuntos y dictar sus propias normas dentro de la ley, en el artículo 94. La Ley de Autonomía Local de 1947 desarrolló ese mandato. La presión demográfica se ve en los números: en el censo de 2025, 45 de las 47 prefecturas perdieron población y solo Tokio y Okinawa crecieron, lo que obliga a fusionar municipios y a reorganizar servicios que la base imponible ya no sostiene.'
          },
          {
            type: 'ul',
            items: [
              'Autonomía jurídica, no federalismo: la administración central y las locales son personas jurídicas distintas, y Japón es un Estado unitario.',
              'Centralismo presupuestario: la mayor parte de la financiación local procede de transferencias del Estado, lo que limita la autonomía financiera real.',
              'Regla del artículo 95: la Dieta no puede aprobar una ley aplicable a una sola entidad local sin el consentimiento de la mayoría de sus votantes.',
              'Descentralización en curso: la reforma de 1999 de la Ley de Autonomía Local eliminó funciones impuestas a las entidades locales y creó un órgano de solución de conflictos entre el Estado y ellas.'
            ]
          }
        ]
      },
      {
        id: 'demografia',
        heading: 'Demografía: un Estado que encoge y envejece',
        blocks: [
          {
            type: 'p',
            text: 'La caída demográfica es el dato estructural más relevante del Gobierno. Las estimaciones oficiales al 1 de octubre de 2024 situaron la población en 123,8 millones, con una caída de 550.000 habitantes y el decimocuarto año consecutivo de descenso. El censo publicado en 2025 bajó la cifra a 123,05 millones, la mayor caída de la serie quinquenal, con un descenso del 2,5 % respecto a 2020.'
          },
          {
            type: 'table',
            head: ['Indicador', 'Valor', 'Fuente y fecha'],
            rows: [
              ['Población total', '123,05 millones', 'Censo quinquenal, 1 de octubre de 2025'],
              ['Mayores de 65 años', '29,4 % del total', 'Ministerio del Interior, septiembre de 2025'],
              ['Menores de 15 años', '11,2 % del total', 'Estimaciones al 1 de octubre de 2024'],
              ['Saldo natural', 'Menos 890.000 personas', 'Estimaciones al 1 de octubre de 2024'],
              ['Saldo migratorio', 'Más 340.000 personas', 'Estimaciones al 1 de octubre de 2024'],
              ['Tamaño medio del hogar', '2,15 personas', 'Censo quinquenal de 2025']
            ]
          },
          {
            type: 'p',
            text: 'El motor de la caída es el saldo natural, con muertes que superan a los nacimientos de forma ininterrumpida desde hace más de dos décadas. La consecuencia es una presión creciente sobre las pensiones y la atención sanitaria, y una fiscalidad local que depende cada vez más de una población activa más pequeña. La proyección oficial sitúa el peso de los mayores en el 34,8 % del total en 2040.'
          },
          {
            type: 'p',
            text: 'La respuesta ha sido abrir la puerta a la inmigración. A finales de 2025 había 4.125.395 residentes extranjeros, y los trabajadores con el estatus de cualificado específico ascendían a 404.527 a finales de marzo de 2026, a los que se suman 12.420 en el segundo nivel. La reforma de junio de 2024 suprimió el programa de formación de becarios técnicos, y en mayo de 2025 el Gobierno publicó un plan para acelerar las deportaciones. Es el punto más conflictivo del Estado, como analiza [[geo:migraciones-y-demografia]].'
          }
        ]
      },
      {
        id: 'economia-y-finanzas',
        heading: 'Economía, moneda y finanzas públicas',
        blocks: [
          {
            type: 'p',
            text: 'Japón es la cuarta economía del mundo y su estructura es dual: un sector exportador de alta tecnología, con la automoción y los equipos de fabricación de semiconductores al frente, y un interior de consumo y servicios dependiente de la demografía y del precio de la energía. El producto nominal ronda los 630 billones de yenes, mientras el comercio de bienes arrastra un déficit persistente.'
          },
          {
            type: 'p',
            text: 'El dato monetario más reciente es una normalización acelerada. El Banco de Japón puso fin a los tipos negativos en 2024, elevó su tipo oficial al 1 % el 16 de junio de 2026 y al 1,25 % el 18 de septiembre de 2026, en una decisión dividida y en su nivel más alto en 31 años. El yen ronda los 157 por dólar, en niveles no vistos desde los años ochenta, y el rendimiento de los bonos a diez años ha superado el 2,9 %.'
          },
          {
            type: 'table',
            head: ['Indicador', 'Valor', 'Fuente y fecha'],
            rows: [
              ['Deuda bruta del gobierno general', '204,4 % del producto interior bruto', 'Fondo Monetario Internacional, abril de 2026'],
              ['Deuda a largo plazo del Estado y las prefecturas', '1.344 billones de yenes, un 194 % del producto', 'Ministerio de Finanzas, ejercicio de 2026'],
              ['Deuda central del Estado', '1,34 billones de yenes, máximo histórico', 'Ministerio de Finanzas, junio de 2026'],
              ['Tipo oficial del Banco de Japón', '1,25 %', 'Consejo de Política Monetaria, 18 de septiembre de 2026'],
              ['Cotización media del yen', 'En torno a 157 por dólar', 'Mercado de cambios, septiembre de 2026']
            ]
          },
          {
            type: 'p',
            text: 'La combinación de deuda alta, tipos en ascenso y moneda débil es la restricción central de este Gobierno. El Gobierno vigente define su estrategia como una política fiscal proactiva y responsable, con más gasto y bajadas de impuestos, y ha prometido recuperar influencia sobre el banco central, lo que añade emisión de deuda mientras la política monetaria se normaliza. Es la vía por la que [[geo:energia-y-dependencias]] se convierte en política fiscal.'
          }
        ]
      },
      {
        id: 'politica-exterior',
        heading: 'Política exterior, comercio y seguridad',
        blocks: [
          {
            type: 'p',
            text: 'La política exterior japonesa se sostiene sobre dos pilares. El primero es la alianza con Estados Unidos, con el que existe un tratado de seguridad de 1960. El segundo es una red de acuerdos comerciales que cubre casi todo el comercio exterior del país: los socios de acuerdos de libre comercio y de cooperación económica representan el 78,9 % del comercio total japonés, y el 87 % si se incluyen los que están en negociación. China es el mayor socio comercial, con el 20,12 %, seguida de Estados Unidos, con el 15,47 %, y de la Unión Europea, con el 9,94 %.'
          },
          {
            type: 'table',
            head: ['Acuerdo o marco', 'Situación', 'Dato relevante'],
            rows: [
              ['CPTPP', 'En vigor; el Reino Unido entró en diciembre de 2024', 'Primer ingreso de un nuevo miembro desde la entrada en vigor'],
              ['RCEP', 'En vigor desde el 1 de enero de 2022', 'Reúne países que concentran cerca del 30 % del comercio mundial'],
              ['Acuerdos con Estados Unidos', 'Acuerdos limitados de 2020 sobre aranceles y comercio digital', 'En 2025 se aplican aranceles estadounidenses del 15 % a la mayoría de productos japoneses'],
              ['Consejo de Cooperación del Golfo', 'Negociaciones reanudadas en 2023 tras la suspensión de 2009', 'Se busca un acuerdo que cubra inversión y servicios, no solo aranceles']
            ]
          },
          {
            type: 'p',
            text: 'El tercero es la defensa. En diciembre de 2022 el Gobierno aprobó la Estrategia de Seguridad Nacional, la Estrategia de Defensa Nacional y el Programa de Refuerzo de las Capacidades de Defensa, que preveía 43,5 billones de yenes hasta el ejercicio de 2027 para llevar el gasto al 2 % del producto. El Gobierno vigente aceleró el calendario: con un presupuesto suplementario de diciembre de 2025, el gasto total en defensa del ejercicio de 2025 se elevó a unos 11 billones de yenes, dos años antes de lo previsto, y la revisión de los tres documentos iniciada en 2025 discute si esa cifra basta.'
          },
          {
            type: 'p',
            text: 'La cuarta presión es energética. La tasa de autosuficiencia fue del 16,4 % en el ejercicio de 2024, frente al 15,3 % del anterior, lo que deja el 83,6 % del suministro en el exterior. El petróleo y el carbón se importan prácticamente en su totalidad y el gas natural en más del 97 %. La mejoría procede de la vuelta de reactores nucleares, con dos unidades reconectadas en 2024 y otra en 2025, y de una caída del gas natural licuado, que lleva nueve años consecutivos descendiendo hasta 61 millones de toneladas. La combinación de una economía orientada a la exportación, una dependencia energética alta y una vecindad de potencias nuclearizadas hace que seguridad y economía formen una sola política, el eje que ordena la región para [[geo:orden-multipolar]].'
          }
        ]
      },
      {
        id: 'debates',
        heading: 'Debates abiertos y límites del modelo',
        blocks: [
          {
            type: 'p',
            text: 'El sistema japonés funciona con alta cohesión social y baja tolerancia a la ambigüedad, y esa combinación explica tanto sus logros como sus bloqueos. Las reformas constitucionales se topan con el artículo 96, la política monetaria choca con la presión por el gasto, y la respuesta al envejecimiento choca con la identidad nacional. La diferencia entre este Gobierno y los anteriores es más de ritmo que de orientación.'
          },
          {
            type: 'ul',
            items: [
              'El artículo 9: reformarlo, reinterpretarlo o dejarlo intacto. Una revisión abriría un papel militar distinto, pero exigiría consenso en las tres instancias del artículo 96.',
              'Sostenibilidad fiscal: si el gasto se financia con emisión, la reacción del mercado de bonos puede neutralizarlo; si no, el ajuste recaerá sobre el gasto social.',
              'Inmigración: abrir la puerta a trabajadores cualificados resuelve la escasez de mano de obra y choca con el debate sobre la identidad y la integración.',
              'Representación: según el Informe Global de Brecha de Género de 2025, Japón ocupa el puesto 118 de 148; las mujeres son menos del 16 % de los diputados y el 10 % de los ministros.'
            ]
          }
        ]
      }
    ],
    categories: ['Gobiernos', 'Asia Oriental', 'Estados', 'Sistemas políticos'],
    related: ['conservadurismo', 'liberalismo', 'geo:orden-multipolar', 'geo:energia-y-dependencias', 'geo:competencia-estados-unidos-china'],
    references: [
      {
        title: 'The Constitution of Japan',
        author: 'Cámara de Representantes del Parlamento de Japón',
        publisher: 'Gobierno de Japón, Tokio',
        year: 1947,
        type: 'documento',
        url: 'https://www.shugiin.go.jp/internet/itdb_english.nsf/html/statics/english/constitution_e.htm'
      },
      {
        title: 'Current Population Estimates as of October 1, 2024',
        author: 'Statistics Bureau of Japan',
        publisher: 'Statistics Bureau, Ministry of Internal Affairs and Communications, Tokio',
        year: 2025,
        type: 'dato',
        url: 'https://www.stat.go.jp/english/data/jinsui/2024np/index.html'
      },
      {
        title: 'Diplomatic Bluebook 2025',
        author: 'Ministerio de Asuntos Exteriores de Japón',
        publisher: 'Ministry of Foreign Affairs of Japan, Tokio',
        year: 2025,
        type: 'informe',
        url: 'https://www.mofa.go.jp/policy/other/bluebook/2025/en_html/index.html'
      },
      {
        title: 'Monetary Policy Releases 2026',
        author: 'Bank of Japan',
        publisher: 'Bank of Japan, Tokio',
        year: 2026,
        type: 'documento',
        url: 'https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/index.htm'
      },
      {
        title: 'Japanese Public Finance Fact Sheet',
        author: 'Ministerio de Finanzas de Japón',
        publisher: 'Ministry of Finance, Tokio',
        year: 2026,
        type: 'informe',
        url: 'https://www.mof.go.jp/english/policy/budget/budget/fy2026/02.pdf'
      },
      {
        title: 'Progress and Budget in Fundamental Reinforcement of Defense Capabilities',
        author: 'Ministerio de Defensa de Japón',
        publisher: 'Ministry of Defense, Tokio',
        year: 2025,
        type: 'informe',
        url: 'https://www.mod.go.jp/en/d_act/d_budget/index.html'
      },
      {
        title: 'The Japanese Firm: The Sources of Competitive Strength',
        author: 'Masahiko Aoki y Ronald Dore (eds.)',
        publisher: 'Oxford University Press',
        year: 1994,
        type: 'libro'
      },
      {
        title: 'Hirohito and the Making of Modern Japan',
        author: 'Herbert P. Bix',
        publisher: 'HarperCollins, Nueva York',
        year: 2000,
        type: 'libro'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
