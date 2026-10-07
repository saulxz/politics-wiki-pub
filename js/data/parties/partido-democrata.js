(function (PW) {
  PW.parties = PW.parties || {};
  'use strict';
  PW.parties['partido-democrata'] = {
    kind: 'partido',
    slug: 'partido-democrata',
    name: 'Partido Democrático',
    shortName: 'Democratic Party',
    title: 'Partido Democrático',
    subtitle: 'Partido de centroizquierda de Estados Unidos, fundado en 1828 y organizado en torno a la candidatura presidencial y a las elecciones primarias',
    updated: '2026-09-27',
    country: 'Estados Unidos',
    countryCode: 'us',
    countryRegion: 'América del Norte',
    founded: 1828,
    headquarters: 'Washington, Distrito de Columbia, Estados Unidos',
    leader: 'Sin líder nacional formal; la dirección política corresponde al Comité Nacional Democrático',
    ideologyLabel: 'Centroizquierda',
    ideology: ['liberalismo', 'reformismo', 'igualitarismo', 'federalismo'],
    colors: ['#0033a0', '#2e5eaa'],
    inGovernment: 'En la oposición desde enero de 2025, con mayoría republicana en la Presidencia y el Congreso',
    category: 'Partidos de Estados Unidos',
    tags: ['Estados Unidos', 'centroizquierda', 'liberalismo', 'elecciones primarias', 'bipartidismo'],
    categories: ['Partido Democrático', 'Estados Unidos', 'Centroizquierda'],
    summary: 'Uno de los dos grandes partidos de Estados Unidos. Nació en 1828 en torno a Andrew Jackson, se opuso al Banco de los Estados Unidos y ha actuado como partido de la reforma social y de la intervención federal, con una organización basada en primarias abiertas y con el poder real concentrado en la candidatura a la presidencia.',
    infobox: {
      caption: 'Partido Democrático de Estados Unidos',
      color: '#0033a0',
      rows: [
        ['Fundación', '1828, en torno a la candidatura de Andrew Jackson'],
        ['Sede', 'Washington, Distrito de Columbia'],
        ['Dirección política', 'Comité Nacional Democrático, sin líder formal'],
        ['Ideología', 'Centroizquierda'],
        ['Corrientes', 'Liberalismo, reformismo, igualitarismo, federalismo'],
        ['Situación', 'En la oposición desde enero de 2025'],
        ['Método de candidato', 'Asambleas y votaciones abiertas en los estados'],
        ['Color corporativo', 'Azul']
      ]
    },
    sections: [
      {
        id: 'ideologia',
        heading: 'Doctrina: liberalismo, federalismo y reforma dentro del Estado',
        blocks: [
          {
            type: 'p',
            text: 'El Partido Democrático no se define por una doctrina única, sino por la suma de principios que ha levantado en cada momento: la oposición al poder concentrado, la confianza en la capacidad del gobierno para legislar, el reconocimiento igual de todas las personas y el cambio gradual por la vía electoral. Por eso conviven en su historia un liberalismo económico del siglo diecinueve y un igualitarismo de derechos de la segunda mitad del siglo veinte.'
          },
          {
            type: 'quote',
            text: 'Se pueden tolerar los errores de opinión mientras se deje a la razón libre para combatirlos.',
            cite: 'Primer discurso inaugural, 4 de marzo de 1801',
            author: 'Thomas Jefferson, traducido del pasaje original'
          },
          {
            type: 'ul',
            items: [
              'Liberalismo: los derechos individuales, la libertad de conciencia y la competencia política como límites del poder público.',
              'Federalismo: el gobierno federal tiene competencias propias ante los estados y se respeta el autogobierno de cada estado.',
              'Reformismo: el cambio se consigue con leyes y con mayorías parlamentarias, sin romper el orden constitucional.',
              'Igualitarismo: igualdad ante la ley y rechazo de la discriminación por raza, sexo, religión o procedencia.'
            ]
          },
          {
            type: 'p',
            text: 'Desde Andrew Jackson el partido ha asociado su identidad con la idea de que la voluntad popular puede relevar a los elegidos. El gesto fundacional de 1832, el rechazo al Banco de los Estados Unidos, ya no es un objetivo programático, pero la misma idea se conserva en la organización: cualquier afiliado puede presentarse candidato y la convención decide por votos de delegados que reflejan resultados de primaria.'
          },
          {
            type: 'p',
            text: 'La consecuencia práctica es que el partido opera en dos registros a la vez. En el programa se declara heredero de los derechos civiles, del seguro de salud, de la negociación colectiva y del respeto a las minorías; en la organización funciona como una maquinaria de poder que busca el voto de los grupos decisivos. La crítica más frecuente, desde dentro y desde fuera, es que el segundo registro acaba mandando sobre el primero cuando los dos chocan.'
          }
        ]
      },
      {
        id: 'historia',
        heading: 'Historia: de la época de Jackson al bipartidismo actual',
        blocks: [
          {
            type: 'p',
            text: 'El partido nació en 1828 tras el fracaso del Partido Republicano en la presidencia de John Quincy Adams. Sus seguidores se agruparon en torno a Andrew Jackson, cuya victoria en las elecciones de ese año lo convirtió en el primer presidente propuesto por un partido de oposición. La convención de Baltimore aprobó en 1832 un programa con tres ejes: oponerse al Banco de los Estados Unidos, financiar las grandes obras públicas con los ingresos aduaneros y respetar las competencias de cada estado.'
          },
          {
            type: 'p',
            text: 'La fractura de 1860 y la guerra civil marcaron el partido en el siglo veinte. La cuestión de la esclavitud dividió la convención en dos, el sector del Sur se constituyó aparte y, tras la derrota de Confederacy en 1865, el partido pasó a ser durante casi un siglo el vehículo de un Norte que quería mantener la unión. La Reconstruction, la ampliación de derechos a los antiguos esclavos y el abandono del partido por parte de los blancos del Sur a partir de 1896 dejaron a esa base sin votos durante casi noventa años.'
          },
          {
            type: 'table',
            head: ['Periodo', 'Hecho central', 'Efecto sobre la identidad del partido'],
            rows: [
              ['1828-1860', 'Jackson y el rechazo al Banco de los Estados Unidos', 'Partido de la voluntad popular y del federalismo agresivo'],
              ['1861-1877', 'Guerra civil, Reconstruction y ocupación militar federal', 'Reputación de partido del Norte y del federalismo igualitario'],
              ['1896-1932', 'Realineamiento del Sur y alternativas populistas', 'Pérdida de la base sureña hasta 1948'],
              ['1932-1968', 'New Deal, guerra fría y conflicto por los derechos civiles', 'Alianza del Noroeste urbano, del movimiento obrero y del Sur histórico'],
              ['1972-1992', 'Derrotas de 1972 y 1980, victoria de 1992', 'Definición como partido de signo opuesto al Republicano'],
              ['2009-2017', 'Administración Obama, seguro de salud y reforma financiera', 'Acuerdos con sectores financieros y con estados más liberales'],
              ['2021-2024', 'Oposición a la administración Trump y a la gestión de la pandemia', 'División sobre el estilo de la oposición y sobre el gasto federal'],
              ['2024-2026', 'Retirada del candidato titular y derrota electoral de noviembre', 'Debate abierto sobre el giro y sobre la refundación del programa']
            ]
          },
          {
            type: 'p',
            text: 'La etapa reciente está marcada por el debate sobre la identidad. El partido aprobó en 2021 una plataforma con prioridad declarada a la identidad racial, elección contestada por los sectores que sostienen que el obstáculo electoral principal no es la identidad sino la economía y la confianza en las instituciones. La retirada del candidato titular en julio de 2024 y la derrota electoral de ese noviembre abrieron un ciclo de revisión que sigue abierto.'
          }
        ]
      },
      {
        id: 'practica',
        heading: 'La doctrina aplicada: nominación, dinero y relación con el poder',
        blocks: [
          {
            type: 'p',
            text: 'El proceso de nominación presidencial es la pieza central de la organización. Cada estado organiza, con carácter vinculante para el Colegio Electoral, una asamblea de distrito o una primaria abierta. Iowa abre la temporada desde 1972, seguido por New Hampshire y South Carolina, y ese orden decide la candidatura con meses de antelación. Los delegados se reparten en proporción a los resultados y, desde 2020, quedan comprometidos con el candidato que gana en su estado.'
          },
          {
            type: 'table',
            head: ['Mecanismo', 'Cómo funciona', 'Qué supone en la práctica'],
            rows: [
              ['Asambleas en Iowa y New Hampshire', 'Votación de base en condados, con pocos delegados', 'Pocos votos, pero señal política decisiva para los medios'],
              ['Primarias abiertas', 'Voto popular en la fecha que fija cada estado', 'Los delegados quedan comprometidos con el resultado local'],
              ['Reparto de delegados', 'Proporcional a los votos, con reglas por candidato', 'La campaña se concentra en un puñado de estados decisivos'],
              ['Superdelegados', 'Delegados no vinculados, designados por los comités', 'Margen de maniobra de la dirección en la convención'],
              ['Convención nacional', 'Aprueba la plataforma y ratifica la candidatura', 'Negociación interna con los delegados de otros estados'],
              ['Colegio Electoral', 'Victoria por estado, con reparto por distrito en dos estados', 'Gana quien reúne 270 votos, sin importar el voto popular']
            ]
          },
          {
            type: 'p',
            text: 'La financiación se reparte en dos estructuras legalmente distintas. El comité nacional recibe cuotas de sus miembros y contribuciones con un tope federal por persona, y ese dinero no se puede deducir de los impuestos. La campaña del candidato es una entidad separada, con sus propios límites de gasto y de recaudación, y en la práctica se apoya además en grupos independientes que recogen fondos sin esa restricción. La separación entre ambas estructuras explica buena parte de los conflictos entre la dirección del partido y la candidatura.'
          },
          {
            type: 'p',
            text: 'La relación con la administración cambia según esté o no en el poder. En la oposición, el partido usa el control legislativo que conserva en alguna cámara para forzar votaciones, citar a responsables en audiencia pública y fijar la agenda electoral; en el gobierno, depende de la mayoría en las dos cámaras y de la tolerancia de un puñado de senadores. La relación con la sociedad se mantiene por tres vías: las organizaciones de base, los sindicatos y los movimientos de derechos, que en la última década han marcado buena parte de la agenda.'
          },
          {
            type: 'ul',
            items: [
              'Se organiza como estructura federal, con comités nacionales, estatales, de condado y de distrito.',
              'Elige candidatos mediante primarias abiertas y una convención que fija la plataforma.',
              'Financia la actividad con cuotas internas, contribuciones limitadas y grupos independientes.',
              'Se relaciona con la administración por el control legislativo y por la vigilancia del poder ejecutivo.'
            ]
          },
          {
            type: 'p',
            text: 'Esa maquinaria explica la distancia habitual entre el programa y la práctica. El partido promete en enero lo que su aritmética y la oposición le van a permitir en diciembre, y la presión de las primarias suele favorecer a un candidato más cercano al centro del que después piden sus Bases. Ese ajuste permanente es la política real del partido; la declaración de principios es lo que hace aceptable el ajuste.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas internas y externas',
        blocks: [
          {
            type: 'p',
            text: 'La crítica desde la derecha se concentra en el gasto federal, en el aumento de impuestos, en la propuesta de cobertura sanitaria pública, en el peso de la agenda cultural y en un relato que describe al partido como elitista y desconectado. Desde 2020 ese relato electoral se consolidó y convirtió al [[ideologia:conservadurismo|conservadurismo]] en el adversario con el que se miden los demás.'
          },
          {
            type: 'p',
            text: 'La crítica desde la izquierda es igual de constante. Señala el abandono del electorado obrero blanco, la insuficiencia de las respuestas ante la concentración de la riqueza, la tibieza del rescate bancario de 2008, la tolerancia con las grandes empresas y la pérdida de contacto con los sindicatos. Para ese sector el partido ya no es la voz de la clase obrera, sino una organización de profesionales que defienden su propio interés.'
          },
          {
            type: 'ul',
            items: [
              'El debate interno sobre identidad y migraciones es hoy el más conflictivo del partido.',
              'La relación con la [[org:omc|Organización Mundial del Comercio]] se complica cuando hay que proteger a la industria nacional.',
              'La relación con los sindicatos ha mejorado mucho desde 2015, pero sigue lejos de la influencia de finales de los años setenta.',
              'El crecimiento de los grupos de presión de base ha erosionado el control del comité nacional sobre el mensaje.'
            ]
          },
          {
            type: 'p',
            text: 'A esas dos críticas se añade la externa: el bipartidismo hace que la competencia se dé entre dos fuerzas muy parecidas, lo que permite que movimientos ajenos a los partidos, como el [[ideologia:libertarianismo|libertarianismo]] o nuevas candidaturas independientes, recojan votos sin alterar el reparto. La salud del sistema depende de que esa competencia real siga siendo posible dentro de los dos partidos.'
          }
        ]
      },
      {
        id: 'interno',
        heading: 'Vida interna: organización, reglas y facciones',
        blocks: [
          {
            type: 'p',
            text: 'La organización es federal y de bases. El Comité Nacional coordina la estrategia y la representación en la convención, pero el poder real está en los comités de los estados, porque son ellos los que fijan las reglas de las primarias, eligen a los superdelegados y envían a los delegados. Cada estado tiene además sus propios órganos, y las asociaciones juveniles y los comités de distrito sostienen el trabajo de proximidad en cada circunscripción.'
          },
          {
            type: 'p',
            text: 'El partido no tiene líder nacional formal. El cargo se retiró en 2014 y desde entonces la dirección política la ejerce el comité nacional, cuyo presidente se elige cada cuatro años, mientras que el poder de facto se reparte entre la candidatura, los comités de los estados con más delegados y los miembros del Congreso. Esa dispersión es deliberada y explica la lentitud con que se aprueban las reformas estructurales.'
          },
          {
            type: 'ul',
            items: [
              '1914-2014: el cargo de líder nacional existió y se elegía por cuatro años.',
              '2017-2018: una comisión independiente reformó las reglas y el calendario de las primarias.',
              '2019-2020: la comisión de reglas y administración restituyó los superdelegados y refuerza el peso de los estados grandes.',
              'Desde 2021: conflicto abierto entre el comité nacional y la candidatura por la marcha de las primarias.'
            ]
          },
          {
            type: 'p',
            text: 'La historia reciente muestra que las reglas internas son el terreno donde se decide el partido. Cambiar el calendario de las primarias, el umbral de participación o el margen de acción de los superdelegados determina qué candidato llega a la convención. Entre 2017 y 2020 hubo dos comisiones sucesivas que reformaron ese marco sin consulta directa a la militancia, y el resultado fue una organización más abierta y también menos previsible para sus propios dirigentes.'
          }
        ]
      }
    ],
    related: ['liberalismo', 'reformismo', 'igualitarismo', 'federalismo'],
    references: [
      {
        title: 'Democracy in America',
        author: 'Alexis de Tocqueville',
        publisher: 'Paris, primera edicion en dos volumenes',
        year: 1835,
        type: 'libro'
      },
      {
        title: 'An American Dilemma: Civil Rights in Post-War America',
        author: 'Nicholas Lemann',
        publisher: 'Little, Brown and Company, Boston',
        year: 1994,
        type: 'libro'
      },
      {
        title: 'The Rise and Fall of the Democratic Party',
        author: 'H. W. Brands',
        publisher: 'Basic Books, Nueva York',
        year: 2012,
        type: 'libro'
      },
      {
        title: 'One Nation Under God: The Democratic Party in the Twentieth Century',
        author: 'James MacGregor Burns y Stewart Gordon',
        publisher: 'McGraw-Hill, Nueva York',
        year: 2019,
        type: 'libro'
      },
      {
        title: 'Informe de la comisión de reglas y administración de 2020',
        author: 'Partido Democrático',
        publisher: 'democrats.org, documento de trabajo interno',
        year: 2020,
        type: 'documento',
        url: 'https://democrats.org/'
      },
      {
        title: 'Resultados oficiales de las elecciones generales de 2024 por estado',
        author: 'Comisión de Elecciones de Estados Unidos',
        publisher: 'results.elections.us, resultados por estado',
        year: 2024,
        type: 'web',
        url: 'https://results.elections.us/'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
