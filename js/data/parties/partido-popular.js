(function (PW) {
  PW.parties = PW.parties || {};
  'use strict';
  PW.parties['partido-popular'] = {
    kind: 'partido',
    slug: 'partido-popular',
    title: 'PP',
    name: 'Partido Popular',
    shortName: 'PP',
    country: 'España',
    countryCode: 'es',
    countryRegion: 'Sur de Europa',
    founded: 1976,
    headquarters: 'Madrid, España',
    leader: 'Alberto Núñez Feijóo (presidente desde 2022)',
    ideologyLabel: 'Derecha',
    ideology: ['conservadurismo', 'democracia-cristiana', 'liberalismo'],
    colors: ['#006b3c', '#ffffff'],
    inGovernment: 'Presidencia del Gobierno desde el 12 de noviembre de 2024',
    subtitle: 'Partido conservador español, heredero de Alianza Popular, que gobernó sin interrupción entre 1982 y 2004 y entre 2011 y 2018',
    updated: '2026-09-27',
    summary: 'El partido conservador español constituido en 1976 como Alianza Popular, que ha gobernado ocho legislaturas y que en 2026 ha vuelto a pactar con Vox en varias comunidades autónomas.',
    infobox: {
      caption: 'PP',
      color: '#006b3c',
      rows: [
        ['Fundación', '3 de octubre de 1976, como Alianza Popular'],
        ['Sede', 'calle Génova, Madrid'],
        ['Líder', 'Alberto Núñez Feijóo, presidente desde 2022'],
        ['Ideología', 'Derecha'],
        ['Gobierno actual', 'Presidencia desde el 12 de noviembre de 2024'],
        ['Presidentes', 'Fraga, Aznar, Rajoy y Feijóo'],
        ['Colores', 'Verde y blanco']
      ]
    },
    sections: [
      {
        id: 'ideologia',
        heading: 'Ideología y doctrina',
        blocks: [
          {
            type: 'p',
            text: 'El Partido Popular se define como [[conservadurismo|conservador]] y, en sus orígenes, como [[democracia-cristiana|cristiano-demócrata]], aunque esa segunda etiqueta perdió peso desde los años noventa. Su doctrina tiene tres ejes: la continuidad institucional, la defensa del Estado de las autonomías junto al mercado, y un constitucionalismo que entiende la [[nacionalismo|nación española]] como la comunidad política que da sentido a la Constitución.'
          },
          {
            type: 'ul',
            items: [
              'Estado de las autonomías, con una lectura central que rechaza a la vez el federalismo y la recentración autonomista.',
              'Economía de mercado y defensa del sector privado, con el liberalismo económico como eje de las rebajas fiscales.',
              'Defensa de la unidad territorial y del orden constitucional, frente a cualquier vía de secesión.',
              'Defensa de la familia, de la libertad de enseñanza y de la laicidad del Estado.',
              'Reformismo social y económico, en la línea de una centroderecha que se define frente a la izquierda y frente a la derechaidente.',
            ]
          },
          {
            type: 'p',
            text: 'La historia doctrinal del partido es la de una paulatina moderación. Alianza Popular nació como formación de derecha, pero en los años ochenta aceptó la economía social de mercado, la integración europea y el Estado autonomista. Con Aznar, en los años noventa, se desplazó hacia el centro, y con Rajoy, en la década de 2010, hacia un conservadurismo social y laicista que hoy se enfrenta a [[partido:vox]].'
          },
          {
            type: 'dl',
            items: [
              ['Conservadurismo', 'Continuidad institucional, prudencia en la reforma y respeto a la jerarquía administrativa.'],
              ['Cristianodemocracia', 'Combinación de la humanista católica con los valores democráticos; fue etiqueta oficial hasta 1989.'],
              ['Liberalismo económico', 'Libre intercambio, rebaja de impuestos y defensa activa de la empresa privada.']
            ]
          },
          {
            type: 'note',
            text: 'El PP nunca se define a sí mismo como un partido de derecha, sino como una formación de centro. Sus detractores, en cambio, lo sitúan en la derecha. Esa discrepancia explica buena parte de los debates internos sobre la estrategia electoral y sobre qué hacer con Vox.'
          }
        ]
      },
      {
        id: 'historia',
        heading: 'Historia: de Alianza Popular a la alternancia',
        blocks: [
          {
            type: 'p',
            text: 'El 3 de octubre de 1976 se fundó Alianza Popular, en plena transición, con la pregunta de qué organización hereda de la derecha franquista. Su estructura se apoyó en las Nuevas Generaciones del Movimiento Sindical, pero pronto chocó con el sector que defendía un centro político abierto. En 1977, en su segundo congreso, adoptó el nombre de Partido Popular, y en 1982 fijó el emblema actual, con el arco y las letras PP en verde.'
          },
          {
            type: 'ol',
            items: [
              '1976-1982: Alianza Popular, con Fraga a la cabeza, y su choque con los sectores de centro.',
              '1982: victoria en diciembre, con el 40,5% de los votos y 212 de los 350 diputados.',
              '1982-1996: seis legislaturas de Aznar, con mayoría absoluta desde 1993.',
              '1996-2004: Aznar gana en 1996 y 2000, y pierde frente a Zapatero el 4 de marzo de 2004.',
              '2011-2018: gobierno de Rajoy tras la victoria de 2011, en plena crisis financiera.',
              '2018-2023: gobierno en coalición con Ciudadanos, que se rompe en enero de 2021.',
              '2024: Feijóo alcanza la presidencia del Gobierno el 12 de noviembre, en su tercer intento.'
            ]
          },
          {
            type: 'p',
            text: 'El rasgo que define a la formación es su capacidad de situarse entre la derecha y el centro. Los Pactos del Pardo con el PSOE, en 1997 y 2000, permitieron a Aznar gobernar sin mayoría absoluta. En 2018, la aritmética con los votos independientes llevó al PP a un gobierno con Ciudadanos. En 2026, sin embargo, ha vuelto a pactar con Vox en cuatro comunidades autónomas.',
          },
          {
            type: 'table',
            head: ['Etapa', 'Años', 'Rasgo dominante'],
            rows: [
              ['Oposición', '1976-1982', 'Transición y construcción de la organización'],
              ['Consenso', '1982-1996', 'Mayoría absoluta, acceso a la Comunidad Europea y reforma penal'],
              ['Aznar', '1996-2004', 'El euro, la guerra de Irak y la derrota electoral de 2004'],
              ['Oposición', '2004-2011', 'Crisis financiera y campaña de 2011 contra el Gobierno saliente'],
              ['Rajoy', '2011-2018', 'Austeridad, dos elecciones perdidas y la aplicación del artículo 155'],
              ['Coalición', '2018-2024', 'Gobierno con Ciudadanos y luego en mayoría minoritaria']
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
            text: 'El ciclo de 1982 a 1996 es el periodo en que el partido aplicó su programa. Tras la victoria de diciembre de 1982, con el 40,5% de los votos y 212 diputados, entró en la Comunidad Europea el 1 de enero de 1986 y firmó el Tratado de Maastricht en 1992. La reforma del Código Penal de 1985 abolió el delito de consentimiento pasivo, un cambio considerado la primera medida del nuevo partido. Desde 1993 gobernó con mayoría absoluta y con apoyo del PNV en los presupuestos.'
          },
          {
            type: 'p',
            text: 'Los años de Aznar, entre 1996 y 2004, combinaron europeísmo y conflicto. En marzo de 2001 se firmó el Pacto de Toledo con los sindicatos, que abrió la reforma de pensiones de 2001 y 2002 y la subida de la edad de jubilación hasta los 67 años. El euro entró en circulación el 1 de enero de 2002. En marzo de 2003 el Gobierno apoyó la invasión de Irak y, tras los atentados del 11 de marzo de 2004, el partido perdió las elecciones del 4 de marzo con el 37,6% frente al 45,1% del PSOE. La frase atribuida a Aznar el 14 de marzo sigue siendo objeto de disputa.'
          },
          {
            type: 'table',
            head: ['Gobierno', 'Medidas con año y cifra'],
            rows: [
              ['1982-1996', 'Entrada en la CE (1986), reforma del Código Penal (1985), Maastricht (1992)'],
              ['1996-2004', 'Pacto de Toledo (2001), reforma de pensiones, euro (2002), Irak (2003)'],
              ['2011-2018', 'IVA del 18% al 21% (2012), reforma laboral (2012), artículo 155 (2017)'],
              ['2018-2024', 'Coalición con Ciudadanos (2018-2021), luego mayoría minoritaria'],
              ['2024-2026', 'Pactos autonómicos con Vox en Extremadura, Aragón, Castilla y León y Valencia']
            ]
          },
          {
            type: 'p',
            text: 'El gobierno de Rajoy, entre 2011 y 2018, se definió por la austeridad. El IVA pasó del 18% al 21% en septiembre de 2012, con un recargo temporal de 1,2 puntos en 2013, y la reforma laboral de 2012 recortó la protección del parados. Entre 2012 y 2013 se rescató la banca con el FROB y la Sareb. El partido perdió las elecciones de junio de 2015, con el 41,1% de los votos, y las de octubre de 2016, con el 33,1%. En octubre de 2017 se aplicó el artículo 155 de la Constitución en Cataluña, la primera vez que se usaba.'
          },
          {
            type: 'ul',
            items: [
              'PNV: apoya los presupuestos de 1993 y 1996, lo que permite a Aznar gobernar sin mayoría absoluta.',
              'PSOE: Pactos del Pardo de 1997 y 2000, con el argumento de la responsabilidad.',
              'Ciudadanos: coalición de gobierno entre 2018 y 2021, que se rompe tras la derrota electoral de 2021.',
              'Vox: pactos de gobierno en Extremadura, Aragón y Castilla y León en 2026, con tres consejerías para Vox en cada caso.',
              '2024: Feijóo alcanza la presidencia del Gobierno el 12 de noviembre, tras dos intentos fallidos.',
            ]
          },
          {
            type: 'quote',
            text: 'Los partidos políticos son un instrumento fundamental para la participación política.',
            cite: 'Constitución española de 1978, artículo 3.2',
            author: 'Texto constitucional'
          },
          {
            type: 'note',
            text: 'El giro más discutido del PP reciente va en dirección contraria a su campaña de 2023. Feijóo presentó entonces aquellas elecciones como las de un PP capaz de gobernar sin depender de Vox. En 2026, sin embargo, el PP firmó cuatro pactos autonómicos con Vox, y el principio de prioridad nacional en el acceso a ayudas y prestaciones entró en los acuerdos. El partido sostiene que se limita a las competencias autonómicas, en la línea de su documento marco de 2026.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas',
        blocks: [
          {
            type: 'p',
            text: 'Las críticas más duras al partido vienen de la izquierda y del centro, y se concentran en tres episodios: la guerra de Irak de 2003, la aplicación del artículo 155 en 2017 y la austeridad de 2012 a 2014. También se le reprocha la frase atribuida a Aznar la noche del 14 de marzo de 2004, que el propio PP siempre ha considerado mal transcrita, y su apoyo a la gestión del [[partido:ppsoe|PSOE]] durante la crisis.'
          },
          {
            type: 'ul',
            items: [
              'Irak: el apoyo español a la invasión de 2003 se justificó con las armas de destrucción masiva, un argumento que la ONU no confirmó.',
              'Cataluña: la aplicación del artículo 155 en 2017 ha sido criticada por entenderse como una vulneración del poder judicial.',
              'Austeridad: las medidas de 2012 a 2014 ampliaron las desigualdades y la temporalidad laboral.',
              'Financiación: el ex tesorero Francisco Bárcenas fue condenado en 2015, lo que abrió una crisis reputada en el partido.',
            ]
          },
          {
            type: 'p',
            text: 'Desde dentro del partido, las críticas se concentran en la distancia con la militancia de base y en la concentración del poder. Los sectores próximos a Feijóo critican la estrategia de pactar con Vox; el sector contrario le reprocha haber aceptado esa misma estrategia por no dejar margen. El PP también ha sido acusado de oligarquía interna y de alejamiento de la clase obrera desde 2018.'
          },
          {
            type: 'p',
            text: 'En la literatura académica se subrayan dos paradojas. La primera es que un partido que se define como de centro ha gobernado con mayorías muy conservadoras. La segunda, que su disciplina interna ha producido dos cambios de rumbo en veinte años, del centrismo de Aznar al conservadurismo social de Rajoy, que se explica por los cambios generacionales y por el [[reformismo|reformismo]] que el partido siempre ha invocado.'
          }
        ]
      },
      {
        id: 'interno',
        heading: 'Vida interna',
        blocks: [
          {
            type: 'p',
            text: 'El PP se organiza en colegios federados, comités comarcales, un Comité Nacional y una Comisión Nacional, que elige al presidente cada cuatro años. Desde 2022 la presidencia la ocupa Alberto Núñez Feijóo, reelegido en septiembre de 2024, después de un mandato muy corto de José María Aznar, que fue elegido en julio de 2024 y dimitió dos meses más tarde bajo la presión de la corriente más cercana a [[partido:vox|Vox]].'
          },
          {
            type: 'ul',
            items: [
              'Los sectores de centro, que agrupan a los dirigentes de la etapa Aznar y del bipartidismo.',
              'La corriente dura, presente sobre todo en la Comunidad de Madrid, que empuja hacia posiciones más duras sobre la inmigración.',
              'Los sectores de Navarra, de Aragón y del País Vasco, que aportan la base territorial del partido en el norte del país.',
              'La generación del 95, que ganó peso en 2021, y la sección juvenil, que organiza a los militantes menores de treinta años.',
              'La militancia, cuyo declive electoral entre 2015 y 2019 se ha atribuido a la pérdida de votantes de entre 40 y 65 años.',
            ]
          },
          {
            type: 'p',
            text: 'Dos conflictos ilustran la tensión interna. El primero fue la crisis de 2000, con la dimisión de Francisco Álvarez-Cascos tras la derrota electoral y su apartamiento posterior del partido. El segundo, más reciente, es el pulso entre el sector duro y la línea centrista, que se ha materializado en la cuestión de qué hacer con Vox y en la relación con Isabel Díaz Ayuso en la Comunidad de Madrid, cuyo PP es el más cercano al entorno de Vox.'
          },
          {
            type: 'figure',
            caption: 'Secuencia de presidentes del Partido Popular: Manuel Fraga (1976-1986), José María Aznar (1986-1996 y 1999-2003), Francisco Álvarez-Cascos (1996-1999), Mariano Rajoy (2003-2004 y 2008-2018), Ángel Acebes (2004-2006), María Dolores de Cospedal (2006-2008), Soraya Sáenz de Santamaría (2018), Teodoro García Egea (2018-2020) y Alberto Núñez Feijóo (desde 2022).',
            credit: 'Síntesis sobre datos del partido'
          }
        ]
      }
    ],
    related: ['conservadurismo', 'liberalismo', 'democracia-cristiana', 'partido:ppsoe', 'partido:vox'],
    categories: ['PP', 'España'],
    references: [
      {
        title: 'Spain: Dictatorship to Democracy',
        author: 'Raymond Carr',
        publisher: 'Allen Lane, Londres',
        year: 1979,
        type: 'libro'
      },
      {
        title: 'Ley Orgánica 13/1985, de 2 de marzo, de reforma del Código Penal',
        author: 'Jefatura del Estado (España)',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 1985,
        type: 'documento',
        url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-1985-5791'
      },
      {
        title: 'Ley 37/1992, de 28 de diciembre, del Impuesto sobre el Valor Añadido',
        author: 'Jefatura del Estado (España)',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 1992,
        type: 'documento',
        url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-1992-28740'
      },
      {
        title: 'Constitución española de 1978',
        author: 'Cortes Generales y Senado de España',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 1978,
        type: 'documento',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229'
      },
      {
        title: 'Spain (The transition to democracy and the monarchy)',
        author: 'Encyclopaedia Britannica',
        publisher: 'Encyclopaedia Britannica, Inc.',
        year: 2025,
        type: 'enciclopedia',
        url: 'https://www.britannica.com/place/Spain'
      },
      {
        title: 'Pactos del Pardo y concertación política de 1996 a 2000',
        author: 'Congreso de los Diputados',
        publisher: 'Congreso de los Diputados, Madrid',
        year: 2000,
        type: 'documento',
        url: 'https://www.congreso.es/'
      }
    ]
  };
})(window.PW = window.PW || { articles: {}, parties: {}, geo: {}, orgs: {} });
