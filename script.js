const data = {
  filosofos: [
    { nombre: 'Sócrates', epoca: 'Grecia clásica', corriente: 'Filosofía clásica', imagen: 'https://images.unsplash.com/photo-1604515447032-831711b2c1c8?auto=format&fit=crop&w=900&q=80', descripcion: 'Figura central de la filosofía occidental. Su método se basaba en preguntar, examinar creencias y buscar una vida más consciente.', conceptos: ['duda', 'virtud', 'conocimiento', 'ética'] },
    { nombre: 'Platón', epoca: 'Grecia clásica', corriente: 'Idealismo', imagen: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=900&q=80', descripcion: 'Desarrolló la teoría de las ideas y pensó la realidad como algo más profundo que lo visible.', conceptos: ['ideas', 'alma', 'justicia', 'verdad'] },
    { nombre: 'Aristóteles', epoca: 'Grecia clásica', corriente: 'Realismo / Ética de la virtud', imagen: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=900&q=80', descripcion: 'Propuso una filosofía práctica centrada en la virtud, la razón, la observación y la búsqueda de una vida plena.', conceptos: ['virtud', 'razón', 'felicidad', 'hábito'] },
    { nombre: 'Marco Aurelio', epoca: 'Roma antigua', corriente: 'Estoicismo', imagen: 'https://images.unsplash.com/photo-1552231724-3a0bd650c748?auto=format&fit=crop&w=900&q=80', descripcion: 'Emperador romano y pensador estoico. Sus meditaciones tratan sobre disciplina, serenidad y dominio interior.', conceptos: ['disciplina', 'control', 'deber', 'serenidad'] },
    { nombre: 'Friedrich Nietzsche', epoca: 'Siglo XIX', corriente: 'Vitalismo / Crítica moral', imagen: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80', descripcion: 'Cuestionó la moral tradicional, la religión y las formas débiles de vivir. Su obra impulsa la creación de valores propios.', conceptos: ['voluntad', 'poder', 'moral', 'superación'] },
    { nombre: 'Albert Camus', epoca: 'Siglo XX', corriente: 'Absurdismo', imagen: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80', descripcion: 'Exploró el absurdo de la existencia y la posibilidad de vivir con lucidez, dignidad y rebelión ante la falta de sentido absoluto.', conceptos: ['absurdo', 'sentido', 'rebeldía', 'libertad'] }
  ],
  corrientes: [
    { nombre: 'Estoicismo', descripcion: 'Propone distinguir entre lo que depende de nosotros y lo que no. Busca serenidad, virtud y dominio interior.', conceptos: ['control', 'disciplina', 'aceptación', 'virtud'], autores: ['Marco Aurelio', 'Epicteto', 'Séneca'] },
    { nombre: 'Existencialismo', descripcion: 'Se centra en la libertad, la responsabilidad individual, la angustia y la creación de sentido en la propia vida.', conceptos: ['libertad', 'responsabilidad', 'elección', 'angustia'], autores: ['Sartre', 'Simone de Beauvoir', 'Kierkegaard'] },
    { nombre: 'Nihilismo', descripcion: 'Cuestiona la existencia de valores o sentidos absolutos. Puede ser destructivo o una oportunidad para crear nuevos valores.', conceptos: ['vacío', 'sentido', 'moral', 'valor'], autores: ['Nietzsche'] },
    { nombre: 'Idealismo', descripcion: 'Sostiene que las ideas, la mente o las formas profundas tienen un papel central en la realidad.', conceptos: ['ideas', 'verdad', 'alma', 'realidad'], autores: ['Platón', 'Hegel'] },
    { nombre: 'Ética de la virtud', descripcion: 'Enfoca la vida buena como el desarrollo de hábitos, carácter y equilibrio racional.', conceptos: ['virtud', 'hábito', 'felicidad', 'carácter'], autores: ['Aristóteles'] },
    { nombre: 'Absurdismo', descripcion: 'Parte del choque entre nuestra búsqueda de sentido y un mundo que no ofrece respuestas definitivas.', conceptos: ['absurdo', 'sentido', 'rebeldía', 'lucidez'], autores: ['Albert Camus'] }
  ],
  frases: [
    { texto: 'La vida no examinada no merece ser vivida.', autor: 'Sócrates', corriente: 'Filosofía clásica' },
    { texto: 'No nos afecta lo que nos sucede, sino lo que pensamos sobre lo que nos sucede.', autor: 'Epicteto', corriente: 'Estoicismo' },
    { texto: 'El hombre está condenado a ser libre.', autor: 'Jean-Paul Sartre', corriente: 'Existencialismo' },
    { texto: 'Quien tiene un porqué para vivir puede soportar casi cualquier cómo.', autor: 'Friedrich Nietzsche', corriente: 'Vitalismo' },
    { texto: 'En medio del invierno aprendí que había en mí un verano invencible.', autor: 'Albert Camus', corriente: 'Absurdismo' },
    { texto: 'Somos lo que hacemos repetidamente.', autor: 'Aristóteles', corriente: 'Ética de la virtud' }
  ],
  articulos: [
    { titulo: 'La calma no es pasividad', categoria: 'Estoicismo', resumen: 'Una reflexión inicial sobre cómo aceptar lo que no controlamos sin renunciar a actuar con firmeza.' },
    { titulo: 'Cuando la libertad pesa', categoria: 'Existencialismo', resumen: 'Ser libre no siempre se siente liviano: elegir también implica cargar con consecuencias.' },
    { titulo: 'Crear sentido cuando no hay respuestas', categoria: 'Absurdismo', resumen: 'Una mirada breve sobre cómo vivir con lucidez cuando la vida no entrega manual de instrucciones.' }
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
      return `<article class="card"><img src="${item.imagen}" alt="Imagen referencial de ${item.nombre}"><p class="eyebrow">${item.epoca}</p><h3>${item.nombre}</h3><p><strong>${item.corriente}</strong></p><p>${item.descripcion}</p><div class="card-meta">${item.conceptos.map(c => `<span class="tag">${c}</span>`).join('')}</div></article>`;
    }
    if (type === 'corriente') {
      return `<article class="card"><p class="eyebrow">Corriente filosófica</p><h3>${item.nombre}</h3><p>${item.descripcion}</p><p class="small"><strong>Autores:</strong> ${item.autores.join(', ')}</p><div class="card-meta">${item.conceptos.map(c => `<span class="tag">${c}</span>`).join('')}</div></article>`;
    }
    return `<article class="card"><p class="eyebrow">${item.categoria}</p><h3>${item.titulo}</h3><p>${item.resumen}</p><a class="button" href="#">Leer próximamente</a></article>`;
  }).join('');
}

function searchAll(query) {
  const q = normalizeText(query);
  if (!q) return [];
  const results = [];
  data.filosofos.forEach(x => {
    const haystack = normalizeText(`${x.nombre} ${x.epoca} ${x.corriente} ${x.descripcion} ${x.conceptos.join(' ')}`);
    if (haystack.includes(q)) results.push({ tipo: 'Filósofo', titulo: x.nombre, texto: `${x.corriente} · ${x.descripcion}` });
  });
  data.corrientes.forEach(x => {
    const haystack = normalizeText(`${x.nombre} ${x.descripcion} ${x.conceptos.join(' ')} ${x.autores.join(' ')}`);
    if (haystack.includes(q)) results.push({ tipo: 'Corriente', titulo: x.nombre, texto: x.descripcion });
  });
  data.frases.forEach(x => {
    const haystack = normalizeText(`${x.texto} ${x.autor} ${x.corriente}`);
    if (haystack.includes(q)) results.push({ tipo: 'Frase', titulo: x.texto, texto: `${x.autor} · ${x.corriente}` });
  });
  data.articulos.forEach(x => {
    const haystack = normalizeText(`${x.titulo} ${x.categoria} ${x.resumen}`);
    if (haystack.includes(q)) results.push({ tipo: 'Blog', titulo: x.titulo, texto: x.resumen });
  });
  return results;
}

function renderResults(container, results) {
  if (!container) return;
  if (!results.length) {
    container.innerHTML = '<div class="result-item"><p class="result-type">Sin resultados</p><h3>No encontré una coincidencia directa</h3><p>Prueba con palabras como libertad, sentido, virtud, disciplina, Sócrates, Nietzsche o Camus.</p></div>';
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

function init() {
  setupMenu();
  setupSearch('homeSearch', 'homeSearchBtn', 'homeResults');
  setupSearch('globalSearch', 'globalSearchBtn', 'globalResults');
  setupAnalyzer();
  renderCards('philosophersGrid', data.filosofos, 'filosofo');
  renderCards('currentsGrid', data.corrientes, 'corriente');
  renderCards('blogGrid', data.articulos, 'blog');
}

document.addEventListener('DOMContentLoaded', init);
