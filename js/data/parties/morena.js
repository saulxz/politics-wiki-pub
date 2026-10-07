(function (PW) {
  PW.parties = PW.parties || {};
  'use strict';
  PW.parties['morena'] = {
    slug: 'morena',
    title: 'Movimiento Regeneración Nacional',
    name: 'Movimiento Regeneración Nacional',
    shortName: 'Morena',
    country: 'México',
    countryCode: 'mx',
    countryRegion: 'Norteamérica',
    founded: 2011,
    headquarters: 'Ciudad de México, México',
    leader: 'Ariadna Montiel Reyes, presidenta del partido',
    ideologyLabel: 'Izquierda',
    // 'pacifismo' se sustituyo por 'nacionalismo' (2026-09-27). Morena gobierna
  // desde 2018 con la doctrina del abrazo sin disparos, disolucion de los
  // grupos del Cartel de Sinaloa y operaciones con la Guardia Nacional: eso es
  // politica de seguridad coactiva, no pacifismo. 'nacionalismo' ademas ya
  // figuraba en 'related' y coincide con la linea de soberania de la ficha.
  ideology: ['socialdemocracia', 'reformismo', 'nacionalismo', 'feminismo'],
    colors: ['#a50f1f', '#0b3d6b'],
    inGovernment: 'En el Gobierno federal desde el 1 de diciembre de 2018, primero con Andrés Manuel López Obrador y desde el 1 de octubre de 2024 con Claudia Sheinbaum',
    subtitle: 'Partido de izquierda en el poder desde 2018, formado fuera del sistema de partidos y con mayoría en el Congreso',
    updated: '2026-09-27',
    summary: 'Movimiento Regeneración Nacional es un partido mexicano de izquierda que ocupa la Presidencia desde diciembre de 2018. Nació en 2011 de la ruptura de Andrés Manuel López Obrador con el PRD, se registró como partido en 2014 y reúne más de doce millones de afiliados.',
    infobox: {
      caption: 'Movimiento Regeneración Nacional',
      color: '#a50f1f',
      rows: [
        ['Fundación', '2 de octubre de 2011 como asociación civil'],
        ['Registro como partido', '19 de enero de 2014'],
        ['Sede', 'Ciudad de México'],
        ['Líder', 'Ariadna Montiel Reyes, presidenta'],
        ['Ideología', 'Izquierda reformista y socialdemócrata'],
        ['Gobierno', 'Poder ejecutivo federal desde 2018'],
        ['Origen', 'Ruptura del PRD y de su fundador'],
        ['Afiliados', 'Más de doce millones en 2026']
      ]
    },
    sections: [
      {
        id: 'ideologia',
        heading: 'Ideología y doctrina',
        blocks: [
          {
            type: 'p',
            text: 'Morena se declara partido de izquierda reformista y socialdemócrata. Rechaza tanto la etiqueta de partido neoliberal como la de partido revolucionario clásico. Su programa habla de una cuarta transformación que continúa la Independencia, la Reforma y la Revolución. La identidad del partido se apoya en la cercanía con las clases populares y con el campo.'
          },
          {
            type: 'ul',
            items: [
              'Cuarta transformación: las tres etapas históricas fundantes tomadas como una sola secuencia.',
              'Soberanía: defensa de la soberanía energética y alimentaria del país.',
              'Democracia participativa: consultas ciudadanas y revocación del mandato presidencial.',
              'Paz: rechazo a las guerras y defensa de la negociación como método.',
              'Igualdad: paridad de género y acceso universal a la salud pública.'
            ]
          },
          {
            type: 'p',
            text: 'La doctrina del partido no es un cuerpo teórico cerrado, sino un repertorio organizado alrededor de su fundador. Esa flexibilidad le ha permitido absorber sectores muy distintos, desde los sindicatos hasta las comunidades indígenas. La misma característica ha sido interpretada como una fortaleza electoral y como una falta de coherencia programática.'
          },
          {
            type: 'note',
            text: 'El peso del electorado religioso en sus filas se explica en parte por la coalición con el Partido Verde Ecologista. Ese aliado aportó votos decisivos en 2018, 2021 y 2024, y ha condicionado el tratamiento de los asuntos de la familia y de la libertad religiosa en el programa del partido.'
          }
        ]
      },
      {
        id: 'historia',
        heading: 'Historia: del PRD a la Presidencia',
        blocks: [
          {
            type: 'p',
            text: 'La historia de Morena es, en buena medida, la historia previa de su fundador. López Obrador se incorporó al PRD en 1988 y lo dirigió entre 1996 y 1999. Resultó derrotado como candidato presidencial en 2006 y en 2012, y en 2011 fundó su propia organización. La asociación civil obtuvo el registro como partido en enero de 2014.'
          },
          {
            type: 'ol',
            items: [
              '1988: participación en la Corriente Democrática que funda el PRD en 1989.',
              '1996-1999: presidencia de López Obrador en el PRD.',
              '2011: constitución del Movimiento Regeneración Nacional como asociación civil.',
              '2014: registro como partido político nacional ante el Instituto Nacional Electoral.',
              '2018: victoria presidencial con el 53,19 por ciento de los votos.',
              '2021: mayoría defendida con el 35,2 por ciento de los votos.',
              '2024: elección de Claudia Sheinbaum con el 59,8 por ciento de los votos.',
              '2025: derrota en Guerrero ante la oposición.'
            ]
          },
          {
            type: 'p',
            text: 'Las elecciones de 2018 rompieron el orden bipartidista mexicano. La participación superó el setenta y nueve por ciento y el cambio se produjo en el primer turno. En 2021 el partido perdió casi siete puntos y tres gubernaturas. Las elecciones de 2024 le devolvieron doscientos noventa de los quinientos diputados.'
          },
          {
            type: 'table',
            head: ['Año', 'Ciclo electoral', 'Resultado'],
            rows: [
              ['2018', 'Presidencial', '53,19% y 308 diputados'],
              ['2021', 'Legislativo', '35,2% y 198 diputados'],
              ['2021', 'Gubernaturas', 'Cinco de los quince estados en disputa'],
              ['2024', 'Presidencial', '59,8% con Claudia Sheinbaum'],
              ['2024', 'Legislativo', '290 diputados y 54 senadores'],
              ['2025', 'Gubernaturas', 'Derrota en Guerrero ante el PAN y el PRD']
            ]
          }
        ]
      },
      {
        id: 'practica',
        heading: 'La ideología en la práctica',
        blocks: [
          {
            type: 'p',
            text: 'Morena es el primer partido de la izquierda mexicana que gana la Presidencia. López Obrador gobernó de diciembre de 2018 a noviembre de 2024 y Claudia Sheinbaum desde el 1 de octubre de 2024. La continuidad administrativa ha sido el rasgo más visible de la gestión, junto con la concentración de la agenda en un mismo eje.'
          },
          {
            type: 'p',
            text: 'En el terreno presupuestal, el crecimiento ha sido la característica más visible. El presupuesto federal de 2025 se aprobó por 9,06 billones de pesos, un 7,5 por ciento más que el del año anterior. La mayor partida nueva son las transferencias directas a personas, sobre todo adultos mayores y jóvenes. La agenda social se ha ampliado a la salud y a la educación.'
          },
          {
            type: 'table',
            head: ['Año', 'Medida', 'Alcance'],
            rows: [
              ['2018', 'Compromiso de no privatizar luz y petróleo', 'Cumplido en todo el periodo'],
              ['2019', 'Creación de la Guardia Nacional', 'Mayor peso de las fuerzas armadas'],
              ['2023', 'Apertura del Tren Maya', 'Costo cercano a 377 mil millones de pesos'],
              ['2024', 'Desaparición de organismos autónomos', 'Supresión de más de treinta entidades'],
              ['2024', 'Reforma del Poder Judicial', 'Elección popular de magistrados en 2025'],
              ['2024', 'Reforma constitucional energética', 'Control estatal de luz y petróleo'],
              ['2026', 'Presupuesto con recorte del gasto', 'Primera reducción desde 2018']
            ]
          },
          {
            type: 'p',
            text: 'Las alianzas con formaciones ajenas a su ideología han sido rentables y discutidas. Con el Partido del Trabajo y el Partido Verde Ecologista formó las coaliciones de 2018, 2021 y 2024. En 2024 pactó además con el PAN y el PRD en nueve entidades, algo impensable en 2013. Ese pacto no impidió la derrota en Guerrero en junio de 2025.'
          },
          {
            type: 'p',
            text: 'También ha roto sus propios compromisos. La promesa de 2018 de no privatizar la luz y el petróleo se cumplió, y en 2024 una reforma devolvió a esas empresas el carácter de monopolio estatal. La tensión mayor llegó con la reforma del Poder Judicial de marzo de 2024, que sustituyó la carrera judicial por la elección popular de magistrados.'
          },
          {
            type: 'quote',
            text: 'Algunos funcionarios estadounidenses están conspirando para debilitar a Morena y fortalecer a la oposición de derecha en México, con el objetivo de restaurar un gobierno servil, corrupto, de tipo mafioso y cruel.',
            cite: 'Carta de Andrés Manuel López Obrador, publicada el 3 de junio de 2026',
            author: 'Andrés Manuel López Obrador'
          },
          {
            type: 'note',
            text: 'La política de seguridad ha sido el apartado más discutido de la gestión. El Gobierno aplicó la doctrina del abrazo sin disparos y declaró disueltos los principales grupos del Cartel de Sinaloa. Entre 2019 y 2024 las cifras oficiales de homicidios cayeron, y en 2025 volvieron a crecer. En abril de 2026 el Departamento de Justicia de Estados Unidos acusó al gobernador de Sinaloa, Rubén Rocha Moya, de colaborar con ese cartel, y el partido respondió que las acusaciones carecen de pruebas.'
          },
          {
            type: 'p',
            text: 'El costo político del método se vio en la base. En septiembre de 2025 miles de jóvenes salieron a las calles de la capital para pedir la anulación de la reforma judicial. La Presidencia evitó la revocación y justificó la medida con un argumento de democracia directa. El episodio mostró la distancia entre el partido y una parte de su electorado joven.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas',
        blocks: [
          {
            type: 'p',
            text: 'Las críticas principales proceden de la oposición, de los medios y de una parte de la academia. Se agrupan en cuatro frentes: la concentración del poder, la definición del partido, el método de renovación democrática y los resultados de la política de seguridad. El partido rechaza la mayor parte de estas objeciones y presenta sus consultas ciudadanas como una expresión de democracia directa.'
          },
          {
            type: 'ul',
            items: [
              'Definición del partido: se le cuestiona que agrupe sectores muy diversos detrás de una sola figura.',
              'Instituciones: la reforma judicial y la supresión de organismos autónomos se consideran un debilitamiento del Estado de derecho.',
              'Seguridad: se le atribuye la militarización de la vida pública y el traslado del conflicto armado a los estados.',
              'Medios: se le acusa de usar la publicidad oficial y el marco normativo para presionar a los medios críticos.',
              'Proceso electoral: se cuestiona el uso de revocaciones como fuente de legitimidad en lugar del conteo ordinario.'
            ]
          },
          {
            type: 'p',
            text: 'La respuesta institucional del partido se apoya en un argumento de alcance histórico. Sostiene que las reformas atacan a un poder legislativo controlado por los partidos que gobernaron antes de 2018. Y añade que la voluntad popular expresada en las consultas ciudadanas tiene una legitimidad superior a la de los procedimientos anteriores.'
          },
          {
            type: 'p',
            text: 'Las críticas internas son menos frecuentes que las externas. El partido ha perdido a figuras de peso por decisiones del líder, entre ellas un alto responsable de la política energética que dejó la dirección en enero de 2023. También se le reprocha la migración de miembros hacia otros partidos y la existencia de facciones alineadas por completo con la dirección.'
          }
        ]
      },
      {
        id: 'interno',
        heading: 'Vida interna',
        blocks: [
          {
            type: 'p',
            text: 'Morena se organiza mediante un Comité Ejecutivo Nacional, una Secretaría General y una estructura de comités en los estados. La base real son los comités de base y los sectores que agrupan a sindicatos, organizaciones campesinas y grupos juveniles. Desde 2023 utiliza procesos de selección abierta para elegir a sus candidatos, como corrección de la opacidad anterior.'
          },
          {
            type: 'ul',
            items: [
              'La presidencia del partido, ocupada desde mayo de 2026 por Ariadna Montiel Reyes, anterior ministra de Bienestar.',
              'La Secretaría General, a cargo de Carolina Rangel Gracida, centrada en la organización electoral.',
              'Los comités territoriales, donde se resuelven los procesos internos y las candidaturas locales.',
              'La corriente del fundador, que sigue condicionando la orientación de la organización.',
              'Los sectores de la función pública, con presencia relevante en el Gobierno federal.'
            ]
          },
          {
            type: 'figure',
            caption: 'Trayectoria electoral: 53,19 por ciento en 2018, 35,2 por ciento en 2021, 59,8 por ciento en 2024 con Claudia Sheinbaum y doscientos noventa diputados, hasta la derrota en Guerrero en 2025.',
            credit: 'Síntesis sobre resultados electorales del Instituto Nacional Electoral'
          }
        ]
      }
    ],
    related: ['socialdemocracia', 'reformismo', 'nacionalismo', 'partido:vox', 'partido:ppsoe'],
    categories: ['Morena', 'México'],
    references: [
      {
        title: 'Registro del Movimiento Regeneración Nacional como partido nacional',
        author: 'Instituto Nacional Electoral',
        publisher: 'Instituto Nacional Electoral, Ciudad de México',
        year: 2014,
        type: 'informe',
        url: 'https://ine.mx/'
      },
      {
        title: 'Resultados de la elección presidencial de 2018',
        author: 'Instituto Nacional Electoral',
        publisher: 'Instituto Nacional Electoral, Ciudad de México',
        year: 2018,
        type: 'informe',
        url: 'https://ine.mx/'
      },
      {
        title: 'Resultados de la elección presidencial de 2024',
        author: 'Instituto Nacional Electoral',
        publisher: 'Instituto Nacional Electoral, Ciudad de México',
        year: 2024,
        type: 'informe',
        url: 'https://ine.mx/'
      },
      {
        title: 'Ariadna Montiel assumes presidency of Morena party',
        author: 'MND Staff',
        publisher: 'Mexico News Daily, Ciudad de México',
        year: 2026,
        type: 'articulo',
        url: 'https://mexiconewsdaily.com/politics/ariadna-montiel-leadership-morena-party'
      },
      {
        title: 'Mexico’s ex-president accuses US of plotting to weaken governing party',
        author: 'The Guardian',
        publisher: 'The Guardian, Londres',
        year: 2026,
        type: 'articulo',
        url: 'https://www.theguardian.com/world/2026/jun/04/mexico-amlo-moreno-governing-us'
      },
      {
        title: 'Movimiento Regeneración Nacional',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'enciclopedia',
        url: 'https://es.wikipedia.org/wiki/Movimiento_Regeneraci%C3%B3n_Nacional'
      },
      {
        title: 'Ley Orgánica de los Partidos Políticos y Procesos Electorales',
        author: 'Congreso de la Unión',
        publisher: 'Diario Oficial de la Federación, Ciudad de México',
        year: 2014,
        type: 'ley',
        url: 'https://www.dof.gob.mx/'
      }
    ]
  };
  PW.parties['morena'].kind = 'partido';
})(window.PW = window.PW || { articles: {}, parties: {}, geo: {}, orgs: {} });
