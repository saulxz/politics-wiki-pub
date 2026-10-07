(function (PW) {
  'use strict';
  PW.gobiernos = PW.gobiernos || {};
  PW.gobiernos['austria'] = {
    kind: 'gobierno',
    slug: 'austria',
    title: 'Austria: la cooperacion del \'proporzionalismo\' con la \'derecha populista\' en el poder',
    subtitle: 'República federal de nueve provincias con una constitución rígida de 1920 en la que ningún partido alcanza por sí solo la mayoría, de modo que el Gobierno se forma por acuerdos entre varias fuerzas y el 3 de marzo de 2025 quedó juramentada una coalición de tres partidos que dejó fuera a la formación populista que había ganado las elecciones',
    category: 'Gobierno',
    tags: ['república federal', 'constitución rígida', 'proporzionalismo', 'coalición', 'neutralidad', 'parlamento bicameral'],
    region: 'Europa Occidental',
    timeFrame: '1920-actualidad',
    updated: '2026-09-28',
    summary: 'República federal de Europa occidental en la que los parlamentos de nueve provincias eligen a los sesenta miembros de la Cámara alta, un tribunal de catorce jueces anula las normas contrarias a la Constitución y, desde 1920, ningún partido ha obtenido por sí solo la mayoría en la Cámara de diputados, lo que obliga a formar el Gobierno por acuerdos con la oposición',
    actors: [
      { name: 'Presidente federal', role: 'jefe del Estado, jura al Gobierno, nombra al canciller y puede disolver el Nacionalrat a propuesta del propio Gobierno', power: 'alta' },
      { name: 'Consejo de Ministros', role: 'órgano ejecutivo que dirige el canciller, con trece ministros federales además de él, y aplica las leyes aprobadas por el Parlamento', power: 'alta' },
      { name: 'Nacionalrat', role: 'cámara de 183 diputados elegidos por sufragio directo en circunscripciones comarcales, de la que depende el Gobierno', power: 'alta' },
      { name: 'Bundesrat', role: 'cámara de 60 miembros enviados por los parlamentos provinciales, con derecho de suspensión y de consentimiento en materias que recortan competencias de las provincias', power: 'media' },
      { name: 'Tribunal Constitucional', role: 'órgano de catorce jueces y seis suplentes que anula las normas contrarias a la Constitución y resuelve las quejas de los particulares', power: 'media' },
      { name: 'Unión Europea', role: 'marco al que Austria está incorporada desde 1995 y en el que mantiene reservas sobre una política de defensa común', power: 'media' }
    ],
    infobox: {
      caption: 'Austria, República federal',
      color: '#c8102e',
      rows: [
        ['Período', '1920-actualidad, con un intervalo autoritario entre 1934 y 1945'],
        ['Forma de Estado', 'República federal dividida en nueve provincias, con un presidente federal de título presidencial'],
        ['Constitución vigente', 'Ley Federal Constitucional de 1 de octubre de 1920 (Bundes-Verfassungsgesetz)'],
        ['Jefatura del Estado', 'Presidente federal, elegido por la reunión de ambas cámaras y no más de dos mandatos de seis años'],
        ['Presidente en el cargo', 'Alexander Van der Bellen, desde 2016'],
        ['Jefe de gobierno', 'Christian Stocker, juramentado el 3 de marzo de 2025 al frente de una coalición de tres partidos'],
        ['Parlamento', 'Nacionalrat de 183 diputados y Bundesrat de 60 miembros, 243 en total']
      ]
    },
    sections: [
      {
        id: 'origen',
        heading: 'Origen: el final de la monarquía y la constitución federal de 1920',
        blocks: [
          {
            type: 'p',
            text: 'Austria dejó de ser una monarquía el 12 de noviembre de 1918, cuando abdicó la última emperatriz y se declaró la República. Lo que salió de entonces fue un Estado federal de nueve provincias con parlamentos propios, no una república unitaria.'
          },
          {
            type: 'p',
            text: 'La Ley Federal Constitucional de 1 de octubre de 1920, el Bundes-Verfassungsgesetz, organiza esa forma. Su artículo 1 afirma que Austria es una República democrática y que su derecho procede del pueblo, el artículo 2 enumera las nueve provincias y el artículo 6 establece que existe una ciudadanía única.'
          },
          {
            type: 'quote',
            text: 'Die deutsche Sprache ist, unbeschadet der den sprachlichen Minderheiten bundesgesetzlich eingeräumten Rechte, die Staatssprache der Republik.',
            cite: 'Ley Federal Constitucional, artículo 8, párrafo primero',
            author: 'Estado austriaco'
          },
          {
            type: 'p',
            text: 'El artículo 8 es la norma más característica del texto. La lengua alemana es la lengua del Estado y debe usarse en el servicio de todas las autoridades y en la enseñanza, y en el tercer párrafo se reconoce la lengua de signos austriaca como lengua propia.'
          },
          {
            type: 'p',
            text: 'Ese mismo artículo reserva a la legislación federal los derechos de las minorías lingüísticas, que en Austria son eslavas y croatas en el sur y húngaras en el centro. La elección de una lengua mayoritaria como norma de servicio es lo que hace del caso austriaco una excepción dentro de la Unión Europea.'
          },
          {
            type: 'table',
            head: ['Fecha', 'Hito', 'Consecuencia constitucional'],
            rows: [
              ['12 de noviembre de 1918', 'Abdicación de la última emperatriz y proclamación de la República', 'Queda sin efecto la Constitución de la monarquía'],
              ['1 de octubre de 1920', 'Aprobación de la Ley Federal Constitucional', 'Se crea el bicameralismo con Nacionalrat y Bundesrat'],
              ['10 de octubre de 1920', 'Plebiscito sobre la región de Carintia', 'Se fija la frontera con la Yugoslavia de entonces'],
              ['Febrero de 1934', 'El Gobierno de Engelbert Dollfuß suspende el Parlamento', 'La Constitución queda vaciada de efecto'],
              ['12 de marzo de 1938', 'Anschluss, anexión por la Alemania nazi', 'El Estado austriaco desaparece hasta 1945'],
              ['15 de mayo de 1955', 'Firma del Tratado de Estado en el palacio de Belvedere', 'Austria recupera la soberanía'],
              ['26 de octubre de 1955', 'Aprobación de la ley constitucional de neutralidad', 'Austria no entrará en alianzas militares'],
              ['12 de junio de 1994', 'Referendum de adhesión a la Unión Europea', 'Segunda y última consulta federal']
            ]
          },
          {
            type: 'p',
            text: 'La Constitución vigente es, por tanto, la segunda. La primera República duró hasta que el Gobierno de Dollfuß suspendió el Parlamento en febrero de 1934, y el Anschluss del 12 de marzo de 1938 anuló el Estado austriaco durante siete años.'
          },
          {
            type: 'p',
            text: 'A su regreso en 1945 la Constitución de 1920 se puso de nuevo en vigor, primero con el texto provisional de 30 de abril y después con la ley de 1 de octubre de ese año, que mantuvo suspendidos los derechos fundamentales más vulnerados bajo el nacionalsocialismo y los devolvió poco a poco.'
          },
          {
            type: 'p',
            text: 'La rigidez del texto es la otra mitad de su singularidad. El artículo 44 exige dos tercios de los votos emitidos en ambas cámaras para aprobar una ley constitucional, y solo obliga a consultar al electorado en una revisión total del mismo.'
          },
          {
            type: 'p',
            text: 'Austria ha celebrado exactamente dos referenda federales en toda su historia: el 5 de noviembre de 1978 sobre la central nuclear de Zwentendorf, rechazado, y el 12 de junio de 1994 sobre la adhesión a la Unión Europea, aprobado. Desde 2008 ningún Gobierno federal ha alcanzado la mayoría reforzada, de modo que las reformas de calado se aplazan.'
          }
        ]
      },
      {
        id: 'proporzionalismo',
        heading: 'Proporzionalismo: por qué ningún partido puede gobernar solo',
        blocks: [
          {
            type: 'p',
            text: 'La ley electoral de 1992 fija el Nacionalrat en 183 diputados y los reparte en tres etapas: 39 circunscripciones comarcales, nueve de provincia con el método de D\'Hondt, y una compensación proporcional en todo el país que corrige el desajuste entre ambos niveles.'
          },
          {
            type: 'p',
            text: 'El umbral de acceso es del 4 por ciento de los votos válidos, con una excepción de mandato base en las circunscripciones comarcales. No hay compensación de mayoría ni mandato sobrante, de modo que ningún partido puede alcanzar la mayoría absoluta por sí solo.'
          },
          {
            type: 'table',
            head: ['Partido', 'Votos 2024', 'Porcentaje', 'Escaños 2024', 'Escaños 2019'],
            rows: [
              ['FPÖ', '1.408.512', '28,8 %', '57', '31'],
              ['ÖVP', '1.282.734', '26,3 %', '51', '71'],
              ['SPÖ', '1.032.233', '21,1 %', '41', '40'],
              ['NEOS', '446.379', '9,1 %', '18', '15'],
              ['GRÜNE', '402.109', '8,2 %', '16', '26'],
              ['KPÖ', '116.891', '2,4 %', '0', '0'],
              ['Total con representación', '4.571.067', '93,6 %', '183', '183']
            ]
          },
          {
            type: 'p',
            text: 'El resultado del 29 de septiembre de 2024 fue elocuente. La formación populista fue la más votada en cuatro de las nueve provincias, el partido conservador ganó en otras cuatro y el socialdemócrata solo en la capital. Ninguno pasó del 30 por ciento de los votos.'
          },
          {
            type: 'p',
            text: 'La Constitución agrava esa situación con un poder de disolución muy contenido. El artículo 91 permite al presidente federal disolver la Cámara baja, pero solo a propuesta del Gobierno y una sola vez por el mismo motivo, de modo que ningún presidente de la Segunda República lo ha ejercido nunca.'
          },
          {
            type: 'p',
            text: 'El artículo 76 ofrece al canciller un recurso distinto y muy usado: comunicar al presidente que ha perdido la confianza de la Cámara y que quiere terminar el mandato, lo que obliga a convocar elecciones precoces. Un canciller sin mayoría puede gobernar, pero solo aceptando los títulos de la oposición en cada votación.'
          },
          {
            type: 'ul',
            items: [
              'Una mayoría que el sistema no concede y una regla que premia a los partidos segundo y tercero obligan al primero a contar con ellos: es la mayoría constructiva, que en Austria se conoce por el nombre de Paktierung.',
              'Esa necesidad explica que desde 1945 la mayor parte del siglo la hayan gobernado acuerdos entre dos o tres fuerzas, y que la cooperación entre el partido conservador y el socialdemócrata sea la constante y no la excepción.',
              'El mecanismo que obliga a cooperar es el mismo que impide gobernar a un partido por sí solo, y por eso la formación que más votos obtiene es también la que más presión negociadora tiene.',
              'La contrapartida es la debilidad del mandato: ninguna de estas coaliciones puede sobrevivir a un escándalo sin arriesgar su propia existencia, y por eso los asuntos graves se trasladan al Parlamento como juzgamiento de la responsabilidad del Gobierno.'
            ]
          },
          {
            type: 'p',
            text: 'Las alianzas construidas así reciben el nombre de Zuckerlkoalition, coalición de caramelos, porque cada parte consigue algo y nadie tiene mayoría para romperla.'
          },
          {
            type: 'p',
            text: 'Ese es el marco en el que hay que leer lo que ocurrió en 2025, y también lo que ocurrió en 2000. En ambas ocasiones una fuerza populista ganó o casi ganó y el sistema no se rompió: se ocupó de construir día a día la mayoría que le faltaba.'
          }
        ]
      },
      {
        id: 'parlamento',
        heading: 'Parlamento bicameral y Tribunal Constitucional',
        blocks: [
          {
            type: 'p',
            text: 'El Parlamento austriaco tiene dos cámaras. La alta, el Bundesrat, reúne 60 miembros que no elige el electorado sino los parlamentos de las nueve provincias, con mandato libre y en proporción a su fuerza, de modo que su composición cambia con cada elección provincial.'
          },
          {
            type: 'p',
            text: 'El número de representantes de cada provincia lo fija una resolución presidencial según los ciudadanos austriacos residentes, con un máximo de doce para la mayor y un mínimo de tres para la menor. En total son 183 diputados y 60 miembros, y la presidencia de la Cámara alta rota cada seis meses por orden alfabético de provincias.'
          },
          {
            type: 'table',
            head: ['Cámara', 'Miembros', 'Origen de los miembros', 'Poderes propios'],
            rows: [
              ['Nacionalrat', '183', 'Sufragio directo en 39 circunscripciones comarcales', 'Votación de leyes y de confianza al Gobierno'],
              ['Bundesrat', '60', 'Envío de los nueve parlamentos provinciales', 'Suspensión de leyes y consentimiento en materias que afectan a las provincias']
            ]
          },
          {
            type: 'p',
            text: 'La Cámara alta tiene derecho de suspensión contra las leyes aprobadas por la baja, salvo en materia presupuestaria. Desde 1985 dispone además de un derecho de consentimiento expreso para las leyes constitucionales que recorten competencias provinciales, y desde 1989 ese derecho se extiende a los tratados que afecten al ámbito autónomo de las provincias.'
          },
          {
            type: 'p',
            text: 'Es un modelo de [[federalismo|federalismo]] puro, más cercano al de [[gob:alemania|Alemania]] que al de un senado electivo, y explica por qué en Austria ninguna reforma que afecte a las provincias puede promulgarse sin el acuerdo de sus representantes.'
          },
          {
            type: 'p',
            text: 'El arbitraje de la constitucionalidad corresponde al Verfassungsgerichtshof, que se compone de catorce jueces: un presidente, una vicepresidenta y doce miembros más, con seis suplentes que deciden cuando falta uno de los titulares.'
          },
          {
            type: 'p',
            text: 'Los nombramientos los firma el presidente federal, pero la propuesta del presidente y la vicepresidenta del Tribunal corresponde al Gobierno, que nombra también seis jueces y tres suplentes. Los otros seis jueces y tres suplentes los proponen entre las dos cámaras, de forma que el Gobierno no controla el Tribunal por sí solo.'
          },
          {
            type: 'p',
            text: 'El mandato de un juez termina con el final del año en que cumple setenta años, y antes solo puede ser destituido por decisión del propio Tribunal. Su competencia abarca el control abstracto de normas, las quejas constitucionales de los particulares, la revisión de las elecciones y de las consultas populares y la acusación de los órganos del Estado. Lo preside Christoph Grabenwarter.'
          },
          {
            type: 'ul',
            items: [
              'El Tribunal funciona como árbitro del conflicto entre el Gobierno federal y las provincias, no como un consejo que sancione a los parlamentarios: sus sentencias anulan la norma y obligan, pero no imponen una conducta individual.',
              'La regla de quórum para aprobar una ley constitucional es la mitad de los miembros presentes, y la mayoría necesaria es de dos tercios de los votos emitidos.',
              'El control político del Gobierno tiene una pieza singular: el voto de desconfianza, que es destructivo porque derriba al Gobierno sin nombrar sucesor y que solo se ha aprobado una vez en la historia de la Segunda República.',
              'Ese voto, el 27 de mayo de 2019, es el que puso fin al gobierno de Sebastian Kurz, y es la razón por la que el artículo 76 importa tanto en la práctica constitucional.'
            ]
          }
        ]
      },
      {
        id: 'gobierno-actual',
        heading: 'El gobierno actual y por qué la derecha populista sigue fuera',
        blocks: [
          {
            type: 'p',
            text: 'El Gobierno vigente fue juramentado el 3 de marzo de 2025 por el presidente Alexander Van der Bellen. Lo dirige Christian Stocker, del partido conservador, tras cinco meses de negociación, y se apoya en el Partido Socialdemócrata y en los liberales de NEOS.'
          },
          {
            type: 'p',
            text: 'Es la primera coalición de tres partidos a nivel federal desde 1949, y ninguno de los tres tiene mayoría propia: suman 110 de los 183 diputados. Si uno de ellos se retira, el Gobierno cae.'
          },
          {
            type: 'p',
            text: 'Esa es la definición operativa del proporzionalismo, y explica por qué el título de esta ficha habla de cooperación: en Austria el poder se ejerce con la oposición dentro, no contra ella.'
          },
          {
            type: 'table',
            head: ['Ministerio', 'Titular', 'Partido'],
            rows: [
              ['Cancillería', 'Christian Stocker', 'ÖVP'],
              ['Vivienda, Cultura y Deportes', 'Andreas Babler, vicecanciller', 'SPÖ'],
              ['Asuntos Europeos e Internacionales', 'Beate Meinl-Reisinger', 'NEOS'],
              ['Finanzas', 'Markus Marterbauer', 'SPÖ'],
              ['Interior', 'Gerhard Karner', 'ÖVP'],
              ['Defensa', 'Klaudia Tanner', 'ÖVP'],
              ['Economía, Energía y Turismo', 'Wolfgang Hattmannsdorfer', 'ÖVP'],
              ['Innovación e Infraestructuras', 'Peter Hanke', 'SPÖ'],
              ['Ciencia e Investigación', 'Eva-Maria Holzleitner', 'SPÖ'],
              ['Trabajo, Sanidad y Asuntos Sociales', 'Korinna Schumann', 'SPÖ'],
              ['Justicia', 'Anna Sporrer', 'SPÖ'],
              ['Educación', 'Christoph Wiederkehr', 'NEOS'],
              ['Agricultura, Regiones y Agua', 'Norbert Totschnig', 'ÖVP']
            ]
          },
          {
            type: 'p',
            text: 'El reparto de carteras sigue los acuerdos de la coalición: los socialdemócratas ocupan Finanzas, Justicia, Infraestructuras, Trabajo, Ciencia y Vivienda, los liberales se llevan Asuntos Europeos, Educación y Economía, y los conservadores Interior, Defensa, Agricultura y la Cancillería.'
          },
          {
            type: 'p',
            text: 'El caso austriaco es la inversa de la hipótesis habitual. La fuerza populista ganó las elecciones con el 28,8 por ciento y 57 escaños, doce puntos y veintiséis escaños más que cuatro años antes, y sin embargo no ocupa ningún cargo en el Gobierno.'
          },
          {
            type: 'p',
            text: 'Tras la dimisión del canciller Karl Nehammer, las conversaciones entre el partido populista y el conservador se rompieron en enero de 2025.'
          },
          {
            type: 'ul',
            items: [
              'El presidente de la República convened a las demás fuerzas y el 27 de febrero de 2025 se firmó un acuerdo que fue juramentado cinco días después.',
              'La ruptura se produjo sobre todo en la política exterior: las condiciones incluían el bloqueo del embargo europeo a Rusia y el rechazo de la política de migración de Bruselas.',
              'El partido populista permanece en la oposición y vota en contra de la legislación del Gobierno.',
              'A septiembre de 2026 el Gobierno mantiene su mayoría y la única discusión interna abierta es la sucesión del vicecanciller.'
            ]
          }
        ]
      },
      {
        id: 'economia',
        heading: 'Economía sin recursos naturales y finanzas públicas',
        blocks: [
          {
            type: 'p',
            text: 'Austria no posee recursos naturales relevantes y su economía se apoya en los servicios, la industria manufacturera y la exportación. El producto interior bruto alcanzó 514.300 millones de euros en 2025, con un crecimiento real del 0,8 por ciento.'
          },
          {
            type: 'table',
            head: ['Indicador', '2023', '2024', '2025'],
            rows: [
              ['Crecimiento real del producto', '-0,8 %', '-0,7 %', '0,8 %'],
              ['Déficit público sobre el producto', '—', '4,6 %', '4,2 %'],
              ['Deuda pública sobre el producto', '—', '80,0 %', '81,5 %'],
              ['Paro según la definición nacional', '6,4 %', '7,0 %', '7,4 %'],
              ['Inflación medida por el índice de precios', '7,8 %', '2,9 %', '3,6 %']
            ]
          },
          {
            type: 'ul',
            items: [
              'La deuda pública llegó a 418.100 millones de euros a cierre de 2025, y el déficit alcanzó 21.500 millones, un 4,2 por ciento del producto, por encima del límite europeo del 3 por ciento.',
              'El 1 de enero de 2026 Austria contaba con 9.215.956 habitantes, de los que el 20,4 por ciento no tenía ciudadanía austriaca.',
              'El crecimiento demográfico fue del 0,2 por ciento, el más bajo desde 2009, lo que confirma que el aumento de la población depende de la inmigración.'
            ]
          }
        ]
      },
      {
        id: 'politica-exterior',
        heading: 'Neutralidad permanente y política exterior',
        blocks: [
          {
            type: 'p',
            text: 'Austria es neutral desde 1955, pero el dato tiene una precisión que suele pasarse por alto: el Tratado de Estado firmado el 15 de mayo de 1955 en el palacio de Belvedere no contiene ninguna mención a la neutralidad.'
          },
          {
            type: 'quote',
            text: 'Österreich hat aus freien Stücken seine immerwährende Neutralität bekundet und sich verpflichtet, keinen militärischen Bündnissen beizutreten.',
            cite: 'Ley constitucional sobre la neutralidad, de 26 de octubre de 1955',
            author: 'Estado austriaco'
          },
          {
            type: 'ul',
            items: [
              'El Gobierno se había comprometido en las negociaciones a ejercer una neutralidad del tipo de la suiza, y la ley constitucional se aprobó el 26 de octubre de 1955, un día después de cumplirse el plazo de retirada de las tropas de ocupación.',
              'La consecuencia es una restricción permanente: Austria no entrará en alianzas militares ni admitirá bases de tropas extranjeras, y por eso no pertenece a la [[org:otan|OTAN]] ni a ninguna otra organización defensiva.',
              'Esa condición se negocia cada vez que se habla de una política común de defensa en la [[org:union-europea|Unión Europea]], y el Gobierno actual la ha invocado para excluir la defensa de las nuevas prioridades de gasto europeo.',
              'Austria fue miembro del Consejo de Seguridad de la [[org:onu|ONU]] entre 1956 y 1974, y el 3 de junio de 2026 fue elegida para un asiento no permanente en 2027 y 2028, su cuarta vez en el órgano.'
            ]
          }
        ]
      },
      {
        id: 'perspectivas',
        heading: 'Lengua, ciudadanía y límites del modelo',
        blocks: [
          {
            type: 'p',
            text: 'Dos decisiones recientes ilustran los límites del modelo. En mayo de 2019 el Parlamento derribó al Gobierno con un voto de desconfianza, la primera vez que lo conseguía en la Segunda República.'
          },
          {
            type: 'ul',
            items: [
              'La prohibición de la toca en las escuelas para las niñas menores de catorce años fue aprobada el 11 de diciembre de 2025, y entró en vigor el 1 de septiembre de 2026.',
              'Se aprobó con los votos de cuatro de los cinco partidos con representación, y únicamente con el voto en contra de los écatas, que ya ha anunciado que la recurrirá.',
              'La ley de ciudadanía exige diez años de residencia legal y continua para la naturalización, y seis si se acredita integración mediante un examen de lengua y valores.',
              'El Gobierno ha anunciado que elevará el nivel lingüístico exigido y unirá un curso obligatorio de ciudadanía, una reforma que sigue en preparación.',
              'La combinación de una mayoría repartida con una Constitución rígida obliga a que cada reforma sea una negociación.'
            ]
          }
        ]
      }
    ],
    categories: ['Gobiernos', 'Europa occidental', 'Instituciones políticas', 'Derecho constitucional'],
    related: ['federalismo', 'pacifismo', 'socialdemocracia', 'liberalismo', 'org:union-europea'],
    references: [
      {
        title: 'Bundes-Verfassungsgesetz vom 1. Oktober 1920',
        author: 'Republik Österreich',
        publisher: 'Parlamento austriaco, Viena',
        year: 1920,
        type: 'ley',
        url: 'https://www.parlament.gv.at/verstehen/politisches-system/bundesverfassung/index.html'
      },
      {
        title: 'Der Staatsvertrag vom 15. Mai 1955',
        author: 'Österreichischer Parlament',
        publisher: 'Parlamento austriaco, Viena',
        year: 1955,
        type: 'ley',
        url: 'https://www.parlament.gv.at/verstehen/historisches/1945-1995/staatsvertrag'
      },
      {
        title: 'Nationalratswahl 2024, endgültiges Endergebnis',
        author: 'Bundesministerium für Inneres',
        publisher: 'Ministerio del Interior, Viena',
        year: 2024,
        type: 'dato',
        url: 'https://www.bundeswahlen.gv.at/2024/nr/'
      },
      {
        title: 'Wahl-2024-Endergebnis liegt vor',
        author: 'Österreichischer Parlament',
        publisher: 'Parlamento austriaco, Viena',
        year: 2024,
        type: 'dato',
        url: 'https://www.parlament.gv.at/aktuelles/news/Wahl-2024-Endergebnis-liegt-vor'
      },
      {
        title: 'Informationen über den Bundesrat',
        author: 'Österreichischer Parlament',
        publisher: 'Parlamento austriaco, Viena',
        year: 2026,
        type: 'dato',
        url: 'https://www.parlament.gv.at/verstehen/bundesrat'
      },
      {
        title: 'Das Misstrauensvotum im Nationalrat',
        author: 'Österreichischer Parlament',
        publisher: 'Parlamento austriaco, Viena',
        year: 2026,
        type: 'dato',
        url: 'https://www.parlament.gv.at/verstehen/kontrolle/politische-kontrolle/misstrauensvotum'
      },
      {
        title: 'Verfassungsrichterinnen und Verfassungsrichter: Überblick',
        author: 'Verfassungsgerichtshof',
        publisher: 'Tribunal Constitucional, Viena',
        year: 2026,
        type: 'dato',
        url: 'https://www.vfgh.gv.at/verfassungsgerichtshof/verfassungsrichter/verfassungsrichter_ueberblick.de.html'
      },
      {
        title: 'Amtierende Österreichische Bundesregierung',
        author: 'Bundeskanzleramt',
        publisher: 'Cancillería Federal, Viena',
        year: 2026,
        type: 'dato',
        url: 'https://www.oesterreich.gv.at/de/themen/transparenz_und_partizipation_in_der_demokratie/demokratie-und-wahlen/demokratie/4/Amtierende-%C3%96sterreichische-Bundesregierung'
      },
      {
        title: 'The Austrian Federal Government, Ministers',
        author: 'Bundeskanzleramt',
        publisher: 'Cancillería Federal, Viena',
        year: 2026,
        type: 'dato',
        url: 'https://www.bundeskanzleramt.gv.at/en/federal-chancellery/the-austrian-federal-government/ministers.html'
      },
      {
        title: 'Öffentliche Finanzen 2025',
        author: 'Statistik Austria',
        publisher: 'Statistik Austria, Viena',
        year: 2026,
        type: 'informe',
        url: 'https://www.statistik.at/fileadmin/announcement/2026/03/20260331OEffentlicheFinanzen2025.pdf'
      },
      {
        title: 'Bevölkerung am 1. Jänner 2026',
        author: 'Statistik Austria',
        publisher: 'Statistik Austria, Viena',
        year: 2026,
        type: 'informe',
        url: 'https://www.statistik.at/fileadmin/announcement/2026/08/20260629Demographie.pdf'
      },
      {
        title: 'Aktuelle Wirtschaftsdaten Österreich',
        author: 'Bundesministerium für Finanzen',
        publisher: 'Ministerio de Finanzas, Viena',
        year: 2026,
        type: 'dato',
        url: 'https://www.bmf.gv.at/themen/wirtschaftspolitik/wirtschaftspolitik-in-oesterreich/aktuelle-wirtschaftsdaten-oesterreich.html'
      },
      {
        title: 'Volksabstimmungen in Österreich',
        author: 'Österreichischer Parlament',
        publisher: 'Parlamento austriaco, Viena',
        year: 2026,
        type: 'dato',
        url: 'https://www.parlament.gv.at/beteiligen/wissenswertes/volksabstimmung/index.html'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
