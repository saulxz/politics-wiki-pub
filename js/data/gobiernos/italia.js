(function (PW) {
  'use strict';
  PW.gobiernos = PW.gobiernos || {};
  PW.gobiernos['italia'] = {
    kind: 'gobierno',
    slug: 'italia',
    title: 'Italia: la República aparcada y el particularismo del sistema de partidos',
    subtitle: 'República unitaria con un presidente que preside y promulga sin gobernar, un Gobierno responsable ante un Parlamento bicameral, veinte regiones con potestad legislativa propia y un sistema de partidos que produce mayorías frágiles',
    category: 'Gobierno',
    tags: ['república', 'parlamentarismo', 'constitución', 'sistema de partidos', 'descentralismo', 'deuda pública'],
    region: 'Europa Meridional',
    timeFrame: '1948-actualidad',
    updated: '2026-09-28',
    summary: 'República del sur de Europa en la que el presidente de la República es jefe del Estado pero no dirige la política: el Gobierno encabezado por el presidente del Consejo depende de la confianza de un Parlamento bicameral, y la potestad legislativa se comparte con veinte regiones. De esa doble fragmentación, la territorial y la partidista, nace la fragilidad característica de la casa política italiana.',
    actors: [
      { name: 'Gobierno de la República', role: 'ejecutivo dirigido por el presidente del Consejo, que ordena la acción del Gobierno y responde ante las dos Cámaras', power: 'alta' },
      { name: 'Parlamento italiano', role: 'Cámara de Diputados y Senado, de los que depende la confianza del Gobierno y ante los que este rinde cuentas', power: 'alta' },
      { name: 'Presidente de la República', role: 'jefe del Estado, elegido por el Parlamento y por cincuenta delegados por región, con mandato de siete años y sin posibilidad de ser reelegido', power: 'media' },
      { name: 'Unión Europea', role: 'marco al que se han transferido la política monetaria, el comercio exterior y buena parte de la regulación del mercado interior', power: 'alta' },
      { name: 'Corte costituzionale', role: 'árbitro de la conformidad de las leyes con la Constitución, de los estatutos regionales y de los conflictos de competencia entre el Estado y las regiones', power: 'media' },
      { name: 'Regiones y provincias autónomas', role: 'veinte entidades con potestad legislativa propia en materias enumeradas por la Constitución, que compiten con el Estado por los servicios y la administración', power: 'media' }
    ],
    infobox: {
      caption: 'Italia, República Italiana',
      color: '#006b54',
      rows: [
        ['Período', '1948-actualidad'],
        ['Forma de Estado', 'República unitaria con competencia legislativa concurrente del Estado y de las regiones'],
        ['Constitución vigente', 'Aprobada el 22 de diciembre de 1947, promulgada el 27 de diciembre de 1947 y en vigor desde el 1 de enero de 1948'],
        ['Jefatura del Estado', 'Presidente de la República, elegido por el Parlamento en sesión conjunta y por cincuenta delegados por región, con mandato de siete años'],
        ['Jefatura del Gobierno', 'Presidente del Consejo de Ministros; Giorgia Meloni desde el 22 de octubre de 2022'],
        ['Presidente en el cargo', 'Sergio Mattarella, reelegido el 29 de enero de 2022 en la octava votación con 759 votos'],
        ['Parlamento', 'Cámara de Diputados de 400 miembros y Senado de 200 elegidos, más un máximo de cinco senadores vitalicios'],
        ['División territorial', 'Veinte regiones, de ellas cinco con estatuto de autonomía especial']
      ]
    },
    sections: [
      {
        id: 'origen',
        heading: 'Origen: la Resistencia, el referendum y la Constitución de 1947-1948',
        blocks: [
          {
            type: 'p',
            text: 'La República italiana no tiene una Constitución anterior: nace de una guerra civil y de una consulta popular. La Resistencia organizada contra el régimen fascista entre 1943 y 1945 dio legitimidad al Comité de Liberación Nacional, que ejerció la soberanía en las zonas liberadas. El 2 de junio de 1946 se celebraron a la vez el referendum institucional y la elección de la Asamblea Constituyente, que se reunió por primera vez el 25 de ese mes con 556 diputados.'
          },
          {
            type: 'p',
            text: 'El referendum preguntaba por la forma del Estado. Votaron 24.946.878 de los 28.005.449 inscritos, el 89,08 por ciento, con 23.437.143 votos válidos: la República obtuvo 12.718.641, el 54,27 por ciento, y la monarquía 10.718.502, el 45,73 por ciento. La corona no fue depuesta sino que abdicó de hecho, y el jefe provisional del Estado asumió las funciones en junio de 1946.'
          },
          {
            type: 'table',
            head: ['Fecha', 'Hito', 'Vía'],
            rows: [
              ['2 de junio de 1946', 'El referendum aprueba la República con el 54,27 por ciento de los votos válidos', 'Consulta popular'],
              ['25 de junio de 1946', 'Primera sesión de la Asamblea Constituyente, con 556 diputados', 'Legislatura constituyente'],
              ['31 de enero de 1947', 'La Comisión de la Constitución entrega su proyecto a la Asamblea', 'Iniciativa constituyente'],
              ['22 de diciembre de 1947', 'La Asamblea Constituyente aprueba la Constitución', 'Aprobación constituyente'],
              ['27 de diciembre de 1947', 'Promulgación por el jefe provisional del Estado', 'Promulgación'],
              ['1 de enero de 1948', 'Entrada en vigor de la Constitución y de la República', 'Vigencia'],
              ['7 de octubre de 2001', 'El sí a la reforma del Título V obtiene el 64,21 por ciento', 'Consulta popular'],
              ['20 y 21 de septiembre de 2020', 'El sí a la reducción del Parlamento a 400 diputados y 200 senadores', 'Consulta popular']
            ]
          },
          {
            type: 'p',
            text: 'Los ciento treinta y nueve artículos se promulgaron el 27 de diciembre de 1947 en la Gazzetta Ufficiale número 298, edición extraordinaria, y entraron en vigor el 1 de enero de 1948. El texto deja expresamente diferidos varios problemas del momento: el orden, la salud, la familia, la administración local y la disciplina de los partidos, remitidos a leyes posteriores. Esa hoja de ruta incompleta ha alimentado una lectura historiográfica que condensa el caso en la imagen de la República aparcada: un ordenamiento formalmente ambicioso que se puso en circulación sin que la maquinaria del Estado lo asumiera.'
          }
        ]
      },
      {
        id: 'poderes',
        heading: 'Poderes: un presidente que preside y un Gobierno que manda',
        blocks: [
          {
            type: 'p',
            text: 'El artículo 85 elige al presidente de la República en sesión conjunta de las dos Cámaras con cincuenta delegados por región. El mandato dura siete años y no admite renovación. Sergio Mattarella fue reelegido el 29 de enero de 2022 en la octava votación con 759 votos.'
          },
          {
            type: 'p',
            text: 'El artículo 96 reserva a la ley la emisión de disposiciones legislativas y el artículo 97 exime de responsabilidad al presidente por sus actos, salvo alta traición o atentado a la Constitución. Su margen de discreción se concentra en los nombramientos, en la promulgación y en la dirección de la política exterior. El poder de gobierno está en otro artículo: el 95 encomienda al presidente del Consejo la dirección del Gobierno.'
          },
          {
            type: 'quote',
            text: 'Il Governo deve avere la fiducia delle due Camere. Ciascuna Camera accorda o revoca la fiducia mediante mozione motivata e votata per appello nominale. Entro dieci giorni dalla sua formazione il Governo si presenta alle Camere per ottenerne la fiducia. Il voto contrario di una o d\'entrambe le Camere su una proposta del Governo non importa obbligo di dimissioni. La mozione di sfiducia deve essere firmata da almeno un decimo dei componenti della Camera e non può essere messa in discussione prima di tre giorni dalla sua presentazione.',
            cite: 'Costituzione della Repubblica Italiana, articolo 94',
            author: 'Assemblea Costituente italiana'
          }
        ]
      },
      {
        id: 'parlamento',
        heading: 'El Parlamento bicameral y su función reformadora',
        blocks: [
          {
            type: 'p',
            text: 'El artículo 135 compone la Corte costituzional de quince jueces nombrados por tercios ante el presidente de la República, el Parlamento y las supreme magistraturas, con mandato de nueve años no renovable. El artículo 134 le confiere además el juicio sobre los estatutos regionales y sobre las leyes de las regiones.'
          },
          {
            type: 'p',
            text: 'La ley constitucional de 19 de octubre de 2020, número 1, fijó en 400 el número de diputados y en 200 el de los senadores, más un máximo de cinco vitalicios, y se aplicó por primera vez en las elecciones del 25 de septiembre de 2022. El artículo 57 garantiza un mínimo de tres senadores por región, dos para el Molise y uno para el Valle de Aosta.'
          },
          {
            type: 'ul',
            items: [
              'El Senado elige al presidente de la República junto con la Cámara de Diputados en sesión conjunta.',
              'Cada ministro debe obtener la confianza de las Cámaras, y el Gobierno responde de forma solidaria ante ellas.',
              'El artículo 77 permite dictar decretos con fuerza de ley por urgencia, que deben convertirse en ley en un plazo de sesenta días.'
            ]
          }
        ]
      },
      {
        id: 'territorio',
        heading: 'Regiones, autonomía y la reforma del Título V',
        blocks: [
          {
            type: 'p',
            text: 'La reforma del Título V de 2001, la ley constitucional número 3, devolvió a las regiones la potestad sobre las materias enumeradas en el artículo 117. El electorado la aceptó el 7 de octubre de ese año con el 64,21 por ciento de los votos válidos.'
          },
          {
            type: 'p',
            text: 'El artículo 114 reconoce a las regiones y a las entidades autónomas con estatuto propio. La reforma suprimió la revisión previa de las leyes regionales y la potestad sustitutiva del Gobierno central. Son veinte regiones, cinco con estatuto especial.'
          },
          {
            type: 'table',
            head: ['Materia', 'Antes de 2001', 'Después de 2001'],
            rows: [
              ['Leyes regionales', 'Viso previo del Estado', 'Solo vicio de legitimidad ante la Corte'],
              ['Facultad sobre la región', 'Poder sustitutivo del Gobierno', 'Suprimido'],
              ['Estatutos regionales', 'Mayoría absoluta del consejo', 'Dos deliberaciones con dos meses de intervalo']
            ]
          }
        ]
      },
      {
        id: 'partidos',
        heading: 'Partidos, transformismo y la fragilidad de las mayorías',
        blocks: [
          {
            type: 'p',
            text: 'La República ha conocido 68 Gobiernos desde que Alcide De Gasperi formó el segundo el 13 de julio de 1946, y De Gasperi reúne el récord con ocho. Ninguna formación ha cubierto por sí sola la mayoría absoluta, de modo que cada Gobierno nace de una negociación y cada texto de ley es una prueba de supervivencia.'
          },
          {
            type: 'p',
            text: 'Esa mecánica tiene nombre: el transformismo, la formación de Gobiernos trasladando aliados de una coalición a otra. El método llegó a su crisis abierta en 1994, cuando el octavo Gobierno de Giulio Andreotti perdió la mayoría el 28 de abril de 1993 y Ciampi formó el primer gobierno técnico de la República. Silvio Berlusconi formó el suyo el 10 de mayo de 1994.'
          },
          {
            type: 'p',
            text: 'La familia que gobierna hoy procede de ese tiempo. [[partido:fratelli-ditalia|Fratelli d Italia]], fundada en 2014 por Giorgia Meloni, dirige el Gobierno desde el 22 de octubre de 2022 dentro de una coalición de centro derecha, con [[partido:forza-italia|Forza Italia]] como segundo eje. El [[partido:partito-democratico|PD]] está en la oposición.'
          }
        ]
      },
      {
        id: 'economia',
        heading: 'Economía, deuda pública y reformas',
        blocks: [
          {
            type: 'p',
            text: 'El Istituto Nazionale di Statistica sitúa el producto interior bruto de 2025 en 2.265.003 millones de euros a precios corrientes, con un crecimiento nominal del 2,5 por ciento y un crecimiento en volumen del 0,6 por ciento.'
          },
          {
            type: 'p',
            text: 'La deuda pública llega al 137,1 por ciento del producto en 2025 y al 138,9 en el primer trimestre de 2026, y el déficit baja del 3,4 por ciento de 2024 al 3,1 de 2025. El gasto público se sitúa en el 51,2 por ciento del producto y la presión fiscal en el 42,9.'
          },
          {
            type: 'table',
            head: ['Indicador', '2023', '2024', '2025'],
            rows: [
              ['Deuda pública (% del PIB)', '133,9', '134,7', '137,1'],
              ['Déficit público (% del PIB)', '-7,1', '-3,4', '-3,1'],
              ['Gasto público (% del PIB)', '53,6', '50,4', '51,2'],
              ['Ingresos públicos (% del PIB)', '46,5', '47,0', '48,1']
            ]
          },
          {
            type: 'p',
            text: 'La demografía agrava la carga. Al 1 de enero de 2026 había 58,9 millones de residentes y el 25,1 por ciento tenía 65 años o más. En 2025 nacieron 355 mil personas y murieron 652 mil, y el saldo migratorio fue de 296 mil. La inflación media de 2025 fue del 1,5 por ciento.'
          }
        ]
      },
      {
        id: 'politica-exterior',
        heading: 'Política exterior y el papel en la Unión Europea',
        blocks: [
          {
            type: 'p',
            text: 'El artículo 87 confiere al presidente de la República el mando de las fuerzas armadas y el artículo 89 la conclusión de los tratados, con la aprobación previa del Parlamento. La dirección diaria de la política exterior corresponde al Gobierno, que propone y negocia.'
          },
          {
            type: 'ul',
            items: [
              'Es miembro de la [[org:union-europea|Unión Europea]] desde el 1 de enero de 1958 y tiene 76 diputados en el Parlamento Europeo.',
              'Usa el euro desde el 1 de enero de 1999 y el espacio Schengen desde el 26 de octubre de 1997.',
              'Miembro de la [[org:otan|OTAN]] y del [[org:onu|Consejo de Seguridad]] de la [[org:onu|ONU]] en el periodo 1955-1991.'
            ]
          },
          {
            type: 'p',
            text: 'El artículo 117 reserva al Estado la aplicación de la normativa europea en el interior. La deuda pública convierte a la [[org:union-europea|Unión Europea]] en el principal factor de restricción de la política italiana.'
          }
        ]
      }
    ],
    categories: ['Gobiernos', 'Europa Meridional', 'Parlamentarismo', 'Derecho constitucional'],
    related: ['federalismo', 'reformismo', 'partido:fratelli-ditalia', 'partido:partito-democratico', 'org:union-europea'],
    references: [
      {
        title: 'Costituzione della Repubblica Italiana',
        author: 'Assemblea Costituente',
        publisher: 'Gazzetta Ufficiale, edizione straordinaria, 27 dicembre 1947',
        year: 1947,
        type: 'ley',
        url: 'https://www.gazzettaufficiale.it/eli/gu/1947/12/27/298/s1'
      },
      {
        title: 'Costituzione, testo vigente',
        author: 'Istituto Nazionale di Statistica',
        publisher: 'Normattiva, Roma',
        year: 2026,
        type: 'ley',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione'
      },
      {
        title: 'Articolo 94 della Costituzione',
        author: 'Senato della Repubblica',
        publisher: 'Senato della Repubblica, Roma',
        year: 2026,
        type: 'ley',
        url: 'https://www.senato.it/istituzione/la-costituzione/parte-ii/titolo-iii/sezione-i/articolo-94'
      },
      {
        title: 'Risultati complessivi del referendum del 2 giugno 1946',
        author: 'Ministero dell\'Interno',
        publisher: 'Direzione centrale dei servizi elettorali e statistici, Roma',
        year: 2011,
        type: 'dato',
        url: 'https://dait.interno.gov.it/documenti/referendum_risultati_complessivi_1946_2011_0.pdf'
      },
      {
        title: 'Legge costituzionale 18 ottobre 2001, n. 3: modifiche al titolo V della parte seconda della Costituzione',
        author: 'Gazzetta Ufficiale',
        publisher: 'Gazzetta Ufficiale della Repubblica Italiana, Roma',
        year: 2001,
        type: 'ley',
        url: 'https://www.gazzettaufficiale.it/eli/id/2001/10/24/001G0430/sg'
      },
      {
        title: 'Legge costituzionale 19 ottobre 2020, n. 1',
        author: 'Gazzetta Ufficiale',
        publisher: 'Gazzetta Ufficiale della Repubblica Italiana, Roma',
        year: 2020,
        type: 'ley',
        url: 'https://www.gazzettaufficiale.it/eli/id/2020/10/21/020G0011/s1'
      },
      {
        title: 'I Governi nelle Legislature',
        author: 'Presidenza del Consiglio dei ministri',
        publisher: 'Governo italiano, Roma',
        year: 2026,
        type: 'dato',
        url: 'https://www.governo.it/it/i-governi-dal-1943-ad-oggi/i-governi-nelle-legislature/192'
      },
      {
        title: 'La struttura della Corte costituzionale',
        author: 'Corte costituzionale',
        publisher: 'Corte costituzionale, Roma',
        year: 2026,
        type: 'dato',
        url: 'https://www.cortecostituzionale.it/contenuti/istituzioni/la-struttura'
      },
      {
        title: 'Conti economici nazionali, anni 2010-2025',
        author: 'Istat',
        publisher: 'Istituto Nazionale di Statistica, Roma',
        year: 2026,
        type: 'informe',
        url: 'https://www.istat.it/comunicato-stampa/conti-economici-nazionali-anni-2010-2025/'
      },
      {
        title: 'Indicatori demografici, anno 2025',
        author: 'Istat',
        publisher: 'Istituto Nazionale di Statistica, Roma',
        year: 2026,
        type: 'informe',
        url: 'https://www.istat.it/comunicato-stampa/indicatori-demografici-anno-2025/'
      },
      {
        title: 'Government deficit and debt statistics, year 2025',
        author: 'Eurostat',
        publisher: 'Eurostat, Luxembourg',
        year: 2026,
        type: 'informe',
        url: 'https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-22042026-ap'
      },
      {
        title: 'Italy, EU country',
        author: 'European Commission',
        publisher: 'European Union, Brussels',
        year: 2026,
        type: 'informe',
        url: 'https://european-union.europa.eu/principles-countries-history/eu-countries/italy_en'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
