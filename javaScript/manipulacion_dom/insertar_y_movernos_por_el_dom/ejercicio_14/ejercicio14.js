// Enunciado
// Selecciona la sección con la clase panel.
// Muestra en la consola, con etiquetas identificativas:
// La cantidad de elementos que devuelve children.
// La cantidad de nodos que devuelve childNodes.
// Muestra en la consola:
// El primer elemento hijo mediante firstElementChild.
// El primer nodo hijo mediante firstChild.
// El último elemento hijo mediante lastElementChild.
// El último nodo hijo mediante lastChild.
// Añade al final de tu código un comentario explicando por qué children.length y childNodes.length no devuelven la misma cantidad.

// No elimines el comentario del HTML ni modifiques su formato.

// Tu código
// Selecciona la sección
const panel = document.querySelector(".panel");

// Muestra la cantidad de elementos hijos
console.log("Número de elementos hijos de panel", panel.children.length);

// Muestra la cantidad de nodos hijos
console.log("número de nodos hijos de panel: ", panel.childNodes.length);

// Muestra el primer elemento hijo
console.log("Primer elemento hijo de panel", panel.firstElementChild);

// Muestra el primer nodo hijo
console.log("Primer nodo hijo de panel", panel.firstChild);

// Muestra el último elemento hijo
console.log("Último elemento hijo de panel", panel.lastElementChild);

// Muestra el último nodo hijo
console.log("Último nodo hijo de panel", panel.lastChild);

// Explica por qué children y childNodes devuelven cantidades diferentes
// children solo tiene en cuenta las etiquetas  HTML mientras childNodes tiene encuenta las etiquetas, 
// los textos y los comentarios.