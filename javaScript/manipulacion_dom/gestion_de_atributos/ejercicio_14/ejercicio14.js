// Enunciado

// Selecciona todos los elementos con la clase "curso" y guárdalos en una constante llamada cursos.

// Recorre la colección mediante forEach().

// En cada vuelta:

// Lee mediante dataset el estado y el nivel del curso.
// Selecciona el botón que pertenece a ese curso y guárdalo en una constante llamada boton.
// Cuando el curso tenga el estado "disponible":
// añade al artículo la clase "curso-disponible";
// añade o modifica el atributo title con el texto "Curso disponible";
// asegúrate de que el botón esté habilitado mediante su propiedad disabled;
// crea en el botón data-disponible="si" mediante dataset.
// Cuando el curso tenga el estado "no-disponible":
// añade al artículo la clase "curso-no-disponible";
// añade o modifica el atributo title con el texto "Curso no disponible";
// deshabilita el botón mediante su propiedad disabled;
// crea en el botón data-disponible="no" mediante dataset.
// Cuando el nivel sea "avanzado", añade también la clase "curso-avanzado".
// Añade a todos los artículos:
// data-revisado="si"

// mediante dataset.

// Muestra en consola cada artículo y su botón después de modificarlos.
// Resultado final esperado
// Primer curso
// <article
//     class="curso curso-disponible"
//     data-estado="disponible"
//     data-nivel="basico"
//     data-revisado="si"
//     title="Curso disponible"
// >
//     <h2>Fundamentos de JavaScript</h2>

//     <button
//         class="boton-inscripcion"
//         data-disponible="si"
//     >
//         Inscribirse
//     </button>
// </article>
// Segundo curso
// <article
//     class="curso curso-no-disponible curso-avanzado"
//     data-estado="no-disponible"
//     data-nivel="avanzado"
//     data-revisado="si"
//     title="Curso no disponible"
// >
//     <h2>JavaScript avanzado</h2>

//     <button
//         class="boton-inscripcion"
//         data-disponible="no"
//         disabled
//     >
//         Inscribirse
//     </button>
// </article>
// Tercer curso
// <article
//     class="curso curso-disponible curso-avanzado"
//     data-estado="disponible"
//     data-nivel="avanzado"
//     data-revisado="si"
//     title="Curso disponible"
// >
//     <h2>Manipulación del DOM</h2>

//     <button
//         class="boton-inscripcion"
//         data-disponible="si"
//     >
//         Inscribirse
//     </button>
// </article>
// Restricciones
// Usa querySelectorAll() una sola vez para seleccionar los cursos.
// Recorre la colección mediante forEach().
// Selecciona el botón desde el artículo actual, no desde document.
// Lee los atributos data-* mediante dataset.
// Crea los nuevos atributos data-* mediante dataset.
// Añade clases mediante classList.add().
// Gestiona title mediante setAttribute().
// Gestiona disabled mediante la propiedad del botón.
// No uses className.
// No uses getAttribute().
// No uses setAttribute() para disabled.
// No escribas manualmente las modificaciones de cada curso.
// Tu código
// Escribe aquí tu solución
// Selección:
const cursos = document.querySelectorAll(".curso");
//1
cursos.forEach(curso =>{
    const boton = curso.querySelector("button");

    if (curso.dataset.estado === "disponible"){
        curso.classList.add("curso-disponible");
        curso.setAttribute("title","Curso disponible");
        boton.disabled = false;
        boton.dataset.disponible = "si";
    }else{
        curso.classList.add("curso-no-disponible");
        curso.setAttribute("title","Curso no disponible");
        boton.disabled = true;
        boton.dataset.disponible = "no";
    }
    
    if(curso.dataset.nivel === "avanzado"){
        curso.classList.add ("curso-avanzado");
    }
    
    curso.dataset.revisado = "si";
    console.log(curso);
    console.log(boton);
});
