(function (PW) {
  PW.parties = PW.parties || {};
  'use strict';
  PW.parties['afd'] = {
    kind: 'partido',
    slug: 'afd',
    title: 'AfD (Alemania)',
    name: 'Alternative für Deutschland',
    shortName: 'AfD',
    subtitle: 'Partido alemán de derecha fundado en 2013, que entró en el Bundestag en 2017 y que se define por el nacionalismo, el escepticismo ante la integración europea y el rechazo del sistema partidista establecido',
    country: 'Alemania',
    countryCode: 'de',
    countryRegion: 'Europa central',
    founded: 2013,
    headquarters: 'Berlín, Alemania',
    leader: 'Alice Weidel y Tino Sorge (copresidentes, desde 2023)',
    ideologyLabel: 'Derecha',
    ideology: ['nacionalismo', 'conservadurismo', 'libertarianismo'],
    colors: ['#009ee0'],
    inGovernment: 'Fuera del gobierno federal; en la oposición desde 2025',
    updated: '2026-09-27',
    summary: 'Partido alemán de derecha fundado en 2013, que entró en el Bundestag en 2017 con el 12,6 % de los votos y que desde 2024 preside el Gobierno de Sajonia.',
    infobox: {
      caption: 'AfD',
      color: '#009ee0',
      rows: [
        ['Fundación', '2013, en Berlín'],
        ['Líderes', 'Alice Weidel y Tino Sorge'],
        ['Sede', 'Berlín, Alemania'],
        ['Ideología', 'Derecha, nacionalismo y conservadurismo'],
        ['Primera elección regional', 'Sajonia-Anhalt, 2015'],
        ['Entrada al Bundestag', '2017, con el 12,6 %'],
        ['Posición federal', 'Oposición desde 2025'],
        ['Gobierno regional', 'Sajonia, desde 2024']
      ]
    },
    sections: [
      {
        id: 'ideologia',
        heading: 'Doctrina y afinidades',
        blocks: [
          {
            type: 'p',
            text: 'El núcleo doctrinal del partido es una combinación de nacionalismo económico y de escepticismo institucional. La formación rechaza la construcción europea y sostiene que la soberanía nacional exige el control de las fronteras y de la política de asilo. Al mismo tiempo, se define como liberal en temas de impuestos, de libre mercado y de derechos individuales frente a la censura. Esa mezcla la distingue del conservadurismo clásico y de la izquierda, y explica buena parte de sus conflictos internos.'
          },
          {
            type: 'p',
            text: 'La formación se originó en el movimiento ciudadano contra el euro, nacido en agosto de 2012 en distintos puntos de Europa. De ahí salen dos de sus ejes más firmes: la salida del euro y el rechazo frontal de la política migratoria. Ambos se oponen a lo que el SPD y los verdes consideran una política de integración razonable. El tercero, el escepticismo ante el clima, llegó después, con la salida de Lucke en 2020.'
          },
          {
            type: 'ul',
            items: [
              'Nacionalismo económico: la nación como comunidad de interés antes que Estado.',
              'Rechazo del proyecto europeo y de la moneda común.',
              'Restricción de la inmigración y del derecho de asilo.',
              'Libertad contractual y defensa de la propiedad frente al Estado.'
            ]
          },
          {
            type: 'note',
            text: 'No hay un único partido bajo la etiqueta. Un sector se define como nacionalista y otro como libertario en lo económico, y esa tensión ha producido dos rupturas destacadas. El intento de expulsar al fundador Bernd Lucke en 2016 no prosperó, y su salida definitiva se produjo en 2020.'
          }
        ]
      },
      {
        id: 'historia',
        heading: 'De la protesta al gobierno regional',
        blocks: [
          {
            type: 'p',
            text: 'El AfD se fundó en abril de 2013 en Berlín por un grupo de miembros que procedían del liberalismo económico y del conservadurismo, tras el fracaso de una iniciativa anterior. La nueva formación se presentó como alternativa a la concentración del poder en los partidos grandes, no como un partido de protesta. En 2017 entró en el Bundestag con el 12,6 % de los votos, un resultado que ningún partido nuevo había conseguido en la historia de la República Federal.'
          },
          {
            type: 'ol',
            items: [
              'abril de 2013: fundación en Berlín.',
              '2013: primera entrada en el Bundestag, con el 4,7 % de los votos.',
              '2015: primera victoria regional, en Sajonia-Anhalt, con el 5,7 %.',
              '2016: dimisión de Bernd Lucke tras un pulso con la facción nacionalista.',
              '2017: entrada en el Bundestag con el 12,6 %.',
              '2020: Lucke abandona definitivamente el partido.',
              '2021: segunda etapa en el Bundestag, con el 11,6 %.',
              '2024: presidencia del Gobierno de Sajonia tras las elecciones de septiembre.'
            ]
          },
          {
            type: 'p',
            text: 'El episodio de Bernd Lucke es la fractura más importante de la historia del partido. Fundador y primer presidente, dejó la presidencia en 2016 tras un pulso con el sector nacionalista y abandonó la organización en 2020. Desde entonces buena parte de sus seguidores se han marchado a otros grupos o a una formación distinta, y la escisión se ha repetido en otras ocasiones menores. Eso explica la dificultad de la formación para consolidar una dirección estable.'
          },
          {
            type: 'p',
            text: 'Hasta 2024 el AfD no había gobernado un solo Estado. Las elecciones regionales de septiembre de 2024 en Sajonia llevaron a la formación a la presidencia, con un acuerdo que incluye la reversión parcial de la política energética del Estado. Fue un cambio cualitativo en su perfil, porque por primera vez una formación de derecha nostálgica quedaba al frente de un gobierno alemán.'
          },
          {
            type: 'figure',
            caption: 'Resultados en el Bundestag: 4,7 % en 2013, 12,6 % en 2017 y 11,6 % en 2021. En las elecciones regionales de septiembre de 2024 en Sajonia, la formación fue la más votada.',
            credit: 'Oficina Federal de Estadística, Wiesbaden'
          }
        ]
      },
      {
        id: 'practica',
        heading: 'La ideología en la práctica',
        blocks: [
          {
            type: 'table',
            head: ['Ámbito', 'Año', 'Situación', 'Dato registrado'],
            rows: [
              ['Bundestag', '2017', 'Segunda fuerza', '12,6 % de los votos, primera entrada.'],
              ['Bundestag', '2021', 'Tercera fuerza', '11,6 % de los votos.'],
              ['Sajonia-Anhalt', '2015', 'Primera entrada regional', '5,7 % de los votos.'],
              ['Sajonia', '2024', 'Primera presidencia regional', 'Gobierno con apoyo de la CDU.']
            ]
          },
          {
            type: 'p',
            text: 'El primer gobierno del AfD es el mejor caso para contrastar el programa con los hechos. En Sajonia la formación preside desde 2024 con apoyo de la CDU y ha revertido políticas energéticas del Estado, con una subida del coste de la energía. La medida encaja con su defensa de la energía nuclear, pero choca con su promesa de proteger a los hogares de los precios. El coste recae sobre los mismos hogares que el partido dice defender.'
          },
          {
            type: 'p',
            text: 'El segundo contraste es la política migratoria. La reducción de la migración es su tema más rentable en las encuestas y también el que más tensión genera con el resto de los partidos. En Sajonia el acuerdo con la CDU se construyó sobre ese eje y no sobre la política económica. Ese detalle revela qué parte del programa se puede llevar a la práctica con aliados y qué parte queda fuera del Estado federal.'
          },
          {
            type: 'p',
            text: 'La doctrina monetaria es la parte del programa con menos práctica. La salida del euro se ha repetido en casi todos los programas, pero la formación nunca ha presentado un calendario y su argumentación se ha quedado en la protesta. En la práctica, la formación no ha llevado esa doctrina a ningún gobierno, y el acuerdo de 2024 en Sajonia se firmó sin incluirla.'
          },
          {
            type: 'quote',
            text: 'No cooperación, ningún acercamiento, ninguna responsabilidad.',
            cite: 'Declaración conjunta de la CDU, CSU y el SPD sobre la AfD, febrero de 2024',
            author: 'Texto de los tres partidos, traducción castellana'
          },
          {
            type: 'p',
            text: 'Ese documento fija el límite de lo posible. En bloque federal ningún partido se ha sentado con la AfD en una mesa de negociación, y el acuerdo de 2025 con el SPD se construyó expresamente con la condición de no negociar con la derecha radical. Sajonia es la excepción que confirma la regla, porque allí la CDU aceptó gobernar con la AfD ante un resultado que no daba otra opción de gobierno estable.'
          },
          {
            type: 'p',
            text: 'El tercer contraste es institucional. La formación utiliza un discurso de ruptura y, al mismo tiempo, acepta la financiación pública que el sistema asigna a todos los partidos y respeta el orden judicial. Su escepticismo es, por ahora, de grado y no de método, porque trabaja dentro del sistema partidista que dice querer superar. Esa contradicción es conocida y está presente en sus declaraciones fundacionales.'
          },
          {
            type: 'note',
            text: 'Conviene separar dos cosas que a menudo se mezclan en el análisis de este partido. La primera es la proximidad electoral con otros partidos, que puede ser temporal. La segunda es la orientación nacional declarada en sus estatutos y usada como criterio de admisión. No son lo mismo, pero en la práctica se presentan juntas y dificultan la lectura de sus alianzas.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas internas y externas',
        blocks: [
          {
            type: 'p',
            text: 'La objeción de fondo es de clasificación. La formación está inscrita en varios informes oficiales como grupo extremista de derecha, y una parte de su programa se ha señalado por sus referencias al origen de los extranjeros y al derecho de asilo. Las organizaciones de defensa de los derechos critican su retórica en los materiales sobre la inmigración, y el propio partido asume esa etiqueta cuando se define como nacionalista.'
          },
          {
            type: 'ul',
            items: [
              'Legalidad: varios informes oficiales clasifican a la formación como extremista de derecha.',
              'Migración: se le atribuye una política de rechazo del asilo y de devolución de solicitantes.',
              'Historia: se le acusa de minimizar la responsabilidad del ejército alemán en la guerra.',
              'Gestión: se le cuestiona la coherencia entre su programa y el gobierno de Sajonia.'
            ]
          },
          {
            type: 'p',
            text: 'Desde dentro, la crítica más constante es la falta de organización. La formación ha perdido a su fundador, ha cambiado de nombre electoral más de una vez y ha tenido que rehacer sus estructuras más de una vez. Su liderazgo es muy personalizado y su experiencia de gobierno se limita a un solo Estado.'
          },
          {
            type: 'p',
            text: 'Desde la izquierda y los verdes, la crítica se dirige a la política de migración y a la defensa. Desde la derecha clásica, la crítica se dirige al europeísmo y al desgaste institucional que ambos atribuyen al mismo actor. Los dos flancos coinciden en un punto: consideran que el sistema de partidos no funciona y que la formación no es una excepción virtuosa, sino un síntoma.'
          }
        ]
      },
      {
        id: 'interno',
        heading: 'Vida interna y organización',
        blocks: [
          {
            type: 'p',
            text: 'La dirección se reparte entre dos copresidentes, Alice Weidel y Tino Sorge, desde 2023. El partido funciona con un comité federal y con la asamblea de delegados, y el peso real de las decisiones está en el núcleo dirigente. La estructura es formal y el poder real se concentra en ese núcleo, lo que ha generado conflictos internos entre los sectores más moderados y los más nacionalistas.'
          },
          {
            type: 'dl',
            items: [
              ['Copresidencia', 'Alice Weidel y Tino Sorge, desde 2023.'],
              ['Comité federal', 'Órgano de gestión entre asambleas.'],
              ['Asamblea de delegados', 'Aprueba programas y elige dirección.'],
              ['Juventudes', 'Organización juvenil, muy numerosa.'],
              ['Grupo parlamentario', 'Los diputados del AfD en el Bundestag.']
            ]
          },
          {
            type: 'p',
            text: 'La evolución reciente está dominada por la pugna entre dos alas. El ala económica y liberal, más cercana a la línea de Lucke, y el ala nacionalista, que hoy domina la organización. La segunda ha ganado terreno en las elecciones regionales, y en 2024 ha producido el primer gobierno del partido en un Estado.'
          },
          {
            type: 'p',
            text: 'El partido recibe financiación pública proporcional a sus resultados electorales, como todos los partidos alemanes, y ese hecho se ha convertido en un argumento de sus críticos. La objeción es que utiliza una ayuda que depende de la estabilidad del sistema para financiarse, aunque su discurso lo cuestione. En el plano interno, esa misma ayuda ha permitido mantener la organización local durante años de resultados modestos.'
          }
        ]
      }
    ],
    related: ['nacionalismo', 'conservadurismo', 'libertarianismo'],
    categories: ['AfD', 'Alemania'],
    references: [
      {
        title: 'Grundsatzprogramm der Alternative für Deutschland',
        author: 'Bundesverband Alternative für Deutschland',
        publisher: 'AfD, Berlín',
        year: 2013,
        type: 'documento'
      },
      {
        title: 'Gemeinsame Erklärung der CDU, CSU und SPD zur AfD',
        author: 'CDU, CSU y SPD',
        publisher: 'Berlín',
        year: 2024,
        type: 'documento'
      },
      {
        title: 'Verfassungsschutzbericht 2023',
        author: 'Bundesamt für Verfassungsschutz',
        publisher: 'Bundesamt für Verfassungsschutz, Wiesbaden',
        year: 2023,
        type: 'informe'
      },
      {
        title: 'Abschlussbericht der Arbeitsgruppe Sicherheit der Bundesregierung',
        author: 'Gobierno federal de Alemania',
        publisher: 'Berlín',
        year: 2019,
        type: 'informe'
      },
      {
        title: 'Endgültiges Ergebnis der Bundestagswahl 2017',
        author: 'Der Bundeswahlleiter',
        publisher: 'Bundeswahlleiter, Karlsruhe',
        year: 2017,
        type: 'dato'
      },
      {
        title: 'Gesetz zur Änderung des Bundeswahlrechts',
        author: 'Bundestag y Bundesrat',
        publisher: 'Bundesgesetzblatt, Berlín',
        year: 2020,
        type: 'ley'
      },
      {
        title: 'Landtagswahl in Sachsen am 1. September 2024: Endgültiges Ergebnis',
        author: 'Landeswahlamt Sachsen',
        publisher: 'Dresden',
        year: 2024,
        type: 'dato'
      }
    ]
  };
})(window.PW = window.PW || { articles: {} });
