(function (PW) {
  'use strict';
  PW.gobiernos = PW.gobiernos || {};
  PW.gobiernos['espana'] = {
    kind: 'gobierno',
    slug: 'espana',
    title: 'España: la monarquía constitucional y el Estado de las autonomías',
    subtitle: 'Monarquía constitucional en la que el Rey es jefe del Estado pero no gobierna, un Gobierno responsable ante el Congreso de los Diputados, un Senado de representación territorial, un territorio organizado en diecisiete Comunidades Autónomas, un Tribunal Constitucional que anula leyes y un Estado social que ordena sanidad, educación y pensiones',
    category: 'Gobierno',
    tags: ['monarquía constitucional', 'estado de las autonomías', 'constitución', 'parlamento', 'transición', 'conflicto territorial'],
    region: 'Europa Meridional',
    timeFrame: '1978-actualidad',
    updated: '2026-09-29',
    summary: 'Monarquía constitucional del sur de Europa en la que el Rey concentra la representación del Estado pero no dirige la política, un Gobierno que responde solidariamente ante el Congreso de los Diputados dirige un país organizado en diecisiete Comunidades Autónomas, un Tribunal Constitucional controla la constitucionalidad de las leyes y un Estado social ordena la sanidad, la educación y las pensiones, todo ello atravesado por el conflicto territorial y por casi cuarenta años de violencia política vasca.',
    actors: [
      { name: 'La Corona', role: 'jefatura del Estado que sanciona y promulga las leyes, propone al presidente del Gobierno, convoca y disuelve las Cortes, nombra a los ministros y firma los tratados, sin dirigir la política', power: 'alta' },
      { name: 'Las Cortes Generales', role: 'poder legislativo que aprueba los presupuestos, controla al Gobierno y decide la reforma constitucional mediante ley orgánica', power: 'alta' },
      { name: 'El Gobierno', role: 'poder ejecutivo que determina la política interior y exterior, ejecuta las leyes y responde solidariamente de su gestión ante el Congreso de los Diputados', power: 'alta' },
      { name: 'Tribunal Constitucional', role: 'control de constitucionalidad de las leyes y de los Estatutos de autonomía, árbitro del reparto de competencias entre el Estado y las Comunidades y tribunal de los recursos de amparo', power: 'alta' },
      { name: 'Poder judicial', role: 'organizado en el Tribunal Supremo, la Audiencia Nacional y los Tribunales Superiores de Justicia, y gobernado por el Consejo General del Poder Judicial', power: 'alta' },
      { name: 'Las Comunidades Autónomas', role: 'territorios que asumen las competencias enumeradas por la Constitución y ejercen potestades legislativas con sus propios parlamentos', power: 'media' }
    ],
    infobox: {
      caption: 'España, monarquía constitucional y Estado de las autonomías',
      color: '#8b1a1a',
      rows: [
        ['Período', '1978-actualidad'],
        ['Forma de Estado', 'Monarquía constitucional, Estado social y democrático de Derecho y Estado de las autonomías'],
        ['Constitución vigente', '27 de diciembre de 1978, con cuatro reformas: 1992, 2011, 2024 y 2026'],
        ['Jefatura del Estado', 'El Rey, símbolo de la unidad del Estado, que arbitra y modera el funcionamiento regular de las instituciones'],
        ['Titular en el cargo', 'Felipe VI, proclamado el 19 de junio de 2014'],
        ['Parlamento', 'Cortes Generales formadas por el Congreso de los Diputados y el Senado, con mandato de cuatro años'],
        ['División territorial', '17 Comunidades Autónomas, dos ciudades autónomas y 50 provincias'],
        ['Control de constitucionalidad', 'Tribunal Constitucional, con doce jueces y doce suplentes nombrados por el Rey a propuesta del Congreso']
      ]
    },
    sections: [
      {
        id: 'origen',
        heading: 'Origen: la Transición y la Constitución de 1978',
        blocks: [
          {
            type: 'p',
            text: 'La muerte de Francisco Franco el 20 de noviembre de 1975 y la proclamación de Juan Carlos I dos días después abrieron un proceso que se cerró en menos de tres años. El rey juró ante las Cortes el 27 de diciembre de 1977, y las elecciones de junio, ganadas por la Unión de Centro Democrático, fijaron el método del proceso: los acuerdos de aquel verano entre el Gobierno, la oposición y la Iglesia, el llamado pacto del olvido.'
          },
          {
            type: 'p',
            text: 'La violencia llegó antes que el consenso. ETA ejecutó su primer atentado el 27 de diciembre de 1973 y mantuvo la actividad armada hasta el 8 de mayo de 2018, en que anunció su fin. Entre una fecha y otra condicionó los calendarios electorales y las reformas de los Estatutos, como se analiza en [[geo:violencia-politica-vasca|violencia política vasca]]. La amnistía de 1977 y el artículo 2 de la Constitución fueron las dos piezas con que se quiso cerrar ese pasado.'
          },
          {
            type: 'table',
            head: ['Fecha', 'Hito', 'Vía'],
            rows: [
              ['20 de noviembre de 1975', 'Fallecimiento de Francisco Franco y proclamación de Juan Carlos I', 'Sucesión en la Corona prevista por la ley de 1947'],
              ['Junio de 1977', 'Elecciones a Cortes constituyentes, ganadas por la Unión de Centro Democrático', 'Convocatoria de elecciones por la Corona'],
              ['6 de diciembre de 1978', 'Referendum de ratificación del texto constitucional, con el 87,8 por ciento de los votos favorables', 'Consulta popular con una participación del 67,1 por ciento del censo'],
              ['29 de diciembre de 1978', 'Sanción, promulgación y entrada en vigor de la Constitución', 'Acto de la Corona refrendado por el Gobierno'],
              ['23 de febrero de 1981', 'Intento de golpe de Estado del teniente coronel Tejero en el Congreso de los Diputados', 'Presión institucional que culmina en la reforma del Código Penal'],
              ['28 de octubre de 1982', 'Victoria del Partido Socialista Obrero Español con mayoría absoluta', 'Segunda renovación total del Congreso']
            ]
          },
          {
            type: 'p',
            text: 'El texto constitucional se estructura en tres decisiones. La primera es el artículo 1: España se constituye en un Estado social y democrático de Derecho y la forma política del Estado es la monarquíaparlamentaria. La segunda es el artículo 2, que fundamenta el Estado en la unidad indisoluble de la nación española y garantiza a la vez el derecho a la autonomía de las nacionalidades y regiones, sin jerarquía entre ellas. La tercera es el reparto de competencias de los artículos 148, 149 y 150.'
          },
          {
            type: 'p',
            text: 'La Constitución entró en vigor el 29 de diciembre de 1978 y el resto del orden institucional se construyó encima de ella con leyes orgánicas. En marzo de 1979 se celebraron las primeras elecciones autonómicas y ese año se aprobaron los primeros Estatutos de Autonomía, entre ellos el del País Vasco. La ley orgánica 7/1980 fue anulada en parte por el Tribunal Constitucional, y la 5/1985 cerró la arquitectura electoral con un sistema mixto que sigue vigente.'
          },
          {
            type: 'ul',
            items: [
              'El artículo 6 convierte a los partidos políticos en instrumento fundamental de la participación política y obliga a que su estructura y su funcionamiento sean democráticos.',
              'El artículo 117.1 declara que la justicia emana del pueblo y se administra en nombre del Rey, lo que vincula la jefatura del Estado a la organización jurisdiccional sin situar al rey por encima de ella.',
              'En casi cincuenta años de vigencia el texto no se ha reescrito más que cuatro veces, y ninguna reforma afecta a su arquitectura: 1992, 2011, 2024 y 2026.',
              'El artículo 9.3 consagra la responsabilidad de los poderes públicos y la interdicción de la arbitrariedad, principios que el Tribunal Constitucional ha aplicado de forma estricta en los conflictos territoriales.'
            ]
          }
        ]
      },
      {
        id: 'corona',
        heading: 'La Corona y el poder ejecutivo',
        blocks: [
          {
            type: 'p',
            text: 'El artículo 56 describe la posición del rey con una fórmula propia: es el jefe del Estado, símbolo de su unidad y permanencia, y a la vez el que «arbitra y modera el funcionamiento regular de las instituciones». No gobierna ni preside el poder legislativo, pero conserva la facultad de intervenir ante una ruptura del procedimiento institucional. El artículo 55 regula la regencia, que corresponde al príncipe heredero y, a falta de él, al Congreso.'
          },
          {
            type: 'quote',
            text: 'La forma política del Estado español es la monarquíaparlamentaria.',
            cite: 'Constitución Española, artículo 1.3',
            author: 'Pueblo español'
          },
          {
            type: 'p',
            text: 'El artículo 62 enumera las facultades de la Corona, y esa lista mide su poder formal: sancionar y promulgar las leyes, convocar y disolver las Cortes, convocar referenda, proponer y nombrar al presidente del Gobierno, nombrar y separar a los ministros, ejercer el mando supremo de las Fuerzas Armadas y el derecho de gracia, sin indultos generales. El artículo 64 añade que esos actos se refrendan con el presidente del Gobierno y que son responsables quienes los refrendan.'
          },
          {
            type: 'p',
            text: 'El poder ejecutivo real está en el Gobierno, y la responsabilidad política que asume ante la Cámara convierte la monarquía en constitucional. El artículo 108 establece que responde solidariamente ante el Congreso de los Diputados, no ante el rey. El artículo 99 regula la investidura: el rey propone un candidato, que solicita la confianza por mayoría absoluta y, si no la obtiene, por mayoría simple a las cuarenta y ocho horas. Sin Gobierno en dos meses, el rey disuelve las Cámaras.'
          },
          {
            type: 'p',
            text: 'La distancia entre arbitrar y gobernar se ha respetado salvo en tres circunstancias: la noche del 23 de febrero de 1981, en la que Juan Carlos I compareció ante la televisión tras el golpe del teniente coronel Tejero; la crisis de octubre de 2017, en la que facultó al Gobierno a pedir el artículo 155; y la noche del 5 de marzo de 2023, en la que Felipe VI reclamó un acuerdo tras meses de bloqueo de la Cámara. En los tres casos fue una intervención discursiva y procedimental.'
          },
          {
            type: 'ul',
            items: [
              'El margen de acción del rey está en la discrecionalidad del artículo 62 y en la obligación de refrendo del artículo 64, que traslada la responsabilidad política a los ministros firmantes.',
              'La Corona es también poder en el plano exterior: el artículo 63 le atribuye la acreditación de embajadores, el consentimiento del Estado para obligarse por tratados y la declaración de guerra y la paz.',
              'La sucesión está blindada en el artículo 57, que reconoce la hereditaria en los sucesores de Juan Carlos I y reserva a las Cortes la provisión de la Corona si se extinguen las líneas.',
              'La Corona no es clave de la reforma: el artículo 168 somete a referéndum toda reforma del Título II, de modo que la monarquía solo cambia por el procedimiento más exigente.'
            ]
          }
        ]
      },
      {
        id: 'cortes',
        heading: 'Las Cortes Generales y la reforma constitucional',
        blocks: [
          {
            type: 'p',
            text: 'El artículo 66 reconoce a las Cortes Generales la potestad legislativa, la aprobación de los presupuestos y el control del Gobierno. El artículo 69 hace del Senado la Cámara de representación territorial, con cuatro senadores por provincia más los que designa cada Comunidad Autónoma, mientras el Congreso es la Cámara con la que se mide la confianza del Gobierno. Esa asimetría convierte al Senado en la cámara de las autonomías.'
          },
          {
            type: 'p',
            text: 'El artículo 168 somete a referéndum toda reforma del Título II, el de la Corona, de modo que la monarquía solo puede reformarse por el procedimiento más exigente. La reforma general exige tres quintos de los miembros de cada Cámara, y la de los títulos sobre derechos fundamentales, dos tercios. La iniciativa corresponde al Gobierno o a dos tercios de cada Cámara, y el Consejo General del Poder Judicial emite dictamen previo.'
          },
          {
            type: 'table',
            head: ['Reforma', 'Artículo', 'Contenido'],
            rows: [
              ['27 de agosto de 1992', 'Artículo 13.2', 'El sufragio de los extranjeros se somete a criterios de reciprocidad'],
              ['27 de septiembre de 2011', 'Artículo 135', 'Se fija el límite del déficit estructural conforme a los márgenes europeos'],
              ['15 de febrero de 2024', 'Artículo 49', 'La inclusión de las personas con discapacidad se sitúa en entornos accesibles'],
              ['19 de mayo de 2026', 'Apartado 3 del artículo 69', 'Formentera elige un senador propio, con eficacia diferida']
            ]
          },
          {
            type: 'p',
            text: 'La crisis de 2023 puso a prueba el diseño. Las elecciones del 23 de julio dieron 137 diputados al Partido Popular y 121 al Socialista, y su candidato no alcanzó la mayoría absoluta en sus dos votaciones. El rey propuso entonces a Pedro Sánchez, investido los días 15 y 16 de noviembre de 2023 con 179 votos a favor y 171 en contra, con el apoyo de [[partido:sumar|Sumar]] y otros grupos. [[partido:podemos|Podemos]] quedó fuera del Gobierno.'
          },
          {
            type: 'p',
            text: 'La proposición de ley orgánica de amnistía para Cataluña se presentó el 13 de noviembre de 2023 y fue tomada en consideración el 12 de diciembre con 178 votos a favor. Acabó siendo la ley orgánica 1/2024, de 10 de junio, declarada conforme por el Tribunal Constitucional en sentencia publicada el 31 de julio de 2025. Cerró el ciclo abierto en 2017 que describe [[geo:proceso-soberanista-catalan|el proceso soberanista catalán]], y [[partido:erc]] y [[partido:junts]] la defendieron como precio de la normalización.'
          },
          {
            type: 'ul',
            items: [
              'El artículo 67.2 establece que los miembros de las Cortes no están ligados por mandato imperativo, de modo que la disciplina de partido es un hecho interno de cada formación.',
              'El artículo 99.3 obliga a que la confianza se otorgue por mayoría absoluta en la primera votación, lo que convierte la investitura en un equilibrio entre fuerzas sin mayoría propia.',
              'El artículo 68.3 impone la representación proporcional en cada circunscripción, también en las elecciones autonómicas, que se desarrollan por la ley orgánica del régimen electoral general.',
              'El Senado no puede disolverse por separado, y esa continuidad es lo que le da peso frente a una Cámara que se renueva por completo cada cuatro años.'
            ]
          }
        ]
      },
      {
        id: 'autonomias',
        heading: 'El Estado de las autonomías y el conflicto territorial',
        blocks: [
          {
            type: 'p',
            text: 'El artículo 137 organiza el territorio en municipios, provincias y Comunidades Autónomas, y el artículo 143 fija la vía ordinaria de acceso al autogobierno: la iniciativa de las diputaciones y de dos tercios de los municipios de cada provincia. Una vía más rápida quedó prevista en las disposiciones transitorias, y a ella recurrieron en el siglo XXI el [[partido:pnv|PNV]] en el País Vasco y [[partido:eh-bildu|EH Bildu]] en Navarra.'
          },
          {
            type: 'table',
            head: ['Vía de acceso', 'Iniciativa', 'Referencia'],
            rows: [
              ['Autogobierno ordinario', 'Diputaciones y dos tercios de los municipios de cada provincia', 'Artículos 143 y 151'],
              ['Territorios con régimen previo', 'La propia disposición transitoria y los decretos de integración', 'Disposiciones transitorias primera y segunda'],
              ['Comunidades de ámbito provincial', 'Iniciativa de las Cortes Generales por interés nacional', 'Artículo 144'],
              ['Reforma de un Estatuto', 'Iniciativa de la asamblea autonómica o del Gobierno', 'Artículos 147.3 y 168']
            ]
          },
          {
            type: 'p',
            text: 'El reparto de competencias funciona en tres bloques: el artículo 149 enumera las materias exclusivas del Estado, el 150 permite transferir o delegar potestidades y el 148 recoge lo que las Comunidades pueden asumir. La consecuencia es que administran una parte muy grande de la vida pública sin dejar de estar sometidas a la ley del Estado, que conserva el monopolio de la legislación, la seguridad pública y la defensa.'
          },
          {
            type: 'p',
            text: 'La construcción del Estado de las autonomías coincidió con el conflicto territorial. ETA mantuvo las armas entre 1973 y el 8 de mayo de 2018, y en octubre de 2017 se aplicó por primera vez el artículo 155, que faculta al Gobierno a obligar a la Comunidad afectada al cumplimiento forzoso de sus obligaciones con aprobación del Senado. Sigue siendo la única aplicación de esa cláusula.'
          },
          {
            type: 'p',
            text: 'El artículo 155 bis del Código Penal, introducido en 2015, criminalizó la promoción de procesos separatistas, y la ley orgánica 1/2024 amnistió buena parte de los procesos seguidos bajo esa figura. La reforma de los Estatutos ha pasado a segundo plano y el debate se ha desplazado al reconocimiento de la identidad política, en la forma que describen [[geo:proceso-soberanista-catalan|el proceso soberanista catalán]], [[partido:junts]] y [[partido:erc]]. El artículo 145.1 sigue prohibiendo la federación de Comunidades.'
          },
          {
            type: 'ul',
            items: [
              'El artículo 145.1 prohíbe expresamente la federación de Comunidades Autónomas, lo que sitúa al modelo lejos del [[federalismo]] que otros Estados constitucionales han adoptado.',
              'El artículo 152 fija la estructura de las Comunidades, con una asamblea legislativa, un Consejo de Gobierno y un Tribunal Superior de Justicia.',
              'El artículo 152.2 somete la actividad financiera de las Comunidades al control del Estado y a los límites del artículo 135.',
              'La identidad de las nacionalidades y regiones aparece en el artículo 2 sin orden de prelación, de modo que ninguna Comunidad puede invocar un rango superior.'
            ]
          }
        ]
      },
      {
        id: 'justicia',
        heading: 'Justicia, control de constitucionalidad e independencia judicial',
        blocks: [
          {
            type: 'p',
            text: 'El artículo 117.1 establece que la justicia emana del pueblo y se administra en nombre del Rey, fórmula que vincula la jurisdicción con la jefatura del Estado sin situar al rey por encima de ella. El artículo 20 exige tribunales independientes e imparciales, el 118 hace la justicia obligatoria para todos y el 24 reconoce el derecho a la tutela efectiva de los derechos fundamentales ante los tribunales.'
          },
          {
            type: 'p',
            text: 'El Tribunal Supremo es el más alto tribunal del país y lo componen un presidente, dos vicepresidentes y veintitrés jueces, con sede en Madrid. Se organiza en cinco salas, de lo Civil, lo Penal, lo Militar, lo Contencioso-Administrativo y de lo Social. Le compete la casación y la unificación de la jurisprudencia, y también los recursos contra las condenas de la Audiencia Nacional en corrupción, terrorismo y delito organizado.'
          },
          {
            type: 'table',
            head: ['Órgano', 'Sede y composición', 'Competencia principal'],
            rows: [
              ['Tribunal Constitucional', 'Madrid, doce jueces y doce suplentes', 'Constitucionalidad, amparo y conflictos de competencias'],
              ['Tribunal Supremo', 'Madrid, un presidente, dos vicepresidentes y veintitrés jueces', 'Casación, unificación de jurisprudencia y Administración central'],
              ['Audiencia Nacional', 'Madrid, con sala propia de instrucción', 'Delitos graves, terrorismo, corrupción y crimen organizado'],
              ['Tribunales Superiores de Justicia', 'Cada capital de Comunidad Autónoma y Ceuta y Melilla', 'Apelación y protección frente a la Administración'],
              ['Audiencias Provinciales', 'Capitales de provincia', 'Segunda instancia penal y primera en materias señaladas por la ley'],
              ['Juzgados', 'Partidos judiciales', 'Primera instancia y jurisdicción en las materias que les corresponde'],
              ['Consejo General del Poder Judicial', 'Madrid, sede institucional del órgano', 'Gobierno de la judicatura, del personal y de la administración']
            ]
          },
          {
            type: 'p',
            text: 'El control de constitucionalidad corresponde al Tribunal Constitucional, con doce jueces y doce suplentes, mandato de ocho años y renovación parcial, nombrados por el rey a propuesta del Congreso. Puede anular con efectos generales una ley, un Estatuto o un tratado, resolver los recursos de amparo y arbitrar el reparto de competencias entre el Estado y las Comunidades. Su jurisprudencia ha construido buena parte del Estado de las autonomías y del Estado social.'
          },
          {
            type: 'p',
            text: 'El Consejo General del Poder Judicial gobierna la administración de la justicia: convoca los concursos de acceso, provee las plazas, designa a los inspectores y resuelve sobre compatibilidad de cargos. Sus miembros son nombrados por el rey a propuesta del Congreso, y ese procedimiento ha sido uno de los capítulos más disputados de la política española. La reforma firmada en 2018 por el [[partido-popular|Partido Popular]] y el [[ppsoe|PSOE]] desplazó el peso de la propuesta hacia el Congreso.'
          },
          {
            type: 'ul',
            items: [
              'El artículo 118.2 crea la figura del Fiscal General del Estado, nombrado por el rey a propuesta del Gobierno, con un mandato de seis años, y garantiza que el Ministerio Fiscal actúe con independencia.',
              'La Audiencia Nacional, creada por la ley orgánica 7/1985, conoce de los delitos de mayor gravedad, del terrorismo y de la corrupción y el crimen organizado, y concentra buena parte de los casos políticos.',
              'El artículo 9.3, con la responsabilidad de los poderes públicos y la interdicción de la arbitrariedad, limita también la interpretación extensiva de las leyes procesales y las inmunidades de los cargos públicos.',
              'La reforma de la justicia es de las pocas materias en que el [[ppsoe|PSOE]] y el [[partido-popular|Partido Popular]] han firmado acuerdos, y de las pocas en que el [[vox|Vox]] y la izquierda mantienen un desacuerdo estable.'
            ]
          }
        ]
      },
      {
        id: 'economia',
        heading: 'Economía y finanzas públicas',
        blocks: [
          {
            type: 'p',
            text: 'El artículo 134 encomienda al Gobierno la elaboración de los presupuestos generales y a las Cortes su examen y aprobación, y el artículo 135 obliga a todas las Administraciones a ajustar su actuación al principio de estabilidad presupuestaria. Los presupuestos son anuales y, si no se aprueban antes del inicio del ejercicio, se prorrogan por un año, de modo que su aprobación funciona como rendición de cuentas ante la Cámara.'
          },
          {
            type: 'table',
            head: ['Norma', 'Contenido', 'Efecto'],
            rows: [
              ['Artículo 133', 'El Estado tiene la potestad originaria de los tributos y las Comunidades y los municipios la suya', 'Base del sistema fiscal'],
              ['Artículo 134', 'El Gobierno elabora los presupuestos y las Cortes los aprueban', 'Ciclo presupuestario anual'],
              ['Artículo 135', 'Estabilidad presupuestaria y límites al déficit y a la deuda', 'Vinculación con las reglas europeas'],
              ['Artículo 152.2', 'El Estado controla la actividad financiera de las Comunidades', 'Vigilancia financiera estatal'],
              ['Artículo 155', 'El Senado autoriza la ejecución forzosa en una Comunidad Autónoma', 'Aplicado en octubre de 2017']
            ]
          },
          {
            type: 'p',
            text: 'La reforma de 2011 del artículo 135 vinculó el déficit estructural del Estado y de las Comunidades a los márgenes que fije la Unión Europea, de modo que la regla fiscal europea pasó a formar parte del derecho interno. Fijó también un límite al volumen de deuda pública, y el artículo 135.6 obliga a cada Comunidad a ajustar su normativa al principio de estabilidad. Es la única reforma que ha integrado un orden económico entero en la Constitución.'
          },
          {
            type: 'p',
            text: 'La economía española es predominantemente de servicios y muy abierta al comercio exterior, con un peso decisivo del turismo y de las exportaciones de productos manufacturados. Esa dependencia explica el lugar central de la [[geo:energia-y-dependencias|energía y sus dependencias]] en la política del país, y convierte la competencia internacional de precios y la logística del comercio exterior, estudiada en [[geo:comercio-y-globalizacion|comercio y globalización]], en un asunto de política industrial.'
          },
          {
            type: 'ul',
            items: [
              'El artículo 133.1 reserva al Estado la potestad originaria de los tributos, y el 133.2 reconoce a las Comunidades y a los municipios la de exigir los suyos.',
              'El artículo 134.5 impide al Gobierno gastar lo que no esté aprobado, lo que convierte el debate presupuestario en el principal control diario del Congreso.',
              'El Estado y las Comunidades están sujetos al límite de deuda que fija la Unión Europea, con vigilancia de la Comisión en el procedimiento de déficit excesivo.',
              'El mercado único y la unión monetaria han vinculado la política fiscal española a la de los demás Estados miembros, hasta convertir el diferencial de deuda en debate de primer orden.'
            ]
          }
        ]
      },
      {
        id: 'estado-social',
        heading: 'El Estado social: sanidad, educación y pensiones',
        blocks: [
          {
            type: 'quote',
            text: 'España se constituye en un Estado social y democrático de Derecho.',
            cite: 'Constitución Española, artículo 1.1',
            author: 'Pueblo español'
          },
          {
            type: 'p',
            text: 'La cláusula del artículo 1.1 obliga al Estado a perseguir de forma efectiva el objetivo constitucional de la justicia material, y no solo a garantizar la igualdad formal ante la ley. La jurisprudencia del Tribunal Constitucional la ha considerado criterio de interpretación de todo el ordenamiento y fundamento de derechos que la Constitución no enumera. Por esa puerta han entrado todas las prestaciones no contributivas del Estado.'
          },
          {
            type: 'table',
            head: ['Ámbito', 'Norma básica', 'Título competencial'],
            rows: [
              ['Sanidad', 'Ley 14/1986, de 25 de abril, General de Sanidad', 'Exclusiva del Estado, con gestión transferida'],
              ['Educación', 'Ley orgánica 2/2006, de 3 de mayo, de Educación', 'Bases y títulos del Estado, organización autonómica'],
              ['Pensiones', 'Real decreto legislativo 8/2015, de 23 de octubre', 'Exclusiva del Estado, en régimen común'],
              ['Dependencia', 'Ley 39/2006, de 14 de diciembre, y ley 12/2022', 'Asistencia social, con ejecución autonómica'],
              ['Diálogo social', 'Artículo 7.5 de la Constitución', 'Principio constitucional de relación laboral']
            ]
          },
          {
            type: 'p',
            text: 'La sanidad es el sector donde la competencia exclusiva del Estado convive con una gestión casi íntegramente autonómica. El artículo 149.1.16 reserva al Estado la sanidad exterior y la coordinación general, mientras la ley general reconoce la gestión transferida. El artículo 43 consagra el derecho a la protección de la salud, y la ley 33/2011 sustituyó la amenaza de no contratar con el servicio público por el deber de información al usuario.'
          },
          {
            type: 'ul',
            items: [
              'El texto refundido de la Seguridad Social, aprobado por el real decreto legislativo 8/2015, reúne el régimen común de pensiones de jubilación, viudedad, orfandad y discapacidad.',
              'La dependencia se regula por la ley 39/2006 y, desde 2022, por la ley 12/2022, que amplía el cuidado de los menores de tres años, con una demanda que crece más deprisa que la oferta.',
              'La educación conserva un reparto similar al de la sanidad: el Estado fija las bases, los títulos y el acceso a la universidad, y las Comunidades organizan los centros y los programas.',
              'El artículo 7.5 convierte el diálogo social en principio básico y obliga a consultar a los interlocutores sociales en las condiciones de trabajo, rasgo que separa al modelo español de la negociación individual.',
              'El envejecimiento demográfico registrado en [[geo:migraciones-y-demografia|migraciones y demografía]] tensa el equilibrio de cotizaciones, y la inmigración es hoy la única variable que sostiene la población activa.'
            ]
          }
        ]
      },
      {
        id: 'exterior',
        heading: 'Política exterior y defensa',
        blocks: [
          {
            type: 'p',
            text: 'El artículo 149.3 reserva al Estado la competencia exclusiva en relaciones internacionales y el 63 atribuye al rey el consentimiento del Estado para obligarse por tratados. España integra la [[org:union-europea|Unión Europea]] desde 1986, es miembro fundador de la [[org:otan|OTAN]] desde 1949 y ocupa un asiento en el Consejo de Seguridad de la [[org:onu|ONU]] desde 1955. Su acción exterior se ordena hoy en torno al flanco sur, a [[geo:guerra-en-ucrania|Ucrania]] y a la competencia con China.'
          },
          {
            type: 'p',
            text: 'La proyección exterior del país se juega en el sur de la Unión y en el Mediterráneo. La cooperación con América Latina, heredera de la historia común de la península, ordena buena parte de la acción diplomática y cultural en el continente. Al otro lado de la frontera, la estabilidad del [[geo:inestabilidad-sahel|Sahel]] y la gestión de las migraciones comparten el mismo tramo y han convertido la política exterior del sur en un asunto de gobierno permanente.'
          },
          {
            type: 'p',
            text: 'En defensa, el artículo 62.i atribuye al rey el mando supremo de las Fuerzas Armadas. La pertenencia a la [[org:otan|OTAN]] ofrece el marco de la defensa colectiva, y la integración en la [[org:union-europea|Unión Europea]] ha vinculado la política económica del país al mercado único y a la unión monetaria. La dependencia energética y la fragilidad de la cadena de suministros, examinadas en [[geo:energia-y-dependencias|energía y sus dependencias]], son ya asunto de seguridad nacional.'
          },
          {
            type: 'ul',
            items: [
              'Los tratados internacionales se ratifican por ley, de modo que el Congreso tiene una palabra decisiva en la política exterior.',
              'La unión con la comunidad iberoamericana se sostiene sobre la lengua común y sobre los acuerdos de cooperación firmados desde 1991.',
              'El artículo 152.1 da al rey la suprema representación del Estado en el exterior y a cada presidente autonómico la representación ordinaria.',
              'Desde el inicio de la guerra en Ucrania en 2022 el Gobierno ha combinado la ayuda militar y económica con el respaldo a las sanciones europeas, lo que divide a la Cámara.'
            ]
          }
        ]
      },
      {
        id: 'sr-proclamacion',
        heading: 'La proclamación de abril de 1931',
        blocks: [
          {
            type: 'p',
            text: 'La República no nació de una rebelión, sino del derrumbe de la Restauración. Miguel Primo de Rivera tomó el poder el 13 de septiembre de 1923 y gobernó sin Cortes hasta su dimisión de enero de 1930. El Pacto de San Sebastián, firmado los días 17 y 18 de agosto de 1930 por el propio Alfonso XIII, comprometió a la Corona a convocar una consulta sobre la forma del Estado, y las elecciones municipales del 12 de abril de 1931 la celebraron de hecho.'
          },
          {
            type: 'p',
            text: 'Los resultados se conocieron el día siguiente, y el martes 14 de abril los ayuntamientos de las grandes ciudades proclamaron la República. Ese mismo día las Cámaras se declararon depositarias del poder y nombraron un gobierno provisional encabezado por Niceto Alcalá-Zamora, que convocó elecciones constituyentes para el 28 de junio. Alfonso XIII, que había salido de España el 28 de enero de 1931 sin abdicar, no juró la Constitución y no regresó nunca.'
          },
          {
            type: 'table',
            head: ['Fecha', 'Hito', 'Consecuencia política'],
            rows: [
              ['13 de septiembre de 1923', 'Golpe de Estado de Miguel Primo de Rivera', 'Dictadura sin Cortes hasta 1930'],
              ['17 y 18 de agosto de 1930', 'Pacto de San Sebastián entre el rey y sus adversarios', 'Compromiso de consulta legal y de votación municipal'],
              ['12 de abril de 1931', 'Elecciones municipales con victoria republicana en las ciudades', 'Caída inmediata de la monarquía'],
              ['14 de abril de 1931', 'Proclamación de la República en Madrid y en las capitales', 'Las Cortes se declaran depositarias del poder'],
              ['14 de abril de 1931', 'Nombramiento del gobierno provisional de Alcalá-Zamora', 'Convocatoria de elecciones constituyentes'],
              ['Mayo de 1931', 'Incendios de conventos, colegios y residencias religiosas', 'Crisis de la cuestión religiosa en el Gobierno provisional'],
              ['28 de junio de 1931', 'Elecciones a Cortes constituyentes', 'Mayoría republicana y socialista en la Cámara única'],
              ['9 de diciembre de 1931', 'Aprobación de la Constitución', 'Entrada en vigor del Estado laico y del régimen de regiones autónomas']
            ]
          },
          {
            type: 'p',
            text: 'Los incendios de mayo de 1931, que afectaron a más de doscientos conventos, colegios y residencias religiosas, se convirtieron en el principal frente de fricción del nuevo régimen. El problema reapareció dentro del propio campo republicano: en octubre de 1931, cuando las Cortes aprobaron el proyecto que disolvía las órdenes religiosas, la Derecha Liberal Republicana de Alcalá-Zamora y Miguel Maura respondió con su dimisión, y el poder pasó a Manuel Azaña.'
          }
        ]
      },
      {
        id: 'sr-constitution-1931',
        heading: 'La Constitución de 1931',
        blocks: [
          {
            type: 'p',
            text: 'Las elecciones del 28 de junio de 1931 se celebraron con la ley electoral de 1907 modificada un mes antes, que amplió las circunscripciones, rebajó la edad de votar a veintitrés años y permitió a las mujeres presentarse como candidatas. Las Cortes se abrieron el 14 de julio con una sola Cámara de 470 diputados, en la que el [[partido:ppsoe|PSOE]] obtuvo la mayoría más amplia, seguido de Lerroux, de los radical-socialistas, de [[partido:erc|Esquerra Republicana de Catalunya]] y de Acción Republicana.'
          },
          {
            type: 'p',
            text: 'El título primero descartó la República federal y construyó el Estado integral, definido en el párrafo tercero del artículo 1 como compatible con la autonomía de los municipios y de las regiones. El reparto de competencias quedó resuelto con el método de los artículos 14, 15 y 16: el Estado conserva la legislación y la ejecución directa de una lista tasada de materias, en otra lista la legislación es estatal y su ejecución puede ejercerse la región, y todo lo demás corresponde a la región según su Estatuto.'
          },
          {
            type: 'quote',
            text: 'Esta Constitución quiere ser así para que no nos digan que hemos defraudado las ansias del pueblo.',
            cite: 'Presentación del proyecto de Constitución, 27 de agosto de 1931',
            author: 'Luis Jiménez de Asúa, presidente de la Comisión de Constitución'
          },
          {
            type: 'quote',
            text: 'En suma, nuestro deseo es que esta Constitución que acabamos de votar y sancionar, sea el origen de un impulso vital del pueblo español, no solamente para elevarse, sino para contribuir a este resurgimiento de una Humanidad nueva, que está naciendo entre dolores.',
            cite: 'Cierre de la votación de la Constitución, 9 de diciembre de 1931',
            author: 'Julián Besteiro, presidente de las Cortes constituyentes'
          },
          {
            type: 'ul',
            items: [
              'El artículo 26 estableció la separación entre la Iglesia y el Estado, prohibió el culto externo y ordenó la disolución de las órdenes religiosas y la nacionalización de sus bienes, lo que provocó que la Minoría Agraria y la Minoría vasco-navarra abandonaran las Cortes en octubre de 1931.',
              'El artículo 36 igualó los derechos electorales de hombres y mujeres mayores de veintitrés años, pero como un mandato al legislador y no como un derecho inmediato, lo que permitió aplazar el sufragio activo femenino mediante una disposición transitoria.',
              'La enseñanza se declaró laica y obligatoria, el castellano pasó a ser el idioma oficial de la República y la bandera tricolor roja, amarilla y morada quedó fijada por el propio texto constitucional.',
              'El texto se organizó en diez títulos y 125 artículos, creó un Tribunal de Garantías Constitucionales para vigilar la constitucionalidad de las leyes y de los Estatutos, y reconoció que la propiedad privada podía quedar sometida a límites y a expropiación por interés social.'
            ]
          }
        ]
      },
      {
        id: 'sr-bienio-reformista',
        heading: 'El bienio reformista (1931-1933)',
        blocks: [
          {
            type: 'p',
            text: 'Manuel Azaña sustituyó a Alcalá-Zamora en octubre de 1931 y condujo el bienio reformista con apoyo socialista. Su proyecto combinó la transformación institucional con un intento de secularización de la sociedad, y sus tres frentes de conflicto fueron la jerarquía eclesiástica, los grandes propietarios de la tierra y una parte de los oficiales del Ejército.'
          },
          {
            type: 'table',
            head: ['Medida', 'Momento', 'Contenido'],
            rows: [
              ['Reforma militar', '1931 y 1932', 'Reducción del Ejército de dieciséis a ocho divisiones orgánicas y cambio de su vocación por la de fuerza de educación ciudadana'],
              ['Disolución de las órdenes religiosas', 'Artículo 26 de la Constitución, 1931', 'Separación de la Iglesia y el Estado y nacionalización de sus bienes'],
              ['Disolución de la Compañía de Jesús', 'Ley de septiembre de 1932', 'Extinción de la orden y venta de sus bienes'],
              ['Divorcio', 'Ley de 2 de marzo de 1932', 'Separación matrimonial y disolución del matrimonio por causas tasadas'],
              ['Estatuto de Cataluña', 'Aprobado el 9 de septiembre de 1932', 'Primera región autónoma; la Constitución recortó del texto inicial su carácter federal'],
              ['Reforma agraria', 'Aprobada en septiembre de 1932', 'Expropiación de fincas improductivas y revisión de los contratos de arrendamiento'],
              ['Jornadas de Casas Viejas', 'Enero de 1933', 'Represión de una insurrección campesina que abrió la crisis del bienio reformista']
            ]
          },
          {
            type: 'p',
            text: 'El proyecto reformista topó con la resistencia de la jerarquía eclesiástica, de los grandes propietarios y de una parte de los oficiales del Ejército, cuyo republicanismo había sido siempre de grado. En enero de 1933 los comités campesinos de la Andalucía occidental se levantaron contra la aplicación de la reforma, y la respuesta del Gobierno fue una represión que abrió la crisis del bienio y dejó al proyecto sin base social en el campo.'
          },
          {
            type: 'ul',
            items: [
              'El Ejército pasó de dieciséis a ocho divisiones orgánicas, y la reforma añadió al oficial el deber de instruirse como ciudadano, que era la idea del ejército educador defendida por Azaña.',
              'El divorcio quedó legalizado por primera vez en la historia jurídica española, con la separación como figura general y la disolución sujeta a causas tasadas, lo que enfrentó a la Iglesia y a los sectores católicos.',
              'La reforma agraria fue aprobada pero tardó años en ejecutarse, porque los propietarios recurrieron las expropiaciones y la administración carecía de medios materiales y de personal para aplicarla sobre el terreno.',
              'El Estatuto de Cataluña fue el único que las Cortes aprobaron antes de la guerra, con el sacrificio de las competencias de la Generalidad que el Estado integral exigía.'
            ]
          }
        ]
      },
      {
        id: 'sr-bienio-cedista',
        heading: 'El bienio radical-cedista (1933-1936)',
        blocks: [
          {
            type: 'p',
            text: 'Las elecciones generales del 19 de noviembre de 1933 fueron las primeras en las que las mujeres votaron en todo el país. El resultado dio la victoria al bloque de la derecha: la CEDA de José María Gil Robles obtuvo 115 diputados, el Partido Republicano Radical 102 y el [[partido:ppsoe|PSOE]] solo 59, frente a los 115 de 1931. La [[ideologia:anarquismo|Confederación Nacional del Trabajo]] llamó a la abstención.'
          },
          {
            type: 'p',
            text: 'Alcalá-Zamora confió la formación del Gobierno a Alejandro Lerroux, cuyo partido no tenía mayoría propia y dependía de la tolerancia de la CEDA. Ese fue el origen del bienio radical-cedista: sin mayoría de Gobierno, pero también sin oposición unida, la CEDA exertió durante dos años un poder de veto sin asumir la responsabilidad. En octubre de 1934 tres ministros de la CEDA entraron en el Gobierno y se retiraron días después; la organización fue declarada fuera de la ley y su líder, Gil Robles, fue detenido.'
          },
          {
            type: 'p',
            text: 'El 5 de octubre de 1934 estalló la revolución. En Madrid, los grupos postrevolucionarios de la Casa del Pueblo y de la CNT enfrentaron a la Guardia de Asalto; en Asturias se constituyó un comité revolucionario y un gobierno provisional; y en Barcelona el presidente de la Generalitat, Lluís Companys, proclamó un Estado catalán de república federal que duró apenas unas horas.'
          },
          {
            type: 'p',
            text: 'La reacción del Gobierno fue de una violencia extrema y los recuentos de muertos y detenidos varían de forma notable entre los autores, discrepancia que forma parte del propio debate historiográfico. En 1935 el escándalo del estraperlo, la compra de dos sillones de la Real Academia Española, desacreditó a Lerroux y provocó su dimisión, y Martínez Barrio convocó elecciones para el 16 de febrero de 1936.'
          }
        ]
      },
      {
        id: 'sr-reformas-y-modernizacion',
        heading: 'Reformas y modernización: educación, mujer y laicidad',
        blocks: [
          {
            type: 'p',
            text: 'La laicidad fue el eje social del primer bienio y el que más resistencia encontró. La Constitución la consagró, la disolución de las órdenes religiosas le dio base legal y el proyecto de enseñanza laica y obligatoria convirtió a la escuela en campo de conflicto, porque buena parte de la red educativa infantil siguió en manos de congregaciones religiosas.'
          },
          {
            type: 'p',
            text: 'Las Misiones Pedagógicas fueron el instrumento más eficaz de esa política. Creadas en 1922 y dirigidas por gente vinculada a la Institución Libre de Enseñanza, llegaron a los pueblos de Castilla, Andalucía y Extremadura con maestros, libros de texto, aulas transportables y herramientas de impresión. Organizaron la alfabetización, montaron bibliotecas rurales, formaron al magisterio y difundieron el libro de lectura fuera de las ciudades.'
          },
          {
            type: 'table',
            head: ['Medida', 'Momento', 'Contenido'],
            rows: [
              ['Sufragio pasivo femenino', 'Junio de 1931', 'Tres mujeres resultaron elegidas: Margarita Nelken, Clara Campoamor y Victoria Kent'],
              ['Sufragio activo femenino', 'Artículo 36 de la Constitución, 1931; primer ejercicio en 1933', 'Mismo censo y mismos derechos electorales que los hombres desde los veintitrés años'],
              ['Referendos del clero', 'Diciembre de 1932 y junio de 1933', 'El clero celibato rechazó en ambas ocasiones la disolución de la Compañía de Jesús'],
              ['Divorcio', 'Ley de 2 de marzo de 1932', 'Separación y disolución del matrimonio, con causas tasadas'],
              ['Acceso de la mujer a la Universidad', 'Decreto de 1933', 'Admisión de la mujer en todas las facultades y en todos los grados'],
              ['Abolición de la capacidad distinta', 'Ley de 2 de marzo de 1932', 'Hombres y mujeres con igual capacidad para el matrimonio y los actos civiles']
            ]
          },
          {
            type: 'p',
            text: 'Los límites del proyecto fueron de medios más que de derechos. El presupuesto del Estado, muy castigado por la crisis económica, impidió que el programa educativo y cultural llegara a buena parte de la población rural, y a partir de 1933 buena parte de la reforma se frenó: los bienes eclesiásticos tardaron años en venderse y la reforma agraria quedó sin aplicación efectiva. La polarización con la Iglesia dejó además una fractura permanente dentro del propio campo republicano, que se reabrió violentamente en 1934.'
          }
        ]
      },
      {
        id: 'sr-frente-popular',
        heading: 'El Frente Popular y la crisis de 1936',
        blocks: [
          {
            type: 'p',
            text: 'Las elecciones del 16 de febrero de 1936 se celebraron bajo un sistema que garantizaba a las mayorías relativas una proporción muy superior de diputados en cada circunscripción. El Frente Popular, la coalición electoral que unió al [[partido:ppsoe|PSOE]] con Acción Republicana, [[partido:erc|Esquerra Republicana de Catalunya]] e Izquierda Republicana, con la participación del Partido Comunista, obtuvo la mayoría de la Cámara, mientras el bloque de la derecha perdió la mayoría absoluta que tenía desde 1933.'
          },
          {
            type: 'ul',
            items: [
              'El sistema electoral de 1935, obra del gobierno de Azaña, favoreció a las coaliciones amplias y castigó a los partidos sin base propia, como el Partido Comunista y la CNT.',
              'La CNT-FAI llamó a la abstención, confiando en la revolución social más que en la urna, y ese sector del electorado no votó en la consulta electoral.',
              'La [[ideologia:fascismo|Falange española]] obtuvo muy pocos diputados, un resultado que no reflejó su crecimiento real en la calle ni su capacidad de condicionar los gobiernos con la violencia.',
              'La derrota electoral de la derecha no cambió la estructura del control, y en apenas cinco meses la violencia política y el bloqueo institucional hicieron imposible cualquier salida negociada.'
            ]
          },
          {
            type: 'p',
            text: 'En mayo de 1936 Azaña dejó la presidencia del Gobierno para ser elegido presidente de la República, con lo que el proyecto reformista de 1931-1933 quedaba formalmente cerrado. En la práctica, el bienio que se abrió fue mucho más moderado, con la amnistía de los presos de 1934 y el abandono de la reforma agraria como objetivo inmediato.'
          },
          {
            type: 'p',
            text: 'La polarización se agravó también en la calle. El 13 de julio de 1936 fue asesinado el diputado monárquico José Calvo Sotelo, a manos de unos guardias de la Guardia de Asalto, un episodio que la historiografía ha interpretado de maneras muy distintas. Ese asesinato, junto con la ruptura de la disciplina de los partidos, quitó a los mandos del Ejército la última cautela y precipitó el golpe.'
          }
        ]
      },
      {
        id: 'sr-republica-en-guerra',
        heading: 'La República en guerra (1936-1939)',
        blocks: [
          {
            type: 'p',
            text: 'El golpe de Estado de los días 17 y 18 de julio de 1936 fue una rebelión militar que dividió el país en dos zonas y abrió la guerra civil. Los sublevados, dirigidos por el general Franco, controlaron pronto el noroeste, Galicia, Castilla y parte de Andalucía, mientras la República conservó Madrid, el Levante, Cataluña y la mayor parte de la economía industrial del país.'
          },
          {
            type: 'table',
            head: ['Periodo', 'Presidencia del Gobierno', 'Hito asociado'],
            rows: [
              ['Abril-octubre de 1931', 'Niceto Alcalá-Zamora, presidente del Gobierno provisional', 'Elecciones constituyentes y primera crisis religiosa'],
              ['Octubre de 1931-enero de 1933', 'Manuel Azaña', 'Reforma militar, disolución de la Compañía de Jesús, Estatuto de Cataluña, reforma agraria y divorcio'],
              ['Enero-octubre de 1933', 'Diego Martínez Barrio', 'Elecciones del 19 de noviembre de 1933 y giro a la derecha'],
              ['Octubre de 1933-enero de 1936', 'Alejandro Lerroux', 'Bienio radical-cedista, revolución de octubre de 1934 y escándalo del estraperlo'],
              ['Enero-mayo de 1936', 'Francisco Casares Quiroga', 'Amnistía de los presos de 1934 y convocatoria de elecciones'],
              ['Mayo-septiembre de 1936', 'José Giral y Francisco Casares Quiroga, con Azaña como presidente de la República', 'Sublevación militar del 17 de julio y apertura de la guerra'],
              ['Septiembre de 1936-mayo de 1937', 'Francisco Largo Caballero', 'Traslado del Gobierno a Valencia en octubre de 1936'],
              ['Mayo de 1937-marzo de 1939', 'Juan Negrín', 'Traslado a Barcelona en octubre de 1937, ofensivas de 1938 y caída del Norte'],
              ['Marzo-abril de 1939', 'Gobierno del Frente Popular hasta el golpe del 5 de marzo de 1939', 'Salida de Negrín y de Azaña del territorio nacional']
            ]
          },
          {
            type: 'p',
            text: 'En la zona republicana la guerra se administró desde el Gobierno, con la creación del Ejército Popular, la transformación de las milicias en unidades regulares y la intervención creciente del Partido Comunista, que aportó un volumen decisivo de tropas y suministros a partir del otoño de 1936. El Comité Internacional de No Intervención refrenó la ayuda exterior a la República, el Gobierno se trasladó primero a Valencia en octubre de 1936 y después a Barcelona en octubre de 1937.'
          },
          {
            type: 'p',
            text: 'El desenlace militar llegó en cuatro pasos: la caída de Barcelona en enero de 1939, el corte de la zona republicana en el golpe de Estado del 5 de marzo de 1939, la salida de Negrín y de Azaña del territorio nacional y el anuncio del general Franco de que la guerra había terminado el 1 de abril de 1939. El desarrollo de la guerra se detalla en [[gob:espana#gc-golpe-de-estado|la sección Guerra Civil]], y el régimen que se implantó después se analiza en [[gob:espana#fr-victoria-y-posguerra|la sección Franquismo]].'
          }
        ]
      },
      {
        id: 'sr-balance-y-memoria',
        heading: 'Balance, historiografía y memoria',
        blocks: [
          {
            type: 'p',
            text: 'El balance del régimen tiene tres niveles y en ninguno es unívoco. En el plano formal, la República hizo en ocho años lo que ni la monarquía ni la dictadura habían logrado: el sufragio universal femenino, la laicidad del Estado, la educación obligatoria, la regulación del matrimonio y un régimen de autonomías. En el plano material, buena parte de esas medidas no llegó a aplicarse por falta de medios y por la resistencia de los intereses afectados.'
          },
          {
            type: 'p',
            text: 'La historiografía mantiene un debate abierto sobre las causas del colapso. Una corriente, representada por autores como Stanley Payne, sostiene que la República se perdió por la debilidad de la izquierda, por la ausencia de una alternativa revolucionaria a la reforma agraria y por la línea del Partido Comunista. Otra, en la que se sitúan historiadores como Fernando Tusell o Julio Aróstegui, atribuye el colapso a factores estructurales: la crisis de 1930, el abandono de la protección arancelera que había protegido a la agricultura y la hostilidad de los grupos privilegiados a cualquier reforma.'
          },
          {
            type: 'p',
            text: 'La memoria de la República se construyó sobre todo después de 1975. En la Transición, el relato del consenso dejó la guerra fuera del debate público, y la República pasó a ser el nombre de un modelo alternativo de país, el de [[gob:espana|la España de hoy]] o el de [[gob:espana#tr-herencia|la Transición]]. Ambas posiciones historiográficas coinciden, en cambio, en que el proyecto de 1931 nunca se completó y en que el orden republicano era inestable desde 1933.'
          },
          {
            type: 'ul',
            items: [
              'La Constitución de 1931 fue el texto constitucional más avanzado de la España contemporánea, y su artículo 26 sigue siendo el punto de referencia del debate sobre la laicidad en el ordenamiento español actual.',
              'La reforma agraria no llegó a aplicarse, pero dejó detrás el debate sobre la propiedad de la tierra que reapareció con los Acuerdos de la Transición y en las reformas del campo posteriores.',
              'La disolución de los órdenes religiosos se aplicó de forma desigual, pero sentó un precedente sobre la naturaleza del Estado laico que las constituciones posteriores tardaron décadas en recuperar.',
              'La experiencia republicana es una de las fuentes del constitucionalismo actual de [[gob:espana|España]], y también uno de los temas más incómodos del debate sobre la memoria en el país.'
            ]
          }
        ]
      },
      {
        id: 'gc-golpe-de-estado',
        heading: 'El golpe de Estado de julio de 1936 y la división de España',
        blocks: [
          {
            type: 'p',
            text: 'El golpe de julio de 1936 fue la culminación de una conspiración militar preparada desde la primavera de 1935. La victoria del Frente Popular en las elecciones del 14 al 16 de febrero de 1936 aceleró los planes de los sectores del ejército, de la Falange Española y de las JONS, que se movían contra un régimen que reformaba la tierra, la Iglesia y las fuerzas armadas. El general Emilio Mola dirigía la conspiración en la zona norte, el general Francisco Franco el plan en Marruecos y el general José Sanjurjo, que debía asumir el mando único, estaba exiliado en Portugal y murió el 20 de julio de 1936 al desplomarse su avión en el despegue.'
          },
          {
            type: 'p',
            text: 'La mañana del 17 de julio de 1936 la guarnición de Melilla se sublevó contra la autoridad republicana y los regimientos nativos del protectorado se pasaron a los sublevados con una rapidez inesperada. Esa misma noche las tropas cruzaron el estrecho hacia Sevilla y el 18 de julio el movimiento se extendió por la península, con la toma de Sevilla, Badajoz, Cáceres y Toledo. El 21 de julio los golpes fracasaron en Barcelona, Madrid y Valencia, y el país quedó partido en dos zonas separadas por un frente de contacto de más de mil kilómetros, no por una frontera convencional.'
          },
          {
            type: 'ul',
            items: [
              'El 24 de julio de 1936 Mola constituyó en Burgos la Junta de Defensa Nacional, antecedente del poder único de la zona rebelde y del proceso de unificación partidista que culminó en abril de 1937.',
              'El 1 de octubre de 1936 las autoridades de Burgos nombraron a Franco generalísimo y jefe del Estado de la España nacional, una concentración de poderes que explica la configuración autoritaria de todo el régimen.',
              'El 4 de septiembre de 1936 se formó en Madrid el gobierno de Francisco Largo Caballero, mientras la República conservaba la constitucionalidad y la legitimidad electoral de [[gob:espana#sr-proclamacion|la Segunda República]].',
              'El asedio del Alcázar de Toledo, entre el 20 de julio y el 27 de septiembre de 1936, mostró que la rebelión necesitaba tiempo para consolidarse y convirtió el palacio en símbolo de la resistencia republicana.'
            ]
          },
          {
            type: 'p',
            text: 'Con Madrid y Barcelona en manos republicanas, la guerra quedó consolidada como un conflicto abierto entre dos proyectos incompatibles. El bando nacional quería restaurar un orden basado en la Iglesia, la propiedad y la jerarquía militar, mientras el bando republicano, heredero de las reformas del primer bienio de [[gob:espana#sr-proclamacion|la Segunda República]], debía defender la reforma agraria y abrir el país a una transformación social. Esa dialéctica explica que el conflicto no fuera una simple querella militar, sino una lucha por el modelo de país que se decidiría también en la retaguardia.'
          }
        ]
      },
      {
        id: 'gc-dos-bandos',
        heading: 'Dos bandos: la zona republicana y la zona nacional',
        blocks: [
          {
            type: 'p',
            text: 'La zona republicana comprendía la mayor parte de la franja mediterránea, de Andalucía Oriental a Cataluña, y las regiones del centro y del norte: Madrid, Castilla-La Mancha, Aragón, País Vasco, Navarra, Valencia y los archipiélagos, además de las plazas del norte de África. Su legitimidad formal residía en la Constitución vigente y en el gobierno elegido en febrero de 1936, con Manuel Azaña como presidente de la República, el [[partido:ppsoe|PSOE]] entre las fuerzas del Frente Popular y Largo Caballero al frente del Gobierno desde el 4 de septiembre.'
          },
          {
            type: 'p',
            text: 'La zona nacional ocupó la España occidental, desde Galicia y Navarra hasta Andalucía, y se articuló en torno a un mando único, Franco, y a un partido único. El decreto de 1 de abril de 1937 fusionó la Falange Española, las JONS y otros grupos derechistas en FET y de las JONS, situado bajo la autoridad del jefe nacional. La comparación con los sistemas de partido único del fascismo europeo describe bien esa arquitectura, que prepara el régimen de [[gob:espana#fr-victoria-y-posguerra|el franquismo]] con su concentración de poderes y su organización de partido único.'
          },
          {
            type: 'ul',
            items: [
              'En la zona nacional el poder se apoyó en el Estado de excepción: la Ley de Responsabilidades Políticas del 9 de agosto de 1936, la depuración de la Administración y de la justicia y la suspensión de garantías constitucionales.',
              'En la zona republicana coexistieron el gobierno civil, los ejércitos regulares, las milicias de la CNT-FAI y de la UGT, el POUM y las células del [[ideologia:comunismo|Partido Comunista]], con una tensión permanente entre el mando político y la autonomía de las organizaciones.',
              'La frontera con Francia permaneció oficialmente cerrada a las columnas republicanas, lo que dejó a la zona aislada frente a sus proveedores exteriores y forzó a la República a comprar en el mercado exterior.',
              'La duración de la guerra transformó la estructura de los dos Estados: en la zona nacional se concentró todo el poder en Burgos, y en la republicana se multiplicaron los organismos de guerra y de emergencia.'
            ]
          },
          {
            type: 'p',
            text: 'El frente era solo una parte del problema: en la zona republicana pesaban la economía de guerra, la escasez, el aislamiento diplomático y la esperanza de una guerra breve que cada derrota desmentía. En el bando nacional, el relato de la cruzada contra el comunismo y la defensa de la Iglesia articularon la guerra con [[ideologia:fascismo|el fascismo]] y dieron a la represión una justificación religiosa que forma parte del programa del régimen.'
          }
        ]
      },
      {
        id: 'gc-desarrollo-militar',
        heading: 'El desarrollo de la guerra: de Madrid al Ebro',
        blocks: [
          {
            type: 'p',
            text: 'La campaña nacional avanzó de occidente a oriente siguiendo el eje que va de Sevilla a Burgos, y las ofensivas contra Madrid, en noviembre de 1936, y contra el País Vasco, en la primavera de 1937, buscaron el arco industrial y el puerto de Bilbao. La resistencia de la capital, sostenida por milicias y unidades regulares, y la contraofensiva de Guadalajara frenaron el proyecto de tomar Madrid y dejaron el frente de los Pirineos y el de Extremadura estabilizados durante 1937.'
          },
          {
            type: 'table',
            head: ['Combate o episodio', 'Fechas', 'Resultado'],
            rows: [
              ['Asedio del Alcázar de Toledo', 'Del 20 de julio al 27 de septiembre de 1936', 'Las columnas de alivio republicanas rompen el cerco tras setenta días de resistencia'],
              ['Defensa de Madrid', 'Del 4 al 26 de noviembre de 1936', 'La ciudad resiste y obliga a la ofensiva nacional a replegarse hacia el Jarama'],
              ['Batalla del Jarama', 'Entre el 6 y el 27 de enero de 1937, y conmemorada el 6 de febrero', 'La ofensiva republicana se detiene sin alcanzar sus objetivos y deja bajas muy elevadas'],
              ['Batalla de Guadalajara', 'Del 6 al 12 de marzo de 1937', 'Derrota italiana y primera gran victoria republicana en campo abierto'],
              ['Caída de Bilbao', 'Junio de 1937', 'El bando nacional cierra el cerco del País Vasco y ocupa la zona vizcaína'],
              ['Batalla de Teruel', 'Del 16 de diciembre de 1937 al 22 de febrero de 1938', 'La ofensiva nacional toma la ciudad tras más de dos meses de combate urbano'],
              ['Ofensiva de Aragón y batalla del Ebro', 'De julio a noviembre de 1938', 'La mayor batalla de la guerra acaba con el agotamiento de las fuerzas republicanas del Este']
            ]
          },
          {
            type: 'quote',
            text: 'No pasarán.',
            cite: 'lema de la defensa de Madrid, noviembre de 1936',
            author: 'Asamblea popular de defensa de Madrid'
          },
          {
            type: 'p',
            text: 'La guerra cambió de ritmo en 1937. En el Jarama, en enero, la ofensiva republicana contra el cerco de Madrid se agotó contra las posiciones construidas desde noviembre. En Guadalajara, en marzo, brigadas internacionales y unidades republicanas derrotaron al Corpo Truppe Volontarie y obligaron a replantear el plan de operaciones italiano. En diciembre de 1937 arrancó el asedio de Teruel, y la toma de la ciudad en febrero de 1938 abrió la ofensiva de Aragón, que culminó en la batalla del Ebro.'
          },
          {
            type: 'ul',
            items: [
              'La ofensiva del Ebro fue ordenada por el gobierno de Negrín contra el parecer de su propio estado mayor, que señalaba el riesgo de destruir las fuerzas republicanas del Este.',
              'La Legión Cóndor y la aviación italiana concentraron el peso de los ataques aéreos sobre las posiciones republicanas, sobre todo durante los meses del Ebro y en la franja mediterránea.',
              'La fortificación de la línea del Ebro, con el río como obstáculo natural, favoreció al defensor y convirtió la batalla en un concurso de artillería y trincheras.',
              'La concentración de fuerzas en el Ebro dejó a Aragón y a la franja mediterránea con menos unidades disponibles, y esa debilidad se agravó cuando la guerra cambió de eje hacia el norte.'
            ]
          }
        ]
      },
      {
        id: 'gc-dimension-internacional',
        heading: 'La dimensión internacional: no intervención y brigadas',
        blocks: [
          {
            type: 'p',
            text: 'La guerra transcurrió bajo el régimen de no intervención creado en Londres el 4 de agosto de 1936 por Francia, Reino Unido, Alemania, Italia y la Unión Soviética. España no formaba parte del comité, y Estados Unidos mantuvo desde noviembre de 1936 una neutralidad moral que le impedía vender armas a los dos bandos. El resultado fue un sistema que dejó pasar la ayuda concedida a cada bando sin poner freno real a ninguna de las dos.'
          },
          {
            type: 'table',
            head: ['Interviniente', 'Desde', 'Aportación y alcance'],
            rows: [
              ['Comité de No Intervención', 'Londres, agosto de 1936', 'Aplicó un acuerdo de no intervención que no impidió la ayuda a ninguna de las dos partes'],
              ['Unión Soviética', 'Octubre de 1936', 'Suministró vehículos, aviación y material de guerra, a cambio del oro de las reservas del Banco de España enviado a Moscú'],
              ['Alemania nazi', '1936-1939', 'Aportó la Legión Cóndor, con sus cazas y bombarderos, y retiró sus fuerzas en junio de 1939'],
              ['Italia fascista', '1936-1939', 'Mantuvo el Corpo Truppe Volontarie en los frentes de Aragón, Guadarrama y Guadalajara'],
              ['Brigadas Internacionales', 'Octubre de 1936 a noviembre de 1938', 'Voluntarios extranjeros al servicio de la República, disueltas por decreto el 23 de septiembre de 1938'],
              ['Francia y Reino Unido', 'Durante toda la guerra', 'Mantuvieron la frontera cerrada a la República y aplicaron medidas de restricción comercial con el país']
            ]
          },
          {
            type: 'p',
            text: 'Cada bando buscó el apoyo de las potencias que compartían su causa, y esa búsqueda convirtió la guerra en un capítulo de la ruptura del orden europeo de Versalles. La ayuda de Alemania y de Italia a la zona nacional y la de la Unión Soviética a la República no fueron excepciones a la no intervención, sino dos caras de la misma división de Europa en bloques, que enfrentaba a las democracias con los regímenes autoritarios.'
          },
          {
            type: 'ul',
            items: [
              'Las reservas de oro del Banco de España, unas 500 toneladas según los inventarios de la época, fueron trasladadas a Moscú en octubre de 1936 como contraprestación del material soviético.',
              'Las Brigadas Internacionales cambiaron la naturaleza del conflicto al incorporar combatientes extranjeros a las unidades republicanas, y su disolución en 1938 privó a la República de uno de sus medios militares más eficientes.',
              'La retirada de la Legión Cóndor en junio de 1939 y el desgaste del Corpo Truppe Volontarie dejaron al bando nacional con un apoyo aéreo y terrestre extranjero mucho menor de cara al futuro.',
              'Portugal apoyó a la zona nacional con bases, permisos de vuelo y un regimiento de lanceros formado por voluntarios portugueses, sin llegar a comprometer unidades propias en el frente.'
            ]
          },
          {
            type: 'p',
            text: 'La guerra se cerró con el agotamiento material de la República y con el aislamiento diplomático que dejó a su gobierno sin aliados en el continente europeo. Esa combinación de factores, y no una sola batalla, explica el desenlace de 1939.'
          }
        ]
      },
      {
        id: 'gc-retaguardia-y-represion',
        heading: 'Retaguardia, represión y terror',
        blocks: [
          {
            type: 'p',
            text: 'La retaguardia fue el otro frente de la guerra, y en ella la violencia política cambió de escala. En la zona republicana, los paseos, ejecuciones sumarias sin proceso previo, y las checas de Madrid, Barcelona, Valencia y León marcaron los primeros meses del conflicto. El campo de concentración de Paracuellos, abierto en octubre de 1936 a las afueras de Madrid, es el caso que mejor documenta ese proceso y sigue siendo objeto de investigación.'
          },
          {
            type: 'p',
            text: 'En la zona nacional la represión tuvo dos fases. Durante la guerra se aplicaron la Ley de Responsabilidades Políticas de 1936 y la depuración de la Administración republicana. Después de la victoria, el régimen de Franco depuró los cuerpos de la Administración, la justicia, la universidad y las fuerzas armadas, con una duración de dos décadas.'
          },
          {
            type: 'ul',
            items: [
              'El número de víctimas de la represión sigue siendo discutido, y los estudios demográficos suelen hablar de decenas de miles de muertos en cada una de las dos zonas, con cifras que varían según la fuente.',
              'El choque entre el gobierno y las organizaciones milicianas culminó en Barcelona en mayo de 1937, cuando el POUM fue ilegalizado y sus milicias derrotadas.',
              'En el País Vasco, la guerra y la posguerra dieron continuidad a un conflicto político que se prolongó durante décadas, como analiza [[geo:violencia-politica-vasca|la violencia política vasca]].',
              'Los estudios más recientes contrastan los registros parroquiales y los libros de defunción de cada zona, y de ahí proceden la mayor parte de las estimaciones sobre el número de víctimas.'
            ]
          },
          {
            type: 'p',
            text: 'La violencia de la retaguardia no fue un episodio aislado, sino la expresión de un Estado en guerra abierto y sin garantías, y su memoria forma parte del debate político abierto desde [[gob:espana#tr-herencia|la Transición]].'
          }
        ]
      },
      {
        id: 'gc-revolucion-y-economia',
        heading: 'Revolución social y economía de guerra',
        blocks: [
          {
            type: 'p',
            text: 'La guerra aceleró la [[ideologia:anarcosindicalismo|revolución social]] en la zona republicana. Las milicias de la CNT-FAI, que tomaron la iniciativa en los primeros días, extendieron la colectivización de tierras, talleres y comercios sobre todo en Aragón, en el Levante y en Cataluña. El resultado fue una economía de guerra dirigida en buena parte desde abajo, con graves problemas de coordinación y de abastecimiento que el gobierno de la República no logró resolver.'
          },
          {
            type: 'p',
            text: 'El bando nacional tendió a lo contrario: la concentración de la producción en organismos oficiales, el racionamiento mediante cartillas y una administración centralizada. En los dos bandos el efecto más profundo de la guerra fue la ruina del sector secundario y el empobrecimiento de la población, agravados por el bloqueo del comercio exterior.'
          },
          {
            type: 'ul',
            items: [
              'Las colectivizaciones rompieron la estructura de la propiedad, y su reversión después de la guerra fue uno de los ejes de la depuración del régimen.',
              'La economía de guerra obligó a los dos Estados a emitir moneda y a practicar una política de precios que benefició a unos pocos y perjudicó a la mayoría.',
              'El choque entre [[ideologia:anarquismo|anarquistas]] y comunistas estuvo presente durante toda la guerra y culminó en la crisis de Barcelona de mayo de 1937.',
              'La guerra movilizó a las mujeres en la industria y en el campo y alteró la vida cotidiana de todo el país.'
            ]
          },
          {
            type: 'p',
            text: 'La guerra dejó una economía destruida y una reforma agraria pendiente. El régimen que victorió después no la ejecutó, de modo que la cuestión de la tierra quedó abierta durante décadas. Ese componente de la crisis de 1936 explica por qué [[ideologia:anarquismo|la revolución]] y las colectivizaciones siguen siendo un punto de debate en la memoria española.'
          }
        ]
      },
      {
        id: 'gc-desenlace',
        heading: 'El desenlace: caída de Cataluña y fin de la guerra',
        blocks: [
          {
            type: 'p',
            text: 'La derrota del Ebro en noviembre de 1938 partió la zona republicana en dos. El gobierno concentró sus fuerzas en Madrid, pero la campaña de Aragón había dejado a la franja mediterránea sin reservas suficientes para resistir un ataque generalizado.'
          },
          {
            type: 'p',
            text: 'En enero de 1939 se inició la campaña final sobre Cataluña. Los bombardeos de la aviación alemana e italiana sobre Barcelona obligaron a la población civil a abandonar la ciudad, y la Retirada llevó a varios cientos de miles de personas hacia la frontera francesa entre el 23 de enero y el 23 de febrero, con el cruce del Ebro en Pertegàs como último punto del avance del éxodo.'
          },
          {
            type: 'ul',
            items: [
              'La Retirada estuvo seguida de campos de concentración y de internamiento en el sur de Francia, como Argelès-sur-Mer, Le Barcarès o Saint-Cyprien, donde buena parte de los exiliados permaneció años.',
              'México, bajo el gobierno de Lázaro Cárdenas, recibió a miles de exiliados, entre ellos a Juan Negrín y a Indalecio Prieto, y les ofreció asilo y permisos de residencia.',
              'La guerra terminó sin un tratado de paz: Franco anunció por radio el 1 de abril de 1939 que la resistencia había cesado, sin que existiera un armisticio firmado con un gobierno republicano representativo.',
              'La caída de Barcelona, el 1 de febrero de 1939, cerró la última fase del conflicto, y el golpe del 5 de marzo contra el gobierno de Negrín dejó la resistencia en manos del Consejo General de Defensa.'
            ]
          },
          {
            type: 'p',
            text: 'La victoria del bando nacional convirtió la guerra en el fundamento político de [[gob:espana#fr-victoria-y-posguerra|un régimen]] que se prolongó hasta 1975 y marcó la historia de [[gob:espana|España]] hasta la Transición. Esa transición llegó después, como una ruptura con ese régimen y no como una vuelta a la República.'
          }
        ]
      },
      {
        id: 'gc-balance-y-memoria',
        heading: 'Consecuencias, historiografía y memoria',
        blocks: [
          {
            type: 'p',
            text: 'Las consecuencias fueron demográficas, políticas y sociales. Entre 500.000 y un millón de personas murieron según los estudios demográficos, y varios cientos de miles se exiliaron. Las cifras siguen discutidas, pero el orden de magnitud no lo está.'
          },
          {
            type: 'p',
            text: 'La historiografía de la guerra ha conocido tres momentos. En la Transición se abrieron los archivos y se discutió la responsabilidad de cada bando. En los años ochenta y noventa se debatió el papel de la Iglesia, del ejército y de las potencias exteriores. A partir de 2022, con la Ley de Memoria Democrática, el foco se desplazó hacia las víctimas y la reparación.'
          },
          {
            type: 'ul',
            items: [
              'Las síntesis más citadas siguen siendo las de Javier Tusell, Paul Preston y Anthony Beevor, que combinaron la documentación de archivos con el testimonio de los protagonistas.',
              'El debate sobre el bombardeo de Guernica del 26 de abril de 1937 sigue abierto, y la historiografía ha analizado la orden política de la operación, las cifras de víctimas y la respuesta de las democracias.',
              'Las fosas comunes, muchas de ellas aún sin identificar, conservan la memoria material de la guerra y alimentan el debate sobre la exhumación, el cuidado de los cementerios y la protección de los archivos.',
              'La Ley 20/2022, de 19 de octubre, de Memoria Democrática, declaró la búsqueda de las personas desaparecidas una política del Estado y reconoció a las familias el derecho a la verdad.'
            ]
          },
          {
            type: 'p',
            text: 'La memoria de la guerra sigue dividida entre quienes la consideran una victoria y quienes la consideran una tragedia. Esa división recorre la política española actual y alimenta el debate sobre el modelo territorial, como muestran las pugnas entre [[partido:ppsoe|el PSOE]] y [[partido:erc|ERC]].'
          }
        ]
      },
      {
        id: 'fr-victoria-y-posguerra',
        heading: 'Victoria de 1939, exilio y represión fundacional',
        blocks: [
          {
            type: 'p',
            text: 'La Guerra Civil, abierta con la sublevación militar de julio de 1936 contra la España de [[gob:espana#sr-proclamacion|la Segunda República]], terminó el 1 de abril de 1939 con el discurso en el que Franco anunció la victoria, días después del agotamiento del frente del Ebro. El régimen nació de una victoria militar que se convirtió enseguida en fuente de legitimidad. Esa guerra, más que ninguna doctrina, explica el crédito de que el régimen gozó durante treinta y seis años. El conflicto se analiza en [[gob:espana#gc-golpe-de-estado|la sección Guerra Civil]]; aquí importa el régimen que nació de su desenlace.'
          },
          {
            type: 'p',
            text: 'La primera tarea del Gobierno fue la depuración política. La ley de Responsabilidades Políticas, de 9 de febrero de 1939, declaró la depuración del país como objetivo del Estado y abrió la vía a la depuración de las fuerzas armadas y a la condena de personas por sus ideología o su pertenencia a organizaciones republicanas. La presión represiva no cesó con la victoria: los tribunales de responsabilidades siguieron operando durante años y la depuración funcionarial apartó del puesto a miles de empleados y profesores.'
          },
          {
            type: 'ul',
            items: [
              'La depuración del ejército, con la destitución de buena parte de los oficiales y la subordinación del mando militar a Franco.',
              'La depuración funcionarial y empresarial, con la revisión de los cargos públicos y de la dirección de las empresas tras la ocupación del país.',
              'La destrucción de las organizaciones obreras, en particular de la CNT y de la FAI, de raíz [[ideologia:anarquismo|anarquista]], y la persecución de sus dirigentes.',
              'El control de la prensa y de la radio, con una censura previa permanente sobre todo lo que no se ajustaba al relato oficial de la guerra.'
            ]
          },
          {
            type: 'p',
            text: 'El otro frente de la posguerra fue el exilio. La Retirada de marzo de 1939 llevó a cientos de miles de personas hacia la frontera con Francia; desde allí una parte quedó internada en campos de concentración, otra embarcó hacia América y otra volvió a cruzar el Atlántico hasta México, donde una generación de escritores, artistas y científicos reorganizó su vida. El exilio no fue solo una derrota: en Francia y en América se mantuvo durante años una estructura política y cultural que alimentó la oposición posterior.'
          }
        ]
      },
      {
        id: 'fr-institucionalizacion',
        heading: 'Las Leyes Fundamentales y el Movimiento Nacional',
        blocks: [
          {
            type: 'p',
            text: 'Sin constitución escrita, el régimen construyó su ordenamiento con un conjunto de normas llamadas Leyes Fundamentales, que actuaron como una suerte de constitución dispersa. La más antigua, el Fuero del Trabajo, es de 1938 y se dictó antes de que terminara la guerra; la más extensa, la Ley Orgánica del Estado, es de 1967. El poder se articuló además alrededor de FET y de las JONS, único partido legal desde 1937, y del Movimiento Nacional, que según su propia doctrina era el Estado mismo y no solo un partido. Las etiquetas de [[ideologia:fascismo|fascismo]] y de [[ideologia:nacionalismo|nacionalismo]] se han empleado para explicar esas formas, y ninguna de las dos agota el régimen.'
          },
          {
            type: 'table',
            head: ['Ley Fundamental', 'Año', 'Contenido esencial'],
            rows: [
              ['Fuero del Trabajo', '1938', 'Organiza la economía nacional según los principios del régimen y reconoce el sindicato como estructura básica de la vida social'],
              ['Ley de Cortes', '1942', 'Compone las Cortes como órgano consultivo y sin iniciativa popular real'],
              ['Fuero de los Españoles', '1945', 'Concede la ciudadanía española y enumera los deberes del ciudadano con el Estado'],
              ['Ley de Referendum Nacional', '1945', 'Autoriza la consulta popular sobre la continuidad del régimen y sobre el ordenamiento de las leyes fundamentales'],
              ['Ley de Sucesión en la Jefatura del Estado', '1947', 'Designa al rey heredero como sucesor de Franco y regula la regencia'],
              ['Principios del Movimiento Nacional', '1958', 'Confirma al Movimiento Nacional como único instrumento de la representación política'],
              ['Ley Orgánica del Estado', '1967', 'Código fundamental que regula las instituciones y las reglas del juego político del régimen']
            ]
          },
          {
            type: 'p',
            text: 'Dos de esas leyes resolvieron los problemas más delicados: la legitimidad y la sucesión. La ley de Referendum Nacional permitió la consulta de 1946, en la que por primera vez votaron las mujeres, y la ley de Sucesión en la Jefatura del Estado designó al rey heredero como sucesor de Franco y reguló la regencia. Ninguna de las dos normas se apoyaba en la iniciativa popular: tanto la consulta como la sucesión se decidieron desde el poder, sin elecciones.'
          },
          {
            type: 'p',
            text: 'A la arquitectura interior se añadieron tres hitos exteriores. El Concordato con la Santa Sede, firmado en 1953, dio a la Iglesia católica un papel reconocido en el Estado; los acuerdos de defensa con Estados Unidos, también de 1953, abrieron el acceso a bases militares estadounidenses; y la admisión en la Organización de las Naciones Unidas en diciembre de 1955 cerró el aislamiento diplomático de la posguerra. El reconocimiento obtenido no alteró la naturaleza personalista del poder.'
          }
        ]
      },
      {
        id: 'fr-autarquia',
        heading: 'Autarquía y racionamiento (1939-1959)',
        blocks: [
          {
            type: 'p',
            text: 'Los primeros veinte años se gobernaron con la doctrina de la autarquía, que identificaba al Estado con el conjunto de la economía y desconfiaba del mercado y de la inversión extranjera. El Instituto Nacional de Industria, creado en 1939, puso bajo control estatal empresas de los sectores estratégicos, y la intervención pública alcanzó también al crédito y a los precios mediante decreto.'
          },
          {
            type: 'ul',
            items: [
              'El racionamiento de alimentos mediante cartillas, que rigió en las grandes ciudades hasta bien entrado el decenio de 1950 y se relajó de forma desigual según el producto.',
              'El estraperlo, el mercado negro de alimentos y de productos de importación, tolerado mientras el Gobierno no pudo resolverlo por sí mismo.',
              'El control de precios por decreto y la limitación de las importaciones mediante cupos, que hicieron depender el consumo del comercio exterior.',
              'La pobreza del campo, agravada por las sequías de los años cuarenta y por el abandono de la reforma agraria que la República había previsto.'
            ]
          },
          {
            type: 'p',
            text: 'La combinación de una oferta corta de productos, unos salarios contenidos y una administración que fijaba los precios produjo una contradicción permanente entre el discurso del bien común y la realidad del consumo diario. El régimen solo cambió de política económica cuando el modelo se le hizo insostenible, y lo hizo por arriba y de golpe, no como resultado de un debate público.'
          },
          {
            type: 'p',
            text: 'El Plan de Estabilización, aprobado por decreto-ley el 21 de julio de 1959, acabó con la autarquía: liberalizó parcialmente los precios, subjectó el crédito a las directrices del Gobierno y abrió la puerta a la inversión privada. A partir de ese momento el Ministerio de Hacienda pasó a manos de figuras técnicas y el Opus Dei tuvo un peso determinante en el diseño de la nueva política económica.'
          }
        ]
      },
      {
        id: 'fr-apertura-y-desarrollismo',
        heading: 'Apertura y desarrollismo (1959-1973)',
        blocks: [
          {
            type: 'p',
            text: 'La etapa que va de 1959 a 1973 se conoce como desarrollismo y estuvo en manos de un equipo de políticos y técnicos ligados al Opus Dei, que traía del exterior una idea de la economía que rompía con el intervencionismo de los años cuarenta. El Plan de Estabilización y los Planes de Desarrollo fueron sus dos instrumentos principales.'
          },
          {
            type: 'table',
            head: ['Plan', 'Años', 'Prioridades'],
            rows: [
              ['Primer Plan de Desarrollo', '1964-1969', 'Industrialización, inversión pública y expansión del turismo'],
              ['Segundo Plan de Desarrollo', '1969-1975', 'Continuidad del modelo con más inversión pública y apertura a la inversión extranjera'],
              ['Tercer Plan de Desarrollo', '1975-1979', 'Aprobado en 1975 y aplicado ya con Franco muerto']
            ]
          },
          {
            type: 'p',
            text: 'Los años sesenta trajeron el turismo de masas, la inversión extranjera y una emigración muy numerosa hacia Europa, en particular hacia Francia, Alemania y Portugal. Las divisas del turismo y las remesas de los emigrantes financiaron buena parte del crecimiento, y los historiadores suelen cifrar el avance anual de la década en el entorno del 7 por ciento, estimación que se ha discutido y revisado a la baja en los estudios más recientes. El equilibrio se sostuvo mientras hubo mano de obra barata fuera del país.'
          },
          {
            type: 'ul',
            items: [
              'El consumo interno como motor de la demanda y el turismo como principal fuente de divisas, en el modelo que se ha llamado el milagro económico.',
              'La inversión pública como instrumento de regulación de la actividad privada, con un plan cuadrienal que orientaba a las empresas.',
              'La entrada de capital privado y la presencia creciente de bancos extranjeros en la banca española.',
              'El crecimiento con una desigualdad interna evidente, entre el norte industrializado, el interior agrario y las capitales saturadas.'
            ]
          }
        ]
      },
      {
        id: 'fr-sociedad-y-control',
        heading: 'Sociedad, nacionalcatolicismo y censura',
        blocks: [
          {
            type: 'p',
            text: 'El nacionalcatolicismo fue la doctrina que ordenó el régimen: identificó la nación española con el catolicismo y convirtió a la Iglesia en un actor institucional de primer orden. El Concordato de 1953 reglamentó esa relación y la ley de Educación Nacional de 1945 confirmó la enseñanza religiosa como eje del sistema educativo. La Iglesia, a cambio, ofrecía legitimidad moral y una red de escuelas y asociaciones que el Estado utilizaba.'
          },
          {
            type: 'p',
            text: 'La censura fue el instrumento cotidiano del régimen. La prensa, la radio y después la televisión funcionaron bajo autorización administrativa previa, y la ley de Libertad de Prensa de 1966 consolidó ese control en lugar de suprimirlo. En la práctica, escribir sobre la guerra, sobre el régimen o sobre la Iglesia dependía de una autorización que se podía retirar sin explicación y sin recurso efectivo.'
          },
          {
            type: 'ul',
            items: [
              'La Sección Femenina, organización femenina del partido, que educaba a las mujeres según los principios del hogar y de la patria.',
              'El Frente de Juventudes, que educaba en la disciplina física, la milicia y la obediencia, y ocupaba buena parte del tiempo libre de los jóvenes.',
              'El control policial y administrativo de las asociaciones, con la posibilidad de disolverlas por vía administrativa sin juicio.',
              'La negación de la [[ideologia:sindicalismo|libertad sindical]], con la afiliación obligatoria a los sindicatos del partido y la sanción de toda actividad sindical independiente.'
            ]
          },
          {
            type: 'p',
            text: 'El cambio llegó también por la vía del consumo: se generalizaron los electrodomésticos, el automóvil y el turismo popular, y con ellos una imagen pública del país que no coincidía con la del régimen. Esa distancia entre la sociedad de consumo de los años sesenta y el discurso oficial fue una de las tensiones que hizo imposible la continuidad del sistema después de 1973.'
          }
        ]
      },
      {
        id: 'fr-oposicion',
        heading: 'La oposición: maquis, partidos y sindicatos clandestinos',
        blocks: [
          {
            type: 'p',
            text: 'La oposición se organizó en dos frentes, el militar y el político. En el militar, el maquis, formado por combatientes de la República y por movilizados de la posguerra, se extendió por las zonas rurales del interior y estuvo activo sobre todo entre 1944 y 1953, hasta que la combinación de las campañas del Ejército con las delaciones y las redes de colaboración policial lo redujo a un núcleo residual.'
          },
          {
            type: 'p',
            text: 'En el frente político, el Partido Comunista de España, dirigido por Santiago Carrillo, quedó en la ilegalidad desde 1955 y mantuvo una organización clandestina que combinaba la propaganda con la negociación con el régimen. Las Comisiones Obreras, nacidas en 1955 dentro del Partido como organización sindical propia, fueron legalizadas en 1963 e integraron la estructura sindical oficial, aunque conservaron cierta autonomía de hecho.'
          },
          {
            type: 'p',
            text: 'La organización armada ETA, fundada en 1959, mantuvo durante los años sesenta una actividad limitada y muy distinta de la que tendría después, y pasó luego a una estrategia de violencia clandestina que se prolongó hasta bien entrado el proceso político abierto en 1977.'
          },
          {
            type: 'p',
            text: 'El episodio central de la represalia judicial fue el Proceso de Burgos, que en 1970 juzgó a miembros de organizaciones clandestinas, en su mayoría vascos, y culminó con condenas muy graves y con ejecuciones. El proceso respondía a la actividad de ETA y a la guerra de Guinea de 1969, y agravó la tensión en el País Vasco, que se estudia en [[geo:violencia-politica-vasca|la violencia política vasca]].'
          },
          {
            type: 'ul',
            items: [
              'La Junta Democrática, constituida en 1974, dio coherencia a la oposición clandestina desde el seno de las Comisiones Obreras.',
              'La Plataforma de Convergencia Democrática se creó en Barcelona en 1975.',
              'La distinción cada vez más visible entre la oposición político-legal y la oposición armada, que dividía ya a la propia familia del régimen.',
              'La presión internacional, con condenas de organismos europeos y de la ONU sobre la violencia política en España.'
            ]
          }
        ]
      },
      {
        id: 'fr-crisis-final',
        heading: 'La crisis final: Carrero Blanco y la muerte de Franco',
        blocks: [
          {
            type: 'p',
            text: 'En julio de 1969, Franco designó a Juan Carlos como su sucesor y lo juramentó ante las Cortes el 22 de ese mes. La sucesión estaba prevista en la ley de 1947, pero el heredero era hasta entonces un militar de carrera sin experiencia política.'
          },
          {
            type: 'p',
            text: 'La crisis se agravó con el asesinato de Carrero Blanco, presidente del Gobierno desde 1969, el 20 de diciembre de 1973, al estallar un coche bomba en una calle de Madrid. Su muerte abría un vacío de sucesión que Franco no pudo llenar: en menos de dos años tuvo que designar dos presidentes del Gobierno.'
          },
          {
            type: 'p',
            text: 'El discurso de Arias Navarro del 12 de febrero de 1974, al que se dio el nombre de «espíritu del 12 de febrero», propuso abrir un proceso político que superase el régimen sin romper con el partido único. La propuesta no pasó de ser un intento de reforma sin efectos duraderos.'
          },
          {
            type: 'ul',
            items: [
              'Dos presidentes del Gobierno en menos de dos años, ambos nombrados por Franco y ninguno con base de apoyo propia suficiente.',
              'La crisis del invierno de 1974 y 1975, con desabastecimiento, conflicto político abierto y un clima de violencia en las calles de las capitales.',
              'La enfermedad de Franco, que se agravó a partir de 1973 y le impidió cumplir sus funciones con normalidad hasta los últimos días.'
            ]
          }
        ]
      },
      {
        id: 'fr-balance-y-memoria',
        heading: 'Balance histórico, historiografía y memoria democrática',
        blocks: [
          {
            type: 'p',
            text: 'El balance del régimen sigue discutiéndose. Lo que no se discute es que entre 1939 y 1975 no hubo elecciones libres, ni libertad de asociación, ni independencia del poder judicial. Las cifras de víctimas sí se debaten: las estimaciones más habituales sitúan los muertos totales de la guerra en torno al millón y los de la posguerra en varias decenas de miles, pero no existe una cifra única aceptada por los historiadores.'
          },
          {
            type: 'quote',
            text: 'Se reconoce y declara el carácter radicalmente injusto de todas las condenas, sanciones y cualesquiera formas de violencia personal producidas por razones políticas, ideológicas o de creencia religiosa, durante la Guerra Civil, así como las sufridas por las mismas causas durante la Dictadura.',
            cite: 'Ley 52/2007, de 26 de diciembre, artículo 2.1',
            author: 'Cortes Generales de España'
          },
          {
            type: 'p',
            text: 'La memoria llegó al ordenamiento jurídico en el siglo XXI. La ley 52/2007, de 26 de diciembre, reconoció la injusticia de las condenas políticas, declaró ilegítimos los tribunales del franquismo y abrió la vía a la localización de las personas desaparecidas. La ley 20/2022, de 19 de octubre, la derogó por completo y la sustituyó por un texto más amplio. Ese mismo debate sigue abierto entre el [[partido:ppsoe|PSOE]] y el [[partido-popular|Partido Popular]] y condiciona la relación del país con [[gob:espana#tr-herencia|la Transición]].'
          },
          {
            type: 'ul',
            items: [
              'El debate central de la historiografía: entre quienes leen el franquismo como un régimen totalitario con un proyecto propio y quienes lo consideran una dictadura personal carente de esos rasgos.',
              'El volumen de la violencia, en el que los estudios de Paul Preston sobre las ejecuciones y los de otros historiadores ofrecen cifras distintas que siguen siendo objeto de discusión.',
              'La biografía de Stanley Payne, que resume en un solo volumen la historia completa del régimen, y la obra historiográfica española, con estudios como los de Julio Aróstegui y Javier Tusell.',
              'El [[ideologia:fascismo|fascismo]] como etiqueta: el debate sobre si el régimen fue un fascismo español o una dictadura autoritaria de raíz católica, con consecuencias políticas hasta hoy en [[geo:violencia-politica-vasca|la violencia política vasca]] y en la memoria del [[gob:espana|Estado constitucional]].'
            ]
          }
        ]
      },
      {
        id: 'tr-herencia',
        heading: 'La herencia del franquismo: muerte de Franco y jura de Juan Carlos I',
        blocks: [
          {
            type: 'p',
            text: 'Francisco Franco murió el 20 de noviembre de 1975. Dos días después, el 22 de noviembre, las Cortes lo sustituyeron como jefe del Estado y proclamaron rey a Juan Carlos de Borbón, a quien Franco había designado heredero en la ley de sucesión de 1947. El nuevo rey juró ante las Cortes el 27 de ese mes. La sucesión estaba prevista, pero el régimen que se heredaba no tenía Constitución: era un conjunto de siete leyes fundamentales, sin Cortes con mandato para reformar el Estado, con un único partido legal, el Movimiento Nacional, y con un jefe del Estado que acumulaba el mando de las Fuerzas Armadas y la facultad de legislar por decreto.'
          },
          {
            type: 'p',
            text: 'A ese orden se añadieron tres elementos que condicionaron la década siguiente: una justicia de excepción y un aparato represivo sin cerrar, con causas judiciales de la guerra civil todavía pendientes, lo que arrastró a la Transición el problema de la memoria de [[gob:espana#fr-balance-y-memoria|franquismo]] y de [[gob:espana#gc-balance-y-memoria|la guerra civil]]; un sistema económico planificado, con la empresa pública como principal empleador; y un reparto territorial uniforme de provincias, que había que romper para dar entrada a la autonomía que el artículo 2 de la futura Constitución iba a reconocer.'
          },
          {
            type: 'p',
            text: 'Carlos Arias Navarro, presidente del Gobierno durante los últimos años de Franco, fue nombrado por el rey el 22 de noviembre de 1975 y confirmado por las Cortes el 2 de diciembre. Su proyecto, una democracia española sin rupturas, se tradujo en dos leyes que abrieron el asociacionismo: la ley 17/1976, de 29 de mayo, reguladora del derecho de reunión, y la ley 21/1976, de 14 de junio, sobre el derecho de asociación política, que permitió crear partidos distintos del Movimiento Nacional.'
          },
          {
            type: 'p',
            text: 'Pero la reforma chocó con la oposición de los mismos mandos que Franco había dejado en los ejércitos. Arias renunció el 1 de julio de 1976, y el 3 de julio el rey nombró a Adolfo Suárez, que había dirigido el Movimiento Nacional desde diciembre de 1975, como presidente del Gobierno.'
          },
          {
            type: 'table',
            head: ['Fecha', 'Hito', 'Efecto institucional'],
            rows: [
              ['20 de noviembre de 1975', 'Fallecimiento de Francisco Franco', 'Fin de la condición vitalicia de jefe del Estado'],
              ['22 de noviembre de 1975', 'Proclamación de Juan Carlos I por las Cortes', 'Aplicación de la ley de sucesión de 1947'],
              ['27 de noviembre de 1975', 'Jura del rey ante las Cortes', 'Inicio de la monarquía en la Transición'],
              ['1 y 3 de julio de 1976', 'Dimisión de Arias Navarro y nombramiento de Suárez', 'Cambio en la dirección del Gobierno'],
              ['18 de noviembre de 1976', 'Las Cortes franquistas aprueban la Ley para la Reforma Política', 'Disolución implícita de las instituciones del régimen'],
              ['15 de diciembre de 1976', 'Referéndum sobre la Reforma Política', 'El sí obtiene el 94,2 por ciento de los votos válidos'],
              ['9 de abril de 1977', 'Legalización del Partido Comunista de España', 'Reconocimiento del principal partido de la oposición'],
              ['15 de junio de 1977', 'Elecciones a Cortes constituyentes', 'Primera convocatoria libre desde 1936'],
              ['17 de octubre de 1977', 'Publicación de la ley 46/1977 de Amnistía', 'Base jurídica del llamado pacto del olvido'],
              ['25 de octubre de 1977', 'Firma de los Pactos de la Moncloa', 'Acuerdo económico, social y político con la oposición'],
              ['6 de diciembre de 1978', 'Referéndum constitucional', 'El texto se aprueba con el 87,8 por ciento de los votos favorables'],
              ['27 de diciembre de 1978', 'Sanción y promulgación de la Constitución', 'Entrada en vigor el 29 de diciembre de 1978']
            ]
          },
          {
            type: 'ul',
            items: [
              'El aparato del Estado se conservó: la reforma cambió las normas, no los cuadros administrativos que las aplicaban.',
              'La Corona quedó como la única institución heredada del régimen con legitimidad anterior al proceso, y por eso pudo arbitrar la Transición desde fuera de los partidos y de las Cortes.',
              'La Iglesia católica, que había sostenido la oposición clandestina, se convirtió en mediadora de los Pactos de la Moncloa y en garantía informal del acuerdo.',
              'La oposición aceptó negociar con el régimen y obtuvo a cambio la convocatoria inmediata de elecciones y el reconocimiento legal de sus organizaciones.'
            ]
          }
        ]
      },
      {
        id: 'tr-reforma-politica',
        heading: 'La reforma desde la ley: Suárez y la Ley para la Reforma Política',
        blocks: [
          {
            type: 'p',
            text: 'Adolfo Suárez cambió el método, no el objetivo. En lugar de romper con el orden heredado, reformó desde dentro: el proyecto se redactó como una octava ley fundamental, de modo que pudieran aprobarlo las mismas Cortes que lo habían creado, y se sometió después a un referéndum. Las Cortes lo aprobaron el 18 de noviembre de 1976.'
          },
          {
            type: 'p',
            text: 'La ley creaba unas Cortes bicamerales, con 350 diputados en el Congreso y 204 senadores, elegidos por sufragio universal, y derogaba implícitamente el resto de las instituciones del régimen, que no tenían otro fundamento que las leyes fundamentales. Suárez explicó el proyecto a los altos mandos del Ejército antes de presentarlo, y el apoyo que obtuvo allí hizo posible la votación.'
          },
          {
            type: 'quote',
            text: 'De la ley a la ley, a través de la ley.',
            cite: 'Frase atribuida a Torcuato Fernández-Miranda, presidente de las Cortes entre 1977 y 1983',
            author: 'Torcuato Fernández-Miranda'
          },
          {
            type: 'p',
            text: 'El referéndum del 15 de diciembre de 1976 confirmó la ley: el sí obtuvo el 94,2 por ciento de los votos válidos. A partir de ese momento, la demanda de la oposición de un gobierno de amplio consenso perdió su sentido, porque era el Gobierno de Suárez quien asumía esa tarea. El método quedó fijado: ni golpe ni ruptura, sino reforma gradual desde la Corona hacia las instituciones.'
          },
          {
            type: 'ul',
            items: [
              'La ley 17/1976 convirtió la asamblea en una libertad reconocida y sentó las bases del sindicalismo de oposición.',
              'La ley 21/1976 permitió la creación de partidos distintos del Movimiento Nacional y abrió la puerta a la legalización de la oposición.',
              'La Ley para la Reforma Política sustituyó el conjunto de las leyes fundamentales por unas Cortes elegidas y dejó la Constitución pendiente de una asamblea constituyente.',
              'La ley 46/1977, de 15 de octubre, de amnistía, cerró formalmente el conflicto armado interno y es la base jurídica del llamado pacto del olvido.'
            ]
          }
        ]
      },
      {
        id: 'tr-elecciones-1977',
        heading: 'Las elecciones de junio de 1977 y la legalización del Partido Comunista',
        blocks: [
          {
            type: 'p',
            text: 'Las elecciones se celebraron el 15 de junio de 1977, las primeras libres desde las de febrero de 1936. Elegían 350 diputados al Congreso, con un sistema proporcional de listas cerradas, y 207 senadores. La participación se acercó al 79 por ciento del censo.'
          },
          {
            type: 'p',
            text: 'La campaña tuvo una asimetría evidente: el Gobierno controlaba la televisión y las principales emisoras de radio, y Suárez se negó a debatir con ningún rival. Se celebraron cerca de 22.000 mítines. El problema del Partido Comunista se resolvió el 9 de abril de 1977, un Sábado Santo, y como contrapartida el PCE aceptó la monarquía y la bandera rojigualda.'
          },
          {
            type: 'table',
            head: ['Formación', 'Votos', 'Porcentaje', 'Diputados'],
            rows: [
              ['Unión de Centro Democrático', '6.310.391', '34,4 %', '165'],
              ['Partido Socialista Obrero Español', '5.371.866', '29,3 %', '118'],
              ['Partido Comunista de España', '1.709.890', '9,3 %', '20'],
              ['Alianza Popular', '1.504.771', '8,2 %', '16'],
              ['Unidad Socialista, PSP y aliados', '816.582', '4,5 %', '6'],
              ['Otros grupos con representación', '—', '6,9 %', '25'],
              ['Total del Congreso', '18.324.333', '100 %', '350']
            ]
          },
          {
            type: 'p',
            text: 'La UCD ganó con 165 diputados, once por debajo de la mayoría absoluta. La sorpresa del día fue [[partido:ppsoe|el Partido Socialista Obrero Español]], con 118 diputados y el 29,3 por ciento de los votos: arrebató la hegemonía de la izquierda al Partido Comunista, principal partido de la oposición antifranquista durante la dictadura. Alianza Popular, del franquismo sociológico y liderada por Manuel Fraga, se quedó muy lejos.'
          },
          {
            type: 'p',
            text: 'Varios partidos republicanos, entre ellos Esquerra Republicana de Cataluña y Acción Republicana Democrática Española, no fueron legalizados hasta el 2 de agosto de 1977, diecisiete días después de la urna. El peso del voto nacionalista fue notable, y el Congreso resultante tenía como tarea específica elaborar una Constitución, de modo que su primer ciclo de trabajo no fue legislar sino constituyerse.'
          },
          {
            type: 'ul',
            items: [
              'La UCD nació en abril de 1977 como una plataforma de docenas de partidos pequeños y medianos, sin organización propia.',
              'El PCE obtuvo veinte diputados y no llegó a ser una fuerza determinante en la aritmética parlamentaria que se abrió después.',
              'El PNV consiguió ocho diputados, el bloque catalán catorce y Esquerra Republicana de Cataluña uno, un reparto que explica buena parte de las demandas posteriores de autonomía.',
              'La campaña de 1977 confirmó que la televisión y la radio seguían siendo el instrumento decisivo de la vida política.'
            ]
          }
        ]
      },
      {
        id: 'tr-consenso-constitucional',
        heading: 'El consenso constitucional: Pactos de la Moncloa y Constitución de 1978',
        blocks: [
          {
            type: 'p',
            text: 'Los Pactos de la Moncloa, firmados el 25 de octubre de 1977, son el acuerdo más conocido del periodo. Reunieron al Gobierno, a la Unión de Centro Democrático y al Partido Socialista Obrero Español, y con ellos a la representación empresarial, a la Unión General de Trabajadores, a las Comisiones Obreras y a la Iglesia, que aportó su autoridad.'
          },
          {
            type: 'p',
            text: 'No fue un pacto para formar un gobierno de coalición, sino un acuerdo de política económica y social, con compromisos de inversión pública, de contención del gasto y de negociación colectiva. Suárez lo presentó como la alternativa a la salida por la fuerza ante el volumen de la violencia, y la oposición lo aceptó porque entendía que fijaba el proceso a un método pacífico y con plazos.'
          },
          {
            type: 'p',
            text: 'El efecto institucional fue decisivo: la UCD obtuvo la concordancia del PSOE y del PCE para seguir gobernando, de modo que la oposición dejó de ser un obstáculo y pasó a ser un socio ocasional. Las Cortes constituyentes formaron una comisión de dieciséis miembros, con la mayoría centrista y la oposición dentro, que elaboró el proyecto de Constitución.'
          },
          {
            type: 'p',
            text: 'El texto, aprobado por el Congreso en octubre de 1978 y por el Senado en el mes siguiente, definía un Estado social y democrático de Derecho con la forma política de la monarquía parlamentaria, reconocía en su artículo 2 la autonomía de las nacionalidades y regiones, y reservaba a las Cortes el derecho a aprobar los Estatutos. El referéndum del 6 de diciembre de 1978 lo aprobó con el 87,8 por ciento de los votos favorables.'
          },
          {
            type: 'quote',
            text: 'La soberanía nacional reside en el pueblo español, del que emanan los poderes del Estado.',
            cite: 'Constitución Española, artículo 1.2',
            author: 'Pueblo español'
          },
          {
            type: 'ul',
            items: [
              'El artículo 6 convirtió los partidos políticos en instrumento fundamental de la participación, y por esa puerta la Transición pasó a ser un régimen con reglas estables.',
              'La política económica acordada en la Moncloa se aplicó durante años, pero el pacto se rompió como acuerdo político desde 1979.',
              'El consenso no incluía la justicia del pasado: la amnistía de 1977 había cerrado el conflicto armado, pero no la persecución de los responsables del régimen.',
              'La monarquía quedó fuera de la negociación constitucional por ser la única institución heredada del régimen con legitimidad propia.'
            ]
          }
        ]
      },
      {
        id: 'tr-autonomias',
        heading: 'El Estado de las autonomías en construcción',
        blocks: [
          {
            type: 'p',
            text: 'El artículo 2 reconoce la autonomía de las nacionalidades y regiones, pero deja su instrumentación a los artículos 137 a 151, que ordenan el procedimiento en dos vías. La vía ordinaria, en el artículo 143, exige la iniciativa de las diputaciones provinciales y de dos tercios de los municipios de cada provincia. La vía rápida, contenida en las disposiciones transitorias, permite que un territorio con consideración de histórico acceda al Estatuto por un procedimiento abreviado.'
          },
          {
            type: 'p',
            text: 'El País Vasco y Cataluña recurrieron a esa vía rápida, y por eso sus primeros Estatutos de autonomía fueron las leyes orgánicas 3/1979 y 4/1979, ambas de 18 de diciembre de 1979, frente al procedimiento ordinario que sigue vigente para el resto del país, como explica la sección sobre el Estado de las autonomías de [[gob:espana|España]].'
          },
          {
            type: 'p',
            text: 'Antes de los Estatutos hubo un estado intermedio, el de los regímenes preautonómicos, entre ellos el que el real decreto-ley 11/1978, de 27 de abril, estableció para Andalucía: un órgano propio, pero sin poderes legislativos plenos. En marzo de 1979 se celebraron las primeras elecciones autonómicas y ese mismo año quedaron publicados los dos primeros Estatutos.'
          },
          {
            type: 'ul',
            items: [
              'El artículo 2 enumera las nacionalidades y regiones sin establecer jerarquía entre ellas, de modo que ninguna Comunidad puede invocar un rango superior sobre otra.',
              'La vía de las disposiciones transitorias quedó reservada a los territorios que la propia Constitución calificaba de históricos.',
              'El artículo 143 mantiene la vía ordinaria, con la iniciativa de las diputaciones y de dos tercios de los municipios de cada provincia, y con la ratificación del Estatuto por referéndum.',
              'El artículo 155, aplicado por primera vez en octubre de 2017, es el único mecanismo de ejecución forzosa del Estado contra una Comunidad y revela que la construcción autonomista quedó abierta.'
            ]
          },
          {
            type: 'p',
            text: 'Los dos procesos que el periodo dejó abiertos siguen vigentes. En el País Vasco, la violencia armada condicionó el ritmo de la reforma y dejó una raíz territorial sin cerrar, como se analiza en la ficha de [[geo:violencia-politica-vasca|violencia política vasca]]. En Cataluña, el Estatuto de 1979 fue el punto de partida de un debate que, cuatro décadas después, se ha desplazado hacia la soberanía, como en la ficha del [[geo:proceso-soberanista-catalan|proceso soberanista catalán]].'
          }
        ]
      },
      {
        id: 'tr-violencia-y-golpismo',
        heading: 'Violencia terrorista y golpismo: el 23-F',
        blocks: [
          {
            type: 'p',
            text: 'La violencia marcó todo el periodo y condicionó su ritmo en las dos direcciones. ETA, que había iniciado su actividad armada en los años sesenta, siguió activa durante todo el proceso, y el GRAPO, fundado a finales de 1975, operaba sobre todo en las grandes ciudades. Los secuestros de octubre de 1977 en Barcelona, atribuidos al GRAPO, marcaron el debate político mucho más allá de su dimensión criminal.'
          },
          {
            type: 'p',
            text: 'Al mismo tiempo, la violencia daba argumentos a los sectores del ejército que se opusieron a la reforma, y el Gobierno tuvo que negociar con ellos el calendario de cada medida, desde la legalización del PCE hasta los Estatutos de autonomía.'
          },
          {
            type: 'p',
            text: 'El 23 de febrero de 1981, a las seis y veintitrés de la tarde, el teniente coronel Antonio Tejero, al mando de un grupo de guardias civiles, irrumpió en el hemiciclo del Congreso de los Diputados, que votaba la investidura de Leopoldo Calvo-Sotelo. Los diputados y el Gobierno quedaron retenidos en el interior. En Valencia, el teniente general Jaime Milans del Bosch proclamó el estado de excepción y desplegó dos mil hombres y cincuenta carros de combate.'
          },
          {
            type: 'p',
            text: 'A la una de la madrugada del día siguiente, el rey Juan Carlos I, vestido con el uniforme de capitán general de los Ejércitos, se dirigió a la nación por televisión para situarse en contra de los golpistas y defender la Constitución. El secuestro terminó al mediodía del 24 de febrero, sin víctimas.'
          },
          {
            type: 'p',
            text: 'El golpe fracasó en unas horas. El Tribunal Supremo condenó a treinta años de cárcel a Milans del Bosch, Tejero y Alfonso Armada, y en el conjunto del juicio a doce miembros de las Fuerzas Armadas, diecisiete de la Guardia Civil y un civil. El episodio demostró la fragilidad de unas instituciones recién estrenadas y, al mismo tiempo, su resistencia, porque la crisis se resolvió dentro del procedimiento.'
          },
          {
            type: 'ul',
            items: [
              'La ley 46/1977 amnistió a los miembros de organizaciones armadas y a los integrantes de las fuerzas republicanas, cerrando el conflicto armado interno.',
              'El ejército aceptó la reforma sin organizar un golpe general, pero mantuvo durante años una posición de vigilancia sobre el Gobierno.',
              'La legalización del Partido Comunista en abril de 1977 provocó la primera crisis seria con los mandos, y el 23-F fue la segunda y la última.',
              'La violencia tuvo además efectos económicos: retrasó la integración del país en las comunidades económicas europeas, que no se produjo hasta 1986.'
            ]
          }
        ]
      },
      {
        id: 'tr-descomposicion-ucd',
        heading: 'Descomposición de la UCD y alternancia de 1982',
        blocks: [
          {
            type: 'p',
            text: 'La Unión de Centro Democrático nació como una plataforma electoral en abril de 1977 y ganó las elecciones tres meses después, cuando todavía no tenía organización propia. El Gobierno de Suárez se apoyó en ella mientras la reforma estuvo en marcha; cerrada la Constitución a finales de 1978, la coalición empezó a deshacerse.'
          },
          {
            type: 'p',
            text: 'Sus sectores más fuertes, el socialdemócrata y el liberal, discrepaban sobre el ritmo de las reformas, y la dirección del partido, ejercida por Suárez desde la presidencia del Gobierno, se confundía con la del Gobierno mismo: no existía una alternativa de Gobierno dentro del partido, de modo que una crisis de ese tipo no tenía salida.'
          },
          {
            type: 'p',
            text: 'La crisis se agravó con dos decisiones. Suárez anunció su dimisión a finales de enero de 1981 y el rey nombró a Leopoldo Calvo-Sotelo, que estaba siendo investido el 23 de febrero, el mismo día del golpe de Estado. Calvo-Sotelo carecía de base partidista propia y su Gobierno no disponía de la mayoría necesaria.'
          },
          {
            type: 'p',
            text: 'El resultado electoral del 28 de octubre de 1982 fue arrollador: [[partido:ppsoe|el Partido Socialista Obrero Español]] obtuvo 208 de los 350 diputados con el 48,1 por ciento de los votos, la coalición conservadora de Manuel Fraga, que dio lugar a [[partido:partido-popular|el Partido Popular]], 42, la UCD 73, el PCE 4 y la CiU 12. Felipe González fue investido el 12 de diciembre y la UCD se disolvió: era la primera alternancia en el poder desde la guerra civil.'
          },
          {
            type: 'ul',
            items: [
              'La UCD no era un partido, sino una coalición de docenas de formaciones; cuando desapareció el enemigo común, se separaron el CDS de Suárez, sostenido por el sector de la [[ideologia:democracia-cristiana|democracia cristiana]], y el Partido Popular de Fraga.',
              'La campaña de 1982 fue la primera en que los dos grandes partidos, el Socialista y el Popular, se enfrentaron como tales.',
              'Con esa mayoría el Partido Socialista pudo gobernar sin apoyos externos hasta 1986, cuando perdió la mayoría absoluta ante las mismas fuerzas del centro.',
              'El resultado consolidó al rey como factor de arbitraje de la vida política y convirtió el golpe fallido de 1981 en la explicación del carácter neutral del nuevo jefe del Estado.'
            ]
          },
          {
            type: 'p',
            text: 'El ciclo se cerraba. Entre 1975 y 1982 se pasó de un régimen que no necesitaba elecciones a otro que se renovaba por el voto, y en el que las Fuerzas Armadas ya no eran un actor capaz de decidir quién gobernaba.'
          }
        ]
      },
      {
        id: 'tr-balance-y-memoria',
        heading: 'Balance histórico y memoria: debates sobre la Transición',
        blocks: [
          {
            type: 'p',
            text: 'El balance del proceso sigue abierto. Los elementos que no se discuten son estos: se evitó un conflicto civil, se celebraron elecciones libres en menos de dos años, se elaboró una Constitución por consenso y el régimen que salió de ella ha funcionado durante décadas sin interrupciones.'
          },
          {
            type: 'p',
            text: 'Lo que se discute es otra cosa: si el método, la reforma desde dentro, fue la causa de la paz o la causa de la permanencia del [[ideologia:fascismo|franquismo]]; si el Estado que salió de la Transición conservó estructuras económicas, educativas y de medios heredadas del régimen; y qué respuesta debe darse a la memoria de la represión.'
          },
          {
            type: 'ul',
            items: [
              'Continuidad o ruptura: para unos la Transición fue una ruptura con el régimen autoritario; para otros fue una continuidad del Estado administrativo, con la que la Constitución de 1978 no hizo más que sancionar un proceso ya realizado.',
              'Pacto o consenso: los Pactos de la Moncloa se han interpretado como un acuerdo honesto entre fuerzas moderadas o como la manera en que un Gobierno sin apoyo propio compraba tiempo.',
              'El olvido: la amnistía de 1977 se ha leído como la medida que dio estabilidad al país y también como el instrumento que impidió el castigo de los responsables del régimen.',
              'Quién sostiene la democracia: la respuesta sobre si el garante es la monarquía, la Constitución o los partidos cambia lo que se entiende por una reforma constitucional posible.'
            ]
          },
          {
            type: 'p',
            text: 'La cuestión de la memoria pasó del terreno político al jurídico. La ley 52/2007, de 26 de diciembre, reconoció y amplió los derechos de quienes padecieron persecución o violencia durante la guerra civil y la dictadura, y la ley 20/2022, de 19 de octubre, de Memoria Democrática, declaró nulo el llamado pacto del olvido.'
          },
          {
            type: 'p',
            text: 'Hay también una continuidad institucional que los relatos del periodo suelen pasar por alto. El Gobierno que se formó en diciembre de 1982 se apoyó en el mismo aparato judicial y administrativo que la reforma había respetado, y el proceso no abordó ni la reforma estructural de la economía ni el sistema de propiedad de los medios de comunicación. La continuidad política fue además explícita: el partido que ganó en 1982 era heredero directo del que se exilió en 1939.'
          }
        ]
      }
    ],
    categories: ['Gobiernos', 'Europa meridional', 'Historia política de España', 'Historia contemporánea'],
    related: ['liberalismo', 'socialdemocracia', 'ppsoe', 'partido-popular', 'anarquismo'],
    references: [
      {
        title: 'Constitución Española, texto consolidado',
        author: 'Agencia Estatal Boletín Oficial del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 1978,
        type: 'ley',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229'
      },
      {
        title: 'Ley 46/1977, de 15 de octubre, de Amnistía',
        author: 'Agencia Estatal Boletín Oficial del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 1977,
        type: 'ley',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1977-24937'
      },
      {
        title: 'Ley Orgánica 5/1985, de 19 de junio, del Régimen Electoral General',
        author: 'Agencia Estatal Boletín Oficial del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 1985,
        type: 'ley',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672'
      },
      {
        title: 'Reforma del artículo 13, apartado 2, de la Constitución Española, de 27 de agosto de 1992',
        author: 'Agencia Estatal Boletín Oficial del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 1992,
        type: 'ley',
        url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-1992-20403'
      },
      {
        title: 'Reforma del artículo 135 de la Constitución Española, de 27 de septiembre de 2011',
        author: 'Agencia Estatal Boletín Oficial del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 2011,
        type: 'ley',
        url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2011-15210'
      },
      {
        title: 'Ley 52/2007, de 26 de diciembre, por la que se reconocen y amplían derechos de quienes padecieron persecución o violencia durante la guerra civil y la dictadura',
        author: 'Agencia Estatal Boletín Oficial del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 2007,
        type: 'ley',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-22296'
      },
      {
        title: 'Ley 20/2022, de 19 de octubre, de Memoria Democrática',
        author: 'Agencia Estatal Boletín Oficial del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 2022,
        type: 'ley',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-17099'
      },
      {
        title: 'Ley Orgánica 1/2024, de 10 de junio, de amnistía para la normalización institucional, política y social en Cataluña',
        author: 'Agencia Estatal Boletín Oficial del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 2024,
        type: 'ley',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2024-11776'
      },
      {
        title: 'Reforma del apartado 3 del artículo 69 de la Constitución Española, de 19 de mayo de 2026',
        author: 'Agencia Estatal Boletín Oficial del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 2026,
        type: 'ley',
        url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2026-10881'
      },
      {
        title: 'Ley Orgánica 2/1981, de 18 de febrero, del Consejo General del Poder Judicial',
        author: 'Agencia Estatal Boletín Oficial del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 1981,
        type: 'ley',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1981-5730'
      },
      {
        title: 'Real Decreto Legislativo 8/2015, de 23 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social',
        author: 'Agencia Estatal Boletín Oficial del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 2015,
        type: 'ley',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11724'
      },
      {
        title: 'Sesiones de investidura del Congreso de los Diputados',
        author: 'Congreso de los Diputados',
        publisher: 'Congreso de los Diputados, Madrid',
        year: 2026,
        type: 'dato',
        url: 'https://www.congreso.es/es/cem/sesiones-de-investidura'
      },
      {
        title: 'Portal institucional del Tribunal Constitucional de España',
        author: 'Tribunal Constitucional',
        publisher: 'Tribunal Constitucional, Madrid',
        year: 2026,
        type: 'dato',
        url: 'https://www.tribunalconstitucional.es/es/'
      },
      {
        title: 'Portal institucional del Instituto Nacional de Estadística',
        author: 'Instituto Nacional de Estadística',
        publisher: 'INE, Madrid',
        year: 2026,
        type: 'informe',
        url: 'https://www.ine.es/'
      },
      {
        title: 'Portal institucional del Ministerio de Hacienda',
        author: 'Ministerio de Hacienda',
        publisher: 'Ministerio de Hacienda, Madrid',
        year: 2026,
        type: 'dato',
        url: 'https://www.hacienda.gob.es/'
      },
      {
        title: 'Segunda República española',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'enciclopedia',
        url: 'https://es.wikipedia.org/wiki/Segunda_Rep%C3%BAblica_espa%C3%B1ola'
      },
      {
        title: 'Constitución española de 1931: texto, debate y contexto',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 1931,
        type: 'documento',
        url: 'https://es.wikipedia.org/wiki/Constituci%C3%B3n_espa%C3%B1ola_de_1931'
      },
      {
        title: 'Dictadura de Primo de Rivera',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Dictadura_de_Primo_de_Rivera'
      },
      {
        title: 'Pacto de San Sebastián',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Pacto_de_San_Sebasti%C3%A1n'
      },
      {
        title: 'Elecciones generales de España de 1931',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Elecciones_generales_de_Espa%C3%B1a_de_1931'
      },
      {
        title: 'Bienio radical-cedista',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Bienio_radical-cedista'
      },
      {
        title: 'Revolución de 1934',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Revoluci%C3%B3n_de_1934'
      },
      {
        title: 'Manuel Azaña',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Manuel_Aza%C3%B1a'
      },
      {
        title: 'Casas Viejas',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Casas_Viejas'
      },
      {
        title: 'Escándalo del estraperlo',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Estraperlo'
      },
      {
        title: 'José Calvo Sotelo',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Jos%C3%A9_Calvo_Sotelo'
      },
      {
        title: 'Frente Popular',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Frente_Popular'
      },
      {
        title: 'Guerra Civil española',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Guerra_Civil_Espa%C3%B1ola'
      },
      {
        title: 'Francisco Largo Caballero',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Francisco_Largo_Caballero'
      },
      {
        title: 'Esquerra Republicana de Catalunya',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Esquerra_Republicana_de_Catalunya'
      },
      {
        title: 'Institución Libre de Enseñanza',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Instituci%C3%B3n_Libre_de_Ense%C3%B1anza'
      },
      {
        title: 'Misiones Pedagógicas',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Misiones_Pedag%C3%B3gicas'
      },
      {
        title: 'Clara Campoamor',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Clara_Campoamor'
      },
      {
        title: 'Victoria Kent',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Victoria_Kent'
      },
      {
        title: 'Sufragio femenino en España',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'articulo',
        url: 'https://es.wikipedia.org/wiki/Sufragio_femenino_en_Espa%C3%B1a'
      },
      {
        title: 'Guerra Civil Española',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Guerra_Civil_Espa%C3%B1ola'
      },
      {
        title: 'Golpe de Estado en España de julio de 1936',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Golpe_de_Estado_en_Espa%C3%B1a_de_julio_de_1936'
      },
      {
        title: 'Batalla de Madrid',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Batalla_de_Madrid'
      },
      {
        title: 'Bombardeo de Guernica',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Bombardeo_de_Guernica'
      },
      {
        title: 'Brigadas Internacionales',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Brigadas_Internacionales'
      },
      {
        title: 'Batalla del Ebro',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Batalla_del_Ebro'
      },
      {
        title: 'Batalla de Teruel',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Batalla_de_Teruel'
      },
      {
        title: 'Comité de No Intervención',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Comit%C3%A9_de_No_Intervenci%C3%B3n'
      },
      {
        title: 'Legión Cóndor',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Legi%C3%B3n_C%C3%B3ndor'
      },
      {
        title: 'Corpo Truppe Volontarie',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Corpo_Truppe_Volontarie'
      },
      {
        title: 'FET y de las JONS',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/FET_y_de_las_JONS'
      },
      {
        title: 'Checas',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Checas'
      },
      {
        title: 'Paracuellos',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Paracuellos'
      },
      {
        title: 'Ley de Memoria Democrática',
        author: 'Varios autores',
        publisher: 'Wikipedia en español',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Ley_de_Memoria_Democr%C3%A1tica'
      },
      {
        title: 'Historia Hispánica, diccionario biográfico y bibliográfico del siglo XIX',
        author: 'Real Academia de la Historia',
        publisher: 'Real Academia de la Historia, Madrid',
        year: 2026,
        type: 'enciclopedia',
        url: 'https://historia-hispanica.rah.es/'
      },
      {
        title: 'Biblioteca Virtual Miguel de Cervantes',
        author: 'Fundación Juan March y Casa de América',
        publisher: 'Biblioteca Virtual Miguel de Cervantes',
        year: 2026,
        type: 'dato',
        url: 'https://www.cervantesvirtual.com/'
      },
      {
        title: 'Franquismo',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Franquismo'
      },
      {
        title: 'España franquista',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Espa%C3%B1a_franquista'
      },
      {
        title: 'Leyes Fundamentales del Reino',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Leyes_Fundamentales_del_Reino'
      },
      {
        title: 'Ley Orgánica del Estado',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Ley_Org%C3%A1nica_del_Estado'
      },
      {
        title: 'Plan de Estabilización de 1959',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Plan_de_Estabilizaci%C3%B3n_de_1959'
      },
      {
        title: 'Planes de desarrollo',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Planes_de_desarrollo'
      },
      {
        title: 'Milagro económico español',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Milagro_econ%C3%B3mico_espa%C3%B1ol'
      },
      {
        title: 'Nacionalcatolicismo',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Nacionalcatolicismo'
      },
      {
        title: 'Francisco Franco Bahamonde',
        author: 'Real Academia de la Historia',
        publisher: 'Diccionario Biográfico Español, Madrid',
        year: 2026,
        type: 'enciclopedia',
        url: 'https://dbe.rah.es/biografias/6288/francisco-franco-y-bahamonde'
      },
      {
        title: 'Proceso de Burgos',
        author: 'Wikipedia en español',
        publisher: 'Wikimedia Foundation',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Proceso_de_Burgos'
      },
      {
        title: 'Transición española',
        author: 'Wikipedia en español',
        publisher: 'Fundación Wikimedia, San Francisco',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Transici%C3%B3n_espa%C3%B1ola'
      },
      {
        title: 'Francisco Franco',
        author: 'Wikipedia en español',
        publisher: 'Fundación Wikimedia, San Francisco',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Francisco_Franco'
      },
      {
        title: 'Juan Carlos I de España',
        author: 'Wikipedia en español',
        publisher: 'Fundación Wikimedia, San Francisco',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Juan_Carlos_I_de_Espa%C3%B1a'
      },
      {
        title: 'Adolfo Suárez',
        author: 'Wikipedia en español',
        publisher: 'Fundación Wikimedia, San Francisco',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Adolfo_Su%C3%A1rez'
      },
      {
        title: 'Decreto-ley 15/1975, de 20 de noviembre, sobre la suspensión de espectáculos y el día de la proclamación de Juan Carlos I',
        author: 'Agencia Estatal Boletín Oficial del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 1975,
        type: 'ley',
        url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-1975-23875'
      },
      {
        title: 'Ley 17/1976, de 29 de mayo, reguladora del Derecho de reunión',
        author: 'Agencia Estatal Boletín Oficial del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 1976,
        type: 'ley',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1976-10540'
      },
      {
        title: 'Ley 21/1976, de 14 de junio, sobre el Derecho de Asociación Política',
        author: 'Agencia Estatal Boletín Oficial del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 1976,
        type: 'ley',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1976-11502'
      },
      {
        title: 'Ley para la Reforma Política',
        author: 'Wikipedia en español',
        publisher: 'Fundación Wikimedia, San Francisco',
        year: 2026,
        type: 'ley',
        url: 'https://es.wikipedia.org/wiki/Ley_para_la_Reforma_Pol%C3%ADtica'
      },
      {
        title: 'Ley de amnistía de 1977',
        author: 'Wikipedia en español',
        publisher: 'Fundación Wikimedia, San Francisco',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Ley_de_amnist%C3%ADa_de_1977'
      },
      {
        title: 'Elecciones generales de España de 1977',
        author: 'Wikipedia en español',
        publisher: 'Fundación Wikimedia, San Francisco',
        year: 2026,
        type: 'dato',
        url: 'https://es.wikipedia.org/wiki/Elecciones_generales_de_Espa%C3%B1a_de_1977'
      },
      {
        title: 'Pactos de la Moncloa',
        author: 'Wikipedia en español',
        publisher: 'Fundación Wikimedia, San Francisco',
        year: 2026,
        type: 'documento',
        url: 'https://es.wikipedia.org/wiki/Pactos_de_la_Moncloa'
      },
      {
        title: 'Constitución española de 1978',
        author: 'Wikipedia en español',
        publisher: 'Fundación Wikimedia, San Francisco',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Constituci%C3%B3n_espa%C3%B1ola_de_1978'
      },
      {
        title: 'Real Decreto-ley 11/1978, de 27 de abril, por el que se aprueba el régimen preautonómico para Andalucía',
        author: 'Agencia Estatal Boletín Oficial del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 1978,
        type: 'ley',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-11313'
      },
      {
        title: 'Ley Orgánica 3/1979, de 18 de diciembre, de Estatuto de Autonomía para el País Vasco',
        author: 'Agencia Estatal Boletín Oficial del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 1979,
        type: 'ley',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1979-30177'
      },
      {
        title: 'Ley Orgánica 4/1979, de 18 de diciembre, de Estatuto de Autonomía de Cataluña',
        author: 'Agencia Estatal Boletín Oficial del Estado',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 1979,
        type: 'ley',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1979-30178'
      },
      {
        title: 'Golpe de Estado en España de 1981',
        author: 'Wikipedia en español',
        publisher: 'Fundación Wikimedia, San Francisco',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Golpe_de_Estado_en_Espa%C3%B1a_de_1981'
      },
      {
        title: 'Elecciones generales de España de 1982',
        author: 'Wikipedia en español',
        publisher: 'Fundación Wikimedia, San Francisco',
        year: 2026,
        type: 'dato',
        url: 'https://es.wikipedia.org/wiki/Elecciones_generales_de_Espa%C3%B1a_de_1982'
      },
      {
        title: 'Felipe González',
        author: 'Wikipedia en español',
        publisher: 'Fundación Wikimedia, San Francisco',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Felipe_Gonz%C3%A1lez'
      },
      {
        title: 'Pacto del Olvido',
        author: 'Wikipedia en español',
        publisher: 'Fundación Wikimedia, San Francisco',
        year: 2026,
        type: 'web',
        url: 'https://es.wikipedia.org/wiki/Pacto_del_Olvido'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
