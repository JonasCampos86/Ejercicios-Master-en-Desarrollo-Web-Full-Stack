// Enunciado
// Selecciona la sección con la clase avisos.
// Crea un elemento <h2>.
// Añade al nuevo elemento el texto:
// Avisos importantes
// Inserta el <h2> como primer hijo de la sección utilizando obligatoriamente prepend().
// Muestra en la consola el texto del nuevo primer elemento hijo utilizando firstElementChild.
// Resultado esperado en el DOM
// <section class="avisos">
//   <h2>Avisos importantes</h2>
//   <p>Mantenimiento programado para el viernes.</p>
//   <p>La plataforma estará disponible hasta las 22:00.</p>
// </section>
// Tu código
// Selecciona la sección
const seccion = document.querySelector(".avisos");

// Crea el nuevo h2
const nuevoH2 = document.createElement("h2");

// Añade el texto al h2
nuevoH2.textContent = "Avisos importantes";

// Inserta el h2 como primer hijo
seccion.prepend(nuevoH2);

// Muestra el texto del primer elemento hijo
console.log(seccion.firstElementChild.textContent);