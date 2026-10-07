(function (PW) {
  'use strict';
  PW.gobiernos = PW.gobiernos || {};
  PW.gobiernos['bulgaria'] = {
    kind: 'gobierno',
    slug: 'bulgaria',
    title: 'Bulgaria: el Estado que solo existe por pacto, de la Constitucion de 1991 al euro',
    subtitle: 'Republica parliamentaria unitaria de Europa sudoriental con una Constitucion vigente desde 1991, un Parlamento unico de doscientos cuarenta diputados que nunca ha concedido la mayoria absoluta a un solo partido, un poder ejecutivo que solo existe por acuerdo entre tres fuerzas y una trayectoria de integracion europea con la adhesion de 2007, las presidencias del Consejo de 2017 y 2018 y la entrada en la zona del euro en 2026',
    category: 'Gobierno',
    tags: ['republica parliamentaria', 'constitucion de 1991', 'coaliciones', 'corrupcion', 'postcomunismo', 'integracion europea'],
    region: 'Europa sudoriental',
    timeFrame: '1991-actualidad',
    updated: '2026-09-28',
    summary: 'Republica unitaria de Europa sudoriental en la que un Parlamento unico de doscientos cuarenta diputados elige un Gobierno que casi nunca dispone de mayoria propia, la reforma constitucional de 2025 restituyo la eleccion popular del presidente, la convertibilidad iniciada en 1997 culmino en la adopcion del euro en enero de 2026 y la corrupcion, la mayoria calificada de dos tercios y la emigracion masiva configuran sus limites estructurales',
    actors: [
      { name: 'Presidente de la Republica', role: 'jefe del Estado elegido por sufragio directo y universal, con segunda vuelta si nadie alcanza la mitad de los votos en la primera, con mandato de cinco anos renovable una vez; nombra al primer ministro y a los responsables de los medios publicos, y promulga o devuelve las leyes del Parlamento', power: 'alta' },
      { name: 'Consejo de Ministros', role: 'organo ejecutivo dirigido por el primer ministro, que desde la reforma de 2025 incluye un vicepresidente con la cartera de Defensa; puede ser obligado a dimitir por un voto de desconfianza de la Asamblea', power: 'alta' },
      { name: 'Asamblea Nacional', role: 'Parlamento unicameral de doscientos cuarenta diputados con mandato de cuatro anos, elegido por un sistema mixto de treinta y seis distritos uninominales y circunscripciones proporcionales; la mayoria de dos tercios decide las reformas y los nombramientos de las instancias de control', power: 'alta' },
      { name: 'Tribunal Constitucional', role: 'organo de doce jueces que anula las normas contrarias a la Constitucion, admite recursos de los ciudadanos y controla la constitucionalidad de los tratados, con competencia limitada sobre la reforma del texto fundamental', power: 'media' },
      { name: 'Consejo Judicial', role: 'institucion de quince miembros que administra la carrera de jueces y fiscales, elige a los inspectores y a los organos de los tribunales superiores, y cuyo sistema de eleccion con mayoria reforzada ha paralizado repetidamente sus decisiones de personal', power: 'media' },
      { name: 'Union Europea', role: 'marco de integracion al que Bulgaria se incorporo el 1 de enero de 2007, del que ha ejercido dos presidencias del Consejo, que condiciona la reforma judicial mediante su presupuesto propio y que ha instalado dos de sus agencias en Sofia', power: 'media' }
    ],
    infobox: {
      caption: 'Republica de Bulgaria',
      color: '#00966e',
      rows: [
        ['Periodo', 'Republica soberana desde 1991, tras siete decadas de regimen de partido unico'],
        ['Forma de Estado', 'Republica parliamentaria unitaria, con separacion de poderes y Tribunal Constitucional'],
        ['Constitucion vigente', 'Constitucion de 5 de diciembre de 1991, reformada en 2003, 2005, 2015, 2019 y enero de 2025'],
        ['Jefatura del Estado', 'Presidente de la Republica, elegido por el electorado con mandato de cinco anos'],
        ['Presidente en el cargo', 'Rumen Radev, desde el 22 de enero de 2017, con el mandato renovado en noviembre de 2022'],
        ['Jefe de gobierno', 'Andrey Gurov, del partido de centro derecha GERB, elegido por la Asamblea el 12 de enero de 2025'],
        ['Parlamento', 'Asamblea Nacional, unicameral, con 240 diputados'],
        ['Capital', 'Sofia, declarada capital en 1878 y centro de la administracion del Estado desde 1944']
      ]
    },
    sections: [
      {
        id: 'origen',
        heading: 'Origen: la transicion de 1989 y la Constitucion de 1991',
        blocks: [
          {
            type: 'p',
            text: 'La caida del regimen bulgaro fue mas rapida que en casi todos los demas paises del antiguo bloque sovietico y mas brusca en su capa politica. El 10 de noviembre de 1989 el Comite Central del partido deposito a quien habia gobernado el pais desde 1946 sin que mediara una crisis economica que lo justificara y sin que existiera una oposicion organizada capaz de asumir el relevo.'
          },
          {
            type: 'p',
            text: 'El poder quedo en manos de una dirigencia del mismo aparato, que sustituyo al lider derrocado por el presidente del Consejo de Ministros. El equilibrio se mantuvo varios meses, hasta que las demandas populares articuladas en el Congreso de la Union Democratica de diciembre de 1989 convirtieron el cambio en algo posible. La Union de Fuerzas Democráticas forzo la dimision de la direccion en su propio convegno y dos meses mas tarde gano unas elecciones celebradas con una participacion que supero el noventa y cinco por ciento del censo, cifra excepcional en la region de los Balcanes.'
          },
          {
            type: 'quote',
            text: 'La Republica de Bulgaria es un Estado democratico y social sujeto a la ley, en el que se garantizan los derechos humanos y las libertades ciudadanas.',
            cite: 'Constitucion de la Republica de Bulgaria, articulo 5, parrafo primero, segun la traduccion oficial al espanol',
            author: 'Asamblea Nacional de Bulgaria'
          },
          {
            type: 'p',
            text: 'Esa redaccion, que situa el Estado social por encima de la forma republicana, obliga a leer el texto de 1991 como algo mas que un instrumento de transicion. Aprobado el 5 de diciembre de 1991 por la Asamblea Constituyente, entro en vigor el 7 de enero de 1992, instituyo un regimen democratico de corte occidental, garantizo la propiedad privada y la libertad de empresa como derechos para el comercio, reconocio la igualdad ante la ley, la inviolabilidad de la vida privada y la libertad de circulacion de personas y capitales, y establecio una jerarquia de normas que coloca la Constitucion por encima de todo lo demas.'
          },
          {
            type: 'p',
            text: 'La primera decada estuvo atravesada por un conflicto constitucional de alta intensidad. En 1991 los ministros dimitieron hasta dejar el Gobierno sin direccion politica durante varios meses, y entre 1992 y 1994 dos presidentes de la Asamblea con posiciones enfrentadas se alternaron en la presidencia provisional del pais. La crisis llego a su punto algida en 1994, cuando el Tribunal Constitucional anulo la ley de agosto de 1993 que declaraba a la Camara en rebelion, y cuando los diputados se disolvieron a si mismos ante el vacio de poder. Hubo que llegar a un gobierno provisional para superarla.'
          },
          {
            type: 'p',
            text: 'Superada esa crisis, el texto de 1991 ha resistido bien y sigue siendo el vigente. Ha sido reformado cinco veces, tres de ellas por exigencia europea: la de 2003, para adaptar el articulo 57 a las competencias municipales y al ingreso en la Union Europea; la de 2005, para regular las elecciones al Parlamento Europeo y las locales; la de 2015, sobre la estructura del poder judicial; y la de 2024, aprobada el 9 de diciembre de 2024 y en vigor desde el 1 de febrero de 2025, que restituyo la eleccion popular del presidente y creo la figura del vicepresidente del Consejo de Ministros.'
          }
        ]
      },
      {
        id: 'sistema-parlamentario',
        heading: 'Parlamento unicameral, sistema electoral mixto y la mayoria de dos tercios',
        blocks: [
          {
            type: 'p',
            text: 'La Asamblea Nacional es el unico organo legislativo. Reune doscientos cuarenta diputados y sus miembros son elegidos para un mandato de cuatro anos mediante un sistema mixto: treinta y seis distritos uninominales, uno por cada distrito administrativo, mas una distribucion proporcional de los escaños restantes en veintiocho circunscripciones, con un mecanismo de correccion previsto en la Constitucion para que la representacion nacional no se desvie de la voluntad del electorado.'
          },
          {
            type: 'p',
            text: 'El resultado electoral agregado engana si se lee sin ese detalle. La ley electoral garantiza que los votos de primera preferencia de cada partido van a sus candidatos uninominales, de modo que el numero de escaños obtenido depende mas de la capacidad de colocar candidatos populares en los treinta y seis distritos que del porcentaje nacional. De ahi las dos paradojas mas comentadas del pais: en octubre de 2022 el partido de centro derecha GERB fue el mas votado, con algo mas del veinticuatro por ciento, y obtuvo tambien el mayor numero de escaños; en abril de 2024 la coalicion que lo rodeo alcanzo la mayoria absoluta sin haber sido la fuerza mas votada.'
          },
          {
            type: 'table',
            'head': ['Regla', 'Umbral aplicable', 'Efecto politico observado'],
            'rows': [
              ['Acceso a la representacion', 'Cuatro por ciento de los votos validos', 'Excluyo al partido de la minoria turca en abril de 2024'],
              ['Aprobacion de leyes', 'Mayoria simple de los presentes', 'El Gobierno necesita apoyos ajenos para su programa'],
              ['Reforma constitucional', 'Dos tercios de todos los diputados', 'Ningun partido ha podido reescribir el texto sin aliados'],
              ['Nombramientos en instancias de control', 'Dos tercios en general', 'Es el umbral que bloquea la reforma judicial y la eleccion de fiscales'],
              ['Voto de desconfianza', 'Mayoria absoluta, con propuesta de sucesor', 'Derribo a los Gobiernos de 2013 y de 2023'],
              ['Declaracion de urgencia', 'Mayoria simple, con plazo de veinticuatro horas', 'Permite aprobar leyes sin debate ni comision previa']
            ]
          },
          {
            type: 'p',
            text: 'La tabla resume el rasgo estructural del pais: con doscientos cuarenta diputados y ningun partido por encima del treinta por ciento, la mayoria simple obliga a negociar y la mayoria de dos tercios obliga a pactar con el partido que ha quedado fuera del Gobierno. Ese segundo umbral ha estructurado la politica bulgara de las ultimas tres decadas en dos bloques, con un partido de centro derecha como interlocutor constante de un partido de centro izquierda, y ha sido utilizado sin contemplaciones por todas las mayorias que han gobernado desde 1997, incluidas las que sus adversarios consideran anticonstitucionales.'
          },
        ]
      },
      {
        id: 'poder-ejecutivo',
        heading: 'El poder ejecutivo: presidente, primer ministro y la reforma de 2025',
        blocks: [
          {
            type: 'p',
            text: 'El presidente de la Republica es el jefe del Estado. Con la Constitucion de 1991 recibio poderes que lo convertian en un semipresidente en potencia, incluidos el mando de las fuerzas armadas y la facultad de bloquear decisiones sobre seguridad interior. Esa arquitectura se modifico en dos momentos: la reforma de 2011, que saco de la ecuacion al presidente de la Asamblea, y la de 2025, que ha restituido por completo la eleccion popular. Desde 1997 el presidente lo elige el electorado y desde 2011 en primera ronda, de modo que es una autoridad con base electoral propia y no un intermediario del Parlamento.'
          },
          {
            type: 'p',
            text: 'Rumen Radev, que habia ejercido como defensa nacional, gano las elecciones de enero de 2017 y las renovo en noviembre de 2022. Su mandato ha combinado un perfil mediatico abierto con un uso prudente de la autoridad, en varias ocasiones como mediador entre el Gobierno y la oposicion en la reforma judicial y en el presupuesto de defensa, lo que le ha separado del partido al que pertenecía. Es tambien un actor clave en la politica exterior del pais: como presidente de la Republica presido el Consejo Europeo durante el primer semestre de 2017 y la reunion ministerial de la Organizacion para la Seguridad y la Cooperacion en Europa de 2018.'
          },
          {
            type: 'p',
            text: 'El primer ministro dirige el Consejo de Ministros, es responsable de la politica del Gobierno y propone a los ministros, que el presidente nombra y despide. La reforma constitucional de 2025 creo ademas la figura del vicepresidente del Consejo de Ministros, con la cartera de Defensa, y modifico la forma de medir la confianza de la Asamblea. Ese punto importa por dos razones: la presidencia rotatoria del Consejo, que dirige la politica exterior, sigue correspondiendo al primer ministro, y la nueva figura crea un segundo centro de poder dentro del mismo organo ejecutivo.'
          },
          {
            type: 'table',
            'head': ['Organo', 'Composicion', 'Designacion', 'Atribucion principal'],
            'rows': [
              ['Presidencia de la Republica', 'Una persona', 'Eleccion popular directa, con segunda vuelta', 'Representa al Estado, nombra al primer ministro, promulga o devuelve las leyes'],
              ['Consejo de Ministros', 'Primer ministro, vicepresidente y ministros', 'Propuesta del primer ministro y firma del presidente', 'Direccion del Gobierno y administracion del Estado'],
              ['Asamblea Nacional', '240 diputados', 'Sufragio directo mixto y proporcional', 'Aprueba leyes, vota la confianza, elige a las instancias de control'],
              ['Tribunal Constitucional', 'Doce jueces', 'Mayoria de dos tercios de la Asamblea', 'Control de constitucionalidad y admision de recursos de los ciudadanos'],
              ['Consejo Judicial', 'Quince miembros', 'Mayoria reforzada para sus cargos clave', 'Administracion de la carrera de jueces y fiscales']
            ]
          },
          {
            type: 'p',
            text: 'Las dos filas centrales de esa tabla contienen la causa de la inestabilidad cronica del pais. El primer ministro solo dispone del apoyo de su propia formacion, de modo que toda decision que afecte a la justicia, a la fiscalia o a la defensa exige un socio adicional. Y a la inversa, la oposicion tiene la capacidad de bloquear nombramientos en las instancias de control mientras no logre la mayoria reforzada, lo que ha producido anos de vacantes en el Tribunal Constitucional y en el Consejo Judicial y una acumulacion de asuntos pendientes en los tribunales ordinarios que ha situado a Bulgaria entre los paises europeos con mayor congestión de la justicia.'
          },
          {
            type: 'p',
            text: 'El Gobierno que se puso en marcha el 12 de enero de 2025 es una coalicion de tres partidos: el centro derecha GERB, que aporta el primer ministro y las grandes carteras economicas; el socialdemocrata, que aporta un numero reducido de ministros y suele suministrar la presidencia de la Asamblea; y una formacion liberal que no estaba en el Parlamento hasta las elecciones de octubre de 2024. Esa arquitectura explica por que los Gobiernos búlgaros duran poco por termino medio, aunque la coalicion actual mantiene la mayoria sin necesitar votos externos en los asuntos ordinarios.'
          }
        ]
      },
      {
        id: 'sistema-partidista',
        heading: 'Fragmentacion partidista y la cuestion de la minoria turca',
        blocks: [
          {
            type: 'p',
            text: 'El sistema de partidos bulgaro se caracteriza por una fragmentacion alta y una separacion muy marcada entre dos ejes. En el eje izquierda-derecha conviven el Partido Socialista Bulgaro, heredero del antiguo partido comunista, y una constelacion de fuerzas de centro derecha de las que ninguna ha obtenido la mayoria absoluta en un cuarto de siglo. En el segundo eje, que no es de izquierda a derecha sino de mayoria a minoria, se encuentra el Movimiento por los Derechos y las Libertades, el partido de la comunidad turca del pais, que ha actuado como socio de mayorias sucesivas y como contrapeso en todos los Gobiernos de las ultimas tres decadas.'
          },
          {
            type: 'p',
            text: 'El peso electoral de ese partido ha caido de forma constante, desde algo mas del dieciocho por ciento en los anos noventa hasta alrededor del cuatro por ciento en 2024. Al quedar por debajo del umbral quedo fuera de la Asamblea en los comicios de abril de 2024, lo que dejo sin representacion a un colectivo que representa en torno al doce por ciento de la poblacion y explica buena parte de la fragmentacion que caracterizo a la Asamblea siguiente. Es la muestra mas clara de que el sistema electoral, y no solo las preferencias del electorado, es lo que explica la fragmentacion de los ultimos anos.'
          },
          {
            type: 'p',
            text: 'La fragmentacion se ha acentuado en la ultima decada, con la aparicion de movimientos populistas como el Frente Nacional de Rescate, de una formacion continuista heredera de la union de fuerzas de la derecha nacionalista que se opusieron a las reformas del Gobierno entre 2017 y 2018, y de una fuerza de izquierda alternativa que se separo del partido socialdemocrata en 2021. El efecto agregado es una Camara compuesta por seis o siete fuerzas que raramente llegan a un acuerdo y donde la rutina legislativa se resuelve con coaliciones efimeras.'
          },
          {
            type: 'p',
            text: 'A ese pluralismo se anade la fragmentacion territorial, que en Bulgaria tiene consecuencias practicas. El partido no produce una lista nacional unificada sino estructuras locales que responden al criterio de cada municipio, y esto hace que la representacion del partido en la Asamblea no siempre se traduzca en un gobierno local, ni en una presencia igual en la calle segun la ciudad. Es una de las razones por las que la participacion electoral es sensiblemente mas baja y la dispersion del voto mas visible que en la Republica checa, en Eslovaquia o en Eslovenia, tres paises de la misma orbita postcomunista que reformaron sus sistemas electorales para corregir ese efecto.'
          },
        ]
      },
      {
        id: 'economia',
        heading: 'Economia: convertibilidad, adhesion y la fragilidad demografica',
        blocks: [
          {
            type: 'p',
            text: 'La politica monetaria bulgara tiene la forma mas sencilla posible de la disciplina. En 1997 se establecio un consejo monetario mixto con autoridad plena sobre el tipo de cambio, y en enero de 1999 el lev quedo vinculado de forma irrevocable al euro con un cambio fijo. El lev no es convertible libremente: la unica emision del banco central es la compra y venta de divisas, lo que significa que no puede financiar en la practica al deficit publico por via monetaria. La consecuencia directa es un nivel de inflacion bajo y una convergencia estable con la media del area del euro.'
          },
          {
            type: 'p',
            text: 'La trayectoria poscomunista dejo tras de si un peso muerto industrial muy alto, una administracion publica sobredimensionada que a principios de la decada de 2010 ocupaba mas de la cuarta parte del empleo total, y una diferencia grande entre la economia formal y la real. Desde entonces el sector servicios ha ganado terreno y el sector informal se ha reducido, pero la poblacion activa sigue siendo reducida y la migracion de trabajadores cualificados al resto de la Union Europea ha sido el principal limitador del potencial de crecimiento.'
          },
          {
            type: 'table',
            'head': ['Indicador', '2019', '2022', '2024', '2025'],
            'rows': [
              ['Crecimiento real del producto', '4,0 %', '3,9 %', '2,7 %', '3,2 %'],
              ['Inflacion segun el indice de precios', '2,5 %', '13,7 %', '2,7 %', '3,6 %'],
              ['Deficit publico sobre el producto', '0,1 %', '1,3 %', '2,7 %', '2,9 %'],
              ['Deuda publica sobre el producto', '20,0 %', '23,0 %', '23,1 %', '22,5 %'],
              ['Paro segun la definicion nacional', '3,8 %', '3,9 %', '4,2 %', '4,1 %'],
              ['Salario minimo mensual en lev', '560', '780', '1.050', '1.600']
            ]
          },
          {
            type: 'p',
            text: 'La deuda publica es la mas baja de la Union Europea en proporcion al producto y el deficit permanece por debajo del umbral del tres por ciento. El plan de recuperacion y resiliencia europeo ha sido el principal instrumento de la recuperacion posterior a la pandemia, y el Gobierno ha acompanado esa politica con subidas del salario minimo que lo elevo a 1.600 lev mensuales en 2025, una medida criticada por su coste presupuestario y por su efecto sobre laulnerabilidad de las empresas de servicios y de la construccion.'
          },
          {
            type: 'p',
            text: 'La entrada en la zona del euro culmina la trayectoria iniciada en 1997. Bulgaria cumplio los criterios de admision al mecanismo de cambio, entre ellos la pertenencia a la Union Europea, el control de la inflacion, la estabilidad cambiaria, la volatilidad de los titulos de deuda a largo plazo y una deuda publica por debajo del umbral, y ha mantenido la convertibilidad del lev sin ajuste de paridad durante casi tres decadas. La adopcion del euro el 1 de enero de 2026 ha sido por tanto un cambio nominal formal mas que una ruptura economica, la culminacion administrativa de una adhesion antes que un salto de politica monetaria.'
          },
          {
            type: 'p',
            text: 'Esa lectura explica por que el debate economico bulgaro sigue girando en torno a la demografia y no al sistema monetario. La poblacion activa ha caido sin interrupcion desde 2010 y la proporcion de mayores de sesenta y cinco anos ha superado el veinte por ciento, lo que convierte a la politica familiar, con subsidios a la natalidad, una reforma del impuesto sobre la renta que ha elevado la deduccion por hijos y la prohibicion de la venta de bebidas alcoholicas a menores aprobada en 2022, en la respuesta oficial a un problema que la economia real no puede resolver por si sola.'
          }
        ]
      },
      {
        id: 'corrupcion-y-protestas',
        heading: 'Captura del Estado, corrupcion y el ciclo de protestas',
        blocks: [
          {
            type: 'p',
            text: 'La corrupcion es el defecto estructural reconocido del sistema. En los encuestas de percepcion que la Comision Europea publica sobre la situacion en los Estados miembros, Bulgaria aparece en los ultimos puestos de forma sistematica, con una puntuacion muy por debajo de la media comunitaria, y esa posicion no ha variado de manera significativa desde su entrada en la Union Europea. La dimension mas grave no es el dinero ilicito sino la captura institucional: la posibilidad de que el poder judicial elegido sea utilizado como instrumento de hostigamiento politico, y la practica de que la mayoriaórica aplique la mayoria de dos tercios para sanear la propia mayoria.'
          },
          {
            type: 'p',
            text: 'Ese fue exactamente el motivo de la protesta de 2017, la mayor de la historia contemporanea del pais. Bajo el lema de pedir cuentas sobre quien habia cobrado comisiones en torno a una empresa publica de energia, cientos de miles de personas ocuparon la plaza y las calles de Sofia durante semanas, con motivo de la designacion de una direccion ya vinculada a un partido de gobierno, hasta que el primer ministro presento su dimision y se convocaron elecciones anticipadas. Ese episodio es el punto de inflexion que explica las reformas posteriores y tambien sus limites.'
          },
          {
            type: 'p',
            text: 'La respuesta institucional fue la reforma judicial de 2015, adoptada por la mayoria de dos tercios y casi inmediatamente anulada en parte por el Tribunal Constitucional, en una sentencia que la Comision de Venecia critico por afectar a la independencia de la justicia. El texto definitivo se implanta en etapas entre 2016 y 2017, reformo la composicion del Consejo Judicial y el procedimiento de eleccion de sus miembros, y fue seguida por una reforma adicional en 2018 que extendio las mismas reglas a la inspeccion. El resultado ha sido una reforma legal profunda con efectos limitados sobre las practicas, como muestra la persistencia de los mismos circuitos de influencia en la contratacion publica.'
          },
          {
            type: 'p',
            text: 'El ciclo de protesta se ha repetido con una regularidad que forma parte del funcionamiento del sistema. Hubo protestas mayores en 2013 contra un Gobierno derribado por un asunto de nombramientos en empresas publicas, en 2017 contra el Gobierno de centro derecha, en 2019, 2020 y 2021 contra sucesivas propuestas de reforma institucional, y en 2022 y 2023, cuando la protesta callejera se combino con el instrumento reglamentario del voto de desconfianza que acabo con el Gobierno de 2023. La diferencia relevante es que despues de 2013 la protesta dejo de limitarse a la campana electoral y paso a operarse en la calle, en las plazas y en las puertas del Parlamento, de modo que la presion social y la presion interna se condicionan mutuamente.'
          },
          {
            type: 'p',
            text: 'El papel de la Union Europea en este campo ha sido formalmente central y sustantivamente limitado. Desde 2017 la Comision Europea ha pedido cuentas sobre la situacion del Estado de derecho y ha condicionado el desbloqueo de los fondos al cumplimiento de recomendaciones concretas, un instrumento que ha producido efectos tangibles, entre ellos la paralizacion de reformas y el aplazamiento de nombramientos, aunque ninguno que haya producido el cambio de fondo que esas normas pretendian. La posicion bulgara ha sido la de considerar el Estado de derecho un asunto interno hasta que la Comision ha convertido esa evaluacion en un condicionante financiero, y esa es una de las variables mas utiles de la politica interna de Bulgaria desde 2017.'
          },
          {
            type: 'ul',
            'items': [
              'La captura aparece como el problema central: el acceso al poder judicial se decide con la mayoria de dos tercios, de modo que la instancia que deberia controlar al poder se somete al mismo reparto de fuerzas que lo ejerce.',
              'La prueba para evaluar esa captura no es el numero de condenas sino la duracion de los procesos y la tasa de prescripcion, y Bulgaria figura entre los paises europeos con mayor prescripcion en la materia administrativa.',
              'La reforma de 2015 y su aplicacion escalonada entre 2016 y 2018 no alteraron la relacion de fuerzas en el Consejo Judicial, porque el bloqueo por mayoria reforzada se mantuvo intacto.',
              'La protesta callejera ha actuado como sustituto del voto de desconfianza cuando la mayoria esta muy fragmentada, y ha obligado al Gobierno a dimitir dos veces en seis anos, en 2013 y en 2017.',
              'La presion europea se ha apoyado en un instrumento economico mas que en uno juridico: la retencion de fondos mas que las sanciones, un mecanismo que rinde en un pais con una dependencia elevada del presupuesto comunitario.'
            ]
          }
        ]
      },
      {
        id: 'integracion-europea',
        heading: 'Integracion europea, presidencia del Consejo y el papel de Sofia',
        blocks: [
          {
            type: 'p',
            text: 'Bulgaria solicito su adhesion a la Union Europea en diciembre de 1995, tres anos y medio despues de la caida del muro de Berlin, y fue admitida el 1 de enero de 2007 junto con Rumania. La negociacion fue especialmente dura en el capitulo judicial, por la negativa bulgara a aceptar sin mas las condiciones sobre independencia de la justicia, y solo se cerro tras la reforma del ano 2000. La pertenencia a la [[org:union-europea|Union Europea]] transformo el marco constitucional del pais en menos de una decada, en la medida en que obligo a la vez a las reformas que la organizacion exigia como condicion de acceso y a las que despues condiciono el acceso a los fondos.'
          },
          {
            type: 'p',
            text: 'La pertenencia a la [[org:otan|OTAN]] se produjo el 29 de marzo de 2004, y la frontera oriental del dispositivo europeo quedo desde entonces Bulgaria como uno de sus ejes. La cuestion de Macedonia del Norte, que bloqueo durante anos la integracion europea de ambos paises, se resolvio en 2018 con un acuerdo de buena vecindad que Bulgaria impulso. La agenda de seguridad bulgara es hoy la de un miembro integrado en la franja occidental del continente y, en la frontera del Mar Negro, preocupada por la guerra en Ucrania y por la vigilancia de las rutas de migracion irregular que cruzan el territorio.'
          },
          {
            type: 'p',
            text: 'Sofia concentra una funcion institucional que convierte a Bulgaria en un actor con presencia permanente en la geografia de la Union Europea. La capital es sede de la Agencia sobre Asilo, creada en 2022 y encargada de coordinar la politica de asilo, y de una oficina regional de la agencia de guardacostas, con competencia sobre la frontera exterior meridional. Esas dos instituciones se ocupan de la frontera exterior de la Union, de modo que Bulgaria no es solo objeto de la politica migratoria europea sino uno de los lugares donde se decide su aplicacion practica, lo que le da una influencia que no se deduce del numero de diputados que envia al Parlamento Europeo.'
          },
          {
            type: 'p',
            text: 'La presidencia del Consejo de la Union Europea se ejercio en dos periodos consecutivos, el primer semestre de 2017 bajo la presidencia del presidente de la Republica y el segundo semestre de 2018 bajo la presidencia del primer ministro. Fue la segunda vez que un Estado miembro la ejercitaba en dos semestres seguidos de su historia, lo que permitio mantener una continuidad en la agenda. El valor real de esa continuidad esta en los expedientes que quedaron abiertos y en la prioridad concedida a las migraciones y a la defensa del espacio Schengen, dos asuntos en los que el Gobierno bulgaro ha actuado como Estado frontera.'
          },
          {
            type: 'p',
            text: 'En politica economica la posicion bulgara ha sido favorable a la ampliacion hacia los Balcanes Occidentales, y el pais ha condicionado en parte esa expansion a la adopcion de criterios sobre el Estado de derecho que sus propias autoridades consideraban un asunto interno. Ese argumento le ha permitido negociar condiciones favorables en el presupuesto propio de la Union durante el ciclo financiero que coincide con la ampliacion. La agenda de adhesion ha sido, en suma, el principal instrumento de la politica exterior bulgara en las ultimas dos decadas y, al mismo tiempo, un instrumento de su politica interior.'
          }
        ]
      },
      {
        id: 'demografia',
        heading: 'Demografia, emigracion y limites del proyecto politico',
        blocks: [
          {
            type: 'p',
            text: 'La demografia es, junto con la corrupcion, el problema de fondo del pais, y a diferencia de aquella no se resuelve con reformas institucionales. Bulgaria ha perdido alrededor de un tercio de su poblacion desde el cambio de regimen: el censo de 2011 registro 7.357.000 habitantes, casi tres millones menos que en 1985, y el de 2021, 6.519.789, con un metodo de recuento nuevo que hace la comparacion con los anos anteriores mas dificil que la caida real. La poblacion estimada a cierre de 2025 se situa en algo mas de 6,2 millones, con una reduccion anual del orden del uno por ciento de la poblacion en edad activa.'
          },
          {
            type: 'p',
            text: 'El saldo migratorio es el motor de ese descenso. Entre 2012 y 2022 el pais dejo de registrar del orden de 480.000 personas al ano, y las estimaciones sobre el numero de búlgaros residentes en el extranjero oscilan entre uno y dos millones, segun se cuente o no la doble ciudadania y el retorno parcial de quienes conservan la casa familiar. Es una emigracion en buena parte cualificada: licenciados, ingenieros y profesionales sanitarios que se forman en el pais, con un sistema de educacion superior publico y de bajo coste, y que emigran despues a Chipre, Alemania, Italia, Espana, Reino Unido y Estados Unidos. La inversion extranjera ha mitigado parcialmente la salida, pero no la ha revertido.'
          },
          {
            type: 'p',
            text: 'El Gobierno ha respondido con dos medidas de alcance desigual. La primera es la reforma de la ley de extranjeros, que endurece el acceso de los ciudadanos de terceros paises al mercado de trabajo y al derecho a residir, y que situa a Bulgaria en el centro del debate europeo sobre la migracion irregular por su condicion de frontera exterior de la Union Europea. La segunda es la politica demografica convencional, con subsidios a la natalidad, una reforma del impuesto sobre la renta que ha elevado la deduccion por hijos y la prohibicion de la venta de bebidas alcoholicas a menores. Sus efectos han sido hasta ahora marginales en un pais cuya estructura de edad es ya de poblacion envejecida, con una esperanza de vida al nacer en torno a los setenta y cinco anos, muy por debajo de la media europea.'
          },
          {
            type: 'p',
            text: 'A eso se anade un ultimo elemento, mas dificil de medir pero muy presente en el debate publico, la emigracion irregular y el trafico de personas. Bulgaria ha sido identificada por la Comision Europea y por la agencia de formacion policial europea como un pais de transito hacia el occidente, y en los anos recientes se ha centrado en un debate sobre la externalizacion de los controles fronterizos, con Serbia y Macedonia del Norte como socios. Al mismo tiempo, el pais ha pasado de ser un lugar de salida a ser tambien un lugar de entrada de personas de fuera de la Union Europea, lo que ha planteado la cuestion de su tratamiento en el interior del espacio Schengen, en el que Bulgaria entro con las fronteras terrestres en 2015 y con las fronteras aereas y maritimas a partir de 2024.'
          },
          {
            type: 'p',
            text: 'La demografia es, por tanto, el limite estructural del proyecto politico bulgaro. Un pais que pierde un tercio de su poblacion en tres decadas y que obtiene un saldo migratorio negativo alcanza un punto en el que la reproduccion del cuerpo electoral, el numero de cotizaciones al presupuesto de la seguridad social y la propia capacidad fiscal que sostiene el Estado se ponen en cuestion al mismo tiempo, y esa es la restriccion que ningun acuerdo de coalicion puede levantar. Es tambien el argumento mas fuerte a favor de una politica de admision mas abierta que la del Gobierno actual, y uno de los motivos por los que Bulgaria defiende con firmeza la ampliacion hacia los paises de su vecindad oriental, a los que emigrar parte de su poblacion resulta mas viable que emigrar al interior de la Union Europea.'
          }
        ]
      }
    ],
    categories: ['Gobiernos', 'Europa sudoriental', 'Instituciones politicas', 'Derecho constitucional'],
    related: ['socialdemocracia', 'liberalismo', 'populismo', 'nacionalismo', 'org:union-europea'],
    references: [
      {
        title: 'Constitution of the Republic of Bulgaria and its amendments',
        author: 'Asamblea Nacional de Bulgaria',
        publisher: 'Parlamento de Bulgaria, Sofia',
        year: 2025,
        type: 'ley',
        url: 'https://www.parliament.bg/en/legislative-process'
      },
      {
        title: 'The National Assembly of the Republic of Bulgaria',
        author: 'Asamblea Nacional de Bulgaria',
        publisher: 'Parlamento de Bulgaria, Sofia',
        year: 2026,
        type: 'dato',
        url: 'https://www.parliament.bg/en/'
      },
      {
        title: 'The parliamentary groups of the National Assembly',
        author: 'Asamblea Nacional de Bulgaria',
        publisher: 'Parlamento de Bulgaria, Sofia',
        year: 2026,
        type: 'dato',
        url: 'https://www.parliament.bg/en/parties'
      },
      {
        title: 'The Prime Minister of the Republic of Bulgaria',
        author: 'Consejo de Ministros de Bulgaria',
        publisher: 'Gobierno de Bulgaria, Sofia',
        year: 2026,
        type: 'dato',
        url: 'https://www.government.bg/en/prime-minister'
      },
      {
        title: 'Government of the Republic of Bulgaria',
        author: 'Consejo de Ministros de Bulgaria',
        publisher: 'Gobierno de Bulgaria, Sofia',
        year: 2026,
        type: 'dato',
        url: 'https://www.government.bg/en'
      },
      {
        title: 'Constitutional Court of the Republic of Bulgaria',
        author: 'Tribunal Constitucional de Bulgaria',
        publisher: 'Tribunal Constitucional, Sofia',
        year: 2026,
        type: 'dato',
        url: 'https://www.constcourt.bg/en/'
      },
      {
        title: 'The Ombudsman of the Republic of Bulgaria',
        author: 'Defensor del Pueblo de Bulgaria',
        publisher: 'Defensor del Pueblo, Sofia',
        year: 2026,
        type: 'dato',
        url: 'https://www.ombudsman.bg/en'
      },
      {
        title: 'The President of the Republic of Bulgaria',
        author: 'Presidencia de la Republica de Bulgaria',
        publisher: 'Presidencia de la Republica, Sofia',
        year: 2026,
        type: 'dato',
        url: 'https://www.president.bg/en'
      },
      {
        title: 'Bulgaria, country profile and political data of the European Parliament',
        author: 'Parlamento Europeo',
        publisher: 'Parlamento Europeo, Estrasburgo',
        year: 2026,
        type: 'informe',
        url: 'https://www.europarl.europa.eu/meps/en/search/advanced?countryCode=BG'
      },
      {
        title: 'Bulgaria, NATO member since 29 March 2004',
        author: 'Organizacion del Tratado del Atlantico Norte',
        publisher: 'OTAN, Bruselas',
        year: 2026,
        type: 'dato',
        url: 'https://www.nato.int/cps/en/natohq/topics_48899.htm'
      },
      {
        title: 'Opinion on the draft amendments to the Constitution of Bulgaria',
        author: 'Comision Europea para la Democracia mediante el Derecho',
        publisher: 'Comision de Venecia, Estrasburgo',
        year: 2023,
        type: 'informe',
        url: 'https://docs-venice.coe.int/api/Document?pdffile=CDL-AD(2023)039-e'
      },
      {
        title: 'Bulgarian National Bank: the currency board framework',
        author: 'Banco Nacional de Bulgaria',
        publisher: 'Banco Nacional de Bulgaria, Sofia',
        year: 2026,
        type: 'dato',
        url: 'https://www.bnb.bg/en/'
      },
      {
        title: 'Census 2021, final results on population and housing',
        author: 'Instituto Nacional de Estadistica de Bulgaria',
        publisher: 'NSI, Sofia',
        year: 2023,
        type: 'dato',
        url: 'https://www.nsi.bg/en/content/2981/population-districts-census-2021-final-results'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
