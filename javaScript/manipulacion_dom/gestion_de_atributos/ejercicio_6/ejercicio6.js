// Ejercicio 6 — Nivel 2: modificar clases con classList
// Código HTML inicial
// <main>
//     <article
//         id="tarjeta"
//         class="tarjeta activa grande"
//     >
//         <h2>Práctica de classList</h2>
//         <p>Modificación controlada de clases.</p>
//     </article>
// </main>
// Enunciado

// Selecciona el elemento con id="tarjeta" y guárdalo en una constante llamada tarjeta.

// Después:

// Comprueba si tiene la clase "activa".
// Comprueba si tiene la clase "oculta".
// Añade la clase "destacada".
// Elimina la clase "grande".
// Comprueba si ahora tiene la clase "destacada".
// Comprueba si todavía tiene la clase "grande".
// Muestra en consola el elemento tarjeta completo.
// Resultado esperado en consola
// true
// false
// true
// false
// Resultado final esperado
// <article
//     id="tarjeta"
//     class="tarjeta activa destacada"
// >

// La clase "activa" debe conservarse. Solo debes añadir "destacada" y eliminar "grande".

// Restricciones
// Usa getElementById() una sola vez.
// Usa classList.contains() para las comprobaciones.
// Usa classList.add() para añadir la clase.
// Usa classList.remove() para eliminarla.
// No uses className.
// No uses setAttribute().
// No sustituyas el atributo class completo.
// Tu código
// Escribe aquí tu solución
const tarjeta = document.getElementById("tarjeta");
console.log(tarjeta.classList.contains("activa"));
console.log(tarjeta.classList.contains("oculta"));
tarjeta.classList.add("destacada");
tarjeta.classList.remove("grande");
console.log(tarjeta.classList.contains("destacada"));
console.log(tarjeta.classList.contains("grande"));
console.log(tarjeta);




// classList permite trabajar con clases individuales sin sobrescribir las demás clases del elemento.