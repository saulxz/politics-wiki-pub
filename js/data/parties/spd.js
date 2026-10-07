(function (PW) {
  PW.parties = PW.parties || {};
  'use strict';
  PW.parties['spd'] = {
    kind: 'partido',
    slug: 'spd',
    title: 'SPD (Alemania)',
    name: 'Sozialdemokratische Partei Deutschlands',
    shortName: 'SPD',
    subtitle: 'Partido socialdemócrata alemán fundado en 1863 en Leipzig, el más antiguo del país, que ha dirigido el gobierno federal con la reforma gradual como método y que desde 2025 está en la oposición',
    country: 'Alemania',
    countryCode: 'de',
    countryRegion: 'Europa central',
    founded: 1863,
    headquarters: 'Bonn, Alemania',
    leader: 'Bärbel Bas (presidenta del partido, desde abril de 2025)',
    ideologyLabel: 'Centroizquierda',
    ideology: ['socialdemocracia', 'reformismo', 'sindicalismo'],
    colors: ['#e3000f'],
    inGovernment: 'En la oposición desde mayo de 2025',
    updated: '2026-09-27',
    summary: 'Partido socialdemócrata alemán fundado en 1863 en Leipzig, el más antiguo de Alemania, que ha dirigido el gobierno federal con la reforma gradual como método y que desde mayo de 2025 permanece en la oposición.',
    infobox: {
      caption: 'SPD',
      color: '#e3000f',
      rows: [
        ['Fundación', '1863, en Leipzig'],
        ['Líder', 'Bärbel Bas, presidenta'],
        ['Sede', 'Bonn, Alemania'],
        ['Ideología', 'Centroizquierda, socialdemocracia reformista'],
        ['Pico electoral', '34,8 % en 1912'],
        ['Posición actual', 'Oposición desde mayo de 2025'],
        ['Afiliación europea', 'Partido Socialista Europeo'],
        ['Antecedente', 'Asociación General de los Trabajadores de Alemania']
      ]
    },
    sections: [
      {
        id: 'ideologia',
        heading: 'Doctrina y fuentes',
        blocks: [
          {
            type: 'p',
            text: 'La doctrina del SPD se apoya en dos ideas: la transformación social por la vía legal, sin revolución, y la organización permanente de la clase obrera en un partido de masas abierto. El Programa de Erfurt, adoptado en 1891, incorporó al proyecto del partido el reconocimiento de la lucha de clases junto a la exigencia de proteger a los trabajadores con seguros obligatorios. August Bebel y Friedrich Engels, que escribieron para el partido, dejaron la lucha de clases como marco y el reformismo como método.'
          },
          {
            type: 'p',
            text: 'Marx y Engels colaboraron con el partido entre 1848 y 1872, pero la organización nunca adoptó la revolución armada como programa. En 1891 la lucha de clases quedó subordinada a la reforma legal y a la protección mediante seguros obligatorios. La ruptura abierta llegó en 1899, cuando la revista Vorwärts publicó un artículo que criticaba el electoralismo del partido y defendía la redacción de un programa revolucionario.'
          },
          {
            type: 'ul',
            items: [
              'Reforma legal y gradual como método de cambio social.',
              'Estado social con seguros obligatorios de jubilación, salud y accidentes.',
              'Codeterminación: los sindicatos participan en los órganos de empresa.',
              'Militarismo rechazado de forma permanente desde 1959.',
              'Apertura a la economía de mercado, asumida en el Programa de Hamburgo de 1959.'
            ]
          },
          {
            type: 'note',
            text: 'La lectura que el partido hace de sus maestros es deliberada. Convierte el análisis de la lucha de clases en un argumento a favor de la reforma legal y sostiene que la revolución sería un salto arbitrario. Esa interpretación se discute dentro de la organización desde 1899 y sigue siendo el origen de sus debates internos.'
          }
        ]
      },
      {
        id: 'historia',
        heading: 'De la clandestinidad a la reconstrucción',
        blocks: [
          {
            type: 'p',
            text: 'Se fundó el 13 de agosto de 1863 en Leipzig por August Bebel y Wilhelm Liebknecht como Asociación General de los Trabajadores de Alemania. Su pico electoral llegó en 1912, con el 34,8 % de los votos, la mayor cota alcanzada por un partido alemán. Hitler disolvió el partido en julio de 1933 y su organización quedó prohibida durante todo el régimen. Tras la guerra se reconstituyó en las zonas occidentales de ocupación, mientras en la soviética se creaba otro partido con el mismo nombre.'
          },
          {
            type: 'ol',
            items: [
              '1863: fundación en Leipzig con el lema de los trabajadores organizados.',
              '1912: máximo histórico con el 34,8 % de los votos.',
              '1918: participación en la revolución de noviembre junto a los sindicatos.',
              '1933: proscripción del partido tras la llegada de Hitler al poder.',
              '1946: reconstrucción del partido en la zona occidental de ocupación.',
              '1969: Willy Brandt gana la Confederación y abre la política hacia el Este.',
              '1990: reunificación con el partido de la zona oriental.'
            ]
          },
          {
            type: 'p',
            text: 'La reconstrucción interna tuvo tres momentos. En 1959 el Programa de Hamburgo aceptó expresamente la economía social de mercado. En 1966 la rama de Bad Godesberg preparó un programa temporal de gobierno que retiraba medidas de nacionalización. En 1969 el acceso al poder convirtió la reforma en política de gobierno.'
          },
          {
            type: 'p',
            text: 'La historia reciente es una serie de altibajos. El partido ganó las elecciones de 1998 con el 37,8 % de los votos, gobernó hasta 2005 y perdió la mayoría después. En 2013 bajó del 25,7 % y en 2017 quedó fuera del Bundestag por primera vez desde 1949. Volvió en 2021 con el 15,9 % y en 2025 quedó otra vez en la oposición.'
          },
          {
            type: 'figure',
            caption: 'Sufragio federal alemán: 34,8 % en 1912, 20,4 % en 1972, 37,8 % en 1998 y 15,9 % en 2021.',
            credit: 'Oficina Federal de Estadística, Wiesbaden'
          }
        ]
      },
      {
        id: 'practica',
        heading: 'La ideología en la práctica',
        blocks: [
          {
            type: 'table',
            head: ['Canciller', 'Período', 'Base', 'Medida característica'],
            rows: [
              ['Willy Brandt', '1969-1974', 'Minoritario hasta 1972', 'Política hacia el Este y reconocimiento de la frontera con Polonia.'],
              ['Helmut Schmidt', '1974-1982', 'Mayoría tripartita', 'Freno monetario tras 1974 y recomposición del gasto social.'],
              ['Gerhard Schröder', '1998-2005', 'Mayoría dual', 'Reforma del mercado laboral de 2003 y recorte de impuestos.'],
              ['Angela Merkel', '2005-2021', 'Gran coalición y mayoría', 'Consolidación presupuestaria después de 2010.'],
              ['Olaf Scholz', '2021-2025', 'Mayoría tripartita', 'Reforma de las pensiones y giro por la seguridad.']
            ]
          },
          {
            type: 'p',
            text: 'El episodio de 2003 es la prueba más dura del desajuste. La ley Job Creation Act, aprobada en enero de 2003 con el argumento de que el pleno empleo era el objetivo prioritario, recortó las ayudas al empleo y flexibilizó la relación entre jornada y salario. Cuatro años después, la consolidación fiscal del Gobierno federal convirtió a la socialdemocracia en el principal responsable del recorte del gasto social en Europa. Eso último procedió de un gobierno socialdemócrata, no de la oposición.'
          },
          {
            type: 'quote',
            text: 'La socialdemocracia no es un partido de clase, sino un partido de todo el pueblo.',
            cite: 'Programa de Hamburgo de la SPD, 1959',
            author: 'Texto del partido, traducción castellana'
          },
          {
            type: 'p',
            text: 'Esa fórmula condensa la distancia entre el origen y la práctica. El partido que en 1959 se definía como partido de todo el pueblo acabó gobernando con mayoría propia entre 1998 y 2005. La consecuencia fue práctica: cuando esa mayoría se perdió, el partido tuvo que volver a negociar con quien antes criticaba.'
          },
          {
            type: 'p',
            text: 'La etapa de Scholz es el reverso de la de Brandt. Sin mayoría propia, el SPD tuvo que negociar cada medida con los otros dos socios. La reforma de las pensiones a partir de 2024 y la ayuda militar a Ucrania se aprobaron con el apoyo de los tres partidos. En mayo de 2025 la coalición se disolvió y el SPD quedó en la oposición. El coste fue alto: una etapa de austeridad y la pérdida de socios.'
          },
          {
            type: 'p',
            text: 'La relación con la [[org:union-europea|Unión Europea]] es el segundo terreno de desajuste. El partido apoya la ampliación hacia el este y la política de vecindad, pero rechaza el proyecto de Constitución Europea. En 2021 los delegados exigieron excluir a Bulgaria y Rumanía por su situación en materia de Estado de derecho.'
          },
          {
            type: 'p',
            text: 'El SPD nació en 1863 en plena expansión industrial y con una base electoral rural, formada por trabajadores agrícolas y oficios más que por obreros de fábrica. De ese origen le viene una relación tensa con el sindicalismo revolucionario, que prefiere la acción directa a la representación. El partido apoya la negociación colectiva, pero la ley de arbitraje forzoso vigente desde 1952 limita ese margen, y la tensión sigue abierta.'
          },
          {
            type: 'note',
            text: 'La comparación útil no es entre programas, sino entre años de gobierno. El SPD ha dirigido el Estado federal durante una parte considerable de la historia de la República Federal, y en ninguno de esos periodos dejó de usar el presupuesto como instrumento de poder. Ese dato explica por qué la crítica interna se concentra en la gestión más que en la doctrina.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas internas y externas',
        blocks: [
          {
            type: 'p',
            text: 'La crítica más grave llegó desde dentro en julio de 2001, cuando el congreso del partido expulsó a Jusuf Kwasig, orador de origen turco que criticaba la guerra de Irak. El episodio dividió a la organización y puso en duda su capacidad para renovar la dirección. Ese episodio sigue citándose como la fractura central de la historia reciente.'
          },
          {
            type: 'ul',
            items: [
              'Austeridad aplicada desde un gobierno socialdemócrata entre 2010 y 2014.',
              'Pérdida de influencia en los sectores urbanos jóvenes.',
              'Reforma laboral de 2003, recordada como un giro a la derecha.',
              'Pacto de 2025 con una fuerza de centroizquierda a la que el partido criticaba.' 
            ]
          },
          {
            type: 'p',
            text: 'Desde fuera, la crítica más constante viene de la extrema izquierda y de los verdes, que acusan al partido de moderar el programa y de ceder ante el capital. Les oponen que la austeridad de 2010 a 2014 se aplicó desde un gobierno socialdemócrata y no desde la oposición. La más grave llega de la derecha radical, que señala al SPD como responsable de la política de migración y de la ayuda militar a Ucrania.'
          },
          {
            type: 'p',
            text: 'El problema estructural es demográfico. El electorado del SPD se concentra en grupos de edad alta y en regiones del oeste industrial, y la tasa de afiliación ha caído durante décadas. La dirección ha intentado abrir el partido a las clases medias, con resultados limitados y con la resistencia del aparato local.'
          }
        ]
      },
      {
        id: 'interno',
        heading: 'Vida interna y organización',
        blocks: [
          {
            type: 'p',
            text: 'La organización se estructura en una dirección federal elegida por el congreso y en comités territoriales con mucha autonomía. El partido es una organización de Estado: recibe financiación pública y participa en los comités de empresa a través de sus representantes. Esa doble condición explica por qué su lenguaje es reformista y por qué evita la ruptura institucional.'
          },
          {
            type: 'dl',
            items: [
              ['Congreso federal', 'Designa la dirección y aprueba los programas.'],
              ['Dirección federal', 'Ejecuta el programa entre congreso y congreso.'],
              ['Comités territoriales', 'Organización en los estados y en los distritos.'],
              ['Grupo parlamentario', 'Organización de los diputados en el Bundestag.'],
              ['Financiación', 'Subvención pública y cuotas de afiliados.']
            ]
          },
          {
            type: 'p',
            text: 'La evolución reciente es contradictoria. El partido ha incorporado posiciones sobre el clima, la migración y la defensa que en los años noventa parecían imposibles. Al mismo tiempo se ha apartado de la cooperación estrecha con los sindicatos que definía su identidad, y la elección de Bärbel Bas como presidenta en abril de 2025 apunta en esa dirección.'
          },
          {
            type: 'p',
            text: 'Nuestra historia conoce la división interna, en 1959 y en 1972, con un ala reformista y otra más radical. Esta última perdió influencia, pero sigue viva en la organización local. El resultado es un partido que rechaza las mayorías absolutas y que prefiere negociar.'
          }
        ]
      }
    ],
    related: ['socialdemocracia', 'reformismo', 'sindicalismo'],
    categories: ['SPD', 'Alemania'],
    references: [
      {
        title: 'Das Programm der Sozialdemokratischen Partei Deutschlands',
        author: 'Congreso de la SPD en Erfurt',
        publisher: 'Partido del SPD, Erfurt (rec. por Friedrich-Ebert-Stiftung)',
        year: 1891,
        type: 'documento',
        url: 'https://collections.fes.de/publikationen/download/pdf/1976558'
      },
      {
        title: 'Grundlagen und Aufgaben der deutschen Sozialpolitik',
        author: 'Peter Graf Kielmansegg',
        publisher: 'Rotbuch Verlag, Berlín',
        year: 1986,
        type: 'libro'
      },
      {
        title: 'Die SPD: Biographie einer Partei',
        author: 'Steffen Kailitz',
        publisher: 'Friedrich-Ebert-Stiftung, Bonn',
        year: 2021,
        type: 'libro'
      },
      {
        title: 'Gesetz zur Förderung der Beschäftigung (Job Creation Act)',
        author: 'Bundestag y Bundesrat',
        publisher: 'Bundesgesetzblatt, Berlín',
        year: 2003,
        type: 'ley'
      },
      {
        title: 'Zweiter Bericht über die Umsetzung der Nationalen Beschäftigungsstrategie',
        author: 'Gobierno federal de Alemania',
        publisher: 'Deutscher Bundestag, Berlín',
        year: 2015,
        type: 'informe'
      },
      {
        title: 'Koalitionsvertrag 2025 zwischen CDU, CSU und SPD',
        author: 'CDU, CSU y SPD',
        publisher: 'Berlín',
        year: 2025,
        type: 'documento'
      },
      {
        title: 'Endgültiges Ergebnis der Bundestagswahl 2021',
        author: 'Der Bundeswahlleiter',
        publisher: 'Bundeswahlleiter, Karlsruhe',
        year: 2021,
        type: 'dato'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
