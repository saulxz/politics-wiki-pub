(function (PW) {
  'use strict';
  PW.gobiernos = PW.gobiernos || {};
  PW.gobiernos['suecia'] = {
    kind: 'gobierno',
    slug: 'suecia',
    title: 'Suecia: la monarquia neutra y el vuelco de 2026',
    subtitle: 'Monarquia constitucional con un rey sin poder politico, un Riksdag de 349 miembros elegido por representacion proporcional y un gobierno en funciones tras las elecciones del 13 de septiembre de 2026',
    category: 'Gobierno',
    tags: ['monarquia constitucional', 'parlamentarismo', 'riksdag', 'sistema electoral proporcional', 'neutralismo', 'otan'],
    region: 'Europa Septentrional',
    timeFrame: '1974-actualidad',
    updated: '2026-09-28',
    summary: 'Monarquia constitucional de Europa septentrional en la que el rey es jefe del Estado pero carece por ley de poder politico, el poder ejecutivo reside en un gobierno responsable ante un Riksdag de una sola camara con 349 miembros, y la formacion de ese gobierno corresponde al talman, que debe proponer un candidato al que la mayoria de la camara no rechace. Las elecciones del 13 de septiembre de 2026 dieron 176 mandatos a los cuatro partidos de izquierda y 173 a los cuatro de derecha, invirtieron exactamente el reparto de 2022 y dejaron al pais con un gobierno en funciones.',
    actors: [
      { name: 'Riksdag', role: 'Parlamento unicameral de 349 miembros que elige al primer ministro y ante el que el Gobierno responde', power: 'alta' },
      { name: 'Talman', role: 'Presidente de la Riksdag, facultado para proponer al primer ministro y llave del procedimiento de formacion del gobierno', power: 'alta' },
      { name: 'Regeringen', role: 'Ejecutivo responsable ante el Riksdag, en funciones desde el 17 de septiembre de 2026 y a la espera de que se forme un gobierno nuevo', power: 'alta' },
      { name: 'Konungen', role: 'Jefe del Estado por derecho dinastico, sin injerencia politica y obligado a mantener la neutralidad', power: 'baja' },
      { name: 'Union Europea', role: 'Marco constitucional al que pertenece desde 1995 y del que sigue excluida la zona del euro', power: 'media' },
      { name: 'Organizacion del Tratado del Atlantico Norte', role: 'Alianza de defensa a la que Suecia se incorporo en marzo de 2024 tras decadas de no alineamiento', power: 'media' }
    ],
    infobox: {
      caption: 'Suecia, monarquia constitucional',
      color: '#005293',
      rows: [
        ['Periodo', '1974-actualidad'],
        ['Forma de Estado', 'Monarquia constitucional y democracia representativa, con el Gobierno como unico poder ejecutivo y el talman como llave de su designacion'],
        ['Constitucion vigente', 'Instrumento de Gobierno de 1974 junto a la Ley de Sucesion, la Ley de Libertad de Prensa y la Ley de Libertad de Opinion'],
        ['Jefatura del Estado', 'Carlos XVI Gustaf, rey desde 1973, sin poder politico alguno segun el capitulo 1 del Instrumento de Gobierno'],
        ['Jefatura del Gobierno', 'Ulf Kristersson, en funciones: pidio su dimision el 13 de septiembre de 2026 y permanece en el cargo hasta que exista un gobierno nuevo'],
        ['Parlamento', 'Riksdag de una sola camara con 349 miembros, de los que 310 son mandatos de distrito y 39 de ajuste'],
        ['Elecciones', '13 de septiembre de 2026, con una participacion del 84,9 % y ocho partidos representados']
      ]
    },
    sections: [
      {
        id: 'monarquia-y-riksdag',
        heading: 'La monarquia neutra y el Riksdag',
        blocks: [
          {
            type: 'p',
            text: 'El capitulo 1 del Instrumento de Gobierno define la arquitectura del pais en cuatro frases: toda autoridad publica procede del pueblo, la democracia se apoya en el libre intercambio de opiniones y en el sufragio universal e igual, esa democracia se realiza mediante un regimen representativo y parlamentario y la autoridad publica se ejerce bajo la ley. La misma definicion establece los limites del Estado: hay municipios en el nivel local y regional, la justicia se ejerce por tribunales y la administracion publica se divide en dos niveles. Es la definicion de un Estado constitucional en sentido pleno, y no la de un Estado unitario con una constitucion en buena parte simbolica.'
          },
          {
            type: 'p',
            text: 'Ese mismo capitulo enumera las cuatro leyes fundamentales del reino: el Instrumento de Gobierno, la Ley de Sucesion, la Ley de Libertad de Prensa y la Ley de Libertad de Opinion. El Riksdag es la representacion mas alta del pueblo, legisla, decreta los impuestos, decide como se emplean los fondos del Estado y fiscaliza el gobierno y la administracion. El rey o la reina que ocupa el trono segun la Ley de Sucesion es el jefe del Estado, y el Gobierno dirige el pais respondiendo ante la camara. La Corona no tiene aqui ningun atributo de gobierno: su funcion es constitucional y sus competencias son las que le confieren esas mismas leyes.'
          },
          {
            type: 'quote',
            text: 'All offentlig makt i Sverige utgar fran folket. Den svenska folkstyrelsen bygger pa fri asiktsbildning och pa allman och lika rostratt. Den forverkligas genom ett representativt och parlamentariskt statsskick och genom kommunal sjavstyrelse. Den offentliga makten utovas under lagarna.',
            cite: 'Instrumento de Gobierno, capitulo 1, parrafo 1',
            author: 'Pueblo sueco'
          },
          {
            type: 'p',
            text: 'La Ley de Libertad de Prensa, en su texto consolidado de 1949 y con un origen historico que se remonta a 1766, formula la misma idea con un lenguaje casi identico y anade dos garantias procesales que no aparecen en ningun otro texto del pais. Nadie puede ser castigado por el contenido de un escrito mas que por una ley expresa, dictada para preservar el orden publico general y siempre que no impida la informacion, y ningun impreso puede ser retenido ni su publicacion impedida por una autoridad. Sobre esa base se levanta el principio de acceso general a los documentos publicos, que convierte la transparencia administrativa en un derecho de rango constitucional y no en una cortesia administrativa.'
          }
        ]
      },
      {
        id: 'forma-de-gobierno',
        heading: 'La forma de gobierno y el parliamentarismo negativo',
        blocks: [
          {
            type: 'p',
            text: 'El capitulo 6 del Instrumento de Gobierno regula la formacion del gobierno con un procedimiento que la doctrina llama parliamentarismo negativo. No existe una investiture previa que el candidato deba ganar de antemano: la camara solo comprueba si el primer ministro propuesto conserva su confianza, y basta con que mas de la mitad de los miembros no vote en contra para que permanezca en el cargo. La inversion es determinante en un sistema con ocho partidos, porque convierte el apoyo en un dato recuperable partido a partido en lugar de una condicion impuesta de antemano, y explica que un gobierno pueda permanecer en el cargo con una mayoria relativa sin quedar al borde de una caida inmediata.'
          },
          {
            type: 'p',
            text: 'La llave esta en el talman, el presidente de la Riksdag. El procedimiento es breve y no admite comisiones: el talman convoca a los representantes de cada grupo parlamentario, delibera con los vicepresidentes y presenta una propuesta que la camara debe votar en un plazo de cuatro dias. Si mas de la mitad la rechaza, queda rechazada y el procedimiento se repite entero. Al cuarto rechazo, el procedimiento se interrumpe y solo puede reanudarse despues de unas elecciones, ordinarias o extraordinarias, celebradas en un plazo maximo de tres meses. Ese limite de cuatro candidatos funciona como una valvula contra el bloqueo permanente, porque obliga a las partes a ampliar su base de sostenimiento.'
          },
          {
            type: 'ul',
            items: [
              'Un primer ministro puede ser relevado por la propia camara si esta declara que ha perdido su confianza, y entonces el talman queda obligado a relevar al gobierno, salvo que este convoque elecciones extraordinarias en el plazo de una semana.',
              'Un ministro dimite cuando lo decide el mismo o cuando lo releva el primer ministro, y los ministros que renuncian permanecen en sus cargos hasta que se forme el gobierno siguiente, lo que convierte toda dimision en un procedimiento cerrado y ordenado.',
              'El relevo de gobierno se formaliza ante el jefe del Estado en un consejo especialmente convocado, al que el talman asiste siempre y que, si la Corona tiene impedimentos, preside en lugar del rey: la ceremonia conserva al jefe del Estado como escenario sin convertirlo en actor.',
              'La reforma de 1974, en vigor desde el 1 de enero de 1975, sustituyo la Constitucion unica de 1809 por el Instrumento de Gobierno y el Reglamento del Riksdag, y ese texto es el que fija la monarquia como elemento de unidad del Estado sin atribuirle funciones de gobierno.'
            ]
          }
        ]
      },
      {
        id: 'sistema-electoral',
        heading: 'El sistema electoral y la distribucion de los escaños',
        blocks: [
          {
            type: 'p',
            text: 'El capitulo 3 del Instrumento de Gobierno fija una camara unica de 349 miembros elegidos cada cuatro años por sufragio libre, secreto y directo, con posibilidad de voto individual a los candidatos, un rasgo poco habitual en un sistema de lista. La distribucion de los asientos combina dos mecanismos distintos: 310 mandatos de distrito y 39 mandatos de ajuste. Los primeros se reparten entre los distritos en proporcion al numero de electores inscritos, y esa proporcion se fija cada cuatro años, de modo que el mapa de distritos no se altera entre legislaturas sin una decision expresa de la camara.'
          },
          {
            type: 'p',
            text: 'El umbral de entrada es del cuatro por ciento de los votos en todo el pais, con una excepcion muy delimitada: un partido que no alcance ese umbral minimo participa en el reparto de los mandatos de distrito de aquel distrito concreto donde haya obtenido al menos el doce por ciento de los votos. La excepcion no altera la composicion total de la camara, porque los mandatos de distrito se asignan despues de la correccion proporcional nacional, pero permite que un partido pequeno recupere en su plaza fuerte la representacion que el umbral general le niega.'
          },
          {
            type: 'p',
            text: 'Los mandatos de ajuste operan como compensacion nacional del desnivel que producen los distritos desiguales. Su asignacion incorpora un matiz de primera mayoria dentro de un sistema de lista: el candidato situado en primer lugar de un partido que ha perdido todos sus mandatos de distrito ocupa el primer mandato de ajuste, y a partir de ahi se continua por el orden de la lista. Ese mecanismo de nivelacion, junto con el voto personal, es lo que permite que las listas de partido produzcan representantes identificables con su distrito en lugar de candidatos intercambiables, y es tambien la via por la que un partido que no llega al umbral nacional puede conservar presencia en las circunscripciones donde es fuerte.'
          },
          {
            type: 'table',
            head: ['Reparto de los 349 mandatos', 'Numero', 'Base juridica'],
            rows: [
              ['Mandatos de distrito', '310', 'Instrumento de Gobierno, capitulo 3, parrafo 6'],
              ['Mandatos de ajuste', '39', 'Instrumento de Gobierno, capitulo 3, parrafo 6'],
              ['Total de la camara', '349', 'Instrumento de Gobierno, capitulo 3, parrafo 2'],
              ['Umbral nacional de entrada', '4 % de los votos', 'Instrumento de Gobierno, capitulo 3, parrafo 7'],
              ['Excepcion por distrito', '12 % de los votos en un distrito', 'Instrumento de Gobierno, capitulo 3, parrafo 7'],
              ['Duracion del mandato', 'Cuatro años', 'Instrumento de Gobierno, capitulo 3, parrafo 3']
            ]
          },
          {
            type: 'ul',
            items: [
              'Con ocho partidos por encima del umbral y ninguno con mayoria absoluta, el resultado de cualquier eleccion viene determinado por los votos de la zona intermedia y no por la distancia entre las dos fuerzas extremas.',
              'Los mandatos de ajuste hacen que la representacion de cada partido sea proporcional a sus votos totales y no a su fuerza en un distrito concreto, lo que reduce el peso territorial de las regiones frente a lo que ocurre en sistemas uninominales puros.',
              'La reforma electoral de 2018 introdujo reglas mas precisas de asignacion de los mandatos de ajuste, pero conservo la estructura de 310 y 39 mandatos y el umbral del cuatro por ciento, es decir, el nucleo del sistema no ha cambiado en lo esencial desde hace décadas.'
            ]
          }
        ]
      },
      {
        id: 'historia-politica',
        heading: 'Historia politica reciente: del consensus de posguerra al giro nacional-populista',
        blocks: [
          {
            type: 'p',
            text: 'El Estado actual nace de la union con Noruega de 1800, disuelta en 1905: el parlamento noruego voto la separacion de la Corona y el rey de Suecia acepto la decision sin reclamar para si ninguna apariencia de autoridad sobre el territorio abandonado. El acuerdo dejo un pais pequeño, rural y pobre en la periferia de la economia europea, y buena parte de la politica de los siglos siguientes fue una reaccion frente a esa fragilidad, con industrializacion tardia, emigracion masiva, proteccion arancelaria y un sistema de concertacion social que buscaba evitar la conflictividad abierta del siglo XIX. La reforma constitucional de 1974 es el punto de inflexion del regimen actual: la Constitucion unica de 1809 se dividio en el Instrumento de Gobierno y el Reglamento del Riksdag, con lo que la monarquia dejo de ser la fuente de la autoridad y paso a ser un elemento de la unidad del Estado.'
          },
          {
            type: 'p',
            text: 'El consensus de posguerra se articulo en tres pilares: el empleo pleno como objetivo de politica economica, los acuerdos salariales entre la confederacion de sindicatos y la organizacion patronal, y el principio negociador segun el cual ninguna reforma estructural se implanta sin acuerdo. Ese modelo permitio un crecimiento acelerado desde los anos cincuenta, la introduccion del impuesto sobre el valor anadido en 1991, la reforma del sistema de pensiones y, en los anos ochenta y noventa, una fase de privatizaciones y de desregulacion financiera. La monarquia sueca es por eso una monarquia sin presupuesto, sin poder de veto y sin facultad de disolucion, y su legitimidad se apoya en la neutralidad y en la estabilidad institucional en lugar de la accion politica.'
          },
          {
            type: 'p',
            text: 'La crisis bancaria de 1991, con la caida de tres grandes bancos y la asuncion de su pasivo por el Estado, cerro definitivamente el consensus como modelo cerrado de acuerdo y abrio una decada de paro alto, recortes de transferencias y una reforma fiscal que se ha prolongado desde entonces. La reforma del impuesto sobre la renta de 1991 introdujo el modelo de base imponible amplia que sostiene las finanzas publicas actuales, y en 1994 el pais se incorporo a la Union Europea, lo que permitio conjugar la estabilidad del sistema con la apertura a un mercado mucho mayor. La linea divisoria del modelo sigue vigente: Suecia es hoy uno de los pocos paises de la zona que combina un deficit reducido, un nivel de deuda bajo y una proteccion social amplia, tres rasgos que sostienen el debate sobre la sostenibilidad de las prestaciones.'
          },
          {
            type: 'p',
            text: 'El factor que acabo desplazando el eje del pais fue la migracion. Suecia recibio oleadas sucesivas de trabajadores invitados desde los anos sesenta y setenta, solicitantes de asilo en los ochenta y noventa, y de forma muy brusca en 2014 y 2015, cuando las crisis simultaneas en los Balcanes y en el Oriente Proximo convirtieron al pais en el receptor de mas solicitudes de asilo por habitante de la [[geo:migraciones-y-demografia|Union Europea]]. En 2016 el Riksdag endurecio el regimen de asilo y vinculo el acceso a las prestaciones a condiciones de residencia efectiva y a un vinculo familiar, y en 2022 el giro de la opinion publica convirtio el control de la migracion en el eje de la campana electoral, con la consecuencia estructural de que el pais paso a entender su identidad nacional en terminos que la socialdemocracia y el liberalismo de posguerra ya no reconocian.'
          },
          {
            type: 'ul',
            items: [
              'El principio de negociacion que fundo el consensus sigue siendo el criterio con el que se juzga hoy a un gobierno: una reforma que se impone sin acuerdo se considera una ruptura del contrato, con independencia de su contenido material.',
              'La reforma del impuesto sobre la renta de 1991 y la entrada en la Union Europea en 1994 son los dos hitos que explican la combinacion actual de igualdad, estabilidad fiscal y apertura que distingue al pais dentro de la zona.',
              'La decision del Riksdag en 2016 de endurecer el regimen de asilo fue la primera medida de un giro que en 2022 paso a ocupar el centro de la campana electoral y que hoy forma parte de la identidad politica del pais.'
            ]
          }
        ]
      },
      {
        id: 'el-vuelco-de-2026',
        heading: 'El vuelco de 2026: ocho partidos y ninguna mayoria',
        blocks: [
          {
            type: 'p',
            text: 'Las elecciones al Riksdag se celebraron el domingo 13 de septiembre de 2026 con una participacion del 84,9 %, dos decimas por encima de la de 2022, y seis millones ochocientos treinta y cuatro mil votos contados. El resultado final repartio los 349 mandatos entre ocho partidos, el mismo numero que en la legislatura anterior. La lectura relevante del resultado no esta en el numero de asientos ganados por cada formacion, sino en la recomposicion de los dos bloques: los cuatro partidos de izquierda suman 176 mandatos y los cuatro de derecha 173, tres asientos de diferencia en una camara de 349. Es exactamente el inverso del reparto de 2022, cuando los partidos de derecha reunian 176 y los de izquierda 173, una simetria que muestra hasta que punto el resultado de 2026 es una correccion y no una ruptura.'
          },
          {
            type: 'table',
            head: ['Partido', 'Votos', 'Mandatos 2026', 'Mandatos 2022', 'Variacion'],
            rows: [
              ['Socialdemokraterna', '28,02 %', '99', '107', '−8'],
              ['Moderaterna', '19,85 %', '70', '68', '+2'],
              ['Sverigedemokraterna', '17,48 %', '62', '73', '−11'],
              ['Vänsterpartiet', '8,40 %', '30', '24', '+6'],
              ['Centerpartiet', '7,03 %', '25', '24', '+1'],
              ['Kristdemokraterna', '6,17 %', '22', '19', '+3'],
              ['Miljöpartiet', '6,12 %', '22', '18', '+4'],
              ['Liberalerna', '5,34 %', '19', '16', '+3'],
              ['Total', '100 %', '349', '349', '0']
            ]
          },
          {
            type: 'p',
            text: 'Tres desplazamientos explican la nueva aritmetica. Los socialdemocratas siguen siendo la fuerza mas votada, con casi el 28 % de los votos, pero pierden ocho asientos y sufren el mayor retroceso de las ocho formaciones. Los moderados crecen hasta 70. El Sverigedemokraterna cae de 73 a 62, un descenso de once asientos que se explica por la consolidacion de las fuerzas menores del bloque mas que por una perdida de electorado considerable, y es la mayor sorpresa del ciclo. En el lado izquierdo, la combinacion de Vänsterpartiet con 30, Centerpartiet con 25 y Miljöpartiet con 22 concentra la mayor ganancia conjunta, y la entrada de Liberalerna con 19 completa el mapa de una camara en la que ningun partido reune por si solo la mayoria y en la que la distancia entre el primero y el segundo es de solo dos asientos. De los 349 miembros elegidos, 187 son hombres y 162 mujeres.'
          },
          {
            type: 'p',
            text: 'La consecuencia inmediata fue una crisis de formacion del gobierno. El primer ministro Ulf Kristersson pidio su dimision el 13 de septiembre y el talman la acepto el 17: conforme al capitulo 6 del Instrumento de Gobierno, los ministros que renuncian permanecen en sus cargos hasta que se forme un gobierno nuevo, de modo que el ejecutivo sigue siendo el mismo pero ya no tiene un mandato electoral pleno. El 18 de septiembre el talman encomio a Magdalena Andersson, lider de los socialdemocratas, la exploracion de un gobierno de izquierda, y el 28 de septiembre esa tarea se devolvio sin resultado. El Riksdag se congrego ese mismo 28 de septiembre para elegir a su talman para el periodo 2026-2030 y el 29 de septiembre se celebro la apertura del nuevo Riksmote, el ano legislativo 2026-2027. El procedimiento constitucional permite hasta cuatro intentos antes de convocar elecciones extraordinarias, de modo que el pais entra en una fase de formacion de gobierno que puede prolongarse sin que exista un plazo fijo para el desenlace.'
          }
        ]
      },
      {
        id: 'seguridad-y-defensa',
        heading: 'Seguridad y defensa: el fin del no alineamiento',
        blocks: [
          {
            type: 'p',
            text: 'Durante la Guerra Fria y buena parte del periodo posterior Suecia mantuvo una politica de no alineamiento militar que le permitió permanecer fuera de la membresia de la alianza del Atlantico Norte. El principio que la sostenia era el de neutralidad activa: no entrar en la guerra bajo ninguna circunstancia, ni siquiera a favor de un aliado. Esa doctrina se apoyaba en la idea de que una potencia pequeña que declina la guerra puede preservar su propia seguridad sin ayuda exterior, y en la practica mantuvo una politica de buena vecindad con la Union Sovietica que no era simetrica ni siquiera con la de los demas paises escandinavos, que Finlandia habia cedido territorio a cambio de una garantia de seguridad. La consecuencia fue que Suecia no tenia ninguna garantia formal de su integridad territorial, una situacion que se hizo insostenible despues de la invasion de Ucrania en 2022.'
          },
          {
            type: 'p',
            text: 'El 7 de marzo de 2024 Suecia se incorporo formalmente a la [[org:otan|Organizacion del Tratado del Atlantico Norte]], cerrando una discusion abierta desde hacia tres decades y abandonando el principio de no alineamiento como instrumento de la politica exterior. La decision coincidio con un aumento sostenido del gasto de defensa y con una transformacion de la cooperacion regional: el 28 de agosto de 2026 se firmo una declaracion conjunta nordica sobre seguridad de suministro y se anuncio una cooperacion reforzada con Finlandia en vigilancia territorial y proteccion de la integridad territorial, y el 31 de agosto de 2026 el primer ministro recibio en Estocolmo al presidente frances para firmar un acuerdo marco de cooperacion en defensa y un contrato de adquisicion de cuatro fragatas. En la misma linea, el 27 de agosto de 2026 el Gobierno destino una contribucion adicional a la defensa de Ucrania. La consecuencia es que la posicion sueca ante la amenaza rusa ha dejado de apoyarse en la equidistancia y descansa ahora en la integracion efectiva en un sistema de disuasion aliado.'
          },
          {
            type: 'ul',
            items: [
              'La pertenencia a la alianza militar se produjo en un momento en que los paises balticos reclamaban una presencia reforzada de la OTAN en la region, y la adhesion sueca es la primera de ese tipo que incorpora un actor de peso del norte de Europa con un programa de defensa propio en expansion.',
              'El compromiso con la integridad territorial se ha extendido mas alla de la alianza, con la vigilancia conjunta con Finlandia y la declaracion nordica de seguridad de suministro, dos gestos que construyen una capacidad de decision regional y no solo una contribucion a las estructuras de la alianza.',
              'El apoyo a Ucrania se ha situado de forma explicita en un bloque distinto del de los paises del sur de Europa, y esa alineacion muestra que la pertenencia a la alianza se ha traducido ya en una division de responsabilidades dentro de la Union Europea que la [[geo:guerra-en-ucrania|guerra en Ucrania]] ha hecho inevitable.'
            ]
          }
        ]
      },
      {
        id: 'economia',
        heading: 'Economia y finanzas publicas',
        blocks: [
          {
            type: 'p',
            text: 'La economia sueca es de las mas pequenas de la [[org:union-europea|Union Europea]] por poblacion y de las mas abiertas por estructura: el sector privado es dominante, el comercio exterior representa una fraccion elevada del producto interno bruto y el pais forma parte del mercado unico sin haber adoptado la moneda unica. Las cifras de la Contabilidad Nacional de Statistics Sweden sitúan el producto interno bruto de 2025 en 6.644.105 millones de coronas a precios corrientes, con un producto por habitante de 653.000 coronas, y el ritmo de crecimiento se ha acelerado: el segundo trimestre de 2026 avanzo un 1,6 % respecto del trimestre anterior y un 3,3 % respecto del mismo trimestre del ano anterior. La recuperacion de la demanda interna, en un entorno de incertidumbre geopolitica y de precios energeticos altos, ha sido el motor de esa mejora.'
          },
          {
            type: 'p',
            text: 'Las finanzas publicas son la principal fortaleza comparada del modelo. En 2025 el saldo de la administracion publica medido segun las reglas del Procedimiento en Deficit Excesivo fue un deficit de 85.000 millones de coronas, equivalente al 1,3 % del producto interno bruto, y la deuda consolidada bruta se elevo a 2.305.000 millones, es decir, el 35,1 % del producto. Con esas cifras Suecia cumple los criterios de convergencia de la Union Europea y se situa muy por debajo del valor de referencia, algo poco comun en un pais que durante decadas supero el sesenta por ciento. La mejora del deficit, unos 13.000 millones respecto del ano anterior, indica que el ajuste fiscal ha resistido el aumento del gasto en defensa sin necesitar una subida de impuestos equivalente, y es el argumento central de los socialdemocratas para reclamar un relevo del Gobierno en funciones.'
          },
          {
            type: 'table',
            head: ['Indicador de Statistics Sweden', 'Valor', 'Periodo de referencia'],
            rows: [
              ['Producto interno bruto a precios corrientes', '6.644.105 millones de coronas', '2025'],
              ['Producto interno bruto por habitante', '653.000 coronas', '2025'],
              ['Variacion trimestral del producto', '+1,6 %', 'Segundo trimestre de 2026'],
              ['Variacion interanual del producto', '+3,3 %', 'Segundo trimestre de 2026'],
              ['Saldo de la administracion publica', '85.000 millones en deficit, 1,3 % del producto', '2025'],
              ['Deuda publica bruta consolidada', '35,1 % del producto', '2025'],
              ['Tasa de desempleo', '8,5 %', 'Agosto de 2026'],
              ['Tasa de actividad', '77,5 %', 'Agosto de 2026']
            ]
          },
          {
            type: 'p',
            text: 'El mercado laboral es el flanco debil del conjunto. En agosto de 2026 la tasa de desempleo medida por la Encuesta de la Fuerza Laboral se situaba en el 8,5 % de la poblacion de 15 a 74 anos, la tasa de empleo era del 70,9 % y la de actividad del 77,5 %, un conjunto de cifras propio de un mercado que recupera empleo sin alcanzar los niveles anteriores a la crisis. La politica economica combina la busqueda de la productividad de una economia abierta con el sostenimiento de las protecciones sociales que articulan el consensus, y el segundo objetivo choca con la fragmentacion politica de una camara sin mayoria, que obliga a negociar cada presupuesto anual como un proyecto aislado. El resultado es un Estado que conserva la solidez fiscal del modelo de bienestar y que a la vez ha tenido que aceptar una revision de la presion migratoria como condicion politica para sostenerse.'
          }
        ]
      },
      {
        id: 'politica-exterior',
        heading: 'Politica exterior y la posicion de Suecia en la Union Europea',
        blocks: [
          {
            type: 'p',
            text: 'El capitulo 1, parrafo 10, del Instrumento de Gobierno situa a Suecia en la [[org:union-europea|Union Europea]], en la [[org:onu|Organizacion de las Naciones Unidas]] y en el Consejo de Europa, lo que convierte la pertenencia europea en un dato constitucional y no en una decision del Gobierno. La entrada en la Union Europea se produjo el 1 de enero de 1995 y el pais ha rechazado de manera explicita la adopcion del euro, lo que le ha permitido mantener la politica monetaria en manos del Riksbank. Esa independencia tiene un coste obvio, la exposicion permanente a la evolucion de los tipos de interes de la zona euro, y un beneficio mas discutido, la posibilidad de fijar el objetivo de inflacion en torno al dos por ciento sin negociar con el Banco Central Europeo. La reforma de 2018 del Instrumento de Gobierno se limito a precisar el sistema electoral, de modo que el nucleo constitucional del pais sigue siendo el texto de 1974.'
          },
          {
            type: 'p',
            text: 'La politica exterior de la ultima decada esta definida por dos decisiones. La primera es el abandono del no alineamiento, ya analizada, que convirtio al pais en miembro de la alianza militar y contribuyente activo de su arquitectura de disuasion. La segunda es el endurecimiento de la postura con la Rusia de Putin tras la invasion de Ucrania en 2022: Suecia ha destinado sumas crecientes a la defensa de Kyiv, ha firmado una declaracion nordica conjunta de seguridad de suministro, ha aceptado la vigilancia del territorio baltico en cooperacion con Finlandia y ha situado su apoyo a Ucrania en un bloque distinto del de los paises del sur de Europa. El punto critico es que un pais que habia construido su identidad exterior sobre el principio de no participar en la guerra bajo ha pasado a ser uno de los socios mas comprometidos con su defensa, y esa transformacion ya no admite un punto de retorno discreto.'
          },
          {
            type: 'ul',
            items: [
              'Suecia es miembro fundador del Consejo Nordico junto con Dinamarca, Noruega, Finlandia e Islandia, y comparte con ellos la politica de vecindad del Artico, lo que refuerza su perfil de potencia media del norte de Europa.',
              'La cooperacion bilateral con Francia se intensifico el 31 de agosto de 2026 con un acuerdo marco de defensa y la compra de fragatas, y en paralelo se profundizo la cooperacion con Finlandia en vigilancia territorial y proteccion de la integridad nacional.',
              'La pertenencia a la Union Europea no se traduce en una moneda comun sino en la exposicion al mercado unico y a la politica climatica comun, lo que ha vinculado el comportamiento de la derecha a los compromisos europeos sin abrirse ninguna via de salida monetaria.',
              'La reputacion exterior mas reconocida del Estado ya no es la no alineacion sino la gestion discreta de las tensiones en el norte de Europa, un perfil que corresponde sostener al Gobierno en funciones y al talman durante los proximos anos.'
            ]
          }
        ]
      }
    ],
    categories: ['Gobiernos', 'Europa septentrional', 'Instituciones politicas', 'Derecho constitucional'],
    related: ['liberalismo', 'socialdemocracia', 'conservadurismo', 'org:union-europea', 'org:otan'],
    references: [
      {
        title: 'Kungorelse (1974:152) om beslutad ny regeringsform',
        author: 'Sveriges riksdag',
        publisher: 'Sveriges riksdag, Estocolmo',
        year: 1974,
        type: 'ley',
        url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/kungorelse-1974152-om-beslutad-ny-regeringsform_sfs-1974-152/'
      },
      {
        title: 'Tryckfrihetsforordning (1949:105)',
        author: 'Sveriges riksdag',
        publisher: 'Sveriges riksdag, Estocolmo',
        year: 1949,
        type: 'ley',
        url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/tryckfrihetsforordning_sfs-1949-105/'
      },
      {
        title: 'Kungorelse (1974:153) om beslutad ny riksdagsordning',
        author: 'Sveriges riksdag',
        publisher: 'Sveriges riksdag, Estocolmo',
        year: 1974,
        type: 'ley',
        url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/kungorelse-1974153-om-beslutad-ny-riksdagsordning_sfs-1974-153/'
      },
      {
        title: 'Den nya riksdagen efter valet',
        author: 'Sveriges riksdag',
        publisher: 'Sveriges riksdag, Estocolmo',
        year: 2026,
        type: 'dato',
        url: 'https://www.riksdagen.se/sv/aktuellt/aktuelltnotiser/2026/sep/19/den-nya-riksdagen-efter-valet_cmsad780a37-f1ae-4d47-a4a7-b6ea2a69a21esv/'
      },
      {
        title: 'Valresultat 2026, riksdags-, region och kommunval',
        author: 'Valmyndigheten',
        publisher: 'Valmyndigheten, Estocolmo',
        year: 2026,
        type: 'dato',
        url: 'https://val.se/valresultat-och-statistik/riksdags--region--och-kommunval/valresultat-2026'
      },
      {
        title: 'Det svenska valsystemet',
        author: 'Valmyndigheten',
        publisher: 'Valmyndigheten, Estocolmo',
        year: 2026,
        type: 'informe',
        url: 'https://www.val.se/det-svenska-valsystemet/'
      },
      {
        title: 'National Accounts, quarterly and annual estimates',
        author: 'Statistics Sweden',
        publisher: 'Statistiska centralbyran, Estocolmo',
        year: 2026,
        type: 'informe',
        url: 'https://www.scb.se/en/finding-statistics/statistics-by-subject-area/national-accounts/national-accounts/national-accounts-quarterly-and-annual-estimates/'
      },
      {
        title: 'Excessive Deficit Procedure',
        author: 'Statistics Sweden',
        publisher: 'Statistiska centralbyran, Estocolmo',
        year: 2026,
        type: 'informe',
        url: 'https://www.scb.se/en/finding-statistics/statistics-by-subject-area/national-accounts/national-accounts/excessive-deficit-procedure/'
      },
      {
        title: 'Labour Force Surveys',
        author: 'Statistics Sweden',
        publisher: 'Statistiska centralbyran, Estocolmo',
        year: 2026,
        type: 'informe',
        url: 'https://www.scb.se/en/finding-statistics/statistics-by-subject-area/labour-market/labour-force-supply/labour-force-surveys-lfs/'
      },
      {
        title: 'Talmannens uppdrag',
        author: 'Sveriges riksdag',
        publisher: 'Sveriges riksdag, Estocolmo',
        year: 2026,
        type: 'informe',
        url: 'https://www.riksdagen.se/sv/sa-fungerar-riksdagen/arbetet-i-riksdagen/talmannen/talmannens-uppdrag/'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
