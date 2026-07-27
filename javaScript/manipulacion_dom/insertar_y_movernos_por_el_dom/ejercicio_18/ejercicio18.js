// esultado que debes conseguir

// Usando JavaScript:

// La tarea marcada como urgente debe pasar de .activas a .finalizadas.
// Debe perder la clase urgente y recibir la clase finalizada.
// El mensaje .vacio debe eliminarse.
// Dentro de la tarea movida debe aparecer, como último elemento, este contenido:
// <span class="estado">Finalizada</span>
// Al terminar, muestra en la consola:
// Cuántos elementos hijos quedan en .activas.
// Cuántos elementos hijos hay en .finalizadas.
// Las clases actuales de la tarea movida.
// El texto del último elemento hijo de la tarea.
// Restricciones

// Solo puedes seleccionar directamente con document:

// La tarea .urgente.
// El mensaje .vacio.

// Los demás elementos deben obtenerse navegando por el DOM.

// No puedes utilizar:

// querySelectorAll()
// innerHTML
// outerHTML
// cloneNode()
// removeChild()
// replaceChild()

// Debes mover la tarea existente, no crear otra igual.

// Resultado final esperado
// <section class="gestor">
//   <h2>Gestor de tareas</h2>

//   <div class="activas">
//     <h3>Tareas activas</h3>

//     <article class="tarea">
//       <h4>Ordenar apuntes</h4>
//       <p>Actualizar el cuaderno de JavaScript.</p>
//     </article>
//   </div>

//   <div class="finalizadas">
//     <h3>Tareas finalizadas</h3>

//     <article class="tarea finalizada">
//       <h4>Revisar proyecto</h4>
//       <p>Comprobar la estructura de carpetas.</p>
//       <span class="estado">Finalizada</span>
//     </article>
//   </div>
// </section>

// Todos los métodos necesarios pertenecen a la clase que acabas de practicar.

// Tu código
const tareaUrgente = document.querySelector(".urgente");
const activa = tareaUrgente.parentElement;
const mensajeVacio = document.querySelector(".vacio");

mensajeVacio.parentElement.append(tareaUrgente);
tareaUrgente.classList.replace("urgente", "finalizada");
const finalizadas = mensajeVacio.parentElement;
mensajeVacio.remove();
const nuevoSpan = document.createElement("span");
nuevoSpan.classList.add("estado");
nuevoSpan.textContent = "Finalizada";
tareaUrgente.append(nuevoSpan);

console.log("Hijos de .activas: ", activa.children.length);
console.log("Hijos de .finalizadas: ", finalizadas.children.length);
console.log("Clases de la tarea movida: ", tareaUrgente.className);
console.log("Texto del ultimo hijo de la tarea movida: ", tareaUrgente.lastElementChild.textContent);