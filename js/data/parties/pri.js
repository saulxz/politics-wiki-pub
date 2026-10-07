(function (PW) {
  PW.parties = PW.parties || {};
  'use strict';
  PW.parties['pri'] = {
    slug: 'pri',
    title: 'Partido Revolucionario Institucional',
    name: 'Partido Revolucionario Institucional',
    shortName: 'PRI',
    country: 'México',
    countryCode: 'mx',
    countryRegion: 'Norteamérica',
    founded: 1929,
    headquarters: 'Ciudad de México, México',
    leader: 'Alejandro Moreno, presidente del Comité Ejecutivo Nacional',
    ideologyLabel: 'Centro derecha',
    ideology: ['liberalismo', 'conservadurismo', 'capitalismo-de-estado', 'reformismo'],
    colors: ['#c1272d', '#006747'],
    inGovernment: 'Sin gobierno federal desde diciembre de 2018; con gubernaturas en Coahuila y Durango en 2026',
    subtitle: 'Partido que gobernó México de manera ininterrumpida entre 1934 y 2012 y que en 2026 conserva dos estados',
    updated: '2026-09-27',
    summary: 'El Partido Revolucionario Institucional fue el partido de gobierno de México durante casi ocho décadas. Perdió la Presidencia en 2000, la recuperó entre 2012 y 2018 y en 2026 conserva las gubernaturas de Coahuila y Durango.',
    infobox: {
      caption: 'Partido Revolucionario Institucional',
      color: '#c1272d',
      rows: [
        ['Fundación', '13 de febrero de 1929 como Partido Nacional Revolucionario'],
        ['Nombre actual', '5 de diciembre de 1946'],
        ['Sede', 'Ciudad de México'],
        ['Líder', 'Alejandro Moreno, presidente nacional'],
        ['Ideología', 'Centro derecha y liberalismo social'],
        ['Gobierno federal', 'Ninguno desde diciembre de 2018'],
        ['Bastiones', 'Coahuila y Durango en 2026'],
        ['Afiliación regional', 'Conferencia Permanente de Partidos Políticos de América Latina y el Caribe']
      ]
    },
    sections: [
      {
        id: 'ideologia',
        heading: 'Ideología y doctrina',
        blocks: [
          {
            type: 'p',
            text: 'El PRI se define como partido de centro y pragmático, y rechaza tanto la etiqueta de extrema derecha como la de partido de izquierda. Su programa ha combinado el nacionalismo económico con la apertura a la inversión extranjera. La organización conserva una estructura de partido de sectores, con representación propia en el Congreso.'
          },
          {
            type: 'ul',
            items: [
              'Bases: republicanismo democrático, liberalismo económico y la tradición del cristianismo social.',
              'Desarrolloismo: el Estado como promotor del desarrollo mediante inversión pública e infraestructura.',
              'Continuidad: prioridad a la estabilidad política y al respeto a los acuerdos firmados.',
              'Federalismo: defensa del Estado federal y de la repartición de competencias entre los niveles de gobierno.',
              'Seguridad: defensa del Estado de derecho como límite al poder del Ejecutivo.'
            ]
          },
          {
            type: 'p',
            text: 'Durante casi ocho décadas el PRI proporcionó la Presidencia y una mayoría permanente en el Congreso. Esa continuidad se ha descrito como un régimen de partido único en la práctica. La apertura de 1988 y la reforma electoral de 1997 rompieron parcialmente ese patrón, y el partido pasó a presentarse como defensor de esas normas.'
          },
          {
            type: 'note',
            text: 'La doctrina ha cambiado varias veces sin abandonar el eje del Estado como motor del desarrollo. Desde 2000 el partido se presenta sobre todo como defensor de las instituciones democráticas, un giro que le ha permitido competir por el voto de la clase media. Su electorado obrero y campesino se ha reducido de manera notable desde 2018.'
          }
        ]
      },
      {
        id: 'historia',
        heading: 'Historia: del partido de Estado a la oposición',
        blocks: [
          {
            type: 'p',
            text: 'El PRI nace el 13 de febrero de 1929 con el nombre de Partido Nacional Revolucionario, fundado por el propio gobierno. El 5 de diciembre de 1946 adoptó su denominación actual. A partir de 1934 todos los presidentes del país, hasta Peña Nieto en 2012, pertenecieron al partido o a sus antecesores.'
          },
          {
            type: 'ol',
            items: [
              '1929: fundación del Partido Nacional Revolucionario por iniciativa del gobierno.',
              '1946: adopción del nombre actual y forma de partido de derecho propio.',
              '1934-2012: setenta y ocho años de gobiernos ininterrumpidos.',
              '1988: primera transmisión íntegra de resultados y derrota del candidato oficial.',
              '1994: creación del Instituto Federal Electoral.',
              '2000: derrota de Francisco Labastida ante Vicente Fox, del PAN.',
              '2012: retorno al poder con Enrique Peña Nieto.',
              '2024: segundo lugar en la presidencial dentro de una coalición con el PAN y el PRD.'
            ]
          },
          {
            type: 'p',
            text: 'La caída del partido fue gradual y se agravó ciclo a ciclo. En 2006 y 2012 no ganó la Presidencia, y en 2015 se produjo una ruptura pública de la fiabilidad de sus instituciones. En 2018 la coalición que encabezaba Ricardo Anaya obtuvo el 7,1 por ciento de los votos. En 2024 quedó segundo con 9,6 millones de votos.'
          },
          {
            type: 'table',
            head: ['Año', 'Ciclo', 'Resultado'],
            rows: [
              ['2000', 'Presidencial', '36,1% de los votos y tercer lugar'],
              ['2012', 'Presidencial', 'Victoria con Enrique Peña Nieto'],
              ['2015', 'Legislativo', '23,3% de los votos'],
              ['2018', 'Presidencial', '7,1% y tercer lugar con Ricardo Anaya'],
              ['2021', 'Legislativo', 'Pérdida de la mayoría en ambas cámaras'],
              ['2024', 'Presidencial', '16,04% y segundo lugar'],
              ['2026', 'Local de Coahuila', '55,03% y las dieciséis diputaciones']
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
            text: 'La historia del PRI se explica más por su práctica de gobierno que por sus programas. Durante casi ocho décadas se legitimó como la continuidad del Estado, firmó los acuerdos internacionales que le tocaron y resistió dos golpes militares. Esa continuidad es a la vez su mayor logro y el principal argumento de sus críticos.'
          },
          {
            type: 'p',
            text: 'El programa económico de los años ochenta y noventa fue el más cercano al liberalismo. Se privatizó Telmex en 1990, la banca nacional en 1992 y el ferrocarril entre 1996 y 1999. También se vendieron empresas petroleras como Cantarell en 1998. La privatización fue la línea con la que el partido rompió primero con su propia base sindical.'
          },
          {
            type: 'p',
            text: 'El PRI se ha aliado con partidos que no comparten su ideología cuando las circunstancias lo exigen. En 2011, con doscientos doce diputados, aprueba la Ley de Seguridad Interior con apoyo del PAN. En 2013 firma el Pacto por México con el PAN y el PRD y sostiene la reforma energética y la ley que abría la participación privada en el petróleo.'
          },
          {
            type: 'p',
            text: 'La crisis institucional de 2015 se explica en buena parte por sus propias reglas internas. El caso conocido como Casa Blanca, con una propiedad de lujo declarada a nombre de un alto cargo, abrió una investigación que no pudo concluirse. En noviembre de 2015 el PRI firmó un acuerdo con el PAN, Compromiso por México, que se rompió antes de 2018.'
          },
          {
            type: 'p',
            text: 'La apuesta de 2018 fue la decisión más costosa de su historia reciente. Aceptó una coalición con el PAN y Movimiento Ciudadano, el Compromiso por México, y obtuvo 2,9 millones de votos, treinta y cuatro diputados y diecisiete senadores. En 2024 se repitió la fórmula con Fuerza y Corazón por México, que alcanzó el 16,04 por ciento de los votos.'
          },
          {
            type: 'table',
            head: ['Año', 'Medida', 'Alcance'],
            rows: [
              ['1929-2000', 'Continuidad en la Presidencia', 'Setenta y un años de gobierno ininterrumpido'],
              ['1990', 'Privatización de Telmex', 'Primera gran venta de una empresa pública'],
              ['1992', 'Venta de la banca nacional', 'El sistema bancario pasa a capital privado'],
              ['1998', 'Venta de la empresa Cantarell', 'Apertura del petróleo a la inversión privada'],
              ['2011', 'Ley de Seguridad Interior', 'Aprobada con los votos del PRI y el PAN'],
              ['2013', 'Reforma energética', 'Apertura a la inversión privada en la energía'],
              ['2018', 'Pérdida de la mayoría', 'Coalición Compromiso por México con el 7,1%']
            ]
          },
          {
            type: 'p',
            text: 'El único terreno donde el partido ha recuperado terreno es el local, y de forma regional. Desde 2019 ha perdido once gubernaturas, pero conserva Coahuila y Durango, dos estados del norte con estructuras tradicionales de clientela. El 7 de junio de 2026 ganó las dieciséis diputaciones de Coahuila con el 55,03 por ciento de los votos.'
          },
          {
            type: 'quote',
            text: 'Lo que en 2018 se presentó como una promesa de transformación, hoy se ha consumado como la peor traición a la Patria.',
            cite: 'Comunicado del Comité Ejecutivo Nacional, 1 de julio de 2026',
            author: 'Alejandro Moreno'
          },
          {
            type: 'note',
            text: 'La victoria de Coahuila de 2026 está acompañada de un debate sobre la limpieza del proceso. La revisión de los datos documentó al menos treinta casillas con una participación superior al cien por ciento del padrón. Morena presentó denuncia por el uso de códigos de pago por boleta, mientras el Instituto Estatal validó los resultados. El PRI respondió que defendería cada acta.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas',
        blocks: [
          {
            type: 'p',
            text: 'Las críticas al PRI se agrupan en torno a la captura del Estado, la continuidad de los mismos equipos en el poder y la aplicación selectiva de la ley. Se le ha acusado de obstaculizar el desarrollo de la oposición y de favorecer los intereses de su propia organización. También se le cuestiona la renovación de la base social en el país urbano.'
          },
          {
            type: 'ul',
            items: [
              'Captura institucional: concentración de poderes y de la representación partidista en una misma elite.',
              'Impunidad: falta de resultados en la investigación del caso Casa Blanca y en otros expedientes.',
              'Deterioro interno: pérdida de gubernaturas, fuga de miembros y debilitamiento de las bases.',
              'Acercamiento con el PAN: el acuerdo de 2015 se interpreta como una cesión de principios.',
              'Manipulación electoral: las acusaciones de compra de votos en Coahuila en 2026.'
            ]
          },
          {
            type: 'p',
            text: 'La respuesta del partido se ha construido sobre la defensa del Estado de derecho. Desde 2000 utiliza la transición como credencial, por ser el primer partido que perdió el poder y respetó el resultado. La recuperación de 2012 se justificó con el carácter democrático del proceso. En 2026 el lenguaje se ha desplazado hacia la estabilidad institucional.'
          },
          {
            type: 'p',
            text: 'La crítica más grave es la pérdida de legitimidad de 2018, que no fue un accidente del ciclo sino el final de setenta y ocho años de dominio. El partido se había identificado con el Estado y confundió la militancia con la ciudadanía. La reconstrucción actual depende de dos estados y no de un proyecto nacional con base propia.'
          }
        ]
      },
      {
        id: 'interno',
        heading: 'Vida interna',
        blocks: [
          {
            type: 'p',
            text: 'El PRI es la organización partidista más grande de México y también una de las más centralizadas en su dirección. El Comité Ejecutivo Nacional, dirigido por Alejandro Moreno desde 2019, concentra las decisiones estratégicas. Moreno es senador desde 2024, fue gobernador de Campeche entre 2015 y 2019 y preside desde julio de 2026 la Conferencia Permanente de Partidos Políticos de América Latina y el Caribe.'
          },
          {
            type: 'ul',
            items: [
              'El Comité Ejecutivo Nacional, dirigido por Alejandro Moreno desde 2019.',
              'Los sectores y organizaciones históricas del partido, ligados a la base sindical y campesina.',
              'Los estatutos: la reforma de julio de 2024 permite la reelección de la presidencia hasta por tres periodos seguidos.',
              'La Asamblea Nacional Extraordinaria, donde se decide la línea del partido y se renueva el comité ejecutivo.',
              'La relación con el sector financiero y empresarial, heredada de la privatización de la banca.'
            ]
          },
          {
            type: 'figure',
            caption: 'Trayectoria del PRI: 36,1 por ciento en 2000, segundo lugar en 2012, 7,1 por ciento en 2018, 16,04 por ciento dentro de la coalición en 2024 y 55,03 por ciento en las elecciones locales de Coahuila de junio de 2026.',
            credit: 'Síntesis sobre resultados electorales del Instituto Nacional Electoral'
          }
        ]
      }
    ],
    related: ['liberalismo', 'conservadurismo', 'capitalismo-de-estado', 'partido:vox', 'partido:ppsoe'],
    categories: ['PRI', ' México'],
    references: [
      {
        title: 'Estatutos del Partido Revolucionario Institucional',
        author: 'Partido Revolucionario Institucional',
        publisher: 'PRI, Ciudad de México',
        year: 2014,
        type: 'documento',
        url: 'https://pri.org.mx/'
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
        title: 'Elecciones Coahuila 2026: sin \'Andy\' López Beltrán como operador de Morena, el PRI retiene el estado',
        author: 'Carina García y Yared de la Rosa',
        publisher: 'Expansión Política, Ciudad de México',
        year: 2026,
        type: 'articulo',
        url: 'https://politica.expansion.mx/estados/2026/06/08/elecciones-coahuila-2026-pri-gana-estado'
      },
      {
        title: 'Lente de aumento en la victoria del PRI en Coahuila: urnas con participación de más del 100% o votos mínimos a la oposición',
        author: 'Zedryk Raziel',
        publisher: 'El País, Madrid',
        year: 2026,
        type: 'articulo',
        url: 'https://elpais.com/mexico/2026-06-09/lente-de-aumento-en-la-victoria-del-pri-en-coahuila-urnas-con-participacion-de-mas-del-100-o-votos-minimos-a-la-oposicion.html'
      },
      {
        title: 'Morena reitera que en Coahuila el PRI hizo compra masiva de votos',
        author: 'La Jornada',
        publisher: 'La Jornada, Ciudad de México',
        year: 2026,
        type: 'articulo',
        url: 'https://www.jornada.com.mx/noticia/2026/06/09/politica/morena-reitera-que-en-coahuila-el-pri-hizo-compra-masiva-de-votos'
      },
      {
        title: 'Fox joins forces with PRI, once his rival, to challenge Morena',
        author: 'Mexico News Daily',
        publisher: 'Mexico News Daily, Ciudad de México',
        year: 2026,
        type: 'articulo',
        url: 'https://mexiconewsdaily.com/politics/fox-pri-morena'
      },
      {
        title: 'Partido Revolucionario Institucional',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'enciclopedia',
        url: 'https://es.wikipedia.org/wiki/Partido_Revolucionario_Institucional'
      }
    ]
  };
  PW.parties['pri'].kind = 'partido';
})(window.PW = window.PW || { articles: {}, parties: {}, geo: {}, orgs: {}, gobiernos: {} });
