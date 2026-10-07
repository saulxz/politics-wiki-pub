(function (PW) {
  'use strict';
  PW.gobiernos = PW.gobiernos || {};
  PW.gobiernos['portugal'] = {
    kind: 'gobierno',
    slug: 'portugal',
    title: 'Portugal: la República constitucional y el régimen semipresidencial',
    subtitle: 'República unitaria con un presidente de la República elegido por sufragio universal para cinco años, un Gobierno dirigido por el primer ministro y responsable ante la Asamblea de la República, 230 diputados repartidos por el sistema proporcional de Hondt y un Tribunal Constitucional de trece magistrados',
    category: 'Gobierno',
    tags: ['república', 'régimen semipresidencial', 'constitución', 'parlamento', 'democracia representativa', 'euro'],
    region: 'Europa Meridional',
    timeFrame: '1974-actualidad',
    updated: '2026-09-28',
    summary: 'República constitucional del sur de Europa organizada en régimen semipresidencial: un presidente de la República elegido por cinco años representa al Estado y preside el Consejo de Ministros, mientras el Gobierno conduce la política interior y responde ante la Asamblea de la República, cámara única de 230 diputados. La Constitución de 1976, consolidada con la séptima revisión de 2005, es la norma fundamental del país. Las elecciones legislativas del 13 de abril de 2025 abrieron la XVII Legislatura, el Gobierno XXV fue investido con Luís Montenegro el 5 de junio de 2025 y António José Seguro fue elegido presidente el 8 de febrero de 2026 con el 66,84 % de los votos de la segunda vuelta.',
    actors: [
      { name: 'Presidente de la República', role: 'jefatura del Estado elegida por cinco años, que sanciona y promulga las leyes, nombra al primer ministro, preside el Consejo de Ministros, conduce la política exterior y puede disolver la Asamblea de la República', power: 'alta' },
      { name: 'La Asamblea de la República', role: 'cámara única de 230 diputados con mandato de cuatro años, elegidos por el sistema proporcional de Hondt, ante la que el Gobierno somete su programa y de la que depende políticamente', power: 'alta' },
      { name: 'El Gobierno', role: 'poder ejecutivo formado por el primer ministro y los ministros, que determina y ejecuta la política interior, administra el presupuesto del Estado y responde solidariamente ante la Cámara', power: 'alta' },
      { name: 'Tribunal Constitucional', role: 'control de la constitucionalidad de las leyes y de los estatutos de las regiones autónomas, y árbitro de los conflictos de competencia entre el Estado, las regiones y los municipios', power: 'alta' },
      { name: 'Unión Europea', role: 'marco al que se han cedido la política monetaria y el comercio exterior, y del que Portugal percibe recursos de cohesión y de inversión', power: 'media' },
      { name: 'Organización del Tratado del Atlántico Norte', role: 'alianza de defensa fundada en 1949 de la que Portugal es miembro fundador y en la que ejerce responsabilidades en el flanco sur del espacio atlántico', power: 'media' }
    ],
    infobox: {
      caption: 'Portugal, República constitucional de 1976',
      color: '#046a38',
      rows: [
        ['Período', '1974-actualidad'],
        ['Forma de Estado', 'República unitaria e indivisible, Estado de derecho democrático y social organizado en régimen semipresidencial'],
        ['Constitución vigente', 'Aprobada el 2 de abril de 1976 y en vigor desde el 25 de abril de ese año, consolidada con la Ley Constitucional 1/2005, séptima revisión'],
        ['Jefatura del Estado', 'Presidente de la República, elegido por sufragio universal directo para cinco años y renovable tres veces de forma consecutiva'],
        ['Presidente en el cargo', 'António José Seguro, elegido el 8 de febrero de 2026 con 3.502.613 votos, el 66,84 % de los votos emitidos, XXII presidente'],
        ['Primer ministro', 'Luís Montenegro, desde el 5 de junio de 2025, que preside el XXV Gobierno Constitucional'],
        ['Parlamento', 'Asamblea de la República, 230 diputados con mandato de cuatro años, elegidos por el sistema proporcional de Hondt'],
        ['Capital', 'Lisboa']
      ]
    },
    sections: [
      {
        id: 'origen',
        heading: 'Origen: la Constitución de 1976 y el diseño semipresidencial',
        blocks: [
          {
            type: 'p',
            text: 'La Constitución de la República Portuguesa, aprobada por referéndum el 2 de abril de 1976 y en vigor desde el 25 de abril de ese mismo año, sustituyó al régimen autoritario anterior por un ordenamiento que se define a sí mismo como Estado de derecho democrático y social. Su artículo 1 funda la República en la unidad de los Derechos del Hombre y del Ciudadano, y su artículo 2 sitúa la soberanía en el pueblo, del que emanan los poderes públicos. El artículo 3 enumera los principios que disciplinan el ejercicio de esos poderes, entre ellos la primacía de la Constitución, el principio de legalidad, la separación de poderes, el pluralismo político y el Estado de derecho. El artículo 13 convierte la jerarquía normativa en un deber de los tribunales y el artículo 18 obliga a los poderes públicos a respetar los derechos de los ciudadanos.'
          },
          {
            type: 'quote',
            text: 'Portugal é uma República fundada na unidade dos Direitos do Homem e do Cidadão.',
            cite: 'Constituição da República Portuguesa, artigo 1',
            author: 'Assembleia da República'
          },
          {
            type: 'p',
            text: 'El constituyente eligió una forma semipresidencial. El presidente de la República reúne competencias que en otros diseños están separadas: es el supremo representante del Estado y el depositario de su unidad, independencia y continuidad, y al mismo tiempo preside el Consejo de Ministros, de modo que dirige la política exterior y la defensa. Al Gobierno le corresponde la política interior y la administración, pero está obligado a responder ante la Cámara: el artículo 112 le impone presentar un proyecto de ley sobre los intereses nacionales y le obliga a dimitir cuando ese proyecto o el programa de gobierno son rechazados. La consecuencia es un sistema en el que ninguna de las dos ramas del ejecutivo puede sostener su política sin el apoyo de la otra, y en el que la disolución de la Cámara por el presidente actúa como la salida ordenada de un mandato frustrado.'
          },
          {
            type: 'table',
            head: ['Elemento', 'Régimen', 'Base constitucional'],
            rows: [
              ['Jefatura del Estado', 'Presidente de la República, elegido directamente por cinco años y renovable tres veces de forma consecutiva', 'Título II, capítulo I'],
              ['Poder ejecutivo', 'Consejo de Ministros dirigido por el primer ministro, con competencias políticas y administrativas propias', 'Artículos 40, 121 y 139'],
              ['Poder legislativo', 'Asamblea de la República como órgano único de representación de la Nación, con 230 diputados', 'Artículos 42 y siguientes'],
              ['Control de constitucionalidad', 'Tribunal Constitucional, con trece magistrados y revisión abstracta de la constitucionalidad', 'Artículos 176 a 199'],
              ['Territorio', 'Regiones autónomas de los Açores y Madeira con estatutos propios, distritos, municípios y freguesias', 'Título VI y artículo 6'],
              ['Revisión constitucional', 'Dos tercios de todos los miembros, con referéndum o con asamblea de diputados, sin poder iniciarse en los cinco años siguientes a la última revisión', 'Artículos 238 a 241']
            ]
          },
          {
            type: 'p',
            text: 'El texto de 1976 ha sido modificado siete veces, y la séptima de esas revisiones es la Ley Constitucional 1/2005, que es la que figura como texto consolidado. Esa reforma dio rango constitucional al poder local y a las regiones autónomas, reorganizó el reparto de competencias entre los niveles del Estado y suprimió la segunda cámara del Parlamento, que hasta entonces completaba una arquitectura bicameral. Las revisiones anteriores habían incidido sobre los derechos de los ciudadanos y sobre la organización de la justicia, de modo que el eje de la última reforma fue la estructura territorial del poder y no el catálogo de derechos.'
          }
        ]
      },
      {
        id: 'poderes',
        heading: 'Poderes: el presidente de la República y el Gobierno',
        blocks: [
          {
            type: 'p',
            text: 'El presidente de la República es el supremo representante del Estado y el depositario de su unidad, independencia y continuidad. Se elige por sufragio universal directo: la primera vuelta exige mayoría absoluta y, si no se alcanza, se celebra una segunda vuelta catorce días después entre los dos candidatos más votados. El artículo 139 fija el mandato en cinco años, renovable hasta tres veces de forma consecutiva. En el plano material le corresponde sancionar y promulgar las leyes y los decretos-leyes, convocar la Asamblea de la República y disolverla en el supuesto del artículo 49, nombrar al primer ministro tras oír a los grupos Parlamentarios, nombrar y destituir a los miembros del Gobierno, declarar los estados de excepción y de sitio, convocar al referéndum, conceder indultos y ratificar los tratados.'
          },
          {
            type: 'p',
            text: 'El Gobierno es el órgano ejecutivo y el primer ministro dirige su acción. El artículo 121 le reserva los actos políticos y el artículo 139 los actos administrativos, de manera que le corresponde declarar el interés nacional, preparar el proyecto de presupuestos del Estado y someter a la Cámara el proyecto de ley sobre los intereses nacionales. El XXV Gobierno Constitucional fue investido el 5 de junio de 2025 con Luís Montenegro a la cabeza, y su formación, la Alianza Democrática, es la que sostiene la política del ejecutivo ante la XVII Legislatura.'
          },
          {
            type: 'ul',
            items: [
              'El artículo 112 obliga al Gobierno a presentar ante la Cámara su programa acompañado de un proyecto de ley sobre los intereses nacionales, y el rechazo de cualquiera de los dos implica su dimisión.',
              'El artículo 49 faculta al presidente a disolver la Asamblea cuando el rechazo del programa obliga al Gobierno a dimitir, y fija en esa situación un plazo breve para la celebración de nuevas elecciones.',
              'Los decretos-leyes son firmados por el primer ministro y promulgados por el presidente, y quedan sujetos a la revisión de la Cámara dentro del plazo que fija la Constitución.'
            ]
          },
          {
            type: 'p',
            text: 'El reparto de competencias es lo que da al sistema su equilibrio. La dirección de la política exterior y de la defensa corresponde al presidente, mientras que la política interior y la administración corresponden al Gobierno, y la necesidad de que este último obtenga la confianza de la Cámara convierte el programa de gobierno en un documento público que se vota. Esa combinación de autoridad presidencial y responsabilidad ministerial da al país un semipresidencialismo en el que la continuidad del Gobierno depende más de la relación con la mayoría de la Cámara que de la fuerza del presidente. En la XVII Legislatura, abierta por las elecciones del 13 de abril de 2025, el Gobierno XXV ha contado con el apoyo de la Cámara, y la elección presidencial de 2026 ha reforzado esa estabilidad.'
          }
        ]
      },
      {
        id: 'parlamento',
        heading: 'La Asamblea de la República y la XVII Legislatura',
        blocks: [
          {
            type: 'p',
            text: 'La Asamblea de la República es el único órgano de representación de la Nación, después de la supresión de la segunda cámara en 2005. Reúne 230 diputados, con un mínimo de 180 y un máximo de 230 según la Constitución, y su mandato dura cuatro años. Se elige por sufragio universal directo, libre, personal y secreto en una única circunscripción nacional, con el sistema proporcional de Hondt, que reparte los escaños en proporción a los votos obtenidos por cada lista.'
          },
          {
            type: 'table',
            head: ['Elemento', 'Régimen'],
            rows: [
              ['Diputados', '230, con un mínimo de 180 y un máximo de 230'],
              ['Mandato', 'Cuatro años'],
              ['Elección', 'Sufragio universal directo, libre, personal y secreto en circunscripción nacional única'],
              ['Sistema electoral', 'Proporcional de Hondt'],
              ['Comisiones', 'Quince comisiones permanentes'],
              ['Mayoría ordinaria', 'Mayoría simple de los diputados presentes, según el artículo 146']
            ]
          },
          {
            type: 'p',
            text: 'Las elecciones legislativas del 13 de abril de 2025 abrieron la XVII Legislatura, y su primer Gobierno, el XXV, fue investido el 5 de junio de 2025 con Luís Montenegro. La Cámara organiza su trabajo en quince comisiones permanentes, a las que corresponde el examen previo de los proyectos de ley, y admite la iniciativa legislativa de los diputados, de los grupos Parlamentares, del Gobierno y, en las materias de sus atribuciones, de las asambleas regionales y de las cámaras municipales, además de la iniciativa popular en materia de ley y de referéndum.'
          },
          {
            type: 'ul',
            items: [
              'Las leyes ordinarias se aprueban por mayoría simple de los diputados presentes, mientras que las leyes constitucionales exigen dos tercios de todos los miembros.',
              'La iniciativa del proyecto de ley sobre los intereses nacionales corresponde al Gobierno, y es la que abre el ciclo de confianza de cada legislatura.',
              'La Cámara fiscaliza la actividad del Gobierno mediante comisiones, debates y preguntas al primer ministro, sin que exista un procedimiento formal de destitución.',
              'La iniciativa popular permite someter a la Cámara propuestas de ley y consultas por referéndum, y constituye un mecanismo de participación directa previsto en la Constitución.'
            ]
          },
          {
            type: 'p',
            text: 'El artículo 115 faculta al Tribunal Constitucional a anular los diplomas legales contrarios a la Constitución, de modo que la Cámara no es la última instancia de la ley. El control interno del Gobierno se ejerce, en cambio, por la vía política: el programa se vota y un resultado negativo obliga a dimitir, sin que exista una destitución formal. Esa asimetría explica por qué la estabilidad de los gobiernos portugueses depende tanto de las mayorías parlamentarias como de la relación institucional con la presidencia de la República.'
          }
        ]
      },
      {
        id: 'constitucionalidad',
        heading: 'El Tribunal Constitucional y el control de la constitucionalidad',
        blocks: [
          {
            type: 'p',
            text: 'El Tribunal Constitucional se compone de trece magistrados, de los cuales seis son elegidos por la Asamblea de la República y siete son nombrados por el presidente de la República, con los requisitos de independencia y honorabilidad que la Constitución exige. Su mandato dura nueve años y no es renovable, y para deliberar se requieren once magistrados, mientras que el Pleno necesita quince.'
          },
          {
            type: 'table',
            head: ['Órgano', 'Composición'],
            rows: [
              ['Tribunal Constitucional', 'Trece magistrados'],
              ['Designación', 'Seis elegidos por la Asamblea de la República y siete nombrados por el presidente de la República'],
              ['Mandato', 'Nueve años, sin posibilidad de renovación'],
              ['Deliberación', 'Once magistrados para las decisiones ordinarias y quince para el Pleno']
            ]
          },
          {
            type: 'p',
            text: 'Su competencia principal es la revisión abstracta de la constitucionalidad: el Fiscal General de la República, el presidente de la República, el primer ministro, la Asamblea de la República y los partidos políticos con representación en la Cámara pueden solicitar que se declare la inconstitucionalidad de una norma, y el pronunciamiento vincula a todos los poderes del Estado y deja sin efecto la disposición anulada. El Tribunal controla además la constitucionalidad de los estatutos de las regiones autónomas y resuelve los conflictos de competencia entre el Estado, las regiones y los municipios, un papel que la reforma de 2005 reforzó al profundizar la autonomía administrativa del territorio.'
          },
          {
            type: 'ul',
            items: [
              'Las decisiones del Tribunal no admiten recurso, obligan a todos los poderes del Estado y se integran en el ordenamiento con efectos retroactivos.',
              'El Tribunal puede limitarse a fijar el sentido en que debe interpretarse una norma, sin llegar a anularla.',
              'La reforma de 2005 amplió el objeto de la fiscalización de la constitucionalidad, que ya no se limita a las leyes y a los decretos-leyes.'
            ]
          }
        ]
      },
      {
        id: 'territorio',
        heading: 'El territorio: regiones autónomas y poder local',
        blocks: [
          {
            type: 'p',
            text: 'El artículo 6 de la Constitución divide el territorio en distritos y municipios, y añade las freguesias como unidades menores. El Título VI reconoce dos regiones autónomas, los Açores y Madeira, con estatutos propios, asambleas regionales y gobiernos regionales. La Constitución no es federal, pero permite que esas regiones se autogobiernen dentro de la unidad nacional, lo que convierte la autonomía administrativa en una pieza central del equilibrio del Estado.'
          },
          {
            type: 'table',
            head: ['Nivel', 'Unidades', 'Base'],
            rows: [
              ['Regiones autónomas', 'Açores y Madeira, con estatutos, asambleas y gobiernos regionales', 'Título VI'],
              ['Distritos', 'Dieciocho distritos, que agrupan municipios', 'Artículo 6'],
              ['Municipios', 'Trescientos ocho municípios, con asamblea y competencias propias', 'Artículo 6'],
              ['Freguesias', 'Tres mil noventa y una freguesias tras la reorganización administrativa de 2013', 'Artículo 6']
            ]
          },
          {
            type: 'p',
            text: 'La reforma administrativa de 2013 redujo de forma drástica el número de freguesias y dibujó un mapa municipal más homogéneo. Los municipios administran los servicios más próximos al ciudadano y las freguesias conservan una autonomía limitada a su ámbito territorial. El carácter unitario del Estado se traduce en que la competencia es un problema de distribución administrativa y no de soberanía: las regiones autónomas y los municipios ejercen facultades propias, pero ninguna de ellas puede dictar normas contrarias a la Constitución, y sus actos pueden ser anulados por el Tribunal Constitucional.'
          }
        ]
      },
      {
        id: 'economia',
        heading: 'Economía y finanzas públicas',
        blocks: [
          {
            type: 'p',
            text: 'El Instituto Nacional de Estatística estima una población de 11.424.031 habitantes en 2025, y la migración neta de ese año alcanzó las 70.862 personas, una cifra que confirma la importancia del saldo migratorio en la evolución demográfica portuguesa. En el segundo trimestre de 2026 la tasa de desempleo se situaba en el 5,3 %, y el índice de precios de consumo registró en agosto de 2026 una variación del 3,30 % respecto del año anterior.'
          },
          {
            type: 'table',
            head: ['Indicador', 'Periodo', 'Valor'],
            rows: [
              ['Población estimada', '2025', '11.424.031 habitantes'],
              ['Migración neta', '2025', '70.862 personas'],
              ['Producto interior bruto', '2025', '308.500 millones de euros'],
              ['Crecimiento del producto interior bruto', 'Segundo trimestre de 2026', '2,6 % de variación anual'],
              ['Tasa de desempleo', 'Segundo trimestre de 2026', '5,3 %'],
              ['Índice de precios de consumo', 'Agosto de 2026', '3,30 %'],
              ['Saldo de las administraciones públicas', 'Segundo trimestre de 2026', '0,5 % del producto interior bruto'],
              ['Capacidad neta de financiación', 'Segundo trimestre de 2026', '2,3 % del producto interior bruto']
            ]
          },
          {
            type: 'p',
            text: 'El producto interior bruto de 2025 se estimó en 308.500 millones de euros, y en el segundo trimestre de 2026 su crecimiento en términos anuales fue del 2,6 %. Las finanzas públicas aparecen en excedente: el saldo agregado de las administraciones públicas equivalió al 0,5 % del producto interior bruto y la capacidad neta de financiación se sitúa en el 2,3 % del producto. Son cifras de un país integrado en la unión monetaria, donde la política monetaria ya no es nacional sino competencia del Banco Central Europeo, y donde el acceso a los fondos europeos de cohesión es una variable central de la política económica.'
          },
          {
            type: 'ul',
            items: [
              'El artículo 145 obliga a que los presupuestos del Estado, de las regiones autónomas, de los municipios y de los servicios administrativos autonómicos se aprueben con un techo fijado en función del producto interior bruto.',
              'La misma disposición prohíbe que la variación del gasto de personal, de la compra de bienes y servicios y de los intereses supere la tasa de variación real de la renta nacional de los dos años anteriores.',
              'La elaboración de los presupuestos del Estado corresponde al Gobierno, pero su aprobación es competencia de la Asamblea de la República, que puede enmendar los textos que recibe.'
            ]
          },
          {
            type: 'p',
            text: 'La economía portuguesa es marcadamente terciaria, con un peso reducido de la industria extractiva. Su dependencia del comercio exterior y de la energía importada hace de la política comercial de la [[org:union-europea|Unión Europea]] y del acceso a los fondos europeos una variable central para la evolución del país, y explica la sensibilidad de la opinión pública a las decisiones de la Unión sobre precios, energía y migración. Los [[geo:migraciones-y-demografia|saldos migratorios]] son, en ese contexto, un elemento estructural y no un accidente estadístico.'
          }
        ]
      },
      {
        id: 'exterior',
        heading: 'Política exterior y posiciones institucionales',
        blocks: [
          {
            type: 'p',
            text: 'Portugal es miembro fundador de la [[org:otan|Organización del Tratado del Atlántico Norte]], creada en 1949, y mantiene una presencia relevante en el flanco sur del espacio atlántico. En la [[org:union-europea|Unión Europea]] es uno de los Estados fundadores de la Comunidad Económica Europea y forma parte de la zona del euro desde 1999, de modo que su política monetaria la aplica el Banco Central Europeo.'
          },
          {
            type: 'p',
            text: 'Esa doble pertenencia explica buena parte de la política exterior portuguesa, que combina el apego a la integración europea con una atención constante a la seguridad en el Atlántico y a la cooperación con los países de África y de la América del Sur. La Constitución obliga además a respetar los tratados y limita las cesiones de territorio, de manera que la acción exterior sigue sometida a la aprobación de la Cámara y a la ratificación presidencial.',
          },
          {
            type: 'ul',
            items: [
              'La pertenencia a la zona del euro ha transferido al Banco Central Europeo la definición de la política monetaria, y la coordinación fiscal europea condiciona la elaboración de los presupuestos.',
              'La seguridad colectiva europea se apoya en los compromisos de la OTAN, y Portugal aporta a ese conjunto instalaciones y personal en el Atlántico oriental.',
              'La cooperación con los países de África y de la América del Sur se articula a través de la Comunidad de Países de Lengua Portuguesa, creada en 1996.'
            ]
          },
          {
            type: 'p',
            text: 'La elección de António José Seguro el 8 de febrero de 2026, con 3.502.613 votos y el 66,84 % de los emitidos en la segunda vuelta, se produjo en un contexto de continuidad institucional. El debate de fondo sigue siendo el del equilibrio del semipresidencialismo, con un presidente que acumula competencias formales y un Parlamento con un margen de iniciativa limitado, y con un Gobierno que depende de la confianza de la Cámara para permanecer en pie.'
          }
        ]
      }
    ],
    categories: ['Gobiernos', 'Europa Meridional', 'Parlamentarismo', 'Derecho constitucional'],
    related: ['liberalismo', 'socialdemocracia', 'democracia-cristiana', 'org:union-europea', 'org:otan'],
    references: [
      {
        title: 'Constituição da República Portuguesa',
        author: 'Assembleia da República',
        publisher: 'Diário da República, Lisboa',
        year: 1976,
        type: 'ley',
        url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1976-19763375'
      },
      {
        title: 'Constituição da República Portuguesa, texto consolidado',
        author: 'Assembleia da República',
        publisher: 'Assembleia da República, Lisboa',
        year: 2026,
        type: 'ley',
        url: 'https://www.parlamento.pt/Legislacao/Paginas/ConstituicaoRepublicaPortuguesa.aspx'
      },
      {
        title: 'XXV Governo Constitucional',
        author: 'Governo de Portugal',
        publisher: 'Governo de Portugal, Lisboa',
        year: 2026,
        type: 'dato',
        url: 'https://www.portugal.gov.pt/pt/gc25'
      },
      {
        title: 'Presidência da República',
        author: 'Presidência da República',
        publisher: 'Presidência da República, Lisboa',
        year: 2026,
        type: 'dato',
        url: 'https://www.presidencia.pt/presidente-da-republica/'
      },
      {
        title: 'Assembleia da República',
        author: 'Assembleia da República',
        publisher: 'Assembleia da República, Lisboa',
        year: 2026,
        type: 'dato',
        url: 'https://www.parlamento.pt/'
      },
      {
        title: 'Diário da República',
        author: 'Imprensa Nacional-Casa da Moeda',
        publisher: 'Diário da República, Lisboa',
        year: 2026,
        type: 'dato',
        url: 'https://dre.pt/'
      },
      {
        title: 'Portal institucional do Tribunal Constitucional',
        author: 'Tribunal Constitucional',
        publisher: 'Tribunal Constitucional, Lisboa',
        year: 2026,
        type: 'dato',
        url: 'https://www.tribunalconstitucional.pt/'
      },
      {
        title: 'Instituto Nacional de Estatística',
        author: 'Instituto Nacional de Estatística',
        publisher: 'INE, Lisboa',
        year: 2026,
        type: 'informe',
        url: 'https://www.ine.pt/'
      },
      {
        title: 'Sistema de indicadores do Instituto Nacional de Estatística',
        author: 'Instituto Nacional de Estatística',
        publisher: 'INE, Lisboa',
        year: 2026,
        type: 'informe',
        url: 'https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_indicadores'
      },
      {
        title: 'North Atlantic Treaty Organization',
        author: 'Organização do Tratado do Atlântico Norte',
        publisher: 'OTAN, Bruselas',
        year: 2026,
        type: 'dato',
        url: 'https://www.nato.int/'
      },
      {
        title: 'Unión Europea',
        author: 'Comissão Europeia',
        publisher: 'Unión Europea, Bruselas',
        year: 2026,
        type: 'dato',
        url: 'https://european-union.europa.eu/'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
