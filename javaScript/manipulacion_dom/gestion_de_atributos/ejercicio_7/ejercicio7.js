// Enunciado

// Selecciona el elemento con id="panel-usuario" y guárdalo en una constante llamada panelUsuario.

// Después:

// Alterna la clase "visible" mediante classList.toggle().
// Comprueba si la clase "visible" sigue existiendo.
// Vuelve a alternar la clase "visible".
// Comprueba de nuevo si existe.
// Sustituye la clase "pendiente" por "completado" mediante classList.replace().
// Comprueba si existe la clase "pendiente".
// Comprueba si existe la clase "completado".
// Muestra el elemento completo en consola.
// Resultado esperado en consola
// false
// true
// false
// true
// Resultado final esperado
// <section
//     id="panel-usuario"
//     class="panel visible completado"
// >
// Restricciones
// Usa getElementById() una sola vez.
// Usa classList.toggle() para alternar "visible".
// Usa classList.replace() para sustituir "pendiente".
// Usa classList.contains() para todas las comprobaciones.
// No uses className.
// No uses setAttribute().
// No uses add() ni remove().
// Tu código
// // Escribe aquí tu solución
const panelUsuario = document.getElementById("panel-usuario");
panelUsuario.classList.toggle("visible");
console.log(panelUsuario.classList.contains("visible"));
panelUsuario.classList.toggle("visible");
console.log(panelUsuario.classList.contains("visible"));
panelUsuario.classList.replace("pendiente", "completado");
console.log(panelUsuario.classList.contains("pendiente"));
console.log(panelUsuario.classList.contains("completado"));
console.log(panelUsuario);


// toggle() elimina la clase si existe y la añade si no existe. replace() sustituye una clase concreta sin modificar las demás.