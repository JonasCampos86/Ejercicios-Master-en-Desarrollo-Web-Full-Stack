// Ejercicio 5 — Nivel 2: propiedades DOM frente a atributos HTML
// Código HTML inicial
// <main>
//     <section
//         id="panel"
//         class="contenedor activo destacado"
//         title="Panel principal"
//     >
//         <p>Contenido del panel.</p>
//     </section>
// </main>
// Enunciado

// Selecciona el elemento con id="panel" y guárdalo en una constante llamada panel.

// Después:

// Muestra en consola el valor de su propiedad id.
// Muestra en consola el valor de su propiedad className.
// Cambia la propiedad id por "panel-principal".
// Cambia la propiedad className por "contenedor secundario".
// Muestra en consola el nuevo valor de panel.id.
// Muestra en consola el nuevo valor de panel.className.
// Comprueba mediante getAttribute() el valor actual de los atributos id y class.
// Muestra el elemento panel completo.
// Resultado final esperado
// <section
//     id="panel-principal"
//     class="contenedor secundario"
//     title="Panel principal"
// >
//     <p>Contenido del panel.</p>
// </section>

// Observa que las clases anteriores:

// activo destacado

// deben desaparecer, porque asignar un nuevo valor a className sustituye el contenido completo del atributo class.

// Restricciones
// Usa getElementById() una sola vez.
// Usa las propiedades id y className para leer y modificar.
// Usa getAttribute() únicamente en las comprobaciones finales.
// No uses setAttribute().
// No uses classList.
// No modifiques el atributo title.
// Tu código
// Escribe aquí tu solución
const panel = document.getElementById("panel");
console.log(panel.id);
console.log(panel.className);
panel.id = "panel-principal";
panel.className = "contenedor secundario";
console.log(panel.id);
console.log(panel.className);
console.log(panel.getAttribute("id"));
console.log(panel.getAttribute("class"));
console.log(panel);


