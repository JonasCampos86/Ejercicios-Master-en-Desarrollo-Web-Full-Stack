// Enunciado
// Selecciona el elemento con la clase aviso.
// Muestra en la consola su contenido de texto antes de eliminarlo.
// Elimina el elemento utilizando obligatoriamente remove().
// Vuelve a buscar en el documento el elemento con la clase aviso.
// Guarda el resultado de esa nueva búsqueda en una variable llamada avisoEliminado.
// Muestra avisoEliminado en la consola para comprobar qué devuelve querySelector() cuando ya no encuentra el elemento.

// No elimines el contenido modificando innerHTML ni accediendo al elemento padre.

// Resultado esperado en el DOM
// <section class="panel">
//   <h2>Panel de usuario</h2>
//   <p class="mensaje">Sesión iniciada correctamente.</p>
// </section>
// Tu código
// Selecciona el aviso
const aviso = document.querySelector(".aviso");

// Muestra su texto antes de eliminarlo
console.log(aviso.textContent);

// Elimina el aviso
aviso.remove();

// Vuelve a buscar el elemento .aviso
const avisoEliminado = document.querySelector(".aviso");

// Muestra el resultado de la nueva búsqueda
console.log(avisoEliminado);