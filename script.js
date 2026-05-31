const data = {
  filosofos: [
    { nombre: 'Sócrates', epoca: 'Grecia clásica', corriente: 'Filosofía clásica', imagen: 'https://images.unsplash.com/photo-1604515447032-831711b2c1c8?auto=format&fit=crop&w=900&q=80', descripcion: 'Figura central de la filosofía occidental. Su método se basaba en preguntar, examinar creencias y buscar una vida más consciente.', conceptos: ['duda', 'virtud', 'conocimiento', 'ética'], origen: 'Griego · philosophía · amor por la sabiduría' },
    { nombre: 'Platón', epoca: 'Grecia clásica', corriente: 'Idealismo', imagen: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=900&q=80', descripcion: 'Desarrolló la teoría de las ideas y pensó la realidad como algo más profundo que lo visible.', conceptos: ['ideas', 'alma', 'justicia', 'verdad'], origen: 'Griego · idéa · forma visible / aspecto' },
    { nombre: 'Aristóteles', epoca: 'Grecia clásica', corriente: 'Ética de la virtud', imagen: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=900&q=80', descripcion: 'Propuso una filosofía práctica centrada en la virtud, la razón, la observación y la búsqueda de una vida plena.', conceptos: ['virtud', 'razón', 'felicidad', 'hábito'], origen: 'Griego · aretḗ · excelencia / virtud' },
    { nombre: 'Marco Aurelio', epoca: 'Roma antigua', corriente: 'Estoicismo', imagen: 'https://images.unsplash.com/photo-1552231724-3a0bd650c748?auto=format&fit=crop&w=900&q=80', descripcion: 'Emperador romano y pensador estoico. Sus meditaciones tratan sobre disciplina, serenidad y dominio interior.', conceptos: ['disciplina', 'control', 'deber', 'serenidad'], origen: 'Griego · stoa · pórtico / lugar de enseñanza' },
    { nombre: 'Friedrich Nietzsche', epoca: 'Siglo XIX', corriente: 'Vitalismo / crítica moral', imagen: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80', descripcion: 'Cuestionó la moral tradicional, la religión y las formas débiles de vivir. Su obra impulsa la creación de valores propios.', conceptos: ['voluntad', 'poder', 'moral', 'superación'], origen: 'Alemán · Wille zur Macht · voluntad de poder' },
    { nombre: 'Albert Camus', epoca: 'Siglo XX', corriente: 'Absurdismo', imagen: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80', descripcion: 'Exploró el absurdo de la existencia y la posibilidad de vivir con lucidez, dignidad y rebelión ante la falta de sentido absoluto.', conceptos: ['absurdo', 'sentido', 'rebeldía', 'libertad'], origen: 'Latín · absurdus · disonante / fuera de tono' }
  ],
  corrientes: [
    { nombre: 'Estoicismo', mirada: 'Cuando necesitas calma ante lo inevitable.', descripcion: 'Propone distinguir entre lo que depende de nosotros y lo que no. Busca serenidad, virtud y dominio interior.', conceptos: ['control', 'disciplina', 'aceptación', 'virtud'], autores: ['Marco Aurelio', 'Epicteto', 'Séneca'], origen: 'Griego · stoa · pórtico' },
    { nombre: 'Existencialismo', mirada: 'Cuando entiendes que elegir también pesa.', descripcion: 'Se centra en la libertad, la responsabilidad individual, la angustia y la creación de sentido en la propia vida.', conceptos: ['libertad', 'responsabilidad', 'elección', 'angustia'], autores: ['Sartre', 'Simone de Beauvoir', 'Kierkegaard'], origen: 'Latín · existere · aparecer / estar fuera' },
    { nombre: 'Nihilismo', mirada: 'Cuando ninguna respuesta heredada parece suficiente.', descripcion: 'Cuestiona la existencia de valores o sentidos absolutos. Puede ser destructivo o una oportunidad para crear nuevos valores.', conceptos: ['vacío', 'sentido', 'moral', 'valor'], autores: ['Nietzsche'], origen: 'Latín · nihil · nada' },
    { nombre: 'Idealismo', mirada: 'Cuando sospechas que lo visible no agota lo real.', descripcion: 'Sostiene que las ideas, la mente o las formas profundas tienen un papel central en la realidad.', conceptos: ['ideas', 'verdad', 'alma', 'realidad'], autores: ['Platón', 'Hegel'], origen: 'Griego · idéa · forma / apariencia' },
    { nombre: 'Ética de la virtud', mirada: 'Cuando vivir bien depende de lo que practicas cada día.', descripcion: 'Enfoca la vida buena como el desarrollo de hábitos, carácter y equilibrio racional.', conceptos: ['virtud', 'hábito', 'felicidad', 'carácter'], autores: ['Aristóteles'], origen: 'Griego · êthos · carácter / costumbre' },
    { nombre: 'Absurdismo', mirada: 'Cuando buscas sentido y el mundo guarda silencio.', descripcion: 'Parte del choque entre nuestra búsqueda de sentido y un mundo que no ofrece respuestas definitivas.', conceptos: ['absurdo', 'sentido', 'rebeldía', 'lucidez'], autores: ['Albert Camus'], origen: 'Latín · absurdus · fuera de tono' }
  ],
  frases: [
    { texto: 'La vida no examinada no merece ser vivida.', autor: 'Sócrates', corriente: 'Filosofía clásica', tema: 'duda' },
    { texto: 'No nos afecta lo que nos sucede, sino lo que pensamos sobre lo que nos sucede.', autor: 'Epicteto', corriente: 'Estoicismo', tema: 'control' },
    { texto: 'El hombre está condenado a ser libre.', autor: 'Jean-Paul Sartre', corriente: 'Existencialismo', tema: 'libertad' },
    { texto: 'Quien tiene un porqué para vivir puede soportar casi cualquier cómo.', autor: 'Friedrich Nietzsche', corriente: 'Vitalismo', tema: 'sentido' },
    { texto: 'En medio del invierno aprendí que había en mí un verano invencible.', autor: 'Albert Camus', corriente: 'Absurdismo', tema: 'resistencia' },
    { texto: 'Somos lo que hacemos repetidamente.', autor: 'Aristóteles', corriente: 'Ética de la virtud', tema: 'hábito' }
  ],
  articulos: [
    { slug: 'la-calma-no-es-pasividad', titulo: 'La calma no es pasividad', categoria: 'Estoicismo', resumen: 'Aceptar lo que no controlamos no significa rendirse; significa dejar de gastar fuerza donde no hay palanca.', apertura: 'Hay una calma que no es debilidad. Es una forma de inteligencia: saber dónde termina tu poder y dónde empieza el ruido.', origen: 'Griego · stoa · pórtico' },
    { slug: 'cuando-la-libertad-pesa', titulo: 'Cuando la libertad pesa', categoria: 'Existencialismo', resumen: 'Ser libre no siempre se siente liviano: elegir también implica cargar con consecuencias.', apertura: 'La libertad no siempre llega como una puerta abierta. A veces llega como una pregunta incómoda: ¿qué vas a hacer con lo que depende de ti?', origen: 'Latín · libertas · condición de quien no es esclavo' },
    { slug: 'crear-sentido-cuando-no-hay-respuestas', titulo: 'Crear sentido cuando no hay respuestas', categoria: 'Absurdismo', resumen: 'Una mirada breve sobre cómo vivir con lucidez cuando la vida no entrega manual de instrucciones.', apertura: 'El mundo no siempre responde. Aun así, insistimos en preguntar. Tal vez ahí empieza la dignidad.', origen: 'Latín · sensus · percepción / dirección' }
  ],
  preguntas: [
    '¿Qué significa vivir bien?', '¿La libertad nos salva o nos condena?', '¿Qué hacemos con el dolor?', '¿Existe una verdad detrás de lo visible?', '¿La disciplina es una forma de paz?', '¿Qué queda cuando nada parece tener sentido?'
  ],
  puertas: [
    { titulo: 'Sobre la libertad', texto: 'Pensar la libertad no como permiso, sino como carga, elección y consecuencia.' },
    { titulo: 'Sobre el silencio', texto: 'A veces una idea no responde: acompaña, incomoda y espera.' },
    { titulo: 'Sobre el deseo', texto: 'El deseo revela lo que falta, pero también lo que nos gobierna.' },
    { titulo: 'Sobre la muerte', texto: 'No como final decorativo, sino como límite que ordena lo importante.' },
    { titulo: 'Sobre la voluntad', texto: 'No basta querer: también hay que preguntarse quién quiere dentro de uno.' },
    { titulo: 'Sobre la virtud', texto: 'La excelencia no aparece en discursos, sino en repetición y carácter.' }
  ],
  archivos: [
    { idea: 'Libertad', corriente: 'Existencialismo', autor: 'Sartre', tension: 'elegir / cargar consecuencias', origen: 'Latín · libertas' },
    { idea: 'Virtud', corriente: 'Ética de la virtud', autor: 'Aristóteles', tension: 'hábito / carácter', origen: 'Latín · virtus / Griego · aretḗ' },
    { idea: 'Nada', corriente: 'Nihilismo', autor: 'Nietzsche', tension: 'vacío / creación de valores', origen: 'Latín · nihil' },
    { idea: 'Absurdo', corriente: 'Absurdismo', autor: 'Camus', tension: 'sentido / silencio del mundo', origen: 'Latín · absurdus' },
    { idea: 'Control', corriente: 'Estoicismo', autor: 'Epicteto', tension: 'voluntad / destino', origen: 'Latín · contra rotulus / dominio' },
    { idea: 'Idea', corriente: 'Idealismo', autor: 'Platón', tension: 'apariencia / verdad', origen: 'Griego · idéa' }
  ],
  mapa: [
    ['Libertad', 'Responsabilidad', 'Angustia', 'Existencialismo'],
    ['Dolor', 'Aceptación', 'Disciplina', 'Estoicismo'],
    ['Vacío', 'Valor', 'Voluntad', 'Nihilismo'],
    ['Absurdo', 'Lucidez', 'Rebeldía', 'Camus'],
    ['Hábito', 'Carácter', 'Virtud', 'Aristóteles']
  ]
};

const analyzerRules = {
  'Estoicismo': ['control', 'disciplina', 'aceptar', 'aceptación', 'calma', 'serenidad', 'virtud', 'deber', 'resistir'],
  'Existencialismo': ['libertad', 'elegir', 'elección', 'responsabilidad', 'angustia', 'sentido', 'decidir', 'existencia'],
  'Nihilismo': ['vacío', 'nada', 'sin sentido', 'moral', 'valores', 'destruir', 'absurdo'],
  'Idealismo': ['idea', 'verdad', 'alma', 'realidad', 'forma', 'perfecto', 'mundo'],
  'Ética de la virtud': ['hábito', 'virtud', 'carácter', 'felicidad', 'equilibrio', 'prudencia', 'excelencia'],
  'Absurdismo': ['absurdo', 'sentido', 'rebelión', 'lucidez', 'silencio', 'mundo', 'invierno']
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

function searchAll(query) {
  const q = normalizeText(query);
  if (!q) return [];
  const results = [];
  data.filosofos.forEach(x => {
    const haystack = normalizeText(`${x.nombre} ${x.epoca} ${x.corriente} ${x.descripcion} ${x.conceptos.join(' ')} ${x.origen}`);
    if (haystack.includes(q)) results.push({ tipo: 'Filósofo', titulo: x.nombre, texto: `${x.corriente} · ${x.descripcion}` });
  });
  data.corrientes.forEach(x => {
    const haystack = normalizeText(`${x.nombre} ${x.mirada} ${x.descripcion} ${x.conceptos.join(' ')} ${x.autores.join(' ')} ${x.origen}`);
    if (haystack.includes(q)) results.push({ tipo: 'Corriente', titulo: x.nombre, texto: x.mirada });
  });
  data.frases.forEach(x => {
    const haystack = normalizeText(`${x.texto} ${x.autor} ${x.corriente} ${x.tema}`);
    if (haystack.includes(q)) results.push({ tipo: 'Frase', titulo: x.texto, texto: `${x.autor} · ${x.corriente}` });
  });
  data.articulos.forEach(x => {
    const haystack = normalizeText(`${x.titulo} ${x.categoria} ${x.resumen} ${x.apertura} ${x.origen}`);
    if (haystack.includes(q)) results.push({ tipo: 'Ensayo', titulo: x.titulo, texto: x.resumen });
  });
  data.archivos.forEach(x => {
    const haystack = normalizeText(`${x.idea} ${x.corriente} ${x.autor} ${x.tension} ${x.origen}`);
    if (haystack.includes(q)) results.push({ tipo: 'Archivo de idea', titulo: x.idea, texto: `${x.corriente} · ${x.tension} · ${x.origen}` });
  });
  return results;
}

function renderResults(container, results) {
  if (!container) return;
  if (!results.length) {
    container.innerHTML = '<div class="result-item"><p class="result-type">Sin coincidencia directa</p><h3>La idea todavía no está archivada</h3><p>Prueba con libertad, sentido, virtud, dolor, voluntad, vacío, control, Sócrates, Nietzsche o Camus. En la V2 esto debería responder con IA semántica.</p></div>';
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
  return Object.entries(analyzerRules).map(([corriente, words]) => {
    let score = 0;
    words.forEach(word => { if (normalized.includes(normalizeText(word))) score += 18; });
    if (normalized.length > 40) score += 8;
    return { corriente, score: Math.min(score, 96) };
  }).filter(x => x.score > 0).sort((a, b) => b.score - a.score).slice(0, 4);
}

function setupAnalyzer() {
  const textarea = document.getElementById('phraseInput');
  const btn = document.getElementById('analyzeBtn');
  const output = document.getElementById('analysisOutput');
  if (!textarea || !btn || !output) return;
  btn.addEventListener('click', () => {
    const results = analyzePhrase(textarea.value);
    if (!textarea.value.trim()) {
      output.innerHTML = '<div class="result-item"><h3>Escribe una frase primero</h3><p>Por ejemplo: “La libertad también exige responsabilidad”.</p></div>';
      return;
    }
    if (!results.length) {
      output.innerHTML = '<div class="result-item"><h3>Análisis no concluyente</h3><p>No detecté suficientes señales. Agrega más contexto o usa conceptos como libertad, sentido, virtud, control, absurdo o verdad.</p></div>';
      return;
    }
    output.innerHTML = `<div class="score-list">${results.map(r => `<div class="score-row"><strong>${r.corriente}</strong><p class="small">Coincidencia aproximada: ${r.score}%</p><div class="score-bar"><div class="score-fill" style="width:${r.score}%"></div></div></div>`).join('')}</div><p class="small">Este análisis es una aproximación por palabras clave. Más adelante puede reemplazarse por IA semántica real.</p>`;
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
