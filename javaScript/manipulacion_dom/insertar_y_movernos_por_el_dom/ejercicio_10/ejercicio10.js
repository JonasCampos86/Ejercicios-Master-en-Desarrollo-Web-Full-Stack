// Enunciado
// Selecciona la lista con la clase tareas.
// Selecciona el elemento con la clase completada.
// Muestra en la consola el texto del elemento antes de eliminarlo.
// Elimina el elemento utilizando obligatoriamente removeChild().
// Muestra en la consola el número de elementos hijos que quedan dentro de la lista utilizando children.length.

// No puedes utilizar remove().

// Resultado esperado en el DOM
// <ul class="tareas">
//   <li>Revisar apuntes</li>
//   <li>Subir cambios a GitHub</li>
// </ul>
// Tu código
// Selecciona la lista
const lista = document.querySelector(".tareas");

// Selecciona la tarea completada
const tareaCompletada = document.querySelector(".completada");

// Muestra su texto antes de eliminarla
console.log(tareaCompletada.textContent);

// Elimina la tarea desde su elemento padre
lista.removeChild(tareaCompletada);

// Muestra cuántos elementos hijos quedan
console.log(lista.children.length);