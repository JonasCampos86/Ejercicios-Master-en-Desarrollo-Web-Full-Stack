// Enunciado

// Selecciona el elemento con id="curso" y guárdalo en una 
// constante llamada curso.

// Después:

// Muestra en consola los nombres de todos sus atributos.
// Comprueba si tiene el atributo title.
// Elimina el atributo title.
// Vuelve a comprobar si tiene el atributo title.
// Muestra otra vez los nombres de todos sus atributos.
// Muestra en consola el elemento curso completo para comprobar que sigue existiendo en el DOM.
// Resultado conceptual esperado

// Antes de eliminarlo:

// ["id", "class", "title", "data-estado"]
// true

// Después de eliminarlo:

// false
// ["id", "class", "data-estado"]

// El <article> debe seguir existiendo. Solo desaparece su atributo title.
// REsolucion
const curso = document.getElementById("curso");
console.log(curso.getAttributeNames());
console.log(curso.hasAttribute("title"));
curso.removeAttribute("title");
console.log(curso.hasAttribute("title"));
console.log(curso.getAttributeNames());
console.log(curso);


// Restricciones
// Usa getElementById() una sola vez.
// Usa getAttributeNames() para obtener los nombres.
// Usa hasAttribute() para las comprobaciones.
// Usa removeAttribute() para eliminar title.
// No uses setAttribute().
// No uses remove().
// No modifiques ningún otro atributo.

// removeAttribute() elimina el atributo indicado, no elimina el elemento del DOM.