(function (PW) {
  PW.parties = PW.parties || {};
  'use strict';
  PW.parties['ppsoe'] = {
    kind: 'partido',
    slug: 'ppsoe',
    title: 'PSOE',
    name: 'Partido Socialista Obrero Español',
    shortName: 'PSOE',
    country: 'España',
    countryCode: 'es',
    countryRegion: 'Sur de Europa',
    founded: 1879,
    headquarters: 'Madrid, España',
    leader: 'Pedro Sánchez (secretario general desde 2014)',
    ideologyLabel: 'Centroizquierda',
    ideology: ['socialdemocracia', 'marxismo', 'reformismo'],
    colors: ['#b21d38', '#f0c000'],
    inGovernment: 'Presidencia del Gobierno con apoyo de Sumar desde noviembre de 2023',
    subtitle: 'Partido socialista español, el más antiguo de España, que gobernó entre 1982 y 1996 y de nuevo desde 2019 dentro de la familia de la socialdemocracia europea',
    updated: '2026-09-27',
    summary: 'El partido socialista español, fundado en 1879 y en el gobierno desde 2023 con apoyo de Sumar, que define su programa como una corrección reformista del capitalismo mediante el Estado social, los servicios públicos y el diálogo social.',
    infobox: {
      caption: 'PSOE',
      color: '#b21d38',
      rows: [
        ['Fundación', '2 de mayo de 1879, en Madrid'],
        ['Sede', 'Casa del PSOE, paseo de la Castellana, Madrid'],
        ['Líder', 'Pedro Sánchez, secretario general desde 2014'],
        ['Ideología', 'Centroizquierda'],
        ['Gobierno actual', 'Presidencia con apoyo de Sumar desde noviembre de 2023'],
        ['Aliados en el gobierno', 'PNV, CiU (1993-1996), Unidas Podemos (2019-2023), Sumar (2023-)'],
        ['Colores', 'Rojo y amarillo, los de su bandera']
      ]
    },
    sections: [
      {
        id: 'ideologia',
        heading: 'Ideología y doctrina',
        blocks: [
          {
            type: 'p',
            text: 'El PSOE toma su nombre del socialismo del siglo XIX y, en sus primeros años, se define con el vocabulario del [[marxismo]]: la propiedad privada es la causa de la desigualdad, la clase obrera es el sujeto del cambio y la socialización de los medios de producción es su destino. Ese marco convive desde 1880 con una vía legal, heredada del federalismo de Pi y Margall, que acepta la monarquía constitucional y el parlamento como procedimiento.'
          },
          {
            type: 'ul',
            items: [
              'Diagnóstico: la propiedad privada de los medios de producción origina la desigualdad y el antagonismo entre patronos y trabajadores la agranda.',
              'Sujeto histórico: la clase obrera organizada, a través del partido y de la unión sindical.',
              'Horizonte: la socialización de los medios de producción, entendida como tendencia y no como acto administrativo inmediato.',
              'Método: la reforma gradual mediante el voto, la ley y la negociación colectiva, con los estatutos del partido como norma.',
              'Estado: organización territorial con autonomía propia, dentro de la Constitución de 1978; el [[federalismo|estado federal]] simétrico se ha considerado siempre un modelo no asumido.',
              'Laicismo: separación de la Iglesia y el Estado, principio incorporado al programa de 1976.'
            ]
          },
          {
            type: 'p',
            text: 'La trayectoria doctrinal es un alejamiento de esas tres premisas. El marxismo dejó de ser una referencia oficial de los estatutos durante la década de 1980, el horizonte dejó de formularse en términos de propiedad y el método se ha desplazado del conflicto a la negociación. Hoy el partido se define por la [[socialdemocracia|socialdemocracia]], es decir, por la gestión del Estado capitalista con instrumentos fiscales, servicios públicos y concertación social.'
          },
          {
            type: 'dl',
            items: [
              ['Socialismo', 'Redistribución por la vía del presupuesto, los servicios comunes y la seguridad social, no propiedad estatal de los medios de producción.'],
              ['Federalismo asimétrico', 'Estado con varios niveles de poder y distinto nivel de competencia para cada comunidad; el partido no lo ha asumido de forma explícita.'],
              ['Reformismo', 'El cambio se busca en las urnas, en la ley y en la presión sindical, y no en la ruptura del orden constitucional.'],
              ['Laicismo', 'Separación de la Iglesia y el Estado, con defensa de la laicidad en los centros públicos.']
            ]
          },
          {
            type: 'note',
            text: 'La etiqueta «socialdemocracia» describe mejor al PSOE actual que a sus orígenes, pero conviene no proyectarla hacia atrás. Pablo Iglesias asistió en 1889 al congreso fundacional de la Segunda Internacional, en París, y la redacción obrerista del nombre se mantiene en los estatutos, en la bandera y en el himno. El giro doctrinal se produce en los años ochenta, con la retirada del término marxista.'
          }
        ]
      },
      {
        id: 'historia',
        heading: 'Historia: de la fundación a la Transición',
        blocks: [
          {
            type: 'p',
            text: 'El 2 de mayo de 1879, en un cuarto de la calle del Pez de Madrid, una docena de delegados de la sección obrera de la Compañía de Tranviaciones fundó el partido. Pablo Iglesias Posse, tipógrafo de origen gallego, fue su primer secretario general. Durante dos décadas el peso real del partido estuvo en la organización sindical y no en la agrupación electoral: su fuerza llegó pronto, pero, salvo en 1931 y 1936, no le dio el gobierno.'
          },
          {
            type: 'ol',
            items: [
              '1879: fundación en Madrid, con la sección obrera de los Tranviarios como núcleo inicial.',
              '1880: el programa, elaborado por Pablo Iglesias y Juan Bravo Marcelo con influencia de Pi y Margall, deja el republicanismo y acepta la monarquía constitucional.',
              '1888: el II Congreso extraordinario fija definitivamente el nombre de Partido Socialista Obrero Español.',
              '1931-1933: el partido pasa de 116 a 135 diputados y participa en los gobiernos de Manuel Azaña.',
              '1936: con el 29,3% de los votos integra el Frente Popular; en julio estalla el golpe de Estado.',
              '1946-1975: organización clandestina y en el exilio, sin actividad electoral.',
              '1976: legalización del partido en el exilio y elección de una nueva dirección, con Pablo Castellino al frente.',
              '1982: Felipe González alcanza el 51,8% de los votos y 199 de los 350 diputados.'
            ]
          },
          {
            type: 'p',
            text: 'La historia moderna arranca en 1982 y no se ha detenido desde entonces, aunque con alternancia de mayorías. El partido gobernó de forma ininterrumpida entre 1982 y 1996, perdió en 1996, gobernó de 2004 a 2011, estuvo en la oposición entre 2011 y 2019, y volvió al poder en 2019 con Unidas Podemos y en 2023 con Sumar. El único presidente del Gobierno instalado mediante una moción de censura en la historia constitucional española es el de junio de 2018, que llevó a Pedro Sánchez a la Moncloa.'
          },
          {
            type: 'table',
            head: ['Etapa', 'Años', 'Rasgo dominante'],
            rows: [
              ['Orígenes', '1879-1914', 'Organización sindical y escasa presencia electoral'],
              ['República', '1931-1936', 'Principal partido de la izquierda, con Azaña y la UGT'],
              ['Exilio', '1939-1975', 'Actividad clandestina y en el exilio, sin elecciones'],
              ['Consenso', '1982-1996', 'Gobierno de González, europeísmo, reforma de la Seguridad Social'],
              ['Zapatero', '2004-2011', 'Crecimiento y crisis financiera, con austeridad desde 2010'],
              ['Sánchez', '2019-2026', 'Gobiernos de coalición y pactos con fuerzas ajenas al partido']
            ]
          }
        ]
      }
      ,
      {
        id: 'practica',
        heading: 'La ideología en la práctica',
        blocks: [
          {
            type: 'p',
            text: 'La República de 1931 fue la primera vez que el partido gobernó. En las legislaturas de Manuel Azaña, entre 1931 y 1933, impulsó la ley de Contratos de Trabajo, la reforma agraria de 1932 y una ampliación del crédito. En febrero de 1936 obtuvo el 29,3% de los votos, más que cualquier otra fuerza, pero la derecha y la extrema derecha juntas sumaban más, y se repartieron más diputados. Esa aritmética hizo que el apoyo del Frente Popular dependiera de los grupos de la derecha que no estaban dentro de él.'
          },
          {
            type: 'p',
            text: 'El verano de 1936 es el episodio en que el partido se apartó de su programa con más claridad. La noche del 24 de julio de 1931, un grupo armado de la CNT entró en el cuartel de la Guardia Civil de Oviedo y Azaña ordenó desarmarlo. En mayo de 1936, en cambio, el PSOE y el Partido Comunista, este último fuera del Frente Popular, tomaron las armas. Largo Caballero recibió la presidencia del Gobierno el 4 de septiembre de 1936 y en mayo de 1937 las Cortes nombraron a Juan Negrín, que sustituyó al anterior con el apoyo del grupo socialista.'
          },
          {
            type: 'table',
            head: ['Gobierno', 'Medidas con año y cifra'],
            rows: [
              ['Azaña (1931-1933)', 'Ley de Contratos de Trabajo (1931), reforma agraria (1932)'],
              ['González (1982-1996)', 'Sistema de ahorro y pensiones (1995), nacionalización de RTVE (1994)'],
              ['Zapatero (2004-2011)', 'Salario mínimo de 600 a 1.000 euros (2008-2010), IVA del 18% (2010)'],
              ['Sánchez (2019-2026)', 'Salario mínimo de 1.014 euros (2020), ley trans (2022), amnistía (2023)']
            ]
          },
          {
            type: 'p',
            text: 'El gobierno de González, entre 1982 y 1996, es el periodo en que la socialdemocracia se aplicó de verdad: primero la integración en la Comunidad Europea, en 1986, después la reforma de la Seguridad Social de 1995, que sustituyó las prestaciones indefinidas por cuentas individuales y elevó el periodo mínimo de cotización de 10 a 15 años. En sentido contrario, la suspensión de las emisiones de Antena 3 en 1988 se ha considerado un caso de presión sobre los medios.'
          },
          {
            type: 'ul',
            items: [
              '1986: Pactos de La Puebla de Montalbán con la corriente abertzale del propio partido, que contribuyó a la tregua de ETA entre 1988 y 1996.',
              '1993-1996: apoyo de Convergència i Unió al gobierno de González, con ampliación del proyecto europeísta.',
              '2019-2023: coalición con Unidas Podemos, y desde 2023 con Sumar, ERC, Junts, EH Bildu, PNV, BNG y Coalición Canaria.',
              '2023: el precio de esas mayorías fue la ley de amnistía, con la que el partido se apartó de su defensa habitual de la unidad territorial.',
              '2024-2026: Vox se opuso a la amnistía y a la distribución de los menores no acompañados llegados desde Canarias, lo que abrió una brecha con el Gobierno.'
            ]
          },
          {
            type: 'p',
            text: 'El segundo gobierno de Zapatero coincidió con el desplome. El IVA pasó del 16% al 18% en julio de 2010, hubo una reforma de pensiones en 2011 y una reforma laboral en 2012. El déficit del 4,1% del producto interior bruto en 2009 llegó al 9,2% en 2012, según Eurostat, y el desempleo tocó el 26% en 2013. Entre 2012 y 2013 el Gobierno rescató la banca con el FROB y con la venta de activos a la Sareb.'
          },
          {
            type: 'quote',
            text: 'La España constitucional es un Estado social y dinámico de Derecho, cuya soberanía reside en la nación española.',
            cite: 'Constitución española de 1978, artículo 1.1',
            author: 'Texto constitucional'
          },
          {
            type: 'p',
            text: 'La etapa que se abrió en 2019 muestra la distancia entre lo prometido y lo aplicado. El gobierno de coalición elevó el salario mínimo un 37% en 2020, hasta 1.014 euros al mes, y aprobó la ley contra la violencia de género en 2022 y la ley de personas trans ese mismo año. En noviembre de 2023 Sánchez fue investido con 179 votos gracias a un bloque que incluyó a Junts, ERC y EH Bildu.'
          },
          {
            type: 'note',
            text: 'Desde 2024 la vida del partido está marcada por el caso Koldo, la investigación abierta al exministro José Luis Ábalos, a la que siguió la dimisión de Santos Cerdán como secretario de Organización en junio de 2025. En 2026 el Gobierno anunció además una regularización de más de medio millón de personas sin papers, una medida que sitúa al PSOE en el centro del debate migratorio.'
          }
        ]
      },
      {
        id: 'criticas',
        heading: 'Críticas',
        blocks: [
          {
            type: 'p',
            text: 'Las críticas internas llegan de la base militant y de sectores del propio partido. Desde la izquierda se le reprocha la partitocracia, es decir, entender la política como un reparto de cargos entre élites, y también la tendencia a negociar con el PP antes que con sus aliados más cercanos.'
          },
          {
            type: 'ul',
            items: [
              'La parálisis de gobierno en la elaboración de los presupuestos, con la abstención de PNV, ERC o Junts.',
              'El apartamiento de la amnistía de 2023 respecto de la línea histórica del partido sobre la unidad territorial.',
              'La distancia entre el discurso sobre la desigualdad y la real política fiscal aplicada en los años de austeridad.',
              'La imagen pública deteriorada por los casos de corrupción y por una difícil gestión de la Moncloa.'
            ]
          },
          {
            type: 'p',
            text: 'Desde la derecha se le acusa de pactar con fuerzas separatistas, de rebajar la presión fiscal y de mantener una línea blanda ante el nacionalismo catalán y vasco. Los argumentos habituales del [[partido:partido-popular|Partido Popular]] contra el PSOE se han centrado en el gasto que implican los pactos territoriales y en las diferencias sobre el modelo de Estado.'
          },
          {
            type: 'p',
            text: 'En los estudios académicos se subrayan tres problemas: la dificultad para renovar la base electoral, la concentración de la organización en torno a la Secretaría General y la dificultad para distinguir el programa del partido del Gobierno que lo ejecuta. Todas las legislaturas desde 2015 se han desarrollado bajo mayoría relativa o de coalición.'
          }
        ]
      },
      {
        id: 'interno',
        heading: 'Vida interna',
        blocks: [
          {
            type: 'p',
            text: 'El PSOE se organiza en ramificaciones autonómicas, comités comarcales, un Comité Federal y una Comisión Federal de unos 40 miembros. El liderazgo real suele concentrarse en la Secretaría General, ocupada desde 2014 por Pedro Sánchez, reelegido en los congresos de 2021 y 2023. La crítica más repetida es precisamente esa concentración, que deja poco margen a las corrientes internas.'
          },
          {
            type: 'ul',
            items: [
              'La corriente pragmática formada por los dirigentes de los años noventa, que impulsó los acuerdos con el PP y con CiU.',
              'Las Izquierdas, sector que defiende una socialdemocracia más cercana a los sindicatos y a la economía pública.',
              'La corriente federal, que pide asumir el Estado federal como programa. Es minoritaria y no tiene representación electoral propia.',
              'Las Juventudes Socialistas, organización juvenil con considerable peso interno y en conflicto intermitente con la dirección.',
              'Los sectores que se autodenominan «historicistas», vinculados a Barón, Solana o Bono, y que representan la memoria reciente del partido.'
            ]
          },
          {
            type: 'p',
            text: 'Dos crisis recientes ilustran la tensión interna. La de 2014, cuando varios altos responsables del partido dimitieron antes de que Sánchez fuera elegido. Y la abierta con el caso Koldo desde 2024, que ha obligado a dimisiones y ha comprometido las cuentas de la organización: en 2022 el partido vendió parte de sus inmuebles para hacer frente a una deuda cercana a los 100 millones de euros.'
          },
          {
            type: 'dl',
            items: [
              ['Congreso federal', 'Órgano que elige al secretario general y aprueba los estatutos; se celebra cada tres años.'],
              ['Comité Federal', 'Entre los congresos, dirige la organización y fija la estrategia política.'],
              ['Conferencias autonómicas', 'Estructuras de organización territorial que eligen sus comités y sus candidaturas.'],
              ['Consejo Federal', 'Órgano consultivo que reúne a las direcciones de las organizaciones territoriales.'],
              ['Fundación Pablo Iglesias', 'Fundación cultural y formativa, constituida en 1989 con el patrimonio del partido.']
            ]
          }
        ]
      },
      {
        id: 'internacional',
        heading: 'Presencia europea e internacional',
        blocks: [
          {
            type: 'p',
            text: 'En Europa el PSOE integra el Partido Socialista Europeo y el Grupo de la Alianza Progresista de Socialistas y Demócratas, al que se adscribió en 2004 tras dejar el grupo de la Izquierda Unitaria Europea, que ocupó entre 1989 y 2004. En el ámbito mundial forma parte de la Internacional Socialista y de la Alianza Progresista, creada en 2013.'
          },
          {
            type: 'figure',
            caption: 'Trayectoria de la dirección federal del PSOE: Pablo Iglesias (1879-1895), Pablo Castellino (1976-1979), Enrique Barón Crespo (1979-1982), Felipe González (1982-1996), Joaquín Leguina (1996-2000), José Bono (2000-2004), José Luis Rodríguez Zapatero (2004-2011) y Pedro Sánchez (desde 2014).',
            credit: 'Síntesis sobre datos del partido'
          },
          {
            type: 'ul',
            items: [
              'Partido Socialista Europeo (PES), del que el PSOE es miembro de pleno derecho.',
              'Grupo de la Alianza Progresista de Socialistas y Demócratas en el Parlamento Europeo.',
              'Alianza Progresista, creada en Leipzig en 2013 como alternativa a la socialdemocracia global.',
              'Internacional Socialista, en la que el PSOE participa desde 1889 como partido fundador.',
              'Acuerdos de cooperación bilateral con partidos socialdemócratas de América Latina y de Europa oriental.',
            ]
          }
        ]
      }
    ],
    related: ['socialdemocracia', 'marxismo', 'reformismo', 'partido:partido-popular', 'partido:vox'],
    categories: ['PSOE', 'España'],
    references: [
      {
        title: 'Historia del Partido Socialista Obrero Español',
        author: 'Julio Aróstegui (comp.)',
        publisher: 'Siglo XXI Editores, México',
        year: 1998,
        type: 'libro'
      },
      {
        title: 'Historia del Partido Socialista Obrero Español',
        author: 'Hugh Thomas',
        publisher: 'Grijalbo, Barcelona',
        year: 1986,
        type: 'libro'
      },
      {
        title: 'La Transición española: de la Dictadura a la Democracia (1975-1982)',
        author: 'Javier Tusell y José García de Cortázar',
        publisher: 'Alianza Editorial, Madrid',
        year: 1989,
        type: 'libro'
      },
      {
        title: 'Constitución española de 1978',
        author: 'Cortes Generales y Senado de España',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 1978,
        type: 'documento',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229'
      },
      {
        title: 'Programa de Gobierno 2023',
        author: 'Partido Socialista Obrero Español',
        publisher: 'PSOE, Madrid',
        year: 2023,
        type: 'documento',
        url: 'https://www.psoe.es/'
      },
      {
        title: 'Ley 20/2022, de 19 de octubre, de Memoria Democrática',
        author: 'Jefatura del Estado (España)',
        publisher: 'Boletín Oficial del Estado, Madrid',
        year: 2022,
        type: 'documento',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-17039'
      }
    ]
  };
})(window.PW = window.PW || { articles: {}, parties: {}, geo: {}, orgs: {} });
