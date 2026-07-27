// Enunciado
// Selecciona el elemento con la clase producto.
// Muestra en la consola, en este orden:
// Todo su texto, incluido el texto oculto.
// Únicamente el texto visible.
// El HTML situado dentro del <article>.
// El <article> completo, incluida su propia etiqueta.
// Antes de cada resultado, muestra una etiqueta que permita identificar qué propiedad estás utilizando.

// El resultado de la consola debería poder distinguirse así:

// TEXTCONTENT:
// ...

// INNERTEXT:
// ...

// INNERHTML:
// ...

// OUTERHTML:
// ...

// No escribas manualmente el contenido del artículo. Debes obtenerlo mediante las propiedades estudiadas.

// Tu código
const producto = document.querySelector(".producto");

// Muestra textContent
console.log("textContent", producto.textContent);

// Muestra innerText
console.log("innerText", producto.innerText);

// Muestra innerHTML
console.log("innerHTML", producto.innerHTML);

// Muestra outerHTML
console.log("outerHTML", producto.outerHTML);