(function (PW) {
  'use strict';
  PW.orgs = PW.orgs || {};
  PW.orgs['fmi'] = {
    slug: 'fmi',
    name: 'Fondo Monetario Internacional',
    title: 'Fondo Monetario Internacional',
    shortName: 'FMI',
    orgType: 'Organización mundial',
    founded: 1944,
    headquarters: 'Washington, Estados Unidos',
    leader: 'Dirección General del FMI (Directora Gerente)',
    members: 191,
    memberSince: '1945',
    colors: ['#1f6f5c'],
    category: 'Organizaciones internacionales',
    tags: ['organizaciones internacionales', 'economía internacional', 'sistema monetario', 'ajuste estructural', 'política financiera'],
    updated: '2026-09-27',
    subtitle: 'Organización internacional que regula el sistema monetario mundial, vigila las políticas económicas de sus miembros y concede préstamos con condiciones',
    summary: 'El Fondo Monetario Internacional es la institución monetaria de la posguerra: mantiene el sistema de tipos de cambio, vigila las políticas económicas de ciento noventa y un países y financia a los Estados que tienen problemas de balanza de pagos.',
    infobox: {
      caption: 'FMI',
      color: '#1f6f5c',
      rows: [
        ['Fundación', 'Conferencias de Bretton Woods, julio de 1944'],
        ['Inicio de operaciones', '1 de diciembre de 1945'],
        ['Sede', 'Washington, Estados Unidos'],
        ['Dirección', 'Dirección General, con mandato de cinco años'],
        ['Órganos', 'Junta de Gobernadores, Directorio Ejecutivo y Directorio Financiero'],
        ['Miembros', '191 países'],
        ['Voto', 'Proporcional a las cuotas; el 85% bloquea decisiones'],
        ['Moneda', 'Derechos especiales de giro, activo de reserva internacional']
      ]
    },
    sections: [
      {
        id: 'origen',
        heading: 'Origen: por qué se creó',
        blocks: [
          {
            type: 'p',
            text: 'El Fondo nace de la conferencia de Bretton Woods, celebrada en julio de 1944 en New Hampshire con cuarenta y cuatro países. La Gran Depresión y la crisis de los años treinta habían mostrado el daño que causaban el proteccionismo y las devaluaciones competitivas. La respuesta fue un sistema monetario internacional con reglas comunes.'
          },
          {
            type: 'p',
            text: 'El diseño original consistía en tipos de cambio fijos pero ajustables frente al dólar, y el dólar mismo convertible en oro. También se pactaron controles de capital para permitir que los países ajustaran su economía sin una crisis de balanza de pagos. El sistema se puso en marcha tras la Segunda Guerra Mundial y se mantuvo hasta 1971.'
          },
          {
            type: 'ul',
            items: [
              '1944: conferencias de Bretton Woods, con el FMI y el Banco Mundial como instituciones hermanas.',
              '1945: entrada en vigor de los Estatutos y comienzo de las operaciones del Fondo.',
              '1971: decisión de Nixon de poner fin a la convertibilidad del dólar y caída de los tipos fijos.',
              '1978: creación de los derechos especiales de giro como activo de reserva internacional.',
              '2009: revisión del sistema de cuotas, con un desplazamiento del peso hacia China.'
            ]
          },
          {
            type: 'p',
            text: 'Durante las décadas posteriores el papel del Fondo cambió. La crisis de la deuda de los años ochenta convirtió a la institución en prestamista, con programas de ajuste en América Latina y en África.'
          }
        ]
      },
      {
        id: 'estructura',
        heading: 'Estructura: órganos y decisión',
        blocks: [
          {
            type: 'p',
            text: 'La Junta de Gobernadores reúne a todos los Estados miembros y es el órgano supremo. Delega el trabajo en el Directorio Ejecutivo, formado por veinticuatro directores que representan a Estados o grupos de Estados.'
          },
          {
            type: 'table',
            head: ['Órgano', 'Composición', 'Función'],
            rows: [
              ['Junta de Gobernadores', 'Todos los Estados miembros', 'Órgano supremo y revisión de cuotas'],
              ['Directorio Ejecutivo', 'Veinticuatro directores', 'Decisiones operativas y seguimiento de programas'],
              ['Dirección General', 'Un jefe con mandato de cinco años', 'Dirección de la institución y negociación de créditos'],
              ['Comité Financiero y Monetario', 'Veinticuatro miembros', 'Vigilancia de la estabilidad financiera internacional'],
              ['Personal técnico', 'Funcionarios en Washington', 'Investigación, vigilancia y asistencia técnica']
            ]
          },
          {
            type: 'p',
            text: 'El voto se reparte según las cuotas, que combinan el producto interior bruto, la balanza comercial y las reservas. Las decisiones más importantes exigen el 85% de los votos, de modo que un solo país con cuota suficiente puede bloquearlas.'
          },
          {
            type: 'ul',
            items: [
              'Las cuotas se revisan cada cinco años en una revisión general.',
              'Los directores son designados por los países o los grupos que los eligen.',
              'La representación del Directorio dura dos años y se renueva por mitades.',
              'El Directorio aprueba los acuerdos de préstamo y sus condiciones.'
            ]
          }
        ]
      },
      {
        id: 'funciones',
        heading: 'Funciones: qué hace de verdad',
        blocks: [
          {
            type: 'p',
            text: 'La vigilancia económica es la función más constante. Cada Estado miembro celebra consultas en el marco del artículo IV y la institución publica un informe con su situación y sus recomendaciones. Cada año se presentan dos sesiones de revisión en el Directorio.'
          },
          {
            type: 'ul',
            items: [
              'Vigilancia de las políticas económicas de todos los Estados miembros.',
              'Asistencia técnica para construir instituciones y estadísticas fiables.',
              'Préstamos con condiciones para equilibrar la balanza de pagos.',
              'Asignaciones de derechos especiales de giro como activo de reserva.',
              'Estudios sobre la economía mundial y sobre el sistema financiero internacional.'
            ]
          },
          {
            type: 'p',
            text: 'La actividad prestamista es la más conocida. El Fondo ofrece créditos a corto plazo para financiar la balanza de pagos y préstamos a largo plazo para apoyar los planes de desarrollo. Cada acuerdo incluye condiciones que el país debe aceptar y cumplir.'
          },
          {
            type: 'table',
            head: ['Instrumento', 'Destinatario', 'Uso'],
            rows: [
              ['Acuerdo de crédito', 'Países con crisis de balanza de pagos', 'Financiación a corto plazo'],
              ['Facilidad ampliada', 'Países con crisis prolongada', 'Reestructuración de la deuda'],
              ['Fondo de Crecimiento y Reducción de la Pobreza', 'Países de renta baja', 'Reducción de la pobreza'],
              ['Derechos especiales de giro', 'Todos los miembros', 'Activo de reserva internacional'],
              ['Asistencia técnica', 'Todos los miembros', 'Capacidad institucional y estadística']
            ]
          },
          {
            type: 'p',
            text: 'La transparencia es la principal diferencia con las décadas anteriores. Las cartas de intención y los acuerdos de préstamo se publican en el sitio de la institución, lo que permite seguir el cumplimiento de cada compromiso.'
          }
        ]
      },
      {
        id: 'miembros',
        heading: 'Miembros: composición y voto',
        blocks: [
          {
            type: 'p',
            text: 'El Fondo agrupa a ciento noventa y un países, la gran mayoría Estados miembros de la ONU, más Mónaco, Liechtenstein, Andorra, San Marino y Kosovo, que no son miembros de la Organización de las Naciones Unidas. Ningún Estado ha sido expulsado, y otros han solicitado la baja en el pasado.'
          },
          {
            type: 'ul',
            items: [
              'La cuota de Estados Unidos supera el 16% de los votos y le permite vetar decisiones.',
              'Japón, China, Alemania, Reino Unido y Francia forman el segundo núcleo de poder.',
              'Los votos siguen de lejos a la población, lo que se señala como falta de representatividad.',
              'Los países en desarrollo han ganado peso tras las revisiones de cuotas de 2010 y 2023.'
            ]
          },
          {
            type: 'p',
            text: 'El reparto de cuotas se calcula con variables económicas y no con criterios políticos. Cada revisión general puede aumentarlas, y el aumento se reparte después entre los países que han crecido más rápido. El resultado es que las grandes potencias emergentes han recuperado votos sin alcanzar el de Estados Unidos.'
          },
          {
            type: 'p',
            text: 'Hay también una diferencia entre miembro y prestatario. No todos los países acceden a los créditos, porque el Fondo solo presta a quien puede devolver y porque las condiciones son duras para las economías pequeñas. En la práctica, menos de un tercio de los miembros ha recibido alguna vez un préstamo.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas: por qué se la discute',
        blocks: [
          {
            type: 'p',
            text: 'La crítica más pesada es la de los años ochenta y noventa. El Fondo condicionó sus créditos a la apertura económica, la desregulación y la liberalización de los flujos de capital, un paquete que se ha relacionado con las crisis de deuda de América Latina y con la crisis asiática de 1997.'
          },
          {
            type: 'ul',
            items: [
              'Condicionalidad: los ajustes exigidos incluían recortes del gasto público.',
              'La crisis financiera de 2008 no fue anticipada por la vigilancia del Fondo.',
              'Los programas griegos y portugueses fueron criticados por su dureza social.',
              'La distribución de cuotas no corresponde al peso poblacional de los países.',
              'Dependencia de decisiones políticas que el Fondo no controla.',
            ]
          },
          {
            type: 'p',
            text: 'La segunda crítica se refiere a la crisis de la zona del euro. En Grecia, Portugal, Irlanda y España, el Fondo exigió consolidaciones fiscales rápidas en un momento de caída de la actividad. Varios países salieron del programa con una deuda más alta que al entrar, y el propio Fondo reconoció después que la austeridad aislada había sido un error.'
          },
          {
            type: 'p',
            text: 'La tercera línea es la de la legitimación de una institución técnica que no eligen los ciudadanos y cuyas decisiones afectan a varios países a la vez.'
          },
          {
            type: 'p',
            text: 'A esas objeciones se responde con los resultados. El Fondo impidió incumplimientos de pago en México en 1995 y financió respuestas de emergencia durante la pandemia, con una asignación de derechos especiales de giro en 2021. También impulsó, con el [[org:g20|G20]], un marco común para el alivio de deudas.'
          }
        ]
      }
    ],
    categories: ['Organizaciones', 'Economía internacional', 'Instituciones financieras'],
    related: ['org:banco-mundial', 'org:onu', 'org:g20', 'liberalismo', 'reformismo'],
    references: [
      {
        title: 'Estatutos del Fondo Monetario Internacional',
        author: 'Fondo Monetario Internacional',
        publisher: 'FMI, Washington (Resolución 45-3 de la Junta de Governors, 28.6.1990)',
        year: 1992,
        type: 'documento',
        url: 'https://www.imf.org/external/pubs/ft/aa/pdf/aa.pdf'
      },
      {
        title: 'Annual Report 2024',
        author: 'Fondo Monetario Internacional',
        publisher: 'Fondo Monetario Internacional, Washington',
        year: 2024,
        type: 'informe'
      },
      {
        title: 'The IMF and Its Critics: A Study of International Monetary Cooperation',
        author: 'Joseph P. Stiglitz',
        publisher: 'Princeton University Press, Princeton',
        year: 1986,
        type: 'libro'
      },
      {
        title: 'Independent Evaluation of the Role of the IMF in the 2007-2008 Global Financial Crisis',
        author: 'Oficina de Evaluación Independiente del FMI',
        publisher: 'Fondo Monetario Internacional, Washington',
        year: 2011,
        type: 'informe'
      },
      {
        title: 'The Global Financial Crisis: From US subprime mortgages to European debt crisis',
        author: 'Fondo Monetario Internacional',
        publisher: 'Fondo Monetario Internacional, Washington',
        year: 2012,
        type: 'informe'
      },
      {
        title: 'International Monetary Fund',
        author: 'Encyclopaedia Britannica',
        publisher: 'Encyclopaedia Britannica, Inc.',
        year: 2025,
        type: 'enciclopedia',
        url: 'https://www.britannica.com/topic/International-Monetary-Fund'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
