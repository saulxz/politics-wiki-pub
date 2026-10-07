(function (PW) {
  PW.parties = PW.parties || {};
  'use strict';
  PW.parties['renaissance'] = {
    kind: 'partido',
    slug: 'renaissance',
    title: 'Renaissance (Francia)',
    name: 'Renaissance',
    shortName: 'Renaissance',
    subtitle: 'Movimiento político francés fundado en 2016 por Emmanuel Macron, partido presidencial de la centro que se define por el liberalismo social y por la reforma de las instituciones',
    country: 'Francia',
    countryCode: 'fr',
    countryRegion: 'Europa occidental',
    founded: 2016,
    headquarters: 'París, Francia',
    leader: 'Emmanuel Macron (fundador y presidente del partido)',
    ideologyLabel: 'Centro',
    ideology: ['liberalismo', 'reformismo', 'igualitarismo'],
    colors: ['#20308f'],
    inGovernment: 'Gobierno como partido presidencial, desde 2017',
    updated: '2026-09-27',
    summary: 'Movimiento político francés fundado en 2016 por Emmanuel Macron, que sostiene la presidencia de la República desde 2017 y que se define por el liberalismo social, el universalismo republicano y la reforma de las instituciones de la Quinta República.',
    infobox: {
      caption: 'Renaissance',
      color: '#20308f',
      rows: [
        ['Fundación', '2016, por Emmanuel Macron'],
        ['Líder', 'Emmanuel Macron, fundador y presidente'],
        ['Sede', 'París, Francia'],
        ['Ideología', 'Centro, liberalismo social'],
        ['Origen', 'En Marche!, nombre adoptado en 2022'],
        ['Afiliación europea', 'Renew Europe'],
        ['Antecedente', 'La République En Marche! (2016-2022)'],
        ['Papel actual', 'Vehículo del Gobierno presidencial']
      ]
    },
    sections: [
      {
        id: 'ideologia',
        heading: 'Doctrina y afinidades',
        blocks: [
          {
            type: 'p',
            text: 'Renaissance no tiene doctrina oficial escrita. Su identidad es el macronismo, un liberalismo social que combina el universalismo republicano con la economía de mercado y con una idea de progreso medido en la movilidad social.'
          },
          {
            type: 'p',
            text: 'Cuatro elementos sostienen esa definición: la laicidad como norma republicana, la integración europea como condición del crecimiento, la reforma del Estado y el mérito individual como criterio de selección. La reforma institucional ocupa un lugar aparte: la V República de 1958 se describe como un sistema provisional que hay que refundar.'
          },
          {
            type: 'ul',
            items: [
              'Liberalismo social con Estado protector en educación y salud.',
              'Universalismo republicano en vez de comunitarismo.',
              'Europa como palanca del crecimiento.',
              'Reforma del Estado y de sus instituciones.'
            ]
          },
          {
            type: 'note',
            text: 'La ausencia de un programa doctrinal aprobado es deliberada y es también su límite. El partido se organiza en torno a una persona y a un proyecto de gobierno, de modo que su capacidad de formular ofertas programáticas duraderas está limitada por la propia naturaleza de su fundación.'
          }
        ]
      },
      {
        id: 'historia',
        heading: 'Nacimiento y expansión',
        blocks: [
          {
            type: 'p',
            text: 'El movimiento nació el 6 de abril de 2016, tres semanas después de que Emmanuel Macron renunciara a ser ministro de Economía. En mayo de 2017 ganó la presidencia con el 66,1 % de los votos y en junio obtuvo la mayoría absoluta en la Asamblea.'
          },
          {
            type: 'p',
            text: 'Después de dos años de crecimiento, la relación con los aliados se rompió. En las elecciones europeas de 2019 la lista presidencial quedó segunda, con el 22,4 %, por detrás de la lista ecologista: fue la primera derrota electoral del macronismo.'
          },
          {
            type: 'ol',
            items: [
              '2016: lanzamiento del movimiento En Marche!',
              '2017: victoria presidencial y mayoría absoluta.',
              '2019: 22,4 % en las elecciones europeas, segunda plaza.',
              '2022: 58,5 % en la primera vuelta de la presidencial.',
              '2022: el congreso adopta el nombre Renaissance.',
              '2024: derrota en las elecciones europeas de junio.'
            ]
          },
          {
            type: 'figure',
            caption: 'Resultados de la lista presidencial: 66,1 % en 2017, 58,5 % en la primera vuelta de 2022, 22,4 % en las europeas de 2019 y 27,1 % en las de 2024.',
            credit: 'Ministerio del Interior de Francia'
          }
        ]
      },
      {
        id: 'practica',
        heading: 'La ideología en la práctica',
        blocks: [
          {
            type: 'table',
            head: ['Gobierno', 'Período', 'Base', 'Medida principal'],
            rows: [
              ['Philippe', '2017-2019', 'Mayoría absoluta', 'Reforma del Código del trabajo por decreto.'],
              ['Castex', '2020-2022', 'Mayoría estrecha', 'Reforma del seguro de desempleo.'],
              ['Borne', '2022-2024', 'Minoría', 'Pensiones: edad de jubilación de 64 años.'],
              ['Attal', '2024-', 'Minoría', 'Presupuestos y deuda pública.']
            ]
          },
          {
            type: 'p',
            text: 'La tabla muestra la distancia entre el proyecto y la coyuntura. La reforma del Código del trabajo se hizo por decreto en 2017, sin pasar por la legislatura; y en 2023 el Gobierno recurrió dos veces al artículo 49.3 para aprobar la reforma de las pensiones, un mecanismo que el propio partido había criticado a su adversario más cercano.'
          },
          {
            type: 'p',
            text: 'El episodio de la deuda pública completa el cuadro. La ley de programación financiera de 2019, con un objetivo de déficit estrictamente descendente, tuvo que ser derogada en 2022 tras el choque energético y la subida de los tipos de interés.'
          },
          {
            type: 'quote',
            text: 'La República garantiza la igualdad de todos los ciudadanos ante las leyes. La laicidad es la religión de la República.',
            cite: 'Constitución francesa de 4 de octubre de 1946, artículo 2',
            author: 'Texto constitucional, traducción castellana'
          },
          {
            type: 'p',
            text: 'Esa cita conecta la doctrina con la práctica fiscal. La reforma de 2019-2021 bajó los impuestos y subió las cotizaciones sociales, y trasladó parte del coste de la protección social a los hogares. La ley de programación de 2019, aprobada con los votos de la centroizquierda, resume esa tensión mejor que ningún otro texto.'
          },
          {
            type: 'p',
            text: 'La derrota de 2024 en las elecciones europeas es el segundo momento clave. El partido había contemplado la posibilidad de una lista única con la fuerza nacionalista, de la que se separó al final. La lista presidencial quedó por debajo de la lista de Glucksmann, y la formación perdió la iniciativa en la única consulta electoral europea.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas internas y externas',
        blocks: [
          {
            type: 'p',
            text: 'La crítica principal es al sistema. El partido rompió con la izquierda en 2017 y desde entonces no ha ganado ninguna elección entera.'
          },
          {
            type: 'ul',
            items: [
              'Sin base territorial: no gobierna ninguna región.',
              'Dependiente de la financiación pública del Estado.',
              'Sin programa aprobado que ordene la acción.',
              'Uso repetido del artículo 49.3.'
            ]
          },
          {
            type: 'p',
            text: 'Desde la izquierda se le acusa de austeridad. La reforma de 2019-2021 bajó impuestos y subió cotizaciones, y el coste recayó sobre los hogares.'
          },
          {
            type: 'p',
            text: 'Desde la derecha se le acusa de lo contrario: de anteponer el orden internacional y la [[org:union-europea|Unión Europea]] a los intereses nacionales.'
          }
        ]
      },
      {
        id: 'interno',
        heading: 'Vida interna y organización',
        blocks: [
          {
            type: 'p',
            text: 'El partido se organiza en torno a su fundador. Un Consejo nacional designa a los órganos y el grupo parlamentario dirige el trabajo cotidiano.'
          },
          {
            type: 'dl',
            items: [
              ['Consejo nacional', 'Órgano que designa la dirección del partido.'],
              ['Grupo parlamentario', 'Grupo con más diputados que la formación.'],
              ['Delegados', 'Cuadros locales designados por distrito.'],
              ['Financiación', 'Subvención del Estado por resultados electorales.']
            ]
          },
          {
            type: 'p',
            text: 'La vida interna es la de un partido de cuadros. Se distinguen el ambiente liberal social, los técnicos y los antiguos miembros de la izquierda.'
          },
          {
            type: 'p',
            text: 'El nombre Renaissance, adoptado en 2022, simbolizó la ambición de abrir el partido más allá del presidente. En la práctica el cambio ha tenido más efecto en la comunicación que en la organización.'
          }
        ]
      },
      {
        id: 'resultados',
        heading: 'Trayectoria electoral',
        blocks: [
          {
            type: 'table',
            head: ['Año', 'Candidatura', 'Resultado registrado'],
            rows: [
              ['2017', 'Presidencial', '66,1 % en la segunda vuelta.'],
              ['2019', 'Europeas', '22,4 %: segunda plaza, tras la lista verde.'],
              ['2022', 'Presidencial', '58,5 % en la segunda vuelta.'],
              ['2024', 'Europeas', '27,1 %: tercera plaza, tras Glucksmann.']
            ]
          },
          {
            type: 'p',
            text: 'La serie resume el problema. Dos victorias amplias en 2017 y 2022 y ninguna victoria electoral desde entonces.'
          },
          {
            type: 'note',
            text: 'Datos del Ministerio del Interior. En 2024 el 27,1 % corresponde al voto de lista, según el recuento oficial del Consejo Nacional Electoral.'
          }
        ]
      }
    ],
    categories: ['Renaissance', 'Francia'],
    related: ['liberalismo', 'reformismo', 'igualitarismo', 'partido-socialista', 'los-republicanos'],
    references: [
      {
        title: 'Constitution du 4 octobre 1958',
        author: 'República Francesa',
        publisher: 'Journal officiel de la République française, París',
        year: 1958,
        type: 'documento'
      },
      {
        title: 'Constitution du 4 octobre 1946',
        author: 'República Francesa',
        publisher: 'Journal officiel de la République française, París',
        year: 1946,
        type: 'documento'
      },
      {
        title: 'Loi n° 2019-222 du 29 mars 2019 de programmation des finances publiques pour 2019 à 2030',
        author: 'República Francesa',
        publisher: 'Journal officiel de la République française, París',
        year: 2019,
        type: 'ley'
      },
      {
        title: 'Loi n° 2023-125 du 23 mars 2023 portant modification des dispositions relatives aux pensions',
        author: 'República Francesa',
        publisher: 'Journal officiel de la République française, París',
        year: 2023,
        type: 'ley'
      },
      {
        title: 'Élections européennes de 2019 en France: résultats',
        author: 'Ministerio del Interior de Francia',
        publisher: 'Ministerio del Interior, París',
        year: 2019,
        type: 'informe'
      },
      {
        title: 'Introduction à l\'analyse des systèmes politiques',
        author: 'Maurice Duverger',
        publisher: 'Armand Colin, París',
        year: 1965,
        type: 'libro'
      },
      {
        title: 'Les partis politiques',
        author: 'Maurice Duverger',
        publisher: 'Presses universitaires de France, París',
        year: 1951,
        type: 'libro'
      }
    ]
  };
  PW.parties['renaissance'].kind = 'partido';
})(window.PW = (window.PW = window.PW || { articles: {}, parties: {}, geo: {}, orgs: {} }));
