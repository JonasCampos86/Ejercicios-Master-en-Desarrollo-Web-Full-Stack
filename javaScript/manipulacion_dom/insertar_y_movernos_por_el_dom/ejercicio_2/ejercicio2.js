// Enunciado
// Selecciona el párrafo con la clase descripcion.
// Guarda su textContent en una variable llamada textoCompleto.
// Guarda su innerText en una variable llamada textoVisible.
// Muestra ambas variables en la consola con etiquetas identificativas.
// Utiliza includes() para comprobar:
// Si textoCompleto contiene "Oferta secreta".
// Si textoVisible contiene "Oferta secreta".
// Muestra ambos resultados booleanos en la consola.

// No escribas manualmente el contenido completo del párrafo dentro de las variables.

// Tu código
// Selecciona el párrafo
const descripcion = document.querySelector(".descripcion");
// Obtén todo el texto
const textoCompleto = descripcion.textContent;
// Obtén únicamente el texto visible
const textoVisible = descripcion.innerText;

// Muestra textoCompleto
console.log("textConten",textoCompleto);
// Muestra textoVisible
console.log("innerText",textoVisible);
// Comprueba si textoCompleto incluye "Oferta secreta"
console.log("textContent",textoCompleto.includes("Oferta secreta"));
// Comprueba si textoVisible incluye "Oferta secreta"
console.log("innerText",textoVisible.includes("Oferta secreta"));