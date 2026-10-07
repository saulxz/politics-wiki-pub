(function (PW) {
  'use strict';
  PW.geo = PW.geo || {};
  PW.geo['migraciones-y-demografia'] = {
    kind: 'geopolitica',
    slug: 'migraciones-y-demografia',
    title: 'Migraciones y demografía global',
    subtitle: 'Trescientos millones de migrantes, diez mil millones de personas y el reparto político que esas cifras imponen',
    category: 'Geopolítica',
    tags: ['migración', 'demografía', 'refugiados', 'asilo', 'remesas', 'envejecimiento poblacional'],
    updated: '2026-09-27',
    region: 'Sistema internacional',
    timeFrame: '1951-actualidad',
    categories: ['Geopolítica', 'Demografía', 'Sociedad internacional'],
    actors: [
      { name: 'Organización de las Naciones Unidas', role: 'marco normativo y protección de los desplazados', power: 'alta' },
      { name: 'Unión Europea', role: 'política común de asilo, migración y control de fronteras', power: 'alta' },
      { name: 'Alto Comisionado de las Naciones Unidas para los Refugiados', role: 'protección internacional y reconocimiento de solicitudes', power: 'media' },
      { name: 'Organización Internacional para las Migraciones', role: 'gestión de fronteras y asistencia a desplazados', power: 'media' },
      { name: 'Estados Unidos de América', role: 'mayor receptor mundial y titular de las rutas terrestres', power: 'alta' }
    ],
    infobox: {
      caption: 'Migraciones y demografía global',
      color: '#3f6f6b',
      rows: [
        ['Período', '1951-actualidad'],
        ['Norma fundacional', 'Convención sobre el Estatuto de los Refugiados de 1951'],
        ['Acuerdos recientes', 'Pacto Mundial de 2018 y pacto europeo de 2020'],
        ['Migrantes internacionales', 'Más de 300 millones según la ONU'],
        ['Remesas anuales', 'Por encima de 600.000 millones de dólares'],
        ['Proyección de población', 'Unos 10.500 millones a finales de siglo'],
        ['Agrupación del catálogo', 'Sistema internacional']
      ]
    },
    summary: 'Dos tendencias demográficas gobiernan hoy la política internacional: la movilidad creciente de personas entre Estados y el envejecimiento de unos países frente al crecimiento acelerado de otros. Ambas condicionan el reconocimiento del asilo, la competencia por el trabajo cualificado, el comercio de servicios y el peso electoral dentro de los organismos internacionales.',
    sections: [
      {
        id: 'panorama',
        title: 'Panorama: dos curvas que se cruzan',
        heading: 'Panorama: dos curvas que se cruzan',
        blocks: [
          {
            type: 'p',
            text: 'Las estimaciones de las Naciones Unidas sitúan los migrantes internacionales en más de 300 millones de personas a mediados de 2024. El Alto Comisionado para los Refugiados calcula que unos 60 millones huyen de la guerra, la persecución o la violencia política. Cerca del cuatro por ciento de la humanidad vive hoy fuera del país donde nació.'
          },
          {
            type: 'p',
            text: 'El marco normativo se construyó en tres oleadas sucesivas. La Convención sobre el Estatuto de los Refugiados se adoptó en 1951 y entró en vigor en 1954. En 2018 los Estados aprobaron por consenso el Pacto Mundial sobre Migración, y la [[org:union-europea|Unión Europea]] cerró en 2020 su Pacto sobre Migración y Asilo.'
          },
          {
            type: 'table',
            head: ['Hito', 'Fecha', 'Aporte'],
            rows: [
              ['Convención de 1951', '1951-1954', 'Definición legal del refugiado'],
              ['Convención de la OUA', '1969', 'Amplía la protección en África'],
              ['Pacto Mundial', '2018', 'Doce objetivos no obligatorios'],
              ['Pacto europeo', '2020', 'Reglas de asilo y fronteras']
            ]
          },
          {
            type: 'p',
            text: 'La otra curva es demográfica. Las proyecciones de las Naciones Unidas sitúan la población mundial en torno a 10.500 millones de personas a finales de siglo. El crecimiento se concentra en África subsahariana mientras Europa y el Asia oriental envejecen. Las economías avanzadas captan trabajo y las de origen lo exportan.'
          },
          {
            type: 'ul',
            items: [
              'Guerra y conflicto: Ucrania, Sudán y el Sahel empujan a millones de personas.',
              'Clima: sequías, inundaciones y retirada del mar alteran la movilidad rural.',
              'Trabajo: las diferencias salariales y la demanda de mano de obra fijan las rutas.',
              'Redes: la familia y la comunidad organizan cada trayecto.'
            ]
          },
          {
            type: 'p',
            text: 'La mayoría de los desplazamientos humanos no cruza fronteras. China, India y Estados Unidos mueven a cientos de millones de personas dentro de su propio territorio. Las cifras internacionales miden solo la parte transfronteriza, que es la que produce efectos jurídicos y políticos.'
          }
        ]
      },
      {
        id: 'actores',
        title: 'Actores: quién decide sobre la movilidad',
        heading: 'Actores: quién decide sobre la movilidad',
        blocks: [
          {
            type: 'p',
            text: 'El [[org:onu|sistema de las Naciones Unidas]] reparte las competencias. El Alto Comisionado para los Refugiados protege a quien cumple la definición de refugiado y resuelve el reconocimiento individual de las solicitudes. La Organización Internacional para las Migraciones atiende a los desplazados, apoya a los Estados y gestiona la asistencia en las rutas de salida.'
          },
          {
            type: 'ul',
            items: [
              'Alto Comisionado para los Refugiados: protección jurídica y reconocimiento individual.',
              'Organización Internacional para las Migraciones: asistencia, transporte y datos.',
              'Unión Europea: norma común, reparto de solicitudes y frontera exterior.',
              'Estados de tránsito: controles y preparación de las salidas.'
            ]
          },
          {
            type: 'p',
            text: 'La [[org:union-europea|Unión Europea]] es el laboratorio del modelo contemporáneo. El Pacto de 2020 sustituyó al Reglamento de Dublín y creó un mecanismo de solidaridad entre Estados. También trasladó el control a la frontera exterior mediante Frontex, y varios países del Este rechazaron el reparto de solicitudes.'
          },
          {
            type: 'table',
            head: ['Actor', 'Instrumento', 'Interés'],
            rows: [
              ['Unión Europea', 'Pacto de 2020 y Frontex', 'Reparto y control exterior'],
              ['Estados Unidos', 'Títulos legales de admisión', 'Filtro por vía terrestre'],
              ['Estados de tránsito', 'Acuerdos de readmisión', 'Presión sobre el origen'],
              ['Empleadores', 'Contratación en el extranjero', 'Mano de obra barata']
            ]
          },
          {
            type: 'p',
            text: 'Turquía es el caso más claro de Estado receptor en la región. El Alto Comisionado para los Refugiados contabiliza allí más de tres millones de refugiados sirios. El acuerdo firmado con la [[org:union-europea|Unión Europea]] en marzo de 2016 aportó fondos a cambio de contener las salidas por el mar Egeo.'
          },
          {
            type: 'p',
            text: 'No solo los Estados mueven personas. Las empresas reclutan mano de obra en el extranjero y los municipios ofrecen programas de integración. Las comunidades de la diáspora financian trayectos e inversiones, y votan en los países de origen, lo que convierte la migración en un tema electoral interno.'
          }
        ]
      },
      {
        id: 'dimensiones',
        title: 'Dimensiones: demográfica, económica, jurídica y climática',
        heading: 'Dimensiones: demográfica, económica, jurídica y climática',
        blocks: [
          {
            type: 'p',
            text: 'La dimensión demográfica opone rejuvenecimiento y envejecimiento. En buena parte de África subsahariana la fertilidad se mantiene por encima de cuatro hijos por mujer, según las estimaciones de las Naciones Unidas. En Europa oriental, Alemania, Italia y Japón la natalidad lleva décadas por debajo del nivel de sustitución.'
          },
          {
            type: 'p',
            text: 'La dimensión económica tiene dos caras. La Organización del Trabajo estimó unos 280 millones de trabajadores migrantes internacionales en su edición de 2022. El Banco Mundial vincula esas cifras con remesas superiores a 600.000 millones de dólares anuales, enviadas sobre todo a América Latina y al sur de Asia. Además, el comercio de servicios enriquece las economías de origen, como analiza [[geo:comercio-y-globalizacion]].'
          },
          {
            type: 'ul',
            items: [
              'Población activa: la migración sustituye mano de obra que ya no existe en origen.',
              'Remesas: instrucción pública, salud y consumo de los hogares de origen.',
              'Formación: fuga de cerebros y retorno con cualificación nueva.',
              'Servicios: la [[org:omc|OMC]] discute el acceso al trabajo en el extranjero.'
            ]
          },
          {
            type: 'p',
            text: 'La dimensión jurídica es la más tensa. La Convención de 1951 protege a quien cumple la definición de refugiado y prohíbe la devolución. El instrumento se ha ampliado con la Convención de la OUA de 1969 y con las formas complementarias de protección, siempre discutidas porque no dependen de la convención principal.'
          },
          {
            type: 'quote',
            text: 'Toda persona tiene derecho a circular libremente, elegir su residencia, salir de su país y regresar a él.',
            cite: 'Declaración Universal de Derechos Humanos, artículo 13',
            author: 'Organización de las Naciones Unidas'
          },
          {
            type: 'p',
            text: 'La dimensión ambiental entra en los foros multilaterales. La conferencia de las partes de 2022 creó un fondo de pérdidas y daños, con aportes iniciales anunciados de unos 700 millones de dólares. La reunión de 2023 reconoció por primera vez el desplazamiento causado por el clima en una decisión multilateral. La [[ecopolitica]] conecta esos daños con el acceso desigual al agua y a la tierra.'
          }
        ]
      },
      {
        id: 'desbordamientos',
        title: 'Desbordamientos: crisis humanitarias y cierre de espacios',
        heading: 'Desbordamientos: crisis humanitarias y cierre de espacios',
        blocks: [
          {
            type: 'p',
            text: 'El episodio mayor fue la crisis europea de 2015 y 2016. El Alto Comisionado para los Refugiados registró más de un millón de llegadas a Europa en 2015, por tierra y por mar. La respuesta incluyó controles fronterizos, un acuerdo con Turquía en marzo de 2016 y el cierre de la ruta de los Balcanes, que desvió las rutas hacia el centro del Mediterráneo.'
          },
          {
            type: 'p',
            text: 'El uso de la migración como instrumento de presión es más reciente. En 2021 la frontera entre Bielorrusia y Polonia se convirtió en arma de negociación, y Polonia suspendió el derecho de asilo. Ese episodio fijó el precedente de que un Estado miembro puede limitar a otro, y a la propia Unión Europea desde dentro.'
          },
          {
            type: 'ul',
            items: [
              'Mar Mediterráneo: millares de muertos en rutas cada vez más restringidas.',
              'Frontera de Belorrusia: instrumentalización de personas en 2021.',
              'Estados Unidos: cierre del protocolo sanitario en 2023.',
              'Guerra de Sudán: más de un millón de desplazados en 2023.',
            ]
          },
          {
            type: 'p',
            text: 'La pandemia añadió otra crisis. En marzo de 2020 la mayoría de países cerraron sus fronteras durante semanas, y esos controles se mantienen en varias rutas. El cierre de la economía informal agravó la desprotección de los migrantes irregulares, y varios acuerdos de contratación internacional quedaron suspendidos sin plazo.'
          },
          {
            type: 'quote',
            text: 'Nadie podrá ser devuelto, repelido o extraditado hacia las fronteras del territorio en donde su vida o su libertad estuviera en peligro.',
            cite: 'Convención sobre el Estatuto de los Refugiados, artículo 33',
            author: 'Alto Comisionado de las Naciones Unidas para los Refugiados'
          },
          {
            type: 'p',
            text: 'El desplazamiento por la guerra alcanza cifras récord. La guerra de Sudán, iniciada en abril de 2023, obligó a más de un millón de personas a abandonar el país en los meses siguientes. La vía central hacia el Chad y el Egipto muestra cómo un conflicto local se convierte en asunto regional y humanitario.'
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
            text: 'Los cuatro escenarios siguientes describen consecuencias plausibles de decisiones ya tomadas. Ninguno es inevitable, porque la dirección depende de los gobiernos, de la Unión Europea y de las empresas que contratan. La diferencia entre ellos está en el uso del derecho, no en la demografía.'
          },
          {
            type: 'ul',
            items: [
              'Vías legales: se amplían los permisos de trabajo y el reconocimiento de títulos.',
              'Externalización: los Estados compran el control de la frontera a terceros.',
              'Restricción: suben las barreras y crece la migración irregular.',
              'Demografía: al envejecer, los países de origen reducen la exportación de trabajo.'
            ]
          },
          {
            type: 'p',
            text: 'Las variables decisivas se pueden enumerar. La primera es la natalidad: si los países de origen envejecen, pierden el incentivo de exportar trabajo. La segunda es el coste de las remesas, reducido por las nuevas tecnologías de pago. La tercera es la apertura de canales legales de migración laboral.'
          },
          {
            type: 'p',
            text: 'El caso confirma la tendencia que describe [[geo:orden-multipolar|el orden multipolar]]. El peso demográfico se desplaza hacia el Sur Global y eso reconfigura el voto en los organismos internacionales. En la competencia entre [[geo:competencia-estados-unidos-china|Estados Unidos y China]] la migración laboral se vuelve instrumento de influencia, como en la carrera tecnológica de [[geo:carrera-tecnologica]].'
          },
          {
            type: 'p',
            text: 'Los marcos ideológicos ordenan el debate. El [[nacionalismo]] alimenta la restricción, porque la migración se presenta como amenaza al empleo y a la identidad. El [[federalismo]] sostiene el reparto obligatorio de solicitudes entre Estados. El [[pacifismo]] se opone al uso de la fuerza en las fronteras, y la [[ecopolitica]] exige contar a los desplazados climáticos en los acuerdos de cooperación.'
          },
          {
            type: 'p',
            text: 'Conviene terminar con una advertencia sobre el método. Las cifras de migración y población cambian según la fuente y el año, así que deben leerse como órdenes de magnitud. Los mecanismos, en cambio, están bien documentados: el reconocimiento individual, la externalización de la frontera y el peso de las remesas no dependen de ninguna estimación concreta.'
          }
        ]
      }
    ],
    related: ['geo:orden-multipolar', 'geo:competencia-estados-unidos-china', 'geo:comercio-y-globalizacion', 'nacionalismo'],
    references: [
      {
        title: 'Convención sobre el Estatuto de los Refugiados',
        author: 'Organización de las Naciones Unidas',
        publisher: 'Naciones Unidas, Ginebra',
        year: 1951,
        type: 'documento',
        url: 'https://www.unhcr.org/about-us/overview-of-refugee-agency/who-we-protect/what-is-a-refugee'
      },
      {
        title: 'Pacto Mundial sobre Migración',
        author: 'Organización de las Naciones Unidas',
        publisher: 'Asamblea General de las Naciones Unidas, Nueva York',
        year: 2018,
        type: 'documento',
        url: 'https://www.un.org/es/conf/migration/global-compact-for-safe-orderly-regular-migration.shtml'
      },
      {
        title: 'World Migration Report 2024',
        author: 'Organización Internacional para las Migraciones',
        publisher: 'OIM, Ginebra',
        year: 2024,
        type: 'informe',
        url: 'https://worldmigrationreport.iom.int/'
      },
      {
        title: 'World Development Report 2023: Migrants, Refugees, and Societies',
        author: 'Banco Mundial',
        publisher: 'Banco Mundial, Washington',
        year: 2023,
        type: 'informe',
        url: 'https://www.worldbank.org/en/publication/wdr2023'
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
        title: 'Pacto sobre Migración y Asilo',
        author: 'Consejo de la Unión Europea',
        publisher: 'Unión Europea, Bruselas',
        year: 2020,
        type: 'documento',
        url: 'https://www.consilium.europa.eu/es/policies/migration-policy/'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
