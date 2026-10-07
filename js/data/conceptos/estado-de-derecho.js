(function (PW) {
  PW.conceptos = PW.conceptos || {};
  'use strict';
  PW.conceptos['estado-de-derecho'] = {
    kind: 'concepto',
    slug: 'estado-de-derecho',
    title: 'Estado de derecho',
    subtitle: 'Orden político en el que todo poder público queda sometido a normas generales y garantizadas',
    category: 'Conceptos',
    tags: ['legalidad', 'supremacía constitucional', 'tribunal constitucional', 'seguridad jurídica', 'derechos fundamentales'],
    updated: '2026-09-29',
    summary: 'Principio de organización según el cual el poder público se ejerce conforme a normas generales, previamente aprobadas y sometidas a control. Nace de la tradición inglesa del rule of law, sintetizada por Dicey en 1885, y de la doctrina alemana del Rechtsstaat, y se concreta en instituciones como la constitución rígida, el tribunal constitucional y un poder judicial independiente.',
    infobox: {
      caption: 'Estado de derecho',
      color: '#3f5c4a',
      rows: [
        ['Origen del término', 'Alemania, siglo XIX, con la doctrina del Rechtsstaat'],
        ['Equivalente inglés', 'Rule of law, sintetizado por A. V. Dicey en 1885'],
        ['Núcleo doctrinal', 'Supremacía de la ley sobre el poder arbitrario'],
        ['Autores de referencia', 'Dicey, Mohl, Mayer, Friedrich, Kelsen, Rawls y Raz'],
        ['Variantes principales', 'Formal o débil, material o fuerte, y Estado constitucional'],
        ['Ámbito', 'Universal en el derecho comparado contemporáneo'],
        ['Debate actual', 'Estados de excepción, independencia judicial y peso de los tribunales']
      ]
    },
    sections: [
      {
        id: 'definicion',
        heading: 'Definición y principios',
        blocks: [
          {
            type: 'p',
            text: 'El estado de derecho es el principio de organización política según el cual todo poder público se ejerce conforme a normas generales, previamente aprobadas, publicadas y sometidas a control. La definición admite dos alcances. En sentido formal exige que exista un ordenamiento de normas al que se ajusten los actos de gobierno, con independencia de lo que esas normas digan. En sentido material exige además que esas normas limiten el poder y protejan derechos, de modo que un Estado que reúna lo primero y no lo segundo no merece el nombre. La discusión doctrinal reciente ha desplazado el peso hacia la segunda acepción.'
          },
          {
            type: 'dl',
            items: [
              ['Legalidad', 'Todo poder actúa sobre la base de una norma vigente, publicada y anterior al acto.'],
              ['Jerarquía normativa', 'Las normas se ordenan en rangos, de modo que ninguna puede contradecir a otra superior.'],
              ['Seguridad jurídica', 'Los ciudadanos pueden confiar en la estabilidad de las reglas y en la previsibilidad de sus efectos.'],
              ['Supremacía constitucional', 'La constitución ocupa la cúspide del ordenamiento y vincula a todos los poderes.'],
              ['Proporcionalidad', 'Las medidas que limitan derechos deben ser adecuadas, necesarias y proporcionadas.'],
              ['Control de constitucionalidad', 'Un órgano independiente puede revisar y anular los actos contrarios a la norma superior.']
            ]
          },
          {
            type: 'table',
            head: ['Hito', 'Año', 'Aportación al estado de derecho'],
            rows: [
              ['Carta Magna', '1215', 'La corona se somete a la ley y a los acuerdos con los barones'],
              ['Habeas corpus', '1679', 'Se limita la detención arbitraria y se fija un procedimiento judicial'],
              ['Bill of Rights', '1689', 'Se delimitan las facultades de la monarquía y se consolidan las atribuciones del parlamento'],
              ['Acta de Establecimiento', '1701', 'Los jueces conservan su cargo mientras observen buena conducta'],
              ['Declaración de los Derechos del Hombre', '1789', 'Los derechos se enuncian como límite anterior y superior al poder'],
              ['Ley Fundamental alemana', '1949', 'La cláusula de derechos y el control de la constitucionalidad se convierten en norma']
            ]
          },
          {
            type: 'p',
            text: 'Los principios se articulan entre sí de forma que ninguno basta por separado. La legalidad sin jerarquía es un acumulación de normas sin orden interno; la jerarquía sin control deja la norma superior sin vigilancia; la seguridad jurídica sin proporcionalidad convierte la estabilidad en escudo del abuso. Por eso la satisfacción de un estado de derecho exige un conjunto articulado y no un único criterio, y esa exigencia explica que las constituciones modernas dediquen su parte central a los derechos fundamentales y a la organización de los órganos que los defienden.'
          },
          {
            type: 'note',
            text: 'Conviene no confundir el estado de derecho con el contenido democrático del poder. Un gobierno puede ser legítimo en un ordenamiento que respeta los procedimientos y limita su duración conforme a la constitución, y seguir siendo ajeno a la representación y a la participación. La relación entre ambos conceptos es recíproca y no de identidad, y la [[concepto:democracia|democracia]] puede añadir a un estado de derecho recién constituido una capa de participación que todavía no existe.'
          }
        ]
      },
      {
        id: 'origenes',
        heading: 'Orígenes: la tradición inglesa y el Rechtsstaat',
        blocks: [
          {
            type: 'p',
            text: 'La doctrina alemana del Rechtsstaat se construyó como respuesta al arbitrio de la monarquía absoluta. Robert von Mohl afirmó en 1832 que todo Estado moderno es un Estado de derecho, porque la administración solo puede actuar sobre la base de una autorización legal. La expresión alcanzó su máximo desarrollo con Otto Mayer en 1884 y con Carl Friedrich a partir de los años treinta del siglo XX, y culminó en la Ley Fundamental de 1949, que consagra la cláusula de derechos y la revisión de la constitucionalidad por el Tribunal Constitucional.'
          },
          {
            type: 'p',
            text: 'A. V. Dicey fijó en 1885, en Introducción al estudio del derecho de la constitución, la formulación que se convirtió en la referencia. Su tesis tiene tres momentos. Primero, el principio de dominio regular de la ley, es decir, que ninguna persona queda por encima de la ley. Segundo, la separación de los poderes del Estado, que impide que una misma autoridad legisle, aplique y juzgue a la vez. Tercero, la generalización de los derechos, entendidos como límites que ningún ciudadano puede ver vulnerados fuera de las formas fijadas por la ley. El tercero es el añadido que distingue la formulación inglesa de la idea simple de dominio de la ley.'
          },
          {
            type: 'ul',
            items: [
              'Acepción formal o débil: exige que el poder tenga base legal, sin suponer nada sobre el contenido de esa ley.',
              'Acepción material o fuerte: exige además que la ley limite el poder y reconozca derechos frente a él.',
              'Acepción constitucional: vincula el estado de derecho a una norma superior con reforma reforzada y control de constitucionalidad.',
              'Estado social de derecho: añade a las garantías anteriores la exigencia de que la actuación pública tenga también una justificación material.'
            ]
          },
          {
            type: 'p',
            text: 'La recepcion del modelo alemán se acelero después de 1945. En Alemania y en Austria, la ocupacion militar impuso constituciones que establecian un tribunal constitucional y una clausula de derechos. Esa imposicion del modelo se sustituyo pronto por una tradicion constitucional propia, y las constituciones de 1949 en ambos países se convirtieron en un instrumento de integracion europea en materia de derechos y de control de la constitucionalidad.'
          }
        ]
      },
      {
        id: 'componentes',
        heading: 'Componentes institucionales',
        blocks: [
          {
            type: 'p',
            text: 'El estado de derecho se apoya en tres instituciones que se refuerzan entre sí. La constitución rígida fija por encima de la legislación ordinaria los principios del ordenamiento y los derechos. El tribunal constitucional revisa sí las leyes y los actos del poder respetan esos principios. El poder judicial independiente resuelve los conflictos entre particulares y entre estos y la administración. Si falta cualquiera de las tres, el conjunto se resiente: sin constitución superior no hay jerarquía, sin tribunal la norma suprema queda sin vigilancia y sin jueces independientes el resto de las garantías se convierte en declaración de intenciones.'
          },
          {
            type: 'ul',
            items: [
              'Constitución rígida: se reforma por un procedimiento más exigente que el de la ley ordinaria y goza de superioridad jerárquica.',
              'Tribunal constitucional o equivalente: en el caso de Estados Unidos, la Corte Suprema, que conoce de las impugnaciónes contra normas con fuerza de ley.',
              'Poder judicial independiente: jueces nombrados con garantías, inamovibles y sin instrucción política.',
              'Ministerio fiscal y auditoría del Estado: órganos externos que controlan la legalidad de la administración.',
              'Defensor del pueblo: investiga prácticas denunciadas por los ciudadanos y propone reformas normativas.'
            ]
          },
          {
            type: 'quote',
            text: 'La Constitución es la norma suprema del orden jurídico, a la que se someten todos los poderes públicos y todos los ciudadanos.',
            cite: 'Constitución española de 1978, artículo 9.2',
            author: 'Asamblea Constituyente española'
          },
          {
            type: 'p',
            text: 'El control concentrado mantiene la revisión en un solo órgano, como el Tribunal Constitucional alemán de 1951 o el Consejo Constitucional francés de 1958. El control difuso reparte la competencia entre varios jueces y tribunales, y es el que corresponde a Estados Unidos. Ambos sistemas tienden a converger: en la mayoría de los países europeos se concentra el control, mientras que en el ámbito anglosajón se ha reforzado la revisión judicial tras la crisis de Watergate de 1974.'
          }
        ]
      },
      {
        id: 'garantias',
        heading: 'Garantías frente al poder',
        blocks: [
          {
            type: 'p',
            text: 'Las garantías son la otra cara del principio. Si el estado de derecho obliga al poder a fundar su actuación en normas, los ciudadanos necesitan medios para exigir que se cumpla esa exigencia. El catálogo clásico incluye la igualdad ante la ley, la libertad personal y la prohibición de la prisión arbitraria, el derecho a un juicio justo con independencia del juez, la inviolabilidad del domicilio y de la correspondencia, la libertad de expresión, asociación y reunión, y el derecho a la protección efectiva. La Declaración Universal de los Derechos Humanos de 1948 los recogió en formulación universal.'
          },
          {
            type: 'ul',
            items: [
              'Igualdad ante la ley: mismo tratamiento para iguales, sin privilegios de nacimiento, sexo, religión o condición social.',
              'Libertad personal: detención solo con base legal, audiencia previa y plazo máximo de la medida privativa de libertad.',
              'Juicio justo: presunción de inocencia, derecho a defensa y a contradictorio, y tribunal independiente e imparcial.',
              'Inviolabilidad del domicilio y secreto de las comunicaciones, con excepciones tasadas y control judicial.',
              'Libertad de expresión, reunión y asociación, con límites que la propia constitución autoriza y que un tribunal debe controlar.',
              'Remedios efectivos: recurso de amparo, tutela, habeas corpus y revisión de la constitucionalidad de los actos.'
            ]
          },
          {
            type: 'p',
            text: 'La garantía de la revisión de la constitucionalidad ocupa un lugar aparte porque actua contra las mismás normas. En el modelo alemán, una ley aprobada por el propio parlamento puede ser anulada si vulnera derechos o limites del ordenamiento. Ese poder no es ilimitado: solo puede ejercerse con respecto a normas posteriores a la entrada en vigor de la norma superior y dentro de las formas que esa norma establezca. La consecuencia de sus decisiones es vinculante, lo que convierte al tribunal en el intérprete autorizado de la constitución.'
          },
          {
            type: 'note',
            text: 'Una confusión frecuente consiste en creer que los derechos se garantizan por sí solos. Un catálogo de derechos sin órganos que puedan aplicarlos y sin vías para impugnar los actos no produce efecto práctico. La eficacia de las garantías depende menos de su redacción que de la ubicación y accesibilidad de los tribunales y de la accesibilidad de las personas a ellos.'
          }
        ]
      },
      {
        id: 'democracia-y-derecho',
        heading: 'Estado de derecho y democracia',
        blocks: [
          {
            type: 'p',
            text: 'La relación entre estado de derecho y democracia es de inclusión, no de identidad. Una constitución puede establecer un sufragio universal y, a la vez, un sistema autoritario: por eso las traducciones del término rule of law no siempre coinciden. La constitución democráticamente aceptada garantiza el principio de que los gobernados son governados por normas que ellos mismos aceptan; el estado de derecho garantiza además que esas normas se aplican por igual a todos. La combinación de ambos criterios define lo que se ha llamado constitucionalismo democrático.'
          },
          {
            type: 'p',
            text: 'El punto de fricción esta en los límites. La mayoría puede decidir casí todo por la vía ordinaria, pero no puede abolir la constitución, suprimir un derecho fundamental ni sustituir el procedimiento electoral. Esa frontera convierte la votación en un procedimiento político y no en un acto de soberanía absoluta. La teoría actual de la democracia, en la línea de Robert Dahl o de las concepciones de Habermás, sostiene que el valor democrático de un procedimiento depende de que respete condiciones de inclusión, igualdad y control que van más allá de la simple regla de mayoría.'
          },
          {
            type: 'note',
            text: 'De esa distinción se sigue una consecuencia útil para el análisis de los casos contemporáneos. Un gobierno que consulta, debate y decide puede ser democrático en su procedimiento y, al mismo tiempo, limitado en su resultado por un marco constitucional que protege a las minorias. Y a la inversa, un gobierno que pierde las elecciones sigue siendo legítimo si la pérdida se acepta y se respeta el resultado, que es exactamente lo que mide la diferencia entre rule of law y Estado de partido único.'
          }
        ]
      },
      {
        id: 'excepcion',
        heading: 'Estados de excepción y tensiones contemporáneas',
        blocks: [
          {
            type: 'p',
            text: 'Todo estado de derecho prevé un régimen excepcional para los momentos en los que el orden ordinario resulta insuficiente. Su lógica se opone al principio, y por eso exige condiciones estrechas: declaración formal, plazo determinado, control del parlamento y limitación de la suspensión a los derechos que la propia constitución permite suspender. Un estado de emergencia que se prolonga, se renueva por decreto y elimina la revisión judicial deja de ser una excepción para convertirse en el procedimiento ordinario.'
          },
          {
            type: 'p',
            text: 'Los casos de Hungría y Polonia ilustran el problema en su versión contemporánea. En Hungría, la Ley Fundamental de 2012 faculta al gobierno a declarar el estado de emergencia con una mayoría simple, y ese precepto se utilizó en marzo de 2020 ante la pandemia. En Polonia, las reformas judiciales de 2015 a 2017 modificaron la composición del Tribunal Constitucional y del Consejo Nacional del Poder Judicial. Eso provocó la suspensión de varios jueces y la retirada de la Comisión Europea de sus poderes de vigilancia en el país. En ambos casos el conflicto se centró en si la reforma era legal bajo el ordenamiento vigente, es decir, si el estado de derecho permitía cambiar las reglas por el procedimiento ordinario.'
          },
          {
            type: 'ul',
            items: [
              'Estados Unidos: la Ley Nacional de Emergencias de 1976 y las declaraciones de emergencia de 1977, 2001 y 2020.',
              'Francia: el estado de emergencia de 2015 tras los ataques, prorrogado dos veces y levantado en 2017.',
              'Hungría: estado de emergencia de 2020 sobre la base del artículo 28 de la Ley Fundamental.',
              'Polonia: conflicto judicial de 2015 a 2023, con dictámenes de la CJUE de 2018, 2019 y 2021.',
              'España: los estados de excepción previstos en el artículo 55 de la Constitución de 1978, nunca activados desde la democracia.',
            ]
          },
          {
            type: 'note',
            text: 'La teoría más elaborada sobre el estado de emergencia distingue entre los que solo suspenden algunos derechos y los que imponen la suspensión total. La Constitución española de 1978 aplica ese criterio en su artículo 55, al regular por separado los estados de sitio, de excepción y de emergencia, y limita el estado de sitio a los casos de insurrección. La graduación es relevante: cuanto mayor es la restricción de derechos, mayor debe ser el control de la Cámara y menor el plazo.'
          }
        ]
      },
      {
        id: 'indices',
        heading: 'Índices de medición',
        blocks: [
          {
            type: 'p',
            text: 'La medición del estado de derecho se ha institucionalizado en dos organismos anuales. El World Justice Project publica desde 2011 el Rule of Law Index, que ordena los países según ocho factores: restricciones al gobierno, ausencia de corrupción, gobierno abierto, derechos fundamentales, orden y seguridad, aplicación reglamentaria, justicia civil y justicia penal. Cada factor se puntua entre cero y uno, y la media de los ocho da la puntuación final. El índice no mide si un país es democrático, sino si su ordenamiento cumple una lista de condiciones que se dio por supuestas al construirlo.'
          },
          {
            type: 'dl',
            items: [
              ['World Justice Project', 'Restricciones al poder y acceso a la justicia, con datos sobre litigios y cumplimiento de sentencias.'],
              ['V-Dem', 'Leyes y independencia judicial, mediante variables codificadas por especialistas a partir de fuentes múltiples.'],
              ['Freedom House', 'Derechos políticos y libertades civiles, con una escala por país y por territorio.'],
              ['Banco Mundial', 'Calidad de las instituciones públicas, mediante estimaciones sobre administración y regulación.']
            ]
          },
          {
            type: 'note',
            text: 'La lectura de esos informes exige tres precauciones. Un buen puesto en un índice no describe la vida de una persona corriente, que se enfrenta a plazos largos en los tribunales. Además, los factores están correlacionados entre sí, de modo que un mismo defecto institucional aparece una y otra vez en preguntas distintas. Y publicar las cifras cambia el comportamiento de los gobiernos evaluados, de manera que la reacción forma parte del propio indicador.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas y perspectivas',
        blocks: [
          {
            type: 'p',
            text: 'La crítica más extendida al estado de derecho procede de la izquierda: un orden jurídico que protege la propiedad y la jerarquía social no es neutro, y sus formas correctas pueden esconder un contenido opresivo. La respuesta habitual es que un ordenamiento imperfecto es mejor que la alternativa, pero esa respuesta se apoya en una comparación entre males y no en una justificación del sistema. La objeción tiene fuerza cuando las propias normas del estado de derecho permiten un resultado que contradice los derechos que enuncian.'
          },
          {
            type: 'p',
            text: 'La segunda crítica es liberal y simétrica: un estado de derecho muy estricto puede volverse un obstáculo para corregir desigualdades, porque exige procedimiento para cambiar el procedimiento. A esa objeción responden quienes consideran que la lentitud es un precio aceptable, ya que la vía rápida de la reforma es la que usan los gobiernos que menos constrain. La tercera crítica, de raíz conservadora, sostiene que el estado de derecho hobbesiano legitima la imposición de un orden que solo un Estado fuerte puede garantizar.'
          },
          {
            type: 'p',
            text: 'Las perspectivas abiertas se agrupan en dos familias. La primera busca reforzar la vinculación entre normas y realidad mediante la digitalización de los procedimientos, la apertura de datos y la mediación administrativa. La segunda trabaja en la dirección contraria, con la participación de los ciudadanos en la elaboración y la fiscalización de las normas. Ninguna de las dos ha desplazado a la otra, y el concepto sigue siendo, como en el siglo XIX, un instrumento de disputa y no solo de descripción.'
          }
        ]
      }
    ],
    categories: ['Conceptos', 'Teoría política', 'Derecho constitucional'],
    related: ['concepto:democracia', 'concepto:separacion-de-poderes', 'ideologia:liberalismo', 'gob:polonia', 'org:union-europea'],
    references: [
      {
        title: 'Introducción al estudio del derecho de la constitución',
        author: 'Albert Venn Dicey',
        publisher: 'Clarendon Press, Oxford',
        year: 1885,
        type: 'libro'
      },
      {
        title: 'La ciencia de la policía según los principios del Rechtsstaat',
        author: 'Robert von Mohl',
        publisher: 'H. Laupp, Tubinga',
        year: 1832,
        type: 'libro'
      },
      {
        title: 'General Theory of Law and State',
        author: 'Hans Kelsen',
        publisher: 'Harvard University Press, Cambridge',
        year: 1944,
        type: 'libro'
      },
      {
        title: 'La autoridad del derecho: ensayos sobre derecho y moral',
        author: 'Joseph Raz',
        publisher: 'Fondo de Cultura Económica, México',
        year: 2000,
        type: 'libro'
      },
      {
        title: 'Estado de derecho',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'enciclopedia',
        url: 'https://es.wikipedia.org/wiki/Estado_de_derecho'
      },
      {
        title: 'Constitución de la España Democrática de 1978',
        author: 'Jefatura del Estado y Consejo de Ministros',
        publisher: 'Agencia Estatal Boletín Oficial del Estado, Madrid',
        year: 1978,
        type: 'documento',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229'
      },
      {
        title: 'La Ley Fundamental de la República Federal de Alemania',
        author: 'Bundestag y Bundesrat',
        publisher: 'Deutscher Bundestag, Bonn',
        year: 1949,
        type: 'documento'
      },
      {
        title: 'Rule of Law Index',
        author: 'World Justice Project',
        publisher: 'World Justice Project, Washington',
        year: 2024,
        type: 'informe'
      }
    ]

  };
})(window.PW = window.PW || { articles: {}, parties: {}, geo: {}, orgs: {}, gobiernos: {}, pensadores: {}, conceptos: {} });
