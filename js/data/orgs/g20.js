(function (PW) {
  'use strict';
  PW.orgs = PW.orgs || {};
  PW.orgs['g20'] = {
    slug: 'g20',
    name: 'Grupo de los veinte',
    title: 'Grupo de los veinte',
    shortName: 'G20',
    orgType: 'Organización mundial',
    founded: 1999,
    headquarters: 'Sin sede fija, con presidencia rotatoria del país anfitrión',
    leader: 'Presidencia rotatoria del G20 (en 2026, Sudáfrica)',
    members: 21,
    memberSince: '1999',
    colors: ['#37474f'],
    category: 'Organizaciones internacionales',
    tags: ['organizaciones internacionales', 'finanzas internacionales', 'economía global', 'coordinación económica', 'crisis financiera'],
    updated: '2026-09-27',
    subtitle: 'Foro de países industrializados y emergentes que coordina la política económica mundial al más alto nivel',
    summary: 'El G20 reúne a diecinueve países, la Unión Europea y la Unión Africana para acordar respuestas comunes a las crisis económicas. Es un foro de coordinación sin tratado fundacional.',
    infobox: {
      caption: 'G20',
      color: '#37474f',
      rows: [
        ['Origen', 'Reunión de ministros de Finanzas en diciembre de 1999'],
        ['Sede', 'Ninguna, con presidencia rotatoria anual'],
        ['Presidencia en 2026', 'Sudáfrica'],
        ['Miembros', 'Diecinueve países, la Unión Europea y la Unión Africana'],
        ['Invitado permanente', 'España, desde la cumbre de Toronto de 2010'],
        ['Cumbre de líderes', 'Desde 2008'],
        ['Origen de la idea', 'Paul Martin, ministro de Finanzas de Canadá'],
        ['Carácter', 'Foro de coordinación, sin tratado fundacional']
      ]
    },
    sections: [
      {
        id: 'origen',
        heading: 'Origen: por qué se creó',
        blocks: [
          {
            type: 'p',
            text: 'El G20 nació de una crisis. La crisis financiera asiática de 1997 dejó a las economías al descubierto, y la propuesta de Paul Martin, ministro de Finanzas de Canadá, fue crear un grupo que incluyera a los países emergentes.'
          },
          {
            type: 'ul',
            items: [
              '1999: primera reunión de ministros de Finanzas y bancos centrales en Washington.',
              '2001: primera cumbre de líderes, con motivo del ataque del 11 de septiembre.',
              '2008: el grupo se convierte en una cumbre de jefes de Estado o de gobierno.',
              '2009: la cumbre de Londres compromete 1,1 billones de dólares de estímulo.',
              '2010: España entra como invitado permanente, por su peso económico.'
            ]
          },
          {
            type: 'p',
            text: 'La escalada a cumbre de líderes llegó por la crisis de 2008. Hasta entonces solo se reunían los ministros de Finanzas, y el mercado financiero mostró que eso no bastaba.'
          }
        ]
      },
      {
        id: 'estructura',
        heading: 'Estructura: órganos y funcionamiento',
        blocks: [
          {
            type: 'p',
            text: 'El G20 no tiene tratado ni secretaría. La presidencia la asume el país anfitrión de la cumbre durante un año y desaparece al terminar.'
          },
          {
            type: 'ul',
            items: [
              'La cumbre de líderes se reúne una vez al año.',
              'Los ministros de Finanzas se reunen antes de cada cumbre.',
              'Cada país tiene un sherpa, que es su representante personal.',
              'Hay grupos de trabajo y un comité permanente de coordinación.',
              'La secretaría técnica la aporta el país anfitrión.'
            ]
          },
          {
            type: 'p',
            text: 'El grupo que organiza las reuniones ministeriales no publica sus documentos. Esa opacidad se señala a menudo como una limitación del G20, especialmente para los países que no lo integran.'
          }
        ]
      },
      {
        id: 'funciones',
        heading: 'Funciones: qué hace de verdad',
        blocks: [
          {
            type: 'p',
            text: 'La función más visible es la respuesta a las crisis. En 2009 el grupo acordó una respuesta fiscal combinada para la crisis mundial.'
          },
          {
            type: 'ul',
            items: [
              'Reforma de las cuotas del [[org:fmi|Fondo Monetario Internacional]].',
              'Creación del Consejo de Estabilidad Financiera en 2009.',
              'Acuerdos de alivio de deuda para los países más pobres.',
              'Acuerdo marco sobre cooperación económica en 2023.',
              'Coordinación de la respuesta a pandemias y ayuda global.',
              'Acuerdos sobre impuestos digitales y cambio climático.'
            ]
          },
          {
            type: 'p',
            text: 'La tercera función es la de poner cifras a los problemas. Los grandes paquetes de estímulo de 2009 y las decisiones sobre deuda de 2020 se tomaron en este marco, y no en la [[org:onu|ONU]] ni en la [[org:omc|OMC]].'
          }
        ]
      },
      {
        id: 'miembros',
        heading: 'Miembros: composición y acceso',
        blocks: [
          {
            type: 'p',
            text: 'El grupo tiene diecinueve países más la Unión Europea y la Unión Africana. Entró en 1999 el grupo de los siete más industrializados y se abrió después a los emergentes.'
          },
          {
            type: 'ul',
            items: [
              'Estados Unidos, Japón, Alemania, Reino Unido, Francia e Italia son los más industrializados.',
              'China, India, Brasil y Sudáfrica representan a los emergentes.',
              'La Unión Africana entró como miembro en 2023.',
              'España es invitada permanente desde la cumbre de Toronto de 2010.',
              'Otros Estados participan como invitados en una cumbre concreta.'
            ]
          },
          {
            type: 'p',
            text: 'El peso interno no sigue la lista de miembros. Estados Unidos, China, la Unión Europea y Japón concentran la mayor parte de la economía del grupo, y esa concentración sostiene la crítica sobre representatividad.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas: por qué se la discute',
        blocks: [
          {
            type: 'p',
            text: 'La primera crítica es la representatividad. El grupo reúne a los mayores comandos de la economía mundial, pero deja fuera a más de cien países en lo que respeta a población y a desarrollo.'
          },
          {
            type: 'ul',
            items: [
              'Los acuerdos no son vinculantes: no hay ningún tribunal que los aplique.',
              'La eficacia depende del país que preside cada año.',
              'Las grandes potencias pueden bloquear cualquier consenso.',
              'No se incluye a los países en desarrollo en la toma de decisiones.'
            ]
          },
          {
            type: 'p',
            text: 'La segunda línea es la del contenido. Las cumbres suelen terminar en declaraciones sin plazos ni verificación, y el acuerdo sobre subsidios industriales sigue siendo el punto de conflicto entre las grandes potencias.'
          }
        ]
      }
    ],
    categories: ['Organizaciones', 'Economía internacional', 'Gobernanza económica'],
    related: ['org:brics', 'org:fmi', 'org:onu', 'liberalismo', 'reformismo'],
    references: [
      {
        title: 'Comunicado de la cumbre de líderes de Londres',
        author: 'G20',
        publisher: 'G20, Londres (copia oficial alojada por el FMI)',
        year: 2009,
        type: 'documento',
        url: 'https://www.imf.org/external/np/sec/pr/2009/pdf/g20_040209.pdf'
      },
      {
        title: 'Declaración de la cumbre de líderes de Nueva Delhi (adoptada el 9 de septiembre de 2023)',
        author: 'G20',
        publisher: 'Presidencia del G20 2023 (India), Nueva Delhi',
        year: 2023,
        type: 'documento',
        url: 'https://www.mea.gov.in/images/CPV/G20-New-Delhi-Leaders-Declaration.pdf'
      },
      {
        title: 'G20: A History of the Global Economic Forum',
        author: 'John Kirton',
        publisher: 'G20 Information Centre, Toronto',
        year: 2013,
        type: 'libro'
      },
      {
        title: 'The G20 and the Global Financial Crisis',
        author: 'G20 Research Group',
        publisher: 'University of Toronto',
        year: 2010,
        type: 'informe'
      },
      {
        title: 'G20 Framework for Economic Policy Cooperation',
        author: 'G20',
        publisher: 'G20, Nueva Delhi',
        year: 2023,
        type: 'documento'
      },
      {
        title: 'G20 (Group of 20)',
        author: 'Encyclopaedia Britannica',
        publisher: 'Encyclopaedia Britannica, Inc.',
        year: 2025,
        type: 'enciclopedia',
        url: 'https://www.britannica.com/topic/Group-of-20'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
