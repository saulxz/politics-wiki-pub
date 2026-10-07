(function (PW) {
  'use strict';
  PW.gobiernos = PW.gobiernos || {};
  PW.gobiernos['alemania'] = {
    kind: 'gobierno',
    slug: 'alemania',
    title: 'Alemania',
    subtitle: 'República federal que reparte la soberanía entre el Bundestag, el Bundesrat y dieciséis Länder bajo la Ley Fundamental de 1949',
    category: 'Gobierno',
    tags: ['federalismo', 'parlamentarismo', 'economía social de mercado', 'freno de deuda', 'descentralización', 'estado de derecho'],
    region: 'Europa Occidental',
    timeFrame: '1949-actualidad',
    updated: '2026-09-27',
    summary: 'República federal de Europa occidental que reparte el poder entre el Bundestag, el Bundesrat y dieciséis Länder bajo la Ley Fundamental de 1949, con economía social de mercado, freno constitucional al gasto público y un papel central en la Unión Europea.',
    actors: [
      { name: 'Unión Europea', role: 'marco institucional al que Alemania cede soberanía por ley y donde concentra su política exterior y comercial', power: 'alta' },
      { name: 'Estados Unidos', role: 'garante de seguridad, principal destino del comercio exterior y contrapeso crítico del orden económico alemán', power: 'alta' },
      { name: 'Francia', role: 'socio de la reconciliación y contrapeso interno en el proyecto europeo y en la política de defensa', power: 'media' },
      { name: 'Tribunal Constitucional Federal', role: 'guarda de la supremacía constitucional que puede anular leyes y bloquear reformas que toquen los artículos 1 y 20', power: 'alta' },
      { name: 'Deutsche Bundesbank', role: 'banco central nacional, parte del Eurosistema y contrapeso monetario frente a la política del Gobierno federal', power: 'media' },
      { name: 'Rusia', role: 'origen del shock energético y de seguridad que explica el giro presupuestario y la búsqueda de autonomía europea', power: 'baja' }
    ],
    infobox: {
      caption: 'Alemania',
      color: '#45607a',
      rows: [
        ['Período', '1949-actualidad'],
        ['Forma de Estado', 'República federal democrática con dieciséis Länder'],
        ['Norma constitutiva', 'Ley Fundamental, en vigor desde el 23 de mayo de 1949'],
        ['Parlamento', 'Bundestag de 630 diputados y Bundesrat de 69 votos'],
        ['Poder ejecutivo', 'Canciller federal y ministros; el presidente federal representa al Estado y no gobierna'],
        ['Control constitucional', 'Tribunal Constitucional Federal, con veinticuatro jueces en dos senados'],
        ['Banco central', 'Deutsche Bundesbank, banco central del Eurosistema'],
        ['Agrupación externa', 'Unión Europea, zona del euro, OCDE, G7 y OTAN']
      ]
    },
    sections: [
      {
        id: 'estructura-federal',
        heading: 'Estructura federal: por qué la Constitución repite la palabra Bundes',
        blocks: [
          {
            type: 'p',
            text: 'La República Federal de Alemania se rige por la Ley Fundamental, el Grundgesetz, promulgada el 8 de mayo de 1949 y en vigor desde el 23 de mayo de ese mismo año. Nació de un acuerdo entre potencias que no querían ni una monarquía unificada restaurada ni una refundación de la de 1945, y el resultado fue deliberadamente asimétrico: la República Federal fue un Estado federal, mientras la República Democrática Alemana, de 1949 a 1990, fue un Estado unitario centralizado. La unificación de 1990 extendió el formato federal del oeste a todo el territorio, y por eso la Constitución emplea la palabra Bundes en casi todo lo que nombra.'
          },
          {
            type: 'p',
            text: 'El artículo 20, apartado 1, es la fórmula fundante: la República Federal de Alemania es un Estado federal, democrático y social. El mismo artículo establece que todo poder del Estado procede del pueblo, que la legislación, el poder ejecutivo y la justicia están vinculados al orden constitucional y a la ley, y que todo alemán tiene derecho a resistir a quien intente abolir ese orden si no existe otro remedio. Ese último párrafo, sin equivalente entre las constituciones europeas de la posguerra, es la reacción directa a 1933-1945. En 1994 se le añadió el artículo 20a, que obliga al Estado a proteger las bases naturales de la vida y los animales en responsabilidad con las generaciones futuras.'
          },
          {
            type: 'table',
            head: ['Nivel', 'Órganos', 'Materias reservadas', 'Base constitucional'],
            rows: [
              ['Federación', 'Bundestag, Bundesrat, Gobierno federal y Tribunal Constitucional', 'Defensa, política exterior, moneda, y aprobación del derecho penal y procesal', 'Artículos 70 a 74 y 92 a 104'],
              ['Länder', 'Landtage y Gobiernos regionales', 'Policía, justicia, educación, bienestar social y administración territorial', 'Artículos 28, 70 y 73'],
              ['Municipios', 'Ayuntamientos y distritos comarcales', 'Ordenación urbana, agua, suministros y policía local', 'Artículo 28, apartado 2'],
              ['Competencias comunes', 'Bund y Länder en régimen mixto', 'Infraestructura regional, ciencia y universidad, y seguridad interior', 'Artículos 91a a 91d']
            ]
          },
          {
            type: 'ul',
            items: [
              'Reparto de competencias: el artículo 73 enumera las materias de legislación discrecional federal, remite a la ley las concurrentes y reserva a los Länder el derecho a legislar cuando la Federación no usa su competencia.',
              'El Bundesrat como cámara de Gobiernos regionales: el artículo 51 reparte sesenta y nueve votos entre los dieciséis Länder, de tres a seis según su población, y cada Land los emite de forma unitaria.',
              'Regla de la reforma: el artículo 79 exige dos tercios de los miembros del Bundestag y dos tercios de los votos del Bundesrat, y su apartado 3 prohíbe tocar la estructura federal, la participación de los Länder y los principios de los artículos 1 y 20.',
              'Coacción federal: el artículo 37 permite al Gobierno federal, con acuerdo del Bundesrat, dirigir a un Land para que cumpla sus obligaciones y ejercer su derecho de instrucción sobre sus autoridades.'
            ]
          }
        ]
      },
      {
        id: 'poderes-y-direccion-politica',
        heading: 'Poderes separados: una dirección política muy concentrada',
        blocks: [
          {
            type: 'p',
            text: 'El Bundestag concentra la legislación y el control del Gobierno, y su relación con el poder ejecutivo se rige por el principio de la confianza constructiva. El artículo 67 permite quitar la confianza al canciller solo si una mayoría de la Cámara elige a un sucesor y pide al presidente federal que lo destituya, y obliga al presidente a acceder a la petición. Entre la solicitud y la votación deben transcurrir cuarenta y ocho horas, un intervalo pensado para que la opinión pública pueda reaccionar. El efecto es que el Bundestag no puede tumbar a un Gobierno: solo puede cambiarlo, y únicamente por el camino de designar un sucesor.'
          },
          {
            type: 'p',
            text: 'El artículo 63 regula la elección del canciller, que el Bundestag realiza sin debate previo y a propuesta del presidente federal, exigiendo la mayoría absoluta de sus miembros. Si el propuesto no alcanza esa mayoría, la Cámara dispone de catorce días para elegir a otro por mayoría simple; si tampoco lo consigue, se abre una nueva ronda y el presidente federal queda obligado a nombrar al candidato más votado o a disolver el Bundestag. Esa facultad de disolución efectiva es la última línea de defensa del orden constitucional y explica por qué el mecanismo funcionó incluso en mayo de 2025, cuando un candidato no alcanzó la mayoría absoluta en la primera ronda.'
          },
          {
            type: 'p',
            text: 'El presidente federal es un órgano de representación, no de gobierno. Lo elige la Asamblea Federal, formada por los miembros del Bundestag y un número igual de representantes elegidos por los Landtage, cumple un mandato de cinco años y solo admite una repetición. Según el artículo 59 representa a Alemania ante el derecho internacional, firma los tratados, acredita a los enviados extranjeros y nombra y destituye a los ministros a propuesta del canciller. Cada ministro dirige su departamento con autonomía dentro de las directrices políticas del Gobierno, que el artículo 65 confiere al canciller junto con la responsabilidad final, de modo que la dirección política descansa en una sola persona.'
          },
          {
            type: 'table',
            head: ['Poder', 'Titular', 'Base', 'Rasgo peculiar'],
            rows: [
              ['Legislativo', 'Bundestag y Bundesrat', 'Artículos 38 y 50', 'Bicameralismo asimétrico: el Bundesrat vota por Estados, no por personas'],
              ['Ejecutivo', 'Canciller federal y ministros', 'Artículos 62 a 65', 'La confianza es constructiva y el presidente federal no gobierna'],
              ['Cabecera del Estado', 'Presidente federal', 'Artículos 54 a 61', 'Cinco años y una sola repetición, sin poder ejecutivo propio'],
              ['Judicial', 'Tribunales ordinarios', 'Artículos 92 a 101', 'Los tribunales capitales son los de los Länder, no los de la Federación'],
              ['Control constitucional', 'Tribunal Constitucional Federal', 'Artículo 93', 'Veinticuatro jueces en dos senados, con doce años de mandato sin renovación']
            ]
          },
          {
            type: 'quote',
            text: 'Contra quien intente suprimir este orden, todos los alemanes tienen derecho a resistirlo cuando no sea posible otro remedio.',
            cite: 'Ley Fundamental, artículo 20, apartado 4',
            author: 'República Federal de Alemania'
          }
        ]
      },
      {
        id: 'freno-de-deuda-y-arbitraje',
        heading: 'El freno de deuda y el arbitraje del Tribunal Constitucional',
        blocks: [
          {
            type: 'p',
            text: 'Dos artículos concentran el diseño financiero del Estado. El artículo 109 obliga a la Federación y a los Länder a saldar sus presupuestos sin ingresos de crédito y fija un límite estructural del 0,35 % del producto interior bruto nominal; el artículo 115 lo concreta para la Federación, confirma ese mismo umbral, obliga a registrar en una cuenta de control toda desviación y añade que la parte del gasto en defensa, protección civil, servicios de inteligencia, protección de sistemas informáticos y ayuda a Estados atacados que supere el 1 % del producto queda fuera del cálculo. Ese umbral del 0,35 % es lo que se conoce como freno de deuda.'
          },
          {
            type: 'p',
            text: 'La reforma llegó en dos pasos. En 2021 se añadió a la Ley Fundamental la exención del 1 % para gasto de defensa, y en marzo de 2025 se creó el artículo 143h: un fondo especial de hasta 500.000 millones de euros para inversiones en infraestructura y en la consecución de la neutralidad climática en 2045, cuyas asignaciones pueden comprometerse a lo largo de doce años, con 100.000 millones para los Länder y otros 100.000 para el fondo climático y de transformación. El artículo es deliberadamente una excepción acotada: se aplica en un plazo determinado, exige alcanzar cada año una cuota de inversión razonable en el presupuesto federal y somete los pagos a los Länder a un informe y a una inspección del Bund.'
          },
          {
            type: 'ol',
            items: [
              'Iniciativa: un proyecto de ley de reforma debe presentar la mayoría absoluta en el Bundestag, con independencia de quién gobierne.',
              'Aprobación del Bundestag: se requieren dos tercios de todos sus miembros, de modo que no basta la mayoría simple aunque el Gobierno la tenga.',
              'Aprobación del Bundesrat: se requieren dos tercios de los sesenta y nueve votos, lo que obliga a la mayoría de los Estados a votar en la misma línea.',
              'Control previo opcional: el Tribunal Constitucional puede revisar la norma antes de que entre en vigor, y la oposición puede pedir esa suspensión en cualquier momento.'
            ]
          },
          {
            type: 'table',
            head: ['Artículo', 'Contenido', 'Por qué importa'],
            rows: [
              ['20.1', 'La República es un Estado federal, democrático y social', 'Funda a la vez la forma federal y el componente social del orden'],
              ['23', 'Participación en la Unión Europea y cesión de soberanía por ley', 'Convierte a la Unión Europea en destino de competencias soberanas'],
              ['37', 'Coacción federal cuando un Land incumple sus obligaciones', 'Última instancia de integridad del orden federal'],
              ['67', 'Voto de desconfianza constructivo', 'Estabiliza la relación entre el Gobierno y la mayoría legislativa'],
              ['79', 'Dos tercios en ambas cámaras y cláusula de eternidad', 'Fija el coste de la reforma y cierra puertas a la mayoría simple'],
              ['143h', 'Fondo especial de 500.000 millones de euros', 'Excepción acotada creada en marzo de 2025']
            ]
          }
        ]
      },
      {
        id: 'elecciones-de-2025',
        heading: 'Las elecciones de 2025 y la recomposición del espectro',
        blocks: [
          {
            type: 'p',
            text: 'El Bundestag de la vigesimoprimera legislatura se elegió el 23 de febrero de 2025, tras la caída del gobierno de Olaf Scholz, que perdió una votación de confianza el 11 de diciembre de 2024 y provocó la disolución de la propia Cámara. La participación fue del 82,5 %, seis puntos por encima de 2021, y la Cámara quedó con 630 diputados, frente a los 735 de la legislatura anterior, gracias a una reforma del sistema que eliminó los mandatos sobrantes y las sobreponderaciones. El Bundestag se constituyó el 25 de marzo de 2025 con Julia Klöckner al frente de la Cámara, y el 6 de mayo eligió a Friedrich Merz como canciller en la segunda ronda, con 325 votos de los 618 emitidos frente a los 316 necesarios, después de que hubiera fracasado en la primera, algo que no había ocurrido antes en la historia posguerra.'
          },
          {
            type: 'table',
            head: ['Partido', 'Segunda vuelta, 2025', 'Diputados en 2025', 'Diputados en 2021'],
            rows: [
              ['CDU', '22,6 %', '164', '152'],
              ['AfD', '20,8 %', '152', '83'],
              ['SPD', '16,4 %', '120', '206'],
              ['Bündnis 90/Die Grünen', '11,6 %', '85', '118'],
              ['Die Linke', '8,8 %', '64', '39'],
              ['CSU', '6,0 %', '44', '45'],
              ['SSW', '0,2 %', '1', '1'],
              ['FDP', '4,3 %', '0', '91']
            ]
          },
          {
            type: 'p',
            text: 'El resultado admite dos lecturas. La primera es la reconstrucción del bloque de centro: la combinación de la CDU con la CSU, que solo compite en Baviera, recuperó la primera posición con 208 diputados en conjunto, y el nuevo gobierno es una gran coalición de diecisiete ministros, siete de la CDU, siete del [[partido:spd|SPD]] y tres de la CSU, con Lars Klingbeil como vicecanciller y ministro de Finanzas. La segunda es la ruptura: la [[partido:afd|Alternativa für Deutschland]], creada en 2013, pasó del 10,4 % de 2021 al 20,8 % y quedó como segunda fuerza con 152 escaños, mientras el [[partido:spd|SPD]], fundado en 1875 y el partido más antiguo de Alemania, sufría su peor resultado histórico con el 16,4 % y 120 diputados, frente a 206 en 2021. Los Libres Demócratas, con el 4,3 %, y la nueva formación de Sahra Wagenknecht, con el 4,98 %, quedaron fuera por el listón del 5 %.'
          },
          {
            type: 'ul',
            items: [
              'El [[partido:spd|SPD]] conserva la identidad del partido socialdemócrata obrero, pero ha perdido más de la mitad de sus diputados en cuatro años, lo que apunta a una erosión del voto industrial y a un giro verde dentro de su propia base.',
              'La [[partido:afd|AfD]] combina la oposición a la política migratoria con una ruptura del discurso nacional sobre identidad e integración, y es la primera formación surgida después de 1945 que alcanza la condición de principal fuerza de la oposición sin haber gobernado nunca.',
              'Los [[partido:los-republicanos|Republicanos]] ocupan el otro extremo: fundados en Múnich en 1983 por dos diputados de la Unión Cristiana Social de Baviera y el periodista Franz Schönhuber, son un partido pequeño de orientación nacional-conservadora cuyo eje es la oposición a la inmigración. Nunca han obtenido un diputado federal y su único éxito fueron las elecciones europeas de 1989, con seis eurodiputados, lo que resume un problema del sistema: esa agenda necesita al AfD para tener representación nacional.',
              'Dos casos límite ilustran las reglas del recuento: el Südschleswigscher Wählerverband entró con un solo escaño gracias a la protección de las minorías nacionales, y la formación de Wagenknecht quedó fuera a dos centésimas del listón.'
            ]
          }
        ]
      },
      {
        id: 'economia-y-europa',
        heading: 'Economía social de mercado, energía y peso en Europa',
        blocks: [
          {
            type: 'p',
            text: 'El fundamento material del Estado es el artículo 14, que protege la propiedad pero admite su socialización y su imposición forzada por ley, siempre a cambio de una compensación. A esa cláusula se leen el resto de los derechos sociales, desde la protección de la salud hasta la vivienda, y de ahí sale el modelo de economía social de mercado: propiedad privada, mercado competitivo y Estado proveedor de seguridad social. Esa combinación explica el peso del comercio exterior en la economía, la concentración industrial en empresas medianas y el papel de la negociación colectiva en la fijación de salarios, tres rasgos que la distinguen de los modelos liberales norteamericanos.'
          },
          {
            type: 'p',
            text: 'La estructura institucional que sostiene ese modelo combina tres vectores. El primero es la Deutsche Bundesbank, creada como banco central en el artículo 88, con nueve oficinas regionales que cubren los dieciséis Länder y que participa en las decisiones del Eurosistema junto al Banco Central Europeo. El segundo es la administración autónoma de los Länder, que ejecuta la mayor parte de la política educativa y sanitaria y convierte cada Estado en un laboratorio de reformas con efectos distintos dentro del país. El tercero es la pertenencia a la [[org:union-europea|Unión Europea]], que el artículo 23 asume como una cesión de competencia hacia un orden democrático, social y federal, sujeta al principio de subsidiariedad.'
          },
          {
            type: 'p',
            text: 'La reorientación del gasto público desde 2022 es el cambio de mayor alcance en la política alemana de posguerra. La invasión rusa de Ucrania, tratada en [[geo:guerra-en-ucrania]], obligó a armar a un país que durante setenta años mantuvo su gasto militar cercano al 1 % del producto interior bruto, y el gasto de defensa alcanzó el 2 % fijado por la [[org:otan|OTAN]] en 2024. El resultado es un giro presupuestario que rompe con la austeridad vigente desde 2009 y deja abierto un debate sobre si la autonomía europea se sostiene con defensa propia o con una segunda dependencia, esta vez tecnológica. A ello se añade el coste energético: la industria expuesta a los precios del gas importado, tras lo descrito en [[geo:energia-y-dependencias]], convive con un parque de generación que se descarboniza a ritmos distintos en cada Land. Según el organismo estadístico federal, la población estimada alcanza los 83,5 millones de habitantes y el índice de precios de consumo de agosto de 2026 se sitúa en el 2,9 %.'
          }
        ]
      },
      {
        id: 'debates-y-limites',
        heading: 'Debates abiertos y límites del modelo',
        blocks: [
          {
            type: 'p',
            text: 'Tres tensiones atraviesan hoy la vida institucional alemana. La primera es el choque entre inmigración y garantías constitucionales: la crisis migratoria de 2015-2016 obligó a una reforma de la Ley Fundamental que endureció el acceso a la protección y llevó al Tribunal Constitucional a anular parte de la respuesta legislativa, y desde entonces la legislación de asilo se ha modificado varias veces, en buena medida por imperativos del derecho de la Unión Europea. La segunda es la erosión de la capacidad de negociación, porque en una Cámara sin mayorías absolutas hasta los asuntos de consenso se resuelven trasladando al proyecto de ley una votación de confianza, un procedimiento eficaz para obligar a negociar y frágil ante cualquier bloqueo. La tercera es la desigualdad territorial: los Länder del antiguo este arrastran desde 1990 niveles de renta, empleo e inversión estructuralmente inferiores, y el dinero federal que intenta compensarlo choca con la competencia que el propio modelo reserva a los Länder en los artículos 28 y 70.'
          },
          {
            type: 'ul',
            items: [
              'Correlación de fuerzas: ningún partido ha alcanzado la mayoría absoluta desde 2021, lo que traslada el coste de la negociación a los procedimientos y multiplica los pactos ad hoc entre formaciones que compiten por el mismo electorado.',
              'Estado de derecho: la vigilancia sobre organizaciones de la extrema derecha ha producido en otros países la disolución de partidos y la prohibición de financiación, mientras que en Alemania el debate sigue girando en torno a los límites de la libertad de asociación.',
              'Integración europea: la cesión de soberanía del artículo 23 funciona mientras la Unión Europea mantiene su carácter democrático y su capacidad de redacción; su crisis institucional la expone sin precedentes.',
              'Finanzas públicas: la reforma de 2025 ha creado margen, pero la deuda pública sigue siendo de las más bajas de Europa occidental y ese margen no cubre a la vez defensa, transición energética e inversión en infraestructura.'
            ]
          },
          {
            type: 'p',
            text: 'El balance es ambivalente. La arquitectura institucional ha resistido a la globalización, a la unificación, a dos crisis bancarias y a una contracción de doble dígito del producto interior, y su mecanismo central, el veto cooperativo entre Länder, Tribunal Constitucional y presidencia federal, sigue funcionando con regularidad. Lo que ha cambiado es la distancia entre el ritmo al que se reforma el sistema y el ritmo al que se deterioran los problemas que debe atender, desde la transición energética hasta la demografía. Un modelo institucional puede ser muy sólido y, a la vez, llegar tarde, y esa es la crítica más seria que puede formularse a la arquitectura descrita aquí.'
          }
        ]
      }
    ],
    categories: ['Gobiernos', 'Federalismo', 'Parlamentarismo', 'Europa occidental'],
    related: ['partido:spd', 'partido:afd', 'partido:los-republicanos', 'federalismo', 'org:union-europea'],
    references: [
      {
        title: 'Grundgesetz für die Bundesrepublik Deutschland',
        author: 'Asamblea Federal y Consejo Federal de Alemania',
        publisher: 'Ministerio de Justicia de la República Federal de Alemania, Bonn',
        year: 1949,
        type: 'documento',
        url: 'https://www.gesetze-im-internet.de/gg/'
      },
      {
        title: 'The Political System of Germany',
        author: 'Florian Grotz y Wolfgang Schroeder',
        publisher: 'Palgrave Macmillan, Cham',
        year: 2023,
        type: 'libro',
        url: 'https://link.springer.com/book/10.1007/978-3-031-32480-2'
      },
      {
        title: '2025 Bundestag election: final result',
        author: 'Federal Returning Officer (Bundeswahlleiterin)',
        publisher: 'Federal Returning Officer, Wiesbaden y Berlín',
        year: 2025,
        type: 'dato',
        url: 'https://www.bundeswahlleiterin.de/en/info/presse/mitteilungen/bundestagswahl-2025/29_25_endgueltiges-ergebnis.html'
      },
      {
        title: 'Zweites Nachtragshaushaltsgesetz 2021 ist nichtig (Pressemitteilung Nr. 101/2023, Urteil 2 BvF 1/22)',
        author: 'Bundesverfassungsgericht',
        publisher: 'Tribunal Constitucional Federal, Karlsruhe',
        year: 2023,
        type: 'documento',
        url: 'https://www.bundesverfassungsgericht.de/SharedDocs/Pressemitteilungen/DE/2023/bvg23-101.html'
      },
      {
        title: 'German Bundestag',
        author: 'Deutscher Bundestag',
        publisher: 'Bundestag, Berlín',
        year: 2026,
        type: 'web',
        url: 'https://www.bundestag.de/en'
      },
      {
        title: 'The Bundesrat: a constitutional body within a federal system',
        author: 'Bundesrat',
        publisher: 'Consejo Federal, Berlín',
        year: 2026,
        type: 'web',
        url: 'https://www.bundesrat.de/EN/'
      },
      {
        title: 'Home page: Federal Statistical Office of Germany',
        author: 'Statistisches Bundesamt',
        publisher: 'Oficina Federal de Estadística, Wiesbaden',
        year: 2026,
        type: 'web',
        url: 'https://www.destatis.de/EN/Home/_node.html'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
