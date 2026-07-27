// Enunciado
// Selecciona el elemento con la clase titulo.
// Crea un nuevo elemento <p>.
// Añade al nuevo párrafo el texto:
// Contenido actualizado
// Añade al párrafo la clase:
// aviso
// Inserta el nuevo párrafo justo antes del <h2> utilizando obligatoriamente before().
// Muestra en la consola el texto del elemento que ahora se encuentra inmediatamente antes del título, utilizando previousElementSibling.
// Resultado esperado en el DOM
// <section class="curso">
//   <p class="aviso">Contenido actualizado</p>
//   <h2 class="titulo">Curso de JavaScript</h2>
//   <p>Aprende a manipular el DOM.</p>
// </section>
// Tu código
// Selecciona el título
const titulo = document.querySelector(".titulo");

// Crea el nuevo párrafo
const nuevoParrafo = document.createElement("p");

// Añade el texto
nuevoParrafo.textContent = "Contenido actualizado";

// Añade la clase "aviso"
nuevoParrafo.classList.add("aviso");

// Inserta el párrafo justo antes del título
titulo.before(nuevoParrafo);

// Muestra el texto del elemento anterior al título
console.log(titulo.previousElementSibling.textContent);
