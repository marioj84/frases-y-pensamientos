const data = {
  filosofos: [
    { nombre: 'Sócrates', epoca: 'Grecia clásica', corriente: 'Filosofía clásica', imagen: 'https://images.unsplash.com/photo-1604515447032-831711b2c1c8?auto=format&fit=crop&w=900&q=80', descripcion: 'Figura central de la filosofía occidental. Su método se basaba en preguntar, examinar creencias y buscar una vida más consciente.', conceptos: ['duda', 'virtud', 'conocimiento', 'ética'], origen: 'Griego · philosophía · amor por la sabiduría' },
    { nombre: 'Platón', epoca: 'Grecia clásica', corriente: 'Idealismo', imagen: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=900&q=80', descripcion: 'Pensó la realidad como algo más profundo que lo visible. La verdad no se agota en la apariencia.', conceptos: ['ideas', 'alma', 'justicia', 'verdad'], origen: 'Griego · idéa · forma visible / aspecto' },
    { nombre: 'Aristóteles', epoca: 'Grecia clásica', corriente: 'Ética de la virtud', imagen: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=900&q=80', descripcion: 'Propuso una filosofía práctica centrada en virtud, razón, observación y búsqueda de una vida plena.', conceptos: ['virtud', 'razón', 'felicidad', 'hábito'], origen: 'Griego · aretḗ · excelencia / virtud' },
    { nombre: 'Diógenes', epoca: 'Grecia clásica', corriente: 'Cinismo', imagen: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=900&q=80', descripcion: 'Cuestionó las convenciones sociales y defendió una vida simple, libre de apariencias y falsas necesidades.', conceptos: ['simpleza', 'crítica social', 'libertad', 'autenticidad'], origen: 'Griego · kynikós · relativo al perro / vida sin ornamento' },
    { nombre: 'Epicuro', epoca: 'Helenismo', corriente: 'Epicureísmo', imagen: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=900&q=80', descripcion: 'Asoció la vida buena con placeres sobrios, amistad, tranquilidad y ausencia de miedo innecesario.', conceptos: ['placer', 'amistad', 'miedo', 'tranquilidad'], origen: 'Griego · hēdonḗ · placer' },
    { nombre: 'Epicteto', epoca: 'Roma antigua', corriente: 'Estoicismo', imagen: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80', descripcion: 'Enseñó a distinguir entre lo que depende de nosotros y lo que no, como base de libertad interior.', conceptos: ['control', 'juicio', 'libertad interior', 'aceptación'], origen: 'Griego · stoa · pórtico / lugar de enseñanza' },
    { nombre: 'Séneca', epoca: 'Roma antigua', corriente: 'Estoicismo', imagen: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=900&q=80', descripcion: 'Pensó la brevedad de la vida, el dominio de las pasiones y la serenidad ante la fortuna.', conceptos: ['tiempo', 'muerte', 'serenidad', 'fortuna'], origen: 'Latín · fortuna · azar / destino' },
    { nombre: 'Marco Aurelio', epoca: 'Roma antigua', corriente: 'Estoicismo', imagen: 'https://images.unsplash.com/photo-1552231724-3a0bd650c748?auto=format&fit=crop&w=900&q=80', descripcion: 'Emperador romano y pensador estoico. Sus meditaciones tratan sobre disciplina, deber y dominio interior.', conceptos: ['disciplina', 'control', 'deber', 'serenidad'], origen: 'Griego · stoa · pórtico / lugar de enseñanza' },
    { nombre: 'René Descartes', epoca: 'Modernidad', corriente: 'Racionalismo', imagen: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80', descripcion: 'Usó la duda metódica para buscar una certeza firme. La razón se vuelve punto de partida.', conceptos: ['duda', 'razón', 'certeza', 'mente'], origen: 'Latín · ratio · razón / cálculo' },
    { nombre: 'Baruch Spinoza', epoca: 'Modernidad', corriente: 'Racionalismo', imagen: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=900&q=80', descripcion: 'Pensó a Dios, naturaleza, libertad y necesidad como partes de una misma estructura racional.', conceptos: ['naturaleza', 'necesidad', 'libertad', 'afectos'], origen: 'Latín · natura · nacimiento / naturaleza' },
    { nombre: 'David Hume', epoca: 'Ilustración', corriente: 'Empirismo', imagen: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80', descripcion: 'Cuestionó certezas absolutas y defendió que el conocimiento parte de experiencia, hábito y percepción.', conceptos: ['experiencia', 'hábito', 'percepción', 'escepticismo'], origen: 'Griego · empeiría · experiencia' },
    { nombre: 'Immanuel Kant', epoca: 'Ilustración', corriente: 'Idealismo trascendental', imagen: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80', descripcion: 'Exploró los límites de la razón, la moral autónoma y las condiciones que hacen posible conocer.', conceptos: ['razón', 'deber', 'autonomía', 'conocimiento'], origen: 'Latín · transcendere · ir más allá' },
    { nombre: 'Arthur Schopenhauer', epoca: 'Siglo XIX', corriente: 'Pesimismo filosófico', imagen: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80', descripcion: 'Vio el deseo como fuente constante de sufrimiento y la voluntad como fuerza ciega de la existencia.', conceptos: ['voluntad', 'deseo', 'sufrimiento', 'negación'], origen: 'Alemán · Wille · voluntad' },
    { nombre: 'Søren Kierkegaard', epoca: 'Siglo XIX', corriente: 'Existencialismo religioso', imagen: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&w=900&q=80', descripcion: 'Pensó la angustia, la fe, la elección individual y el salto subjetivo ante la incertidumbre.', conceptos: ['angustia', 'fe', 'elección', 'subjetividad'], origen: 'Latín · existentia · existencia' },
    { nombre: 'Friedrich Nietzsche', epoca: 'Siglo XIX', corriente: 'Vitalismo / crítica moral', imagen: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80', descripcion: 'Cuestionó la moral tradicional, la religión y las formas débiles de vivir. Impulsa la creación de valores propios.', conceptos: ['voluntad', 'poder', 'moral', 'superación'], origen: 'Alemán · Wille zur Macht · voluntad de poder' },
    { nombre: 'Jean-Paul Sartre', epoca: 'Siglo XX', corriente: 'Existencialismo', imagen: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80', descripcion: 'Defendió que la existencia precede a la esencia y que la libertad implica responsabilidad radical.', conceptos: ['libertad', 'responsabilidad', 'angustia', 'elección'], origen: 'Latín · essentia · esencia' },
    { nombre: 'Simone de Beauvoir', epoca: 'Siglo XX', corriente: 'Existencialismo / feminismo', imagen: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&w=900&q=80', descripcion: 'Analizó libertad, opresión, construcción social y condición femenina desde una mirada existencial.', conceptos: ['libertad', 'opresión', 'otro', 'género'], origen: 'Latín · alter · otro' },
    { nombre: 'Albert Camus', epoca: 'Siglo XX', corriente: 'Absurdismo', imagen: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80', descripcion: 'Exploró el absurdo de la existencia y la posibilidad de vivir con lucidez, dignidad y rebelión.', conceptos: ['absurdo', 'sentido', 'rebeldía', 'libertad'], origen: 'Latín · absurdus · disonante / fuera de tono' },
    { nombre: 'Hannah Arendt', epoca: 'Siglo XX', corriente: 'Filosofía política', imagen: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80', descripcion: 'Pensó acción, poder, juicio, responsabilidad política y banalidad del mal.', conceptos: ['acción', 'poder', 'juicio', 'responsabilidad'], origen: 'Griego · polis · ciudad / comunidad política' },
    { nombre: 'Michel Foucault', epoca: 'Siglo XX', corriente: 'Postestructuralismo', imagen: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80', descripcion: 'Analizó poder, saber, vigilancia, disciplina e instituciones que producen formas de subjetividad.', conceptos: ['poder', 'saber', 'vigilancia', 'disciplina'], origen: 'Latín · disciplina · instrucción / orden' }
  ],

  corrientes: [
    { nombre: 'Filosofía clásica', mirada: 'Cuando una pregunta simple desarma una vida entera.', descripcion: 'Busca virtud, verdad, justicia y examen racional de la vida.', conceptos: ['verdad', 'virtud', 'duda', 'justicia'], autores: ['Sócrates', 'Platón', 'Aristóteles'], origen: 'Griego · philosophía · amor por la sabiduría' },
    { nombre: 'Cinismo', mirada: 'Cuando vivir simple se vuelve una crítica contra el mundo.', descripcion: 'Cuestiona convenciones, lujo, apariencia y normas sociales artificiales.', conceptos: ['simpleza', 'autenticidad', 'libertad', 'crítica social'], autores: ['Diógenes'], origen: 'Griego · kynikós · perruno / sin ornamento' },
    { nombre: 'Epicureísmo', mirada: 'Cuando la paz vale más que el exceso.', descripcion: 'Defiende placeres sobrios, amistad y ausencia de miedo como forma de vida tranquila.', conceptos: ['placer', 'amistad', 'tranquilidad', 'miedo'], autores: ['Epicuro'], origen: 'Griego · hēdonḗ · placer' },
    { nombre: 'Estoicismo', mirada: 'Cuando necesitas calma ante lo inevitable.', descripcion: 'Distingue entre lo que depende de nosotros y lo que no. Busca serenidad, virtud y dominio interior.', conceptos: ['control', 'disciplina', 'aceptación', 'virtud'], autores: ['Epicteto', 'Séneca', 'Marco Aurelio'], origen: 'Griego · stoa · pórtico' },
    { nombre: 'Racionalismo', mirada: 'Cuando necesitas una certeza que resista la duda.', descripcion: 'Confía en la razón como vía principal para conocer y ordenar el mundo.', conceptos: ['razón', 'certeza', 'método', 'mente'], autores: ['Descartes', 'Spinoza'], origen: 'Latín · ratio · razón' },
    { nombre: 'Empirismo', mirada: 'Cuando solo crees lo que atraviesa la experiencia.', descripcion: 'Da prioridad a experiencia, percepción y observación sobre ideas innatas.', conceptos: ['experiencia', 'percepción', 'hábito', 'evidencia'], autores: ['Hume', 'Locke'], origen: 'Griego · empeiría · experiencia' },
    { nombre: 'Idealismo', mirada: 'Cuando sospechas que lo visible no agota lo real.', descripcion: 'Sostiene que ideas, mente o estructuras profundas condicionan lo que llamamos realidad.', conceptos: ['ideas', 'verdad', 'alma', 'realidad'], autores: ['Platón', 'Kant', 'Hegel'], origen: 'Griego · idéa · forma / apariencia' },
    { nombre: 'Ética de la virtud', mirada: 'Cuando vivir bien depende de lo que practicas cada día.', descripcion: 'Enfoca la vida buena como desarrollo de hábitos, carácter y equilibrio racional.', conceptos: ['virtud', 'hábito', 'felicidad', 'carácter'], autores: ['Aristóteles'], origen: 'Griego · êthos · carácter / costumbre' },
    { nombre: 'Pesimismo filosófico', mirada: 'Cuando el deseo parece una máquina que nunca descansa.', descripcion: 'Interpreta el sufrimiento, la voluntad y el deseo como fuerzas centrales de la existencia.', conceptos: ['deseo', 'voluntad', 'sufrimiento', 'renuncia'], autores: ['Schopenhauer'], origen: 'Latín · pessimus · lo peor' },
    { nombre: 'Existencialismo', mirada: 'Cuando entiendes que elegir también pesa.', descripcion: 'Se centra en libertad, responsabilidad, angustia y creación de sentido en la propia vida.', conceptos: ['libertad', 'responsabilidad', 'elección', 'angustia'], autores: ['Kierkegaard', 'Sartre', 'Simone de Beauvoir'], origen: 'Latín · existere · aparecer / estar fuera' },
    { nombre: 'Nihilismo', mirada: 'Cuando ninguna respuesta heredada parece suficiente.', descripcion: 'Cuestiona valores, sentido y verdades absolutas; puede abrir una crisis o una creación nueva.', conceptos: ['vacío', 'sentido', 'moral', 'valor'], autores: ['Nietzsche'], origen: 'Latín · nihil · nada' },
    { nombre: 'Absurdismo', mirada: 'Cuando buscas sentido y el mundo guarda silencio.', descripcion: 'Parte del choque entre nuestra búsqueda de sentido y un mundo que no ofrece respuestas definitivas.', conceptos: ['absurdo', 'sentido', 'rebeldía', 'lucidez'], autores: ['Albert Camus'], origen: 'Latín · absurdus · fuera de tono' },
    { nombre: 'Filosofía política', mirada: 'Cuando pensar también implica responder por el mundo común.', descripcion: 'Analiza poder, acción, justicia, instituciones, responsabilidad y convivencia.', conceptos: ['poder', 'acción', 'justicia', 'responsabilidad'], autores: ['Hannah Arendt', 'Platón', 'Aristóteles'], origen: 'Griego · polis · ciudad' },
    { nombre: 'Postestructuralismo', mirada: 'Cuando sospechas que incluso la verdad tiene historia.', descripcion: 'Examina lenguaje, poder, discurso, instituciones y construcción de subjetividad.', conceptos: ['poder', 'discurso', 'vigilancia', 'saber'], autores: ['Michel Foucault'], origen: 'Latín · structura · disposición / construcción' }
  ],

  frases: [
    { texto: 'La vida no examinada no merece ser vivida.', autor: 'Sócrates', corriente: 'Filosofía clásica', tema: 'duda' },
    { texto: 'Solo sé que no sé nada.', autor: 'Sócrates', corriente: 'Filosofía clásica', tema: 'humildad intelectual' },
    { texto: 'La ignorancia es la raíz de todo mal.', autor: 'Platón', corriente: 'Idealismo', tema: 'conocimiento' },
    { texto: 'El comienzo es la parte más importante de la obra.', autor: 'Platón', corriente: 'Idealismo', tema: 'inicio' },
    { texto: 'Somos lo que hacemos repetidamente.', autor: 'Aristóteles', corriente: 'Ética de la virtud', tema: 'hábito' },
    { texto: 'La virtud está en el término medio.', autor: 'Aristóteles', corriente: 'Ética de la virtud', tema: 'equilibrio' },
    { texto: 'Cuanto menos necesito, más libre soy.', autor: 'Diógenes', corriente: 'Cinismo', tema: 'simpleza' },
    { texto: 'No arruines lo que tienes deseando lo que no tienes.', autor: 'Epicuro', corriente: 'Epicureísmo', tema: 'deseo' },
    { texto: 'No nos afecta lo que nos sucede, sino lo que pensamos sobre lo que nos sucede.', autor: 'Epicteto', corriente: 'Estoicismo', tema: 'juicio' },
    { texto: 'No expliques tu filosofía. Encárnala.', autor: 'Epicteto', corriente: 'Estoicismo', tema: 'coherencia' },
    { texto: 'No es que tengamos poco tiempo, sino que perdemos mucho.', autor: 'Séneca', corriente: 'Estoicismo', tema: 'tiempo' },
    { texto: 'Sufrimos más a menudo por la imaginación que por la realidad.', autor: 'Séneca', corriente: 'Estoicismo', tema: 'miedo' },
    { texto: 'Tienes poder sobre tu mente, no sobre los acontecimientos externos.', autor: 'Marco Aurelio', corriente: 'Estoicismo', tema: 'control' },
    { texto: 'La felicidad de tu vida depende de la calidad de tus pensamientos.', autor: 'Marco Aurelio', corriente: 'Estoicismo', tema: 'pensamiento' },
    { texto: 'Pienso, luego existo.', autor: 'René Descartes', corriente: 'Racionalismo', tema: 'certeza' },
    { texto: 'La duda es el origen de la sabiduría.', autor: 'René Descartes', corriente: 'Racionalismo', tema: 'duda' },
    { texto: 'No llorar, no reír, sino comprender.', autor: 'Spinoza', corriente: 'Racionalismo', tema: 'comprensión' },
    { texto: 'El deseo es la esencia misma del hombre.', autor: 'Spinoza', corriente: 'Racionalismo', tema: 'deseo' },
    { texto: 'La costumbre es la gran guía de la vida humana.', autor: 'David Hume', corriente: 'Empirismo', tema: 'hábito' },
    { texto: 'La razón es y debe ser esclava de las pasiones.', autor: 'David Hume', corriente: 'Empirismo', tema: 'pasión' },
    { texto: 'Atrévete a saber.', autor: 'Immanuel Kant', corriente: 'Ilustración', tema: 'autonomía' },
    { texto: 'Obra de tal modo que trates a la humanidad siempre como un fin y nunca solo como un medio.', autor: 'Immanuel Kant', corriente: 'Ética kantiana', tema: 'dignidad' },
    { texto: 'La vida oscila como un péndulo entre el dolor y el aburrimiento.', autor: 'Arthur Schopenhauer', corriente: 'Pesimismo filosófico', tema: 'sufrimiento' },
    { texto: 'El deseo nunca se satisface de forma definitiva.', autor: 'Arthur Schopenhauer', corriente: 'Pesimismo filosófico', tema: 'deseo' },
    { texto: 'La angustia es el vértigo de la libertad.', autor: 'Søren Kierkegaard', corriente: 'Existencialismo', tema: 'angustia' },
    { texto: 'La vida solo puede ser comprendida mirando hacia atrás, pero debe ser vivida mirando hacia adelante.', autor: 'Søren Kierkegaard', corriente: 'Existencialismo', tema: 'tiempo' },
    { texto: 'Quien tiene un porqué para vivir puede soportar casi cualquier cómo.', autor: 'Friedrich Nietzsche', corriente: 'Vitalismo', tema: 'sentido' },
    { texto: 'Dios ha muerto.', autor: 'Friedrich Nietzsche', corriente: 'Nihilismo', tema: 'crisis de valores' },
    { texto: 'Lo que no me mata me hace más fuerte.', autor: 'Friedrich Nietzsche', corriente: 'Vitalismo', tema: 'superación' },
    { texto: 'El hombre está condenado a ser libre.', autor: 'Jean-Paul Sartre', corriente: 'Existencialismo', tema: 'libertad' },
    { texto: 'La existencia precede a la esencia.', autor: 'Jean-Paul Sartre', corriente: 'Existencialismo', tema: 'identidad' },
    { texto: 'No se nace mujer: se llega a serlo.', autor: 'Simone de Beauvoir', corriente: 'Existencialismo / feminismo', tema: 'construcción social' },
    { texto: 'Querer ser libre es también querer libres a los otros.', autor: 'Simone de Beauvoir', corriente: 'Existencialismo / feminismo', tema: 'libertad' },
    { texto: 'En medio del invierno aprendí que había en mí un verano invencible.', autor: 'Albert Camus', corriente: 'Absurdismo', tema: 'resistencia' },
    { texto: 'El absurdo nace de la confrontación entre la llamada humana y el silencio irrazonable del mundo.', autor: 'Albert Camus', corriente: 'Absurdismo', tema: 'absurdo' },
    { texto: 'La libertad es la capacidad de comenzar algo nuevo.', autor: 'Hannah Arendt', corriente: 'Filosofía política', tema: 'acción' },
    { texto: 'Nadie tiene derecho a obedecer.', autor: 'Hannah Arendt', corriente: 'Filosofía política', tema: 'responsabilidad' },
    { texto: 'Donde hay poder, hay resistencia.', autor: 'Michel Foucault', corriente: 'Postestructuralismo', tema: 'poder' },
    { texto: 'El saber no está hecho para comprender, sino para cortar.', autor: 'Michel Foucault', corriente: 'Postestructuralismo', tema: 'saber' }
  ],

  articulos: [
    { slug: 'la-calma-no-es-pasividad', titulo: 'La calma no es pasividad', categoria: 'Estoicismo', resumen: 'Aceptar lo que no controlamos no significa rendirse; significa dejar de gastar fuerza donde no hay palanca.', apertura: 'Hay una calma que no es debilidad. Es una forma de inteligencia: saber dónde termina tu poder y dónde empieza el ruido.', origen: 'Griego · stoa · pórtico' },
    { slug: 'cuando-la-libertad-pesa', titulo: 'Cuando la libertad pesa', categoria: 'Existencialismo', resumen: 'Ser libre no siempre se siente liviano: elegir también implica cargar con consecuencias.', apertura: 'La libertad no siempre llega como una puerta abierta. A veces llega como una pregunta incómoda: ¿qué vas a hacer con lo que depende de ti?', origen: 'Latín · libertas · condición de quien no es esclavo' },
    { slug: 'crear-sentido-cuando-no-hay-respuestas', titulo: 'Crear sentido cuando no hay respuestas', categoria: 'Absurdismo', resumen: 'Una mirada breve sobre cómo vivir con lucidez cuando la vida no entrega manual de instrucciones.', apertura: 'El mundo no siempre responde. Aun así, insistimos en preguntar. Tal vez ahí empieza la dignidad.', origen: 'Latín · sensus · percepción / dirección' },
    { slug: 'el-deseo-como-jaula', titulo: 'El deseo como jaula', categoria: 'Pesimismo filosófico', resumen: 'Cuando el deseo gobierna, la vida puede volverse una persecución sin descanso.', apertura: 'No todo deseo libera. Algunos deseos solo cambian de objeto y conservan la misma ansiedad.', origen: 'Latín · desiderium · anhelo / falta' },
    { slug: 'la-duda-como-metodo', titulo: 'La duda como método', categoria: 'Racionalismo', resumen: 'Dudar no siempre es inseguridad: a veces es una forma de limpiar el pensamiento.', apertura: 'Hay dudas que paralizan y dudas que ordenan. La diferencia está en si abren camino o solo dan vueltas.', origen: 'Latín · dubitare · vacilar' },
    { slug: 'vivir-sin-apariencia', titulo: 'Vivir sin apariencia', categoria: 'Cinismo', resumen: 'La simpleza también puede ser una crítica contra la vida artificial.', apertura: 'Hay una libertad extraña en dejar de actuar para una mirada ajena.', origen: 'Griego · kynikós · vida sin ornamento' },
    { slug: 'el-poder-que-nos-mira', titulo: 'El poder que nos mira', categoria: 'Postestructuralismo', resumen: 'A veces el poder no grita: organiza, clasifica, observa y normaliza.', apertura: 'No todo poder se impone con violencia. Algunos poderes se vuelven costumbre.', origen: 'Latín · potere · poder / ser capaz' },
    { slug: 'pensar-el-mundo-comun', titulo: 'Pensar el mundo común', categoria: 'Filosofía política', resumen: 'No pensamos solos: nuestras decisiones ocurren dentro de un mundo compartido.', apertura: 'Pensar también es hacerse responsable del espacio donde otros viven.', origen: 'Griego · polis · ciudad' }
  ],

  preguntas: [
    '¿Qué significa vivir bien?', '¿La libertad nos salva o nos condena?', '¿Qué hacemos con el dolor?', '¿Existe una verdad detrás de lo visible?', '¿La disciplina es una forma de paz?', '¿Qué queda cuando nada parece tener sentido?', '¿El deseo nos mueve o nos encadena?', '¿Cuándo obedecer se vuelve peligroso?', '¿Qué parte de mí eligió esta vida?', '¿La calma es aceptación o renuncia?', '¿Pensar demasiado puede ser una forma de huir?', '¿Qué significa ser auténtico?'
  ],

  puertas: [
    { titulo: 'Sobre la libertad', texto: 'Pensar la libertad no como permiso, sino como carga, elección y consecuencia.' },
    { titulo: 'Sobre el silencio', texto: 'A veces una idea no responde: acompaña, incomoda y espera.' },
    { titulo: 'Sobre el deseo', texto: 'El deseo revela lo que falta, pero también lo que nos gobierna.' },
    { titulo: 'Sobre la muerte', texto: 'No como final decorativo, sino como límite que ordena lo importante.' },
    { titulo: 'Sobre la voluntad', texto: 'No basta querer: también hay que preguntarse quién quiere dentro de uno.' },
    { titulo: 'Sobre la virtud', texto: 'La excelencia no aparece en discursos, sino en repetición y carácter.' },
    { titulo: 'Sobre el poder', texto: 'El poder no siempre prohíbe: a veces produce hábitos, discursos y normalidad.' },
    { titulo: 'Sobre la angustia', texto: 'La angustia puede ser miedo, pero también evidencia de que una elección importa.' },
    { titulo: 'Sobre la simpleza', texto: 'Reducir necesidades puede ser una forma de recuperar soberanía interior.' }
  ],

  archivos: [
    { idea: 'Libertad', corriente: 'Existencialismo', autor: 'Sartre', tension: 'elegir / cargar consecuencias', origen: 'Latín · libertas' },
    { idea: 'Virtud', corriente: 'Ética de la virtud', autor: 'Aristóteles', tension: 'hábito / carácter', origen: 'Latín · virtus / Griego · aretḗ' },
    { idea: 'Nada', corriente: 'Nihilismo', autor: 'Nietzsche', tension: 'vacío / creación de valores', origen: 'Latín · nihil' },
    { idea: 'Absurdo', corriente: 'Absurdismo', autor: 'Camus', tension: 'sentido / silencio del mundo', origen: 'Latín · absurdus' },
    { idea: 'Control', corriente: 'Estoicismo', autor: 'Epicteto', tension: 'voluntad / destino', origen: 'Latín · contra rotulus / dominio' },
    { idea: 'Idea', corriente: 'Idealismo', autor: 'Platón', tension: 'apariencia / verdad', origen: 'Griego · idéa' },
    { idea: 'Deseo', corriente: 'Pesimismo filosófico', autor: 'Schopenhauer', tension: 'anhelo / sufrimiento', origen: 'Latín · desiderium' },
    { idea: 'Angustia', corriente: 'Existencialismo', autor: 'Kierkegaard', tension: 'posibilidad / vértigo', origen: 'Latín · angustia · estrechez' },
    { idea: 'Razón', corriente: 'Racionalismo', autor: 'Descartes', tension: 'duda / certeza', origen: 'Latín · ratio' },
    { idea: 'Experiencia', corriente: 'Empirismo', autor: 'Hume', tension: 'percepción / costumbre', origen: 'Griego · empeiría' },
    { idea: 'Poder', corriente: 'Postestructuralismo', autor: 'Foucault', tension: 'control / resistencia', origen: 'Latín · potere' },
    { idea: 'Acción', corriente: 'Filosofía política', autor: 'Arendt', tension: 'comienzo / responsabilidad', origen: 'Latín · actio' }
  ],

  mapa: [
    ['Libertad', 'Responsabilidad', 'Angustia', 'Existencialismo'],
    ['Dolor', 'Aceptación', 'Disciplina', 'Estoicismo'],
    ['Vacío', 'Valor', 'Voluntad', 'Nihilismo'],
    ['Absurdo', 'Lucidez', 'Rebeldía', 'Camus'],
    ['Hábito', 'Carácter', 'Virtud', 'Aristóteles'],
    ['Deseo', 'Falta', 'Sufrimiento', 'Schopenhauer'],
    ['Duda', 'Método', 'Certeza', 'Descartes'],
    ['Poder', 'Discurso', 'Vigilancia', 'Foucault'],
    ['Acción', 'Mundo común', 'Responsabilidad', 'Arendt']
  ]
};

const analyzerRules = {
  'Estoicismo': {
    keywords: ['control', 'calma', 'aceptar', 'aceptación', 'disciplina', 'serenidad', 'resistir', 'deber', 'mente', 'acontecimientos', 'externo', 'paz', 'fortuna', 'destino', 'paciencia'],
    authors: ['Epicteto', 'Séneca', 'Marco Aurelio'],
    concepts: ['control interior', 'aceptación', 'virtud', 'disciplina'],
    explanation: 'La frase parece enfocarse en dominar el juicio propio, aceptar lo inevitable o sostener serenidad ante lo externo.'
  },
  'Existencialismo': {
    keywords: ['libertad', 'elegir', 'elección', 'decidir', 'responsabilidad', 'angustia', 'existencia', 'vida', 'identidad', 'soy', 'sentido', 'consecuencia', 'culpa', 'posibilidad', 'autenticidad'],
    authors: ['Kierkegaard', 'Sartre', 'Simone de Beauvoir'],
    concepts: ['libertad', 'responsabilidad', 'angustia', 'autenticidad'],
    explanation: 'La frase se acerca a la tensión entre elegir, hacerse responsable y construir sentido desde la propia existencia.'
  },
  'Nihilismo': {
    keywords: ['nada', 'vacío', 'sin sentido', 'sentido', 'valores', 'moral', 'dios', 'muerto', 'destruir', 'creer', 'absurdo', 'inútil', 'falso', 'verdad absoluta'],
    authors: ['Nietzsche'],
    concepts: ['vacío', 'crisis de valores', 'moral', 'creación'],
    explanation: 'La frase cuestiona valores heredados, sentido absoluto o verdades que antes parecían incuestionables.'
  },
  'Absurdismo': {
    keywords: ['absurdo', 'silencio', 'mundo', 'sentido', 'pregunta', 'respuesta', 'lucidez', 'rebelión', 'invierno', 'resistir', 'inexplicable', 'manual', 'destino'],
    authors: ['Albert Camus'],
    concepts: ['absurdo', 'lucidez', 'rebeldía', 'sentido'],
    explanation: 'La frase parece partir del choque entre la necesidad humana de sentido y un mundo que no responde del todo.'
  },
  'Ética de la virtud': {
    keywords: ['virtud', 'hábito', 'carácter', 'excelencia', 'equilibrio', 'prudencia', 'felicidad', 'repetir', 'práctica', 'vivir bien', 'moderación', 'conducta'],
    authors: ['Aristóteles'],
    concepts: ['carácter', 'hábito', 'equilibrio', 'vida buena'],
    explanation: 'La frase se relaciona con formar carácter mediante hábitos, moderación y práctica cotidiana.'
  },
  'Idealismo': {
    keywords: ['idea', 'verdad', 'alma', 'realidad', 'apariencia', 'visible', 'forma', 'mundo', 'mente', 'perfecto', 'esencia', 'sombra'],
    authors: ['Platón', 'Kant'],
    concepts: ['ideas', 'apariencia', 'verdad', 'realidad'],
    explanation: 'La frase sugiere que lo visible no agota lo real y que hay una estructura más profunda detrás de la apariencia.'
  },
  'Racionalismo': {
    keywords: ['razón', 'duda', 'certeza', 'pensar', 'método', 'mente', 'comprender', 'orden', 'claridad', 'evidente', 'demostrar', 'lógica'],
    authors: ['Descartes', 'Spinoza'],
    concepts: ['razón', 'certeza', 'método', 'comprensión'],
    explanation: 'La frase da prioridad al pensamiento claro, la duda metódica o la razón como forma de ordenar la experiencia.'
  },
  'Empirismo': {
    keywords: ['experiencia', 'percibir', 'percepción', 'sentir', 'costumbre', 'hábito', 'observación', 'evidencia', 'hechos', 'ver', 'aprender', 'prueba'],
    authors: ['David Hume'],
    concepts: ['experiencia', 'percepción', 'observación', 'costumbre'],
    explanation: 'La frase parece dar peso a lo vivido, observado o aprendido mediante experiencia.'
  },
  'Pesimismo filosófico': {
    keywords: ['dolor', 'sufrimiento', 'deseo', 'falta', 'aburrimiento', 'renuncia', 'voluntad', 'ansiedad', 'cansancio', 'querer', 'necesidad', 'insatisfacción'],
    authors: ['Schopenhauer'],
    concepts: ['deseo', 'sufrimiento', 'voluntad', 'renuncia'],
    explanation: 'La frase se acerca a la idea de que el deseo y la voluntad pueden producir sufrimiento constante.'
  },
  'Cinismo': {
    keywords: ['simple', 'simpleza', 'apariencia', 'lujo', 'necesito', 'libre', 'sociedad', 'convención', 'falso', 'máscara', 'auténtico', 'despojo'],
    authors: ['Diógenes'],
    concepts: ['simpleza', 'autenticidad', 'crítica social', 'libertad'],
    explanation: 'La frase critica la apariencia, la vida artificial o las necesidades impuestas por la sociedad.'
  },
  'Epicureísmo': {
    keywords: ['placer', 'tranquilidad', 'amistad', 'miedo', 'paz', 'sencillo', 'sobrio', 'deseo', 'disfrutar', 'ausencia', 'dolor', 'calma'],
    authors: ['Epicuro'],
    concepts: ['placer sobrio', 'amistad', 'tranquilidad', 'ausencia de miedo'],
    explanation: 'La frase apunta a una vida sobria, tranquila y liberada de miedos o deseos innecesarios.'
  },
  'Filosofía política': {
    keywords: ['poder', 'responsabilidad', 'obedecer', 'acción', 'mundo', 'común', 'justicia', 'sociedad', 'política', 'otros', 'comunidad', 'mal'],
    authors: ['Hannah Arendt'],
    concepts: ['acción', 'responsabilidad', 'mundo común', 'poder'],
    explanation: 'La frase conecta la reflexión personal con responsabilidad, acción y vida en común.'
  },
  'Postestructuralismo': {
    keywords: ['poder', 'discurso', 'vigilancia', 'saber', 'normalidad', 'cuerpo', 'institución', 'control', 'verdad', 'clasificar', 'mirada', 'norma'],
    authors: ['Michel Foucault'],
    concepts: ['poder', 'discurso', 'vigilancia', 'subjetividad'],
    explanation: 'La frase sospecha de las formas invisibles en que poder, lenguaje e instituciones producen realidad.'
  }
};

function setupMenu() {
  const btn = document.getElementById('menuBtn');
  const nav = document.querySelector('.nav');
  if (btn && nav) btn.addEventListener('click', () => nav.classList.toggle('open'));
}

function normalizeText(text) {
  return (text || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function renderCards(containerId, items, type) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(item => {
    if (type === 'filosofo') {
      return `<article class="card fade-in"><img src="${item.imagen}" alt="Imagen referencial de ${item.nombre}"><p class="eyebrow">${item.epoca}</p><h3>${item.nombre}</h3><p><strong>${item.corriente}</strong></p><p>${item.descripcion}</p><p class="origin">${item.origen}</p><div class="card-meta">${item.conceptos.map(c => `<span class="tag">${c}</span>`).join('')}</div></article>`;
    }
    if (type === 'corriente') {
      return `<article class="card current-card fade-in"><p class="eyebrow">Forma de mirar la vida</p><h3>${item.nombre}</h3><blockquote>${item.mirada}</blockquote><p>${item.descripcion}</p><p class="origin">Origen: ${item.origen}</p><p class="small"><strong>Autores:</strong> ${item.autores.join(', ')}</p><div class="card-meta">${item.conceptos.map(c => `<span class="tag">${c}</span>`).join('')}</div></article>`;
    }
    return `<article class="card essay-card fade-in"><p class="eyebrow">${item.categoria}</p><h3>${item.titulo}</h3><p class="essay-opening">${item.apertura}</p><p>${item.resumen}</p><p class="origin">${item.origen}</p><a class="button" href="articulo.html?slug=${item.slug}">Abrir reflexión</a></article>`;
  }).join('');
}

function includesSmart(haystack, needle) {
  return normalizeText(haystack).includes(normalizeText(needle));
}

function searchAll(query) {
  const q = normalizeText(query);
  if (!q) return [];
  const results = [];
  data.filosofos.forEach(x => {
    const haystack = `${x.nombre} ${x.epoca} ${x.corriente} ${x.descripcion} ${x.conceptos.join(' ')} ${x.origen}`;
    if (includesSmart(haystack, q)) results.push({ tipo: 'Filósofo', titulo: x.nombre, texto: `${x.corriente} · ${x.descripcion}` });
  });
  data.corrientes.forEach(x => {
    const haystack = `${x.nombre} ${x.mirada} ${x.descripcion} ${x.conceptos.join(' ')} ${x.autores.join(' ')} ${x.origen}`;
    if (includesSmart(haystack, q)) results.push({ tipo: 'Corriente', titulo: x.nombre, texto: x.mirada });
  });
  data.frases.forEach(x => {
    const haystack = `${x.texto} ${x.autor} ${x.corriente} ${x.tema}`;
    if (includesSmart(haystack, q)) results.push({ tipo: 'Frase', titulo: x.texto, texto: `${x.autor} · ${x.corriente}` });
  });
  data.articulos.forEach(x => {
    const haystack = `${x.titulo} ${x.categoria} ${x.resumen} ${x.apertura} ${x.origen}`;
    if (includesSmart(haystack, q)) results.push({ tipo: 'Ensayo', titulo: x.titulo, texto: x.resumen });
  });
  data.archivos.forEach(x => {
    const haystack = `${x.idea} ${x.corriente} ${x.autor} ${x.tension} ${x.origen}`;
    if (includesSmart(haystack, q)) results.push({ tipo: 'Archivo de idea', titulo: x.idea, texto: `${x.corriente} · ${x.tension} · ${x.origen}` });
  });
  return results.slice(0, 12);
}

function renderResults(container, results) {
  if (!container) return;
  if (!results.length) {
    container.innerHTML = '<div class="result-item"><p class="result-type">Sin coincidencia directa</p><h3>La idea todavía no está archivada</h3><p>Prueba con libertad, sentido, virtud, dolor, voluntad, vacío, control, poder, deseo, duda, Sócrates, Nietzsche, Camus o Foucault.</p></div>';
    return;
  }
  container.innerHTML = results.map(r => `<div class="result-item"><p class="result-type">${r.tipo}</p><h3>${r.titulo}</h3><p>${r.texto}</p></div>`).join('');
}

function setupSearch(inputId, buttonId, resultsId) {
  const input = document.getElementById(inputId);
  const button = document.getElementById(buttonId);
  const results = document.getElementById(resultsId);
  if (!input || !button || !results) return;
  const run = () => renderResults(results, searchAll(input.value));
  button.addEventListener('click', run);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
}

function renderPhraseOfDay() {
  const quote = document.getElementById('dailyQuote');
  const author = document.getElementById('dailyAuthor');
  if (!quote || !author) return;
  const index = new Date().getDate() % data.frases.length;
  const item = data.frases[index];
  quote.textContent = `“${item.texto}”`;
  author.textContent = `${item.autor} · ${item.corriente}`;
}

function renderSimpleList(containerId, items, renderer) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(renderer).join('');
}

function renderHomeSections() {
  renderSimpleList('questionGrid', data.preguntas, q => `<a class="question-pill" href="analizador.html">${q}</a>`);
  renderSimpleList('doorGrid', data.puertas, x => `<article class="thought-door fade-in"><h3>${x.titulo}</h3><p>${x.texto}</p><a href="analizador.html">Pensar esta idea →</a></article>`);
  renderSimpleList('archiveGrid', data.archivos, x => `<article class="archive-card fade-in"><p class="eyebrow">Archivo de idea</p><h3>${x.idea}</h3><p><strong>Corriente:</strong> ${x.corriente}</p><p><strong>Autor cercano:</strong> ${x.autor}</p><p><strong>Tensión:</strong> ${x.tension}</p><p class="origin">Origen: ${x.origen}</p></article>`);
  renderSimpleList('mapGrid', data.mapa, row => `<div class="map-row fade-in">${row.map((x, i) => `<span>${x}</span>${i < row.length - 1 ? '<b>→</b>' : ''}`).join('')}</div>`);
}

function analyzePhrase(text) {
  const normalized = normalizeText(text);
  const wordCount = normalized.split(/\s+/).filter(Boolean).length;
  return Object.entries(analyzerRules).map(([corriente, rule]) => {
    let score = 0;
    const matched = [];
    rule.keywords.forEach(keyword => {
      const k = normalizeText(keyword);
      if (normalized.includes(k)) {
        score += k.includes(' ') ? 18 : 11;
        matched.push(keyword);
      }
    });
    data.frases.forEach(frase => {
      if (frase.corriente === corriente && normalized.includes(normalizeText(frase.tema))) score += 8;
    });
    if (wordCount >= 8) score += 5;
    if (matched.length >= 3) score += 12;
    return { corriente, score: Math.min(score, 96), matched: [...new Set(matched)].slice(0, 6), ...rule };
  }).filter(x => x.score > 0).sort((a, b) => b.score - a.score).slice(0, 5);
}

function setupAnalyzer() {
  const textarea = document.getElementById('phraseInput');
  const btn = document.getElementById('analyzeBtn');
  const output = document.getElementById('analysisOutput');
  if (!textarea || !btn || !output) return;
  btn.addEventListener('click', () => {
    const phrase = textarea.value.trim();
    const results = analyzePhrase(phrase);
    if (!phrase) {
      output.innerHTML = '<div class="result-item"><h3>Escribe una frase primero</h3><p>Por ejemplo: “La libertad exige asumir las consecuencias de nuestras decisiones”.</p></div>';
      return;
    }
    if (!results.length) {
      output.innerHTML = '<div class="result-item"><h3>Análisis no concluyente</h3><p>No detecté suficientes señales. Agrega más contexto o usa conceptos como libertad, sentido, virtud, control, absurdo, poder, deseo, dolor o verdad.</p></div>';
      return;
    }
    output.innerHTML = `<div class="score-list">${results.map(r => `<div class="score-row"><strong>${r.corriente}</strong><p class="small">Coincidencia aproximada: ${r.score}%</p><p>${r.explanation}</p><p class="small"><strong>Autores cercanos:</strong> ${r.authors.join(', ')}</p><p class="small"><strong>Conceptos:</strong> ${r.concepts.join(', ')}</p>${r.matched.length ? `<p class="small"><strong>Señales detectadas:</strong> ${r.matched.join(', ')}</p>` : ''}<div class="score-bar"><div class="score-fill" style="width:${r.score}%"></div></div></div>`).join('')}</div><p class="small">Este análisis sigue siendo local y aproximado. No reemplaza una IA semántica, pero ahora tiene una base mucho más amplia.</p>`;
  });
}

function renderArticlePage() {
  const container = document.getElementById('articleContent');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug') || data.articulos[0].slug;
  const article = data.articulos.find(x => x.slug === slug) || data.articulos[0];
  container.innerHTML = `<p class="eyebrow">${article.categoria}</p><h1>${article.titulo}</h1><p class="article-lead">${article.apertura}</p><p>${article.resumen}</p><p>Esta página está pensada como una lectura íntima: menos ruido, más aire y una sola idea desplegada con calma. En próximas versiones este contenido podrá venir de un panel o de archivos Markdown.</p><blockquote>Una reflexión no siempre responde; a veces solo abre una puerta mejor formulada.</blockquote><p class="origin">${article.origen}</p><a class="button" href="blog.html">Volver al archivo</a>`;
}

function init() {
  setupMenu();
  setupSearch('homeSearch', 'homeSearchBtn', 'homeResults');
  setupSearch('globalSearch', 'globalSearchBtn', 'globalResults');
  setupAnalyzer();
  renderPhraseOfDay();
  renderHomeSections();
  renderCards('philosophersGrid', data.filosofos, 'filosofo');
  renderCards('currentsGrid', data.corrientes, 'corriente');
  renderCards('blogGrid', data.articulos, 'blog');
  renderArticlePage();
}

document.addEventListener('DOMContentLoaded', init);
