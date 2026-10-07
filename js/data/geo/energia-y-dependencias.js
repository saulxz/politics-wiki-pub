(function (PW) {
  'use strict';
  PW.geo = PW.geo || {};
  PW.geo['energia-y-dependencias'] = {
    kind: 'geopolitica',
    slug: 'energia-y-dependencias',
    title: 'Energía y dependencias',
    subtitle: 'Petróleo, gas y metales críticos como ejes de la economía política del suministro',
    category: 'Geopolítica',
    tags: ['energía', 'dependencias', 'metales críticos', 'transición energética', 'recursos naturales', 'seguridad energética'],
    updated: '2026-09-27',
    region: 'Sistema internacional',
    timeFrame: '2000-actualidad',
    categories: ['Geopolítica', 'Economía global', 'Relaciones internacionales'],
    actors: [
      { name: 'Rusia', role: 'proveedor de gas, petróleo, uranio y fertilizantes con rutas de exportación propias', power: 'media' },
      { name: 'China', role: 'dominio del refinado de tierras raras y de la fabricación de equipos solares', power: 'alta' },
      { name: 'Estados Unidos', role: 'mayor productor de petróleo por extracción de lutitas y vendedor de tecnología', power: 'alta' },
      { name: 'Organización de Países Exportadores de Petróleo', role: 'gestión del margen de producción de una parte del suministro mundial', power: 'media' },
      { name: 'Unión Europea', role: 'mayor bloque importador neto y titular de la regulación del mercado energético', power: 'alta' }
    ],
    infobox: {
      caption: 'Energía y dependencias',
      color: '#4a6d8c',
      rows: [
        ['Objeto', 'Concentración del suministro y vulnerabilidad de los importadores'],
        ['Ruptura de referencia', 'Invasión de Ucrania, 24 de febrero de 2022'],
        ['Dependencia clave', 'Europa como importador neto de gas y de combustibles'],
        ['Nuevo eje de conflicto', 'Cobalto, níquel, litio y tierras raras'],
        ['Variable crítica', 'Coste de la electricidad y del transporte'],
        ['Organismos de referencia', 'Agencia Internacional de la Energía y Comisión Europea']
      ]
    },
    summary: 'Red de dependencias en materias primas y productos energéticos que une a proveedores muy concentrados con importadores netos y convierte precios, rutas y reglas comerciales en instrumentos de política exterior. La invasión de Ucrania en 2022 y la transición energética han desplazado el centro de la dependencia desde el petróleo hacia el gas y hacia los metales críticos.',
    sections: [
      {
        id: 'panorama',
        title: 'Panorama: una interdependencia que se hizo visible',
        heading: 'Panorama: una interdependencia que se hizo visible',
        blocks: [
          {
            type: 'p',
            text: 'La seguridad energética es la expresión más medible de las relaciones de fuerza entre Estados. Un país resulta vulnerable cuando concentra sus suministros en unos pocos proveedores o cuando depende de rutas que un tercero puede cerrar. La invasión de Ucrania por Rusia el 24 de febrero de 2022 convirtió ese defecto estructural en una crisis inmediata: Europa tuvo que revisar en meses su combinación energética, sus rutas y sus reservas.'
          },
          {
            type: 'table',
            head: ['Recurso', 'Concentración de la oferta', 'Respuesta de los importadores'],
            rows: [
              ['Gas natural', 'Rusia cubre cerca del cuarenta por ciento de las importaciones europeas hasta 2021', 'Diversificar rutas y llenar el almacenamiento'],
              ['Petróleo', 'Un grupo de países de la OPEP controla el margen de producción', 'Reservas de emergencia y eficiencia del transporte'],
              ['Cobalto', 'La República Democrática del Congo concentra la mayor parte de la producción mundial', 'Reciclaje y búsqueda de proveedores alternativos'],
              ['Níquel', 'Indonesia aplica desde 2020 una prohibición de exportar mineral sin procesar', 'Instalar la transformación en la zona minera'],
              ['Tierras raras', 'China domina el refinado de un mineral que importa de otros países', 'Recuperación de residuos y diversificación técnica'],
              ['Uranio', 'Rusia domina el enriquecimiento y Kazajistán la extracción', 'Inventarios de uranio enriquecido en el importador']
            ]
          },
          {
            type: 'p',
            text: 'Ese episodio no fue el primero, pero sí el primero que convirtió la interdependencia en un asunto de seguridad inmediato. Hasta 2020 el debate energético se centraba en el clima, la continuidad de los suministros y la diversificación de fuentes. Después de 2022 gira en torno a la soberanía sobre el aprovisionamiento, como muestra el descenso de la cuota rusa en las importaciones europeas de gas, que la Comisión Europea sitúa cerca del quince por ciento a mediados de 2023 frente a cerca del cuarenta por ciento en 2021.'
          },
          {
            type: 'ul',
            items: [
              'La invasión de Rusia en 2022 convirtió el gas europeo en un instrumento de coerción política.',
              'La transición energética traslada la dependencia del carbono hacia el cobalto, el níquel, el litio y las tierras raras.',
              'La descarbonización reduce la demanda de combustibles fósiles, pero no elimina la necesidad de metales ni de redes.',
              'La eficiencia energética es la palanca más rápida y menos costosa frente a un suministro deficitario.',
              'Los puertos, los oleoductos, los gasoductos y las redes eléctricas son infraestructura de Estado y no de mercado.'
            ]
          },
          {
            type: 'p',
            text: 'Conviene distinguir dos tipos de dependencia que a menudo se confunden. La dependencia absoluta aparece cuando un producto solo puede obtenerse de un lugar, mientras que la dependencia relativa admite varios proveedores, aunque con alternativas caras. La Unión Europea estaba expuesta a las dos hasta 2022, y esa doble condición explica que su respuesta se orientara primero a diversificar rutas y solo después a reducir el consumo.'
          },
          {
            type: 'quote',
            text: 'Liberación colectiva de cien millones de barriles de petróleo de las existencias de emergencia, acordada por los Estados miembros.',
            cite: 'Comunicado conjunto de los Estados miembros de la Agencia Internacional de la Energía, 1 de marzo de 2022',
            author: 'Agencia Internacional de la Energía'
          }
        ]
      },
      {
        id: 'actores',
        title: 'Actores: quién controla el recurso y qué palanca ofrece',
        heading: 'Actores: quién controla el recurso y qué palanca ofrece',
        blocks: [
          {
            type: 'p',
            text: 'En el mercado energético el poder se mide por la posición ocupada en la cadena de valor y no por el tamaño del país. Quien domina una sola fase, como el refinado, el enriquecimiento o el transporte marítimo, puede ejercer presión sobre todo el sistema. Esa lógica explica por qué el debate sobre la transición se ha desplazado del consumidor final al eslabón industrial.'
          },
          {
            type: 'ul',
            items: [
              'Rusia posee reservas extensas de gas y petróleo y controla las redes de oleoductos que los conectan.',
              'China mantiene el refinado de tierras raras y la fabricación de paneles solares, presentes en casi todas las cadenas industriales.',
              'Estados Unidos aporta petróleo de lutitas abundante y la tecnología de extracción que otros países compran.',
              'La República Democrática del Congo fija el precio en origen de un insumo crítico para las baterías.',
              'Indonesia usa la prohibición de exportar mineral para atraer inversión extranjera e industrializar su territorio.'
            ]
          },
          {
            type: 'table',
            head: ['Actor', 'Recurso o fase que controla', 'Ventaja negociadora'],
            rows: [
              ['Rusia', 'Gas, petróleo, uranio y fertilizantes', 'Volumen de reservas y control de los oleoductos'],
              ['China', 'Refinado de tierras raras y equipos solares', 'Capacidad industrial y control del eslabón final'],
              ['Estados Unidos', 'Petróleo de lutitas y tecnología de extracción', 'Suministro abundante y tecnología transferible'],
              ['República Democrática del Congo', 'Cobalto y cobre', 'Elevación del precio en origen de un insumo crítico'],
              ['Indonesia', 'Níquel y carbón', 'Normas de exportación que obligan a invertir']
            ]
          },
          {
            type: 'p',
            text: 'El caso del cobalto muestra el poder de la norma comercial como instrumento geopolítico. La República Democrática del Congo domina una parte decisiva de la producción mundial, y el refinado correspondiente se realiza en China en empresas de capital chino. Cualquier decisión sobre cuotas de exportación o sobre fiscalidad se convierte así en una palanca ejercida desde un Estado con escasa capacidad administrativa frente a sus propios productores.'
          },
          {
            type: 'p',
            text: 'En el extremo opuesto se encuentra la Organización de Países Exportadores de Petróleo, que coordina el margen de producción de sus miembros y puede retirarlo del mercado durante un tiempo. Frente a esa práctica, el auge del petróleo de lutitas en Estados Unidos desde 2008 actúa como amortiguador permanente del precio. India, en cambio, compra casi todo su crudo en el mar, de modo que traslada el riesgo a la logística y no a la extracción.'
          }
        ]
      },
      {
        id: 'dimensiones',
        title: 'Dimensiones: económicas, industriales y políticas',
        heading: 'Dimensiones: económicas, industriales y políticas',
        blocks: [
          {
            type: 'p',
            text: 'Hoy la dependencia energética se juega en dos frentes simultáneos. El primero es la seguridad del suministro de combustibles, todavía dominada por el gas natural y el petróleo. El segundo es la disponibilidad de los metales que necesita la electrificación, un frente que crece mientras el primero se reduce. Tratar ambos como uno solo conduce a políticas incoherentes.'
          },
          {
            type: 'ul',
            items: [
              'Petróleo: la extracción de lutitas ha reordenado el mapa de la producción mundial desde 2008.',
              'Gas: la licuación abre mercados lejanos, pero aumenta el coste y la huella de carbono del suministro.',
              'Metales de batería: el cobalto se concentra en la República Democrática del Congo y el litio en Australia, Chile y Argentina.',
              'Tierras raras: China domina el refinado y también concentra la investigación aplicada asociada.',
              'Redes: la transición exige redes capaces de absorber generación variable en volumes crecientes.'
            ]
          },
          {
            type: 'p',
            text: 'El argumento económico de la transición se apoya en una caída sostenida del coste de la tecnología limpia. La [[org:aiea|Agencia Internacional de la Energía]] estima que el precio de los módulos fotovoltaicos se redujo alrededor del noventa por ciento entre 2010 y 2023. Esa reducción, y no la geografía del recurso, es hoy el principal factor de competencia entre productores de energía y el eje de la discusión sobre [[ecopolitica|ecopolítica]] industrial.'
          },
          {
            type: 'ul',
            items: [
              'La descarbonización desplaza la demanda de combustibles hacia electricidad, cables y transformadores.',
              'El cobre y el aluminio alcanzan una relevancia comparable a la del gas por su uso en redes y motores.',
              'El almacenamiento con baterías es la principal palanca para equilibrar una oferta muy variable.',
              'La eficiencia reduce la demanda antes de que entren en servicio nuevas instalaciones, con efecto rápido y coste bajo.'
            ]
          },
          {
            type: 'p',
            text: 'Los importadores han convertido el almacenamiento en un instrumento de política pública. En la Unión Europea, el Reglamento relativo a la seguridad del suministro de gas obliga a los operadores a mantener unas reservas mínimas antes de cada invierno. Ese deber convierte un depósito en un activo de seguridad nacional y no en una mera infraestructura comercial, y explica que las redes de gas se valoren como infraestructura estratégica.'
          },
          {
            type: 'quote',
            text: 'El presente Acuerdo, al mejorar la aplicación de la Convención, incluidas sus objetivos, tiene por objeto fortalecer la respuesta mundial ante la amenaza del cambio climático.',
            cite: 'Acuerdo de París sobre Cambio Climático, artículo 2, apartado 1',
            author: 'Naciones Unidas'
          }
        ]
      },
      {
        id: 'desbordamientos',
        title: 'Desbordamientos: cuándo una dependencia se convierte en arma',
        heading: 'Desbordamientos: cuándo una dependencia se convierte en arma',
        blocks: [
          {
            type: 'p',
            text: 'El equilibrio se rompe cuando a un actor le sale más barato o más útil quebrantar la regla que cumplirla. Los mecanismos son siempre los mismos: cerrar una ruta de transporte, aprobar una prohibición de exportación, sancionar a una empresa o manipular el precio de referencia. Cada uno es legal en algún momento, y por eso la reacción llega tarde.'
          },
          {
            type: 'ul',
            items: [
              'Guerra de Ucrania desde 2022: Europa queda dividida en dos sistemas de suministro energético.',
              'Nord Stream, septiembre de 2022: los gasoductos submarinos que conectaban con Rusia salen de servicio.',
              'Indonesia desde 2020: la prohibición de exportar níquel sin procesar altera la inversión mundial.',
              'Canal de Suez, marzo de 2021: un solo buque atascado detiene el tránsito durante casi una semana.',
              'Canal de Panamá desde 2023: la sequía obliga a restringir el tránsito y encarece las rutas.'
            ]
          },
          {
            type: 'p',
            text: 'El impacto de la crisis de 2022 no se repartió de manera uniforme dentro de la sociedad europea. La cerámica, el vidrio y el aluminio, industrias intensivas en energía, suspendieron hornos y recortaron turnos en Italia, Francia y Alemania. El coste recayó sobre los trabajadores de esos sectores y sobre los hogares con presupuestos de energía elevados, que en algunos países alcanzaron a absorber una parte notable del ingreso familiar.'
          },
          {
            type: 'p',
            text: 'En el lado opuesto de esa misma guerra, las sanciones occidentales afectaron de forma directa al mercado de combustibles. La falta de acceso al sistema de pagos y a las coberturas de seguro obligó a reorganizar el transporte y elevó el coste del flete. Resulta un precedente poco frecuente: un gran productor que deja de disponer de los intermediarios financieros que su propio comercio requiere.'
          },
          {
            type: 'p',
            text: 'Los casos anteriores comparten una misma estructura: cadenas cortas, pocos participantes bien identificados y un momento político en el que el coste de cruzar la línea resulta aceptable. Cuando el equilibrio se rompe así, la respuesta llega tarde y es desigual entre países. Se construyen reservas y normas nuevas, pero también se diversifican los proveedores, lo que resta estabilidad al sistema que se pretendía salvar, como se analiza en [[geo:guerra-en-ucrania|la guerra en Ucrania]].'
          }
        ]
      },
      {
        id: 'perspectivas',
        title: 'Perspectivas: escenarios razonables',
        heading: 'Perspectivas: escenarios razonables',
        blocks: [
          {
            type: 'p',
            text: 'No existe consenso académico sobre hacia dónde camina la seguridad energética, y conviene distinguir el escenario de la predicción. Ninguno de los escenarios que siguen es inevitable, porque cada uno depende de decisiones que aún no se han tomado. Determinan sobre todo la política industrial de Estados Unidos y China, la coordinación de compras de la Unión Europea y el destino del gas ruso en el mercado europeo a partir de 2026.'
          },
          {
            type: 'ul',
            items: [
              'Diversificación efectiva: la oferta de gas se reparte entre varios proveedores y el precio pierde volatilidad.',
              'Transición ordenada: la electrificación avanza al ritmo de la red y la dependencia cambia de naturaleza, no desaparece.',
              'Fragmentación de cadenas: cada bloque refuerza sus proveedores críticos y el coste de los productos se eleva.',
              'Reactivación de producción convencional: la seguridad del suministro frena el cierre de plantas térmicas y petroleras.',
              'Innovación de materiales: el diseño y el reciclaje reducen la demanda de los elementos más concentrados.'
            ]
          },
          {
            type: 'p',
            text: 'Las variables decisivas son conocidas y ninguna depende de un solo Gobierno. Cuentan la evolución de la extracción de lutitas, la velocidad del despliegue solar y eólico, la salud del sistema financiero estadounidense, la inversión en redes de transmisión y la estabilidad política de los principales países productores. Todas se refuerzan entre sí, de modo que una mejora en una de ellas no compensa un empeoramiento en otra.'
          },
          {
            type: 'p',
            text: 'El error más común consiste en confundir la seguridad de suministro con la autosuficiencia. La Unión Europea no puede producir todo lo que consume, y el mercado mundial es lo que permite obtener precios bajos en los años favorables. El objetivo alcanzable no es la autosuficiencia, sino la existencia de alternativas reales en proveedores, rutas y tecnologías. Reducir esa dependencia exige años de inversión en redes y en industria, no una decisión política aislada.'
          },
          {
            type: 'p',
            text: 'La lección de 2022 es que la independencia energética absoluta no está al alcance de ningún gran bloque, incluidos los más ricos. Está al alcance la capacidad de absorber un golpe durante meses, y eso exige reservas, redes y fuentes alternativas disponibles antes de la crisis. La solidez se construye en los años de abundancia, y esa es la razón por la que un episodio como el de 2022 reordenó las prioridades más que cualquier discurso sobre el mercado.',
          }
        ]
      }
    ],
    related: ['geo:guerra-en-ucrania', 'geo:orden-multipolar', 'org:omc', 'ecopolitica'],
    references: [
      {
        title: 'World Energy Outlook 2024',
        author: 'Agencia Internacional de la Energía',
        publisher: 'Agencia Internacional de la Energía, París',
        year: 2024,
        type: 'informe',
        url: 'https://www.iea.org/reports/world-energy-outlook-2024'
      },
      {
        title: 'Global Critical Minerals Outlook 2024',
        author: 'Agencia Internacional de la Energía',
        publisher: 'Agencia Internacional de la Energía, París',
        year: 2024,
        type: 'informe',
        url: 'https://www.iea.org/reports/global-critical-minerals-outlook-2024'
      },
      {
        title: 'Mineral Commodity Summaries 2024',
        author: 'Servicio Geológico de Estados Unidos',
        publisher: 'Servicio Geológico de Estados Unidos, Reston',
        year: 2024,
        type: 'informe',
        url: 'https://pubs.usgs.gov/periodicals/mcs2024/mcs2024.pdf'
      },
      {
        title: 'Commodity Markets Outlook',
        author: 'Banco Mundial',
        publisher: 'Banco Mundial, Washington',
        year: 2024,
        type: 'informe',
        url: 'https://www.worldbank.org/en/research/commodity-markets'
      },
      {
        title: 'Annual Statistical Bulletin 2024',
        author: 'Organización de Países Exportadores de Petróleo',
        publisher: 'Organización de Países Exportadores de Petróleo, Viena',
        year: 2024,
        type: 'informe',
        url: 'https://www.opec.org/'
      },
      {
        title: 'Global Electricity Review 2024',
        author: 'Ember',
        publisher: 'Ember, Londres',
        year: 2024,
        type: 'informe',
        url: 'https://ember-energy.org/latest-insights/global-electricity-review-2024'
      },
      {
        title: 'The Command of the Commons',
        author: 'Barry R. Posen',
        publisher: 'Cambridge University Press, Cambridge',
        year: 2003,
        type: 'libro'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
