(function (PW) {
  'use strict';
  PW.gobiernos = PW.gobiernos || {};
  PW.gobiernos['polonia'] = {
    kind: 'gobierno',
    slug: 'polonia',
    title: 'Polonia: la ruptura constitucional y el turnismo',
    subtitle: 'República constitucional unitaria de Europa central con un presidente electo por cinco años, un Parlamento de dos cámaras y un Tribunal Constitucional de quince jueces',
    category: 'Gobierno',
    tags: ['república', 'tercera república', 'constitución', 'parlamento', 'tribunal constitucional', 'presidencialismo'],
    region: 'Europa Central',
    timeFrame: '1989-actualidad',
    updated: '2026-09-28',
    summary: 'República constitucional unitaria de Europa central en la que un presidente electo por cinco años dispone de veto, de mando militar y de nombramientos propios, mientras el Gobierno depende de una cámara baja sin mayoría absoluta y el Tribunal Constitucional, con quince jueces elegidos por el Sejm para mandatos de nueve años, funciona como árbitro de la constitucionalidad.',
    actors: [
      { name: 'Presidente de la República', role: 'jefe del Estado electo directamente por cinco años, con veto, mando supremo de las fuerzas armadas y nombramiento de los primeros cargos de los órganos judiciales', power: 'alta' },
      { name: 'Consejo de Ministros', role: 'órgano ejecutivo nombrado por el presidente y sujeto al voto de confianza del Sejm, que puede cesarlo mediante una censura constructiva', power: 'alta' },
      { name: 'Sejm', role: 'cámara de 500 diputados que legisla, aprueba el presupuesto, elige a los jueces del Tribunal Constitucional y al Defensor del Pueblo y de la que depende el Gobierno', power: 'alta' },
      { name: 'Tribunal Constitucional', role: 'árbitro de la conformidad de las leyes con la Constitución, compuesto por quince jueces elegidos por el Sejm para un único mandato de nueve años', power: 'alta' },
      { name: 'Senado', role: 'cámara alta de cien senadores elegidos en circunscripción uninominal, con iniciativa legislativa y competencias muy limitadas frente a la Cámara baja', power: 'media' },
      { name: 'Organización del Tratado del Atlántico Norte', role: 'alianza de defensa de la que Polonia es miembro desde 1999 y que ordena el flanco oriental del dispositivo europeo de seguridad', power: 'media' }
    ],
    infobox: {
      caption: 'Polonia, Tercera República',
      color: '#b3202c',
      rows: [
        ['Período', '1989-actualidad'],
        ['Forma de Estado', 'República constitucional unitaria, con separación de poderes'],
        ['Constitución vigente', '2 de abril de 1997, en vigor desde el 17 de octubre de 1997'],
        ['Jefatura del Estado', 'Presidente de la República, elegido por cinco años y reelegible una sola vez'],
        ['Presidente en el cargo', 'Karol Nawrocki, desde el 6 de agosto de 2025'],
        ['Gobierno', 'Primer ministro Donald Tusk, en el cargo desde el 13 de diciembre de 2023'],
        ['Parlamento', 'Sejm de 500 diputados y Senado de 100 senadores'],
        ['Defensor del Pueblo', 'cargo creado por el artículo 226 para proteger los derechos de los ciudadanos, elegido por el Sejm para cuatro años']
      ]
    },
    sections: [
      {
        id: 'origen-estado',
        heading: 'Origen del Estado: los repartos, la República Popular y la Tercera República',
        blocks: [
          {
            type: 'p',
            text: 'La continuidad de un poder legislativo polaco se rompe en 1772, cuando Rusia, Prusia y Austria se reparten el primer tramo de la Commonwealth; el segundo reparto llega en 1793 y el tercero, que borra el Estado de la carta, en 1795. La Constitución de 3 de mayo de 1791 había abolido el principio de la unanimidad, el «liberum veto» y el derecho de secesión, y su pérdida explica la profundidad del trauma fundacional. Entre 1493 y 1793 se celebraron doscientas cuarenta sesiones del Sejm que suman cuarenta y cuatro años de deliberación. La independencia recuperada en 1918 se apoyó de manera explícita en esa tradición, y la Constitución de marzo de 1921 fue una de las más democráticas de la Europa de posguerra.'
          },
          {
            type: 'p',
            text: 'La República Popular implantada tras 1945 desarmó esa continuidad institucional. El Sejm unicameral, declarado máximo órgano del poder del Estado, se limitaba a refrendar decisiones adoptadas por el Partido Obrero Unificado de Polonia; el proyecto de Constitución de 1952 llegó a establecer el principio de la dirección del partido como base del sistema, y esa ficción se mantuvo hasta la revisión de 1976. El acuerdo firmado con el Gobierno en el astillero de Gdańsk en agosto de 1980 dio lugar a Solidarność como sindicato independiente; la ley marcial del 13 de diciembre de 1981 lo disolvió y suspendió la vida pública, que se reanudó en la clandestinidad.'
          },
          {
            type: 'p',
            text: 'Los acuerdos de la Mesa Redonda, cerrados en abril de 1989, pactaron el final del monopolio del poder. La consulta del 4 de junio, con segunda vuelta el 18, solo dejó 161 de los 460 diputados del Sejm en competición genuinamente libre; el resto estaba reservado a los partidos que integraban el bloque en el poder. Solidarność ganó esos 161 puestos y 99 de los 100 Senadores. El 30 de diciembre de 1989 el propio Sejm suprimió del ordenamiento el papel rector del partido. Nació así la Tercera República, con Tadeusz Mazowiecki al frente del Gobierno desde el 17 de septiembre de 1989.'
          },
          {
            type: 'table',
            head: ['Fecha', 'Acontecimiento', 'Consecuencia institucional'],
            rows: [
              ['1772, 1793 y 1795', 'Reparto de la Commonwealth entre Rusia, Prusia y Austria', 'Desaparición del Estado y de la continuidad del Sejm durante 123 años'],
              ['31 de agosto de 1980', 'Huelga en el astillero de Gdańsk y acuerdo con el Gobierno', 'Nace Solidarność como sindicato independiente'],
              ['13 de diciembre de 1981', 'Ley marcial y suspensión de la actividad sindical', 'La oposición se reorganiza en la clandestinidad'],
              ['Abril de 1989', 'Cierre de los acuerdos de la Mesa Redonda', 'Se autoriza una competencia electoral real'],
              ['4 y 18 de junio de 1989', 'Elecciones con 161 de los 460 diputados en competición', 'Solidarność gana los 161 puestos y 99 de los 100 Senadores'],
              ['30 de diciembre de 1989', 'El Sejm suprime el papel rector del partido', 'Nace formalmente la Tercera República'],
              ['25 de junio de 1997', 'Referéndum de aprobación de la Constitución', 'La Constitución entra en vigor el 17 de octubre de 1997']
            ]
          }
        ]
      },
      {
        id: 'constitucion-1997',
        heading: 'La Constitución de 1997: rigidez y supremacía de la norma',
        blocks: [
          {
            type: 'p',
            text: 'El primer artículo define al Estado como una República democrática y jurídica. Sitúa la soberanía en el pueblo, que la ejerce por medio del Parlamento o directamente. El segundo artículo resuelve quién es el soberano, y lo identifica con la nación, no con el electorado ni con la asamblea. Es una distinción condicionante. La nación es la comunidad de ciudadanos. La nación puede reclamar continuidad en el tiempo. Ninguna mayoría absoluta puede invocarse para fundamentar la ley.'
          },
          {
            type: 'quote',
            text: 'Ustrój polityczny Rzeczypospolitej Polskiej opiera się na zasadzie podziału władz na ustawodawczą, wykonawczą i sądowniczą.',
            cite: 'Constitución de la República de Polonia, artículo 4.1',
            author: 'Nación polaca'
          },
          {
            type: 'p',
            text: 'El artículo 4.2 asigna cada poder. La autoridad legislativa corresponde a las dos cámaras. La ejecutiva, al presidente y al Consejo de Ministros. La judicial, a los tribunales. El artículo 10 añade que los órganos del Estado actúan sobre la base y dentro de los límites de la Constitución. La separación polaca es, por tanto, formal y competencial. Su violación no está en la norma, sino en la conducta, cuando un poder recurre a un acto reservado a otro para neutralizarlo. Esa fue exactamente la técnica que empleó el Tribunal Constitucional entre 2015 y 2024.'
          },
          {
            type: 'p',
            text: 'La rigidez del texto es su principal argumento de estabilidad y también su principal freno. El artículo 243 exige una mayoría de tres quintos en cada cámara, y en dos legislaturas consecutivas, para modificar cualquier norma. Añade un referéndum nacional cuando lo que se altera son los derechos o los principios básicos de la estructura del Estado. No se ha producido ni una sola reforma constitucional desde 1997. Esa inmovilidad protege la norma y, a la vez, pospone la adaptación del Estado a la transformación digital, a la migración y al cambio climático. En un sistema con dos cabezas en el ejecutivo, convierte cada reforma necesaria en un motivo de crisis institucional.'
          },
          {
            type: 'ul',
            items: [
              'El capítulo II recoge los derechos y las libertades con detalle. Incorpora el artículo 59, que sitúa a la familia bajo la protección del Estado, y el 30, que protege la dignidad humana. Abre a cualquier ciudadano la denuncia ante el Tribunal Constitucional contra una ley.',
              'El artículo 168 somete la cuenta general del Estado al Sejm y faculta al Tribunal de Cuentas para controlar la actividad financiera pública. El artículo 19 limita la competencia estatal a los asuntos que las leyes asignan a las autoridades centrales y a los que son propios de la comunidad local.',
              'El artículo 85 identifica al Sejm como el choosable nacional de la soberanía popular. El artículo 174 reserva la iniciativa legislativa al Gobierno, a un quinto de los diputados, al Senado y a un décimo de los ciudadanos. La iniciativa popular no existe como figura separada.',
              'El artículo 78 sujeta los partidos a dos límites nuevos: la igualdad de trato de los candidatos y la prohibición de la violencia en su actividad. No impone la mayoría de un solo partido ni un umbral mínimo de representación.'
            ]
          }
        ]
      },
      {
        id: 'poderes',
        heading: 'El presidente y el reparto de los tres poderes',
        blocks: [
          {
            type: 'p',
            text: 'El presidente es el supremo jerarca del Estado, guardián de la soberanía y de la unidad nacional, y garante de la Constitución, de la ley y de la seguridad jurídica. Lo elige el electorado directamente por cinco años, y puede ser reelegido una sola vez. Como mando supremo de las fuerzas armadas, nombra al jefe del Estado Mayor y a los comandantes de las armas. Nombra al primer presidente del Tribunal Supremo, al presidente del Tribunal Constitucional y a los miembros del Consejo de Política Monetaria. Concede indultos.'
          },
          {
            type: 'p',
            text: 'Sus actos requieren la firma del primer ministro, salvo en un catálogo cerrado. Quedan exceptuados el nombramiento del primer ministro, la presentación de proyectos de ley, la convocatoria de referéndum, la firma o el rechazo de una ley y la convocatoria del Consejo de Ministros. En la práctica, esa firma deja de ser un acto de dirección cotidiana. El Gobierno, por su parte, lo compone el Consejo de Ministros según lo determine el primer ministro, que lo propone y el presidente lo nombra. El Sejm le concede un voto de confianza antes de que empiece a gobernar, pero la responsabilidad política se ejerce después, mediante una censura.'
          },
          {
            type: 'p',
            text: 'El artículo 156 regula esa censura y la hace constructiva. Un grupo de al menos cuarenta y seis diputados puede proponer un voto de desconfianza contra el Gobierno entero, nombrando al mismo tiempo un candidato a primer ministro. La propuesta se entiende rechazada si no la apoya la mayoría absoluta de la Cámara, es decir, 141 votos. Ese diseño obliga a la oposición a formular una alternativa, y por eso en un sistema fragmentado la censura casi nunca prospera. En cambio, obliga al Gobierno a depender de una Cámara en la que no tiene mayoría propia.'
          },
          {
            type: 'ul',
            items: [
              'La separación de poderes polaca no está calendarizada. Los ministros no necesitan la aprobación individual de la Cámara, sino solo el voto de confianza global del Gobierno.',
              'El veto presidencial no se limita a los créditos presupuestarios, como en otras constituciones, sino que alcanza cualquier ley y solo se levanta con tres quintos. Eso convierte al presidente en un actor central de la iniciativa legislativa.',
              'El presidente puede disolver el Sejm cuando este no rechaza en primera lectura el proyecto de ley de presupuesto, o cuando lo rechaza dos veces por mayoría de dos tercios. Es una medida que nunca ha sido ejercida.',
              'Un ministro es destituido por el presidente a propuesta del primer ministro, y solo este responde ante la Cámara.'
            ]
          },
          {
            type: 'p',
            text: 'El equilibrio real se ha desplazado en la última década. La doctrina clasifica a Polonia como un régimen parlamentaria, porque el Gobierno depende del Sejm. Pero el presidente dispone de instrumentos que en otros constituyentes se asocian al jefe de un Gobierno. Desde 2015, todos los presidentes elegidos pertenecen a la oposición del Gobierno en ejercicio. El actual, Karol Nawrocki, candidato independiente respaldado por Ley y Justicia, venció el 1 de junio de 2025 a Rafał Trzaskowski, candidato de la plataforma que gobierna, con 10.606.877 votos frente a 10.237.286, y tomó posesión el 6 de agosto de 2025. Esa doble legitimidad, un mandato popular directo para dirigir el Estado y el apoyo articular de una Cámara hostil, es hoy el hecho estructural más característico de la arquitectura institucional del país.'
          }
        ]
      },
      {
        id: 'parlamento',
        heading: 'Sejm, Senado y el arbitraje de la constitucionalidad',
        blocks: [
          {
            type: 'p',
            text: 'El artículo 176 fija el Sejm en 460 diputados y el mandato en cuatro años, con elección proporcional en circunscripciones por el método de d’Hondt. Una reforma de 2011 elevó esa cifra a 500. La ley electoral añade un umbral del 5 % nacional y del 8 % para las coaliciones, y exime de todo umbral a los comités de las minorías étnicas. Los diputados se reparten entre 41 circunscripciones, con un mínimo de siete por circunscripción. Las elecciones del 15 de octubre de 2023 tuvieron una participación del 74,38 %, la más alta de la serie poscomunista.'
          },
          {
            type: 'p',
            text: 'Desde el 18 de noviembre de 2025 el Sejm lo preside Włodzimierz Czarzasty, de Nueva Izquierda. Desde el 13 de noviembre de 2023 el cargo de presidente de edad lo ocupa Marek Sawicki, del Partido Campesino polaco, por acuerdo de las dos fuerzas más grandes. El Senado son cien senadores, elegidos en circunscripción uninominal y en una sola ronda, con un mandato de cuatro años. El artículo 178 deja la regulación electoral a la ley y limita la capacidad de los senadores a la iniciativa legislativa, a las enmiendas y a un grupo reducido de leyes. Desde el 13 de noviembre de 2023 lo preside Małgorzata Kidawa-Błońska.'
          },
          {
            type: 'table',
            head: ['Agrupación en el Sejm', 'Escaños ocupados en septiembre de 2026'],
            rows: [
              ['Coalición Ciudadana', '156'],
              ['Ley y Justicia', '147'],
              ['Desarrollo y Progreso', '40'],
              ['Partido Campesino–Tercera Vía', '32'],
              ['La Izquierda', '21'],
              ['Confederación', '16'],
              ['Centro', '15'],
              ['Polonia 2050', '15'],
              ['Democracia Directa', '4'],
              ['Razem', '4'],
              ['Corona de la República Polaca', '3'],
              ['Diputados sin adscripción', '7'],
              ['Total con credencial', '460']
            ]
          },
          {
            type: 'p',
            text: 'De los 500 diputados de la Cámara en 2026 solo 460 tienen credencial, y esa cifra no coincide con el resultado electoral de 2023. El bloque de Ley y Justicia baja de 194 a 147. Aparece una formación nueva de 40, formada por una escisión interna de un sector de ese mismo partido. Y Tercera Vía se parte: el ala del Partido Campesino conserva 32, mientras Polonia 2050 baja de 33 a 15. La aritmética resultante es la siguiente: el Gobierno, con la Coalición Ciudadana, Tercera Vía, Polonia 2050 y Nueva Izquierda, reúne 224 diputados con credencial. La oposición, con Ley y Justicia, Desarrollo y Progreso, la Confederación y tres grupos menores, llega a 217. Quedan siete diputados sin adscripción.'
          },
          {
            type: 'p',
            text: 'El artículo 188 confía al Tribunal Constitucional la vigilancia de la conformidad de las leyes con la Constitución, y lo compone de quince jueces elegidos por el Sejm para un único mandato de nueve años, sin posibilidad de prórroga. El artículo 189 delimita quién puede activar ese control: el presidente de la República, los presidentes de las dos cámaras, un tercio de los diputados, un quinto de los senadores y el primer ministro. Sus resoluciones obligan a los demás poderes y abrogan la norma. El artículo 191 añade la denuncia individual del ciudadano. Y el artículo 226 crea el Defensor del Pueblo, cargo que protege los derechos y las libertades, se elige por el Sejm con dos tercios y dura cuatro años. Lo ocupa Sylwia Gregorczyk-Abram desde el 29 de julio de 2026.'
          }
        ]
      },
      {
        id: 'partidos',
        heading: 'Partidos, fragmentación y los dos grandes poderes',
        blocks: [
          {
            type: 'p',
            text: 'Las elecciones del 15 de octubre de 2023 dirimieron dos proyectos de país. La Derecha Unida, con Ley y Justicia a la cabeza, obtuvo el 29,11 % del voto y 194 diputados, el mayor número de votos. La Coalición Ciudadana, con Donald Tusk al frente, alcanzó el 30,70 % y 157. La Tercera Vía, con el binomio Polonia 2050 y el Partido Campesino, sumó 65. La Izquierda, 26. Y la Confederación, 18. Ninguna formación alcanzó la mayoría absoluta de los 231 necesarios para gobernar, y el resultado fue el más equilibrado de la serie reciente.'
          },
          {
            type: 'p',
            text: 'Los dos grandes poderes son Ley y Justicia y la Coalición Ciudadana, pero lo son más como instrumentos de gobierno que como partidos cerrados. Son la expresión de una fractura de orientación opuesta y no de clase. Ley y Justicia, refundada en torno a su líder Jarosław Kaczyński, es un partido nacional-populista que en 2015 ganó 235 de los 460 diputados, una mayoría absoluta sin precedentes en la Europa poscomunista, y gobernó ocho años, primero con Beata Szydło y después con Mateusz Morawiecki, bajo la presidencia de Andrzej Duda. La Coalición Ciudadana reúne el liberalismo económico de la plataforma civica, los verdes y una socialdemocracia de orientación europea, y desde 2023 gobierna con un ala a la izquierda de su propio espectro, la de Nueva Izquierda, que aporta la presidencia de la Cámara.'
          },
          {
            type: 'p',
            text: 'La fragmentación opera en los dos lados. La oposición ya no es el bloque monolítico de 2023: 147 diputados de Ley y Justicia, 40 de Desarrollo y Progreso, 16 de la Confederación, tres de la Corona de la República Polaca y dos pequeños grupos de la izquierda radical suman 217, y la formación de 40 nace de una escisión interna del propio partido mayoritario. Y la propia Coalición tampoco se sostiene: la Derecha Unida ganó la primera plaza con algo más de un tercio de los votos y gobierna en coalición con la izquierda, un acoplamiento que la Constitución tolera pero que la estrategia de Ley y Justicia describe como una traición identitaria. Hoy los dos grandes poderes necesitan aliados para gobernar, algo que ninguno de los dos tenía en 2015 ni en 2023.'
          },
          {
            type: 'ul',
            items: [
              'La fragmentación de la derecha ha multiplicado las opciones de bloqueo: con 147, Ley y Justicia ya no puede ganar por sí sola, y una alianza con la Confederación llevaría el bloque de derecha a 163, todavía lejos de los 231 necesarios.',
              'La fragmentación de la izquierda ha permitido que Nueva Izquierda presida el Sejm y aporte dos ministros al Gobierno. Su base es más joven, más urbana y más receptiva a un giro de socialdemocracia europea.',
              'La participación del 74,38 % en 2023 fue la más alta de la serie, con un cuerpo electoral concentrado en mayores y en pequeños pueblos que votan en bloque por un solo partido.',
              'Las siguientes elecciones legislativas están previstas no más tarde del 11 de noviembre de 2027. El presidente dispone de margen para vetar sin temor a la mayoría de tres quintos, y su predicamento puede convertir cada reforma en un episodio de campaña.'
            ]
          }
        ]
      },
      {
        id: 'tribunal',
        heading: 'La ruptura constitucional: el Tribunal Constitucional',
        blocks: [
          {
            type: 'p',
            text: 'La primera fractura se produjo en 2015. El 8 de octubre, dos semanas antes de la celebración de las elecciones, la mayoría saliente designó las cinco plazas de juez del Tribunal que vencían ese año. El presidente entrante Andrzej Duda se negó a tomarles el juramento, y la nueva mayoría del Sejm eligió a otros cinco, que sí juraron. El Tribunal, con mayoría de jueces designados por la mayoría anterior, anuló en diciembre de 2015 la elección de tres de esos cinco. El Gobierno respondió modificando la ley de organización del Tribunal para cambiar su composición. Desde diciembre de 2016 el órgano quedó configurado de hecho por la mayoría de Gobierno.'
          },
          {
            type: 'p',
            text: 'El ciclo 2017-2023 consolidó esa composición. Ley y Justicia volvió a ganar las elecciones de 2019, y Duda las presidenciales de 2020. Para 2021 los quince asientos estaban cubiertos por jueces vinculados al partido que gobernaba. El Tribunal Europeo de Derechos Humanos se reunió en mayo de 2021 en el asunto Xero Flor contra Polonia, y el Tribunal de Justicia de la Unión Europea pidió que se dejara de aplicar parte de la reforma de 2016. Cuando la Coalición Ciudadana volvió a ganar en 2023, el 4 de marzo de 2024 el Gobierno anunció un paquete de reforma que incluía un requerimiento de dimisión a los jueces designados en 2015 y un cambio del procedimiento de elección, con audiencia pública de los candidatos y mayoría de tres quintos.'
          },
          {
            type: 'p',
            text: 'La respuesta institucional llegó en diciembre de 2024. El 9 de diciembre el Sejm eligió como presidente del Tribunal Constitucional a Bogdan Święczkowski, juez del órgano desde 2022, en un acto que el Gobierno ha considerado nulo. Święczkowski ocupa la presidencia hasta 2031. El Gobierno ha seguido completando la composición sin resolver la cuestión de fondo: en 2026 juraron seis magistrados el 1 y el 9 de abril, otro el 28 de julio, y un octavo seguía a la espera del juramento en septiembre. Con ello el Tribunal recupera su funcionamiento ordinario.'
          },
          {
            type: 'p',
            text: 'Las consecuencias exceden el plano interno. Entre 2018 y 2021 la Comisión Europea recurrió al Tribunal de Justicia por incumplimiento, y el Parlamento Europeo activó en diciembre de 2020 el mecanismo de condicionalidad del Estado de derecho, que permitió congelar fondos europeos hasta que un acuerdo en 2021 los desbloqueó. La sentencia K 3/21, de 7 de octubre de 2021, dictada por doce votos contra dos, declaró inconstitucional el principio de primacía del derecho de la [[org:union-europea|Unión Europea]] en cuanto se interpretara más allá de los límites de las competencias aceptadas por los tratados. La primacía europea queda así admitida dentro de un límite, y el debate sobre el [[federalismo|federalismo]] o la soberanía nacional ha pasado a ser un capítulo ordinario de la política del país.'
          },
          {
            type: 'ul',
            items: [
              'La sentencia K 3/21 rompió la ambigüedad que mantenía el ordenamiento polaco. El orden interno y el derecho europeo pasan a estar sometidos a un mismo criterio de conformidad, y esa es la ruptura de mayor alcance del episodio.',
              'La crisis alteró la agenda electoral. En las elecciones presidenciales de 2020 y 2025 el poder judicial figuró entre los asuntos centrales, y la respuesta europea condicionó las reformas judiciales de 2023 y 2024 a criterios que siguen vigentes.',
              'La congelación de fondos europeos convirtió una disputa jurídica interna en un asunto de finanzas públicas, y ése es el precedente que explica la cautela de los gobiernos posteriores.',
              'La normalización del Tribunal no resuelve el problema de fondo. Los jueces designados entre 2015 y 2023 lo siguen ocupando, y la legitimidad de sus nombramientos continúa discutida ante los tribunales europeos.'
            ]
          }
        ]
      },
      {
        id: 'presupuesto',
        heading: 'Presupuesto, deuda pública y el límite europeo del tres por ciento',
        blocks: [
          {
            type: 'p',
            text: 'La ley de presupuestos es, en todos los parlamentos, la prueba de la mayoría. En Polonia lo es el doble. El artículo 217 encomienda al Consejo de Ministros la elaboración del proyecto. El artículo 219 faculta al presidente para vetarlo, igual que cualquier otra ley. Y el artículo 216 sujeta la deuda pública a un techo del 60 % de la renta nacional y exige una mayoría de tres quintos del Sejm para autorizarla. Cada ejercicio es por tanto una doble prueba, ante la Cámara y ante el jefe del Estado, y en los años de polarización esa doble prueba se ha resuelto vetando partidas y forzando la renegociación.'
          },
          {
            type: 'table',
            head: ['Indicador', '2023', '2025', '2026 (previsión)'],
            rows: [
              ['Producto interior bruto (miles de millones de złoty)', '3.401,6', '3.886,1', '4.146,1'],
              ['Deuda de las administraciones públicas sobre el producto', '49,7 %', '60,7 %', '64,3 %'],
              ['Déficit público', '5,1 %', '—', '—'],
              ['Índice de precios de consumo', '11,4 %', '4,3 %', '3,4 %'],
              ['Paro', '2,8 %', '2,9 %', '3,0 %']
            ]
          },
          {
            type: 'p',
            text: 'La regla del tres por ciento no es polaca. Es el valor de referencia del déficit en el Pacto de Estabilidad y Crecimiento, completado por un techo del 60 % de deuda, y aplica a los Estados miembros de la [[org:union-europea|Unión Europea]] con independencia de su moneda. Polonia no está en la zona del euro ni en el mecanismo de cambios, de modo que su sumisión a la vigilancia europea no tiene contrapartida monetaria. Solo tiene contrapartida financiera: el riesgo de congelar fondos. El déficit alcanzó el 5,1 % del producto en 2023, y la deuda ha vuelto a superar el 60 %. El Instituto de Estadística de Polonia publicó en abril de 2026 la serie del déficit y la deuda de las administraciones entre 2022 y 2025. El Ministerio de Finanzas, dirigido por Andrzej Domański, ha sostenido que el ajuste se realize sin recortar la inversión en defensa.'
          },
          {
            type: 'ul',
            items: [
              'El artículo 216 impide al Gobierno tomar deuda a corto plazo para financiar el déficit, de modo que la deuda pública registra incluso la emisión ordinaria del Estado en cada presupuesto.',
              'La deuda polaca incluye una porción notable compuesta por las obligaciones del Estado en euros, lo que la hace sensible a la política monetaria del Banco Central Europeo y limita el margen de maniobra del Gobierno.',
              'El gasto en defensa ha superado el 4 % del producto, y el Gobierno ha anunciado su intención de acercarse al 5 %. Esa prioridad choca de frente con los valores de referencia y solo se sostiene con el crecimiento.',
              'La despoblación y el envejecimiento de la población cargan la contabilidad pública por el lado del gasto, y mantienen abierto el debate sobre la sostenibilidad del sistema de pensiones.'
            ]
          }
        ]
      },
      {
        id: 'politica-exterior',
        heading: 'Política exterior: OTAN, Unión Europea y la frontera oriental',
        blocks: [
          {
            type: 'p',
            text: 'El artículo 89 obliga a la República a permanecer neutra en las relaciones internacionales, en particular con sus vecinos, y al mismo tiempo a ser miembro de la [[org:onu|Organización de las Naciones Unidas]] y a estar vinculada a la [[org:union-europea|Unión Europea]]. Esa doble cláusula describe el perfil del país. Es una potencia media de la región integrada en las dos estructuras occidentales de seguridad y de economía, la [[org:otan|OTAN]], de la que es miembro desde el 12 de marzo de 1999, y la Unión Europea, desde su adhesión el 1 de mayo de 2004. La frontera oriental, la más expuesta de la Organización tras la ampliación de 2004, ha convertido la defensa en el primer renglón del presupuesto.'
          },
          {
            type: 'p',
            text: 'La [[geo:guerra-en-ucrania|guerra en Ucrania]] ha reordenado esa frontera. Polonia se ha convertido en el principal corredor logístico occidental hacia el frente de Kyiv. El gasto militar la sitúa entre los mayores de la Alianza, y la vecindad del este alimenta la retórica de seguridad nacional frente a un poder que el Gobierno define como la principal amenaza. La alineación con los Estados bálticos es uno de los rasgos del [[geo:orden-multipolar|orden multipolar]] al que la propia Russia ha dado paso. En el plano económico la dependencia es doble: la del mercado, con [[gob:alemania|Alemania]] como primer cliente y primer proveedor, y la de la energía, que la diversificación del carbón hacia el gas y el petróleo del Báltico ha hecho más visible que hace una década.'
          },
          {
            type: 'ul',
            items: [
              'La adhesión a la Unión Europea en 2004 coincidió con la ampliación de la OTAN del mismo año. La frontera política que resultan de ambas es única en Europa y ha convertido al país en puente de la política oriental.',
              'La incorporation al espacio Schengen en 2007 y la integración en el mercado único hacen que la profundidad de la integración europea mida la capacidad real de reformarse sin crisis. Es el terreno donde se juega el [[reformismo]] institucional.',
              'La entrada en el euro no tiene fecha. Mientras el Gobierno no resuelva el ascenso de la deuda, el argumento predominante sigue siendo la contención del gasto y no el impulso de la convergencia.',
              'Polonia es miembro de la [[org:onu|ONU]] desde 1945 y participa en sus operaciones de paz. El giro nacional-populista de la última década ha protegido el apoyo del país a la arquitectura liberal internacional, pero ha erosionado el consenso sobre el libre comercio.'
            ]
          },
          {
            type: 'p',
            text: 'La perspectiva más verosímil es la de un [[reformismo]] lento y defensivo. La vigilancia europea no ha reducido a la política polaca: la ha elevado a la categoría de asunto constitucional. En la frontera del eje izquierda-derecha el país se ha desplazado al eje divisorio-soberanista, y en ese eje el [[liberalismo]] de la socialdemocracia europea y el [[conservadurismo]] con raíz nacional-populista se enfrentan sin que ninguno pueda resolver la cuestión judicial. La fractura ha dejado de ser económica para ser constitucional, y con ella el país ha dejado de ser un caso más de integración europea para convertirse en el laboratorio de los límites de esa integración.'
          }
        ]
      }
    ],
    categories: ['Gobiernos', 'Europa central', 'Instituciones políticas', 'Derecho constitucional'],
    related: ['liberalismo', 'socialdemocracia', 'reformismo', 'org:union-europea', 'org:otan'],
    references: [
      {
        title: 'The Constitution of the Republic of Poland of 2nd April, 1997',
        author: 'Sejm Rzeczypospolitej Polskiej',
        publisher: 'Sejm Rzeczypospolitej Polskiej, Varsovia',
        year: 1997,
        type: 'ley',
        url: 'https://www.sejm.gov.pl/prawo/konst/angielski/konse.htm'
      },
      {
        title: 'The Constitution of the Republic of Poland, as adopted by the National Assembly on 2nd April 1997',
        author: 'Trybunał Konstytucyjny',
        publisher: 'Constitutional Tribunal of the Republic of Poland, Varsovia',
        year: 1997,
        type: 'ley',
        url: 'https://trybunal.gov.pl/en/about-the-tribunal/legal-basis/the-constitution-of-the-republic-of-poland'
      },
      {
        title: 'The Sejm in the system of power of the Republic of Poland',
        author: 'Sejm Rzeczypospolitej Polskiej',
        publisher: 'Sejm Rzeczypospolitej Polskiej, Varsovia',
        year: 2026,
        type: 'dato',
        url: 'https://www.sejm.gov.pl/english/sejm/sejm.htm'
      },
      {
        title: 'Kluby i koła poselskie w Sejmie X kadencji',
        author: 'Sejm Rzeczypospolitej Polskiej',
        publisher: 'Sejm Rzeczypospolitej Polskiej, Varsovia',
        year: 2026,
        type: 'dato',
        url: 'https://www.sejm.gov.pl/Sejm10.nsf/kluby.xsp'
      },
      {
        title: 'Posłowie i posłanki X kadencji Sejm Rzeczypospolitej Polskiej',
        author: 'Sejm Rzeczypospolitej Polskiej',
        publisher: 'Sejm Rzeczypospolitej Polskiej, Varsovia',
        year: 2026,
        type: 'dato',
        url: 'https://www.sejm.gov.pl/Sejm10.nsf/poslowie.xsp'
      },
      {
        title: 'Sędziowie Trybunału Konstytucyjnego i okresy ich kadencji',
        author: 'Trybunał Konstytucyjny',
        publisher: 'Constitutional Tribunal of the Republic of Poland, Varsovia',
        year: 2026,
        type: 'dato',
        url: 'https://trybunal.gov.pl/o-trybunale/sedziowie-trybunalu'
      },
      {
        title: 'Bogdan Święczkowski, prezes Trybunału Konstytucyjnego',
        author: 'Trybunał Konstytucyjny',
        publisher: 'Constitutional Tribunal of the Republic of Poland, Varsovia',
        year: 2026,
        type: 'dato',
        url: 'https://trybunal.gov.pl/o-trybunale/sedziowie-trybunalu-konstytucyjnego/art/98674-bogdan-swieczkowski'
      },
      {
        title: 'Internetowy System Aktów Prawnych Sejmu Rzeczypospolitej Polskiej',
        author: 'Kancelaria Sejmu',
        publisher: 'Sejm Rzeczypospolitej Polskiej, Varsovia',
        year: 2026,
        type: 'dato',
        url: 'https://isap.sejm.gov.pl/isap.nsf'
      },
      {
        title: 'Commissioner for Human Rights: Sylwia Gregorczyk-Abram took the oath of office before the Sejm',
        author: 'Rzecznik Praw Obywatelskich',
        publisher: 'Commissioner for Human Rights of the Republic of Poland, Varsovia',
        year: 2026,
        type: 'dato',
        url: 'https://www.rpo.gov.pl/en'
      },
      {
        title: 'The Council of Ministers of the Republic of Poland',
        author: 'Kancelaria Prezesa Rady Ministrów',
        publisher: 'Government of the Republic of Poland, Varsovia',
        year: 2026,
        type: 'dato',
        url: 'https://www.gov.pl/web/primeminister'
      },
      {
        title: 'Ministry of Finance: public debt and fiscal data for budgetary surveillance',
        author: 'Ministerstwo Finansów',
        publisher: 'Ministry of Finance of the Republic of Poland, Varsovia',
        year: 2026,
        type: 'informe',
        url: 'https://www.mf.gov.pl/en/index.html'
      },
      {
        title: 'General government deficit and debt in the years 2022-2025',
        author: 'Główny Urząd Statystyczny',
        publisher: 'Statistics Poland, Warsaw',
        year: 2026,
        type: 'informe',
        url: 'https://www.stat.gov.pl/en/topics/national-accounts/general-government-statistics'
      },
      {
        title: 'Quarterly national accounts of gross domestic product',
        author: 'Główny Urząd Statystyczny',
        publisher: 'Statistics Poland, Warsaw',
        year: 2026,
        type: 'informe',
        url: 'https://www.stat.gov.pl/en/topics/national-accounts/quarterly-national-accounts'
      },
      {
        title: 'Poland and NATO',
        author: 'Organización del Tratado del Atlántico Norte',
        publisher: 'North Atlantic Treaty Organization, Brussels',
        year: 2026,
        type: 'dato',
        url: 'https://www.nato.int/en/about-us/nato-history/history-by-theme/my-country-and-nato/poland-and-nato'
      },
      {
        title: 'Poland: EU country profile',
        author: 'Unión Europea',
        publisher: 'European Commission, Brussels',
        year: 2026,
        type: 'dato',
        url: 'https://european-union.europa.eu/principles-countries-history/country-profiles/poland_en'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
