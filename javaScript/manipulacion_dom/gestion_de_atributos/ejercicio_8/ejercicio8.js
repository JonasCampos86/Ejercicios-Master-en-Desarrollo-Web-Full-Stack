// Enunciado

// Selecciona el elemento con id="tarjeta-curso" y guárdalo en una constante llamada tarjetaCurso.

// Después, mediante la propiedad style:

// Cambia el color del texto a "blue".
// Establece un tamaño de fuente de "20px".
// Añade un color de fondo "yellow".
// Añade un borde redondeado de "10px".
// Muestra en consola el valor de cada una de esas cuatro propiedades.
// Muestra el elemento completo en consola.

// El estilo inicial:

// padding: 10px;

// debe conservarse.

// Resultado esperado en consola
// blue
// 20px
// yellow
// 10px
// Resultado final esperado

// El atributo style deberá contener conceptualmente:

// style="
//     color: blue;
//     padding: 10px;
//     font-size: 20px;
//     background-color: yellow;
//     border-radius: 10px;
// "

// El orden concreto de las declaraciones puede variar.

// Restricciones
// Usa getElementById() una sola vez.
// Modifica los estilos mediante tarjetaCurso.style.
// Escribe las propiedades CSS con su nombre correspondiente en camelCase.
// No uses setAttribute("style", ...).
// No uses className ni classList.
// No sustituyas el atributo style completo.
// No elimines el padding existente.
// Tu código
// Escribe aquí tu solución
const tarjetaCurso = document.getElementById("tarjeta-curso");
tarjetaCurso.style.color = "blue";
tarjetaCurso.style.fontSize = "20px";
tarjetaCurso.style.backgroundColor ="yellow";
tarjetaCurso.style.borderRadius = "10px";
console.log(tarjetaCurso.style.color);
console.log(tarjetaCurso.style.fontSize);
console.log(tarjetaCurso.style.backgroundColor);
console.log(tarjetaCurso.style.borderRadius);
console.log(tarjetaCurso);






