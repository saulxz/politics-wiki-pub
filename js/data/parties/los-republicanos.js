(function (PW) {
  PW.parties = PW.parties || {};
  'use strict';
  PW.parties['los-republicanos'] = {
    kind: 'partido',
    slug: 'los-republicanos',
    title: 'Los Republicanos (Francia)',
    name: 'Les Républicains',
    shortName: 'LR',
    subtitle: 'Centro derecha francesa, heredera del gaullismo y del liberalismo económico, que gobernó con Chirac y Sarkozy y que desde 2015 es la segunda fuerza de la derecha',
    country: 'Francia',
    countryCode: 'fr',
    countryRegion: 'Europa occidental',
    founded: 2015,
    headquarters: 'París, Francia',
    leader: 'Bruno Retailleau (presidente del partido desde 2023)',
    ideologyLabel: 'Derecha',
    ideology: ['conservadurismo', 'liberalismo', 'reformismo'],
    colors: ['#1f3a93'],
    inGovernment: 'Oposición; socio minoritario del gobierno Barnier en 2024',
    updated: '2026-09-27',
    summary: 'Centro derecha francesa constituida en 2015 sobre la herencia del gaullismo y del liberalismo económico, que gobernó con Chirac y con Sarkozy y que desde entonces se debate entre el europeísmo y la competencia del nacionalismo.',
    infobox: {
      caption: 'LR',
      color: '#1f3a93',
      rows: [
        ['Fundación', '2015, por el cambio de nombre de la UMP'],
        ['Líder', 'Bruno Retailleau, presidente desde 2023'],
        ['Sede', 'París, Francia'],
        ['Ideología', 'Centro derecha, liberal y conservadora'],
        ['Afiliación europea', 'Partido del Pueblo Europeo'],
        ['Grupo europeo', 'Grupo del Partido Popular Europeo'],
        ['Antecesores', 'UMP (2002), RPR (1976) y CNPF'],
        ['Papel actual', 'Segunda fuerza de la derecha, detrás del RN']
      ]
    },
    sections: [
      {
        id: 'ideologia',
        heading: 'Doctrina y afinidades',
        blocks: [
          {
            type: 'p',
            text: 'Los Republicanos reúne dos tradiciones. El gaullismo aporta la idea de un poder ejecutivo fuerte y de una Francia que no se somete a una potencia exterior; el liberalismo económico explica las privatizaciones y la disciplina fiscal de los años ochenta y noventa. El partido se define por la primera y practica la segunda.'
          },
          {
            type: 'p',
            text: 'La combinación no es doctrinariamente pura. La Carta de valores de 2015 rechaza el gaullismo original y se refugia en el texto de 1946, con su ideal de libertad, igualdad y fraternidad. Sobre Europa el partido apoya la integración, porque las instituciones de 1958 funcionan gracias al marco europeo, pero reserva un discurso de soberanía que en la práctica no altera su voto en Estrasburgo.'
          },
          {
            type: 'ul',
            items: [
              'Gaullismo político: ejecutivo fuerte y legitimidad directa.',
              'Liberalismo económico: privatización y disciplina fiscal.',
              'Europeísmo pragmático, con reservas retóricas.',
              'Defensa de la laicidad y de la identidad republicana.'
            ]
          },
          {
            type: 'note',
            text: 'El partido oscila entre dos proyectos: una derecha de gobierno que acepta las reglas del sistema liberal y una identidad de «derecha de la derecha» que las rechaza. Desde 2015 predomina la segunda en el discurso y la primera en la práctica electoral.'
          }
        ]
      },
      {
        id: 'historia',
        heading: 'Del gaullismo a la reconstitución del partido',
        blocks: [
          {
            type: 'p',
            text: 'El linaje se remonta al RPR de Jacques Chirac (1976) y al Centro nacional de los patronos, de orientación liberal. En 2002 Chirac reunió a la derecha en la Unión por un movimiento popular (UMP); en 2007 Nicolas Sarkozy ganó la presidencia con su apoyo; y en 2012 la perdió ante Hollande, con el 51,6 % de la segunda vuelta.'
          },
          {
            type: 'p',
            text: 'La crisis llegó en 2015, con una escisión generada por Jean-François Copé. En 2017 la campaña del candidato se derrumbó antes de la primera vuelta; en 2022 la candidatura quedó en el 4,8 %. La recomposición de 2023, con Bruno Retailleau al frente, devolvió una autoridad interna al partido, pero no electoral.'
          },
          {
            type: 'ol',
            items: [
              '1976: fundación del RPR por Jacques Chirac.',
              '2002: la UMP reúne a la derecha gaulliana y liberal.',
              '2007-2012: presidencia de Sarkozy y cohabitation con el PS.',
              '2012: derrota ante Hollande y crisis del grupo.',
              '2015: cambio de nombre y refundición del partido.',
              '2017: 4,8 % en primera vuelta presidencial.'
            ]
          },
          {
            type: 'figure',
            caption: 'Derecha francesa en primera vuelta presidencial: 23,5 % de Chirac en 1995, 31,0 % de Sarkozy en 2007, 13,5 % de Fillon en 2012, 4,8 % en 2017 y 4,8 % en 2022.',
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
            head: ['Gobierno', 'Período', 'Situación', 'Medida'],
            rows: [
              ['Juppé', '1995-1997', 'Mayoría absoluta', 'Plan de austeridad de 1996 y venta de France Télécom.'],
              ['Sarkozy', '2007-2012', 'Mayoría hasta 2010', 'Reforma de las pensiones de 2010: edad de 62 y 63 años.'],
              ['Ley de 2008', '2008-2012', 'Programación fiscal', 'Regla de oro: déficit estructural máximo del 2,5 % del PIB.'],
              ['Barnier', '2024', 'Socio sin cartera', 'Tres usos del artículo 49.3 entre octubre y diciembre.']
            ]
          },
          {
            type: 'p',
            text: 'La tabla resume la distancia entre el discurso y la práctica. El partido que en 2015 criticaba la fiscalidad del [[partido-socialista|PS]] aplicó en 1996 un plan de austeridad comparable, y en 2010 elevó la edad de jubilación en dos años tras semanas de conflicto sindical.'
          },
          {
            type: 'p',
            text: 'La etapa 2017-2022 es la más difícil de defender. En la oposición, el partido apoyó la integración europea y una reforma de las pensiones que su propia casa había hecho en 2010, pero su discurso se endureció: migración, identidad y seguridad pasaron al primer plano.'
          },
          {
            type: 'quote',
            text: 'Francia es una República unitaria, indivisible, laica, democrática y social. Su ideal es la libertad, la igualdad y la fraternidad.',
            cite: 'Constitución francesa de 4 de octubre de 1946, artículo 1',
            author: 'Texto constitucional, traducción castellana'
          },
          {
            type: 'p',
            text: 'Esa cita explica la estrategia: reclamar la herencia de 1946 sin quedarse con el sistema que la produjo. La Quinta República sigue siendo la norma, pero ese texto legitima un discurso de identidad que no contemplaba. El resultado es que LR vota en la V República como los demás mientras se presenta como heredero de la IV.'
          },
          {
            type: 'p',
            text: 'La prueba más dura llegó en 2024, con un acuerdo con el Rassemblement national para las elecciones europeas: ambos se separaron la competencia y se apoyaron. El acuerdo generó críticas internas porque entregaba al partido que ocupa el espacio que LR decía defender. Es la tensión central de la formación: definirse por no parecerse al nacionalismo y tener que competir con él.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas internas y externas',
        blocks: [
          {
            type: 'p',
            text: 'La crítica más grave es la electoral. El partido obtuvo el 4,8 % en primera vuelta presidencial en 2017 y también en 2022.'
          },
          {
            type: 'ul',
            items: [
              'Pérdida de electorado hacia el partido nacionalista.',
              'Identidad difusa entre liberalismo y derecha identitaria.',
              'Acuerdo de 2024 con el nacionalismo, criticado internamente.',
              'Dificultad para construir un liderazgo de largo plazo.'
            ]
          },
          {
            type: 'p',
            text: 'Desde la izquierda se le acusa de poner en peligro la protección del interés público y sostener un relato incompatible con el laicismo que dice defender.'
          },
          {
            type: 'p',
            text: 'Desde su propia base hay dos reproches opuestos: una parte ve el acuerdo de 2024 como una capitulación y otros lo consideran la única vía para conservar relevancia.'
          },
          {
            type: 'note',
            text: 'La paradoja del partido, ni liberal ni nacionalista, refleja una derecha francesa dividida entre un electorado de clase media alta y un electorado periférico que se ha desplazado al partido nacionalista.'
          }
        ]
      },
      {
        id: 'interno',
        heading: 'Vida interna y organización',
        blocks: [
          {
            type: 'p',
            text: 'Se dirige desde un presidente elegido en congreso. La dualidad de 2015, entre Copé y Wauquiez, terminó con la victoria del segundo.'
          },
          {
            type: 'dl',
            items: [
              ['Presidente', 'Electo por el congreso; cabeza visible del partido.'],
              ['Congreso', 'Asamblea que fija la línea y elige la dirección.'],
              ['Comités territoriales', 'Estructura en los 96 departamentos.'],
              ['Agrupación europea', 'Grupo del Partido Popular Europeo desde 2009.']
            ]
          },
          {
            type: 'p',
            text: 'Desde 2023 la dirección de Bruno Retailleau ha desplazado el eje hacia la línea identitaria, con apoyo del sector de la droite de la droite.'
          },
          {
            type: 'p',
            text: 'La tensión más visible es la frontera con el partido nacionalista, y divide a la base en dos: los que ven cualquier acuerdo como una ruptura y los que lo consideran una táctica electoral.'
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
              ['1995', 'Presidencial', 'Chirac, 23,5 % en primera vuelta y victoria final.'],
              ['2007', 'Presidencial', 'Sarkozy, 31,0 % y 46,4 % en la segunda vuelta.'],
              ['2012', 'Presidencial', 'Fillon, 13,5 % en primera vuelta; derrota.'],
              ['2017', 'Presidencial', 'Fillon, 4,8 %; el candidato se retira.'],
              ['2022', 'Presidencial', 'Pécresse, 4,8 %; Le Pen, 30,3 % y primera.'],
              ['2024', 'Europeas', 'Acuerdo con el nacionalismo para la lista común.']
            ]
          },
          {
            type: 'p',
            text: 'La serie muestra dos generaciones: de 1995 a 2007 la derecha ganaba la primera vuelta; desde 2012 acumula cuatro resultados en declive, hasta quedar detrás de un partido definido en su contra.'
          }
        ]
      }
    ],
    categories: ['LR', 'Francia'],
    related: ['conservadurismo', 'liberalismo', 'fascismo', 'partido-socialista', 'renaissance'],
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
        title: 'LOI n° 2006-911 du 24 juillet 2006 relative à l\'immigration et à l\'intégration',
        author: 'República Francesa',
        publisher: 'Journal officiel de la République française, París',
        year: 2006,
        type: 'ley',
        url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000266495'
      },
      {
        title: 'Loi n° 2008-169 du 23 janvier 2008 de programmation des finances publiques pour 2009 à 2013',
        author: 'República Francesa',
        publisher: 'Journal officiel de la République française, París',
        year: 2008,
        type: 'ley'
      },
      {
        title: 'La droite en France de 1815 à nos jours',
        author: 'René Rémond',
        publisher: 'Julliard, París',
        year: 1953,
        type: 'libro'
      },
      {
        title: 'Les partis politiques',
        author: 'Maurice Duverger',
        publisher: 'Presses universitaires de France, París',
        year: 1951,
        type: 'libro'
      },
      {
        title: 'Charte des valeurs des Républicains',
        author: 'Les Républicains',
        publisher: 'Les Républicains',
        year: 2015,
        type: 'documento'
      }
    ]
  };
  PW.parties['los-republicanos'].kind = 'partido';
})(window.PW = (window.PW = window.PW || { articles: {}, parties: {}, geo: {}, orgs: {} }));
