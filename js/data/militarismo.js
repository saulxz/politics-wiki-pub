(function (PW) {
  'use strict';
  PW.articles['militarismo'] = {
    slug: 'militarismo',
    kind: 'ideologia',
    title: 'Militarismo',
    subtitle: 'Corriente política que coloca a la fuerza armada y a la guerra en el centro de la vida del Estado y somete la esfera civil al mando militar',
    category: 'Ideologías políticas',
    tags: ['militarismo', 'fuerza armada', 'guerra', 'cultura de guerra', 'gasto militar', 'relaciones civiles y militares'],
    updated: '2026-09-29',
    summary: 'Corriente política que eleva el mando militar a la máxima autoridad del Estado, considera la guerra un instrumento ordinario de la política y sostiene que la fuerza organizada es el instrumento más fiable para resolver los conflictos internacionales.',
    actors: [
      { name: 'Carl von Clausewitz', role: 'Oficial y teórico prusiano que formuló en 1832 la idea de la guerra como continuación de la política por otros medios', power: 'alta' },
      { name: 'Samuel P. Huntington', role: 'Científico político que en 1957 fijó el modelo de referencia para el estudio de las relaciones entre militares y civiles', power: 'alta' },
      { name: 'Erich Ludendorff', role: 'General que convirtió la guerra total en programa de Estado en su tratado de 1935', power: 'media' },
      { name: 'Michel Foucault', role: 'Filósofo que en 1976 describió la defensa de la población y el discurso de la guerra como un mismo régimen de poder', power: 'media' },
      { name: 'Alex Weisiger', role: 'Investigador que ha medido cómo la convicción de la propia fuerza alarga las guerras más destructivas', power: 'baja' }
    ],
    infobox: {
      caption: 'Militarismo',
      color: '#4f5d3a',
      rows: [
        ['Período', 'Desde la reforma prusiana de 1807 hasta la actualidad'],
        ['Núcleo doctrinal', 'La guerra es un instrumento ordinario de la política y el mando militar una autoridad política'],
        ['Autores de referencia', 'Clausewitz, Ludendorff, Huntington, Foucault y Weisiger'],
        ['Formulación clásica', 'La reforma prusiana de 1807-1813 y la doctrina de la guerra total de 1935'],
        ['Campos conexos', 'Relaciones civiles y militares, industria de defensa, doctrina estratégica'],
        ['Contraste', 'Belicismo, imperialismo y dictadura militar'],
        ['Ámbito', 'Europa, Asia oriental y, en menor medida, América del Norte'],
        ['Debate actual', 'Disuasión, gasto militar y la guerra en Ucrania desde 2022']
      ]
    },
    sections: [
      {
        id: 'origenes',
        heading: 'Orígenes: la reforma prusiana y el Estado militar',
        blocks: [
          {
            type: 'p',
            text: 'El militarismo no nació en 1871, sino en la derrota prusiana de 1806. El ejército de Napoleón derrotó al de Prusia en Jena y Auerstedt, y el Estado que hubo de reconstruirse desde entonces convirtió la organización de las armas en su tarea principal. La pregunta que guiaron los reformadores no era cómo habilitar un ejército más grande, sino cómo hacer que el servicio de las armas dejara de ser un oficio cortesano para convertirse en una obligación de la nación.'
          },
          {
            type: 'p',
            text: 'La reforma se inició en 1807 bajo la dirección de Gerhard von Scharnhorst, al frente del departamento de Guerra, y culminó en 1813 con la ayuda de August Neidhart von Gneisenau, jefe del Estado Mayor general desde 1810. Sus tres ejes fueron el servicio obligatorio para toda la población, la creación de un Estado Mayor capaz de planear la campaña con años de antelación y la fusión de los regimentos en un ejército único, subordinado a un mando central.'
          },
          {
            type: 'ul',
            items: [
              'Scharnhorst (1807): el servicio obligatorio se extiende a los nobles y al resto de la población.',
              'Gneisenau (1810-1813): creación del Estado Mayor general y de la campaña planificada por operaciones.',
              'Guerra de Liberación de 1813 y Congreso de Viena de 1815: la victoria sobre Napoleón confirma a las armas como instrumento de construcción nacional.',
              'Guerras de 1864 y 1866 contra Dinamarca y Austria: dos campañas breves que miden el peso de la organización sobre el número de efectivos.',
              'Guerra franco-prusiana de 1870-1871 y proclamación del Segundo Reich el 18 de enero de 1871.'
            ]
          },
          {
            type: 'p',
            text: 'El 18 de enero de 1871 se proclamó en el salón de espejos de Versalles el Segundo Reich, y el ejército quedaba constituido como el agente más eficaz de la unificación nacional. Esa secuencia convirtió la organización militar en un modelo de construcción del Estado que otros países buscaron imitar, desde la Restauración de Meiji de 1868 en Japón hasta la unificación de Italia, y en el que la victoria se midió como garantía del Estado.'
          },
          {
            type: 'table',
            head: ['Año', 'Hito', 'Significado'],
            rows: [
              ['1807-1813', 'Reforma militar prusiana dirigida por Scharnhorst, con Gneisenau al frente del Estado Mayor general desde 1810', 'El servicio obligatorio alcanza a toda la población y el ejército deja de ser un cuerpo cortesano'],
              ['1813-1815', 'Guerra de Liberación contra Napoleón y Congreso de Viena', 'La victoria de las armas se presenta como instrumento de construcción nacional'],
              ['1864-1866', 'Guerras de Dinamarca y de Austria', 'Dos campañas breves muestran el peso de la organización sobre el número de efectivos'],
              ['1870-1871', 'Guerra franco-prusiana y proclamación del Segundo Reich el 18 de enero de 1871', 'El mando militar actúa como agente de la unificación y ocupa la cima de la legitimidad estatal'],
              ['1898-1914', 'Leyes navales de 1898 y 1900, plan Schlieffen de 1905 y crisis de Bosnia de 1908', 'La guerra pasa a planificarse de forma permanente y la fuerza se convierte en instrumento de política mundial'],
              ['1914-1918', 'Primera guerra mundial', 'La industria, la propaganda y el Estado Mayor se integran en un solo sistema de guerra total'],
              ['1935-1939', 'Ludendorff publica Der totale Krieg en 1935 y Alemania reinstaura el servicio obligatorio en marzo de ese año', 'La guerra total se formula como programa de gobierno y no como operación militar aislada'],
              ['1939-1945', 'Segunda guerra mundial, con rearme masivo, guerra aérea y ocupación territorial', 'El mando militar administra la economía y la población como recursos del esfuerzo bélico'],
              ['1947-1976', 'Ley de Seguridad Nacional de Estados Unidos en 1947, informe NSC-68 de 1950 y dictaduras militares en América Latina', 'La contención del comunismo y la guerra fría ofrecen un marco doctrinal al mando armado'],
              ['1990-2010', 'Suspensión del reclutamiento en Alemania en 1995 y en España en 2001, junto a las operaciones de paz de la ONU', 'El militarismo se repliega al gasto, la industria y la planificación, con control civil reforzado']
            ]
          },
          {
            type: 'p',
            text: 'La construcción de un ejército nacional en una sociedad todavía mayoritariamente agraria acarreaba un riesgo conocido: la revolución social. Las revoluciones de 1848 en Prusia y en Austria, y el conflicto constitucional de 1858-1862, dejaron esa posibilidad sobre la mesa. Bismarck la resolvió con un argumento que se hizo célebre: en septiembre de 1862, ante la comisión de presupuesto, sostuvo que el problema alemán no se resolvería con discursos y mayorías, sino con hierro y sangre.'
          },
          {
            type: 'p',
            text: 'En Alemania el militarismo sobrevivió a la derrota de 1918. El acuerdo firmado en noviembre de 1918 entre la socialdemocracia y el mando militar entregó a los oficiales la garantía del orden interno, y sobre esa base se construyó Weimar. El intento de golpe de marzo de 1920 y la elección de Hindenburg como presidente en abril de 1925 fueron dos señales: el ejército como garante del Estado y, a la vez, como actor de su política. El mando supremo conservó además una autonomía que la Constitución no contemplaba.'
          },
          {
            type: 'dl',
            items: [
              ['Reforma militar prusiana', 'Programa desarrollado entre 1807 y 1813 que extendió el servicio obligatorio, creó el Estado Mayor general y fusionó los regimentos'],
              ['Estado Mayor general', 'Órgano creado hacia 1810 para planear la campaña entera con años de antelación en lugar de improvisarla'],
              ['Servicio obligatorio', 'Obligación legal de prestar armas que socializa a toda una generación en la disciplina y en la obediencia al mando'],
              ['Seguridad nacional', 'Doctrina que sitúa a las fuerzas armadas como garantía del Estado y de su continuidad constitucional']
            ]
          }
        ]
      },
      {
        id: 'definicion',
        heading: 'Qué es el militarismo y cómo se usa la palabra',
        blocks: [
          {
            type: 'p',
            text: 'Militarismo es el nombre de la corriente política que sitúa a la fuerza armada y a la guerra en el centro de la vida del Estado y somete la esfera civil a la autoridad militar. No designa solo un ejército numeroso ni un presupuesto de defensa elevado, sino un orden de valores: un orden en el que la fuerza organizada ocupa el máximo de legitimidad, donde la guerra se concibe como instrumento ordinario de la política y donde la jerarquía castrense ofrece el modelo de la civil.'
          },
          {
            type: 'p',
            text: 'La palabra se consolidó en el debate europeo de la segunda mitad del siglo XIX, cuando la reforma del ejército prusiano y las victorias sobre Dinamarca, Austria y Francia convirtieron la organización militar en un modelo de construcción del Estado nacional. Pasó después a nombrar cualquier proyecto que pretendiera resolver por la fuerza las cuestiones internacionales, y de ahí a usarse en casi todos los países, con sentidos muy distintos según el contexto político de cada uno.'
          },
          {
            type: 'note',
            text: 'El diccionario de la Real Academia Española ofrece tres acepciones de militarismo y da como sinónimos belicismo y armamentismo. La sinonimia resulta cómoda, pero poco informativa: el belicismo es una disposición del ánimo, el militarismo una estructura de poder y el armamentismo una carrera de equipos. Confundirlos oculta justo lo que distingue a esta corriente de las demás.'
          },
          {
            type: 'ul',
            items: [
              'La fuerza armada es el instrumento ordinario de la política exterior y no un recurso reservado para circunstancias excepcionales.',
              'El mando militar dispone de autoridad propia y no la deriva de las instituciones civiles que operan mediante ley.',
              'El servicio militar obligatorio y la formación profesional de oficiales sostienen esa autoridad por la vía de la socialización.',
              'La historia nacional se enseña como una sucesión de campañas y no como una serie de decisiones políticas discutibles.',
              'El [[nacionalismo|nacionalismo]] se usa como coartada legitimadora: la campaña se presenta como servicio al pueblo y la victoria como título de la nación.'
            ]
          },
          {
            type: 'p',
            text: 'Conviene distinguir tres planos que a menudo se confunden. La existencia de una fuerza armada es una necesidad de todo orden político, y hasta las organizaciones más próximas al pacifismo aceptan que el Estado conserve el monopolio de la violencia. El militarismo aparece cuando esa fuerza posee recursos propios, una jerarquía interna y una legitimidad que no procede de la Constitución. Su manifestación más característica no es la capacidad de declarar la guerra, sino la de condicionar la vida política cotidiana sin necesidad de una justificación formal.'
          },
          {
            type: 'p',
            text: 'El tratamiento académico del concepto se consolidó a partir de 1957, cuando Huntington publicó el estudio que sigue siendo la referencia del campo. Su tesis central fue que el problema de las relaciones civiles y militares no está en el texto legal sino en el grado de profesionalización del oficial. Los estudios posteriores corrigieron esa lectura y subrayaron el peso de las variables institucionales y de las circunstancias históricas, pero aquel libro consolidó un campo de análisis que sigue en uso.'
          }
        ]
      },
      {
        id: 'fronteras',
        heading: 'Militarismo, belicismo, imperialismo y dictadura militar',
        blocks: [
          {
            type: 'p',
            text: 'Militarismo, belicismo, imperialismo y dictadura militar se confunden con frecuencia, pero designan cosas distintas. El militarismo es una doctrina sobre quién manda y sobre qué valores gobiernan; el belicismo, una actitud favorable a la guerra; el imperialismo, un proyecto de expansión territorial y económica; la dictadura militar, un régimen nacido de un golpe de Estado. Solo el primero es una ideología en sentido estricto, y solo el primero supone una subordinación estable entre el mando y las instituciones civiles.'
          },
          {
            type: 'table',
            head: ['Criterio', 'Militarismo', 'Belicismo', 'Imperialismo', 'Dictadura militar'],
            rows: [
              ['Naturaleza', 'Ideología de Estado', 'Actitud ante la guerra', 'Proyecto de expansión', 'Régimen político'],
              ['Pregunta central', 'Quién manda', 'Si conviene la guerra', 'Hasta dónde se extiende', 'Quién gobierna tras el golpe'],
              ['Referente', 'Prusia, Japón y la Unión Soviética', 'Corrientes beligerantes de cualquier signo', 'Los imperios coloniales', 'Los golpes de Estado del siglo XX'],
              ['Relación con la guerra', 'La guerra es la política con otros medios', 'La guerra se desea o se evita', 'La guerra es un medio de expansión', 'La guerra suele ser el pretexto'],
              ['Antónimo habitual', 'Antimilitarismo', 'Pacifismo', 'Anticolonialismo', 'Civilismo']
            ]
          },
          {
            type: 'p',
            text: 'La relación entre ellos es de familia y no de identidad. Un imperio necesita una fuerza armada potente y puede organizarse sin militarismo si el mando militar responde a las instituciones civiles. Un régimen nacido de un golpe puede ser muy beligerante sin que su ejército ocupe el centro de la vida política. Solo el militarismo convierte esa subordinación en un principio general de gobierno, y por eso es el único de los cuatro que puede analizarse como una doctrina estable y no como un episodio pasajero.'
          },
          {
            type: 'ul',
            items: [
              'El militarismo coloca al mando militar por encima de las instituciones civiles; el [[liberalismo]] lo somete a la ley.',
              'El belicismo se expresa en el discurso y en la opinión pública; el militarismo se expresa además en la organización del Estado.',
              'El imperialismo fija un objetivo de expansión; el militarismo fija un orden interno de mando y de valores.',
              'La dictadura militar describe quién llegó al poder por la fuerza; el militarismo describe con qué valores se gobierna después.',
              'El [[pacifismo]] rechaza la guerra como instrumento; el militarismo la acepta como recurso normal y la simboliza.'
            ]
          },
          {
            type: 'p',
            text: 'A esas cuatro conviene añadir una quinta, la del armamentismo, que se refiere a la competencia y a la carrera de armamentos, es decir, a la magnitud del esfuerzo militar. Un país puede gastar mucho en defensa sin ser militarista si su mando permanece subordinado a los civiles y su política exterior acepta la negociación como método ordinario. La distinción importa porque permite separar el debate técnico sobre el gasto del debate constitucional sobre el mando, que con frecuencia queda oculto detrás del primero.'
          },
          {
            type: 'p',
            text: 'Si los dos conceptos se confunden, los casos históricos se leen mal. El golpe militar del 24 de marzo de 1976 en Argentina produjo un régimen autoritario que suspendió las garantías constitucionales y gobernó mediante decretos, pero el mando no procedía de una doctrina que lo situara por encima de las instituciones: la subordinación del ejército al poder civil se había pactado en 1958 y ese mismo año se restituyó la presidencia. Lo que faltó fue un militarismo doctrinariamente consolidado, no un golpe de Estado.'
          },
          {
            type: 'note',
            text: 'En el uso corriente se llama militarista a quien defiende posiciones duras sobre la defensa, y esa acepción trivializa el término. En el uso técnico que aquí se sigue, el militarismo es una relación de poder con efectos institucionales y no una simple opinión sobre el presupuesto, sobre las alianzas o sobre el tono del discurso oficial.'
          }
        ]
      },
      {
        id: 'doctrina',
        heading: 'La doctrina: primacía de lo militar y valores castrenses',
        blocks: [
          {
            type: 'p',
            text: 'La doctrina tiene dos fuentes principales. La primera es la teoría de la guerra: Clausewitz afirmó en 1832 que la guerra es una continuación de la política con otros medios, y esa fórmula, leída al revés, legitima el proyecto de invertir el orden de los factores. La segunda es la práctica del servicio militar, que enseña a los oficiales a evaluar la fuerza como la variable decisiva de la política y a considerar todo lo demás como una circunstancia modificable.'
          },
          {
            type: 'p',
            text: 'La expresión más precisa del militarismo es la primacía de lo militar: la idea de que el poder armado constituye la reserva última de la autoridad y de que las demás instituciones son derivaciones suyas. A esa primacía se añade la militarización de la política, entendida como el proceso por el cual el vocabulario, los procedimientos y la lógica de la defensa se trasladan a la administración, a la economía y a la vida cotidiana, hasta que cada conflicto se resuelve con la gramática de la guerra.'
          },
          {
            type: 'ul',
            items: [
              'Primacía de lo militar: la fuerza armada aparece como la fuente de la que proceden las demás autoridades.',
              'Militarización de la política: los procedimientos castrenses se extienden a la administración y a la diplomacia.',
              'Subordinación del poder civil: el ejecutivo y el parlamento tratan al mando armado como una autoridad superior y no como un agente sujeto a la ley.'
            ]
          },
          {
            type: 'dl',
            items: [
              ['Primacía de lo militar', 'Doctrina que sitúa al poder armado en el origen y en la cima de la autoridad estatal'],
              ['Militarización de la política', 'Proceso social por el que el ejército extiende su autoridad y su lenguaje sobre la vida civil'],
              ['Guerra total', 'Movilización íntegra de la sociedad al servicio del esfuerzo bélico, formulada por Ludendorff en 1935'],
              ['Estado guarnición', 'Situación en la que el mando militar domina los recursos y condiciona la decisión política'],
              ['Atadura', 'Mecanismo por el que un gobierno comprometido con la fuerza pierde libertad para ceder']
            ]
          },
          {
            type: 'quote',
            text: 'La guerra es una continuación de la política por otros medios.',
            cite: 'De la guerra, libro primero, edición de 1832',
            author: 'Carl von Clausewitz'
          },
          {
            type: 'p',
            text: 'El tercer elemento del núcleo doctrinal es un repertorio de valores castrenses. El honor, la disciplina, la obediencia, el coraje y la sospecha ante el adversario civil forman un conjunto coherente que se transmite por la academia, por la ceremonia y por el relato histórico, y que en Alemania entre 1933 y 1945 llegó a organizar la vida cotidiana del país. Su efecto político es notable, porque desplazan el criterio de legitimidad desde la elección hacia la competencia y desde el resultado hacia la disposición a sostener el coste.'
          },
          {
            type: 'p',
            text: 'La inversión de la fórmula clausewitziana dejó de ser una tesis académica después de 1945. El arma atómica hizo materialmente imposible la guerra total que había servido de fundamento a la doctrina, y desde entonces la exaltación de la fuerza se ha construido de otra manera, con la disuasión, la vigilancia del adversario y la promesa de represalia. Lo que no ha desaparecido es la convicción de que la guerra sigue siendo el instrumento más fiable de la política exterior.'
          }
        ]
      },
      {
        id: 'practica',
        heading: 'La práctica: juntas militares, presupuesto, industria y servicio',
        blocks: [
          {
            type: 'p',
            text: 'El militarismo no se sostiene solo en la doctrina: se sostiene en un conjunto de instituciones que lo reproducen. El más visible es el presupuesto, que compite con la educación, la sanidad y la investigación. Otros son la oficialidad profesional formada en academias militares, el servicio militar obligatorio, la ceremonia pública y una enseñanza de la historia contada como una sucesión de campañas. Cada uno de esos mecanismos parece inocuo por separado; en conjunto forman un sistema cerrado.'
          },
          {
            type: 'p',
            text: 'El primer mecanismo institucional son las juntas militares y, en general, los órganos consultivos que informan al gobierno sobre la situación del enemigo y sobre el estado de las fuerzas. Su función formal es técnica, pero su efecto político es notable: convierten a la estimación militar en el punto de partida de cualquier decisión de política exterior y dan al mando una vía de acceso directo al poder ejecutivo, por encima del poder legislativo.'
          },
          {
            type: 'ul',
            items: [
              'Juntas militares: informes sobre el enemigo y sobre las fuerzas disponibles, que convierten el cálculo militar en el punto de partida de la decisión.',
              'Presupuesto de defensa: partida protegida frente al ajuste y financiada con créditos extraordinarios en los momentos de tensión.',
              'Complejo industrial-militar: proveedores que necesitan contratos estables y dependen de la demanda del Estado y de la exportación de armas.',
              'Servicio militar obligatorio: coacción legal y socialización en la disciplina y en la obediencia de una generación entera.',
              'Ceremonia, monumentos y desfiles: acto público que convierte la guerra en objeto de devoción colectiva.',
              'Enseñanza de la historia: la sucesión de campañas sustituye a la sucesión de decisiones políticas discutibles.'
            ]
          },
          {
            type: 'p',
            text: 'El efecto político de la ceremonia es difícil de medir y por eso se subestima. La ceremonia, los monumentos, los desfiles y la enseñanza de la historia en clave castrense no alteran una sola línea del presupuesto, pero fijan el imaginario en el que se acepta lo que no se discute. Una generación que aprende la historia como sucesión de campañas hereda un vocabulario que permite llamar precio a lo que otros llaman daño, y ese cambio de léxico acaba pesando más que el argumento económico.'
          },
          {
            type: 'p',
            text: 'El presupuesto de defensa es el instrumento más medible. Las series internacionales de gasto militar permiten observar cómo una partida protegida crece más deprisa que la economía, cómo se desplaza del capítulo ordinario a créditos extraordinarios en los momentos de tensión y cómo esa combinación refuerza la autonomía del mando. El dato no prueba por sí solo que exista militarismo, pero sí que el marco en el que se decide ha cambiado de naturaleza.'
          },
          {
            type: 'p',
            text: 'El complejo industrial-militar añade un segundo circuito. Las empresas de defensa necesitan contratos estables y viven de la exportación, de modo que sus intereses sobreviven a los cambios de gobierno. Ese interés empuja el gasto desde el interior y reduce el margen de recorte, y explica por qué las grandes potencias han mantenido sus presupuestos de defensa incluso en periodos de tensión económica.'
          },
          {
            type: 'note',
            text: 'El servicio militar obligatorio merece una mención aparte, porque es a la vez el instrumento de socialización más eficaz del militarismo y el que más claramente se ha erosionado en las democracias avanzadas. El Reino Unido lo suspendió en 1960, Alemania en 1995 y España en 2001, por razones de coste y de profesionalización, pero también por un cambio profundo en la relación entre la fuerza y la sociedad civil.'
          }
        ]
      },
      {
        id: 'siglo-xx',
        heading: 'Los militarismos del siglo XX y las dictaduras latinoamericanas',
        blocks: [
          {
            type: 'p',
            text: 'La guerra de 1914 a 1918 convirtió la guerra total en programa de Estado. Los Estados industrializados organizaron la industria, la propaganda y el esfuerzo bélico como un sistema único, y a partir de entonces quedó instalada la idea de que la guerra se planifica con plazos y presupuestos, no se improvisa cuando estalla. En ese marco el militarismo dejó de ser una corriente de opinión y pasó a ser una administración con recursos, personal y normativa propios.'
          },
          {
            type: 'p',
            text: 'En Alemania, en la Unión Soviética y en Italia el militarismo se articuló con el [[fascismo]] y con el [[totalitarismo]]. La guerra pasó a ser un hecho fundante de la nación, la planificación se hizo secreto de Estado y el mando militar obtuvo un lugar formal en la economía, en la propaganda y en la administración civil. Ahí el militarismo dejó de ser una tendencia y se convirtió en el régimen mismo.'
          },
          {
            type: 'p',
            text: 'En América Latina el militarismo adoptó una forma propia, basada en el control del ejército sobre el gobierno civil, en la doctrina de la seguridad nacional y en la idea de que las fuerzas armadas son la garantía de la continuidad constitucional. El ciclo más largo de intervención se abrió en Argentina con el golpe del 30 de septiembre de 1930, que derrocó a Hipólito Yrigoyen, y se cerró con la dictadura de la Junta Militar del Proceso de Reorganización Nacional, instalada el 24 de marzo de 1976.'
          },
          {
            type: 'p',
            text: 'Entre esas dos fechas caben otras dos rupturas decisivas. El 4 de junio de 1943 un grupo de generales del Ejército depuso a Ramón Castillo y estableció un gobierno de facto dirigido por la Tercera División. El 21 de septiembre de 1955 otra conjunción de generales derrocó a Juan Domingo Perón, y el 24 de marzo de 1976 la Junta Militar puso fin a la experiencia constitucional iniciada en 1958. El ejército argentino aparece en ese tramo como árbitro de la sucesión presidencial.'
          },
          {
            type: 'p',
            text: 'En el Cono Sur el ciclo se repitió con variantes. El 1 de abril de 1964 el ejército derrocó a João Goulart en Brasil, y la dictadura resultante se prolongó hasta la Constitución de 1988. El 27 de junio de 1973 se disolvieron el Parlamento y el Gobierno de Uruguay, y el 11 de septiembre de 1973 un golpe militar en Chile instaló la dictadura de Augusto Pinochet, que se mantuvo hasta 1990.'
          },
          {
            type: 'p',
            text: 'El marco ideológico común llegó de fuera. La Ley de Seguridad Nacional de 1947 en Estados Unidos y el informe NSC-68 de 1950 dieron forma a una doctrina de seguridad nacional que identificaba al adversario ideológico como amenaza permanente y concedía a las fuerzas armadas un papel central en la política. En América Latina esa fórmula se tradujo en legislaciones que subordinaban la política exterior a los criterios de defensa y en la invención del enemigo interno como justificante de la excepción.'
          },
          {
            type: 'ul',
            items: [
              'El militarismo prusiano, asociado a la reforma de 1807-1813 y a la unificación nacional de 1871.',
              'El militarismo japonés, ligado a la expansión imperial en Asia y en el Pacífico entre 1868 y 1945.',
              'El militarismo soviético, en el que el mando del frente llegó a tener una autonomía casi absoluta desde los años treinta.',
              'El militarismo de las dictaduras latinoamericanas, de los golpes de 1930 en Argentina a la dictadura de 1976-1983.',
              'El militarismo contractual de las democracias del [[capitalismo|capitalismo]], más medido y ligado al gasto y a la industria.'
            ]
          },
          {
            type: 'p',
            text: 'Los conflictos instigados por regímenes autoritarios, en Asia y en África, muestran el extremo práctico de esta corriente: desde la invasión de Etiopía de 1935 hasta la guerra de Vietnam, la guerra deja de ser un instrumento de política y se convierte en un fin, y la ocupación de otros países deja de ser una excepción para volverse un objetivo declarado de la campaña.'
          },
          {
            type: 'note',
            text: 'Las dictaduras latinoamericanas no responden a una sola causa: pesaron la crisis de las repúblicas entre 1930 y 1980, el deterioro del comercio mundial tras 1929, la presión de Estados Unidos en la Guerra Fría y una larga tradición de intervención del ejército en la política interna. Los historiadores siguen discutiendo cuánto pesó cada factor.'
          }
        ]
      },
      {
        id: 'evolucion',
        heading: 'Evolución contemporánea y estado del debate',
        blocks: [
          {
            type: 'p',
            text: 'Después de 1945 se produjo un desplazamiento notable. El militarismo atómico no necesita ejércitos masivos ni ceremonias: le bastan los arsenales, la vigilancia del adversario y la promesa de represalia. Su economía se apoya en la industria de defensa y en la investigación de armamentos, y su efecto político más visible está en la política exterior y no en la calle.'
          },
          {
            type: 'p',
            text: 'Desde 1990 la profesionalización ha cambiado el objeto de la discusión. La guerra del Golfo de 1991 y la invasión de Irak de 2003 se justificaron con argumentos legales y no con el culto a la batalla, y el mando militar ha pasado a presentarse como un instrumento técnico sujeto al derecho internacional. Eso no ha extinguido la doctrina: ha desplazado su lugar, del culto al soldado hacia el cálculo de capacidades, de coaliciones y de tecnología.'
          },
          {
            type: 'p',
            text: 'En paralelo se reforzaron los controles civiles sobre el mando. La [[geo:guerra-en-ucrania|guerra en Ucrania]], iniciada por la invasión rusa de febrero de 2022, ha vuelto a poner el término en el centro del debate europeo, y en los dos bandos se ha repetido la glorificación del combatiente como recurso para presentar cualquier decisión de fuerza como inevitable.'
          },
          {
            type: 'quote',
            text: 'Hay que defender la sociedad.',
            cite: 'Curso de 1976 en el Collège de France, publicado en París en 1997',
            author: 'Título del curso'
          },
          {
            type: 'p',
            text: 'Queda un debate abierto sobre el alcance del término. Para algunos, cualquier política de disuasión es militarismo; para otros, el militarismo exige que el mando se sitúe por encima de las instituciones civiles. La primera lectura es más amplia y la segunda más exigente, y esa diferencia explica buena parte de las discusiones actuales sobre el gasto y sobre la defensa colectiva.'
          },
          {
            type: 'p',
            text: 'Lo que no está en discusión es el costo. En las democracias el militarismo se ha abierto paso por vías menos visibles que el golpe de Estado: la reforma de la defensa, la excepción constitucional y la presencia de militares en los órganos de decisión exterior. Por eso el estudio de las relaciones civiles y militares sigue siendo el instrumento más preciso para detectarlo.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas, costo social y legado',
        blocks: [
          {
            type: 'p',
            text: 'Es fácil descalificar la glorificación heroica de la guerra como un simple recurso retórico. Lo importante es otra cosa: esa glorificación tiene consecuencias medibles en la política exterior de un Estado y se pueden observar en los casos en que se ha producido. No es una opinión sobre el gusto, sino una hipótesis con efectos comprobados, que puede contrastarse con la evidencia histórica disponible.'
          },
          {
            type: 'p',
            text: 'El primer efecto es un compromiso vinculante. Un gobierno que ha construido su imagen sobre la fuerza tiene dificultades para ceder sin perder la cara, y esa dificultad opera como una atadura: ata sus propias manos y le resta libertad de acción. James Fearon mostró en 1995 que esa atadura es uno de los mecanismos que hacen posible la guerra entre Estados racionales en el resto de sus decisiones.'
          },
          {
            type: 'p',
            text: 'El segundo efecto es el del golpe de Estado. Cuando el mando militar percibe que las instituciones civiles se han debilitado, o cuando un conflicto externo exige decisiones rápidas, la presión interna puede convertir al ejército en factor de gobierno. Es la secuencia que se observó en buena parte de América Latina entre 1930 y 1976 y en varios países de Europa oriental, con resultados muy distintos según el caso.'
          },
          {
            type: 'ul',
            items: [
              'Falsa alternativa: la idea de que la fuerza es el único instrumento eficaz de la política exterior.',
              'Coste material: recursos sustraídos a la educación, la sanidad y la investigación.',
              'Coste político: decisiones de guerra tomadas sin deliberación pública ni supervisión del parlamento.',
              'Coste social: una sociedad educada en la obediencia que aprende a no discutir lo que le afecta.',
              'Coste institucional: la excepción constitucional invocada de forma reiterada acaba vaciando de contenido a la Constitución.'
            ]
          },
          {
            type: 'p',
            text: 'El tercero es la represión y el costo social. Cuando el militarismo llega al poder, la disidencia política se trata como un problema de seguridad y se suspenden las garantías habituales. El ejemplo más citado es la dictadura argentina de 1976 a 1983, pero el patrón se repitió en los regímenes de Brasil, Chile y Uruguay. A ello se añade el coste de oportunidad: recursos que no se destinan a educación, sanidad o investigación, y una sociedad educada en la obediencia.'
          },
          {
            type: 'note',
            text: 'La defensa del militarismo no es ingenua: sus defensores, y con ellos buena parte del [[conservadurismo|conservadurismo]] que suele absorberlo, sostienen que sin una fuerza capaz de disuadir la paz se apoya solo en la buena voluntad del adversario. El argumento tiene un peso real y explica por qué el pacifismo absoluto convenció a pocos, pero no justifica la glorificación, porque la disuasión no necesita culto, sino capacidad y respeto al derecho humanitario.'
          },
          {
            type: 'p',
            text: 'El legado del militarismo es ambivalente y no conviene condensarlo en un juicio único. De un lado dejó organizaciones capaces de resistir a una invasión, profesionalizó a la oficialidad y sostuvo un sector industrial del que hoy dependen muchas economías desarrolladas. Del otro dejó constituciones suspendidas, décadas de vigilancia política y una confianza erosionada en las instituciones que interpretaron su propia defensa.'
          }
        ]
      }
    ],
    categories: ['Militarismo', 'Ideologías políticas', 'Teorías de la guerra'],
    related: ['pacifismo', 'nacionalismo', 'conservadurismo', 'totalitarismo', 'maoismo'],
    references: [
      {
        title: 'Vom Kriege',
        author: 'Carl von Clausewitz',
        publisher: 'Reimer, Berlín',
        year: 1832,
        type: 'libro'
      },
      {
        title: 'Der totale Krieg',
        author: 'Erich Ludendorff',
        publisher: 'Ludendorffs Verlag, Múnich',
        year: 1935,
        type: 'libro'
      },
      {
        title: 'The Soldier and the State: The Theory and Politics of Civil-Military Relations',
        author: 'Samuel P. Huntington',
        publisher: 'Belknap Press of Harvard University Press, Cambridge',
        year: 1957,
        type: 'libro',
        url: 'https://www.hup.harvard.edu/books/9780674817364'
      },
      {
        title: 'Il faut défendre la société. Cours au Collège de France. 1976',
        author: 'Michel Foucault',
        publisher: 'Éditions du Seuil, París',
        year: 1997,
        type: 'libro',
        url: 'https://www.seuil.com/ouvrage/-il-faut-defendre-la-societe-michel-foucault/9782020231695'
      },
      {
        title: 'The Garrison State',
        author: 'Harold D. Lasswell',
        publisher: 'American Journal of Sociology, volumen 46, número 4, páginas 455 a 468, Chicago',
        year: 1941,
        type: 'articulo',
        url: 'https://www.journals.uchicago.edu/doi/10.1086/218693'
      },
      {
        title: 'Rationalist Explanations for War',
        author: 'James D. Fearon',
        publisher: 'International Organization, volumen 49, número 3, páginas 379 a 414, Cambridge',
        year: 1995,
        type: 'articulo',
        url: 'https://www.jstor.org/stable/2706903'
      },
      {
        title: 'Logics of War: Explanations for Limited and Unlimited Conflicts',
        author: 'Alex Weisiger',
        publisher: 'Cornell University Press, Ithaca',
        year: 2013,
        type: 'libro',
        url: 'https://cornellpress.cornell.edu/book/9780801451867/logics-of-war/'
      },
      {
        title: 'Military Expenditure Database',
        author: 'Instituto Internacional de Investigación para la Paz de Estocolmo',
        publisher: 'Uppsala',
        year: 2026,
        type: 'dato',
        url: 'https://www.sipri.org/databases/milex'
      },
      {
        title: 'Diccionario de la lengua española, entrada militarismo',
        author: 'Real Academia Española y Asociación de Academias de la Lengua Española',
        publisher: 'Madrid',
        year: 2024,
        type: 'enciclopedia',
        url: 'https://dle.rae.es/militarismo'
      },
      {
        title: 'War',
        author: 'Brian Orend',
        publisher: 'Stanford Encyclopedia of Philosophy, Stanford University Press',
        year: 2024,
        type: 'enciclopedia',
        url: 'https://plato.stanford.edu/entries/war/'
      },
      {
        title: 'Constitución española, texto consolidado',
        author: 'Jefatura del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 1978,
        type: 'ley',
        url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-1978-31229'
      },
      {
        title: 'War in European History',
        author: 'Michael Howard',
        publisher: 'Oxford University Press, Oxford',
        year: 1976,
        type: 'libro'
      },
      {
        title: 'Bananas, Beaches and Bases: Military Politics and the Defense of the United States',
        author: 'Cynthia Enloe',
        publisher: 'Pandora Press, Londres',
        year: 1984,
        type: 'libro'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
