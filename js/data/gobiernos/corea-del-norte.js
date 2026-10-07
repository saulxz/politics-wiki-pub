(function (PW) {
  'use strict';
  PW.gobiernos = PW.gobiernos || {};
  PW.gobiernos['corea-del-norte'] = {
    kind: 'gobierno',
    slug: 'corea-del-norte',
    title: 'Corea del Norte',
    subtitle: 'República Popular Democrática de Corea: partido único, liderazgo dinástico y disuasión nuclear en la península',
    category: 'Gobierno',
    tags: ['dictadura hereditaria', 'jucha', 'proliferación nuclear', 'sanciones internacionales', 'economía planificada', 'aislamiento diplomático'],
    region: 'Asia Oriental',
    timeFrame: '1948-actualidad',
    updated: '2026-09-27',
    summary: 'República Popular Democrática de Corea: Estado unipartidista y dinástico fundado en 1948 que concentra el poder en la familia Kim, administra una economía planificada y pequeña, suma seis ensayos nucleares declarados y ha convertido la asociación estratégica con Rusia en su principal instrumento de supervivencia.',
    actors: [
      { name: 'Kim Jong Un', role: 'presidente de la Comisión de Asuntos de Estado, comandante en jefe de las fuerzas armadas y responsable máximo del programa nuclear', power: 'alta' },
      { name: 'Partido de los Trabajadores de Corea', role: 'partido único que dirige la administración, el ejército y el aparato de propaganda nacional', power: 'alta' },
      { name: 'Rusia', role: 'socio comercial y militar que compra material de defensa norcoreano y ofrece tecnología espacial', power: 'alta' },
      { name: 'China', role: 'vecino fronterizo y principal socio comercial, con un peso decisivo en el comercio exterior norcoreano', power: 'media' },
      { name: 'Estados Unidos', role: 'principal fuente de sanciones y de la presión diplomática que fija la agenda de desnuclearización', power: 'media' },
      { name: 'República de Corea', role: 'firmante del armisticio de 1953 y contraparte del sur, donde se asienta la población que emigra del norte', power: 'media' }
    ],
    infobox: {
      caption: 'Corea del Norte',
      color: '#3b5f8a',
      rows: [
        ['Período', '1948-actualidad'],
        ['Forma de Estado', 'República unipartidista con Asamblea Popular Suprema de 687 diputados'],
        ['Líder', 'Kim Jong Un, presidente de la Comisión de Asuntos de Estado y jefe del Estado'],
        ['Primer ministro', 'Pak Thae-song, desde 2024'],
        ['Capital', 'Pionyang'],
        ['Superficie', '123.214 km²'],
        ['Población', '26,6 millones de habitantes (estimación de 2026)'],
        ['Armas nucleares', 'Seis ensayos declarados entre 2006 y 2017, con enriquecimiento de uranio en Yongbyon y Kangson']
      ]
    },
    sections: [
      {
        id: 'origen',
        heading: 'Origen: la partición de la península y una guerra sin paz',
        blocks: [
          {
            type: 'p',
            text: 'Corea del Norte nace de una partición militar decidida fuera del país. Tras la capitulación de Japón en agosto de 1945, la península quedó dividida por el paralelo 38 entre una zona administrada por Estados Unidos y otra por la Unión Soviética. El 9 de septiembre de 1948 se adoptó la primera constitución del Estado y Kim Il-sung dirigió el gobierno de Pionyang como primer ministro.'
          },
          {
            type: 'p',
            text: 'La invasión del 25 de junio de 1950 consolidó la división. El armisticio firmado el 27 de julio de 1953 no es un tratado de paz. No existe documento que termine legalmente el conflicto, y la zona desmilitarizada es una línea de tregua permanente. Esa situación jurídica explica buena parte de la retórica del régimen, que presenta la guerra como pendiente.'
          },
          {
            type: 'ul',
            items: [
              '1948: primera constitución y proclamación del Estado, con cinco reformas antes de 1972.',
              '1972: constitución «socialista», que institucionaliza la autosuficiencia y la sucesión hereditaria.',
              '1994: muerte de Kim Il-sung y traspaso del mando a su hijo Kim Jong-il, que murió en 2011.',
              '2011: Kim Jong Un hereda el poder como tercera generación, en plena crisis económica.'
            ]
          }
        ]
      },
      {
        id: 'estructura',
        heading: 'Estructura: partido único y concentración del poder',
        blocks: [
          {
            type: 'p',
            text: 'La Constitución define un régimen de partido único. La Asamblea Popular Suprema es el órgano supremo del poder del Estado y tiene 687 diputados elegidos por sufragio directo para mandatos de cinco años. La candidatura es única y sale de las filas del partido, de modo que la asamblea ratifica decisiones tomadas en otra instancia. La Comisión de Asuntos de Estado, creada en 2016 en lugar de la Comisión de Defensa Nacional, coordina la estrategia militar, económica y nuclear.'
          },
          {
            type: 'table',
            head: ['Órgano o cargo', 'Base jurídica', 'Poder efectivo'],
            rows: [
              ['Asamblea Popular Suprema', '687 diputados elegidos para cinco años', 'Aprueba leyes y ratifica tratados, sin iniciativa propia'],
              ['Partido de los Trabajadores de Corea', 'Único partido legalizado, que controla la campaña electoral', 'Dirige la administración, el ejército y los medios'],
              ['Comisión de Asuntos de Estado', 'Órgano de dirección superior creado en 2016', 'Concentra la estrategia militar, económica y nuclear'],
              ['Presidente de la Comisión de Asuntos de Estado', 'Elegido por la asamblea; jefe del Estado desde 2026', 'Comanda las fuerzas nucleares según la Constitución'],
              ['Segundo Comité Económico', 'Órgano del partido para asuntos militares y productivos', 'Controla la construcción naval y la industria militar'],
              ['Tribunal Supremo y tribunales provinciales', 'Jueces elegidos por la Asamblea Popular Suprema', 'Sin independencia judicial ni vías de recurso']
            ]
          },
          {
            type: 'p',
            text: 'La reforma constitucional de marzo de 2026 selló el diseño actual. El texto se dio a conocer el 6 de mayo de ese año. Introduce por primera vez un artículo sobre el territorio, elimina toda referencia a la reunificación, retira del preámbulo los logros de Kim Il-sung y Kim Jong-il, suprime la palabra «socialista» del título y sitúa al presidente de la Comisión de Asuntos de Estado por encima de la Asamblea como jefe del Estado.'
          },
          {
            type: 'p',
            text: 'El artículo 6 atribuye el mando sobre las fuerzas nucleares al presidente de la Comisión de Asuntos de Estado. Ese cargo puede delegar el uso de las armas en el órgano nacional de guerra nuclear, y otro artículo describe al país como un «Estado responsable de armas nucleares». La reforma completa el giro anunciado en enero de 2024, cuando Kim Jong-un pidió definir a la República de Corea como «enemigo principal e invariable».'
          }
        ]
      },
      {
        id: 'ideologia',
        heading: 'Ideología: autosuficiencia, militarismo y culta dinástica',
        blocks: [
          {
            type: 'p',
            text: 'La doctrina oficial se apoya en la idea de jucha, la autosuficiencia nacional como camino hacia la autonomía frente a las potencias vecinas. Se completa con la estrategia byunjin, que combina desarrollo económico y avance nuclear. El militarismo, o songun, entró en el preámbulo de la Constitución con Kim Jong-il, pero Kim Jong-un lo retiró del texto en 2019 sin renunciar a la prioridad militar.'
          },
          {
            type: 'p',
            text: 'Lo que distingue a este régimen de un partido único convencional es la fusión de partido, Estado y dinastía. La Comisión de Investigación de las Naciones Unidas concluyó en 2014 que el país presenta muchos atributos de un Estado totalitario. Estimó entre 80.000 y 120.000 los presos políticos en cuatro grandes campos, con el ayuno deliberado como instrumento de control y castigo. Documentó además los secuestros y las desapariciones forzadas promovidos por el Estado desde 1950.'
          },
          {
            type: 'quote',
            text: 'La gravedad, la escala y la naturaleza de estas violaciones revelan un Estado que no tiene parangón en el mundo contemporáneo.',
            cite: 'Informe de la Comisión de Investigación de la ONU (A/HRC/25/63), 2014',
            author: 'Comisión de Investigación de la ONU sobre los derechos humanos en la RPDC'
          },
          {
            type: 'p',
            text: 'El informe del Alto Comisionado para los Derechos Humanos de 2025, que cubre de 2014 a mayo de ese año, concluye que la situación no ha mejorado y que en muchos aspectos se ha degradado. El control del Estado sobre los ciudadanos se ha endurecido y la pena de muerte se ha ampliado en la ley y en la práctica. En marzo de 2026 la Asamblea General aprobó por consenso, y por vigesimoprimer año consecutivo, una resolución que condena la situación de los derechos humanos en el país.'
          }
        ]
      },
      {
        id: 'economia',
        heading: 'Economía: planificación, mercados paralelos y hambruna',
        blocks: [
          {
            type: 'p',
            text: 'La economía es centralmente planificada y pequeña. Su producción no es comparable con la de ninguna otra economía asiática. La estadística oficial es poco fiable porque el won no es convertible y su tipo de cambio oficial supera con mucho al real de los mercados. La fuente más solvente para dimensionarla es el Banco de Corea, que publica sus propias estimaciones del PIB norcoreano.'
          },
          {
            type: 'table',
            head: ['Indicador', 'Valor', 'Fuente y año'],
            rows: [
              ['Renta nacional bruta', '32.720 millones de dólares', 'Encyclopædia Britannica, estimación de 2023'],
              ['Renta nacional bruta per cápita', '1.271 dólares', 'Encyclopædia Britannica, estimación de 2023'],
              ['Crecimiento del PIB real', 'Aumento del 3,7 %', 'Banco de Corea, estimación para 2024'],
              ['Población urbana', '63,5 % del total', 'Encyclopædia Britannica, estimación de 2024'],
              ['Agricultura, silvicultura y pesca', '20,9 % del PIB', 'Banco de Corea, datos de 2024 recogidos por el Ministerio de Asuntos Exteriores de España']
            ]
          },
          {
            type: 'p',
            text: 'Desde finales de los años ochenta el Estado cohabita con mercados informales sostenidos por las familias. Esa dualidad ha funcionado como estabilizador social: en los mercados se compra lo que la planificación no distribuye. La reforma monetaria de 2009 y la prohibición del uso de divisas en las transacciones locales decretada en 2020 muestran que el Gobierno quiere controlar el dinero sin renunciar al mercado.'
          },
          {
            type: 'p',
            text: 'El episodio más grave es la hambruna de mediados de los años noventa, precedida por las inundaciones de 1995 y 1996 y por el colapso del bloque soviético. El régimen la denominó «Marcha ardua». La mortalidad sigue en discusión: las cifras oficiales reconocen unos 220.000 muertos entre 1995 y 1998, mientras que las estimaciones de investigadores y de organizaciones de ayuda van desde varios cientos de miles hasta varios millones. Debe advertirse además que las cifras de población y superficie no coinciden entre fuentes y que ninguna es oficial: Britannica computa 123.214 km² y 26,6 millones de habitantes para 2026, y la ficha país del Ministerio de Asuntos Exteriores de España de abril de 2026 cita 120.538 km² y 26.015.000 habitantes.'
          }
        ]
      },
      {
        id: 'nuclear',
        heading: 'Nuclear: del ensayo de 2006 al arsenal declarado',
        blocks: [
          {
            type: 'p',
            text: 'El programa nuclear se hizo irreversible el 9 de octubre de 2006, con el primer ensayo nuclear subterráneo. Cinco días después, el Consejo de Seguridad de las Naciones Unidas aprobó la Resolución 1718, que impone embargo de armas, congelación de activos, prohibición de viajar y sanciones comerciales. Se han declarado seis ensayos, hasta 2017. El régimen emplea el arma como garantía de supervivencia del Estado, no como instrumento de expansión regional.'
          },
          {
            type: 'table',
            head: ['Hito', 'Fecha', 'Contenido'],
            rows: [
              ['Primer ensayo nuclear subterráneo', '9 de octubre de 2006', 'Punto de partida del régimen sancionador de la ONU'],
              ['Resolución 1718 del Consejo de Seguridad', '14 de octubre de 2006', 'Embargo de armas, congelación de activos y sanciones comerciales'],
              ['Divulgación de centrífugas por el Estado', 'Septiembre de 2024', 'Primeras imágenes públicas de una planta de enriquecimiento desde 2010'],
              ['Complejo de enriquecimiento de Kangson', 'Ampliación construida entre febrero y abril de 2024', 'El OIEA observa doce cascadas de 344 centrífugas para uranio poco enriquecido'],
              ['Mando sobre las fuerzas nucleares', 'Constitución de marzo de 2026', 'El artículo 6 lo atribuye al presidente de la Comisión de Asuntos de Estado']
            ]
          },
          {
            type: 'p',
            text: 'El Organismo Internacional de Energía Atómica mantiene un acceso limitado. Describe dos instalaciones de enriquecimiento, en Yongbyon y en Kangson, con cascadas de 344 centrífugas compatibles con la producción de uranio poco enriquecido. No ha podido verificar producción de uranio altamente enriquecido. En 2024 los medios del Estado publicaron imágenes del interior de una planta de enriquecimiento y Kim Jong-un llamó a incrementarlas exponencialmente.'
          }
        ]
      },
      {
        id: 'relaciones',
        heading: 'Relaciones exteriores: aislamiento y eje con Rusia',
        blocks: [
          {
            type: 'p',
            text: 'Durante casi siete décadas la política exterior norcoreana fue la del mínimo indispensable. El aislamiento cambió en 2018, cuando la diplomacia personal entre Kim Jong-un y Donald Trump alteró la dinámica. Hubo una cumbre en Singapur en junio de 2018, otra en Hanoí en febrero de 2019 y un encuentro en Panmunjom en junio de 2019. Ninguna produjo avances verificables en la desnuclearización, y desde entonces Pyongyang combina la apertura táctica con el deterioro de la relación con Seúl.'
          },
          {
            type: 'ul',
            items: [
              'China: principal socio comercial y garante diplomático desde el final de la guerra fría.',
              'Rusia: el 19 de junio de 2024 ambos líderes firmaron en Pionyang un tratado de asociación estratégica integral con defensa mutua.',
              'Corea del Sur: de las tres cumbres de 2018 a la ruptura de 2020, con la destrucción de la oficina de enlace en Panmunjom.',
              'Estados Unidos y Japón: principales protagonistas de la diplomacia internacional, junto a los aliados que endurecen las sanciones.'
            ]
          },
          {
            type: 'p',
            text: 'El eje con Moscú ha cambiado el cálculo estratégico. Pyongyang ha enviado tropas, munición y cohetes a la guerra de Ucrania, y [[geo:guerra-en-ucrania|Rusia]] ofrece a cambio tecnología militar y cooperación espacial. Las cifras de despliegue no están verificadas: los gobiernos de Seúl, Kyiv y Occidente han estimado en torno a 14.000 los soldados enviados y más de 6.000 las bajas. Ninguna de esas estimaciones procede de fuentes norcoreanas.'
          }
        ]
      },
      {
        id: 'balance',
        heading: 'Balance: continuidad y límites del cambio',
        blocks: [
          {
            type: 'p',
            text: 'Conviene distinguir la evidencia disponible de la especulación. El régimen ha sobrevivido a dos crisis severas, a la muerte de dos líderes y al colapso de su principal patrocinador externo. En ninguno de esos momentos se produjo una ruptura interna del Estado. Las cifras que ofrece la propaganda norcorea sobre producción, salud o fuerzas armadas deben tratarse como material de propaganda y no como dato, y así se han separado en esta ficha.'
          },
          {
            type: 'ul',
            items: [
              'Continuidad: la familia Kim, el partido único, la economía planificada y la disuasión nuclear se mantienen mientras la dirección permanezca intacta.',
              'Presión económica: el aislamiento comercial, la dependencia casi total de China y las restricciones a la exportación limitan el crecimiento.',
              'Riesgo de congelación: la tensión en la frontera es el factor más volátil para la población civil.',
              'Apertura limitada: la asociación con Rusia abre tecnología e ingresos, pero añade dependencia de un solo socio y nuevas sanciones.'
            ]
          }
        ]
      }
    ],
  categories: ['Gobiernos', 'Asia Oriental', 'Regímenes autoritarios', 'Derechos humanos'],
  related: ['totalitarismo', 'maoismo', 'militarismo', 'geo:orden-multipolar', 'org:onu'],
    references: [
      {
        title: 'North Korea',
        author: 'Encyclopaedia Britannica',
        publisher: 'Encyclopaedia Britannica, Inc., Chicago',
        year: 2026,
        type: 'enciclopedia',
        url: 'https://www.britannica.com/place/North-Korea'
      },
      {
        title: 'North Korea: A Country Study',
        author: 'Robert L. Worden (ed.)',
        publisher: 'Federal Research Division, Library of Congress, Washington, D.C.',
        year: 2008,
        type: 'libro',
        url: 'https://www.loc.gov/item/2008028547'
      },
      {
        title: 'Report of the Commission of Inquiry on Human Rights in the Democratic People’s Republic of Korea (A/HRC/25/63)',
        author: 'Comisión de Investigación de la ONU',
        publisher: 'Consejo de Derechos Humanos de las Naciones Unidas, Ginebra',
        year: 2014,
        type: 'informe',
        url: 'https://www.ohchr.org/en/hr-bodies/hrc/co-idprk/reportofthe-commissionof-inquiry-dprk'
      },
      {
        title: 'Report of the High Commissioner for Human Rights on the situation of human rights in the Democratic People’s Republic of Korea (A/HRC/60/58)',
        author: 'Oficina del Alto Comisionado de las Naciones Unidas para los Derechos Humanos',
        publisher: 'Consejo de Derechos Humanos de las Naciones Unidas, Ginebra',
        year: 2025,
        type: 'informe',
        url: 'https://www.ohchr.org/sites/default/files/2025-09/a-hrc-60-58-advance-edited-version.pdf'
      },
      {
        title: 'Security Council Resolution 1718 (2006)',
        author: 'Consejo de Seguridad de las Naciones Unidas',
        publisher: 'Naciones Unidas, Nueva York',
        year: 2006,
        type: 'documento',
        url: 'https://main.un.org/securitycouncil/en/s/res/1718-(2006)'
      },
      {
        title: 'Application of Safeguards in the Democratic People’s Republic of Korea (GOV/69/13)',
        author: 'Organismo Internacional de Energía Atómica',
        publisher: 'OIEA, Viena',
        year: 2025,
        type: 'informe',
        url: 'https://www.iaea.org/sites/default/files/gc/gc69-13.pdf'
      },
      {
        title: 'República Popular Democrática de Corea: ficha país',
        author: 'Oficina de Información Diplomática',
        publisher: 'Ministerio de Asuntos Exteriores, Unión Europea y Cooperación, Gobierno de España, Madrid',
        year: 2026,
        type: 'informe',
        url: 'https://www.exteriores.gob.es/documents/fichaspais/coreadelnorte_ficha%20pais.pdf'
      },
      {
        title: 'North Korea revises constitution to drop references to unification of Korean Peninsula',
        author: 'Reuters',
        publisher: 'Thomson Reuters, Londres',
        year: 2026,
        type: 'articulo',
        url: 'https://www.reuters.com/world/china/north-korea-revises-constitution-drop-references-unification-korean-peninsula-2026-05-06'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
