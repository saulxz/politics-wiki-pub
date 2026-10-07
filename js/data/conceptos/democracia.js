(function (PW) {
  PW.conceptos = PW.conceptos || {};
  'use strict';
  PW.conceptos['democracia'] = {
    kind: 'concepto',
    slug: 'democracia',
    title: 'Democracia',
    subtitle: 'Poder político que reside en el pueblo y se ejerce mediante elecciones y límites institucionales',
    category: 'Conceptos',
    tags: ['sufragio universal', 'representación política', 'libertad civil', 'rendición de cuentas', 'participación ciudadana'],
    updated: '2026-09-29',
    summary: 'Sistema de organización política que atribuye la titularidad del poder a la ciudadanía y lo ejerce mediante procedimientos de deliberación, elección y control. Su historia doctrinal va de la democracia ateniense a las democracias liberales contemporáneas, y en ese recorrido ha generado variantes directas, participativas y deliberativas, así como índices de medición y un debate abierto sobre su calidad real.',
    infobox: {
      caption: 'Democracia',
      color: '#2a4b8d',
      rows: [
        ['Origen del término', 'Atenas, siglo V a. C.; del griego demos y kratos'],
        ['Núcleo doctrinal', 'Titularidad popular del poder y control de quien lo ejerce'],
        ['Formulación clásica', 'Platón, Aristóteles y, en la modernidad, Rousseau'],
        ['Autores de referencia', 'Rousseau, Madison, Tocqueville, Schumpeter, Dahl, Rawls, Habermas'],
        ['Variantes principales', 'Directa, representativa, participativa, deliberativa y liberal'],
        ['Ámbito', 'Mundial, con grados muy desiguales entre países'],
        ['Debate actual', 'Desconfianza ciudadana, polarización y populismo']
      ]
    },
    sections: [
      {
        id: 'definicion',
        heading: 'Definición y rasgos esenciales',
        blocks: [
          {
            type: 'p',
            text: 'La democracia es la forma de organización política que atribuye la titularidad del poder a la ciudadanía y regula su ejercicio mediante procedimientos de deliberación, elección y control. El término procede del griego demos, el pueblo, y kratos, la fuerza o el poder, de manera que su sentido literal es el poder del pueblo. Conviene advertir desde el principio que la palabra designa un principio de organización y no un régimen concreto: pueden llamarse democracias sistemas políticos muy diferentes entre sí.'
          },
          {
            type: 'dl',
            items: [
              ['Demos', 'El pueblo entendido en su acepción antigua, el conjunto de los ciudadanos libres con derecho a asistir a la asamblea.'],
              ['Kratos', 'Fuerza, dominio o poder; el elemento que convierte al pueblo en sujeto del gobierno y no solo en objeto de él.'],
              ['Sufragio', 'Voto con el que cada ciudadano participa en la elección de los representantes; en la democracia moderna es universal, libre, igual, secreto y periódico.'],
              ['Representación', 'Encargo por el que los elegidos ejercen el poder en nombre de los representados, con un mandato delimitado y una responsabilidad política.'],
              ['Alternancia', 'Posibilidad real de que un gobierno salga del poder por la vía electoral y sea sustituido por otro.'],
              ['Rendición de cuentas', 'Obligación de los elegidos de justificar su gestión ante quienes los elegieron y ante la ciudadanía.']
            ]
          },
          {
            type: 'p',
            text: 'La teoría política ha identificado un núcleo de rasgos que casi todas las definiciones comparten: igualdad de voto entre ciudadanos, elecciones auténticas con candidatos alternativos, posibilidad efectiva de perder el poder, garantía de las libertades civiles y algún mecanismo de responsabilidad de los gobernantes. Ninguno de esos rasgos basta por sí solo. Un régimen puede celebrar votaciones sin permitir competencia real, y puede garantizar la libertad de expresión sin ofrecer ninguna vía para cambiar de gobierno.'
          },
          {
            type: 'quote',
            text: 'Nuestro gobierno se llama democracia, porque el poder está en las manos de muchos y no de unos pocos.',
            cite: 'Tucídides, Historia de la guerra del Peloponeso, II.37, que recoge la oración fúnebre de Pericles',
            author: 'Pericles'
          },
          {
            type: 'p',
            text: 'La definición tropieza con una dificultad de fondo. En el uso corriente el término funciona unas veces como sinónimo de gobierno bueno y otras como mera descripción de un procedimiento. Una definición operativa, la más utilizada en la ciencia política actual, entiende la democracia como un método de decisión colectiva en el que los participantes son iguales en un momento determinado del proceso, sin que esa igualdad tenga que mostrarse en todos los demás. Así se distingue de la oligarquía, donde decide un grupo cerrado, y del autoritarismo, donde la decisión no depende de la voluntad de los gobernados.'
          }
        ]
      },
      {
        id: 'ateneas',
        heading: 'Antecedentes: la democracia ateniense',
        blocks: [
          {
            type: 'p',
            text: 'La primera experiencia institucional que suele considerarse democrática es la de Atenas entre 594 y 322 a. C. Solón reformó el régimen en 594 a. C.; Clístenes, tras la reforma tribal de 508 o 507 a. C., organizó la ciudad en diez tribes y quitó a los eupátridas el monopolio de las magistraturas. Esa última reforma suele considerarse el momento fundacional, porque vinculó el ejercicio del poder a la pertenencia a un demos reconocido de manera estable y no por un origen de sangre.'
          },
          {
            type: 'ul',
            items: [
              'Asamblea o ekklesia: órgano soberano compuesto por todos los ciudadanos, que se reunía en la Pnyx y decidía sobre la guerra, la paz, la justicia y el presupuesto.',
              'Consejo de quinientos o bule: sorteado entre los ciudadanos, preparaba los proyectos de ley y ejecutaba buena parte de la política diaria.',
              'Heliaia: tribunal popular de seis mil jueces sorteados por lotes, que ejercía la jurisdicción en primera instancia.',
              'Estrategos: diez mandos militares elegidos por sufragio popular, reelegibles y responsables ante la asamblea.',
              'Ostracismo: procedimiento por el que la asamblea podía excluir por diez años a un ciudadano considerado peligroso para la ciudad, sin juicio formal ni confiscación de bienes.'
            ]
          },
          {
            type: 'p',
            text: 'Aristóteles describe en la Política el régimen democrático como aquel en que manda el demos para el interés de los muchos, y lo contrapone a la oligarquía, en la que manda el demos para el interés de los pocos. Su juicio es analítico y a la vez desconfiado: la libertad de los atenienses podía degenerar en demagogia cuando la asamblea premiaba a los oradores más populares en lugar de a los más razonables. Platón había sido más severo, al considerar la democracia una forma menor, inestable e insuficiente para gobernar bien la ciudad.'
          },
          {
            type: 'note',
            text: 'El alcance del modelo exige una precisión. Participaban solo los varones atenienses mayores de dieciocho años: quedaban fuera las mujeres, los esclavos, los metecos o extranjeros residentes y quienes habían perdido la ciudadela. En términos de población, el demos representaba una fracción pequeña del total de habitantes del Ática, de manera que conviene hablar de democracia para una élite y no de democracia inclusiva, aunque su historia institucional sea decisiva para el pensamiento posterior.'
          }
        ]
      },
      {
        id: 'representativa',
        heading: 'Democracia representativa y liberal',
        blocks: [
          {
            type: 'p',
            text: 'La democracia representativa surge como respuesta a un problema de tamaño: una asamblea de todos los ciudadanos resulta impracticable en un territorio extenso. En el debate constituyente estadounidense de 1787, Madison sostuvo en El Federalista número 10 que una república amplia y con intereses diversos obliga a formar facciones, lo que reduce el peligro de que una mayoría compacta oprimiera a una minoría. Hamilton acuñó entonces la expresión república representativa para nombrar un gobierno en el que la voluntad popular se ejerce a través de elegidos y no de manera directa.'
          },
          {
            type: 'table',
            head: ['Año', 'Hito', 'Aportación al concepto'],
            rows: [
              ['1215', 'Carta Magna', 'La voluntad del rey queda sometida a la ley'],
              ['1689', 'Bill of Rights inglés', 'El parlamento recupera el control de la ley y del_monopolio fiscal de la Corona'],
              ['1776', 'Declaración de Independencia de los Estados Unidos', 'El gobierno recibe su autoridad del consentimiento de los gobernados'],
              ['1787', 'Constitución de los Estados Unidos', 'Separación de poderes, federalismo y gobierno representativo'],
              ['1789', 'Revolución francesa', 'La soberanía reside en la nación y se proclaran los derechos del hombre'],
              ['1848', 'Revoluciones europeas', 'El sufragio y las constituciones se extienden como demandas sociales'],
              ['1918', 'Reforma electoral británica', 'Se amplía el sufragio masculino; en 1920 se incorpora el femenino en Estados Unidos']
            ]
          },
          {
            type: 'quote',
            text: 'La ley es la expresión de la voluntad general. Todos los ciudadanos tienen derecho a contribuir personal o inmediatamente a su formación.',
            cite: 'Declaración de los Derechos del Hombre y del Ciudadano, 1789, artículo 6',
            author: 'Asamblea Nacional Constituyente francesa'
          },
          {
            type: 'p',
            text: 'El adjetivo liberal añade a la democracia representativa un núcleo de garantías que la definición neutral no contiene: libertad de expresión, de asociación y de reunión, propiedad privada, igualdad ante la ley y, en la práctica constitucional contemporánea, derechos que no pueden ser derogados por la mayoría. La tradición del [[ideologia:liberalismo|liberalismo]] sostiene que esos límites son anteriores y exteriores al juego democrático, de manera que una mayoría legítimamente constituida no puede suprimirlos por la vía ordinaria. Ese es el punto exacto en el que la democracia representativa se separa de la pura regla de la mayoría.'
          }
        ]
      },
      {
        id: 'instituciones',
        heading: 'Instituciones y condiciones',
        blocks: [
          {
            type: 'p',
            text: 'Un régimen democrático no se define por una institución aislada sino por un conjunto de condiciones que se sostienen entre sí. La [[concepto:separacion-de-poderes|separación de poderes]] aporta el límite entre las ramas del Estado; las libertades civiles aportan el espacio en el que la opinión se forma; la competencia electoral aporta la posibilidad real de cambiar de gobierno. Si falta una de esas piezas, el conjunto se resiente: elecciones sin libertad de expresión son plebiscitos, y libertad de expresión sin alternativa de gobierno es pluralismo sin responsabilidad.'
          },
          {
            type: 'ul',
            items: [
              'Elecciones auténticas: candidaturas alternativas, campaña libre, secreto del voto y recuento público de resultados.',
              'Sufragio amplio e igual: el derecho de voto no depende de la renta, del sexo, de la raza ni de la religión.',
              'Oposición reconocida: existen fuerzas que pierden, aceptan el resultado y pueden volver a competir.',
              'Libertades civiles: libertad de expresión, asociación, reunión, prensa y circulación de ideas.',
              'Control institucional del poder: parlamento, tribunales, tribunal constitucional, defensor del pueblo y control de la constitucionalidad de las leyes.',
              'Rendición de cuentas: transparencia de la gestión pública, auditoría, declaraciones de intereses y protección de quien denuncia.',
              'Reconocimiento de la pluralidad: protección de las oposiciones políticas y de las minorías lingüísticas o religiosas.'
            ]
          },
          {
            type: 'p',
            text: 'Hay una condición que suele quedar implícita y que resulta decisiva en la práctica: la existencia de una burocracia profesional, autónoma y protegida de la arbitrariedad del poder político. Sin funcionarios capaces de aplicar las leyes con continuidad y sin instrucción política, la democracia se reduce a la competencia por el mando. Esa continuidad enlaza este punto con el [[concepto:estado-de-derecho|estado de derecho]]: un ordenamiento con normas no aplicadas de manera regular es formalmente democrático y materialmente vacío.'
          }
        ]
      },
      {
        id: 'variantes',
        heading: 'Variantes: directa, participativa y deliberativa',
        blocks: [
          {
            type: 'p',
            text: 'La tipología clásica distingue la democracia directa, en la que el cuerpo ciudadano decide sin representantes, de la representativa, en la que delega la decisión. Entre ambas se han desarrollado formas intermedias. Ninguna se presenta en estado puro: los sistemas reales combinan mecanismos de varios tipos, de manera que la clasificación habitual describe siempre el núcleo dominante y no un régimen sin reservas.'
          },
          {
            type: 'table',
            head: ['Variante', 'Núcleo', 'Mecanismo típico', 'Ejemplo de referencia'],
            rows: [
              ['Directa', 'El cuerpo ciudadano decide sin representantes', 'Asambleas y referéndums vinculantes', 'Cantones suizos'],
              ['Representativa', 'Los elegidos deciden y responden ante los representados', 'Elecciones competitivas y periódicas', '[[gob:estados-unidos|Estados Unidos]] y [[gob:espana|España]]'],
              ['Participativa', 'El ciudadano interviene más allá del voto, mediante organizaciones e instituciones', 'Presupuestos participativos, foros y consultas', 'Bogotá, Porto Alegre y Rosario'],
              ['Deliberativa', 'El diálogo público es la fuente de legitimidad, no solo la agregación de votos', 'Foros deliberativos y asambleas ciudadanas', 'Experiencias piloto en Europa y América'],
              ['Liberal', 'Las garantías individuales limitan a la mayoría', 'Derechos fundamentales y control de constitucionalidad', '[[gob:alemania|Alemania]] y [[gob:francia|Francia]]']
            ]
          },
          {
            type: 'p',
            text: 'La democracia deliberativa tiene en Habermas su formulación más influyente. Para él, una norma solo es legítima si todos los ciudadanos pueden examinar razones que sería razonable que aceptaran, dentro de un proceso público de discusión; de ahí procede el principio según el cual únicamente las leyes que pueden reunir el consentimiento de todos son legítimas. La objeción más seria es que ese estándar resulta inalcanzable en sociedades profundamente divididas, donde el desacuerdo no se resuelve al final de la deliberación sino que permanece abierto e institucionalizado.'
          },
          {
            type: 'p',
            text: 'La democracia participativa se apoya en una intuición empírica: la representación degrada los intereses de los menos organizados, y por eso compensan los mecanismos que devuelven al ciudadano un papel entre elecciones. Sus instrumentos son muy diversos: presupuestos participativos, en los que los vecinos deciden una fracción del gasto municipal, consultas sobre planes urbanísticos o tratados, consejos de barrio y asambleas de vecinos. La experiencia sudamericana de las dos últimas décadas es la que más se ha estudiado a ese respecto.'
          }
        ]
      },
      {
        id: 'medicion',
        heading: 'Medición e índices',
        blocks: [
          {
            type: 'p',
            text: 'Desde los años ochenta se han construido indicadores que intentan medir cuánto se acerca cada país a los rasgos de la democracia. Ninguno es una medida directa: todos operacionalizan conceptos como el pluralismo, la competencia electoral o la libertad de asociación mediante un conjunto de preguntas o de datos, y el resultado depende de las variables que el investigador decida incluir. Por eso los índices se leen como una fotografía tomada con unos criterios determinados y no como una verdad definitiva sobre el país.'
          },
          {
            type: 'dl',
            items: [
              ['Democracy Index', 'Publicado desde 2006 por la Unidad de Inteligencia Económica de The Economist; valora cinco categorías, régimen político, participación, cultura política, libertades civiles y sociales, en una escala de cero a diez.'],
              ['Freedom in the World', 'Informe anual desde 1973; clasifica los países como libres, parcialmente libres o no libres a partir de derechos políticos y libertades civiles.'],
              ['V-Dem', 'Proyecto de la Universidad de Gotemburgo iniciado en 2008; ofrece más de doscientas variables sobre democracia liberal, electoral, deliberativa, igualitaria y participativa.'],
              ['Índice de transformación de la Fundación Bertelsmann', 'Valora la calidad de la gobernanza en los países en transición, con criterios políticos, sociales y económicos.'],
              ['Latinobarómetro', 'Encuestas regionales iniciadas en 1995 que miden confianza en instituciones, satisfacción con la democracia y participación política en América Latina.']
            ]
          },
          {
            type: 'p',
            text: 'El debate metodológico tiene dos frentes. El primero es el de los indicadores subjetivos: una valoración entre siete y diez puntos no equivale a una medición de la participación electoral, y los resultados cambian según quién pregunta y con qué criterios. El segundo es el de la cobertura: la mayoría de los índices miden sobre todo el procedimiento electoral y lo que ocurre dentro de las instituciones, y llegan tarde a los efectos de la desigualdad social y de la [[geo:migraciones-y-demografia|migración]] sobre las oportunidades reales de participación. Por eso las cifras anuales se citan mejor como tendencia que como diagnóstico fino.'
          },
          {
            type: 'note',
            text: 'Una distinción útil para leer esos informes es la que separa los Estados con elecciones reales de los que solo ofrece una arquitectura institucional aparente. Un país puede puntuar alto en derechos civiles y políticos y, aun así, no ofrecer una oportunidad realista de alternancia, porque la oposición carece de acceso a los medios o de condiciones iguales en la competición electoral. Los informes anuales recogen esa diferencia en sus apartados metodológicos, y conviene leerlos antes de citar un puesto concreto.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Crisis y críticas',
        blocks: [
          {
            type: 'p',
            text: 'La crítica más influyente del siglo XX es la de Schumpeter, en Capitalismo, socialismo y democracia, de 1942. Su tesis es que la democracia no es un método para descubrir la verdad política ni un procedimiento de búsqueda de la mejor solución, sino el método institucional más adecuado para decidir quién ejerce el poder. Desde esa definición minimalista desaparece la comparación moral entre la democracia y los demás regímenes, que era el fundamento de la crítica clásica.'
          },
          {
            type: 'p',
            text: 'Sobre ese terreno se levanta la teoría elitista, que duda de la igualdad política efectiva. Michels formuló en Los partidos políticos, de 1911, su ley del hierro de la oligarquía: toda organización numerosa y estable tiende a concentrar la dirección en manos de unos pocos. Weber reconoció que el gobierno democrático es siempre oligárquico en su realidad interna, y Mosca y Pareto localizaron en la minoría organizada la fuerza que en realidad gobierna todo sistema. En la versión contemporánea, Bourdieu sostuvo en 1973 que la opinión pública no existe y que las preferencias expresadas son el producto de las relaciones de fuerza entre grupos organizados.'
          },
          {
            type: 'p',
            text: 'El segundo eje de crítica es la desafección. Los indicadores de compromiso electoral muestran que la participación ha descendido en la mayoría de los países avanzados y que un segmento creciente de la población se define como apolítico. La explicación más aceptada combina la individualización, el aumento de la riqueza, la estabilidad del bienestar y un sistema electoral que hace mínima la diferencia entre un gobierno y otro. La consecuencia relevante no es el desinterés, sino el desplazamiento hacia valores de seguridad e identidad, que abre la puerta a la polarización.'
          },
          {
            type: 'p',
            text: 'El tercer frente es el populismo. Mudde y Kaltwasser lo definieron en 2017 como una forma de democracia iliberal cuya orientación se dirige a la mayoría, que incorpora como central la oposición al establecimiento y deja el [[concepto:estado-de-derecho|estado de derecho]] en un plano secundario. La tendencia ha ganado terreno en [[gob:estados-unidos|Estados Unidos]], en varios países de Europa y también en el debate sobre el futuro de las instituciones multilaterales como [[org:onu|la ONU]].'
          },
          {
            type: 'note',
            text: 'Existe además una crítica de signo opuesto, según la cual la democracia es un obstáculo para la eficacia. En el siglo XVII Hobbes la usó para defender el absolutismo, y la teoría de la epistocracia sostiene que los asuntos públicos exigen un conocimiento que la mayoría no posee. Una crítica intermedia, de raíz marxista, afirma que la democracia es siempre la democracia de una clase dominante y que la competencia electoral diluye el conflicto social sin resolverlo. Los sistemas de partido único del siglo XX conservaron esa forma de democracia formal mientras vedaban la competencia real por el poder.'
          }
        ]
      },
      {
        id: 'panorama',
        heading: 'Panorama actual y perspectivas',
        blocks: [
          {
            type: 'p',
            text: 'El siglo XXI ha replanteado la pregunta por la calidad de la democracia. Los informes anuales de los principales índices coinciden en señalar un deterioro de los indicadores de pluralismo en varios países, mientras una fracción creciente de la población, sobre todo entre los jóvenes, se declara indiferente ante la política. Ante ese diagnóstico, la discusión se ha desplazado desde la ausencia de democracia hacia sus efectos: polarización, desconfianza en las instituciones representativas y dificultad para aceptar decisiones con las que no se está de acuerdo.'
          },
          {
            type: 'ul',
            items: [
              'Reformas de la representación: circunscripciones abiertas, límites a la concentración de mandatos y sistemas de elección indirecta equilibrados.',
              'Participación digital: voto electrónico, consultas ciudadanas en línea y publicación de datos, con problemas serios de seguridad y de representación.',
              'Democracia deliberativa institucionalizada: asambleas ciudadanas, jurías ciudadanas y comités de participación con carácter consultivo.',
              'Transparencia y datos abiertos: publicación de contratos, declaraciones de intereses y seguimiento de expedientes de contratación pública.',
              'Igualdad de participación: medidas contra la discriminación, corrección de los distritos electorales y acceso igualitario a la representación.'
            ]
          },
          {
            type: 'p',
            text: 'En el plano teórico, la conversación ha pasado de la forma institucional a la calidad de la ciudadanía que hace posible esa forma. La objeción central a las teorías de la representación es que los representantes terminan rigiendo por sí mismos y que el elector conserva una influencia distante y periódica. Conceptos como la rendición de cuentas o el control de constitucionalidad han ganado un lugar central en la reflexión, y con ellos la pregunta por las condiciones sociales que permiten una participación real y no solo jurídica.'
          },
          {
            type: 'note',
            text: 'Conviene cerrar con una advertencia sobre el uso de la palabra. En el debate público se llama a la democracia a cualquier gobierno que se presente como legítimo, y ese uso extendido vacía el término de contenido técnico y lo convierte en un elogio o en una acusación según quién hable. Delimitar qué es democracia y qué es solo su apariencia sigue siendo una tarea permanente y no un ejercicio académico.'
          }
        ]
      }
    ],
    categories: ['Conceptos', 'Teoría política', 'Regímenes políticos'],
    related: ['concepto:soberania', 'concepto:estado-de-derecho', 'concepto:separacion-de-poderes', 'ideologia:liberalismo', 'ideologia:populismo'],
    references: [
      {
        title: 'Democracia',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'enciclopedia',
        url: 'https://es.wikipedia.org/wiki/Democracia'
      },
      {
        title: 'Democracy',
        author: 'Frank Lovett',
        publisher: 'The Stanford Encyclopedia of Philosophy, Metaphysics Research Lab, Stanford University',
        year: 2024,
        type: 'enciclopedia',
        url: 'https://plato.stanford.edu/entries/democracy/'
      },
      {
        title: 'Política',
        author: 'Aristóteles',
        publisher: 'Editorial Gredos, Madrid',
        year: 2018,
        type: 'libro'
      },
      {
        title: 'Du contrat social',
        author: 'Jean-Jacques Rousseau',
        publisher: 'Primera edición en Amsterdam, 1762',
        year: 1762,
        type: 'libro'
      },
      {
        title: 'El Federalista',
        author: 'Alexander Hamilton, James Madison y John Jay',
        publisher: 'J. y A. Thomson, Nueva York',
        year: 1788,
        type: 'libro'
      },
      {
        title: 'Capitalism, Socialism and Democracy',
        author: 'Joseph A. Schumpeter',
        publisher: 'Harper and Brothers, Nueva York',
        year: 1942,
        type: 'libro'
      },
      {
        title: 'Polyarchy: Participation and Opposition',
        author: 'Robert A. Dahl',
        publisher: 'Yale University Press, New Haven',
        year: 1971,
        type: 'libro'
      },
      {
        title: 'A Theory of Justice',
        author: 'John Rawls',
        publisher: 'Harvard University Press, Cambridge',
        year: 1971,
        type: 'libro'
      }
    ]
  };
})(window.PW = window.PW || { articles: {}, parties: {}, geo: {}, orgs: {}, gobiernos: {}, pensadores: {}, conceptos: {} });
