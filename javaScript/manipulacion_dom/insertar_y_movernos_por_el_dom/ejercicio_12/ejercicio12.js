// Enunciado
// Selecciona únicamente el párrafo con la clase descripcion.
// Desde ese párrafo, obtén su elemento padre mediante parentElement y guárdalo en una variable llamada libro.
// Sin realizar nuevas selecciones con document:
// Muestra cuántos elementos hijos tiene libro.
// Muestra el nombre de la etiqueta de su primer elemento hijo.
// Muestra el texto de su primer elemento hijo.
// Muestra el nombre de la etiqueta de su último elemento hijo.
// Muestra el texto de su último elemento hijo.
// Añade etiquetas identificativas a todos los console.log().

// No puedes seleccionar directamente .libro, el <h3> ni el <button>.

// Tu código
// Selecciona el párrafo .descripcion
const parrafo = document.querySelector(".descripcion");

// Obtén su elemento padre y guárdalo en "libro"
const libro = parrafo.parentElement;

// Muestra el número de elementos hijos de libro
console.log("Número de hijos: ", libro.children.length);

// Muestra la etiqueta del primer elemento hijo
console.log("Nombre de la etiqueta del primer hijo: ", libro.firstElementChild.tagName);

// Muestra el texto del primer elemento hijo
console.log("Texto del primer hijo: ", libro.firstElementChild.textContent);

// Muestra la etiqueta del último elemento hijo
console.log("Nombre de la etiqueta del último hijo: ", libro.lastElementChild.tagName);

// Muestra el texto del último elemento hijo
console.log("Texto del último hijo:", libro.lastElementChild.textContent);