(function (PW) {
  'use strict';
  PW.gobiernos = PW.gobiernos || {};
  PW.gobiernos['rusia'] = {
    kind: 'gobierno',
    slug: 'rusia',
    title: 'Rusia',
    subtitle: 'República federal euroasiática con el poder ejecutivo concentrado en la presidencia, miembro permanente del Consejo de Seguridad de la ONU y segundo arsenal nuclear del mundo',
    category: 'Gobierno',
    tags: ['república federal', 'presidencialismo', 'derecho de veto', 'recursos energéticos', 'seguridad nuclear', 'ordenamiento territorial'],
    region: 'Europa Oriental',
    timeFrame: '1991-actualidad',
    updated: '2026-09-27',
    summary: 'Estado federal euroasiático que concentra el poder ejecutivo en la presidencia, gobierna con un partido de mayoría absoluta en la Cámara de Diputados y es miembro permanente del Consejo de Seguridad de la ONU con derecho de veto.',
    actors: [
      { name: 'Presidencia de la Federación de Rusia', role: 'dirige el Poder Ejecutivo, fija la política interior y exterior y ejerce el mando supremo de las Fuerzas Armadas', power: 'alta' },
      { name: 'Consejo de Seguridad de la ONU', role: 'vía institucional por la que Rusia bloquea la adopción de resoluciones sobre las guerras y crisis que la afectan', power: 'alta' },
      { name: 'Unidad Rusia', role: 'partido dominante que reúne la mayoría absoluta de la Cámara de Diputados y sostiene al Gobierno', power: 'alta' },
      { name: 'Servicios de seguridad y defensa', role: 'organismos dependientes de la presidencia que concentran el uso de la fuerza y la administración de la seguridad interior', power: 'media' },
      { name: 'Unión Europea', role: 'principal proveedor de sanciones económicas y principal destinatario de las exportaciones de energía de Rusia', power: 'media' },
      { name: 'China', role: 'socio comercial y diplomático principal de Rusia en el plano internacional y en los foros del Sur Global', power: 'media' }
    ],
    infobox: {
      caption: 'Rusia',
      color: '#5b6b7a',
      rows: [
        ['Período', '1991-actualidad'],
        ['Forma de Estado', 'República federal con sistema semicpresidencial'],
        ['Constitución', 'Aprobada el 12 de diciembre de 1993, reformada en 2020 y en 2024'],
        ['Presidente', 'Vladímir Putin, reelegido el 17 de marzo de 2024'],
        ['Parlamento', 'Asamblea Federal: 450 diputados y 178 senadores'],
        ['Sujetos de la Federación', '89 según la legislación rusa; 83 reconocidos internacionalmente'],
        ['Capital y sede', 'Moscú']
      ]
    },
    sections: [
      {
        id: 'marco-constitucional',
        heading: 'Marco constitucional: de 1993 a la reforma de 2020',
        blocks: [
          {
            type: 'p',
            text: 'La Constitución vigente se aprobó por votación nacional el 12 de diciembre de 1993 y entró en vigor el 25 de ese mismo mes, con lo que sustituyó al orden soviético. Sus nueve capítulos organizan un sistema que la doctrina describe como semicpresidencial, en el que la presidencia concentra atribuciones muy amplias sobre el Poder Ejecutivo, la legislación y la Judicatura. El texto se redactó en la Conferencia Constitucional de 1993, con más de ochocientos participantes, y se inspiró en proyectos como el de Mijaíl Speranski.'
          },
          {
            type: 'table',
            head: ['Momento', 'Hito constitucional', 'Efecto político'],
            rows: [
              ['1993', 'Aprobación por votación nacional de la Constitución actual', 'Nace una federación con fuerte poder presidencial'],
              ['2020', 'Paquete de más de doscientas enmiendas sometido a votación el 1 de julio', 'Los mandatos anteriores dejan de computar para el límite de dos mandatos'],
              ['2024', 'Nuevo paquete sobre el poder presidencial, el Consejo de Estado y los valores declarados', 'Refuerza la subordinación de las instituciones al centro'],
              ['2030', 'Próxima elección presidencial prevista por el calendario constitucional', 'Marca la continuidad o el cambio en la cúpula del Estado']
            ]
          },
          {
            type: 'p',
            text: 'La reforma de 2020 fue la más importante desde 1993. El proyecto se entregó a la Cámara de Diputados el 20 de enero de 2020; ambas cámaras lo aprobaron el 11 de marzo, el presidente lo firmó el 14 de marzo y el Tribunal Constitucional dictaminó su conformidad el día 16. Entre el 25 de junio y el 1 de julio se celebró una votación en todo el país, con una participación del 67,9 por ciento y un 77,92 por ciento de votos favorables, según la Comisión Electoral Central. Fue una votación nacional que el propio proyecto hacía condicionante.'
          },
          {
            type: 'ul',
            items: [
              'Reinicio del cómputo de mandatos: los mandatos servidos antes de la reforma dejan de contar.',
              'El Consejo de Estado pasa de órgano consultivo a órgano constitucional, encargado de coordinar las ramas.',
              'El presidente designa al primer ministro y a los ministros, con la aprobación previa de la Cámara de Diputados.',
              'La Constitución declara la primacía del derecho interno sobre las decisiones de los organismos internacionales.'
            ]
          },
          {
            type: 'quote',
            text: 'El Presidente de la Federación de Rusia es el Comandante Supremo de las Fuerzas Armadas de la Federación de Rusia.',
            cite: 'Constitución de la Federación de Rusia, artículo 87 (traducción propia)',
            author: 'Poder Constituyente de la Federación de Rusia'
          }
        ]
      },
      {
        id: 'poder-ejecutivo',
        heading: 'Poder Ejecutivo: la presidencia como centro de gravedad',
        blocks: [
          {
            type: 'p',
            text: 'La presidencia es el centro del sistema. El presidente fija las líneas generales de la política interior y exterior, nombra y destituye al primer ministro y a los ministros, ejerce el mando supremo de las Fuerzas Armadas y puede disolver la Cámara de Diputados. El mandato dura seis años y en el mandato actual las decisiones se adoptan sin oposición determinante. Vladímir Putin fue reelegido el 17 de marzo de 2024 con el 87,28 por ciento de los votos emitidos y una participación del 77,49 por ciento.'
          },
          {
            type: 'table',
            head: ['Órgano', 'Composición', 'Poderes esenciales'],
            rows: [
              ['Presidente', 'Una persona, mandato de seis años', 'Política interior y exterior, mando supremo, nombramiento del Gobierno, disolución de la Cámara'],
              ['Primer Ministro y Gobierno', 'Primer ministro y ministros', 'Ejecución de la política pública y administración del Estado'],
              ['Consejo de Estado', 'Presidente, jefes de ambas cámaras y titulares de los órganos ejecutivos', 'Coordinación de las ramas y de las prioridades'],
              ['Consejo de la Federación', '178 senadores y hasta 30 nombrados por el presidente', 'Aprobación de leyes y de los nombramientos más delicados'],
              ['Fiscalía General', 'Fiscal general y fiscales adjuntos', 'Investigación y acusación penal en nombre del Estado']
            ]
          },
          {
            type: 'p',
            text: 'El primer ministro dirige el Gobierno y responde ante la Cámara de Diputados, aunque su margen de autonomía es limitado por su dependencia política. El Consejo de Estado reúne a las principales autoridades del país y funciona como plataforma de coordinación entre el centro y las regiones.'
          }
        ]
      },
      {
        id: 'poder-legislativo',
        heading: 'Poder Legislativo y elecciones',
        blocks: [
          {
            type: 'p',
            text: 'La Asamblea Federal se compone de dos cámaras. La Cámara de Diputados reúne 450 miembros y se elige para un mandato de cinco años mediante un sistema mixto: 225 diputados por distritos uninominales y 225 por lista nacional, con un umbral del cinco por ciento. El Consejo de la Federación envía dos senadores por cada sujeto de la Federación y, desde 2020, admite además hasta treinta miembros nombrados por el presidente.'
          },
          {
            type: 'table',
            head: ['Partido o grupo', 'Escaños obtenidos en 2026'],
            rows: [
              ['Unidad Rusia', '349'],
              ['Partido Comunista de la Federación Rusa', '37'],
              ['Partido Liberal-Demócrata de Rusia', '23'],
              ['Nuevos Seres', '19'],
              ['Un Russia Justa', '17'],
              ['Otros grupos y candidatos sin partido', '5']
            ]
          },
          {
            type: 'p',
            text: 'Las elecciones a la Cámara de Diputados se celebraron del 18 al 20 de septiembre de 2026, con una participación declarada del 59,8 por ciento. Fue la primera convocatoria desde 2021 y la primera en tiempo de guerra, y el resultado superó el récord anterior del partido, fijado en 2016. La campaña coincidió con los ataques con drones contra los centros tecnológicos, según la Comisión Electoral Central.'
          }
        ]
      },
      {
        id: 'ordenamiento-territorial',
        heading: 'Ordenamiento territorial y sujetos de la Federación',
        blocks: [
          {
            type: 'p',
            text: 'La estructura territorial es el resultado de una federalización asimétrica, con niveles muy distintos de autonomía según el tipo de sujeto. La legislación rusa cuenta 89 sujetos: 83 son reconocidos internacionalmente y seis fueron incorporados en 2014 y 2022.'
          },
          {
            type: 'table',
            head: ['Tipo de sujeto', 'Número'],
            rows: [
              ['Repúblicas', '24'],
              ['Oblast', '48'],
              ['Krai', '9'],
              ['Ciudades federales', '3'],
              ['Okrugs autónomos', '4']
            ]
          },
          {
            type: 'p',
            text: 'Las seis unidades no reconocidas se incorporaron en dos etapas: Crimea y Sebastopol en 2014, y las regiones de Donetsk, Luhansk, Zaporiyia y Jersón en 2022. La Asamblea General de las Naciones Unidas rechazó el segundo caso en su resolución ES-11/4, adoptada por 143 votos a favor, 5 en contra y 35 abstenciones.'
          }
        ]
      },
      {
        id: 'recursos-y-economia',
        heading: 'Recursos, economía y gasto militar',
        blocks: [
          {
            type: 'p',
            text: 'La base económica sigue siendo la extracción y la exportación de materias primas, con el gas natural como producto principal y el petróleo como segundo. El Banco Mundial estimó un producto interior bruto de 2,19 billones de dólares en 2024 y una población de unos 143,7 millones de habitantes ese mismo año.'
          },
          {
            type: 'table',
            head: ['Indicador', 'Valor', 'Fuente y año'],
            rows: [
              ['Producto interior bruto a precios corrientes', '2,19 billones de dólares', 'Banco Mundial, 2024'],
              ['Población', '143,7 millones de habitantes', 'Banco Mundial, 2024'],
              ['Gasto militar', '149.000 millones de dólares', 'SIPRI, estimación de 2024'],
              ['Gasto militar sobre el producto interior bruto', '7,1 por ciento', 'SIPRI, estimación de 2024'],
              ['Gasto militar sobre el presupuesto estatal', '19 por ciento', 'SIPRI, estimación de 2024']
            ]
          },
          {
            type: 'p',
            text: 'Las cifras de gasto militar son estimaciones: una parte del presupuesto se clasifica como secreto y el Estado recurre a canales extraordinarios de financiación. Desde 2022, el acceso a los mercados financieros y a la tecnología occidental depende de un régimen de sanciones que se ha ampliado de forma sucesiva y sigue siendo la principal herramienta de presión externa. La dependencia de los mercados europeos de energía se explica en [[geo:energia-y-dependencias|energía y dependencias]].'
          }
        ]
      },
      {
        id: 'veto-y-arsenal-nuclear',
        heading: 'Derecho de veto y arsenal nuclear',
        blocks: [
          {
            type: 'p',
            text: 'Como miembro permanente del [[org:onu|Consejo de Seguridad]], Rusia puede bloquear por sí sola cualquier resolución sustantiva. Es el miembro permanente que más vetos ha ejercido, y desde 2022 la mayoría de ellos se concentra en los expedientes relacionados con la guerra en Ucrania.'
          },
          {
            type: 'p',
            text: 'El tratado New START, que limitaba los arsenales estratégicos de Estados Unidos y Rusia, venció el 5 de febrero de 2026 y dejó sin topes. En septiembre de 2025, Rusia había propuesto respetar los topes durante un año más, sin respuesta formal de Washington y con negociaciones reanudadas en 2026.'
          }
        ]
      },
      {
        id: 'debate-y-tendencias',
        heading: 'Debate abierto y tendencias',
        blocks: [
          {
            type: 'p',
            text: 'La caracterización del régimen ruso sigue siendo disputada. La lectura oficial se apoya en la estabilidad institucional, la soberanía popular y el multipolarismo; la crítica lo describe como un régimen autoritario con aparente Estado de derecho. El caso es un buen ejemplo de por qué conviene distinguir el derecho positivo de su aplicación real.'
          },
          {
            type: 'ul',
            items: [
              'La continuidad en la cúpula y la cuestión de una sucesión sin mecanismo institucional previsto.',
              'El coste político y material del conflicto en curso y su efecto sobre el presupuesto interno.',
              'La demografía: una población que envejece y se reduce, con efectos sobre la mano de obra y la fiscalidad.',
              'La dependencia de los ingresos energéticos y la capacidad de sostenerlos frente a las sanciones.'
            ]
          },
          {
            type: 'note',
            text: 'Las cifras de gasto militar proceden de estimaciones del SIPRI y pueden revisarse al alza: parte del presupuesto se clasifica como secreto y existe financiación extra presupuestaria.'
          }
        ]
      }
    ],
    categories: ['Gobiernos', 'Estados federales', 'Política exterior'],
    related: ['geo:guerra-en-ucrania', 'geo:orden-multipolar', 'comunismo', 'militarismo', 'geo:energia-y-dependencias'],
    references: [
      {
        title: 'Law on amendment to Russian Federation Constitution',
        author: 'Poder Ejecutivo de la Federación de Rusia',
        publisher: 'Administración del Presidente de la Federación de Rusia, Moscú',
        year: 2020,
        type: 'ley',
        url: 'http://en.kremlin.ru/acts/news/62988'
      },
      {
        title: 'Trends in World Military Expenditure, 2024',
        author: 'Stockholm International Peace Research Institute',
        publisher: 'SIPRI, Estocolmo',
        year: 2025,
        type: 'informe',
        url: 'https://www.sipri.org/publications/2025/sipri-fact-sheets/trends-world-military-expenditure-2024'
      },
      {
        title: 'World Development Indicators',
        author: 'Banco Mundial',
        publisher: 'Banco Mundial, Washington',
        year: 2026,
        type: 'dato',
        url: 'https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=RU'
      },
      {
        title: 'Security Council: Vetoes since 1946',
        author: 'Organización de las Naciones Unidas',
        publisher: 'Organización de las Naciones Unidas, Nueva York',
        year: 2026,
        type: 'dato',
        url: 'https://main.un.org/securitycouncil/en/content/vetoes-since-1946'
      },
      {
        title: 'With 143 Votes in Favour, 5 Against, General Assembly Condemns Attempted Illegal Annexation of Ukrainian Regions',
        author: 'Asamblea General de las Naciones Unidas',
        publisher: 'Organización de las Naciones Unidas, Nueva York',
        year: 2022,
        type: 'documento',
        url: 'https://press.un.org/en/2022/ga12458.doc.htm'
      },
      {
        title: 'Russian Federation flouts international commitments once again with decision not to invite OSCE observers to presidential election',
        author: 'Oficina de Instituciones Democráticas y Derechos Humanos',
        publisher: 'OSCE/ODIHR, Varsovia',
        year: 2024,
        type: 'documento',
        url: 'https://odihr.osce.org/odihr/elections/russia/562065'
      },
      {
        title: 'New START at a Glance',
        author: 'Arms Control Association',
        publisher: 'Arms Control Association, Washington',
        year: 2026,
        type: 'informe',
        url: 'https://www.armscontrol.org/factsheets/new-start-glance'
      },
      {
        title: "United Russia Wins Record State Duma Majority in Elections Dubbed as the 'Most Uncompetitive' in Modern History",
        author: 'The Moscow Times',
        publisher: 'The Moscow Times, Moscú',
        year: 2026,
        type: 'articulo',
        url: 'https://www.themoscowtimes.com/2026/09/25/united-russia-wins-record-state-duma-majority-in-elections-dubbed-as-the-most-uncompetitive-in-modern-history-a93791'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
