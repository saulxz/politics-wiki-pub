(function (PW) {
  'use strict';
  PW.orgs = PW.orgs || {};
  PW.orgs['onu'] = {
    slug: 'onu',
    name: 'Organización de las Naciones Unidas',
    title: 'Organización de las Naciones Unidas',
    shortName: 'ONU',
    orgType: 'Organización mundial',
    founded: 1945,
    headquarters: 'Nueva York, Estados Unidos',
    leader: 'António Guterres (Secretario General)',
    members: 193,
    memberSince: '1945',
    colors: ['#4a90a4'],
    category: 'Organizaciones internacionales',
    tags: ['organizaciones internacionales', 'derechos humanos', 'cooperación internacional', 'seguridad colectiva', 'desarrollo'],
    updated: '2026-09-27',
    subtitle: 'Foro universal de Estados que coordina la seguridad colectiva, los derechos humanos, el desarrollo y la asistencia humanitaria',
    summary: 'El principal foro interestatal del mundo, con 193 Estados miembros, mantiene en su agenda la paz, los derechos humanos y el desarrollo mediante la Asamblea General, el Consejo de Seguridad y una Secretaría permanente.',
    infobox: {
      caption: 'ONU',
      color: '#4a90a4',
      rows: [
        ['Fundación', 'Carta firmada el 26 de junio de 1945, en vigor el 24 de octubre de 1945'],
        ['Sede', 'Nueva York, Estados Unidos'],
        ['Secretario General', 'António Guterres, desde enero de 2017'],
        ['Órganos principales', 'Asamblea General, Consejo de Seguridad, ECOSOC y Secretaría'],
        ['Tribunal', 'Corte Internacional de Justicia, en La Haya'],
        ['Miembros', '193 Estados'],
        ['Financiación', 'Cuotas ordinarias de los Estados y contribuciones voluntarias'],
        ['Organismos especializados', 'Quince, con personalidad jurídica propia']
      ]
    },
    sections: [
      {
        id: 'origen',
        heading: 'Origen: por qué se creó',
        blocks: [
          {
            type: 'p',
            text: 'La Organización de las Naciones Unidas nace de la Segunda Guerra Mundial y de la idea de que la paz entre los Estados solo se sostiene con una institución común y permanente. Su texto fundacional es la Carta, firmada en San Francisco el 26 de junio de 1945 por cincuenta Estados y en vigor desde el 24 de octubre de ese mismo año.'
          },
          {
            type: 'p',
            text: 'La guerra había mostrado hasta dónde llegaba la impotencia de los acuerdos interestatales. La Sociedad de las Naciones Unidas, fundada en 1920, no pudo impedir la expansión de Alemania, Italia y Japón, y se desintegró durante el conflicto. El intervalo entre las dos guerras añadió el argumento económico: el proteccionismo agravó la crisis de los años treinta.'
          },
          {
            type: 'ul',
            items: [
              'Declaración de las Naciones Unidas, enero de 1942: veintiséis Estados en guerra contra el Eje se comprometen a dedicar todos sus recursos a la lucha.',
              'Conferencia de Dumbarton Oaks, 1944: los representantes de Estados Unidos, Reino Unido, Unión Soviética y China diseñan el esquema de la organización.',
              'Conferencia de Yalta, febrero de 1945: se acuerdan el reparto de votos y el derecho de veto de las grandes potencias.',
              'Conferencia de San Francisco, de abril a junio de 1945: se redacta y firma la Carta con cincuenta Estados.',
              'Conferencias de Bretton Woods, julio de 1944: en paralelo se crean el [[org:fmi|Fondo Monetario Internacional]] y el [[org:banco-mundial|Banco Mundial]].'
            ]
          },
          {
            type: 'p',
            text: 'La guerra fría marca la vida interna de la organización desde el primer momento. El Consejo de Seguridad recibió poderes amplios para que las dos superpotencias no quedaran bloqueadas, y en 1950, ante la guerra de Corea, la Asamblea General aprobó la resolución 377, conocida como Uniting for Peace, que permitía decidir sin el Consejo.'
          },
          {
            type: 'p',
            text: 'La descolonización transformó después esa composición. El número de miembros pasa de cincuenta y uno a finales de 1945 a más de cien en la década de 1960, con la entrada en bloque de diecisiete Estados africanos en 1960, año declarado Año de África. La ONU se convierte así en el primer intento histórico de universalidad institucional.'
          }
        ]
      },
      {
        id: 'estructura',
        heading: 'Estructura: órganos y formas de decisión',
        blocks: [
          {
            type: 'p',
            text: 'La Carta establece seis órganos principales. La Asamblea General y el Consejo de Seguridad concentran la autoridad política, el Consejo Económico y Social coordina a los organismos especializados, la Secretaría es el único brazo permanente y la Corte Internacional de Justicia, creada en 1945, funciona en La Haya y dicta sentencias en las controversias que los Estados le someten.'
          },
          {
            type: 'table',
            head: ['Órgano', 'Composición', 'Cómo decide', 'Sede'],
            rows: [
              ['Asamblea General', '193 Estados, un voto cada uno', 'Mayoría simple y dos tercios en asuntos importantes', 'Nueva York'],
              ['Consejo de Seguridad', 'Quince Estados, cinco permanentes y diez electos', 'Nueve votos y ausencia de veto', 'Nueva York'],
              ['Consejo Económico y Social', 'Cincuenta y cuatro Estados electos', 'Mayoría simple', 'Nueva York'],
              ['Secretaría', 'Funcionarios dirigidos por el Secretario General', 'El Secretario General propone y ejecuta', 'Nueva York y oficinas sobre el terreno'],
              ['Consejo de Administración Fiduciaria', 'Once Estados, suspendido en 1994', 'Mayoría simple cuando estuvo activo', 'Nueva York'],
              ['Corte Internacional de Justicia', 'Quince jueces elegidos por la Asamblea y el Consejo', 'Sentencia por mayoría', 'La Haya']
            ]
          },
          {
            type: 'p',
            text: 'El Consejo de Seguridad es el órgano más asimétrico de la Carta. Sus cinco miembros permanentes, China, Estados Unidos, Francia, Reino Unido y Rusia, pueden vetar cualquier resolución sustantiva. Los diez electos se reparten cinco de África, cuatro de Asia y el Pacífico, tres de América Latina y el Caribe y dos de Europa occidental, y la abstención de un permanente no equivale a veto.'
          },
          {
            type: 'p',
            text: 'La Asamblea General funciona con un voto por Estado y con la regla de los dos tercios para las materias importantes, entre ellas la paz, el ingreso de nuevos miembros y el presupuesto. Puede pedir al Consejo de Seguridad que actúe cuando este no lo hace. Solo la Asamblea puede modificar la Carta, porque el Consejo no puede cambiar su propio procedimiento.'
          },
          {
            type: 'ul',
            items: [
              'El Secretario General lo nombra la Asamblea General por recomendación del Consejo de Seguridad, cumple dos mandatos de cinco años y cuenta con un vicesecretario.',
              'El veto se ha ejercido pocas veces en la historia del Consejo y la última vez fue en 2022, para bloquear una resolución sobre la invasión de Ucrania.',
              'El Consejo de Administración Fiduciaria quedó suspendido en 1994 al no quedar territorio bajo tutela tras el acuerdo de 1990 con Palau.',
              'La Corte Internacional de Justicia actúa solo por consentimiento: ningún Estado puede ser demandado ante ella sin aceptarlo previamente.'
            ]
          },
          {
            type: 'p',
            text: 'La Secretaría es el órgano que funciona todos los días. Su estructura combina una sede en Nueva York con oficinas sobre el terreno que conectan la deliberación con las situaciones concretas, y esa red administrativa explica buena parte de la capacidad de mediar en conflictos que ningún órgano decide formalmente.'
          }
        ]
      },
      {
        id: 'funciones',
        heading: 'Funciones: qué hace de verdad',
        blocks: [
          {
            type: 'p',
            text: 'La función central es la prevención y la solución de conflictos. El capítulo VI de la Carta regula el arreglo pacífico de controversias y el capítulo VII autoriza el uso de la fuerza ante amenazas contra la paz. En la práctica, el trabajo diario se concentra en el mantenimiento de la paz, con más de diez operaciones simultáneas cuyos mandatos renueva el Consejo todos los años.'
          },
          {
            type: 'ul',
            items: [
              'Mantenimiento de la paz con cascos azules, observadores militares y unidades de policía en los Estados donde hay conflicto.',
              'Asistencia humanitaria a través de la Oficina de Coordinación de Asuntos Humanitarios, creada en 1972.',
              'Cooperación para el desarrollo con el Programa de las Naciones Unidas para el Desarrollo, el Fondo de las Naciones Unidas para la Infancia y el Programa Mundial de Alimentos.',
              'Vigilancia de los derechos humanos mediante expertos independientes y órganos de tratados que examinan el cumplimiento de las obligaciones.',
              'Codificación del derecho internacional por la Comisión de Derecho Internacional, que ha elaborado más de treinta convenciones.'
            ]
          },
          {
            type: 'p',
            text: 'El Consejo Económico y Social coordina la familia de organismos con personalidad jurídica propia, entre ellos la [[org:oms|Organización Mundial de la Salud]], la [[org:omc|Organización Mundial del Comercio]], la Organización Internacional del Trabajo y la Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura. Cada organismo conserva su asamblea, su presupuesto y su secretaría.'
          },
          {
            type: 'table',
            head: ['Instrumento', 'Año', 'Contenido'],
            rows: [
              ['Carta de las Naciones Unidas', '1945', 'Norma constitutiva y competencias de los órganos'],
              ['Declaración Universal de Derechos Humanos', '1948', 'Derechos civiles, políticos, económicos, sociales y culturales'],
              ['Declaración sobre la independencia de las colonias', '1960', 'Rechazo de la subordinación colonial'],
              ['Pactos de Derechos Civiles y de Derechos Económicos y Sociales', '1966', 'Tratados vinculantes, en vigor desde 1976'],
              ['Carta sobre Seguridad y Desarrollo', '1987', 'Vínculo entre desarme, desarrollo y derechos humanos'],
              ['Pacto para el Futuro', '2024', 'Reforma de la arquitectura de paz y compromisos nuevos']
            ]
          },
          {
            type: 'p',
            text: 'El Pacto para el Futuro, adoptado por la Asamblea General el 22 de septiembre de 2024, es el último intento serio de reforma interna. Recoge compromisos sobre seguridad, financiación, tecnología digital y ampliación del Consejo de Seguridad. Su eficacia depende de la voluntad política de los Estados miembros, porque no viene acompañado de ningún mecanismo de sanción.'
          }
        ]
      },
      {
        id: 'miembros',
        heading: 'Miembros: composición y límites',
        blocks: [
          {
            type: 'p',
            text: 'La organización se caracteriza por la universalidad: no exige un tamaño mínimo de población, ni un nivel de ingresos, ni una orientación política. A finales de 1945 había cincuenta y un miembros. En 1960, declarado Año de África, diecisiete Estados africanos entraron en bloque, y la disolución de la Unión Soviética trajo más de una decena de miembros nuevos en 1991 y 1992.'
          },
          {
            type: 'p',
            text: 'Los cinco miembros permanentes del Consejo de Seguridad concentran una parte decisiva del peso real. Aportan cerca de la mitad del presupuesto, tienen derecho de veto y, salvo China y Rusia, son las mayores economías del mundo. Esa concentración alimenta la crítica clásica de que la universalidad formal convive con una desigualdad efectiva en la adopción de decisiones.'
          },
          {
            type: 'p',
            text: 'La financiación mezcla dos lóminas. El presupuesto regular se reparte mediante cuotas ordinarias con un techo del 10% para cualquier contribuidor y se aprueba cada año en la Asamblea General. Los organismos y los fondos de cooperación dependen en cambio de contribuciones voluntarias, de modo que el peso de la ayuda internacional queda en manos de pocos Estados.'
          },
          {
            type: 'p',
            text: 'No existe la posibilidad de expulsar a un Estado. El único caso de separación efectiva fue el de Indonesia, que se retiró en 1965 y regresó en 1966, y varios Estados de la ex Unión Soviética y de la ex Yugoslavia hicieron lo mismo entre 1991 y 1993. Los dos Estados con calidad de observador son la Santa Sede y el Estado de Palestina.'
          },
          {
            type: 'p',
            text: 'La condición de miembro y la de contribuidor no coinciden. Hay Estados que no pagan y siguen integrados, y hay organismos con personalidad propia, como el [[org:aiea|Organismo Internacional de Energía Atómica]], cuyo número de miembros es mayor. La ONU reconoce esa tensión entre legitimidad y eficacia, pero no ha emprendido ninguna reforma que altere la paridad de los votos.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas: por qué se la discute',
        blocks: [
          {
            type: 'p',
            text: 'La crítica más extendida se dirige al Consejo de Seguridad. Los conflictos de las últimas tres décadas se han producido casi siempre dentro de la esfera de seguridad de las potencias, de modo que la organización aplica sanciones y autorizaciones mientras evita la resolución que el caso pediría. En 2022, la invasión de Ucrania dejó el sello de esa parálisis institucional.'
          },
          {
            type: 'ul',
            items: [
              'Disfunción del Consejo de Seguridad: el veto y el desacuerdo entre grandes potencias bloquean la acción colectiva.',
              'Dependencia financiera: el techo del 10% y el peso del presupuesto en pocos Estados hacen frágil su sostenimiento.',
              'Selectividad: la aplicación de la Carta en derechos humanos se percibe como desigual según el Estado afectado.',
              'Burocracia: el tamaño de la Secretaría y la lentitud de los procedimientos se critican como freno a la respuesta rápida.',
              'Representación: el Consejo no refleja la distribución demográfica y económica actual del mundo.'
            ]
          },
          {
            type: 'quote',
            text: 'Todos los seres humanos nacen libres e iguales en dignidad y derechos.',
            cite: 'Declaración Universal de Derechos Humanos, 1948, artículo 1',
            author: 'Asamblea General de las Naciones Unidas'
          },
          {
            type: 'p',
            text: 'A esas objeciones se responde con el argumento de la prevención. La existencia de una instancia neutral ha evitado conflictos menores y ha dado un marco de negociación a casos como Chipre o Namibia. Los informes In Larger Freedom, de 2005, y Our Common Future, de 1987, propusieron la reforma que el Pacto para el Futuro retomó en 2024.'
          },
          {
            type: 'p',
            text: 'La comparación con una unión de Estados europeos suele usarse en los dos sentidos. La ONU no tiene mecanismos que la obliguen a cumplir sus acuerdos, pero tampoco tiene un mando único que pueda detener una guerra. Los Estados que la critican por inútil suelen ser los mismos que cuentan con su peso como garantía de seguridad, y esa ambivalencia forma parte de la explicación de la organización.'
          }
        ]
      }
    ],
    categories: ['Organizaciones', 'Relaciones internacionales', 'Derechos humanos'],
    related: ['org:otan', 'org:g20', 'federalismo', 'liberalismo', 'pacifismo'],
    references: [
      {
        title: 'Carta de las Naciones Unidas',
        author: 'Conferencia de las Naciones Unidas sobre la Organización Internacional',
        publisher: 'Naciones Unidas, Nueva York',
        year: 1945,
        type: 'documento'
      },
      {
        title: 'Declaración Universal de Derechos Humanos',
        author: 'Asamblea General de las Naciones Unidas',
        publisher: 'Resolución 217 A (III) de la Asamblea General, Naciones Unidas',
        year: 1948,
        type: 'documento',
        url: 'https://www.un.org/en/about-us/universal-declaration-of-human-rights'
      },
      {
        title: 'In Larger Freedom: Towards Development, Security and Human Rights for All',
        author: 'Kofi Annan',
        publisher: 'Naciones Unidas, Nueva York',
        year: 2005,
        type: 'informe'
      },
      {
        title: 'Our Common Future',
        author: 'Comisión Mundial sobre el Medio Ambiente y el Desarrollo',
        publisher: 'Naciones Unidas, Nueva York',
        year: 1987,
        type: 'informe'
      },
      {
        title: 'Pacto para el Futuro',
        author: 'Asamblea General de las Naciones Unidas',
        publisher: 'Resolución A/RES/79/1 de la Asamblea General, Naciones Unidas',
        year: 2024,
        type: 'documento',
        url: 'https://www.un.org/pact-for-the-future/en'
      },
      {
        title: 'United Nations',
        author: 'Encyclopaedia Britannica',
        publisher: 'Encyclopaedia Britannica, Inc.',
        year: 2025,
        type: 'enciclopedia',
        url: 'https://www.britannica.com/topic/United-Nations'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
