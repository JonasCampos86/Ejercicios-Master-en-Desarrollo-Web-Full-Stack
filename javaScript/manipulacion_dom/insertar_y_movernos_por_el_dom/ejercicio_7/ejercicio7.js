// Enunciado
// Selecciona el elemento con la clase nombre.
// Crea un nuevo elemento <span>.
// Añade al <span> el texto:
// Perfil verificado
// Añade al <span> la clase:
// verificado
// Inserta el nuevo <span> justo después del <h2> utilizando obligatoriamente after().
// Muestra en la consola el nombre de la etiqueta del elemento situado inmediatamente después del título, utilizando:
// nextElementSibling.tagName
// Muestra también su contenido de texto.
// Resultado esperado en el DOM
// <section class="perfil">
//   <h2 class="nombre">Lucía Martínez</h2>
//   <span class="verificado">Perfil verificado</span>
//   <p>Desarrolladora frontend</p>
// </section>
// Tu código
// Selecciona el título
const titulo = document.querySelector(".nombre");

// Crea el nuevo span
const nuevoSpan = document.createElement("span");

// Añade el texto
nuevoSpan.textContent = "Perfil verificado";

// Añade la clase "verificado"
nuevoSpan.classList.add("verificado");

// Inserta el span justo después del título
titulo.after(nuevoSpan);

// Muestra la etiqueta del elemento siguiente al título
console.log(titulo.nextElementSibling.tagName);

// Muestra el texto del elemento siguiente al título
console.log(titulo.nextElementSibling.textContent);