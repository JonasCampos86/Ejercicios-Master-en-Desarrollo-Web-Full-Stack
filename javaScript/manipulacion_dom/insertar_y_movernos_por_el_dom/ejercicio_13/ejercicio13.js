// Enunciado
// Selecciona únicamente el enlace con la clase actual.
// Sin realizar más selecciones con document:
// Obtén su hermano elemento anterior y guárdalo en una variable llamada enlaceAnterior.
// Obtén su hermano elemento siguiente y guárdalo en una variable llamada enlaceSiguiente.
// Muestra en la consola, con etiquetas identificativas:
// El texto del enlace actual.
// El texto del enlace anterior.
// El texto del enlace siguiente.
// Añade la clase visitado al enlace anterior.
// Añade la clase recomendado al enlace siguiente.
// Muestra en la consola el atributo class de ambos enlaces para comprobar los cambios.

// No puedes utilizar querySelectorAll(), children ni seleccionar directamente los enlaces Inicio y Python.

// Resultado esperado
// <nav class="menu">
//   <a class="visitado" href="#">Inicio</a>
//   <a class="actual" href="#">JavaScript</a>
//   <a class="recomendado" href="#">Python</a>
//   <a href="#">React</a>
// </nav>
// Tu código
// Selecciona el enlace actual
const actual = document.querySelector(".actual");

// Obtén el elemento hermano anterior
const enlaceAnterior = actual.previousElementSibling;

// Obtén el elemento hermano siguiente
const enlaceSiguiente = actual.nextElementSibling;

// Muestra el texto del enlace actual
console.log("El texto del enlace actual: ", actual.textContent);

// Muestra el texto del enlace anterior
console.log("El texto del enlace anterior:  ",enlaceAnterior.textContent);

// Muestra el texto del enlace siguiente
console.log("El texto del enlace siguiente: ", enlaceSiguiente.textContent);

// Añade la clase "visitado" al enlace anterior
enlaceAnterior.classList.add("visitado");

// Añade la clase "recomendado" al enlace siguiente
enlaceSiguiente.classList.add("recomendado");

// Muestra el atributo class del enlace anterior
console.log(enlaceAnterior.getAttribute("class"));

// Muestra el atributo class del enlace siguiente
console.log(enlaceSiguiente.getAttribute("class"));