
// Enunciado

// Selecciona todos los elementos que tengan la clase "tarea" y guárdalos en una constante llamada tareas.

// Recorre la colección mediante forEach() y, para cada tarea:

// Lee su estado mediante dataset.
// Lee su prioridad mediante dataset.
// Cuando el estado sea "pendiente":
// añade la clase "tarea-pendiente";
// crea o modifica el atributo title con el valor "Tarea pendiente".
// Cuando el estado sea "completada":
// añade la clase "tarea-completada";
// crea o modifica el atributo title con el valor "Tarea completada".
// Cuando la prioridad sea "alta", añade también la clase "tarea-urgente".
// Crea mediante dataset el atributo:
// data-revisada="si"
// Muestra cada tarea completa en consola después de modificarla.
// Resultado final esperado

// Primera tarea:

// <article
//     class="tarea tarea-pendiente tarea-urgente"
//     data-estado="pendiente"
//     data-prioridad="alta"
//     data-revisada="si"
//     title="Tarea pendiente"
// >

// Segunda tarea:

// <article
//     class="tarea tarea-completada"
//     data-estado="completada"
//     data-prioridad="normal"
//     data-revisada="si"
//     title="Tarea completada"
// >

// Tercera tarea:

// <article
//     class="tarea tarea-pendiente"
//     data-estado="pendiente"
//     data-prioridad="normal"
//     data-revisada="si"
//     title="Tarea pendiente"
// >
// Restricciones
// Usa querySelectorAll() una sola vez.
// Recorre las tareas mediante forEach().
// Lee data-estado y data-prioridad mediante dataset.
// Crea data-revisada mediante dataset.
// Añade las clases mediante classList.add().
// Gestiona title mediante setAttribute().
// No uses className.
// No uses getAttribute() para leer los atributos data-*.
// No escribas manualmente cada tarea.
// No elimines ningún atributo ni ninguna clase.
// Tu código
// Escribe aquí tu solución
const tareas = document.querySelectorAll(".tarea");

tareas.forEach(tarea => {
    
    if (tarea.dataset.estado === "pendiente"){
        tarea.classList.add("tarea-pendiente");
        tarea.setAttribute("title","Tarea pendiente");
    }

    if (tarea.dataset.estado === "completada"){
        tarea.classList.add("tarea-completada");
        tarea.setAttribute("title","Tarea completada");
    }

    if(tarea.dataset.prioridad === "alta"){
        tarea.classList.add("tarea-urgente");
    }
    tarea.dataset.revisada = "si";

    console.log(tarea);
});

