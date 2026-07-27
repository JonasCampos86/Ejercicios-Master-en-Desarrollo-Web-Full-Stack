// Enunciado
// Selecciona el elemento con la clase producto.
// Guarda su innerHTML en una variable llamada htmlInterior.
// Guarda su outerHTML en una variable llamada htmlCompleto.
// Muestra ambas variables en la consola con etiquetas identificativas.
// Comprueba mediante includes():
// Si htmlInterior contiene la cadena class="producto".
// Si htmlCompleto contiene la cadena class="producto".
// Muestra las dos comprobaciones en la consola con etiquetas claras.

// La finalidad es determinar cuál de las dos propiedades incluye la etiqueta <article> que contiene la clase.

// Tu código
// Selecciona el elemento .producto
const producto = document.querySelector(".producto");

// Guarda el HTML interior
const htmlInterior = producto.innerHTML;

// Guarda el elemento completo
const htmlCompleto = producto.outerHTML;

// Muestra htmlInterior
console.log("innerHTML", htmlInterior);

// Muestra htmlCompleto
console.log("outerHTML", htmlCompleto);

// Comprueba si htmlInterior incluye 'class="producto"'
console.log("innerHTML", htmlInterior.includes(`class="producto"`));

// Comprueba si htmlCompleto incluye 'class="producto"'
console.log ("outerHTML", htmlCompleto.includes(`class="producto"`));