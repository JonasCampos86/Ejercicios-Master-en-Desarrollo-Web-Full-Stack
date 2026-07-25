// Enunciado

// Selecciona el elemento con id="aviso" y guárdalo en una constante llamada aviso.

// Después, utilizando únicamente setAttribute():

// Crea el atributo title con el valor "Aviso importante".
// Modifica el atributo class para que su nuevo valor sea "mensaje destacado".
// Crea un atributo llamado data-estado con el valor "pendiente".

// Finalmente, muestra en consola el valor de los tres atributos utilizando getAttribute().
const aviso = document.getElementById("aviso");
aviso.setAttribute(`title`, `Aviso importante`);
aviso.setAttribute("class","mensaje destacado");
aviso.setAttribute("data-estado", "pendiente");
console.log(aviso.getAttribute("title"));
console.log(aviso.getAttribute("class"));
console.log(aviso.getAttribute("data-estado"));
