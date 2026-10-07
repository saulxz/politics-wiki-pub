(function (PW) {
  'use strict';
  PW.geo = PW.geo || {};
  PW.geo['inestabilidad-sahel'] = {
    kind: 'geopolitica',
    slug: 'inestabilidad-sahel',
    title: 'Inestabilidad en el Sahel',
    subtitle: 'Del alzamiento tuareg de 2011 a la ruptura con la CEDEAO: seguridad, oro y demografía en la franja saheliana',
    category: 'Geopolítica',
    tags: ['Sahel', 'golpe de Estado', 'terrorismo', 'Mali', 'Níger', 'Burkina Faso', 'inseguridad alimentaria'],
    updated: '2026-09-27',
    region: 'África',
    timeFrame: '2011-actualidad',
    categories: ['Geopolítica', 'África', 'Seguridad'],
    actors: [
      { name: 'Francia', role: 'potencia nuclear y ex potencia colonial, retirada de Barkhane en 2021', power: 'alta' },
      { name: 'Rusia', role: 'sustituta de Francia mediante bases, expertos y respaldo a los golpes', power: 'media' },
      { name: 'Mali', role: 'gobierno militar de facto desde 2020 y sede de la comunidad de Estados del Sahel', power: 'media' },
      { name: 'Níger', role: 'tercer golpe de Estado en 2023 y control de la frontera sahariana', power: 'media' },
      { name: 'Burkina Faso', role: 'epicentro del conflicto jihadista y golpe de Estado de 2022', power: 'baja' }
    ],
    infobox: {
      caption: 'Inestabilidad en el Sahel',
      color: '#8c5a4a',
      rows: [
        ['Período', '2011-actualidad'],
        ['Zona', 'Malí, Níger, Burkina Faso, Chad y Mauritania'],
        ['Agrupación del catálogo', 'África'],
        ['Aparato militar', 'Fuerza del G5 Sahel y grupo ruso Wagner'],
        ['Mandato internacional', 'Misión MINUSMA de la ONU, cerrada en 2024'],
        ['Riesgo dominante', 'Insurgencia jihadista y golpes de Estado sucesivos'],
        ['Respuesta regional', 'CEDEAO suspendida y retirada anunciada en 2024']
      ]
    },
    summary: 'Serie de conflictos armados, golpes de Estado y crisis alimentarias que afecta a la franja que separa el Sáhara del África occidental. El ciclo abierto en 2011 con el alzamiento tuareg en Malí se ha desplazado desde los grupos jihadistas hacia los propios Estados, con golpes en 2020, 2022 y 2023, la retirada francesa, la entrada de Rusia y la ruptura con la CEDEAO.',
    sections: [
      {
        id: 'panorama',
        title: 'Panorama: una franja en descomposición',
        heading: 'Panorama: una franja en descomposición',
        blocks: [
          {
            type: 'p',
            text: 'La franja saheliana separa el Sáhara de las tierras agrícolas del sur y concentra conflictos armados desde 2011. En enero de 2011 el alzamiento tuareg en Malí derrubó a Amadou Toumani Touré. Francia lanzó la operación Serval en 2013 y el acuerdo de Argel cerró el ciclo en 2015.'
          },
          {
            type: 'p',
            text: 'El eje del conflicto se desplazó hacia los Estados. Malí tuvo golpe militar en agosto de 2020, Burkina Faso en septiembre de 2022 y Níger en julio de 2023. Los tres países fundaron en septiembre de 2023 la comunidad de Estados del Sahel, que sustituye a la CEDEAO.'
          },
          {
            type: 'table',
            head: ['Hito', 'Fecha', 'Efecto'],
            rows: [
              ['Rebelión tuareg', '2011', 'Caída del gobierno de Malí y ruptura del orden'],
              ['Acuerdo de Argel', '2015', 'Retirada de grupos armados del norte'],
              ['Operación Barkhane', '2014-2021', 'Vigilancia del centro del Sahel'],
              ['Cierre de MINUSMA', '2023-2024', 'Fin de la mayor fuerza de paz']
            ]
          },
          {
            type: 'p',
            text: 'Dos organizaciones dominan casi todos los ataques y el territorio. JNIM, vinculado a Al Qaeda, opera en la región de Liptako-Gourma; ISWAP, rama del Estado Islámico, actúa junto al lago Chad. Ambas avanzan con ataques breves y se reclutan en zonas rurales afectadas por la sequía.'
          },
          {
            type: 'ul',
            items: [
              'Ataques jihadistas en Malí, Burkina Faso y Níger, con el lago Chad como eje secundario.',
              'Conflicto entre agricultores y pastoralistas por pastos, agua y derechos territoriales.',
              'Contrabando de oro, armas y precursores químicos hacia Europa y el norte de África.',
              'Inseguridad alimentaria crónica por lluvias variables en un clima que se calienta.'
            ]
          },
          {
            type: 'p',
            text: 'El coste humano aparece en el desplazamiento y en la alimentación. La ONU y el Comité Internacional de la Cruz Roja sitúan el desplazamiento interno saheliano en el orden de los millones de personas. Los informes de 2023 de la escala de respuesta rápida del Comité IPC situaron a millones de personas en fases de crisis.'
          }
        ]
      },
      {
        id: 'actores',
        title: 'Actores: quién decide y con qué recursos',
        heading: 'Actores: quién decide y con qué recursos',
        blocks: [
          {
            type: 'p',
            text: 'Francia construyó un dispositivo propio en la región. La operación Barkhane, lanzada en 2014, sustituyó a Serval y se retiró en noviembre de 2021, tras anunciarse su fin en febrero de 2020. En 2023 Francia y el G5 Sahel acordaron un marco de apoyo con dos unidades regionales y una fuerza conjunta.'
          },
          {
            type: 'p',
            text: 'Rusia entró en el hueco dejado por Francia. El grupo Wagner, vinculado a los servicios de inteligencia rusos, apareció en Malí en 2019 y 2020. Se extendió a Burkina Faso en 2021 y a Níger en 2023, y sostiene a los gobiernos militares mediante bases permanentes y contratos locales.'
          },
          {
            type: 'ul',
            items: [
              'Francia: potencia nuclear y ex potencia colonial, retirada de Barkhane en 2021.',
              'Rusia y el grupo Wagner: sustitutos de Francia con bases, expertos y apoyo político a los golpes.',
              'Malí, Burkina Faso y Níger: gobiernos militares que comparten una política de seguridad conjunta.',
              'CEDEAO: suspensión en julio de 2023, sanciones económicas y retirada anunciada en enero de 2024.',
              'G5 Sahel y comunidad de Estados del Sahel: dos marcos que se solapan y dividen el mando.'
            ]
          },
          {
            type: 'p',
            text: 'La respuesta de la CEDEAO combinó coerción y negociación. En julio de 2023 suspendió a los tres países, sancionó a sus autoridades y cerró el protocolo de libre circulación, que había sostenido el comercio regional. En agosto de 2023 la presidencia de Chad propuso desplegar una fuerza. El 29 de enero de 2024 los tres Estados anunciaron su retirada con doce meses de preaviso.'
          },
          {
            type: 'table',
            head: ['Actor', 'Instrumento', 'Objetivo declarado'],
            rows: [
              ['Francia', 'Barkhane y luego apoyo al G5', 'Orden sin tropas permanentes'],
              ['Rusia y Wagner', 'Bases, expertos y respaldo', 'Sustituir a Francia en la región'],
              ['G5 Sahel', 'Fuerza conjunta y apoyo aéreo', 'Combatir a los grupos jihadistas'],
              ['CEDEAO', 'Sanciones y libre circulación', 'Restaurar el orden por la vía diplomática']
            ]
          },
          {
            type: 'p',
            text: 'El vacío dejado por Europa lo ocupa un mosaico de fuerzas diversas. Nigeria, la mayor economía regional, evita intervenir y mantiene abierta la negociación con Níger. La Unión Africana promueve un diálogo que convive con la separación de facto y con la ausencia de reconocimiento diplomático a los tres gobiernos militares.'
          }
        ]
      },
      {
        id: 'dimensiones',
        title: 'Dimensiones: militar, económica, demográfica y climática',
        heading: 'Dimensiones: militar, económica, demográfica y climática',
        blocks: [
          {
            type: 'p',
            text: 'La respuesta regional fue tardía y con medios limitados. El G5 Sahel se creó en la cumbre de Bamako de enero de 2014 y articuló después una fuerza conjunta y unidades aerotransportadas. Ninguna de esas capacidades alcanzó el nivel de la retirada francesa ni el de la presión diplomática de la CEDEAO.'
          },
          {
            type: 'p',
            text: 'La dimensión económica se apoya en materias primas y rutas de exportación. Malí, Níger y Burkina Faso no tienen acceso al mar y dependen de puertos de Senegal, Benín o Costa de Marfil. El oro de Burkina Faso, el uranio de Níger y el litio de Malí sirven tanto a los Estados como a los grupos armados.'
          },
          {
            type: 'ul',
            items: [
              'Seguridad: presencia europea y rusa, fuerza del G5 Sahel y ausencia de un mando único.',
              'Logística: Dakar, Abidán y Cotonou son la única salida para tres países sin costa.',
              'Clima: variabilidad de las lluvias, retroceso del lago Chad y conflicto por los pastos.',
              'Energía: redes eléctricas escasas y dependencia de importaciones industriales.'
            ]
          },
          {
            type: 'p',
            text: 'La demografía alimenta la inestabilidad de dos maneras. Las poblaciones del Sahel son muy jóvenes y las estimaciones de las Naciones Unidas sitúan su crecimiento por encima del tres por ciento anual. Los ejércitos se reclutan en ese nicho y el cierre de escuelas ha dejado a las cohortes jóvenes fuera del mercado laboral.'
          },
          {
            type: 'quote',
            text: 'Respeto de la soberanía y la integridad territorial de todos los Estados y de sus respectivas jurisdicciones territoriales.',
            cite: 'Acta Constitutiva de la Unión Africana, artículo 4, apartado h',
            author: 'Unión Africana'
          },
          {
            type: 'p',
            text: 'La presión económica funciona como instrumento de política exterior. En 2020 la CEDEAO sancionó a Malí tras el golpe, y en 2023 amplió las sanciones a Níger y Burkina Faso. El uranio de Níger está bajo el sistema de garantías de la [[org:aiea|AIEA]], y el acceso a combustibles depende de las rutas costeras de África occidental, como analiza [[geo:energia-y-dependencias]].'
          }
        ]
      },
      {
        id: 'desbordamientos',
        title: 'Desbordamientos: cuándo se rompe el equilibrio',
        heading: 'Desbordamientos: cuándo se rompe el equilibrio',
        blocks: [
          {
            type: 'p',
            text: 'El conflicto se hizo abierto en 2023. Una propuesta de despliegue de una fuerza de la CEDEAO dejó a Níger al borde de un enfrentamiento: el país cerró su espacio aéreo y amenazó con atacar los vuelos. En diciembre de 2023 Níger consiguió la destitución del representante especial de la ONU para el Sahel.'
          },
          {
            type: 'p',
            text: 'La misma lógica se aplicó al mantenimiento de la paz. En diciembre de 2023 el Consejo de Seguridad aprobó el cierre y la retirada de MINUSMA antes de marzo de 2024, con un componente policial previsto para la transición. La fuerza, creada en 2013, había perdido acceso, mandato y legitimidad ante los Estados.'
          },
          {
            type: 'ul',
            items: [
              'Acuerdo de Argel de 2015: devolvió el orden a Malí, pero no desarmó a los jihadistas.',
              'Retirada de Barkhane en 2021: dejó sin vigilancia las rutas de Liptako-Gourma.',
              'Llegada del grupo Wagner en 2019 y 2020: cambió el modo de hacer la guerra.',
              'Suspensión de la CEDEAO en 2023: primer caso de expulsión por golpes de Estado.',
              'Guerra de Sudán desde abril de 2023: traslada la presión a Níger, Chad y Camerún.'
            ]
          },
          {
            type: 'p',
            text: 'La guerra en [[geo:guerra-en-ucrania|Ucrania]] ha convertido el Sahel en plaza de reclutamiento y en mercado de desvíos. Parte de la munición europea se ha desviado hacia el mercado regional a cambio de combatientes. Ese intercambio convierte un conflicto local en una variable de la seguridad europea.'
          },
          {
            type: 'quote',
            text: 'Los Miembros de la Organización se abstendrán del recurso a la fuerza, salvo que sea en defensa propia o en interés de la seguridad de la Organización.',
            cite: 'Carta de las Naciones Unidas, artículo 2, apartado 4',
            author: 'Organización de las Naciones Unidas'
          },
          {
            type: 'p',
            text: 'Las consecuencias se miden en legitimidad. Los tres golpes siguen sin reconocimiento de la [[org:onu|ONU]] y la CEDEAO mantiene las sanciones. El discurso de soberanía refuerza un [[nacionalismo]] de Estado que choca con la tradición del [[federalismo]] regional. En el terreno, los jihadistas han recuperado territorio rural.'
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
            text: 'Los escenarios siguientes no son predicciones sino consecuencias plausibles de decisiones ya tomadas. Ninguno es inevitable, porque la región depende de decisiones que se toman en Níger, Bamako, Kiev, Washington y Riad. Cada uno se distingue por una variable que ya se puede observar.'
          },
          {
            type: 'ul',
            items: [
              'Bloque propio: los tres países consolidan su comunidad y aceptan seguridad a largo plazo.',
              'Relajación regional: la CEDEAO levanta sanciones y negocia con Níger la libre circulación.',
              'Presencia europea estable: Francia y la Unión Europea aportan fondos y formación sin tropas.',
              'Avance jihadista consolidado: los grupos armados ocupan más territorio rural y se alimentan mejor.',
              'Desgaste por los golpes: fracasan, y la región entra en un ciclo de golpes y contragolpes.'
            ]
          },
          {
            type: 'p',
            text: 'Las variables decisivas son conocidas y ninguna depende de un solo actor. Cuenta el dinero: la ayuda, los créditos y los contratos mineros que llegan desde fuera. Cuenta también la comida, porque una crisis de precios agrícolas puede bastar para reanimar el conflicto. También cuenta el calendario, porque el preaviso de doce meses de la retirada venció en enero de 2025.'
          },
          {
            type: 'p',
            text: 'En el plano [[geo:orden-multipolar|multipolar]] el caso es modélico: una potencia en retirada cede su lugar a otra sin asumir el coste. Rusia no busca ocupar el territorio, sino asegurar acceso a materias primas, reconocimiento y aliados. China ofrece crédito, material y acceso preferente a materias primas.'
          },
          {
            type: 'p',
            text: 'Los actores externos más visibles no son Europa ni Estados Unidos, sino Rusia, China, Turquía y los países del golfo Pérsico. Todos compiten por contratos de recursos y esa carrera favorece a quien paga mejor, no a quien pertenece a la región. Desde la mirada de la [[ecopolitica]], la seguridad depende del agua y del uso de la tierra.'
          },
          {
            type: 'p',
            text: 'Conviene terminar con una advertencia sobre el método. Las cifras sobre el Sahel mezclan años distintos y fuentes con cobertura distinta, así que los totales deben leerse como órdenes de magnitud. Los mecanismos, en cambio, están bien documentados y no cambian de signo entre informes.'
          }
        ]
      }
    ],
    related: ['geo:orden-multipolar', 'geo:guerra-en-ucrania', 'geo:energia-y-dependencias', 'nacionalismo'],
    references: [
      {
        title: 'Resolución 2540 (2023) sobre la situación en Malí',
        author: 'Consejo de Seguridad de las Naciones Unidas',
        publisher: 'Naciones Unidas, Nueva York',
        year: 2023,
        type: 'documento',
        url: 'https://docs.un.org/en/S/RES/2540(2023)'
      },
      {
        title: 'SIPRI Yearbook 2024: Armed Conflict and the World Order',
        author: 'Stockholm International Peace Research Institute',
        publisher: 'SIPRI, Estocolmo',
        year: 2024,
        type: 'informe',
        url: 'https://www.sipri.org/yearbook/2024'
      },
      {
        title: 'The State of Food Security and Nutrition in the World 2023',
        author: 'FAO, FIDA, UNICEF, PMA y OMS',
        publisher: 'Organización de las Naciones Unidas, Roma',
        year: 2023,
        type: 'informe',
        url: 'https://www.fao.org/publications/home/fao-flagship-publications/the-state-of-food-security-and-nutrition-in-the-world'
      },
      {
        title: 'Global Terrorism Index 2024',
        author: 'Institute for Economics and Peace',
        publisher: 'Institute for Economics and Peace, Sídney',
        year: 2024,
        type: 'informe',
        url: 'https://www.visionofhumanity.org/maps/global-terrorism-index-2024/'
      },
      {
        title: 'Acuerdo de paz y reconciliación en Malí',
        author: 'Gobierno de la República de Malí y los movimientos firmantes del Azawad',
        publisher: 'Naciones Unidas / Equipo de Mediación (Argelia, CEDEAO, UA, ONU, OCI, UE); S/2015/363 y S/2015/563',
        year: 2015,
        type: 'documento',
        url: 'https://www.un.org/en/pdfs/EN-ML_150620_Accord-pour-la-paix-et-la-reconciliation-au-Mali_Issu-du-Processus-d%27Alger.pdf'
      },
      {
        title: 'World Population Prospects 2024',
        author: 'División de Población de las Naciones Unidas',
        publisher: 'Naciones Unidas, Nueva York',
        year: 2024,
        type: 'informe',
        url: 'https://population.un.org/wpp/'
      },
      {
        title: 'Comunicado sobre la suspensión de Burkina Faso, Malí y Níger',
        author: 'Comunidad Económica de los Estados de África Occidental',
        publisher: 'CEDEAO, Abuja',
        year: 2023,
        type: 'documento',
        url: 'https://www.ecowas.int'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
