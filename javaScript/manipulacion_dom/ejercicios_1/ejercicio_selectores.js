// # EJERCICIOS SOBRE "SELECTORES EN JS"

const { createElement } = require("react");


// 1. Selecciona el primer p de la página y modificarlo para que cambie el texto que lleva dentro y que ponga "hola que tal"
// let primerP = document.querySelector("p");
// primerP.textContent="Hola que tal";

// 2. Selecciona el 2º enlace del primer p de la página y cambia su href por https://www.google.com
// let primerP = document.querySelector("p");
// let enlaces = primerP.getElementsByTagName("a");
// enlaces[1].setAttribute("href","https://www.google.com")

// 3. Selecciona el penúltimo hijo de una etiqueta con el id "milista"
// let lista = document.getElementById("miLista");
// let hijos = lista.children;
// let penulHijo = hijos[hijos.length -2];

// 4. Desactiva el atributo class del último p de la página
// let parrafo = document.getElementsByTagName("p");
// let ultimoParrafo = parrafo[parrafo.length -1];
// ultimoParrafo.removeAttribute("class");

// 5. Crea un elemento h3 e insertalo al final del body
// let nuevoH3 = document.createElement("h3");
// nuevoH3.textContent="Soy un nuevo h3 añadido ";
// document.body.append(nuevoH3);
// 6. Selecciona el elemento h3 que acabas de crear y añádele un span con el texto "Soy nuevo"
// let nuevoSpan = document.createElement("span");
// nuevoSpan.textContent = " Estoy dentro del h3 nuevo";
// nuevoH3.append(nuevoSpan);
// 7. Modifica el contenido de la segunda etiqueta p, añadiéndole una etiqueta a con el contenido "aquí" y que apunte a https://google.com.
// let parrafos = document.getElementsByTagName("p");
// let segundoPe = parrafos[1];
// let direccion = document.createElement("a");
// direccion.textContent = "  AQUI";
// direccion.href="https://google.com";
// segundoPe.append(direccion);
 
// 8. Comprueba que todos los  p que estén dentro de un div con clase "hero" tiene clase, en caso de ser verdadero, elimínalo
// let parrafos = document.querySelectorAll("div.hero p");
// for (let p of parrafos){
//     if (p.hasAttribute("class")){
//         p.remove();
//     }
// }
// 9. Selecciona el último nodo hijo de body
// let ultimoHijoDeBody = document.body.lastChild;

// 10. Selecciona el siguiente elemento hermano del primer p
// let parrafo = document.getElementsByTagName("p")[0];
// let primerHermanos = parrafo.nextElementSibling;

// 11. Borra el último elemento de body
// let ultimoElemento = document.body.lastElementChild;
// ultimoElemento.remove()

// 12. Modifica el valor del atributo de todas las imágenes cuyo src sea cambiame <img src="cambiame"> a "cambiado"
// let imagenes = document.getElementsByTagName("img");
// for(let imagen of imagenes){
//     if(imagen.getAttribute("src")==="cambiame"){
//         imagen.setAttribute("src","cambiado")
//     }
// };

// 13. Dale la clase "claseejemplo" al primer p
// let primerP = document.getElementsByTagName("p")[0];
// primerP.setAttribute("class","claseejemplo")
// 14. Para cada ul que tenga únicamente 2 li, añade un tercer li con contenido "tercer elemento"
// let losUl = document.getElementsByTagName("ul");
// for(let lis of losUl){
//     if(lis.children.length === 2){
//         let nuevoLi = document.createElement("li");
//         nuevoLi.textContent="tercer elemento";
//         lis.appendChild(nuevoLi);
//     }
// };

// 15. Selecciona el padre del primer p
// let primerP = document.getElementsByTagName("p")[0];
// let papiP = primerP.parentElement;

// 16. Selecciona el hermano anterior del primer p
// let primerP = document.getElementsByTagName("p")[0];
// let hermanoP = primerP.previousElementSibling;

// 17. Selecciona el primer div con clase "container" y modifica su background-color a red
// let divContainer = document.querySelector("div.container");
// divContainer.style.backgroundColor ="red";

// 18. Selecciona el p con id "text" y cambia su contenido poniendole un enlace que apunte a Google
// let pConId = document.getElementById("text")
// pConId.innerHTML=`<a href="www.google.com" >Aqui</a>`;

// 19. Selecciona los div con clase "eustakio"
//let divs =document.querySelectorAll(`div.eustaquio`);
// 20. Selecciona el párrafos que un ID con valor "paisa"
//let pConIds = document.getElementById(`paisa`);
// 21. Selecciona el primer párrafo hijo de un div
//let hijoDivP = document.querySelector(`div > p`);
// 22. Selecciona el penúltimo enlace de las página.
// let todosLosA = document.querySelectorAll(`a`);
// let penultimoA = todosLosA[todosLosA.length-2];
// 23. Selecciona el antepenúltimo párrafo de los div y añádele la clase "portatil" si no la tiene, y en caso de tenerla, que la elimine.
// let losDivs = document.getElementsByTagName(`div`);
// for (let div of losDivs){
//     let parradosDelDiv = div.getElementsByTagName(`p`);
//     if(parradosDelDiv.length >= 3){
//         let antepenultimoP = parradosDelDiv[parradosDelDiv.length-3]

//         antepenultimoP.classList.toggle(`portatil`);
//     }
// };



// 24. Selecciona el padre de del primer li de la página
// let papiLi = document.getElementsByTagName("li")[0].parentElement;
// 25. Para todas las listas ordenadas que tengan únicamente dos elementos, insertar otro elemento entre los dos elementos
// let listasOrdenadas = document.getElementsByTagName("ol");
// for (let lista of listasOrdenadas){
//     if (lista.children.length === 2){
//         let nuevoLi = document.createElement("li");
//         nuevoLi.textContent="Soy el nuevo li que esta en medio";
//         lista.insertBefore(nuevoLi, lista.lastElementChild);

//     }
// };

// 26. Añade el atributo class con valor azul al último elemento p
let parrafos = document.getElementsByTagName("p");
let ultimoP = parrafos[parrafos.length-1];
ultimoP.classList.add("azul");

// 27. Comprueba los elementos div que tengan el atributo class, si lo tiene se debe añadir el valor container, y si no lo tiene no se hace nada.
let divs = document.getElementsByTagName("div");
for (let div of divs){
    if ( div.hasAttribute("class")){
        div.classList.add("container")
    }
}

// 28. Obtén el valor del atributo alt de la última imagen

// 29. Suponiendo que tenemos <span class="textoAzul" id="primerspan">Hola</span>. Obtén los valores de los atributos y los imprimes por pantalla uno por uno.
// 30. Si tenemos lo siguiente, modifica el estilo para que el font-size sea de 40px, el color sea naranja y el texto se
// alinee a la derecha.
// ```css
//   h1{
//     font-size: 20px;
//     color: red;
//     text-align: center;
//   }
// ```
// 31. Suponiendo que tenemos el siguiente código. Añade debajo un tercer p que diga "soy el tres";
// ```html
//   <div id="parrafos">
//     <p>hola soy el uno</p>
//     <p>hola soy el dos</p>
//   </div>
// ```
// 32. Haz lo mismo que el anterior pero en lugar de insertarlo debajo, insertalo en medio, el p tendrá el texto "hola yo soy el uno y medio".
// 33. Añade un nuevo elemento a una lista de modo que ocupe la primera posición.
// 34. Obtén el primer elemento de entre todos los que tengan la clase 'class' y bórralo.
// 35. Convierte  el primer elemento de una lista en un enlace.
// 36. Borra el atributo title de todas las imágenes con la clase 'img'.
// 37. Añade un punto final al texto contenido por las etiquetas p.
// 38. De un conjunto de etiquetas article hijos de un section con la clase 'products', selecciona aquellos que tengan la clase 'oferta' y establece el valor de su atributo data-iva a cero
// 39. Añade el texto "Modificado" al tercer li de todos los  ul
// 40. Incluye la clase porelasterisco en todos los p que tengan la clase preparado
// 41. Inserta un div con la clase pepaino y cuyo border sea rojo, con dos etiquetas hijas p, en las que el primer párrafo sea la clase del div y el segundo párrafo sea el color del border.
// 42. De las listas no ordenadas, selecciona el primer y último hijo "li" y sus hermanos anteriores o posteriores y cambiales el color a rojo
// 43. Seleccionar los span que sean hijos de un "p" cuyo padre del elemento "p" sea un div con la clase "padre"y cambia los estilos del div poniendo un color de fondo azul