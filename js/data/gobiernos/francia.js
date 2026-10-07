(function (PW) {
  'use strict';
  PW.gobiernos = PW.gobiernos || {};
  PW.gobiernos['francia'] = {
    kind: 'gobierno',
    slug: 'francia',
    title: 'Francia: el Estado de la Quinta República',
    subtitle: 'República unitaria con presidente electo por sufragio universal, gobierno responsable ante el Parlamento y control de constitucionalidad ejercido por un consejo de nueve miembros',
    category: 'Gobierno',
    tags: ['república', 'quinta república', 'constitución', 'parlamento', 'democracia representativa', 'política exterior'],
    region: 'Europa Occidental',
    timeFrame: '1958-actualidad',
    updated: '2026-09-27',
    summary: 'República constitucional de Europa occidental en la que un presidente electo por cinco años arbitra el funcionamiento de los poderes públicos, con un gobierno responsable ante un Parlamento de dos cámaras y un Consejo constitucional de nueve miembros como árbitro de la constitucionalidad.',
    actors: [
      { name: 'Consejo constitucional', role: 'árbitro de la conformidad de las leyes con la Constitución y de la regularidad de las consultas electorales', power: 'alta' },
      { name: 'Asamblea nacional', role: 'cámara elegida por sufragio directo, de la que depende el Gobierno y que el presidente puede disolver', power: 'alta' },
      { name: 'Consejo de Seguridad de las Naciones Unidas', role: 'foro en el que Francia es miembro permanente desde 1945 y dispone de derecho de veto', power: 'alta' },
      { name: 'Senado', role: 'representación constitucional de las collectivités territoriales y única cámara que no puede disolverse', power: 'media' },
      { name: 'Unión Europea', role: 'marco al que se han transferido competencias como la política monetaria y el comercio exterior', power: 'media' },
      { name: 'Organización del Tratado del Atlántico Norte', role: 'alianza en la que Francia conserva una disuasión nuclear nacional y un mando militar propio', power: 'media' }
    ],
    infobox: {
      caption: 'Francia, Quinta República',
      color: '#2c5f8a',
      rows: [
        ['Período', '1958-actualidad'],
        ['Forma de Estado', 'República unitaria, indivisible, laica, democrática y social'],
        ['Constitución vigente', '4 de octubre de 1958, con la última revisión de 8 de marzo de 2024'],
        ['Jefatura del Estado', 'Presidente de la República, elegido por cinco años y no más de dos mandatos consecutivos'],
        ['Presidente en el cargo', 'Emmanuel Macron, reelegido el 24 de abril de 2022'],
        ['Parlamento', 'Asamblea nacional de 577 diputados y Senado de 348 senadores']
      ]
    },
    sections: [
      {
        id: 'origen',
        heading: 'Origen: el diseño constitucional de 1958',
        blocks: [
          {
            type: 'p',
            text: 'La Constitución del 4 de octubre de 1958 define el país en su primer artículo: Francia es una República indivisible, laica, democrática y social, con la igualdad ante la ley y una organización descentralizada. La soberanía nacional pertenece al pueblo, que la ejerce por sus representantes y por la vía del referéndum, y ninguna sección del pueblo ni ningún individuo puede atribuírsela. Sobre esa base se sitúa un presidente que arbitra el funcionamiento regular de los poderes públicos y garantiza la independencia nacional, la integridad del territorio y el respeto de los tratados.'
          },
          {
            type: 'p',
            text: 'El constituyente buscaba romper con la inestabilidad de la Cuarta República, y la respuesta fue lo que la propia Asamblea nacional denomina el «parlamentarismo racionalizado». La discusión de un proyecto de ley no puede comenzar ante la primera cámara hasta seis semanas después de su depósito, ni ante la segunda hasta cuatro semanas después de su transmisión, y la sesión ordinaria no puede superar los ciento veinte días. El artículo 89 impide además que la forma republicana del Gobierno sea revisada y veta cualquier reforma que atente contra la integridad del territorio.'
          },
          {
            type: 'table',
            head: ['Fecha', 'Cambio constitucional', 'Vía'],
            rows: [
              ['28 de septiembre de 1958', 'Aprobación de la Constitución, con un 82,6 % de votos favorables', 'Consulta constituyente'],
              ['27 de abril de 1969', 'Reforma del Senado y regiones, rechazada con un 52,4 % de votos negativos', 'Referéndum del artículo 11'],
              ['24 de septiembre de 2000', 'El mandato presidencial pasa de siete a cinco años', 'Referéndum constituyente del artículo 89'],
              ['29 de mayo de 2005', 'Tratado de Constitución europea, rechazado con un 54,7 % de votos negativos', 'Referéndum del artículo 11'],
              ['23 de julio de 2008', 'Modernización de las instituciones, con más de la mitad de los artículos afectados', 'Congreso, vigesimocuarta revisión'],
              ['8 de marzo de 2024', 'La libertad de la interrupción voluntaria de embarazo pasa a la norma fundamental', 'Congreso, segunda vez que se evita el referéndum']
            ]
          },
          {
            type: 'p',
            text: 'Desde 1958 se han celebrado nueve referenda nacionales al amparo de los artículos 11 y 89, ocho legislativos y uno constituyente, además de la consulta que aprobó el texto de 1958. Solo dos revisiones se han sometido a consulta popular, de modo que la vía del Congreso es la efectivamente utilizada, y las reformas de 2008 y 2024 son las dos únicas que recurrieron a ella. La última se adoptó con 780 votos favorables y 72 negativos. En cambio, el artículo 11, que permite consultar la organización de los poderes públicos, la política económica y social y la ratificación de tratados, no se ha vuelto a utilizar desde 2005.'
          }
        ]
      },
      {
        id: 'poderes',
        heading: 'Poderes: cómo se reparte el ejecutivo',
        blocks: [
          {
            type: 'p',
            text: 'El artículo 20 encomienda al Gobierno la determinación y la conducción de la política de la nación, y el artículo 21 precisa que el primer ministro dirige la acción del Gobierno, responde de la defensa nacional, asegura la ejecución de las leyes y ejerce el poder reglamentario y los nombramientos, salvo los altos cargos del artículo 13. Esa es la dirección cotidiana de la política, aunque el presidente disponga de instrumentos para reorientarla y para relevar a su Gobierno.'
          },
          {
            type: 'quote',
            text: 'Le Président de la République veille au respect de la Constitution. Il assure, par son arbitrage, le fonctionnement régulier des pouvoirs publics ainsi que la continuité de l’État. Il est le garant de l’indépendance nationale, de l’intégrité du territoire et du respect des traités.',
            cite: 'Constitución de la República francesa, artículo 5',
            author: 'Pueblo francés'
          },
          {
            type: 'p',
            text: 'El artículo 19 delimita esa discreción: los actos del presidente distintos de los previstos en los artículos 8, 11, 12, 16, 18, 54, 56 y 61 llevan la firma del primer ministro. La excepción mayor es el artículo 16, que permite al presidente tomar medidas propias ante una amenaza grave e inmediata a las instituciones, la independencia o la integridad del territorio, o ante la interrupción del funcionamiento regular de los poderes, sin contrasignatura y con el Parlamento reunido de pleno derecho. La reforma de 2008 no suprimió ese poder, sino que le puso un freno en el tiempo: a los treinta días el Consejo constitucional puede ser solicitado por los presidentes de las Cámaras o por sesenta diputados o sesenta senadores, y a los sesenta días procede de oficio.'
          },
          {
            type: 'ul',
            items: [
              'El artículo 12 permite disolver la Asamblea nacional previa consulta, pero no dos veces en un mismo año, y las elecciones deben celebrarse entre veinte y cuarenta días después.',
              'El artículo 18 establece que los mensajes del presidente se leen sin dar lugar a debate y que solo ante el Congreso su declaración abre un debate que no se vota.',
              'El artículo 17 reserva al presidente el derecho de conceder gracias a título individual, sin procedimiento de revisión ni control.',
              'El artículo 4 obliga a la ley a garantizar la expresión pluralista de las opiniones y la participación equitativa de los partidos en la vida democrática.'
            ]
          }
        ]
      },
      {
        id: 'parlamento',
        heading: 'Parlamento y control de constitucionalidad',
        blocks: [
          {
            type: 'p',
            text: 'El artículo 24 compone un bicameralismo desigual. La Asamblea nacional reúne hasta quinientos setenta y siete diputados, electos por sufragio universal directo, y el Senado hasta trescientos cuarenta y ocho senadores, electos por sufragio universal indirecto, con la misión de asegurar la representación de las collectivités territoriales de la República. Desde la reforma de 2008 los franceses establecidos en el extranjero están representados en ambas Cámaras. El Senado, que cuenta con 348 miembros desde 2011 y unos 172.600 grandes electores, se renueva por mitades cada tres años y nunca puede ser disuelto: esa continuidad es la razón de ser de la Cámara alta.'
          },
          {
            type: 'p',
            text: 'El artículo 56 compone el Consejo constitucional de nueve miembros cuyo mandato dura nueve años y no es renovable, y se renueva por tercios cada tres años. Tres son nombrados por el presidente de la República, tres por el presidente de la Asamblea nacional y tres por el presidente del Senado, y los antiguos presidentes de la República forman parte de él de por vida. Desde 2008 dispone de la question prioritaire de constitutionnalité del artículo 61-1, que le llega por remisión del Consejo de Estado o de la Corte de casación desde un procedimiento en curso. Sus decisiones no admiten recurso, obligan a todos los poderes públicos y abrogen la disposición declarada inconstitucional.'
          },
          {
            type: 'p',
            text: 'El contrapeso principal del poder ejecutivo está, sin embargo, en la responsabilidad política. El artículo 49 permite al primer ministro someter a la Asamblea nacional la responsabilidad del Gobierno sobre su programa, y la respuesta es la motion de censure, admisible solo si la firman un décimo de los miembros de la Cámara, se vota cuarenta y ocho horas después y exige la mayoría absoluta. El tercer apartado autoriza un procedimiento para aprobar sin votación los proyectos de ley de finanzas y de financiación de la seguridad social, más un solo texto por sesión, que ha adquirido el nombre de artículo 49.3. Según los recuentos de la propia Asamblea nacional, entre 1958 y septiembre de 2025 se produjeron 116 compromisos de responsabilidad sobre 61 textos y 87 motions de censure; en enero de 2026 el gobierno de Sébastien Lecornu lo utilizó tres veces para el presupuesto del Estado, y en diciembre de 2024 una motion de censure venció al gobierno de Michel Barnier con 331 votos, la primera aprobada desde 1962.'
          }
        ]
      },
      {
        id: 'territorio-y-partidos',
        heading: 'Territorio, ultraperiferia y sistema de partidos',
        blocks: [
          {
            type: 'p',
            text: 'El artículo 72 enumera las collectivités territoriales de la República: las communes, los departamentos, las regiones, las collectivités con statut particulier y las collectivités de ultramar del artículo 74. Cada una decide lo que pueda gestionarse mejor a su escala, se administra mediante consejos electos y ninguna puede ejercer tutela sobre otra, mientras el representante del Estado conserva los intereses nacionales y el control administrativo. La ultraperiferia es la parte más característica de esa organización, con la Guadeloupe, la Guayana, la Martinica, La Reunión y Mayotte bajo el artículo 73; San Bartolomé, San Martín, San Pedro y Miquelón, Wallis y Futuna y la Polinesia francesa bajo el artículo 74; la Nueva Caledonia con título propio; y un régimen legal específico para las Tierras australes y antárticas y Clipperton.'
          },
          {
            type: 'table',
            head: ['Régimen de ultramar', 'Territorios', 'Rasgo del régimen'],
            rows: [
              ['Artículo 73', 'Guadalupe, Guayana, Martinica, La Reunión y Mayotte', 'Ley y reglamento aplicables de pleno derecho'],
              ['Artículo 74', 'San Bartolomé, San Martín, Wallis y Futuna y Polinesia francesa', 'Estatuto particular por ley orgánica'],
              ['Título XIII', 'Nueva Caledonia', 'Régimen singular, con el acuerdo de Numea de 1998 como horizonte'],
              ['Ley específica', 'Tierras australes y antárticas y Clipperton', 'Régimen fijado por la ley']
            ]
          },
          {
            type: 'p',
            text: 'La fragmentación del sistema de partidos no es reciente, pero se ha acelerado en la última década. El partido conservador se escindió en 2001, el partido socialista lo hizo en 2008 en torno a su candidata a la presidencia, y el antiguo Frente Nacional es hoy la formación principal del voto nacional-populista bajo otra denominación, con decenas de movimientos menores a su alrededor. Ninguna formación reúne por sí sola la mayoría absoluta de los 577 diputados, de modo que las mayorías se forman por negociación y son frágiles ante cada texto.'
          },
          {
            type: 'ul',
            items: [
              'Cuando una ley debe ser aceptada por una mayoría que nadie posee, las opciones se reducen a tres: negociar un compromiso, disolver la Asamblea y repetir la consulta, o recurrir al artículo 49.3.',
              'La reforma de 2008 sustituyó los criterios de delimitación de circunscripciones por criterios esencialmente demográficos, con una comisión independiente que emite dictamen sobre cualquier redibujo.',
              'El artículo 50-1 permite al Gobierno pronunciar declaraciones que abren debate y, si lo decide, votación, sin comprometer su responsabilidad política ante la Cámara.',
              'El artículo 75-1 declara que las lenguas regionales pertenecen al patrimonio de la República, y el artículo 72-3 reconoce a las poblaciones de ultramar dentro de un ideal común de libertad, igualdad y fraternidad.'
            ]
          }
        ]
      },
      {
        id: 'economia',
        heading: 'Economía y finanzas públicas',
        blocks: [
          {
            type: 'p',
            text: 'El Instituto Nacional de Estadística y Estudios Económicos estima que al 1 de enero de 2026 Francia cuenta con 69,1 millones de residentes, de los que 66,8 millones viven en la metrópoli y 2,3 millones en los departamentos de ultramar. El 22 % tiene 65 años o más, una proporción casi idéntica a la de los menores de veinte años. En 2025 el saldo natural se volvió ligeramente negativo, con unos seis mil nacimientos menos de defunciones, frente a un saldo migratorio estimado de 176 mil personas, lo que confirma que el crecimiento demográfico depende en adelante de la inmigración.'
          },
          {
            type: 'p',
            text: 'La Contabilidad nacional de 2025 sitúa el producto interior bruto en 2.991,1 miles de millones de euros, con un crecimiento en volumen del 0,8 %. El déficit público alcanzó 152,5 miles de millones, el 5,1 % del producto, frente al 5,8 % de 2024, y la deuda de las administraciones públicas en sentido de Maastrich se elevó en 154,4 miles de millones hasta 3.460,5 miles de millones, un 115,6 % del producto, con una deuda neta del 108,4 %. El Estado concentra por sí solo 2.822,7 miles de millones de ese total, y la caja de la seguridad social volvió a ser deficitaria por primera vez desde 2021. La mejora del déficit se explica sobre todo por el crecimiento de los ingresos, y no por un recorte del gasto, que se mantiene por encima del 57 % del producto.'
          },
          {
            type: 'table',
            head: ['Ratio (en % del PIB)', '2022', '2023', '2024', '2025'],
            rows: [
              ['Déficit público', '4,7', '5,4', '5,8', '5,1'],
              ['Deuda pública bruta', '111,4', '109,5', '112,6', '115,6'],
              ['Deuda pública neta', '101,1', '101,4', '104,5', '108,4'],
              ['Gasto público', '58,4', '56,8', '57,0', '57,2'],
              ['Presión fiscal', '45,0', '43,2', '42,8', '43,6'],
              ['Población al 1 de enero (millones)', '68,1', '68,4', '68,6', '68,9']
            ]
          },
          {
            type: 'ol',
            items: [
              'El artículo 34 obliga a que las orientaciones pluriannuales de las finanzas públicas se definan por leyes de programación, lo que impide ajustes bruscos de un año para otro.',
              'En un país sin mayorías absolutas, cada presupuesto anual es una prueba de supervivencia del Gobierno, y el artículo 49.3 acaba siendo el mecanismo por el que se resuelven los debates inevitables.',
              'La reforma de las pensiones de 2023, que elevó la edad legal de jubilación de 62 a 64 años, se aprobó por ese procedimiento sin votación de la Cámara.',
              'El artículo 47-1 limita a veinte días la primera lectura de un proyecto de financiación de la seguridad social y a cincuenta días la aprobación total, tras lo cual el Gobierno puede dictar la medida por ordonnance.'
            ]
          }
        ]
      },
      {
        id: 'politica-exterior',
        heading: 'Política exterior y perspectivas',
        blocks: [
          {
            type: 'p',
            text: 'El artículo 52 encomienda al presidente la negociación y la ratificación de los tratados, y el artículo 53 somete a ley los tratados de paz y de comercio, los relativos a la organización internacional, los que comprometen las finanzas del Estado y los que modifican disposiciones legislativas, además de impedir toda cesión de territorio sin el consentimiento de las poblaciones interesadas. El artículo 55 sitúa el tratado por encima de la ley, y el artículo 88-1 precisa que la República participa en la [[org:union-europea|Unión Europea]] constituida según los tratados firmados en Lisboa el 13 de diciembre de 2007. Francia es uno de los seis Estados fundadores de la Comunidad del Carbón y del Acero en 1951 y de la Comunidad Económica Europea mediante los tratados de Roma de 1957.'
          },
          {
            type: 'p',
            text: 'El reparto de competencias es deliberado: lo transferido a la Unión es casi todo de naturaleza económica y administrativa, mientras la defensa, la política exterior y la seguridad quedan fuera de su ámbito. Esa frontera explica por qué la ratificación de los tratados europeos activa el artículo 11 y por qué se ha consultado dos veces al electorado, en 1992 y en 2005. En seguridad, el artículo 15 hace del presidente el jefe de las fuerzas armadas, y la ley de programación militar para los años 2024 a 2030, adoptada el 13 de julio de 2023, programa 413.300 millones de euros de necesidades y fija el objetivo de elevar el esfuerzo de defensa al 2 % de la riqueza nacional. La disuasión nuclear nacional propia ha permitido mantener una política exterior independiente, y explica la retirada de la estructura militar integrada de la OTAN en 1966 y su reintegración en 2009.'
          },
          {
            type: 'ul',
            items: [
              'Miembro permanente del Consejo de Seguridad de la [[org:onu|ONU]] desde 1945, Francia puede vetar cualquier resolución sustantiva, lo que la convierte en uno de los cinco centros de poder del sistema descrito en [[geo:orden-multipolar|el orden multipolar]].',
              'La ratificación de tratados con incidencia institucional exige la mayoría de tres quintos en el Congreso o un referéndum, un procedimiento que convierte cada reforma europea en un asunto de política interna francesa.',
              'En el sur del Mediterráneo y en el Índico, la presencia francesa combina despliegue naval, ayuda al desarrollo y dependencia del comercio energético.',
              'En la esfera económica, la dependencia de las energías importadas y la competencia en semiconductores limitan la autonomía estratégica clásica del país.'
            ]
          },
          {
            type: 'p',
            text: 'La perspectiva más probable apunta hacia el [[reformismo]] institucional. El diseño de 1958 confiaba a un presidente el arbitraje y no la dirección de la política, y la práctica reciente ha desplazado ese equilibrio hacia una personalización del poder que choca con la fragmentación del Parlamento y con una crisis de confianza en las instituciones. Entre 2024 y 2025 Francia ha tenido cuatro primeros ministros, desde Gabriel Attal hasta Sébastien Lecornu, nombrado el 10 de octubre de 2025, con un gobierno caído por una motion de censure en diciembre de 2024. La tradición francesa combina un constitucionalismo social heredado del preámbulo de 1946 con una práctica liberal de [[liberalismo|Estado de derecho]] y con un legado [[socialdemocracia|socialdemócrata]] en la financiación de la protección social, y el debate sobre si ese equilibrio se sostiene continúa abierto.'
          }
        ]
      }
    ],
    categories: ['Gobiernos', 'Europa occidental', 'Instituciones políticas', 'Derecho constitucional'],
    related: ['liberalismo', 'socialdemocracia', 'org:union-europea', 'org:onu', 'geo:orden-multipolar'],
    references: [
      {
        title: 'Constitution du 4 octobre 1958 en vigueur',
        author: 'Conseil constitutionnel',
        publisher: 'Conseil constitutionnel, París',
        year: 1958,
        type: 'ley',
        url: 'https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/texte-integral-de-la-constitution-du-4-octobre-1958-en-vigueur'
      },
      {
        title: 'Loi constitutionnelle n° 2008-724 du 23 juillet 2008 de modernisation des institutions de la Ve République',
        author: 'Conseil constitutionnel',
        publisher: 'Conseil constitutionnel, París',
        year: 2008,
        type: 'ley',
        url: 'https://www.conseil-constitutionnel.fr/les-revisions-constitutionnelles/loi-constitutionnelle-n-2008-724-du-23-juillet-2008'
      },
      {
        title: 'Loi constitutionnelle n° 2024-200 du 8 mars 2024 relative à la liberté de recourir à l’interruption volontaire de grossesse',
        author: 'Conseil constitutionnel',
        publisher: 'Conseil constitutionnel, París',
        year: 2024,
        type: 'ley',
        url: 'https://www.conseil-constitutionnel.fr/loi-constitutionnelle-n-2024-200-du-8-mars-2024'
      },
      {
        title: 'Loi constitutionnelle n° 2000-964 du 2 octobre 2000 relative à la durée du mandat du Président de la République',
        author: 'Conseil constitutionnel',
        publisher: 'Conseil constitutionnel, París',
        year: 2000,
        type: 'ley',
        url: 'https://www.conseil-constitutionnel.fr/les-revisions-constitutionnelles/loi-constitutionnelle-n-2000-964-du-2-octobre-2000'
      },
      {
        title: 'Loi relative à la programmation militaire pour les années 2024 à 2030',
        author: 'Ministère des Armées',
        publisher: 'Ministère des Armées, París',
        year: 2023,
        type: 'ley',
        url: 'https://www.defense.gouv.fr/ministere/politique-defense/loi-programmation-militaire-2024-2030/loi-programmation-militaire-2024-2030-grandes'
      },
      {
        title: 'Bilan démographique 2025',
        author: 'Institut national de la statistique et des études économiques',
        publisher: 'Insee, Collection Insee Première, París',
        year: 2026,
        type: 'informe',
        url: 'https://www.insee.fr/fr/statistiques/8719824'
      },
      {
        title: 'En 2025, le déficit public s’élève à 5,1 % du PIB, la dette publique à 115,6 % du PIB',
        author: 'Institut national de la statistique et des études économiques',
        publisher: 'Insee, Collection Informations Rapides, París',
        year: 2026,
        type: 'informe',
        url: 'https://www.insee.fr/fr/statistiques/8956575'
      },
      {
        title: 'Engagements de responsabilité du Gouvernement et motions de censure depuis 1958',
        author: 'Assemblée nationale',
        publisher: 'Assemblée nationale, París',
        year: 2025,
        type: 'dato',
        url: 'https://www.assemblee-nationale.fr/dyn/engagements_responsabilite-motions_censures/engagements-de-responsabilite-du-gouvernement-et-motions-de-censure-depuis-1958'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
