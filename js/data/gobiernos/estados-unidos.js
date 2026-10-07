(function (PW) {
  'use strict';
  PW.gobiernos = PW.gobiernos || {};
  PW.gobiernos['estados-unidos'] = {
    kind: 'gobierno',
    slug: 'estados-unidos',
    title: 'El gobierno de Estados Unidos',
    subtitle: 'República federal de cincuenta Estados con poderes legislativos, ejecutivos y judiciales separados y un gobierno central limitado por una Constitución escrita',
    category: 'Gobierno',
    tags: ['federalismo', 'separación de poderes', 'república constitucional', 'presidencialismo', 'elecciones indirectas', 'gobierno federal'],
    region: 'América del Norte',
    timeFrame: '1789-actualidad',
    updated: '2026-09-27',
    summary: 'República federal de cincuenta Estados que separa el poder en un Congreso bicameral, un presidente y un Tribunal Supremo con contrapesos mutuos, limita el gobierno federal a las competencias enumeradas en la Constitución y reparte el resto de las potencias entre cincuenta legislaturas estatales.',
    actors: [
      { name: 'Presidencia de los Estados Unidos', role: 'dirige la ejecución de las leyes, la política exterior y el mando de las fuerzas armadas, y dispone del derecho de veto sobre la legislación del Congreso', power: 'alta' },
      { name: 'Congreso de los Estados Unidos', role: 'elabora las leyes, autoriza el gasto federal mediante la ley de apropiaciones y ejerce el poder exclusivo de acusación en el impeachment', power: 'alta' },
      { name: 'Tribunal Supremo de los Estados Unidos', role: 'interpreta la Constitución con efecto vinculante para los tribunales federales y resuelve los conflictos entre el gobierno federal y los Estados', power: 'alta' },
      { name: 'Gobiernos de los Estados y sus legislaturas', role: 'administran la educación, la policía, la justicia penal y la sanidad, y organizan las elecciones celebradas en su territorio', power: 'alta' },
      { name: 'Reserva Federal', role: 'fija la política monetaria con independencia del ejecutivo y del Congreso, y supervisa la banca y el sistema de pagos', power: 'media' },
      { name: 'Aliados, rivales y organizaciones internacionales', role: 'delimitan el margen de acción exterior del país mediante la [[org:onu|ONU]], la [[org:otan|OTAN]] y los acuerdos comerciales', power: 'media' }
    ],
    infobox: {
      caption: 'Gobierno de Estados Unidos',
      color: '#3b5b8a',
      rows: [
        ['Período', '1789-actualidad'],
        ['Forma de Estado', 'República federal'],
        ['Constitución', 'Adoptada en 1787, ratificada en 1788 y en vigor desde el 4 de marzo de 1789'],
        ['Capital', 'Washington, Distrito de Columbia'],
        ['Jefe de Estado', 'Presidente de la República, elegido por un colegio electoral de 538 miembros'],
        ['Legislación', 'Congreso bicameral con 435 representantes y 100 senadores'],
        ['Judicatura máxima', 'Tribunal Supremo de nueve jueces con cargo vitalicio'],
        ['Banco central', 'Reserva Federal, creada en 1913, con doce bancos regionales']
      ]
    },
    sections: [
      {
        id: 'marco-constitucional',
        heading: 'Marco constitucional: la Constitución de 1787',
        blocks: [
          {
            type: 'p',
            text: 'La Constitución de los Estados Unidos se adoptó en Filadelfia el 17 de septiembre de 1787, fue ratificada en 1788 por los Estados y entró en vigor el 4 de marzo de 1789. El artículo VI la sitúa por encima de las leyes de cualquier Estado y de los tratados, y obliga a los funcionarios a jurar respeto a la Constitución antes de entrar en funciones.'
          },
          {
            type: 'p',
            text: 'Su arquitectura reparte el poder en tres ramas, establece un reparto territorial de competencias, fija un procedimiento de reforma y recoge una lista de derechos. Los diez primeros artículos se añadieron en 1791 como Declaración de Derechos, raíz histórica del constitucionalismo que explica buena parte del [[liberalismo|constitucionalismo liberal]] actual, y desde entonces se han ratificado veintisiete enmiendas, la última en 1992.'
          },
          {
            type: 'ul',
            items: [
              'El artículo I concede al Congreso competencias expresamente enumeradas y prohíbe a los Estados ejercerlas por su cuenta.',
              'El artículo II investe a la presidencia de la ejecución de las leyes, del mando militar y de la negociación de tratados.',
              'El artículo III crea el poder judicial federal y limita su jurisdicción a las controversias que la propia Constitución le atribuye.',
              'Los artículos IV y V obligan a reconocer entre los Estados los documentos y procesos públicos y fijan el procedimiento para admitir nuevos Estados y para enmendar la Constitución.'
            ]
          },
          {
            type: 'p',
            text: 'El control de constitucionalidad no está enunciado de manera expresa, pero se instauró en 1803 con la sentencia Marbury contra Madison, en la que el Tribunal Supremo se declaró competente para revisar la constitucionalidad de las leyes del Congreso. Esa competencia es la que convierte en la práctica a la rama judicial en un poder efectivo de límites y no en una autoridad subordinada al ejecutivo o al Congreso.'
          },
          {
            type: 'quote',
            text: 'Esta Constitución es la ley suprema del país, y los jueces de cada uno de los Estados están obligados a defenderla.',
            cite: 'Constitución de los Estados Unidos, artículo VI',
            author: 'Convención Constitucional de Filadelfia, 1787'
          }
        ]
      },
      {
        id: 'equilibrio-poderes',
        heading: 'Separación de poderes y contrapesos',
        blocks: [
          {
            type: 'p',
            text: 'La respuesta a la monarquía absoluta del siglo XVIII fue un sistema en el que cada rama dispone de medios legales para detener a las otras dos. La separación no es absoluta, porque algunos actos exigen la intervención de dos ramas: el presidente firma la ley de apropiaciones, el Senado ratifica los tratados y confirma los nombramientos, y el Congreso autoriza el gasto en el extranjero.'
          },
          {
            type: 'table',
            head: ['Rama', 'Órganos', 'Designación', 'Mandato'],
            rows: [
              ['Ejecutiva', 'Presidencia, gabinete y agencias federales', 'Elección indirecta por un colegio electoral de 538 miembros', 'Cuatro años, renovables una vez por la enmenda veintidós'],
              ['Legislativa', 'Cámara de Representantes y Senado', 'Elección popular y directa en ambos casos', 'Dos años para la Cámara y seis para el Senado, con un tercio renovado cada dos años'],
              ['Judicial', 'Tribunal Supremo y tribunales federales de distrito y de apelaciones', 'Nombramiento presidencial confirmado por el Senado', 'Cargo vitalicio mientras la conducta lo permita']
            ]
          },
          {
            type: 'ul',
            items: [
              'Veto presidencial sobre las leyes del Congreso, que se supera con dos tercios en ambas cámaras.',
              'Confirmación senatorial de los nombramientos judiciales y diplomáticos, con dos tercios de los senadores presentes para los tratados y mayoría simple para los nombramientos.',
              'Control financiero del Congreso mediante la ley de apropiaciones, que debe aprobar cada año para que el ejecutivo pueda gastar.',
              'Control judicial de la constitucionalidad de las leyes y de los actos de las otras ramas, con sentencia vinculante.',
              'Impeachment, con mayoría simple en la Cámara para la acusación y dos tercios de los presentes en el Senado para la condena.'
            ]
          },
          {
            type: 'p',
            text: 'El equilibrio no elimina la fricción, sino que la convierte en un procedimiento con reglas fijas y mayorías conocidas. Es también la razón por la que la responsabilidad política aparece fragmentada: cada cargo responde ante un electorado distinto y ninguna rama puede ser removida de conjunto, como sí ocurre en los sistemas de gobierno de un solo partido.'
          }
        ]
      },
      {
        id: 'congreso',
        heading: 'El Congreso: dos cámaras y el monopolio legislativo',
        blocks: [
          {
            type: 'p',
            text: 'El artículo I establece un Congreso bicameral. La Cámara de Representantes reparte la población en distritos uninominales y su tamaño se recalcula cada década con los datos del censo, mientras que el Senado representa a los Estados y no a los ciudadanos, con dos senadores por cada uno, lo que suma el total de cien miembros.'
          },
          {
            type: 'p',
            text: 'Los mandatos no son simétricos. El representante se renueva cada dos años y sin límite de repeticiones, mientras que el senador cumple seis años con un tercio renovado cada dos, lo que aporta continuidad a la diplomacia y a la redacción legislativa. Esa asimetría obliga además a que la Cámara cambie por completo en cada año electoral intermedio del mandato presidencial.'
          },
          {
            type: 'ul',
            items: [
              'Iniciativa: solo el presidente y los miembros del Congreso pueden proponer leyes, y la gran mayoría de las aprobadas proceden del poder ejecutivo.',
              'Comités: unas doscientas cincuenta comisiones y subcomités reparten el trabajo y acumulan la especialidad técnica por materias.',
              'Regla de cierre: el artículo veintidós del reglamento del Senado exige sesenta votos, tres quintos de la totalidad, para poner fin al debate.',
              'Mayoría y quórum: la Cámara necesita doscientos dieciocho presentes para aprobar y el Senado cincuenta y uno, por lo que la asistencia al voto es un instrumento de bloqueo.'
            ]
          },
          {
            type: 'p',
            text: 'El artículo I reserva al Congreso la competencia tributaria y el monopolio del gasto federal, y la ley de apropiaciones lo convierte cada año en la única puerta por la que el dinero federal puede gastarse. Esa combinación de competencia tributaria y control del gasto es la base material de la separación de poderes, mucho más que el reparto formal de las competencias entre las ramas. La política monetaria queda al margen de ese circuito: la lleva la Reserva Federal, creada en 1913, con un Consejo de siete miembros en Washington y doce bancos regionales, que fija los tipos de interés y emite moneda bajo un mandato de empleo máximo y precios estables, con las decisiones concretas tomadas por el comité de mercado abierto en reuniones periódicas.'
          }
        ]
      },
      {
        id: 'justicia',
        heading: 'Poder judicial: el Tribunal Supremo y el control de la Constitución',
        blocks: [
          {
            type: 'p',
            text: 'El artículo III crea un poder judicial federal cuyo órgano supremo es el Tribunal Supremo, y la Constitución prohíbe expresamente que se añadan otros tribunales superiores. Su jurisdicción se limita a los casos que el texto le atribuye: las controversias entre dos Estados o entre un Estado y la federación, los pleitos en los que el Gobierno federal es parte y las acciones de protección de derechos que la Constitución reconoce.'
          },
          {
            type: 'p',
            text: 'El Tribunal está compuesto por nueve jueces, nombrados por el presidente con confirmación del Senado, que conservan el cargo mientras su conducta lo permita. La Constitución no fija ninguna edad de jubilación, de modo que la continuidad en el cargo es la regla y no la excepción. El Congreso puede destituir a los jueces por impeachment, lo que ocurre ante conducta indebida y no ante decisiones discrepantes.'
          },
          {
            type: 'ul',
            items: [
              'Tribunales de distrito, de primera instancia, con competencia territorial definida por el artículo III.',
              'Tribunales de apelaciones, uno por cada circuito judicial, que revisan las sentencias de los tribunales de distrito.',
              'Jurisdicciones especiales, como el tribunal competente para las zonas en disputa y el de comercio internacional.',
              'Tribunales estatales, que quedan fuera del poder judicial federal y aplican el derecho del Estado al que pertenecen.'
            ]
          },
          {
            type: 'quote',
            text: 'Pero corresponde al poder judicial decir lo que es la ley.',
            cite: 'El Federalista, número 51, 1788',
            author: 'James Madison'
          },
          {
            type: 'p',
            text: 'El resultado institucional es un poder judicial independiente, sin base electoral propia y sujeto únicamente al procedimiento de impeachment. Esa combinación explica la estabilidad de las sentencias y también la distancia habitual entre el Tribunal y el debate cotidiano sobre la política pública.'
          }
        ]
      },
      {
        id: 'federalismo',
        heading: 'Federalismo: competencias enumeradas y poderes residuales',
        blocks: [
          {
            type: 'p',
            text: 'El artículo I, apartado 8, enumera las competencias del gobierno federal, y la décima enmienda deja en manos de los Estados o del pueblo todo poder que la Constitución no haya delegado. La cláusula de reserva es la base jurídica del federalismo, y la jurisprudencia la ha ampliado: la sentencia McCulloch contra Maryland, de 1819, sostuvo que el Congreso dispone de poderes resultantes de una Constitución federal, y la cláusula del comercio le permite regular actividades que afectan a más de un Estado aunque no figuren en el texto.'
          },
          {
            type: 'ul',
            items: [
              'Defensa y relaciones exteriores: competencia exclusiva, con el presidente al mando de las fuerzas armadas y el Senado ratificando los tratados.',
              'Moneda y banca: emisión de moneda y regulación del crédito mediante la Reserva Federal, junto con bancos estatales de competencia concurrente y limitada.',
              'Comercio: regulación del comercio interestatal e internacional, de los aranceles y de los tratados comerciales, con normas locales de seguridad dentro del territorio de cada Estado.',
              'Educación: el Gobierno federal financia y supervisa programas mediante subvenciones, pero cada Estado organiza y financia la enseñanza pública obligatoria.',
              'Salud, policía y justicia: el Gobierno federal gestiona Medicare y Medicaid en colaboración con los Estados, mientras la policía, la justicia penal y las prisiones corresponden a los Estados.'
            ]
          },
          {
            type: 'p',
            text: 'Esa distribución es a la vez la principal fortaleza y la principal fuente de fricción del modelo, y es donde el [[federalismo|federalismo]] choca con la tendencia a unificar las normas nacionales. Permite experimentar con políticas muy distintas, pero también genera reglas divergentes en materias como el desempleo, la salud o la educación, y convierte la coordinación en una tarea permanente entre niveles de gobierno con intereses electorales propios.'
          }
        ]
      },
      {
        id: 'elecciones',
        heading: 'Elecciones y sistema electoral federal',
        blocks: [
          {
            type: 'p',
            text: 'La Constitución de 1787 no prevé la elección popular del presidente. El duodécimo artículo establece un sistema de elección indirecta en el que cada Estado designa un número de electores igual al de sus representantes y senadores, de modo que el colegio electoral nacional suma 538 miembros, de los que 270 son necesarios para la elección. En la práctica, todos los Estados salvo Maine y Nebraska asignan sus electores por el sistema de ganador único, de manera que el recuento se produce Estado por Estado y no voto por voto.'
          },
          {
            type: 'table',
            head: ['Cuerpo', 'Mecanismo de elección', 'Base constitucional', 'Periodicidad'],
            rows: [
              ['Presidente de la República', 'Colegio electoral de 538 miembros, con votación por Estado y ganador único', 'Decimosegundo artículo y vigesimosegunda enmienda', 'Cada cuatro años, con dos mandatos como máximo'],
              ['Cámara de Representantes', 'Sufragio directo en distritos uninominales', 'Artículo I y enmendas decimonovena, vigesimocuarta y vigesimosexta', 'Cada dos años'],
              ['Senado', 'Sufragio directo y universal en cada Estado', 'Decimoséptima enmienda, de 1913', 'Cada seis años, con un tercio cada dos años'],
              ['Poder judicial', 'Nombramiento presidencial con confirmación del Senado', 'Artículo II, apartado 2', 'Cargo vitalicio'],
              ['Gobernadores de los Estados', 'Elección popular en la mayoría de los Estados', 'Normativa electoral de cada Estado', 'Variable, entre dos y cuatro años']
            ]
          },
          {
            type: 'p',
            text: 'El Congreso cuenta los votos electorales en sesión conjunta y el presidente toma posesión el 20 de enero, dentro de un calendario que la Constitución fija con independencia de la duración de la campaña. La sucesión en caso de vacante o de incapacidad se rige por la vigesimocuarta enmienda, que delega en el Congreso la votación para designar al funcionario que deba asumir la presidencia.'
          },
          {
            type: 'p',
            text: 'El sistema produce tres efectos institucionales. El primero es que la candidatura que gana el voto popular no es necesariamente la elegida. El segundo es que la representación está compensada entre Estados pequeños y grandes, porque dos senadores por Estado equivalen a más poder por habitante en un Estado pequeño. El tercero es que ningún partido reúne por sí solo la mayoría, por lo que el gobierno suele depender de acuerdos o coaliciones, lo que refuerza el papel de la negociación interna de los partidos sobre el presupuesto y la legislación.'
          }
        ]
      }
    ],
    categories: ['Gobierno', 'Instituciones políticas', 'Federalismo', 'América del Norte'],
    related: ['geo:competencia-estados-unidos-china', 'geo:orden-multipolar', 'geo:energia-y-dependencias', 'liberalismo', 'federalismo'],
    references: [
      {
        title: 'The Constitution of the United States: A Transcription',
        author: 'National Archives and Records Administration',
        publisher: 'U.S. National Archives and Records Administration, Washington',
        year: 1787,
        type: 'documento',
        url: 'https://www.archives.gov/founding-docs/constitution-transcript'
      },
      {
        title: 'The Constitution: Amendments 11-27',
        author: 'National Archives and Records Administration',
        publisher: 'U.S. National Archives and Records Administration, Washington',
        year: 1992,
        type: 'documento',
        url: 'https://www.archives.gov/founding-docs/amendments-11-27'
      },
      {
        title: 'Constitution of the United States of America: Analysis and Interpretation',
        author: 'Library of Congress',
        publisher: 'U.S. Government Publishing Office, Washington, S. Doc. 117-12',
        year: 2022,
        type: 'informe',
        url: 'https://www.govinfo.gov/collection/constitution-annotated'
      },
      {
        title: 'Introduction to the Legislative Process in the U.S. Congress',
        author: 'Valerie Heitshusen',
        publisher: 'Congressional Research Service, Washington',
        year: 2025,
        type: 'informe',
        url: 'https://www.congress.gov/crs-product/R42843'
      },
      {
        title: 'Impeachment and the Constitution',
        author: 'Jared P. Cole y Todd Garvey',
        publisher: 'Congressional Research Service, Washington',
        year: 2023,
        type: 'informe',
        url: 'https://www.congress.gov/crs-product/R46013'
      },
      {
        title: 'The Electoral College',
        author: 'Office of the Federal Register, National Archives and Records Administration',
        publisher: 'U.S. National Archives and Records Administration, Washington',
        year: 2023,
        type: 'web',
        url: 'https://www.archives.gov/electoral-college'
      },
      {
        title: 'The Fed Explained: Who We Are',
        author: 'Board of Governors of the Federal Reserve System',
        publisher: 'Federal Reserve Board, Washington',
        year: 2025,
        type: 'web',
        url: 'https://www.federalreserve.gov/aboutthefed/fedexplained/who-we-are.htm'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
