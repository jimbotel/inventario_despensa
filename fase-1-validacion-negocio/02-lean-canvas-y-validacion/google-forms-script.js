/**
 * Crea automáticamente el formulario de entrevistas de problema en Google Forms.
 *
 * INSTRUCCIONES:
 * 1. Ve a https://script.google.com y crea un nuevo proyecto.
 * 2. Pega este código completo, sustituyendo el contenido por defecto.
 * 3. Pulsa el botón ▶ "Ejecutar" (función: crearFormulario).
 * 4. Acepta los permisos que Google solicite.
 * 5. El formulario aparecerá en tu Google Drive listo para compartir.
 */

/**
 * Punto de entrada. Crea el formulario completo con todas las preguntas.
 */
function crearFormulario() {
  var form = FormApp.create('¿Cómo gestionáis la compra semanal en casa?');

  form.setDescription(
    'Hola, estoy investigando cómo los hogares gestionan la compra semanal. ' +
    'Son 7 preguntas rápidas (menos de 3 minutos). ' +
    'No te vendo nada — solo quiero entender cómo lo hacéis en casa. ¡Gracias!'
  );

  form.setConfirmationMessage('¡Muchas gracias por tu tiempo! 🙏');
  form.setShowLinkToRespondAgain(false);

  // --- Bloque 1: Contexto ---
  agregarSeccion(form, 'Sobre vosotros');

  agregarMultipleChoice(form,
    '¿Cuántas personas vivís en casa?',
    ['1 persona', '2 personas', '3-4 personas (con o sin hijos)', '5 o más personas'],
    true
  );

  agregarMultipleChoice(form,
    '¿Con qué frecuencia hacéis la compra principal (supermercado grande)?',
    ['Cada día o casi', '2-3 veces por semana', 'Una vez por semana', 'Cada dos semanas o menos'],
    true
  );

  // --- Bloque 2: El problema ---
  agregarSeccion(form, 'Situaciones en casa');

  agregarMultipleChoice(form,
    '¿Os ha pasado alguna vez llegar a casa con algo que ya teníais de sobra en la despensa?',
    ['Nunca', 'Alguna vez al año', 'Una vez al mes, más o menos', 'Varias veces al mes — es algo habitual'],
    true
  );

  agregarMultipleChoice(form,
    '¿Os ha pasado quedarse sin algo básico (aceite, leche, papel higiénico...) sin que nadie se hubiera dado cuenta antes de ir a comprar?',
    ['Nunca', 'Alguna vez al año', 'Una vez al mes, más o menos', 'Varias veces al mes — es algo habitual'],
    true
  );

  agregarCheckboxes(form,
    'Cuando preparáis la lista de la compra, ¿cómo lo hacéis normalmente? (puedes marcar más de una)',
    [
      'De memoria, sin lista',
      'Lista en papel',
      'Notas del móvil o app de notas (Notas de iPhone, Keep, etc.)',
      'WhatsApp o mensaje al grupo familiar',
      'Una app específica para listas de la compra (Bring, OurGroceries, etc.)',
      'Otro'
    ],
    true
  );

  agregarTextoLibre(form,
    'Si usas algún método (lista, app, etc.), ¿qué es lo que más te falla o te resulta incómodo de él?',
    false
  );

  // --- Bloque 3: Disposición al cambio ---
  agregarSeccion(form, 'Una última pregunta');

  agregarMultipleChoice(form,
    'Si existiera una forma sencilla de saber en todo momento qué tienes en casa y qué te falta, ¿la usarías?',
    [
      'No, con lo que tengo me apaño',
      'Quizás, dependería de lo fácil que fuera',
      'Sí, si fuera realmente sencilla',
      'Sí, sin dudarlo — lo necesito'
    ],
    true
  );

  agregarTextoLibre(form,
    'Si quieres que te cuente qué estoy construyendo cuando esté listo, deja tu email aquí (opcional):',
    false
  );

  // Imprimir URL en los logs
  Logger.log('✅ Formulario creado correctamente.');
  Logger.log('🔗 URL para compartir: ' + form.getPublishedUrl());
  Logger.log('✏️  URL para editar:    ' + form.getEditUrl());
}

// ---------------------------------------------------------------------------
// Funciones auxiliares
// ---------------------------------------------------------------------------

/**
 * Añade un encabezado de sección al formulario.
 * @param {GoogleAppsScript.Forms.Form} form
 * @param {string} titulo
 */
function agregarSeccion(form, titulo) {
  form.addSectionHeaderItem().setTitle(titulo);
}

/**
 * Añade una pregunta de opción única (radio buttons).
 * @param {GoogleAppsScript.Forms.Form} form
 * @param {string} pregunta
 * @param {string[]} opciones
 * @param {boolean} obligatoria
 */
function agregarMultipleChoice(form, pregunta, opciones, obligatoria) {
  form.addMultipleChoiceItem()
    .setTitle(pregunta)
    .setChoiceValues(opciones)
    .setRequired(obligatoria);
}

/**
 * Añade una pregunta de opción múltiple (checkboxes).
 * @param {GoogleAppsScript.Forms.Form} form
 * @param {string} pregunta
 * @param {string[]} opciones
 * @param {boolean} obligatoria
 */
function agregarCheckboxes(form, pregunta, opciones, obligatoria) {
  form.addCheckboxItem()
    .setTitle(pregunta)
    .setChoiceValues(opciones)
    .setRequired(obligatoria);
}

/**
 * Añade una pregunta de texto libre (párrafo corto).
 * @param {GoogleAppsScript.Forms.Form} form
 * @param {string} pregunta
 * @param {boolean} obligatoria
 */
function agregarTextoLibre(form, pregunta, obligatoria) {
  form.addTextItem()
    .setTitle(pregunta)
    .setRequired(obligatoria);
}
