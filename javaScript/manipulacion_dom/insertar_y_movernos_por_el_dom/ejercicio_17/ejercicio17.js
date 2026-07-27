// Enunciado
// Selecciona únicamente el elemento con la clase destacada.

// Desde esa tarea, obtén su elemento padre mediante parentElement y guárdalo en una variable llamada pendientes.

// Desde pendientes, obtén su siguiente elemento hermano mediante nextElementSibling y guárdalo en una variable llamada completadas.

// Crea un elemento <span>.

// Añade al <span>:

// El texto "Completada".

// La clase estado.

// Inserta el <span> al final de la tarea destacada utilizando append().

// Elimina de la tarea la clase destacada.

// Añade a la tarea la clase completada.

// Mueve la tarea al final del contenedor completadas utilizando append().

// No debes clonar ni volver a crear la tarea.

// Muestra en la consola, con etiquetas identificativas:

// El número de elementos hijos que quedan en pendientes.

// El número de elementos hijos que hay ahora en completadas.

// El atributo class del nuevo padre de la tarea.

// El texto del último elemento hijo de la tarea.

// El texto del último elemento hijo de completadas.

// Añade un comentario explicando por qué la tarea ya no permanece dentro de pendientes.

// Resultado esperado en el DOM
// <section class="tablero">
//   <h2>Panel de estudio</h2>

//   <div class="pendientes">
//     <h3>Tareas pendientes</h3>

//     <article class="tarea">
//       <h4>Actualizar los apuntes</h4>
//       <p>Pasar las correcciones al cuaderno.</p>
//     </article>
//   </div>

//   <div class="completadas">
//     <h3>Tareas completadas</h3>

//     <article class="tarea completada">
//       <h4>Repasar navegación por el DOM</h4>
//       <p>Practicar padres, hijos y hermanos.</p>
//       <span class="estado">Completada</span>
//     </article>
//   </div>
// </section>
// Restricciones
// No puedes utilizar:

// querySelectorAll()
// cloneNode()
// innerHTML
// outerHTML
// remove()
// removeChild()
// Solo puedes realizar una selección directa con document.

// Tu código
// Selecciona únicamente la tarea destacada
const tareaDestacada = document.querySelector(".destacada");

// Obtén su elemento padre y guárdalo en "pendientes"
const pendientes = tareaDestacada.parentElement;

// Obtén el siguiente elemento hermano y guárdalo en "completadas"
const completadas = pendientes.nextElementSibling;

// Crea el span
const span = document.createElement("span");

// Añade al span el texto "Completada"
span.textContent= "Completada";

// Añade al span la clase "estado"
span.classList.add("estado");

// Inserta el span al final de la tarea
tareaDestacada.append(span);

// Elimina la clase "destacada" de la tarea
tareaDestacada.classList.remove("destacada");

// Añade la clase "completada" a la tarea
tareaDestacada.classList.add("completada");

// Mueve la tarea al contenedor de completadas

completadas.append(tareaDestacada);

// Muestra el número de elementos hijos que quedan en pendientes
console.log("Hijos de pendientes: ", pendientes.children.length);

// Muestra el número de elementos hijos que hay en completadas
console.log("Hijos en completadas: ", completadas.children.length);

// Muestra el atributo class del nuevo padre de la tarea
console.log("La clase de tarea: ", tareaDestacada.parentElement.getAttribute("class"));

// Muestra el texto del último elemento hijo de la tarea
console.log("El último hijo de tarea:", tareaDestacada.lastElementChild.textContent);

// Muestra el texto del último elemento hijo de completadas
console.log("el último hijo de completadas: ", completadas.lastElementChild.textContent);

// Explica por qué la tarea ya no permanece dentro de pendientes
// porque la hemos movido de lugar