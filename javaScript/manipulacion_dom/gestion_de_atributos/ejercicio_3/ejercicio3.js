// Enunciado

// Selecciona:

// el <article> y guárdalo en una constante llamada ficha;
// el párrafo que está dentro de #ficha y guárdalo en una 
// constante llamada descripcion.

// Después muestra en consola:

// si ficha tiene el atributo class;
// si ficha tiene el atributo title;
// si ficha tiene algún atributo;
// si descripcion tiene algún atributo.
// Resultado esperado
// true
// false
// true
// false
// RESOLUCION
const ficha = document.getElementById("ficha");
const descripcion = document.querySelector("p");
console.log(ficha.hasAttribute("class"));
console.log(ficha.hasAttribute("title"));
console.log(ficha.hasAttributes());
console.log(descripcion.hasAttributes());
// Restricciones
// Usa getElementById() para seleccionar ficha.
// Usa querySelector() para seleccionar descripcion.
// Usa hasAttribute() para comprobar atributos concretos.
// Usa hasAttributes() para comprobar si un elemento tiene algún atributo.
// No uses getAttribute().
// No crees, modifiques ni elimines atributos.
// Concepto central
// elemento.hasAttribute("nombre");
// elemento.hasAttributes();

// hasAttribute() comprueba un atributo concreto, mientras que hasAttributes() comprueba si existe al menos uno, sin importar cuál.