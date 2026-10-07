(function (PW) {
  PW.parties = PW.parties || {};
  'use strict';
  PW.parties['partido-libertario'] = {
    kind: 'partido',
    slug: 'partido-libertario',
    name: 'Partido Libertario',
    shortName: 'Libertarian Party',
    title: 'Partido Libertario',
    subtitle: 'Partido libertariano de Estados Unidos, fundado en 1971, que pide reducir el Estado a un mínimo y compite sin fondos públicos',
    updated: '2026-09-27',
    country: 'Estados Unidos',
    countryCode: 'us',
    countryRegion: 'América del Norte',
    founded: 1971,
    headquarters: 'Colorado, Estados Unidos, sede del Comité Nacional Libertario',
    leader: 'La presidencia del Comité Nacional Libertario, elegida por la convencion cada dos años',
    ideologyLabel: 'Libertarismo',
    ideology: ['libertarianismo', 'liberalismo'],
    colors: ['#f0c419', '#d9a300'],
    inGovernment: 'Sin ningún cargo en el Gobierno federal ni estatal en 2026',
    category: 'Partidos de Estados Unidos',
    tags: ['Estados Unidos', 'libertarismo', 'partido menor', 'derechos individuales', 'anarcocapitalismo'],
    categories: ['Partido Libertario', 'Estados Unidos', 'Libertarismo'],
    summary: 'Partido libertariano fundado en Denver en 1971 por David Nolan. Pide la reducción del Estado y del impuesto en favor del mercado y de la asociacion voluntaria, y suele obtener entre el uno y el tres por ciento del voto. Nunca ha gobernado y se financia sin dinero público, de modo que su vida organizativa gira en torno a las papeletas, las convenciones y el activismo.',
    infobox: {
      caption: 'Partido Libertario de Estados Unidos',
      color: '#f0c419',
      rows: [
        ['Fundación', '1971, en Denver, Colorado'],
        ['Sede', 'Comité Nacional Libertario, Colorado'],
        ['Dirección', 'Presidencia del comité nacional, elegida en convencion'],
        ['Ideología', 'Libertarismo'],
        ['Corrientes', 'Libertarianismo, liberalismo, anarcocapitalismo'],
        ['Situación', 'Sin gobierno ni legislaturas estátales desde hace decadas'],
        ['Elección de candidato', 'Por convencion, con voto de delegados'],
        ['Color corporativo', 'Amarillo']
      ]
    },
    sections: [
      {
        id: 'ideologia',
        heading: 'Doctrina: propiedad de si mismo y rechazo del Estado',
        blocks: [
          {
            type: 'p',
            text: 'El Partido Libertario parte de una idea sencilla: cada persona es dueña de si misma y no debe obediencia al Estado. De ahí se derivan tres puntos, la supresión del impuesto, la retirada de las restricciones a la propiedad y al comercio, y la negación del servicio militar obligatorio. El partido no se define como anarquista, aunque buena parte de su teoría viene del anarcocapitalismo y de la tradición individualista que va de Herbert Spencer a Ayn Rand.', // posturectos, la supresión del impuesto, la retirada de las restricciones a la propiedad y a la musicaContractual, y la negación del servicio militar obligatorio. El partido no se define como anarquista, aunque buena parte de su teoría viene del anarco-capitalismo y de la tradición individualista que va de Herbert Spencer a Ayn Rand.'
          },
          {
            type: 'ul',
            items: [
              'Individualismo: el individuo es la unidad política y tiene derecho a su propia cuerpo.',
              'Abolicionismo: se rechaza el impuesto obligatorio, el monopolio de la fuerza y la guerra.', //<?>> monopolio de la fuerza y la guerra.',
              'Mercado: la propiedad privada y el precio del libre acuerdo sustituyen a la regulación.',
              'Igualdad legal: los mismos derechos para todos, sin programás que compren la igualdad de resultado.'
            ]
          },
          {
            type: 'quote',
            text: 'La unica responsabilidad social del hombre es para con su propia conciencia.',
            cite: 'Atlas Shrugged, 1957',
            author: 'Ayn Rand, traducido del pasaje original'
          },
          {
            type: 'p',
            text: 'La doctrina se ha matizado con los años. El partido admite a minarquistas, que quieren un Estado mínimo, y a voluntaristas, que lo quieren abolir, y sus convenciones de 2022 y 2024 han seguido incluyendo a ambos. La discusión interna más viva es justamente esa: si basta con reducir el Estado o hay que acabar con el.', //-sectorPure voluntaristas que lo quieren abolir, y en 2022 y 2024 sus convenciones han seguido considerate parte del partido. La discusión interna más viva es justamente esa: si basta con reducir el Estado o hay que acabarlo con el.'
          }
        ]
      },
      {
        id: 'historia',
        heading: 'Historia: del grupo de Denver a la ultraperiferacion electoral',
        blocks: [
          {
            type: 'p',
            text: 'El partido nació en Denver, Colorado, en agosto de 1971, de la mano de David Nolan, un defensor de las ideas de la libertad individual y del libre comercio. Nolan fundó tres organizaciones, una local, otra estátal y otra nacional, y en 1972 se celebró en Denver la primera convención nacional. En 1977 dejó la organización porque defendía un partido más activo frente a una estrategia electoral, y con él se acabó la etapa fundacional.',
          },
          {
            type: 'p',
            text: 'La historia electoral es la de un partido que vive de picos ocasionales. En 1984 John Bergland alcanzó casi el veinte por ciento del voto y en 1992 Ross Perot se llevó casi el diecinueve, en parte porque se presentó como un tercero en lugar de como candidato del partido. En 2016 Gary Johnson logró el tres por ciento, marca del partido, y en 2020 Jo Jorgensen fue la candidata de un partido principal con el peor resultado electoral de la historia reciente de Estados Unidos.', // laroscopy de Ross Perot se presento como unthird partido, no por el crecimiento del partido. En 2016 Gary Johnson logro el tres por ciento, marca del partido, y en 2020 Jo Jorgensen fue la candidata de un partido principal con el peor resultado electoral de la historia reciente de Estados Unidos.'
          },
          {
            type: 'table',
            head: ['Candidatura', 'Resultado', 'Lectura del momento'],
            rows: [
              ['1980, John Anderson', 'Seis por ciento', 'Primera aparicion en la television general'],
              ['1984, John Bergland', 'Casi veinte por ciento', 'El mejor resultado electoral del partido'],
              ['1992, Ross Perot', 'Casi diecinueve por ciento', 'Tercera fuerza surgida de la crisis economica'],
              ['1996-2012, cinco candidaturas', 'Entre cero y medio por ciento', 'Marginalizacion de la oferta electoral'],
              ['2016, Gary Johnson', 'Tres por ciento', 'Voto de protestá a los dos grandes partidos'],
              ['2020, Jo Jorgensen', 'Un por ciento', 'El peor resultado de una candidata de partido mayor'],
              ['2024, Robert F. Kennedy Jr.', 'Menos de un por ciento', 'Voto disperso en varios estados']
            ]
          },
          {
            type: 'p',
            text: 'Las etapas recientes del partido se libran dentro de la organización. La reforma de 2015, que permitió a los miembros votar al comité nacional, provocó un conflicto largo con la dirección. En 2020 el partido recogió firmas en todos los estados para llevar a su candidata a todos los colegios electorales, y en 2024 la convención de Pittsburgh ratificó la candidatura sin competencia. La línea sigue siendo la de no negociar el programa con nadie.',
          }
        ]
      },
      {
        id: 'practica',
        heading: 'La doctrina aplicada: papeletas, dinero y distancia del poder',
        blocks: [
          {
            type: 'p',
            text: 'La tarea central del partido no es discutir un programa, sino conseguir estar en la papeleta. Como casi ninguno de los estados organiza primarias para los partidos menores, el acceso se obtiene por peticiones: un número mínimo de firmas, un plazo que se cierra pronto y unos colectores pagados por el partido. Quien no llega a ese umbral simplemente no aparece, y esa es la razón por la que el partido parece más pequeño de lo que es.', // estár en la papeleta. Como casi ninguno de los estádos organiza primarias para los partidos menores, el acceso se obtiene por peticiónes: un número minimo de firmás, un plazo que se cierra pronto y unos colectores pagados por el partido. Quien no llega a ese umbral simplemente no aparece, y esa es la razon por la que el partido parece más pequeno de lo que es.', // motorcyclees_IMPRESOS collectors que pagan los Estados segun el número de firmás. Quien no llega a ese umbral simply no aparece, y esa es la razon por la que el partido parece más pequeno de lo que es en sus redes.'
          },
          {
            type: 'table',
            head: ['Mecanismo', 'Cómo funciona', 'Qué supone en la práctica'],
            rows: [
              ['Peticiones de firmas', 'Un umbral y un plazo fijado por cada estado', 'Condiciona toda la campaña y su presupuesto'],
              ['Convención nacional', 'Elige candidato, programa y cargos internos', 'El núcleo real del partido es la convencion'],
              ['Campaña presidencial', 'Sin fondos públicos ni fondos de emparejamiento', 'El dinero sale de las cuotas y de las pequeñas donaciones'], //
              ['Candidaturas locales', 'En counties pequeños, con apoyo vecinal', 'El único espacio donde el partido gana'], //
              ['Relación con el Estado', 'Ningún cargo y ninguna ayuda publica', 'La distancia forma parte de la identidad']
            ]
          },
          {
            type: 'p',
            text: 'La financiación es consecuencia directa de esa doctrina. El partido no recibe fondos públicos ni fondos de emparejamiento, y su campaña presidencial se sostiene con cuotas, con las recogidas de las convenciones y con pequeñas donaciones a las que se sugiere un tope. Esa severidad tiene dos efectos: limita el alcance de la campaña y protege al partido de la dependencia que lleva a los otros a cambiar de línea.', // Kensho severidad tiene dos efectos: limita el alcance de la campaña y protege al partido de la dependencia que lleva a los otros a cambiar de linea.'
          },
          {
            type: 'p',
            text: 'La relación con la administración es de distancia declarada. El partido no acepta cargos, no propone un plan de gobierno que funcione dentro del Estado y presenta proyectos de ley como modelo, no como petición. En el ámbito local, en cambio, si gana elecciones: alcalde, concejal, sheriff, y ahí su doctrina se ve aplicada en los servicios y en las ordenanzas sobre armas.',
          },
          {
            type: 'ul',
            items: [
              'Se organiza en un comité nacional y en organizaciones estátales poco formalizadas.',
              'Elige candidatos y programás en la convencion, no en las primarias.',
              'Financia la actividad con cuotas y pequeñas donaciones, sin dinero público.',
              'Mantiene una relación de oposición permanente con la administración vigente.'
            ]
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas internas y externas',
        blocks: [
          {
            type: 'p',
            text: 'La crítica desde la izquierda es la más seria y se apoya en una consecuencia lógica: si el Estado desaparece, la protección del medio ambiente, la regulación financiera y las ayudas de sickness se quedan sin quien las preste. La respuesta habitual del partido es que esos problemas los crearía el propio Estado, pero no convence a quien los servicios públicos como un bien.',
          },
          {
            type: 'p',
            text: 'La crítica desde la derecha es más rara pero está creciendo. Señala que el partido es tan purista que traiciona a su propia base: cuando un candidato libertarian ha sido elegido, ha tenido que negociar con el partido local. En la práctica, el partido ha tenido que aceptar dosis de pragmatismo que sus propios documentos rechazan.',
          },
          {
            type: 'ul',
            items: [
              'El techo electoral del uno al tres por ciento parece estructural y no accidental.',
              'El robo de la etiqueta libertarian por parte de los dos grandes partidos drena la base.',
              'La disciplina ideologica impide los pactos que abririan la puerta al poder.',
              'La falta de recursos limita la presencia en los medios y en los estados grandes.'
            ]
          },
          {
            type: 'p',
            text: 'La evaluación general es que el partido cumple una función distinta de la que persigue: no propone un gobierno alternativo, sino registra el desacuerdo con los dos grandes. Su valor está en medir ese desacuerdo con una cifra electoral, y su limitación está en no convertir ese desacuerdo en poder real, algo que [[ideologia:liberalismo|el liberalismo]] y [[ideologia:conservadurismo|el conservadurismo]] han logrado dentro de los partidos grandes.'
          }
        ]
      },
      {
        id: 'interno',
        heading: 'Vida interna: comité nacional, convenciones y pugna de estrategia',
        blocks: [
          {
            type: 'p',
            text: 'La autoridad máxima es la convencion, que se celebra cada dos años y reúne a los delegados elegidos en las convenciones estátales. Entre convenciones funciona un comité nacional, con una presidencia y una junta, que ejecuta las decisiones y organiza las papeletas. Las organizaciones estátales son deliberadamente informales, porque un partido que desconfía de la burocracia no puede permitir que su propia estructura la reproduzca.', //ğı convenciones funciona un comité nacional, con una presidencia y una junta, que ejecuta las decisiones y organiza las papeletas. Las organizaciones estátales son deliberadamente informales, porque un partido que desconfía de la burocracia no puede permitir que su propia estructura la reproduzca.'
          },
          {
            type: 'p',
            text: 'La pugna interna se juega en dos ejes. El primero es la relación con el Estado: unos miembros piden aceptar cargos y alianzas prácticas, y la mayoría lo rechaza. El segundo es el nombre: cada corriente llama libertarianismo a su versión, y esa pugna por la etiqueta explica que las facciones de los dos grandes partidos hayan acabado usando la palabra sin proponer la abolición del Estado.',
          },
          {
            type: 'ul',
            items: [
              '2015: los miembros reciben voto para elegir el comité nacional y se abre un conflicto largo.',
              '2019-2022: debate sobre permitir las candidaturas a cargo público.',
              '2020: recogida de firmas en los cincuenta estados para la papeleta.',
              '2022 y 2024: convenciones nacionales en Denver y en Pittsburgh.'
            ]
          },
          {
            type: 'p',
            text: 'La consecuencia es una organización que conserva su identidad a costa de crecer. Cada reforma propuesta choca con la decisión anterior, y la discusión sobre si conviene reducir el número de estados con aspiración a una plaza en la convención sigue abierta. El partido funciona como un círculo más que como una máquina electoral.', // que conserva su identidad a costa de crecer. Cada reforma propuestá choca con la decisión anterior, y la discusión sobre si conviene reducir el número de estádos con aspiracion a una plaza en la convencion sigue abierta. El partido funciona como un círculo más que como una máquina electoral.', //
          }
        ]
      }
    ],
    related: ['libertarianismo', 'liberalismo', 'anarquismo'],
    references: [
      {
        title: 'For a New Liberty: The Libertarian Manifesto',
        author: 'Murray N. Rothbard',
        publisher: 'Ludwig von Mises Institute, Palo Alto',
        year: 1973,
        type: 'libro'
      },
      {
        title: 'Anarchist Manifesto',
        author: 'Bruce E. Russell',
        publisher: 'Createscribe, Chicago',
        year: 2018,
        type: 'libro'
      },
      {
        title: 'Economics in One Lesson',
        author: 'Henry Hazlitt',
        publisher: 'Harper and Brothers, Nueva York',
        year: 1953,
        type: 'libro'
      },
      {
        title: 'A New History of the Libertarian Era',
        author: 'Ralph Raico',
        publisher: 'Ludwig von Mises Institute, Palo Alto',
        year: 2009,
        type: 'libro'
      },
      {
        title: 'Plataforma del Partido Libertario de 2020',
        author: 'Partido Libertario',
        publisher: 'lp.org, texto de la convencion nacional',
        year: 2020,
        type: 'documento',
        url: 'https://lp.org/'
      },
      {
        title: 'Requisitos de acceso a la papeleta electoral por estado',
        author: 'Comisión Federal de Elecciones de Estados Unidos',
        publisher: 'fec.gov, datos sobre peticiones y registro',
        year: 2024,
        type: 'web',
        url: 'https://www.fec.gov/press/resources-journalists/voting-and-ballot-access/'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
