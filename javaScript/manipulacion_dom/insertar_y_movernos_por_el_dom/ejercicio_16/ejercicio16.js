// Enunciado
// Selecciona únicamente el párrafo con la clase central.
// Obtén su nodo padre mediante parentNode y guárdalo en una variable llamada panel.
// Obtén el nodo inmediatamente anterior al párrafo mediante previousSibling y guárdalo en nodoAnterior.
// Obtén el nodo inmediatamente posterior mediante nextSibling y guárdalo en nodoSiguiente.
// Muestra en la consola, con etiquetas:
// La etiqueta del nodo padre usando tagName.
// El nodo anterior completo.
// El contenido textual del nodo anterior.
// El nodo siguiente completo.
// El contenido textual del nodo siguiente.
// Desde nodoAnterior, retrocede una posición más y muestra la etiqueta del elemento encontrado.
// Desde nodoSiguiente, avanza una posición más y muestra la etiqueta del elemento encontrado.
// Añade un comentario explicando por qué previousSibling y nextSibling no devuelven directamente el <h2> y el <button>.

// No puedes utilizar:

// parentElement
// previousElementSibling
// nextElementSibling
// Estructura real de nodos
// h2
// │
// comentario
// │
// p.central
// │
// texto
// │
// button
// Tu código
// Selecciona el párrafo .central
const parrafoCentral = document.querySelector(".central");

// Obtén su nodo padre y guárdalo en "panel"
const panel = parrafoCentral.parentNode;

// Obtén el nodo anterior
const nodoAnterior = parrafoCentral.previousSibling;

// Obtén el nodo siguiente
const nodoSiguiente = parrafoCentral.nextSibling;

// Muestra la etiqueta del nodo padre
console.log("Nombre dela etiqueta del nodo padre: ", panel.tagName);

// Muestra el nodo anterior completo
console.log("Nodo anterior completo: ",parrafoCentral.previousSibling);

// Muestra el contenido textual del nodo anterior
console.log("Texto del nodo anterior: ", parrafoCentral.previousSibling.textContent);

// Muestra el nodo siguiente completo
console.log("Nodo completo: ", parrafoCentral.nextSibling);

// Muestra el contenido textual del nodo siguiente
console.log("Texto del nodo siguiente: ", parrafoCentral.nextSibling.textContent);

// Retrocede desde nodoAnterior y muestra la etiqueta encontrada
console.log("Etiqueta anterior de nodoAnterior: ", nodoAnterior.previousSibling.tagName);

// Avanza desde nodoSiguiente y muestra la etiqueta encontrada
console.log("Etiqueta siguiente de nodosiguiente: ", nodoSiguiente.nextSibling.tagName);

// Explica por qué previousSibling y nextSibling no devuelven directamente
// el h2 y el button
// Porque trabajan con nodos , no solo con las etiquetas de HTML