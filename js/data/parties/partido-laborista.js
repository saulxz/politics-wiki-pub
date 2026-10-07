(function (PW) {
  PW.parties = PW.parties || {};
  'use strict';
  PW.parties['partido-laborista'] = {
    kind: 'partido',
    slug: 'partido-laborista',
    name: 'Partido Laborista',
    shortName: 'Labour',
    title: 'Labour',
    subtitle: 'Partido del centroizquierda británico, de origen sindical, que gobierna desde 2024 con mayoría absoluta',
    updated: '2026-09-27',
    country: 'Reino Unido',
    countryCode: 'gb',
    countryRegion: 'Europa occidental',
    founded: 1900,
    headquarters: 'Londres, Reino Unido',
    leader: 'Andy Burnham, desde julio de 2026',
    ideologyLabel: 'Centroizquierda',
    ideology: ['socialdemocracia', 'sindicalismo', 'reformismo'],
    colors: ['#e4003b'],
    inGovernment: 'Gobierno con mayoría absoluta desde julio de 2024',
    summary: 'Partido del centroizquierda británico creado en 1900 por sindicatos y sociedades operarias, que gobierna el país desde 2024 y cuyo programa se apoya en el salariado, el servicio nacional de salud y la negociación colectiva.',
    infobox: {
      caption: 'Labour',
      color: '#e4003b',
      rows: [
        ['Fundación', '1900, como Comité de Representación Laboral'],
        ['Sede', 'Transport House, Londres'],
        ['Líder', 'Andy Burnham, desde julio de 2026'],
        ['Ideología', 'Centroizquierda'],
        ['Corrientes', 'Socialdemocracia, sindicalismo, reformismo'],
        ['Situación', 'Gobierno con mayoría absoluta desde 2024'],
        ['Diputados, julio de 2024', '411 de 650, con el 33,7 % de los votos'],
        ['Color corporativo', 'Rojo laborista']
      ]
    },
    sections: [
      {
        id: 'ideologia',
        heading: 'Doctrina: del laborismo a la socialdemocracia',
        blocks: [
          {
            type: 'p',
            text: 'El Partido Laborista británico no nació como una corriente doctrinal, sino como una organización electoral. En 1900 los sindicatos y las sociedades operarias crearon un comité para presentar candidatos propios en las elecciones generales, y el nombre de Labour se adoptó poco después. La legalización como partido llegó en 1906, cuando 29 de sus diputados vencieron a los liberales.'
          },
          {
            type: 'ul',
            items: [
              'Laborismo: el partido es la expresión política de la clase obrera organizada.',
              'Socialdemocracia: propiedad privada con fuerte intervención pública y Estado de bienestar.',
              'Sindicalismo: la negociación colectiva es un derecho y la huelga un instrumento legítimo.',
              'Reformismo: el cambio se consigue con las elecciones y las leyes, no con la revolución.'
            ]
          },
          {
            type: 'p',
            text: 'La cláusula cuarta del programa de 1918 fue la formulación más clara de esa identidad: la riqueza del país debía ponerse al servicio de la comunidad. La cláusula excluía la nacionalización de los medios de producción, y ese límite explica buena parte de las tensiones internas posteriores del partido.'
          },
          {
            type: 'p',
            text: 'Tony Blair suspendió la cláusula en 1987 y la retiró en 2000. Ed Miliband la sustituyó en 2010 por el compromiso de promover el interés común. La redacción vigente no menciona ni la propiedad ni la nacionalización, y esa ambigüedad permite gobernar desde el centro o desde la izquierda.'
          },
          {
            type: 'note',
            text: 'La historia de la cláusula explica por qué, en el lenguaje del partido, laborismo y socialismo no son sinónimos. En la práctica británica el segundo término ha designado con frecuencia posiciones mucho más alejadas de la socialdemocracia que el programa efectivo del Labour.'
          },
          {
            type: 'figure',
            caption: 'Esquema de las tres dimensiones ideológicas del laborismo: origen sindical, economía mixta reformista y método democrático.',
            credit: 'Elaboración propia a partir de la bibliografía del partido'
          },
          {
            type: 'dl',
            items: [
              ['Cláusula IV, 1918', 'Riqueza del país para el bien común, sin nacionalización'],
              ['Cláusula Blair, 2000', 'Retirada de la cláusula; el mercado como marco natural'],
              ['Cláusula Miliband, 2010-2011', 'Interés común, sin mención de la propiedad'],
              ['Reglas de 2023', 'Sin necesidad de avales sindicales para presentarse a líder']
            ]
          }
        ]
      },
      {
        id: 'historia',
        heading: 'Historia: del origen sindical a la reconstrucción de 1945',
        blocks: [
          {
            type: 'p',
            text: 'El primer gobierno laborista fue posible por la crisis de 1929. Ramsay Macdonald dejó el poder en enero de 1924 y repitió la experiencia en 1929. Los años treinta fueron de desempleo alto, y en 1931 el partido expulsó a Macdonald por formar un gobierno de unidad nacional con los liberales.'
          },
          {
            type: 'p',
            text: 'La etapa decisiva llegó con el frente popular de 1935 a 1940 y, sobre todo, con la guerra. En 1942 se publicó el informe Beveridge, que situaba el Estado de bienestar como objetivo explícito del país. En 1945 el partido ganó con el 47,7 % de los votos, y el gobierno de Clement Attlee creó el servicio nacional de salud el 5 de julio de 1948 y nacionalizó el carbón, el acero y la electricidad.'
          },
          {
            type: 'p',
            text: 'Después de 1951 el partido pasó a la oposición y no volvió a gobernar hasta 1964. La década de 1980 le costó caro: privatizaciones y dos huelgas obreras muy duras en 1984 y 1985. Esa experiencia explica que el Labour de Blair llegara al poder en 1997 con una estrategia de equilibro, ni la economía ni la identidad del adversario.'
          },
          {
            type: 'ol',
            items: [
              '1900-1906: el comité electoral se convierte en partido.',
              '1924-1931: los dos primeros gobiernos, el segundo acaba con el desplome de la bolsa.',
              '1935-1945: frente popular, guerra y victoria con el 47,7 % de los votos en 1945.',
              '1945-1951: creación del Estado de bienestar y del servicio nacional de salud.',
              '1951-1979: oposición, salvo los gobiernos de Wilson entre 1964 y 1970.',
              '1980-1997: Blair, el cambio de la cláusula IV y la búsqueda de una identidad propia.',
              '2010-2015: socio menor de una coalición con los liberales.',
              '2015-2019: etapa corbynista y declive electoral acentuado.',
              '2024-2026: mayoría absoluta en 2024 y cambio de líder en 2026.'
            ]
          },
          {
            type: 'note',
            text: 'Los periodos de gobierno del partido en el Reino Unido no son continuos: entre 1951 y 1997 acumuló casi cuarenta años sin ganar las elecciones generales. Ese ciclo, junto con la caída de la afiliación sindical, explica buena parte de la cautela habitual del partido al redactar sus programas.'
          }
        ]
      },
      {
        id: 'practica',
        heading: 'La ideología en la práctica',
        blocks: [
          {
            type: 'p',
            text: 'El contraste entre lo que dice el partido y lo que ha hecho es la parte más instructiva de su historia. El Labour que en 1945 creó el servicio nacional de salud y nacionalizó el agua se vio desconocido en los años ochenta, cuando la privatización del agua de 1989 fue el activo central del conservadurismo de Thatcher. Blair décadas después hizo de esa renacionalización una seña del nuevo laborismo.'
          },
          {
            type: 'table',
            head: ['Materia', 'Compromiso laborista', 'Qué ocurrió en la práctica'],
            rows: [
              ['Estado de bienestar', 'Creación tras el informe Beveridge de 1942', 'Servicio nacional de salud creado el 5 de julio de 1948; nunca deshecho'],
              ['Agua y energía', 'Nacionalización entre 1944 y 1947', 'Agua privatizada en 1989; renacionalización desde 2023'],
              ['Salario mínimo', 'Crear un salario que no existía', 'Introducido en abril de 1999, trece años después de la promesa'],
              ['Matrícula universitaria', 'No subir las tasas, programa de 2015', 'Triplicadas a 9.000 libras en 2012; abolidas en 2019'],
              ['Cotización sindical', 'Apoyo a la negociación colectiva', 'Cuotas semanales voluntarias desde enero de 2025']
            ]
          },
          {
            type: 'p',
            text: 'Los años de Blair ilustran la distancia entre reforma y promesa. El salario mínimo nacional se creó por la ley de derechos laborales de 1999, trece años después del compromiso electoral. La devolución de poderes a Escocia, Gales e Irlanda del Norte se hizo bien. En cambio, el Gobierno elevó dos veces la matrícula y aceptó mecanismos de mercado en el servicio nacional de salud, un punto que le enfrentó al ala sindical.'
          },
          {
            type: 'p',
            text: 'La coalición de 2010 a 2015 con [[partido:liberales-democratas|los liberales-democratas]] fue el episodio más incómodo. Los laboristas cedieron las matrículas, triplicadas hasta 9.000 libras en 2012, rompiendo el compromiso de 2010 de subir el umbral a 6.000. A cambio del referendum de 2011 aceptaron recortes de hasta 4.000 millones y un impuesto sobre salud y cuidados, a cambio de un gobierno estable sin mayoría absoluta.'
          },
          {
            type: 'quote',
            text: 'Cinco gigantes hay que afrontar: la Wants, la Disease, la Ignorance, la Squalor y la Idleness.',
            cite: 'William Beveridge, Social Insurance and Allied Services, HMSO, 1942',
            author: 'Traducción del pasaje original'
          },
          {
            type: 'p',
            text: 'El gobierno de 2024 y 2025 mostró una doble cara. Con mayoría de 411 diputados, aprobó la ley de 2024 sobre trades y disputas, que derogó la norma de 2022 sobre niveles mínimos de servicio en las huelgas y suprimió la cotización automática de las cuotas sindicales. Es un recorte del poder sindical en un partido cuya fundación sindical es su legitimidad. El mismo gobierno suprimió en julio de 2024 el pago de invierno a los retirados y lo restauró tres meses después.'
          },
          {
            type: 'p',
            text: 'En inversión y territorio, el mismo gobierno actúa en dirección contraria. Nacionalizó British Steel en abril de 2025 y anunció ese verano el fin de las nuevas licencias de petróleo y gas. En política territorial heredó el Internal Market Act de 2020, criticada por los gobiernos de Escocia y Gales con el apoyo de diputados laboristas. En mayo de 2026 las elecciones locales se leyeron como una derrota, y en julio Andy Burnham fue elegido líder con 379 votos.'
          },
          {
            type: 'ul',
            items: [
              'Cumplido: servicio nacional de salud y seguridad social, base del pacto de posguerra.',
              'Cumplido con retraso: el salario mínimo, trece años tarde.',
              'Incumplido: la promesa de no subir las matrículas y la externalización del sector público.',
              'Invertido: la cláusula IV, del reformismo social hacia el mercado.',
              'Cuestionado: el poder sindical, con la ley de 2024 sobre trades y disputas.'
            ]
          },
          {
            type: 'note',
            text: 'La comparación con el [[partido:partido-conservador|partido conservador]] es el eje de casi todas estas filas. En los dos casos los programas se rompen más por la aritmética electoral propia y por la presión de la base que por las decisiones del adversario.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas internas y externas',
        blocks: [
          {
            type: 'p',
            text: 'La crítica desde la derecha se concentra en tres puntos. El primero es la desigualdad territorial del acceso a los servicios, reactivada desde 2016 por el voto a favor de salir de la [[org:union-europea|Unión Europea]]. El segundo es la sostenibilidad de un Estado de bienestar cuyo gasto no deja de crecer. El tercero es la presión fiscal sobre las pequeñas empresas.'
          },
          {
            type: 'p',
            text: 'La crítica desde la izquierda es igual de constante. Señala la retirada de la cláusula IV como la renuncia fundacional y la respuesta a la crisis de 2008, con el rescate bancario. Para ese sector el Labour ya no es la voz de la clase obrera sino un partido de profesionales que defienden un salario pequeño frente a ese mismo sector.'
          },
          {
            type: 'p',
            text: 'Las críticas internas tienen tres versiones. La de los sindicatos, que señalan el descenso sostenido de la afiliación sindical. La del ala socialdemócrata clásica, que echa de menos una política keynesiana y un Estado más redistributivo. La del ala de centro, que defiende el mercado y una política climática discreta. Las tres voces han condicionado la estrategia reciente.'
          },
          {
            type: 'ul',
            items: [
              'La afiliación sindical ha descendido de forma sostenida desde los años ochenta.',
              'Parte del votante que abandonaba el Labour se ha orientado hacia otros partidos.',
              'El debate interno sobre migraciones y el modelo de [[geo:migraciones-y-demografia|acogida]] es hoy el más conflictivo.'
            ]
          }
        ]
      },
      {
        id: 'interno',
        heading: 'Vida interna: sindicatos, normas y facciones',
        blocks: [
          {
            type: 'p',
            text: 'La organización del Labour es federal. Se compone de ramificaciones regionales, de sindicatos asociados, de grupos sectoriales y de los diputados y pares. El congreso anual, con delegados de los sindicatos y de las ramificaciones, elige al líder y aprueba el programa, y el National Executive Committee dirige el partido entre congresos.'
          },
          {
            type: 'p',
            text: 'Los sindicatos asociados siguen siendo la base social y financiera de la organización. Los más grandes han ejercido en los últimos años una presión creciente sobre la dirección, y desde 2019 esa presión se hace pública en declaraciones sobre la orientación económica del partido. Esa tensión es hoy el eje de la vida interna.'
          },
          {
            type: 'p',
            text: 'En 2020, tras la derrota electoral, la nueva dirección impulsó una reforma de las reglas internas que habría ampliado las competencias del líder. Un grupo de miembros presentó un recurso que paralizó casi la reforma, porque los estatutos exigían la votación del congreso. En 2021, tras la protesta de la base, se retiró buena parte de lo previsto, y el episodio dejó recelo ante cualquier reforma futura.'
          },
          {
            type: 'note',
            text: 'En 2023 el partido cambió sus reglas de liderazgo para que cualquier afiliado o delegado de un sindicato asociado pudiera presentarse, eliminando la condición de los avales previos. La reforma se aprobó en un congreso extraordinario y explica que un candidato que en 2020 no había podido concurrir por una cuestión de afiliación llegara al liderazgo en 2026.'
          }
        ]
      },
      {
        id: 'programa',
        heading: 'Evolución de los programas',
        blocks: [
          {
            type: 'p',
            text: 'El programa electoral es el documento donde mejor se ve la historia doctrinal del partido. Cada congreso reescribe el texto anterior y deja por escrito qué prioridades cambian. La tabla recoge los momentos de esa definición.'
          },
          {
            type: 'table',
            head: ['Programa', 'Contexto', 'Marca doctrinal'],
            rows: [
              ['1906', 'Nacimiento como partido', 'Protección laboral y voz de los trabajadores'],
              ['1918', 'Fin de la Primera Guerra Mundial', 'Cláusula IV: la riqueza para el bien común'],
              ['1945', 'Victoria con el 47,7 % de los votos', 'Estado de bienestar y nacionalizaciones'],
              ['1987', 'Inicio del gobierno Blair', 'Tercera vía: mercado con servicios públicos'],
              ['2000', 'Retirada de la cláusula IV', 'Fin de la nacionalización como objetivo'],
              ['2010', 'Pérdida electoral de 2010', 'Interés común y aceptación de la austeridad'],
              ['2015', 'Elección de Jeremy Corbyn', 'Renovación del deterrent nuclear'],
              ['2017', 'Congreso de 2017', 'Nunca usar armas nucleares; austeridad expansiva'],
              ['2019', 'División interna del partido', 'Convocatoria de elecciones generales'],
              ['2024', 'Mayoría absoluta de 411 diputados', 'Renovación energética y servicios públicos']
            ]
          }
        ]
      }
    ],
    categories: ['Labour', 'Reino Unido'],
    related: ['socialdemocracia', 'sindicalismo', 'reformismo', 'igualitarismo'],
    references: [
      {
        title: 'Social Insurance and Allied Services',
        author: 'William Beveridge',
        publisher: 'HMSO, Londres',
        year: 1942,
        type: 'libro'
      },
      {
        title: 'Citizenship and Social Class',
        author: 'T. H. Marshall',
        publisher: 'Cambridge University Press, Cambridge',
        year: 1950,
        type: 'libro'
      },
      {
        title: 'A Manifesto for Labour',
        author: 'Partido Laborista',
        publisher: 'Labour Party, Londres',
        year: 2024,
        type: 'documento'
      },
      {
        title: 'Leading the Party: The Story of the British Labour Party Leaders from Keir Hardie to Jeremy Corbyn',
        author: 'Phil Mason',
        publisher: 'Biteback Publishing, Londres',
        year: 2019,
        type: 'libro'
      },
      {
        title: 'Labour: The Party That Lost Its Way',
        author: 'Francis Beckett',
        publisher: 'Biteback Publishing, Londres',
        year: 2016,
        type: 'libro'
      },
      {
        title: 'Results of the 2024 general election',
        author: 'Parlamento del Reino Unido',
        publisher: 'House of Commons Library',
        year: 2024,
        type: 'web',
        url: 'https://electionresults.parliament.uk/general-elections/6/political-parties/3/elections.csv'
      },
      {
        title: 'Data (Use and Access) Act 2025',
        author: 'Parlamento del Reino Unido',
        publisher: 'legislation.gov.uk, capítulo 18 de 2025',
        year: 2025,
        type: 'documento',
        url: 'https://www.legislation.gov.uk/ukpga/2025/18/contents'
      }
    ]
  };
})(window.PW = window.PW || { articles: {}, parties: {}, geo: {}, orgs: {} });
