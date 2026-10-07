(function (PW) {
  PW.parties = PW.parties || {};
  'use strict';
  PW.parties['cdu'] = {
    kind: 'partido',
    slug: 'cdu',
    title: 'CDU (Alemania)',
    name: 'Christlich Demokratische Union Deutschlands',
    shortName: 'CDU',
    subtitle: 'Partido de la centroderecha alemán nacido en 1945 en la zona occidental de ocupación, que gobernó de forma ininterrumpida entre 1949 y 1966 y que volvió al poder en 2025 con Friedrich Merz',
    country: 'Alemania',
    countryCode: 'de',
    countryRegion: 'Europa central',
    founded: 1945,
    headquarters: 'Bonn, Alemania',
    leader: 'Friedrich Merz (líder federal desde 2022, canciller desde 2025)',
    ideologyLabel: 'Centroderecha',
    ideology: ['democracia-cristiana', 'conservadurismo', 'liberalismo'],
    colors: ['#000000'],
    inGovernment: 'En el gobierno como fuerza principal desde mayo de 2025',
    updated: '2026-09-27',
    summary: 'Partido de la centroderecha alemán nacido en 1945 en la zona occidental de ocupación, que gobernó de forma ininterrumpida entre 1949 y 1966 y que volvió al poder en mayo de 2025 bajo el liderazgo de Friedrich Merz.',
    infobox: {
      caption: 'CDU',
      color: '#000000',
      rows: [
        ['Fundación', '1945, en la zona occidental de ocupación'],
        ['Líder', 'Friedrich Merz, predsidente'],
        ['Sede', 'Bonn, Alemania'],
        ['Ideología', 'Centroderecha, democracia cristiana'],
        ['Presidente fundador', 'Konrad Adenauer'],
        ['Programa de referencia', 'Programa de Dusseldorf, 1955'],
        ['Posición actual', 'Gobierno desde mayo de 2025'],
        ['Aliado propio', 'CSU, en Baviera']
      ]
    },
    sections: [
      {
        id: 'ideologia',
        heading: 'Doctrina y afinidades',
        blocks: [
          {
            type: 'p',
            text: 'La doctrina de la CDU se define en el Programa de Dusseldorf de 1955, que aceptó la economía social de mercado como marco económico único para toda la organización. El término lo acuñó Alfred Müller-Armack y lo puso en práctica Ludwig Erhard, ministro de Economía entre 1949 y 1957 y canciller entre 1963 y 1966. El marco económico se combina con el artículo 14 de la Ley Fundamental, que obliga al Estado a proteger la propiedad privada y a garantizar la justicia social.'
          },
          {
            type: 'p',
            text: 'La CDU se define como partido de la democracia cristiana sin contenido confesional estricto. De ella vienen fundadores como Peter Altmaier y Jakob Kaiser. La separación de la Iglesia tiene un efecto práctico: abre la organización a creyentes de cualquier religión y a no creyentes. En la práctica el partido se ha definido más por el conservadurismo económico y por la cuestión del Estado que por la doctrina social.'
          },
          {
            type: 'ul',
            items: [
              'Defensa del orden público y de la familia como institución social.',
              'Apoyo a la economía social de mercado frente a cualquier economía dirigida.',
              'El Estado de derecho como eje de la política exterior y comercial.',
              'Dimensión europea entendida como marco de la reconstrucción nacional.'
            ]
          },
          {
            type: 'note',
            text: 'La economía social de mercado no es lo mismo que el liberalismo económico, aunque con frecuencia se confundan. El Estado mantiene la negociación colectiva, la protección frente a riesgos sociales y una fiscalidad alta, y el mercado sigue siendo el mecanismo de asignación. Esa combinación es la que la formación ha defendido desde 1955.'
          }
        ]
      },
      {
        id: 'historia',
        heading: 'Nacimiento, crisis y retorno',
        blocks: [
          {
            type: 'p',
            text: 'La CDU nació en 1945 en la zona occidental de ocupación, tras la disolución de las asociaciones católicas y de los partidos del régimen anterior. El plan Baker de 1945 preveía esa medida, pero Adenauer la esquivó y construyó una formación nueva con adherentes muy diversos. Con Adenauer al frente, el partido ganó las elecciones de 1949 y gobernó de forma ininterrumpida hasta 1966, la etapa más larga de gobierno continuo de la República Federal.'
          },
          {
            type: 'ol',
            items: [
              '1945: fundación en la zona occidental de ocupación.',
              '1948: creación en Baviera de la CSU, que sigue siendo socia.',
              '1949: victoria electoral y presidencia de Adenauer hasta 1966.',
              '1966: relevo por Ludwig Erhard tras la crisis económica.',
              '1972: el SPD forma gobierno con apoyo de los liberales.',
              '1982: Helmut Kohl llega al poder en una gran coalición.',
              '1990: reunificación del país con Kohl como canciller.',
              '2021: Olaf Scholz sustituye a Merkel con una coalición tripartita.',
              '2025: Friedrich Merz forma gobierno con el SPD.'
            ]
          },
          {
            type: 'p',
            text: 'El periodo de 1966 a 1982 fue la mayor crisis interna de la organización. La crisis económica de 1966 y 1967, la derrota electoral de 1972 y el peso de la CSU en Baviera debilitaron a la formación. La etapa se cierra con el gobierno de gran coalición de 1982 y con la llegada de Kohl al poder, que cambió el signo de la historia del partido.'
          },
          {
            type: 'p',
            text: 'La etapa de Kohl cambió la escala del partido. La reunificación de 1990 convirtió la cuestión alemana en el eje de la política exterior. Después vienen dieciséis años de gobierno de Merkel, la etapa más larga de un canciller en la historia del país, y luego el relevo de 2021 con Scholz y el retorno al poder en 2025 con Merz.'
          },
          {
            type: 'figure',
            caption: 'Sufragio federal alemán: 34,8 % en 1949, 36,2 % en 1953, 33,8 % en 1961 y 24,1 % en 2021, su peor resultado desde la fundación.',
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
              ['Konrad Adenauer', '1949-1966', 'Mayoría', 'Recuperación económica y reconciliación con Francia.'],
              ['Ludwig Erhard', '1966-1972', 'Mayoría', 'Planes de ayuda al desarrollo y mercado interior.'],
              ['Helmut Kohl', '1982-1998', 'Gran coalición y mayoría', 'Reunificación del país en 1990.'],
              ['Angela Merkel', '2005-2021', 'Gran coalición y mayoría', 'Política de austeridad después de 2010.'],
              ['Friedrich Merz', '2025-', 'Mayoría bipartita', 'Gasto militar y endurecimiento migratorio.']
            ]
          },
          {
            type: 'p',
            text: 'El momento más conflictivo llegó en 2010, cuando la austeridad en la zona del euro se aplicó en Alemania con un ritmo más rápido que en otros países. La Cancillería lo justificó con la vigilancia de la deuda pública y con la necesidad de credibilidad ante los mercados. La actitud se consolidó en 2015, cuando el Bundestag aprobó el freno a la deuda, un mecanismo que limitó el gasto público hasta 2024. El resultado fue un crecimiento modesto y una fuerte posición negociadora en la [[org:union-europea|Unión Europea]].'
          },
          {
            type: 'quote',
            text: 'Se garantiza la propiedad privada. Su uso debe estar en consonancia con las necesidades sociales y con las condiciones de una vida social justa.',
            cite: 'Ley Fundamental de la República Federal de Alemania, artículo 14, apartado 1',
            author: 'Texto constitucional, traducción castellana'
          },
          {
            type: 'p',
            text: 'La protección de la propiedad es el fundamento que la formación cita cada vez que se discute la fiscalidad. En la práctica la CDU ha aplicado rebajas fiscales a las empresas y ha aceptado la jubilación a los 65 años, medida cercana a la del SPD. Ese reparto explica en parte por qué la cooperación entre ambos partidos ha funcionado en el gobierno de 2025.'
          },
          {
            type: 'p',
            text: 'Hay un giro documentado en los años recientes. En 2021 la formación aceptó por primera vez el principio de una deuda pública superior al límite del tres por ciento, y desde entonces su programa económico se ha desplazado hacia el liberalismo. En 2025 el gobierno de Merz recuperó la inversión militar y endureció la política migratoria, en contraste con la etapa anterior.'
          },
          {
            type: 'p',
            text: 'La política exterior ha sido el terreno donde la formación más ha cambiado. En los años ochenta Kohl mantuvo la vía del reconocimiento de la frontera con Polonia y del despliegue de tropas en el territorio de la antigua República Democrática Alemana. La decisión de usar el derecho de veto en el Consejo de Seguridad en 2003, contra la intervención en Irak, marca un giro clásico del partido. Desde entonces la formación apoya la [[org:otan|OTAN]] y el mantenimiento de la alianza occidental.'
          },
          {
            type: 'p',
            text: 'El dato de 2025 es el más reciente y el más incómodo para la doctrina. La formación gobierna con mayoría bipartita y con el apoyo de un partido que en 2005 la acusó de empujar la reforma laboral que recortó las prestaciones. El acuerdo de 2025 incluye un freno a la migración y un aumento del gasto militar, dos temas centrales del programa de la derecha. Es la primera vez que ese programa se aplica con un socio que no lo comparten entero.'
          },
          {
            type: 'note',
            text: 'Conviene no confundir coherencia con continuismo. La formación sostiene que su programa se cumple entero desde 1949, y la práctica electoral muestra que solo se cumple por tramos. Esa tensión interna es la que explica su resistencia a los cambios de signo.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas internas y externas',
        blocks: [
          {
            type: 'p',
            text: 'La crítica más dura tiene dos frentes. En la polémica sobre el papel de las fuerzas armadas alemanas en la guerra, abierta en 1986, la formación defendió que el ejército se limitó a defender el propio territorio, y esa postura se le ha considerado una falta de cuentas. La segunda crítica es la de la austeridad y la del retraso en la transición energética, que la propia formación ha tenido que reconocer.'
          },
          {
            type: 'ul',
            items: [
              'Por el pasado: defensa de la versión que exoneraba al ejército alemán.',
              'Por la austeridad de 2010 a 2014 y por el freno a la deuda aprobado en 2015.',
              'Por el giro hacia la derecha en las políticas de migración y de asilo desde 2015.',
              'Por el peso de la economía en el programa y por el abandono de la doctrina social.'
            ]
          },
          {
            type: 'p',
            text: 'Desde dentro, la crítica más constante es la de la base. La etapa de Merkel duró dieciséis años y dejó un partido con una jerarquía marcada y con pocas oportunidades para los frentes locales. Merz ha tenido que reconstruir esa relación con una campaña interna abierta en 2024, y el resultado fue una victoria estrecha. La prueba de esa relación está en el acuerdo con el SPD de 2025.'
          },
          {
            type: 'p',
            text: 'La dificultad electoral es el otro frente. La formación pasó del 36,2 % en 1953 al 24,1 % en 2021, su peor resultado desde 1949. La competencia de la Alternative für Deutschland ha obligado a desplazar el discurso hacia la derecha, sobre todo en migración y en identidad.'
          }
        ]
      },
      {
        id: 'interno',
        heading: 'Vida interna y organización',
        blocks: [
          {
            type: 'p',
            text: 'La estructura interna combina una presidencia federal con un comité ejecutivo amplio. Las decisiones se toman en el comité y en la asamblea federal de delegados. La CSU funciona como socio propio dentro de la alianza, lo que obliga a pactar antes de cada candidatura conjunta.'
          },
          {
            type: 'dl',
            items: [
              ['Presidencia federal', 'Lidera el partido y coordina la estrategia.'],
              ['Comité ejecutivo', 'Aprueba las decisiones entre asambleas.'],
              ['Asamblea federal', 'Delegados de los estados; aprueba los programas.'],
              ['Unión juvenil', 'Organización juvenil de la formación.'],
              ['Grupo parlamentario', 'Los diputados de CDU y CSU en el Bundestag.']
            ]
          },
          {
            type: 'p',
            text: 'La evolución reciente se puede resumir en una palabra: apertura. El partido acepta hoy posiciones que en los años noventa rechazaba, como el aumento de la deuda pública o la revisión del gasto militar. La causa es la competencia de la derecha populista, que ha obligado a desplazar el programa hacia la derecha.'
          },
          {
            type: 'p',
            text: 'La relación con la CSU no está exenta de tensión. En Baviera el partido tiene su propia dirección y se ha opuesto repetidamente a las decisiones federales que no le convenían. La etapa de Merz ha mejorado esa relación, y en las elecciones regionales de octubre de 2025 el bipartito bávaro recuperó posiciones.'
          }
        ]
      }
    ],
    related: ['democracia-cristiana', 'conservadurismo', 'liberalismo'],
    categories: ['CDU', 'Alemania'],
    references: [
      {
        title: 'Grundsatzprogramm der Christlich Demokratischen Union Deutschlands',
        author: 'CDU',
        publisher: 'CDU, Dusseldorf',
        year: 1955,
        type: 'documento'
      },
      {
        title: 'Grundgesetz für die Bundesrepublik Deutschland',
        author: 'República Federal de Alemania',
        publisher: 'Bundesgesetzblatt, Bonn',
        year: 1949,
        type: 'ley'
      },
      {
        title: 'Gesetz zur Änderung des Grundgesetzes (Artikel 91c, 91d, 104b, 109, 109a, 115, 143d)',
        author: 'Bundestag y Bundesrat',
        publisher: 'Bundesgesetzblatt, Berlín',
        year: 2009,
        type: 'ley',
        url: 'https://www.bgbl.de/xaver/bgbl/start.xav?start=%2F%2F*%5B%40attr_id%3D\'bgbl109048.pdf\'%5D'
      },
      {
        title: 'Beschluss des Europäischen Rates vom 25. März 2011 zum Stabilitäts- und Wachstumspakt',
        author: 'Consejo Europeo',
        publisher: 'Consejo de la Unión Europea, Bruselas',
        year: 2011,
        type: 'documento',
        url: 'https://eur-lex.europa.eu/eli/dec/2011/331/oj'
      },
      {
        title: 'Endgültiges Ergebnis der Bundestagswahl 2025',
        author: 'Der Bundeswahlleiter',
        publisher: 'Bundeswahlleiter, Karlsruhe',
        year: 2025,
        type: 'dato'
      },
      {
        title: 'Koalitionsvertrag 2025 zwischen CDU, CSU und SPD',
        author: 'CDU, CSU y SPD',
        publisher: 'Berlín',
        year: 2025,
        type: 'documento'
      },
      {
        title: 'Politik der Mitte: Das Dilemma der christlich-demokratischen Union',
        author: 'Sebastian Hettesheimer',
        publisher: 'C. H. Beck, Múnich',
        year: 2020,
        type: 'libro'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
