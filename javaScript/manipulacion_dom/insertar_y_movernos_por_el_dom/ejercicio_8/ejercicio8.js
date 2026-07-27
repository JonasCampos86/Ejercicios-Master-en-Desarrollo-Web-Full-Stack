// Enunciado
// Selecciona el elemento con la clase titulo.
// Crea un nuevo elemento <h2>.
// Añade al nuevo <h2> el texto:
// Introducción al DOM
// Añade al nuevo <h2> la clase:
// titulo-principal
// Sustituye el <h3> original por el nuevo <h2> utilizando obligatoriamente replaceWith().
// Selecciona el elemento con la clase titulo-principal.
// Muestra en la consola:
// El nombre de su etiqueta mediante tagName.
// Su contenido de texto.
// Resultado esperado en el DOM
// <section class="curso">
//   <h2 class="titulo-principal">Introducción al DOM</h2>
//   <p>Contenido principal del curso.</p>
// </section>
// Tu código
// Selecciona el título antiguo
const tituloAntiguo = document.querySelector(".titulo");

// Crea el nuevo h2
const nuevoTitulo = document.createElement("h2");

// Añade el texto
nuevoTitulo.textContent = "Introducción al DOM";

// Añade la clase "titulo-principal"
nuevoTitulo.classList.add("titulo-principal");

// Sustituye el título antiguo
tituloAntiguo.replaceWith(nuevoTitulo);

// Selecciona el nuevo título
const tituloNuevo = document.querySelector(".titulo-principal");

// Muestra su etiqueta
console.log(tituloNuevo.tagName);

// Muestra su texto
console.log(tituloNuevo.textContent);