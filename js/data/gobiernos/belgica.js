(function (PW) {
  'use strict';
  PW.gobiernos = PW.gobiernos || {};
  PW.gobiernos['belgica'] = {
    kind: 'gobierno',
    slug: 'belgica',
    title: 'Bélgica: monarquía federal, tres comunidades y el consociacionalismo como sistema de gobierno',
    subtitle: 'Monarquía constitucional surgida de la secesión de 1830, reorganizada por seis reformas del Estado entre 1970 y 1995 en tres regiones, tres comunidades y cuatro áreas lingüísticas, con un Parlamento federal donde la paridad entre hablantes neerlandeses y francófonos es una regla constitucional y donde ningún partido puede gobernar por sí solo',
    category: 'Gobierno',
    tags: ['monarquía constitucional', 'Estado federal', 'consociacionalismo', 'reformas del Estado', 'parlamento bicameral', 'crisis de gobierno'],
    region: 'Europa Occidental',
    timeFrame: '1830-actualidad',
    updated: '2026-09-28',
    summary: 'Bélgica es una monarquía federal de la Unión Europea dividida en tres regiones, tres comunidades y cuatro áreas lingüísticas, con un Parlamento federal de dos cámaras donde la paridad numérica entre los hablantes de las dos lenguas principales es una regla constitucional, un Tribunal Constitucional de siete jueces capaz de anular normas, ningún partido con mayoría propia y una formación de Gobierno que con frecuencia se prolonga durante varios cientos de días',
    actors: [
      { name: 'Rey de los Belgas', role: 'jefe del Estado, jura al Gobierno, recibe a los jefes de los partidos durante la fase de formación y dispone de la disolución del Parlamento', power: 'alta' },
      { name: 'Primer ministro', role: 'cabecera del Gobierno federal y negociador de la coalición, con autoridad material sobre la agenda y legitimidad para proponer al rey una dimisión', power: 'alta' },
      { name: 'Consejo de Ministros', role: 'órgano ejecutivo federal de quince miembros, con cinco ministros viceprimeros, que ejecuta las leyes aprobadas por el Parlamento', power: 'alta' },
      { name: 'Cámara de Representantes', role: 'cámara electa de 150 diputados, 87 del grupo neerlandés, 47 del francófono y 16 de Bruselas, de la que depende el Gobierno y a la que puede destituir', power: 'alta' },
      { name: 'Senado', role: 'cámara de 60 miembros, 50 elegidos por los parlamentos regionales y comunitarios y 10 cooptados, que vota en dos grupos lingüísticos y exige mayoría reforzada en materias de Estado', power: 'media' },
      { name: 'Tribunal Constitucional', role: 'órgano de siete jueces, seis neerlandeses o francófonos y uno germanófono, que anula las normas contrarias a la Constitución y arbitra el conflicto entre los niveles del Estado', power: 'media' }
    ],
    infobox: {
      caption: 'Bélgica, monarquía federal de tres comunidades',
      color: '#1a1a1a',
      rows: [
        ['Período', '1830-actualidad, con dos invasiones y una ocupación entre 1914 y 1945'],
        ['Forma de Estado', 'Estado federal, monarquía constitucional hereditaria y perpetuamente neutra'],
        ['División territorial', 'Tres regiones, tres comunidades y cuatro áreas lingüísticas, más el distrito autónomo de la comunidad germanófona'],
        ['Constitución vigente', 'Constitución de 7 de febrero de 1831, con la región de Bruselas como capital desde 1995'],
        ['Jefatura del Estado', 'Rey de los Belgas, por herencia sin primogeniture, que no jura la Constitución'],
        ['Jefe de Gobierno', 'Primer ministro; Bart De Wever, juramentado el 3 de febrero de 2025'],
        ['Parlamento', 'Cámara de 150 diputados y Senado de 60 miembros, 210 en total'],
        ['Capital política', 'Bruselas, sede de la mayoría de las instituciones de la Unión Europea']
      ]
    },
    sections: [
      {
        id: 'origen-del-estado',
        heading: 'Origen del Estado: la secesión de 1830 y la Constitución de 1831',
        blocks: [
          {
            type: 'p',
            text: 'Bélgica no es un Estado que se formara lentamente, sino un Estado que nace de una ruptura. El 25 de octubre de 1830 los departamentos del sur se separan del Reino Unido de los Países Bajos, que los había absorbido tras el Congreso de Viena de 1815, y en enero de 1831 el príncipe Leopoldo de Sajonia-Coburgo es elegido primer rey. El 7 de febrero de 1831 entra en vigor una Constitución que sigue siendo, con retoques sucesivos, la norma fundacional del país.'
          },
          {
            type: 'quote',
            text: 'La Belgique est un État fédéral, et sa Constitution est fondée sur le principe de l\'égalité des Belges et des étrangers.',
            cite: 'Constitución belga de 7 de febrero de 1831, artículo primero',
            author: 'Estado belga'
          },
          {
            type: 'p',
            text: 'La cita necesita una advertencia. El artículo primero emplea un término político moderno, el federal, pero el Estado que designa entonces es muy distinto del actual: no hay regiones electas, ni comunidades con parlamentos, ni reparto fijo de competencias. El federalismo belga es un resultado de los pactos de 1970 a 1995, no una herencia de 1831.'
          },
          {
            type: 'table',
            head: ['Fecha', 'Hito', 'Consecuencia institucional'],
            rows: [
              ['25 de octubre de 1830', 'Revolución belga: los departamentos del sur se separan de los Países Bajos', 'Nace un Estado soberano con una asamblea representativa'],
              ['21 de julio de 1831', 'Bélgica jura la Constitución y es reconocida por la conferencia de Aquisgrán', 'Entra en vigor la Constitución de 1831'],
              ['1839', 'Tratado de los Veinte Artículos con los Países Bajos', 'Se reconoce legalmente la lengua neerlandesa en Flandes'],
              ['1890', 'Abandono definitivo de las cláusulas de la Unión de Londres con el Gran Ducado de Luxemburgo', 'Bélgica adquiere su frontera definitiva actual'],
              ['4 de agosto de 1914', 'Invasión alemana y comienzo de la Primera Guerra Mundial', 'La monarquía se convierte en símbolo nacional de resistencia'],
              ['28 de noviembre de 1919', 'Tratado de Versalles y Estatuto de Eupen y Malmedy', 'Aparece el compromiso europeo de seguridad y se cede territorio'],
              ['1940-1944', 'Ocupación del territorio por el ejército alemán', 'El Gobierno se exilia a Londres y el Estado se reconstituye tras la liberación'],
              ['25 de marzo de 1958', 'Tratado de Roma: Bélgica es Estado fundador de la Comunidad Económica Europea', 'La integración en la [[org:union-europea|Unión Europea]] pasa a ser el eje de la política exterior']
            ]
          },
          {
            type: 'p',
            text: 'Dos decisiones del siglo XIX siguen condicionando el sistema actual. La primera es la ambigüedad lingüística: en 1830 el francés era la única lengua oficial y el restablecimiento del neerlandés en Flandes llegó por el tratado de 1839, es decir, por una negociación internacional y no por una decisión interna del Estado. La segunda es el compromiso dinástico: la monarquía se ha mantenido casi sin interrupciones desde 1831, incluso durante la ocupación alemana de la Primera Guerra y en el exilio del Gobierno en Londres durante la Segunda.'
          }
        ]
      },
      {
        id: 'seis-reformas-del-estado',
        heading: 'Las seis reformas del Estado y el reparto de competencias',
        blocks: [
          {
            type: 'p',
            text: 'La Constitución de 1831 creó un Estado unitario sin regiones ni comunidades. El cambio a un [[federalismo|federalismo]] real se produjo por acumulación: seis reformas del Estado, cada una negociada entre las fuerzas políticas de las dos Villas principales, transfirieron competencias del nivel central a regiones y comunidades entre 1970 y 1995. Cada reforma exigía una mayoría especial de dos tercios de los votos emitidos en ambas cámaras, y para las que alteraban la delimitación de las competencias se añadía la mayoría de dos tercios dentro del grupo lingüístico francófono del Senado.'
          },
          {
            type: 'table',
            head: ['Reforma', 'Año', 'Cambio principal', 'Efecto institucional'],
            rows: [
              ['Primera', '1970', 'División del Estado en tres unidades y tres comunidades, con cuatro áreas lingüísticas', 'La Cámara se divide en dos grupos lingüísticos con paridad numérica'],
              ['Segunda', '1980', 'Creación de las regiones de Flandes y Valonia, con parlamentos regionales electos', 'Las regiones reciben competencias y recursos propios'],
              ['Tercera', '1988', 'Reconocimiento de las tres regiones y creación de la región de Bruselas-Capital', 'Bruselas obtiene personalidad administrativa propia'],
              ['Cuarta', '1992', 'Transferencia de puertos, aviación, telecomunicaciones y redes de transporte', 'Se fijan los primeros mecanismos de financiación regional'],
              ['Quinta', '1993', 'Transferencia de educación, agricultura, sanidad y justicia, tras tres referenda de 1992', 'Se completa el traspaso de políticas a regiones y comunidades'],
              ['Sexta', '1995', 'Transferencia final de policía y justicia, reducción del Senado y reforma de la paridad', 'Bruselas se convierte en la capital del Estado']
            ]
          },
          {
            type: 'p',
            text: 'El artículo 118 de la Constitución enumera las materias que se transfieren a las regiones y a las comunidades, no las que el Estado conserva. Su lectura habitual se hace con frecuencia al revés, como si la lista fuera corta cuando es la lista de lo que deja de ser federal. Siguen siendo federales el derecho civil y de familia, el penal, el comercial y de sociedades, la banca, la defensa, los asuntos exteriores y la seguridad social.'
          },
          {
            type: 'p',
            text: 'La consecuencia práctica es que el Estado federal ha seguido siendo formalmente vasto, pero que su ejercicio efectivo se ha ido reduciendo hasta convertirlo en un Estado de competencia residual. Educación, sanidad, justicia, policía, vivienda, movilidad, cultura y medio ambiente son regionales, de modo que cualquier proyecto nacional exige un acuerdo entre capas-executivas distintas.'
          },
          {
            type: 'ul',
            items: [
              'El artículo 117 contiene la cláusula de federalización primaria: cualquier reforma que transfiera nuevas competencias a las regiones o a las comunidades exige la mayoría reforzada de dos tercios en ambas cámaras.',
              'El artículo 85 del Senado exige además la mayoría especial de dos tercios del grupo francófono para transferir competencias de la comunidad francesa a la región de Valonia, una salvaguarda específica de la identidad francófona.',
              'La reforma de 2011 fue aprobada por el Parlamento federal pero nunca entró en vigor por el veto de los parlamentos de Flandes y de Valonia, y el intento de una séptima reforma se hundió en 2013.',
              'Desde entonces el debate sobre el Estado se ha desplazado de la transferencia de competencias a la financiación y a la reforma institucional interna, con el Senado como objetivo declarado.',
              'El resultado es un federalismo asimétrico y en permanente negociación, en el que casi ninguna reforma es ya una simple ampliación de competencias sino una discusión sobre quién la paga.'
            ]
          }
        ]
      },
      {
        id: 'regiones-comunidades-y-lenguas',
        heading: 'Tres regiones, tres comunidades y cuatro áreas lingüísticas',
        blocks: [
          {
            type: 'p',
            text: 'La Constitución de 1995 organiza el país en tres regiones, unidades territoriales con parlamentos electos, y tres comunidades, unidades de idioma y de cultura con parlamentos igualmente electos. Las dos series coinciden en número pero no en composición: la región de Flandes y la comunidad neerlandesa comparten territorio, la región de Valonia y la comunidad francesa también, y la región y la comunidad de Bruselas forman una sola unidad. La comunidad germanófona es la excepción, porque no es una región y se gobierna con una asamblea propia de nueve municipios y unos 75.000 habitantes.'
          },
          {
            type: 'quote',
            text: 'La langue néerlandaise, la langue française et la langue allemande sont les langues officielles de la Belgique.',
            cite: 'Constitución belga, artículo 4',
            author: 'Estado belga'
          },
          {
            type: 'p',
            text: 'La clasificación lingüística oficial reconoce cuatro áreas. La zona neerlandesa y la zona francesa se definen por los municipios donde la lengua correspondiente es hablada por la mayoría o por una mayoría sustancial de la población, y sus límites se revisan cada diez años sobre la base de los datos del censo. La zona germanófona mantiene el estatuto de la región de Eupen y Malmedy, cedida en 1920. La cuarta área es la zona de Bruselas con dos lenguas oficiales; el francés es mayoritario pero la igualdad de trato entre ambas es la regla de la Constitución y de la ley lingüística regional.'
          },
          {
            type: 'table',
            head: ['Entidad', 'Base territorial', 'Parlamento', 'Competencias características'],
            rows: [
              ['Región de Flandes', 'Cinco provincias neerlandesas', 'Vlaams Parlement, 124 miembros', 'Educación, sanidad, justicia, policía, energía'],
              ['Región de Valonia', 'Cinco provincias francófonas', 'Parlamento de Valonia, 75 miembros', 'Educación, sanidad, justicia, policía, industria'],
              ['Región de Bruselas-Capital', 'Diecinueve municipios de Bruselas', 'Parlamento de la región, 89 miembros', 'Competencias regionales y también municipales'],
              ['Comunidad neerlandesa', 'Coincide con la región de Flandes', 'Consejo de la comunidad neerlandesa', 'Cultura, lengua, medios de comunicación y deporte'],
              ['Comunidad francesa', 'Bélgica francófona, incluida Valonia', 'Parlamento de la comunidad francesa, 94 miembros', 'Cultura, lengua, medios de comunicación y deporte'],
              ['Comunidad germanófona', 'Nueve municipios del Alto Rin y la Eifel', 'Consejo de la comunidad, 25 miembros', 'Cultura, educación y organización propias'],
              ['Comunidad y región de Bruselas', 'Bruselas, como unidad indivisible', 'Consejo de la comunidad de Bruselas', 'Cultura y lengua en la capital'],
              ['Estado federal', 'Todo el territorio del reino', 'Cámara de 150 y Senado de 60', 'Derecho, defensa, exteriores, seguridad social']
            ]
          },
          {
            type: 'p',
            text: 'Las filas del cuadro anterior no son equivalentes entre sí, y esa asimetría es el principio rector del sistema. Las regiones son poderes delimitados sobre un territorio, con competencia sobre las materias enumeradas en el artículo 118, mientras que las comunidades son poderes culturales que pueden actuar más allá de sus fronteras lingüísticas. La comunidad neerlandesa tiene competencia sobre la cultura neerlandesa en todo el país y la comunidad francesa sobre la cultura francófona, de modo que la frontera cultural no coincide exactamente con la lingüística.'
          }
        ]
      },
      {
        id: 'monarquia-y-camara-de-representantes',
        heading: 'Monarquía y Cámara de Representantes',
        blocks: [
          {
            type: 'p',
            text: 'La monarquía belga es hereditaria, perpetuamente neutra y sin primogeniture, de manera que la corona pasa al mayor de los hijos del rey difunto y, en su defecto, al mayor de sus hermanos. El rey no jura la Constitución sino un juramento distinto, más personal. Compete al rey jurar al Gobierno, designar al primer ministro y a los ministros, recibir a los jefes de los partidos durante la formación y disolver el Parlamento antes de que venza su mandato. La casa real es la más antigua del mundo que sigue reinando de manera ininterrumpida, y su valor simbólico se forjó en la resistencia a las dos invasiones alemanas.'
          },
          {
            type: 'p',
            text: 'La pieza clave del diseño es el artículo 85. Si la Cámara vota la censura de un Gobierno, el rey dispone de tres opciones: sustituirlo de inmediato por otro que cuente con la confianza de la Cámara, disolver la Cámara dentro de los quince días siguientes, o aceptar la dimisión sabiendo que el Gobierno dimisionario sigue en funciones como Gobierno provisional. La primera opción es casi imposible, porque la mayoría que censura un Gobierno rara vez apoya a un sucesor, y la disolución es la excepción: desde 1934 no se ha vuelto a emplear, de modo que los Gobiernos dimisionarios siguen en el cargo como Gobierno provisional, que es hoy el procedimiento ordinario.'
          },
          {
            type: 'p',
            text: 'La Cámara de Representantes tiene 150 miembros elegidos cada cinco años en once circunscripciones, diez provincias más Bruselas, con el método de D\'Hondt y un umbral del 5 por ciento en cada circunscripción. De los 150 diputados, 87 corresponden al grupo lingüístico neerlandés y 47 al francófono, mientras que los 16 elegidos en Bruselas pueden adscribirse libremente a cualquiera de los dos. El voto es obligatorio y la edad mínima se rebajó a 16 años por una ley de 2022, de modo que 2024 fue la primera elección con dos franjas etarias con derecho a votar, tras un pronunciamiento del Tribunal Constitucional sobre el régimen aplicable a los dieciséis y diecisiete años.'
          }
        ]
      },
      {
        id: 'senado-paridad-y-tribunal',
        heading: 'Senado, paridad y Tribunal Constitucional',
        blocks: [
          {
            type: 'p',
            text: 'El Senado es la cámara que hace que el federalismo belga funcione. Se compone de 60 miembros: 50 elegidos por los parlamentos regionales y comunitarios, con arreglo a los resultados de las elecciones regionales, y 10 cooptados por los propios senadores en proporción a los resultados federales. La región de Flandes designa 29, el Parlamento de la comunidad francesa 10, el de Valonia 8, el de la región de Bruselas 2 y el consejo germanófono 1. El Senado reproduce dentro del Parlamento federal la misma lógica de reparto que rige fuera de él: ninguna mayoría federal puede cambiar el reparto de competencias sin el consentimiento de los parlamentos regionales.'
          },
          {
            type: 'p',
            text: 'La paridad es la regla que atraviesa el sistema. El artículo 4 obliga a que el Gobierno federal esté compuesto por igual número de miembros neerlandeses y francófonos, con la salvedad introducida en 1995, que permite que un ministro francófono no sea necesariamente hablante de neerlandés.'
          },
          {
            type: 'p',
            text: 'Esa paridad se repite en la Cámara, en los dos grupos lingüísticos del Senado y en los consejos de las instituciones. El artículo 30 añade la representación equilibrada de hombres y mujeres en los parlamentos y en los Gobiernos, y obliga al Estado federal y a las regiones a adoptar normas de acceso que lo hagan efectivo.'
          },
          {
            type: 'p',
            text: 'El Tribunal Constitucional es el órgano de control de la constitucionalidad. Lo componen siete jueces, seis neerlandeses o francófonos y uno germanófono, designados por ambas cámaras con la mayoría reforzada de dos tercios que la propia Constitución exige para las reformas.'
          },
          {
            type: 'p',
            text: 'Su competencia abarca el control abstracto de las normas, el recurso individual por violación de los derechos fundamentales, la revisión de los tratados internacionales y la resolución de los conflictos de competencia entre el Estado federal, las regiones, las comunidades y los municipios. Como la elección exige dos tercios, ningún partido coloca un juez sin el acuerdo de la oposición.'
          },
          {
            type: 'p',
            text: 'Su jurisprudencia ha marcado la evolución del país en dos planos distintos. En el plano competencial ha anulado repetidamente normas regionales por invadir competencias federales, y en el plano de los derechos ha obligado al legislador a regular el aborto, el matrimonio de parejas del mismo sexo y la herencia por vía testamental.'
          },
          {
            type: 'p',
            text: 'La reforma de la Constitución exige la mayoría de dos tercios de los miembros presentes de ambas cámaras en primera lectura y en la misma sesión de la segunda lectura, y si la reforma no es rechazada en los cien días siguientes se entiende aprobada. Esa fórmula explica por qué la reforma del Estado no es una operación mayoritaria cualquiera, sino un compromiso con veto recíproco entre las dos comunidades.'
          }
        ]
      },
      {
        id: 'electoral-y-crisis-de-gobierno',
        heading: 'Elecciones, coaliciones y crisis de formación',
        blocks: [
          {
            type: 'p',
            text: 'El sistema electoral es proporcional puro y está organizado por circunscripciones, con un umbral del 5 por ciento en cada una de las once. Ese umbral es la causa principal de la fragmentación: un partido que no lo alcanza en una circunscripción no obtiene ningún escaño allí, por alto que sea su resultado nacional. A ello se añade que los grupos lingüísticos están equilibrados por construcción, lo que impide a un partido neerlandés formar por sí solo un Gobierno federal.'
          },
          {
            type: 'table',
            head: ['Partido', 'Votos', 'Porcentaje', 'Escaños'],
            rows: [
              ['N-VA, Nueva Alianza Flamenca', '1.167.061', '16,71 %', '24'],
              ['Vlaams Belang, Interés Flamenco', '961.601', '13,77 %', '20'],
              ['MR, Movimiento Reformista', '716.934', '10,26 %', '20'],
              ['PTB-PVDA, Partido de los Trabajadores', '688.369', '9,86 %', '15'],
              ['Vooruit, Adelante', '566.436', '8,11 %', '13'],
              ['PS, Partido Socialista', '561.602', '8,04 %', '16'],
              ['CD&V, Cristianos Demócratas Flamencos', '557.392', '7,98 %', '11'],
              ['Les Engagés, Los Comprometidos', '472.755', '6,77 %', '14'],
              ['Open Vld, Liberales', '380.659', '5,45 %', '7'],
              ['Groen, Los Verdes', '324.608', '4,65 %', '6'],
              ['Ecolo, Los ecologistas', '204.438', '2,93 %', '3'],
              ['Defi, Dignidad', '84.024', '1,20 %', '1']
            ]
          },
          {
            type: 'p',
            text: 'El 9 de junio de 2024 el resultado fue una Cámara con doce partidos representados y ningún partido capaz de formar un Gobierno por sí mismo. La asistencia fue del 88,45 por ciento, entre las más altas de Europa, y una formación nacionalista neerlandesa ocupaba por primera vez la presidencia del Gobierno. El MR superó al PS en votos por primera vez en décadas, y los liberales quedaron fuera del Gobierno por primera vez desde 1999.'
          },
          {
            type: 'p',
            text: 'La literatura constitucional resume esa obligación con el llamado teorema de Dehaene, según el cual ningún partido, ni siquiera dentro de una sola comunidad, puede formar un Gobierno federal si no consigue aliados en la otra. La razón es doble: porque la Cámara exige mayoría absoluta y porque una decisión fiscal o administrativa adoptada en solitario no supera el filtro del Senado.'
          },
          {
            type: 'p',
            text: 'La formación de Gobiernos es aquí una serie de récords: las negociaciones de 2010 y 2011, que terminaron con el Gobierno de Di Rupo, duraron 541 días, récord que comparten las de 1978 a 1981, y las de 2019 y 2020 se acercaron a 500. Ningún otro país de la Unión Europea se acerca.'
          },
          {
            type: 'p',
            text: 'El Gobierno vigente fue juramentado el 3 de febrero de 2025 por el rey Felipe, casi ocho meses después de las elecciones del 9 de junio de 2024. Lo dirige Bart De Wever, del partido nacionalista neerlandés N-VA, y reúne cinco partidos: el N-VA, el MR, Les Engagés, Vooruit y CD&V. Suman 81 de los 150 diputados, de modo que la coalición depende de que ninguno de los cinco se retire.'
          },
          {
            type: 'table',
            head: ['Cargo', 'Titular', 'Partido'],
            rows: [
              ['Primer ministro', 'Bart De Wever', 'N-VA'],
              ['Vicepresidencia y Empleo, Economía y Agricultura', 'David Clarinval', 'MR'],
              ['Vicepresidencia y Asuntos Exteriores y Europeos', 'Maxime Prévot', 'Les Engagés'],
              ['Vicepresidencia y Asuntos Sociales y Salud', 'Frank Vandenbroucke', 'Vooruit'],
              ['Vicepresidencia y Presupuesto', 'Vincent Van Peteghem', 'CD&V'],
              ['Vicepresidencia y Finanzas y Pensiones', 'Jan Jambon', 'N-VA'],
              ['Justicia', 'Annelies Verlinden', 'CD&V'],
              ['Seguridad e Interior', 'Bernard Quintin', 'MR'],
              ['Defensa y Comercio Exterior', 'Theo Francken', 'N-VA'],
              ['Movilidad, Clima y Transición Ecológica', 'Jean-Luc Crucke', 'Les Engagés'],
              ['Acción Pública y Modernización', 'Vanessa Matz', 'Les Engagés'],
              ['Protección del Consumidor y Discapacidad', 'Rob Beenders', 'Vooruit'],
              ['Asilo, Migración e Integración Social', 'Anneleen Van Bossuyt', 'N-VA'],
              ['Energía', 'Mathieu Bihet', 'MR'],
              ['Pequeñas Empresas y Autónomos', 'Éléonore Simonet', 'MR']
            ]
          },
          {
            type: 'p',
            text: 'El acuerdo de coalición de casi ochocientas páginas incluye una reforma institucional que no se había planteado antes: la abolición del Senado, que exige la mayoría de dos tercios en ambas cámaras. De prosperar, dejaría de existir la cámara que hoy da su voz a las regiones y a las comunidades, y con ella el principal freno a la transferencia de competencias.'
          }
        ]
      },
      {
        id: 'finanzas-y-papel-de-bruselas',
        heading: 'Finanzas públicas y el papel de Bruselas',
        blocks: [
          {
            type: 'p',
            text: 'La finanzas federal es el talón de Aquiles del modelo. El reparto de recursos entre el Estado, las regiones y las comunidades se rige por el Fondo Especial de Finanzas, creado en 1995, y por un régimen especial para Bruselas, cuyo cálculo es el principal polémico del país. Cada año el fondo mueve una fracción considerable de los ingresos fiscales federales hacia los poderes subestatales. Sobre esa base, las cifras agregadas del país son las siguientes.'
          },
          {
            type: 'table',
            head: ['Indicador', '2024', '2025', '2026 prevista', '2027 prevista'],
            rows: [
              ['Crecimiento real del producto', '1,1 %', '1,0 %', '0,7 %', '0,9 %'],
              ['Déficit público sobre el producto', '4,4 %', '5,2 %', '5,2 %', '5,4 %'],
              ['Deuda pública sobre el producto', '105,1 %', '107,9 %', '111,3 %', '112,8 %'],
              ['Inflación medida por el índice de precios', '2,5 %', '3,0 %', '3,4 %', '2,6 %'],
              ['Gasto militar sobre el producto', '1,2 %', '1,4 %', '1,6 %', '1,8 %']
            ]
          },
          {
            type: 'p',
            text: 'Bélgica está sometida al procedimiento de déficit excesivo de la Comisión Europea, y en septiembre de 2026 el Gobierno buscaba reunir unos diez mil millones de euros adicionales hasta finales de la década para volver a la trayectoria de consolidación. El punto de fricción es que el gasto militar, que debe alcanzar el 2 por ciento del producto según el compromiso adoptado en 2025, compite con la congelación salarial y con las reformas de pensiones que los sindicatos rechazan.'
          },
          {
            type: 'p',
            text: 'Bruselas es la otra mitad del sistema. Por decisión de los Estados fundadores en 1958, la ciudad concentra la Comisión Europea, el Consejo Europeo, la Secretaría General del Consejo, una de las cuatro sesiones del Parlamento Europeo y la [[org:otan|OTAN]], con su secretariado y su mando militar conjunto. Esa concentración convierte a una región de algo más de un millón de habitantes en el mayor escenario de decisión del continente. Bélgica es además miembro fundador de la [[org:onu|ONU]]. Bélgica es además miembro fundador de la [[org:onu|ONU]].'
          }
        ]
      },
      {
        id: 'meritos-y-limites',
        heading: 'Méritos y límites del sistema',
        blocks: [
          {
            type: 'p',
            text: 'El valor del sistema se mide por una cifra: desde 1830 Bélgica no ha conocido una guerra civil. La fragmentación lingüística, que en otros países habría producido rupturas, se ha canalizado por la vía institucional mediante pactos sucesivos entre las dos comunidades. Los méritos y los problemas del modelo están por eso en la misma estructura.'
          },
          {
            type: 'ul',
            items: [
              'Mérito institucional: la separación de 1830 nunca ha exigido violencia interna, y la monarquía ha funcionado como símbolo de continuidad en las dos crisis mundiales.',
              'Mérito del consociacionalismo: la paridad lingüística en el Gobierno, en la Cámara, en el Senado y en el Tribunal Constitucional convierte el conflicto cultural en un procedimiento.',
              'Mérito federal: seis reformas sucesivas han transferido competencias sin romper el Estado, algo que la Constitución de 1831 nunca habría permitido.',
              'Problema: la fragmentación obliga a formar Gobiernos de coalición y hace que la formación de Gobierno se alargue durante meses.',
              'Problema: los desequilibrios fiscales regionales se acumulan, la educación rinde por debajo de la media de la OCDE y la justicia acumula un retraso de años.',
              'Problema: la región de Bruselas es la más grande del país por población y arrastra el mayor pasivo fiscal, y el conjunto del Estado está en procedimiento de déficit excesivo.'
            ]
          },
          {
            type: 'p',
            text: 'La perspectiva de 2026 depende de dos decisiones concretas: si el Gobierno encuentra los diez mil millones de euros que exige la consolidación presupuestaria sin romper la coalición, y si la abolición del Senado cumple o no la mayoría reforzada de dos tercios. En ambos casos, la mecánica será la misma: un veto cruzado entre las dos comunidades que obliga a negociar.'
          }
        ]
      }
    ],
    categories: ['Gobiernos', 'Europa occidental', 'Instituciones políticas', 'Derecho constitucional'],
    related: ['federalismo', 'democracia-cristiana', 'liberalismo', 'socialdemocracia', 'org:union-europea'],
    references: [
      {
        title: 'Belgium in a nutshell',
        author: 'Federal Public Service Foreign Affairs',
        publisher: 'Portal belgium.be, Bruselas',
        year: 2026,
        type: 'dato',
        url: 'https://es.wikipedia.org/wiki/B%C3%A9lgica'
      },
      {
        title: 'The Constitution',
        author: 'Federal Public Service Foreign Affairs',
        publisher: 'Portal belgium.be, Bruselas',
        year: 2026,
        type: 'ley',
        url: 'https://www.senate.be/doc/const_nl.html'
      },
      {
        title: 'The Federal Parliament',
        author: 'Federal Public Service Foreign Affairs',
        publisher: 'Portal belgium.be, Bruselas',
        year: 2026,
        type: 'dato',
        url: 'https://www.belgium.be/en/about_belgium/government/federal_authorities/federal_parliament'
      },
      {
        title: 'The Constitutional Court',
        author: 'Federal Public Service Foreign Affairs',
        publisher: 'Portal belgium.be, Bruselas',
        year: 2026,
        type: 'dato',
        url: 'https://www.const-court.be/en/'
      },
      {
        title: 'Composition of the Belgian federal government',
        author: 'Federal Public Service Foreign Affairs',
        publisher: 'Portal belgium.be, Bruselas',
        year: 2026,
        type: 'dato',
        url: 'https://www.belgium.be/en/about_belgium/government/federal_authorities/federal_government/composition_government'
      },
      {
        title: 'The coalition agreement',
        author: 'Federal Government of Belgium',
        publisher: 'Portal belgium.be, Bruselas',
        year: 2025,
        type: 'documento',
        url: 'https://www.belgium.be/en/about_belgium/government/federal_authorities/federal_government/policy/government_agreement'
      },
      {
        title: 'Economic forecast for Belgium',
        author: 'Direction General Economic and Financial Affairs',
        publisher: 'Comisión Europea, Bruselas',
        year: 2026,
        type: 'informe',
        url: 'https://economy-finance.ec.europa.eu/economic-surveillance-eu-member-states/country-pages/belgium/economic-forecast-belgium_en'
      },
      {
        title: 'Country report Belgium 2026',
        author: 'Direction General Economic and Financial Affairs',
        publisher: 'Comisión Europea, Bruselas',
        year: 2026,
        type: 'informe',
        url: 'https://economy-finance.ec.europa.eu/economic-surveillance-eu-member-states/country-pages-including-country-reports/country-report-belgium_en'
      },
      {
        title: 'In search of 10 billion: Belgian government prepares for another major budget meeting',
        author: 'Maíthé Chini y redacción',
        publisher: 'The Brussels Times',
        year: 2026,
        type: 'informe',
        url: 'https://www.brusselstimes.com/2301600/in-search-of-e10-billion-belgian-government-prepares-for-another-major-budget-meeting'
      },
      {
        title: '2024 Belgian federal election, resultados definitivos',
        author: 'Instituto Interparlamentario de la Unión Parlamentaria',
        publisher: 'Datos electorales del Servicio público federal del Interior',
        year: 2024,
        type: 'dato',
        url: 'https://en.wikipedia.org/wiki/2024_Belgian_federal_election'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
