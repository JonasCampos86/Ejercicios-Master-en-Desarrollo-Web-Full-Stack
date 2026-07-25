// Enunciado

// Selecciona el <input> con id="nombre" y guárdalo en una constante llamada nombre.

// Después realiza estas operaciones en orden:

// Muestra en consola el resultado de leer el atributo value mediante getAttribute().
// Muestra en consola el valor de la propiedad nombre.value.
// Cambia la propiedad nombre.value por "Lucas".
// Vuelve a mostrar el atributo value mediante getAttribute().
// Vuelve a mostrar la propiedad nombre.value.
// Muestra el elemento completo en consola.
// Resultado esperado

// Antes de modificar la propiedad:

// Jonás
// Jonás

// Después:

// Jonás
// Lucas

// Aunque visualmente el input muestre "Lucas", el atributo HTML original debe continuar siendo "Jonás".

// Restricciones
// Usa getElementById() una sola vez.
// Lee el atributo mediante getAttribute("value").
// Lee y modifica el valor actual mediante la propiedad .value.
// No uses setAttribute().
// No modifiques el HTML manualmente.
// No uses eventos.
// Tu código
// Escribe aquí tu solución
const nombre = document.getElementById("nombre");

//1
console.log(nombre.getAttribute("value"));
//2
console.log(nombre.value);
//3
nombre.value = "Lucas";
//4
console.log(nombre.getAttribute("value"));
//5
console.log(nombre.value);
//6
console.log(nombre);