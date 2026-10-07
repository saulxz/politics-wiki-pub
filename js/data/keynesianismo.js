(function (PW) {
  'use strict';
  PW.articles['keynesianismo'] = {
    slug: 'keynesianismo',
    title: 'Keynesianismo',
    subtitle: 'Corriente económica que sostiene que los mercados no se ajustan por sí solos al pleno empleo y que el Estado debe sostener la demanda efectiva',
    category: 'Ideologías económicas',
    tags: ['demanda efectiva', 'pleno empleo', 'multiplicador', 'política fiscal', 'Estado de bienestar', 'austeridad'],
    updated: '2026-09-29',
    summary: 'Corriente económica que sostiene que los mercados no se ajustan por sí solos al pleno empleo y que el Estado debe sostener la demanda efectiva con gasto público y política monetaria, base del Estado de bienestar y objeto de disputa desde 2008.',
    infobox: {
      caption: 'Keynesianismo',
      color: '#2f6b52',
      rows: [
        ['Período', '1936-actualidad, con un ciclo de hegemonía entre 1945 y 1973'],
        ['Origen', 'Cambridge y Londres, con la publicación de Teoría general en 1936'],
        ['Núcleo', 'La demanda efectiva, y no la oferta, fija el nivel de producción y de empleo'],
        ['Obra fundacional', 'The General Theory of Employment, Interest and Money (1936)'],
        ['Autores y colaboradores', 'Keynes, Kalecki, Minsky, Hansen, Robinson, Samuelson y Modigliani'],
        ['Herramientas', 'Gasto público, política monetaria, bancos centrales y regulación de los mercados de capital'],
        ['Ámbito', 'Economía y política pública, con efectos sobre el Estado de bienestar'],
        ['Debate abierto', 'Consistencia microeconómica, deuda pública y límites reales del multiplicador']
      ]
    },
    sections: [
      {
        id: 'origenes',
        heading: 'Orígenes: la Gran Depresión y la Teoría general de 1936',
        blocks: [
          {
            type: 'p',
            text: 'La doctrina que hoy se llama keynesianismo no nace como un sistema completo, sino como la respuesta a un desastre concreto. Entre 1929 y 1933 la producción industrial de Estados Unidos se redujo cerca de una tercera parte y el desempleo alcanzó a una cuarta parte de la población activa. El ajuste fue especialmente duro con los países deficitarios: el Reino Unido abandonó la paridad dorada en 1931 y Estados Unidos despreció de manera deliberada el patrón monetario en 1933.'
          },
          {
            type: 'p',
            text: 'La Teoría general tampoco partía de cero. Pigou había mostrado que una deflación transfiere renta de los acreedores a los deudores y desanima la producción, e Irving Fisher describió ese mecanismo en 1933 como una deflación de la deuda. Robert Kahn publicó en 1931 el primer tratamiento formal del multiplicador de empleo, y Keynes recogió ese argumento en los artículos que escribía para The Listener y en el folleto The Means to Prosperity de 1933.'
          },
          {
            type: 'ul',
            items: [
              'Pigou: los efectos reales de la deflación sobre la producción y el argumento de que el ajuste recae sobre los precios y los salarios.',
              'Fisher (1933): la deflación de la deuda como mecanismo que convierte la caída de los precios en una caída indefinida de la inversión.',
              'Kahn (1931): el multiplicador de empleo, antecesor directo del multiplicador keynesiano.',
              'Malthus (1798): el impuesto sobre el lujo como instrumento anticiclical capaz de reducir la demanda sin recortar el empleo.',
              'Cantillon y Bortkiewicz: antecedentes lejanos del multiplicador en la literatura sobre el crédito, la banca y los ciclos.'
            ]
          },
          {
            type: 'p',
            text: 'El libro que apareció en Londres en 1936 no es un manual de política, sino una refutación y una alternativa a la vez. En el primer capítulo se expone lo que Keynes llama la teoría clásica, según la cual regular el dinero y el interés basta para fijar el empleo, y se muestra que esa conclusión descansa en supuestos que fallan cuando los salarios se ajustan con lentitud. En el tercero se formula la tesis central: la producción queda determinada por la demanda efectiva y no por la oferta.'
          },
          {
            type: 'note',
            text: 'Conviene no confundir el libro de 1936 con el keynesianismo posterior ni con una teoría de la propiedad. Keynes no diseñó un programa de estabilización, y el manual keynesiano, con su curva de Phillips y sus tablas de multiplicadores, es en buena medida obra de los sucesores y de la síntesis de posguerra, cuyo instrumento de difusión más conocido fue el manual de Samuelson desde 1948. La doctrina regula el nivel de la demanda y deja intacta la estructura del [[capitalismo|capitalismo]].'
          },
          {
            type: 'table',
            head: ['Año', 'Hito', 'Significado'],
            rows: [
              ['1929', 'Crisis bursátil mundial y paso a la deflación', 'El ajuste automático agrava a la vez el colapso del empleo y el de los precios'],
              ['1930', 'Keynes escribe sobre las posibilidades económicas de las generaciones futuras', 'Se plantea por primera vez el riesgo de una atrofia de la inversión'],
              ['1931', 'Kahn expone el multiplicador de empleo y Keynes escribe en The Listener', 'El multiplicador y la demanda dejan de ser asuntos marginales'],
              ['1933', 'The Means to Prosperity y devaluación de Estados Unidos', 'El ajuste por deflación y por recorte de la demanda se rechaza de forma explícita'],
              ['1936', 'Publicación de la Teoría general del empleo, del interés y del dinero', 'La demanda efectiva pasa a ser la variable clave de la macroeconomía'],
              ['1944', 'Conferencia de Bretton Woods y edición revisada de la Teoría general', 'El problema del empleo se replantea como una cuestión internacional'],
              ['1945', 'Mensaje de Roosevelt al Congreso y Declaración de Filadelfia', 'El pleno empleo se convierte en un objetivo declarado por las instituciones'],
              ['1946', 'Employment Act de 1946 en Estados Unidos', 'El objetivo del pleno empleo pasa a ser una obligación legal del Gobierno federal']
            ]
          }
        ]
      },
      {
        id: 'nucleo-teorico',
        heading: 'Núcleo teórico: demanda efectiva, multiplicador y tipo de interés',
        blocks: [
          {
            type: 'p',
            text: 'El argumento se sostiene en piezas encadenadas. La primera afirma que la producción agregada queda determinada por la demanda efectiva, es decir, por el gasto previsto de las familias, las empresas y el Estado, y no por una oferta que se ajuste por sí sola a la capacidad instalada. La segunda admite que exista un equilibrio estable con un nivel de empleo inferior al de pleno empleo, de modo que el mercado no tiene por qué converger hacia la ocupación completa.'
          },
          {
            type: 'p',
            text: 'El multiplicador es la pieza que traduce el diagnóstico en una regla de cálculo. Una inyección de gasto produce un aumento de la renta mayor que su propio importe, porque una parte de lo recibido vuelve a gastarse en rondas sucesivas de menor magnitud, y la suma de esas rondas constituye el efecto total. Su valor depende de la proporción de la renta que se consume, de la reacción de la inversión al tipo de interés y de las fugas hacia el ahorro, los impuestos y las importaciones.'
          },
          {
            type: 'p',
            text: 'La tercera pieza acota el alcance de la palanca monetaria. Keynes sostiene que, con tipos de interés muy bajos, el dinero deja de circular y el público prefiere acumular activos líquidos, de modo que un aumento de la oferta monetaria no abarata el crédito ni activa la inversión. A esa situación, que el libro llama trampa de liquidez, se responde trasladando el peso de la política hacia el gasto público, único instrumento que no depende del ánimo de los agentes.'
          },
          {
            type: 'p',
            text: 'La formulación de 1936 se construyó por contraste, y conviene leerla junto a la teoría que rechaza. La ley de Say se había convertido en un axioma según el cual la producción genera su propia demanda, y el argumento central de Keynes atacó precisamente ese paso: el nivel de la producción queda limitado por la decisión de invertir, y esa decisión depende de las expectativas y del tipo de interés, no de un recurso que la oferta produzca por sí sola. El desplazamiento es el núcleo de la doctrina.'
          },
          {
            type: 'ul',
            items: [
              'Malthus (1820): en Principles of Political Economy examina las condiciones del consumo agregado y el papel del ahorro, y adelanta el problema de la demanda insuficiente.',
              'Fisher (1933): la deflación de la deuda convierte la caída de los precios en una caída de la inversión, y con ella de la demanda.',
              'Keynes (1936): la Teoría general formula la demanda efectiva como determinante del empleo y expone la trampa de liquidez en el capítulo doce.',
              'Hicks (1937): la traducción al modelo IS-LM convierte el argumento en un sistema de curvas y lo hace calculable.',
              'Hansen (1951): convierte la propuesta en un programa de política fiscal permanente, con un presupuesto dimensionado para el pleno empleo.',
              'Samuelson (1948): la síntesis neoclásica incorpora el argumento al manual y lo combina con la microeconomía marginalista, y con él se difundió en dos décadas.'
            ]
          },
          {
            type: 'table',
            head: ['Concepto', 'Qué afirma', 'Consecuencia de política pública'],
            rows: [
              ['Demanda efectiva', 'El gasto previsto de familias, empresas y Estado fija la producción', 'Nada garantiza que ese gasto iguale la oferta potencial'],
              ['Equilibrio con desempleo', 'Puede haber un equilibrio estable por debajo del pleno empleo', 'El Estado no debe esperar a una corrección automática'],
              ['Multiplicador', 'Una inyección de gasto induce gasto sucesivo de menor magnitud', 'El efecto de una medida fiscal excede su importe nominal'],
              ['Trampa de liquidez', 'Con tipos muy bajos el dinero no vuelve al circuito de la demanda', 'La política monetaria pierde eficacia y la fiscal gana peso'],
              ['Aversión al riesgo', 'En las crisis crece la preferencia por los activos líquidos', 'La respuesta de la inversión al tipo de interés se estrecha'],
              ['Propensión a consumir', 'La parte de la renta adicional que las familias vuelven a gastar', 'El reparto de la renta determina el tamaño del efecto fiscal']
            ]
          },
          {
            type: 'p',
            text: 'El argumento se apoya además en la función de consumo, y aquí aparece una objeción recurrente. Keynes supone que la propensión a consumir es estable, de modo que un aumento de la renta se gasta en una proporción dada, pero también reconoce que esa proporción depende de la distribución de la renta, y que un cambio en el reparto desplaza la relación entre ingreso y consumo. De ahí que la discusión sobre el alcance social de la doctrina sea relevante y no accidental.'
          },
          {
            type: 'p',
            text: 'El argumento tardó una década en volverse un lenguaje común. La traducción de Hicks en 1937 al modelo IS-LM lo convirtió en un sistema de curvas que los técnicos podían estimar, y la síntesis neoclásica de Samuelson desde 1948 lo integró en el manual junto a la microeconomía marginalista. Ese proceso amplió su difusión y también sus críticas, porque hizo de la demanda efectiva un supuesto de trabajo que se podía modificar sin discutir cada detalle del libro de 1936.'
          }
        ]
      },
      {
        id: 'estado-y-politicas',
        heading: 'El papel del Estado en la macroeconomía',
        blocks: [
          {
            type: 'p',
            text: 'El keynesianismo atribuye al Estado un papel distinto del que le reconocía la teoría clásica. No lo considera un generador de riqueza, sino un compensador de las oscilaciones de la demanda y un proveedor de bienes públicos que la iniciativa privada no cubre. Su tesis es que el sector público debe dimensionarse para que la demanda total se mantenga cerca de la suficiente, y no mucho más allá de ese punto.'
          },
          {
            type: 'p',
            text: 'La política fiscal es el instrumento central, y su diseño se apoya en tres ideas. La primera afirma que la magnitud relevante no es la del presupuesto nominal sino la del efecto inducido sobre la demanda. La segunda concede que los estabilizadores automáticos, como las prestaciones de desempleo o la tributación progresiva, reducen la oscilación sin necesidad de una decisión política nueva. La tercera recuerda que, en una economía abierta, parte del efecto se pierde en las importaciones.'
          },
          {
            type: 'ul',
            items: [
              'Gasto público en inversión y obras, con el multiplicador más alto y el más lento en su ejecución.',
              'Subsidios al empleo y programas de trabajo público, de efecto inmediato sobre la renta de los hogares.',
              'Transferencias a las familias, que sostienen la demanda cuando cae la inversión privada.',
              'Impuestos progresivos, que actúan como estabilizador automático al recortar la renta disponible en las fases de expansión.',
              'Política monetaria del banco central, con el tipo de interés como instrumento principal.',
              'Regulación de la banca y de los mercados de capital, que limita los canales por los que una crisis se amplifica.'
            ]
          },
          {
            type: 'p',
            text: 'La política monetaria ocupa un lugar aparte. En el libro de 1936 el banco central fija el tipo de interés y con él el nivel de inversión, y la insistencia en que la oferta de dinero influye en el empleo fue una de las razones principales de la ruptura con la teoría clásica. Desde los años setenta ese mandato se ha desplazado hacia el control de la inflación, y el argumento keynesiano se repliega al terreno de la emergencia y de la liquidación de las crisis.'
          },
          {
            type: 'p',
            text: 'La aplicación del diagnóstico choca con una dificultad de la economía política de la estabilización. El estímulo correcto para hoy se revela equivocado dentro de seis meses, y esa asimetría favorece las decisiones visibles y de efecto inmediato sobre las correcciones lentas. En los años setenta el problema se agravó y acabó asociándose con la pérdida de credibilidad de los bancos centrales ante los mercados financieros.'
          },
          {
            type: 'dl',
            items: [
              ['Política fiscal', 'Gasto e impuestos con efecto inmediato sobre la demanda y el empleo'],
              ['Política monetaria', 'Tipos de interés y oferta de dinero, con eficacia limitada en el tramo de tipos muy bajos'],
              ['Estabilizadores automáticos', 'Prestaciones y tributación que amortiguan el ciclo sin decisión política nueva'],
              ['Intermediario de última instancia', 'El banco central que evita la suspensión de pagos y el colapso del crédito'],
              ['Regulación financiera', 'Normas de capital y de liquidez que limitan la amplificación de las crisis']
            ]
          }
        ]
      },
      {
        id: 'practica-1930-1973',
        heading: 'Aplicación real: el New Deal, la posguerra y Bretton Woods',
        blocks: [
          {
            type: 'p',
            text: 'La primera aplicación de la doctrina fue el New Deal. Roosevelt llegó a la presidencia en marzo de 1933, cuando varios grandes bancos de Nueva York acababan de suspender pagos, y el programa combinó la devaluación de la moneda, el gasto en obras públicas, el reconocimiento de la negociación colectiva y una batería de ayuda social. Varias de sus medidas respondían a razones políticas y legales, no solo al diagnóstico keynesiano, y esa mezcla forma parte de la valoración del experimento.'
          },
          {
            type: 'p',
            text: 'El episodio de 1937 y 1938 es el aviso más temprano de los riesgos de la gestión de la demanda. Ante la recuperación del empleo, la Reserva Federal elevó los coeficientes de caja y el Gobierno recortó parte del gasto, y el desempleo volvió a elevarse. Keynes aireó su decepción con la timidez del experimento, y el episodio quedó como antecedente del ajuste prematuro en casi todos los manuales posteriores.'
          },
          {
            type: 'p',
            text: 'La guerra llegó a su fin con Estados Unidos convertido en la mayor economía del mundo y con la convicción de que la decepción de los años treinta podía evitarse. En su mensaje al Congreso de abril de 1945, Roosevelt colocó el pleno empleo entre los objetivos declarados de la política pública, citando a Keynes por nombre. Un año después, el Employment Act de 1946 convirtió ese objetivo en una obligación legal del Gobierno federal.'
          },
          {
            type: 'quote',
            text: 'El Congreso declara que la consecución del pleno empleo y de la producción para el uso del pueblo constituye una sana política nacional, y que el deber del Gobierno federal es emplear todos los medios practicables para promover el pleno empleo.',
            cite: 'Employment Act of 1946, sección 2',
            author: 'Congreso de los Estados Unidos'
          },
          {
            type: 'p',
            text: 'Gran Bretaña siguió una vía paralela y algo más temprana en su formulación. El informe Beveridge de 1942 sentó las bases del Estado de bienestar, y el documento del Gobierno titulado Full Employment in a Free Society, de 1944, exponía un programa de inversión pública y de control de la demanda que debía mantener el empleo en torno al tres por ciento de la población activa, con una financiación obtenida de los impuestos directos.'
          },
          {
            type: 'p',
            text: 'En julio de 1944, en la conferencia monetaria y financiera de las Naciones Unidas reunida en Bretton Woods, Keynes presidía la comisión encargada del sistema de pagos internacionales. Su plan, el de una Unión de Compensación, preveía que los países con superávits depositaran su saldo en una entidad común y que los déficits tuvieran un límite automático. Estados Unidos defendieron otro diseño, con tipos fijos pero ajustables, y el que prevalació fue el suyo.'
          },
          {
            type: 'ul',
            items: [
              'El pleno empleo como objetivo declarado de la política económica de varios Estados, y no como resultado residual del mercado.',
              'Presupuestos formulados como planes plurianuales, con metas de empleo y de inversión explícitas.',
              'Negociación colectiva y prestaciones sociales usadas como instrumentos de estabilización de la demanda.',
              'Bancos centrales que compran deuda pública y fijan los tipos de interés con prioridad al empleo.',
              'Cuentas nacionales y planificación indicativa, que hacen del Estado un evaluador permanente de la capacidad productiva.'
            ]
          },
          {
            type: 'p',
            text: 'Entre 1950 y 1973 las economías avanzadas vivieron un periodo de crecimiento rápido, desempleo bajo y compresión de las desigualdades. Contribuyeron a ello la reconstrucción europea, la puesta al día tecnológica, el crecimiento demográfico y el bajo coste de la energía hasta 1973. El keynesianismo fue el lenguaje con el que se justificaron esas políticas, no su causa, y su vigencia doctrinal coincide con ese periodo de prosperidad sin precedentes en el siglo XX.'
          }
        ]
      },
      {
        id: 'crisis-1973',
        heading: 'La crisis de los años setenta y el giro monetarista',
        blocks: [
          {
            type: 'p',
            text: 'El consenso de posguerra se desarmó en la década de 1970. En 1971 se suspendió la convertibilidad del dólar y se cerró el régimen de tipos fijos; en 1973 y en 1979 los precios del petróleo se multiplicaron; y a lo largo de la década se registró una desaceleración de la productividad que nadie había previsto. El resultado fue la combinación de inflación y desempleo alto, que ninguna versión de la curva de Phillips podía explicar.'
          },
          {
            type: 'p',
            text: 'La ruptura se produjo primero en el lado de las expectativas. Durante los años sesenta la curva de Phillips se administraba como si ofreciera una relación estable entre el exceso de demanda y la inflación, y esa confianza permitió perseguir metas de empleo más ambiciosas. En cuanto los agentes anticiparon la política, la relación se desplazó y dejó de servir para calibrar el estímulo de un año a otro.'
          },
          {
            type: 'p',
            text: 'La crítica se formuló sobre esa base. Milton Friedman sostuvo en 1968 que la curva de Phillips solo existe mientras las expectativas se forman de manera adaptativa, de modo que la demanda nominal no puede acelerar la inflación más que de forma temporal, y Edmund Phelps llegó ese mismo año a una conclusión equivalente desde el lado del desempleo. El argumento de la tasa natural se convirtió en el eje de una teoría nueva de la política.'
          },
          {
            type: 'ul',
            items: [
              'Friedman (1968): el dinero es neutral en el largo plazo y el exceso de demanda solo compra un tiempo precario.',
              'Phelps (1968): la propia política de estabilización desplaza la relación entre inflación y desempleo.',
              'Lucas (1973): toda regla de política se deduce de un modelo que ya supone formadas las expectativas de los agentes.',
              'Sargent y Wallace (1975): aun tras las revisiones, la política no mejora de forma sistemática un resultado ya anticipado.',
              'Escuela de Viena y crítica constitucional: una política discrecional sin reglas es un problema legal antes que económico.'
            ]
          },
          {
            type: 'p',
            text: 'Conviene precisar lo que la crítica resolvió y lo que dejó abierto. Resolvió que no existe una relación estable entre el exceso de demanda y la inflación; no resolvió que el mercado se ajuste por sí mismo al pleno empleo, extremo que rara vez se sometió a prueba directa. La desinflación de los años ochenta llegó junto con una arquitectura institucional nueva y no como efecto aislado de los tipos de interés altos.'
          },
          {
            type: 'p',
            text: 'Durante tres décadas el debate se formuló como una rivalidad entre dos doctrinas completas, y esa formulación oculta que la crisis combinó tres elementos distintos: una perturbación de la oferta, un cambio en las reglas monetarias y una crisis de confianza en las instituciones. Repartir las responsabilidades entre las dos doctrinas es posible, pero no hay un reparto que todos los historiadores acepten, y conviene mantener separado el dato de la oferta del relato doctrinal.'
          }
        ]
      },
      {
        id: 'retorno-desde-2008',
        heading: 'El retorno desde 2008: estímulo, austeridad y después',
        blocks: [
          {
            type: 'p',
            text: 'La crisis financiera de 2008 devolvió la doctrina al centro durante unos meses. La caída de la demanda fue inmediata y los estabilizadores automáticos resultaron insuficientes, porque el grueso de la contracción se produjo en el sector financiero y porque el ahorro preventivo absorbió buena parte del estímulo. Estados Unidos y el Reino Unido pusieron en marcha programas de gasto extraordinarios, y la cumbre del [[org:g20|G20]] de noviembre de 2008 comprometió a la economía mundial a evitar el proteccionismo y a coordinar la respuesta.'
          },
          {
            type: 'p',
            text: 'En paralelo se transformó la política monetaria. Los bancos centrales bajaron los tipos hasta el cero, compraron deuda pública a gran escala y emplearon comunicados de orientación para evitar que los mercados esperasen una subida. Ninguna de esas herramientas figura en el libro de 1936, y todas responden a un problema que él no anticipó: la insuficiencia de la demanda cuando el tipo de interés ya no puede bajar.'
          },
          {
            type: 'p',
            text: 'El giro llegó en 2010. Una vez reparado lo esencial del sistema financiero, la atención se desplazó hacia el recorte del gasto, primero en el Reino Unido y después en la zona del euro. Entre 2011 y 2013 el sector privado de España, Grecia, Italia y Portugal sufrió una contracción simultánea que pocos esperarían en una economía sin crisis financiera, y la combinación de la austeridad con la debilidad de la banca agravó el problema de la deuda soberana.'
          },
          {
            type: 'p',
            text: 'La discusión sobre el tamaño del multiplicador fiscal se ha resuelto en dos direcciones. Las estimaciones del [[org:fmi|Fondo Mundial Internacional]] y de la Organización para la Cooperación y el Desarrollo apuntan a valores superiores a uno cuando la demanda está débil, mientras que los estudios que comparan las previsiones de crecimiento con la reacción observada obligan a revisar esas cifras a la baja. Ninguna de las dos lecturas zanja la cuestión, y ambas coinciden en que el efecto depende del estado de la economía.'
          },
          {
            type: 'p',
            text: 'La experiencia europea tuvo una consecuencia institucional relevante: desde 2012 el Banco Central Europeo asumió que la estabilidad del euro era un bien público que debía protegerse, y en 2020 la respuesta a la pandemia añadió por primera vez una emisión de deuda común. La disciplina keynesiana del gasto en tiempos de necesidad quedó incorporada así al derecho de la [[org:union-europea|Unión Europea]] y a las reglas de continuidad fiscal entre generaciones.'
          },
          {
            type: 'ul',
            items: [
              'El tamaño y la asimetría del multiplicador según se financie con deuda, con subidas de impuestos o con recortes de transferencias.',
              'La eficacia de un estímulo cuando los bancos centrales remuneran las reservas sin interés y la inversión privada no responde.',
              'La interacción entre la política monetaria y la fiscal, que cambió de naturaleza cuando el tipo de interés llegó al cero.',
              'Los efectos distributivos de la consolidación: una restricción de la demanda recae sobre las rentas más bajas y sobre el empleo.',
              'El papel del [[geo:energia-y-dependencias|choque energético]] y de la transición tecnológica, que devuelven la discusión al lado de la oferta.'
            ]
          }
        ]
      },
      {
        id: 'corrientes-posteriores',
        heading: 'Corrientes posteriores y distinciones',
        blocks: [
          {
            type: 'p',
            text: 'Después de 1970 el keynesianismo no desapareció, se fragmentó. Kalecki desarrolló una teoría de los precios y del crecimiento en la que el margen de fijación depende del grado de utilización de la capacidad productiva y de la relación de fuerzas entre las clases, y sostuvo que el pleno empleo es una decisión política y no un resultado del mecanismo de precios. De esa tesis se derivó una lectura mucho más distributiva de la doctrina.'
          },
          {
            type: 'ul',
            items: [
              'Post-keynesianos: precios, distribución y crecimiento explicados por el poder salarial y no por el mecanismo de precios.',
              'Nuevo keynesiano: microfundación con fricciones, precios y salarios rígidos y una oferta agregada con pendiente positiva.',
              'Financiaristas: la inestabilidad endógena del sistema financiero como rasgo permanente, con Minsky como referencia.',
              'Institucionalistas: el dinero y el crédito como instituciones y no como simples recursos, con atención al papel de la banca central.',
              'Austriacos: el ciclo explicado por el crédito y por la expansión del tiempo de producción, lo que excluye la demanda efectiva como causa primaria.',
              'Tasa natural: el desempleo depende de la fricción del mercado de trabajo y no del nivel de la demanda agregada.'
            ]
          },
          {
            type: 'p',
            text: 'La hipótesis de inestabilidad financiera sostiene que la propia expansión del crédito genera la forma en que acaba en quebrar el sistema. Minsky distinguió las posiciones cubiertas por los flujos de caja previsibles de las que dependen de una financiación continua del gasto, y de ahí dedujo la necesidad permanente de un intermediario de última instancia. La crisis de 2008 se ha interpretado en clave minskyana, aunque el debate sobre su causa inmediata sigue abierto.'
          },
          {
            type: 'p',
            text: 'El nuevo keynesiano de los años noventa y del primer decenio del siglo XXI volvió a tratar los precios y los salarios como variables rígidas, pero añadió una microfundación que justifica la lentitud del ajuste. Acepta por eso la existencia de una tasa natural que se mueve despacio, y sostiene que la oferta agregada tiene pendiente positiva y no es el reverso exacto de la demanda. Ese modelo es hoy el lenguaje común de la política monetaria.'
          },
          {
            type: 'dl',
            items: [
              ['Frente al [[liberalismo|liberalismo]]', 'El liberalismo limita el poder del Estado por razones de libertad; el keynesianismo lo amplía por razones de eficacia, dentro de esos límites'],
              ['Frente al [[capitalismo-de-estado|capitalismo de Estado]]', 'El keynesianismo no nacionaliza los medios de producción ni administra los precios: regula la demanda y deja intacta la propiedad privada'],
              ['Frente a la [[socialdemocracia|socialdemocracia]]', 'La socialdemocracia es una corriente política con un proyecto social; el keynesianismo es una técnica económica que ella adoptó'],
              ['Frente al [[anarquismo|anarquismo]]', 'Los anarquistas rechazan el Estado por razones de coerción; el keynesianismo acepta el Estado como instrumento legítimo de regulación'],
              ['Frente al [[reformismo|reformismo]]', 'El reformismo es el método de cambiar las instituciones; el keynesianismo es el contenido económico de muchas de esas reformas']
            ]
          },
          {
            type: 'p',
            text: 'La relación con el [[capitalismo]] es de método y no de rechazo: la crítica keynesiana se dirige contra la teoría del ajuste automático, no contra la propiedad privada ni contra el mercado, y por eso el keynesianismo y el [[liberalismo|liberalismo económico]] no pueden sostenerse a la vez. Conviene tampoco asociar la doctrina a un régimen político concreto, porque las técnicas de estimulación del empleo circularon igualmente por los Estados autoritarios de los años treinta.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas y límites',
        blocks: [
          {
            type: 'p',
            text: 'La primera crítica teórica fuerte no llegó del lado monetario, sino de la economía austriaca. En Teoría del dinero (1912) Mises sostuvo que el crédito es un fenómeno bancario y no un recurso que la banca pueda crear a voluntad, y en Precios y producción (1931) Hayek atacó la contabilidad del multiplicador, al señalar que la inversión inducida por beneficios esperados no aumenta el capital real. En El camino de la servidumbre (1944) formuló la versión política de la misma objeción.'
          },
          {
            type: 'ul',
            items: [
              'Mises (1912): el crédito es un préstamo bancario y no un recurso que el sistema pueda crear a voluntad.',
              'Hayek (1931): la inversión inducida por expectativas de beneficio consume recursos que proceden de otros usos, y el multiplicador omite ese desplazamiento.',
              'Friedman (1956): en A History of US Monetary Policy sostiene que una regla de crecimiento constante de la oferta monetaria habría evitado las grandes depresiones.',
              'Friedman (1968): la tasa natural y la neutralidad del dinero a largo plazo dejan la curva de Phillips sin valor para calibrar el estímulo.',
              'Phelps (1968): la expectativa de la propia política de estabilización desplaza la relación entre inflación y desempleo.',
              'Barro (1974): el argumento ricardiano sostiene que un déficit futuro ya anticipado no eleva el consumo presente, lo que estrecha el multiplicador.'
            ]
          },
          {
            type: 'p',
            text: 'La primera tanda de críticas se apoya en el historial de los años sesenta, cuando la gestión de la demanda se aplicó con demasiada confianza. Los ciclos de expansión y frenazo de aquellos años generaron presiones inflacionarias, la negociación colectiva se politizó y la indexación de salarios se extendió como mecanismo de protección. El argumento decisivo no fue que la doctrina fuera falsa, sino que la calibración de sus instrumentos resultaba mucho más delicada de lo que se suponía.'
          },
          {
            type: 'p',
            text: 'La segunda objeción es la del desplazamiento de la inversión privada por el gasto público. La versión fuerte sostiene que un déficit sostenido eleva el tipo de interés y expulsa inversión; la versión débil, más defendible, señala un efecto sobre la composición de la demanda más que sobre su nivel. La evidencia es mixta, y el argumento se sostiene mejor aplicado a las economías pequeñas y abiertas que a las grandes.'
          },
          {
            type: 'p',
            text: 'Con el tiempo se añadió una crítica institucional que la doctrina de 1936 no había previsto. Un Estado que gasta de forma contraída una deuda que exige más impuesto o más emisión, y esa deuda puede volverse insostenible cuando los mercados pierden la confianza. Los casos de Italia en los años noventa y de varios países de la zona del euro a partir de 2010 recordaron el problema, y la respuesta institucional ha sido la fijación de reglas fiscales numéricas.'
          },
          {
            type: 'ul',
            items: [
              'Inflación: el mantenimiento de un exceso de demanda sostenido erosiona la estabilidad de precios y desacredita la política a medio plazo.',
              'Ajuste prematuro: retirar el estímulo antes de la recuperación completa produce una caída adicional del empleo.',
              'Desplazamiento: en las economías pequeñas y abiertas el gasto público puede expulsar inversión privada.',
              'Calibración incierta: el valor del multiplicador depende del canal de financiación y del estado de la demanda.',
              'Falta de microfundación: la formulación agregada original no justifica el comportamiento de los agentes que la sostiene.',
              'Crítica jurídica y constitucional: una política discrecional sin reglas concede a la administración un poder sin límites definidos.'
            ]
          },
          {
            type: 'p',
            text: 'El monetarismo fue la alternativa de gobierno entre 1969 y 1979, con objetivos explícitos de crecimiento de la oferta monetaria en Estados Unidos, Alemania y Reino Unido, y la suspensión de la convertibilidad del dólar en 1971 apartó la política fiscal del objetivo prioritario. Barro (1974) opuso a esa línea el argumento ricardiano: si las familias anticipan los impuestos futuros, un aumento del déficit no eleva el consumo presente y el multiplicador se estrecha. La respuesta de los años noventa fue una nueva síntesis con precios y salarios rígidos.'
          },
          {
            type: 'p',
            text: 'También se le ha señalado una limitación en el tratamiento de la distribución. La doctrina explica el nivel de empleo a partir de variables agregadas y deja el reparto de la renta a una teoría distinta, de modo que la compresión de las desigualdades que registró la posguerra queda descrita como una consecuencia de la demanda y no como un objetivo deliberado. La respuesta habitual es que esa mejora se produjo por la negociación colectiva, el crecimiento y el Estado de bienestar, y no por la teoría.'
          },
          {
            type: 'note',
            text: 'El debate actual ya no se plantea como una alternativa entre dos puras. La microfundación nueva keynesiana ha incorporado buena parte de las críticas, de manera que los modelos de uso en los bancos centrales incluyen fricciones, expectativas y reglas. Lo que se discute es la magnitud de los instrumentos y no su fundamento, y ninguna de las partes ha logrado convertir su diagnóstico en una recomendación operativa que no pueda discutirse.'
          }
        ]
      }
    ],
    categories: ['Keynesianismo', 'Ideologías económicas', 'Teoría económica'],
    related: ['liberalismo', 'capitalismo', 'capitalismo-de-estado', 'socialdemocracia', 'reformismo'],
    references: [
      {
        title: 'Teoría general del empleo, el interés y el dinero',
        author: 'John Maynard Keynes',
        publisher: 'Macmillan, Londres',
        year: 1936,
        type: 'libro'
      },
      {
        title: 'Political Aspects of Full Employment',
        author: 'Michal Kalecki',
        publisher: 'The Political Quarterly, vol. 14, núm. 4, págs. 322-330',
        year: 1943,
        type: 'articulo',
        url: 'https://doi.org/10.1111/j.1467-923X.1943.tb01016.x'
      },
      {
        title: 'The Role of Monetary Policy',
        author: 'Milton Friedman',
        publisher: 'Journal of Money, Credit and Banking, vol. 1, núm. 1, págs. 1-17',
        year: 1968,
        type: 'articulo'
      },
      {
        title: 'Mr. Keynes and the Classics',
        author: 'John R. Hicks',
        publisher: 'Economica, vol. 4, núm. 14, págs. 147-148',
        year: 1937,
        type: 'articulo'
      },
      {
        title: 'Estabilizar una economía inestable: la hipótesis de la inestabilidad financiera',
        author: 'Hyman P. Minsky',
        publisher: 'Yale University Press, New Haven',
        year: 1986,
        type: 'libro'
      },
      {
        title: 'Employment Act of 1946',
        author: 'Congreso de los Estados Unidos',
        publisher: 'Public Law 79-658, Washington',
        year: 1946,
        type: 'ley'
      },
      {
        title: 'Full Employment in a Free Society',
        author: 'Gobierno de Su Majestad en el Reino Unido',
        publisher: 'HMSO, Londres, documento de política pública',
        year: 1944,
        type: 'documento'
      },
      {
        title: 'World Economic Outlook, April 2009: Crisis and Recovery',
        author: 'Fondo Mundial Internacional',
        publisher: 'International Monetary Fund, Washington',
        year: 2009,
        type: 'informe'
      },
      {
        title: 'Growth Forecast Errors and Fiscal Multipliers',
        author: 'Olivier Blanchard y Daniel Leigh',
        publisher: 'National Bureau of Economic Research, Working Paper 18779',
        year: 2013,
        type: 'documento',
        url: 'https://doi.org/10.3386/w18779'
      },
      {
        title: 'Quantitative easing',
        author: 'James Benford, Stuart Berry, Kalin Nikolov, Chris Young y Mark Robson',
        publisher: 'Bank of England Quarterly Bulletin, 2009 Q2',
        year: 2009,
        type: 'articulo',
        url: 'https://www.bankofengland.co.uk/quarterly-bulletin/2009/q2/quantitative-easing'
      },
      {
        title: 'Declaration of the Summit on Financial Markets and the World Economy',
        author: 'Grupo de los veinte',
        publisher: 'Cumbre de Washington',
        year: 2008,
        type: 'documento',
        url: 'https://www.g20.utoronto.ca/2008/2008declaration1115.html'
      },
      {
        title: 'Keynesian economics',
        author: 'Encyclopaedia Britannica',
        publisher: 'Encyclopaedia Britannica, Inc.',
        year: 2025,
        type: 'enciclopedia',
        url: 'https://www.britannica.com/money/Keynesian-economics'
      },
      {
        title: 'Small and Large Effects of Fiscal Policy',
        author: 'N. Gregory Mankiw',
        publisher: 'National Bureau of Economic Research, Working Paper 1621',
        year: 1985,
        type: 'documento',
        url: 'https://www.nber.org/papers/w1621'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
