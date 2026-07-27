// Enunciado
// Selecciona la sección con la clase comentarios.
// Crea dos elementos <p>.
// Añade estos textos:
// Primer comentario publicado
// Segundo comentario publicado
// Añade al primer párrafo la clase primero.
// Añade al segundo párrafo la clase segundo.
// Inserta los dos párrafos al final de la sección utilizando una única llamada a append().
// Muestra en la consola, con etiquetas:
// El número de elementos hijos de la sección.
// El texto de su último elemento hijo.

// No puedes utilizar dos llamadas separadas a append() ni utilizar appendChild().

// Resultado esperado
// <section class="comentarios">
//   <h2>Comentarios</h2>
//   <p class="primero">Primer comentario publicado</p>
//   <p class="segundo">Segundo comentario publicado</p>
// </section>
// Tu código
// Selecciona la sección
const seccion = document.querySelector(".comentarios");

// Crea el primer párrafo
const primerParrafo = document.createElement("p");

// Añade su texto y su clase
primerParrafo.textContent = "Primer comentario publicado";
primerParrafo.classList.add("primero")
// Crea el segundo párrafo
const segundoParrafo = document.createElement("p");

// Añade su texto y su clase
segundoParrafo.textContent = "Segundo comentario publicado"
segundoParrafo.classList.add("segundo")
// Inserta ambos párrafos con una única llamada a append()
seccion.append(primerParrafo, segundoParrafo);

// Muestra el número de elementos hijos
console.log("Número de hijos: ", seccion.children.length);

// Muestra el texto del último elemento hijo
console.log("El texto del último hijo: ", seccion.lastElementChild.textContent);