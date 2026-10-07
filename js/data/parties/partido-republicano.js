(function (PW) {
  PW.parties = PW.parties || {};
  'use strict';
  PW.parties['partido-republicano'] = {
    kind: 'partido',
    slug: 'partido-republicano',
    name: 'Partido Republicano',
    shortName: 'Republican Party',
    title: 'Partido Republicano',
    subtitle: 'Partido de derecha de Estados Unidos, fundado en 1854 y organizado en torno a la candidatura presidencial y a las primarias de los estados',
    updated: '2026-09-27',
    country: 'Estados Unidos',
    countryCode: 'us',
    countryRegion: 'América del Norte',
    founded: 1854,
    headquarters: 'Washington, Distrito de Columbia, Estados Unidos',
    leader: 'Donald Trump, presidente de Estados Unidos desde enero de 2025',
    ideologyLabel: 'Derecha',
    ideology: ['conservadurismo', 'libertarianismo', 'nacionalismo', 'reformismo'],
    colors: ['#e11b22', '#b0181f'],
    inGovernment: 'Presidencia de la República desde enero de 2025, con mayoría en las dos cámaras del Congreso',
    category: 'Partidos de Estados Unidos',
    tags: ['Estados Unidos', 'derecha', 'conservadurismo', 'fiscalidad', 'elecciones primarias'],
    categories: ['Partido Republicano', 'Estados Unidos', 'Derecha'],
    summary: 'Uno de los dos grandes partidos de Estados Unidos. Nació en 1854 como agrupación antiesclavista del Norte, ganó la guerra civil y desde 1896 es el partido del Sur y de la mayoría blanca. Su programa combina conservadurismo fiscal, defensa de la familia y una política de seguridad nacional dursa, con un nacionalismo recentrado en la frontera, el comercio y la identidad.',
    infobox: {
      caption: 'Partido Republicano de Estados Unidos',
      color: '#e11b22',
      rows: [
        ['Fundación', '1854, en Ripon, Wisconsin'],
        ['Sede', 'Washington, Distrito de Columbia'],
        ['Dirección política', 'Comité Nacional Republicano, sin líder formal'],
        ['Ideología', 'Derecha'],
        ['Corrientes', 'Conservadurismo, libertarianismo, nacionalismo, reformismo'],
        ['Situación', 'En el poder desde enero de 2025'],
        ['Método de candidato', 'Asambleas y primarias, con reglas del comité nacional'],
        ['Color corporativo', 'Rojo']
      ]
    },
    sections: [
      {
        id: 'ideologia',
        heading: 'Doctrina: conservadurismo fiscal, orden moral y seguridad',
        blocks: [
          {
            type: 'p',
            text: 'El Partido Republicano nació con una causa moral, la abolición de la esclavitud, y durante casi un siglo mantuvo su identidad sobre todo por su base regional: el Norte de la unión contra el Sur. Su doctrina actual se articuló a partir de 1964, cuando una campaña perdida dio paso a una corriente que reduciría el estado, defendía el libre mercado, mantenía distancia con la separación entre Iglesia y Estado y sostenía una política exterior de fuerza. Esa combinación explica que el partido parezca a la vez económico y moralista.',
          },
          {
            type: 'ul',
            items: [
              'Conservadurismo: mantener las instituciones, la propiedad privada y la continuidad de la comunidad política.',
              'Libertarianismo económico: bajadas de impuestos, menos regulación y Estado pequeño.',
              'Nacionalismo: soberanía nacional, protección de la frontera y preferencia por los intereses del país.',
              'Reformismo: los cambios se consiguen con leyes ordinarias, dentro del orden constitucional vigente.'
            ]
          },
          {
            type: 'quote',
            text: 'En esta crisis, el gobierno no es la solución a nuestro problema; el gobierno es el problema.',
            cite: 'Discurso inaugural de Ronald Reagan, 20 de enero de 1981',
            author: 'Traducción del pasaje original'
          },
          {
            type: 'p',
            text: 'Desde 2016 el partido ha desplazado su doctrina hacia un nacionalismo económico: la idea de que la competencia internacional perjudica a los trabajadores estadounidenses, el uso de aranceles y la retirada de tratados comerciales. Ese giro se ha dirigido también hacia dentro del partido, y hoy conviven un ala que pide una economía protegida y otro ala vinculada al libre mercado y a las alianzas exteriores. El primero se acerca al [[ideologia:nacionalismo|nacionalismo]] económico y el segundo al [[ideologia:conservadurismo|conservadurismo]] clásico.',
          }
        ]
      },
      {
        id: 'historia',
        heading: 'Historia: del abolicionismo al partido del Sur',
        blocks: [
          {
            type: 'p',
            text: 'El partido nació el 20 de marzo de 1854 en Ripon, Wisconsin, y pronto se extendió por el Norte. Reunía a abolicionistas que veían en la expansión de la esclavitud un peligro para el trabajo libre, y en su primera convención, en 1856, nombró candidato a John C. Fremont. En 1860 Abraham Lincoln ganó las elecciones y, tras la guerra civil, la decimotercera enmienda convirtió la abolición en el eje del partido.'
          },
          {
            type: 'p',
            text: 'Entre 1865 y 1877 sostuvo la Reconstruction y la ampliación del sufragio, y perdió la Cámara en 1874 por el Sur que ya se le oponía. La derrota de 1896 ante William McKinley, la política del oro y el cierre del voto a la mayoría negra completaron el realineamiento: el Sur dejó de votarlo durante casi setenta años y el partido pasó a depender del Norte y, desde Eisenhower, de una franja de estados del Oeste y del Medio Oeste.'
          },
          {
            type: 'table',
            head: ['Periodo', 'Hecho central', 'Efecto sobre la identidad del partido'],
            rows: [
              ['1854-1865', 'Nacimiento abolicionista y victoria de Lincoln', 'Partido de la unión y de la abolición'],
              ['1865-1877', 'Reconstruction y ampliación del sufragio', 'Conflicto interno con el Sur y derrota de 1874'],
              ['1896-1952', 'McKinley, el oro y el realineamiento del Sur', 'Minoría nacional hasta la victoria de Eisenhower'],
              ['1952-1964', 'Presidencia de Eisenhower y tono moderado', 'Partido del Norte industrial y del Oeste agrario'],
              ['1964-1980', 'Goldwater, Nixon y Watergate', 'Giro conservador en lo económico y lo militar'],
              ['1980-1992', 'Reagan, la política fiscal y el final de la guerra fría', 'Fusión de libertarianismo económico y orden moral'],
              ['1994-2016', 'Contrato con América, Bush, el Tea Party y Trump', 'Pérdida de la presidencia en 2008 y retorno en 2017'],
              ['2021-2026', 'Negación de las elecciones de 2020 y vuelta al poder en 2024', 'Gobierno con el apoyo de su propia base y tensión interna por el gasto']
            ]
          },
          {
            type: 'p',
            text: 'La etapa decisiva de la historia reciente empieza en 2016 con la victoria de Donald Trump, la protesta contra el resultado electoral, el ataque del 6 de enero de 2021 y la nueva candidatura de 2024. Desde 2025 el partido gobierna con mayoría propia, y su mayor tensión no es con el adversario sino entre el ala nacionalista y el ala económica heredera de Reagan.'
          }
        ]
      },
      {
        id: 'practica',
        heading: 'La doctrina aplicada: nominación, dinero y relación con el poder',
        blocks: [
          {
            type: 'p',
            text: 'La nominación presidencial se decide en los estados y no en el comité nacional. El calendario empieza con las asambleas de distrito en Iowa, que cuentan pocos delegados, y continúa con las primarias que cada estado fija en su propia fecha. Desde 2023 el comité nacional ha aprobado reglas que recortan la discrecionalidad de los estados: obligan a permitir el voto anticipado si existe en las generales y exigen que las asambleas y la primaria coincidan en el día, para evitar que un voto disperso en el tiempo altere el resultado.', //condado en Iowa, que cuentan pocos delegados, y continúa con las primarias que cada estado fija en su propia fecha. Desde 2023 el comité nacional ha aprobado reglas que recortan la discrecionalidad de los estados: obligan a permitir el voto anticipado si existe en las generales y exigen que las asambleas y la primaria coincidan en el día, para evitar que un voto dispersedo en el tiempo altere el resultado.'
          },
          {
            type: 'table',
            head: ['Mecanismo', 'Cómo funciona', 'Qué supone en la práctica'],
            rows: [
              ['Asambleas de Iowa', 'Votación por precintos, en cuatro rondas de noche', 'Pocos delegados y alto valor simbólico'],
              ['Primarias de los estados', 'Voto popular, con voto anticipado si el estado lo permite', 'El calendario de cada estado marca la estrategia de campaña'],
              ['Asignación de delegados', 'Gana el candidato más votado, con reglas por estado', 'El voto popular nacional no decide nada'], /*).(traveled) con la mayoría del voto popular'],
              */
              ['Convención nacional', 'Ratifica la candidatura y aprueba la plataforma', 'Menos relevante que en el siglo pasado para el resultado final'],
              ['Colegio Electoral', 'Victoria por estado, con reparto por distrito en dos estados', 'Gana quien reúne 270 votos, sin importar el voto popular']
            ]
          },
          {
            type: 'p',
            text: 'La financiación del partido funciona sin dinero público federal, salvo los fondos de emparejamiento que solo existen en las primarias. El comité nacional y la candidatura son estructuras legales separadas, y la diferencia importa: el comité recibe cuotas y donaciones con un tope legal, mientras que la campaña y los grupos independientes pueden superar ese límite. Desde 2010 la sentencia sobre el gasto de los grupos independientes y desde 2017 el crecimiento de los fondos asesorados por donantes han ampliado el margen de acción financiero de las campañas.', //avlance de emparejamiento que solo existen en las primarias. El comité nacional y la candidatura son estructuras legales separadas, y la diferencia importa: el comité recibe cuotas y donaciones con tope, mientras que la campaña y los grupos independientes pueden_superar ese límite. Desde 2010 la sentencia sobre los gastos de los grupos independientes y desde 2017 el crecimiento de los fondos advised por donantes han ampliado mucho el margen de acción financiers de las campaigns.'
          },
          {
            type: 'p',
            text: 'La relación con la administración cambia por completo según el signo del poder. En el gobierno, el partido controla el ejecutivo y las dos cámaras, y usa la reconciliación presupuestaria para aprobar leyes fiscales con una mayoría simple. En la oposición, usa citaciones obligatorias e investigaciones parlamentarias para ralentizar la agenda del rival.',
          },
          {
            type: 'ul',
            items: [
              'Se organiza con un comité nacional, comités estatales y organizaciones de distrito.',
              'Elige candidatos en asambleas y primarias, con reglas fijadas por el comité nacional.',
              'Financia la campaña con cuotas, donaciones limitadas y grupos independientes.',
              'Se relaciona con la administración por el control del ejecutivo y de las dos cámaras.'
            ]
          },
          {
            type: 'p',
            text: 'La relación con la sociedad se sostiene sobre tres grupos: las empresas y las cámaras de comercio que financian campañas, las iglesias que movilizan el voto y las asociaciones de base que defienden sus intereses locales.',
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas internas y externas',
        blocks: [
          {
            type: 'p',
            text: 'La crítica desde la izquierda se apoya en cinco puntos: el acceso al aborto, la puesta en duda del resultado electoral de 2020, el endurecimiento de la política migratoria, las bajadas de impuestos para las familias más ricas y el debilitamiento de la negociación colectiva. El más importante de todos es el segundo, porque pone en duda la legitimidad de un resultado que el partido considera suyo.', //
          },
          {
            type: 'p',
            text: 'La crítica desde el libertarianismo va en dirección contraria. Señala que el partido gasta más que el adversario, que mantiene la intervención militar en el extranjero, que no ha tocado el gasto de defensa y que su defensa de la familia lo aleja de la separación entre Iglesia y Estado. Ese sector reclama el regreso a la fusión electoral y la contención judicial de los años ochenta.', 
          },
          {
            type: 'ul',
            items: [
              'El debate sobre los aranceles divide al ala nacionalista y al sector exportador.',
              'La discusión sobre gasto federal es el principal pulso interno del partido.',
              'El candidato se decide antes de la convención, no en ella.',
              'El pulso con [[partido:partido-democrata|el partido Democrático]] se libra en los estados decisivos.',
              'La competencia electoral con [[partido:partido-libertario|el partido Libertario]] es mínima, pero obliga a cuidar la base propia.',
            ]
          }
        ]
      },
      {
        id: 'interno',
        heading: 'Vida interna: organización, leadership y facciones',
        blocks: [
          {
            type: 'p',
            text: 'La organización es federada y poco jerarquizada. El Comité Nacional Republicano coordina la estrategia y el contacto con los medios, pero la campaña electoral la dirige el equipo del candidato, que trabaja con las organizaciones estatales y con los contactos de cada distrito. En la base, la unidad real es la sección de barrio, que mantiene el padrón de votantes y decide quién es delegado en las asambleas.',
          },
          {
            type: 'p',
            text: 'El cargo formal es la presidencia del comité nacional, y el poder real está en la candidatura, que domina la organización electoral y ocupa la Casa Blanca. La tensión entre ambas instancias ha marcado las últimas cuatro presidencias del partido: el comité financia y organiza, la candidatura marca el rumbo ideológico y ambos dependen el uno del otro para ganar elecciones.'
          },
          {
            type: 'ul',
            items: [
              '2020-2021: negación pública del resultado y presión sobre los responsables electorales.',
              '2021-2022: reprobación de Liz Cheney y alineación del partido con su base.',
              '2022: pérdida de la Cámara tras una campaña centrada en las elecciones intermedias.',
              'Desde 2025: discusión abierta sobre el gasto federal y el poder del aparato del partido.'
            ]
          },
          {
            type: 'p',
            text: 'El rasgo dominante del partido es su personalismo. Las facciones se organizan en torno a la figura de Donald Trump, y el ala economicista heredera del [[ideologia:libertarianismo|libertarianismo]] económico sigue pesando en el Congreso y en los estados. En la práctica, el acuerdo interno se alcanza antes de la convención y la convención solo lo ratifica.',
          }
        ]
      }
    ],
    related: ['conservadurismo', 'libertarianismo', 'nacionalismo', 'reformismo'],
    references: [
      {
        title: 'The Rise of the Counter-Establishment',
        author: 'Sidney Blumenthal',
        publisher: 'Pantheon Books, Nueva York',
        year: 1986,
        type: 'libro'
      },
      {
        title: 'The Supreme Court, the Establishment, and the Constitution',
        author: 'William H. Rehnquist',
        publisher: 'Rowman and Littlefield, Lanham',
        year: 2007,
        type: 'libro'
      },
      {
        title: 'The Next American Nation',
        author: 'Michael Lind',
        publisher: 'Free Press, Nueva York',
        year: 1995,
        type: 'libro'
      },
      {
        title: 'Plataforma del Partido Republicano de 2020',
        author: 'Partido Republicano',
        publisher: 'gop.com, texto de la convención',
        year: 2020,
        type: 'documento',
        url: 'https://www.gop.com/'
      },
      {
        title: 'Plataforma del Partido Republicano de 2024',
        author: 'Partido Republicano',
        publisher: 'gop.com, texto de la convención de Milwaukee',
        year: 2024,
        type: 'documento',
        url: 'https://www.gop.com/'
      },
      {
        title: 'Ley de impuestos y de gasto federal firmada en julio de 2025',
        author: 'Congreso de Estados Unidos',
        publisher: 'congress.gov, texto del proyecto de ley',
        year: 2025,
        type: 'documento',
        url: 'https://www.congress.gov/'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
