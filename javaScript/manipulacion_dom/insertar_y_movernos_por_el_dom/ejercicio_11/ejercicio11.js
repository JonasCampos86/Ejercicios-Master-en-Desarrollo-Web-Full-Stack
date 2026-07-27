// Enunciado
// Selecciona la sección con la clase perfil.
// Selecciona el <h3> con la clase nombre.
// Crea un nuevo elemento <h2>.
// Añade al nuevo <h2> el texto:
// Jonás Campos
// Añade al nuevo <h2> la clase:
// nombre-actualizado
// Sustituye el <h3> antiguo por el nuevo <h2> utilizando obligatoriamente replaceChild().
// Muestra en la consola:
// El nombre de la etiqueta del primer elemento hijo de la sección.
// El texto de ese primer elemento hijo.

// No puedes utilizar replaceWith().

// Resultado esperado en el DOM
// <section class="perfil">
//   <h2 class="nombre-actualizado">Jonás Campos</h2>
//   <p>Estudiante de desarrollo web.</p>
// </section>
// Tu código
// Selecciona la sección
const perfil = document.querySelector(".perfil");

// Selecciona el título antiguo
const tituloAntiguo = perfil.querySelector(".nombre");

// Crea el nuevo h2
const nuevoH2 = document.createElement("h2");

// Añade el texto
nuevoH2.textContent = "Jonás Campos";

// Añade la clase "nombre-actualizado"
nuevoH2.classList.add("nombre-actualizado");

// Sustituye el título antiguo desde su elemento padre
perfil.replaceChild(nuevoH2, tituloAntiguo);

// Muestra la etiqueta del primer elemento hijo
console.log(perfil.firstElementChild.tagName);

// Muestra el texto del primer elemento hijo
console.log(perfil.firstElementChild.textContent);