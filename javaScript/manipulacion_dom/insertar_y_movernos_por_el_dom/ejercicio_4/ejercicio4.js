// Enunciado
// Selecciona el elemento con la clase noticias.
// Crea un nuevo elemento <p>.
// Añade al nuevo párrafo el texto:
// Nuevo artículo disponible
// Inserta el nuevo párrafo como último hijo de la sección utilizando obligatoriamente appendChild().
// Muestra en la consola el contenido de lastElementChild de la sección para comprobar qué elemento ocupa ahora la última posición.

// No puedes escribir directamente el nuevo párrafo en el HTML.

// Resultado esperado en el DOM
// <section class="noticias">
//   <h2>Últimas noticias</h2>

//   <p>JavaScript continúa evolucionando.</p>
//   <p>El DOM representa la estructura del documento.</p>
//   <p>Nuevo artículo disponible</p>
// </section>
// Tu código
// Selecciona la sección
const seccion = document.querySelector(".noticias");

// Crea el nuevo párrafo
const nuevoParrafo = document.createElement("p")

// Añade el texto al nuevo párrafo
nuevoParrafo.textContent = "Nuevo artículo disponible";

// Inserta el párrafo como último hijo
seccion.appendChild(nuevoParrafo);

// Muestra en consola el contenido del último elemento hijo
console.log(seccion.lastElementChild.textContent);