// Enunciado

// Selecciona el elemento con id="perfil" y guárdalo en una constante llamada perfil.
// Después muestra en la consola, utilizando obligatoriamente getAttribute():
// el valor del atributo id;
// el valor completo del atributo class;
// el valor del atributo title;
// el resultado de intentar leer un atributo llamado data-estado, que no existe.
// RESOLUCION
const perfil = document.getElementById("perfil");
console.log(perfil.getAttribute("id"));
console.log(perfil.getAttribute("class"));
console.log(perfil.getAttribute("title"));
console.log(perfil.getAttribute("data-estado"));
// Restricciones
// Utiliza getElementById() para seleccionar el elemento.
// Utiliza getAttribute() en las cuatro lecturas.
// No accedas mediante perfil.id, perfil.className ni perfil.title.
// No crees ni modifiques atributos.
// No utilices dataset.
// Resultado esperado
// perfil
// tarjeta destacada
// Información del alumno
// null
// Conceptos permitidos
// const
// document.getElementById()
// getAttribute()
// console.log()