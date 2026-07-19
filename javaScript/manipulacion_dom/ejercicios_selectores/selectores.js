
// EJERCICIO 1
// Enunciado

// Selecciona mediante getElementById() el elemento cuyo id es "estado-curso".

// Guarda el resultado en una constante llamada estadoCurso.
const estadoCurso = document.getElementById("estado-curso");
// Después muestra en la consola:
// el elemento completo;
console.log(estadoCurso);
// el contenido de texto del elemento.
console.log(estadoCurso.textContent);
// Restricciones
// Debes utilizar getElementById().
// No utilices querySelector().
// No modifiques el HTML.
// No escribas dos veces el selector: reutiliza la constante.
// No accedas mediante índices.

// EJERCICIO 2
// Enunciado

// Selecciona todos los elementos que tengan la clase "aviso"
//  utilizando getElementsByClassName().

// Guarda el resultado en una constante llamada avisos.
const avisos = document.getElementsByClassName("aviso");
// Después muestra en la consola:

// la colección completa;
console.log(avisos);
// la cantidad de elementos encontrados;
console.log(avisos.length);
// el texto del segundo elemento de la colección.
console.log(avisos[1].textContent);
// Restricciones
// Debes utilizar getElementsByClassName().
// No utilices querySelector() ni querySelectorAll().
// No modifiques el HTML.
// No recorras todavía la colección con un bucle.
// Debes reutilizar la constante avisos.
// Para obtener el segundo elemento, utiliza su índice.

// EJERCICIO 3
// Enunciado

// Selecciona todos los elementos <li> del documento 
// utilizando getElementsByTagName().

// Guarda el resultado en una constante llamada apartados.
const apartados = document.getElementsByTagName("li");
// Después muestra en la consola:

// la colección completa;
console.log (apartados);
// la cantidad de elementos encontrados;
console.log (apartados.length);
// el texto del tercer elemento;
console.log (apartados[2].textContent);
// el texto del último elemento utilizando length, sin escribir 
// directamente su índice.
console.log (apartados[apartados.length-1].textContent);
// Restricciones
// Debes utilizar getElementsByTagName().
// No utilices querySelector() ni querySelectorAll().
// No recorras la colección con un bucle.
// Debes reutilizar la constante apartados.

// EJERCICIO 4
// Enunciado

// Selecciona todos los elementos cuyo atributo name tenga el valor "preferencia" 
// utilizando getElementsByName().

// Guarda el resultado en una constante llamada preferencias.
const preferencias = document.getElementsByName("preferencia")
// Después muestra en la consola:

// la colección completa;
console.log(preferencias);
// la cantidad de elementos encontrados;
console.log(preferencias.length);
// el texto del primer elemento;
console.log(preferencias[0].textContent);
// el texto del último elemento, calculando su índice mediante length.
console.log(preferencias[preferencias.length -1].textContent);
// Restricciones
// Debes utilizar getElementsByName().
// No utilices querySelector() ni querySelectorAll().
// No recorras la colección con un bucle.
// Debes reutilizar la constante preferencias.
// No selecciones el <input>, porque su atributo name tiene otro valor.

// EJERCICIO 5
// Enunciado

// Selecciona el primer elemento que tenga la clase "tarea" 
// utilizando querySelector().

// Guarda el resultado en una constante llamada primeraTarea.
const primeraTarea = document.querySelector(".tarea");
// Después muestra en la consola:

// el elemento completo;
console.log(primeraTarea);
// su contenido textual utilizando explícitamente textContent.
console.log(primeraTarea.textContent);
// Restricciones
// Debes utilizar querySelector().
// Debes escribir un selector CSS de clase.
// No utilices querySelectorAll().
// No utilices getElementsByClassName().
// No accedas mediante índices.
// No modifiques el HTML.

// EJERCICIO 6

// Enunciado

// Selecciona todos los elementos que tengan la clase "modulo" 
// utilizando querySelectorAll().

// Guarda el resultado en una constante llamada modulos.
const modulos = document.querySelectorAll(".modulo");
// Después:

// muestra en consola el NodeList completo;
console.log(modulos);
// muestra la cantidad de elementos encontrados;
console.log(modulos.length);
// recorre el NodeList con forEach();
// dentro del recorrido, muestra únicamente el texto de cada elemento.
modulos.forEach(modulo=>{
    console.log(modulo.textContent);
});
// Restricciones
// Debes utilizar querySelectorAll().
// Debes escribir un selector CSS de clase.
// Debes recorrer el resultado con forEach().
// No utilices getElementsByClassName().
// No conviertas el NodeList en array.
// No escribas índices manualmente.
// Utiliza textContent para obtener el texto.

// EJERCICIO 7

// Enunciado

// Selecciona el primer párrafo que se encuentre dentro del elemento 
// con la clase "practica".

// Guarda el elemento en una constante llamada primeraPractica.
const primeraPractica = document.querySelector(".practica p");
// Después muestra en la consola:

// el elemento completo;
console.log(primeraPractica);
// su contenido textual.
console.log(primeraPractica.textContent);
// Restricciones
// Debes utilizar querySelector().
// Debes utilizar un único selector CSS que combine:
// la clase del elemento contenedor;
// la etiqueta del elemento buscado.
// No utilices querySelectorAll().
// No utilices índices.
// No selecciones primero la sección y después el párrafo.
// Utiliza textContent para mostrar el texto.

// EJERCICIO 8

// Enunciado

// Selecciona todos los elementos <button> cuyo atributo type tenga 
// exactamente el valor "button".

// Guarda el resultado en una constante llamada botonesAccion.
const botonesAccion = document.querySelectorAll(`button[type="button"]`);
// Después:

// muestra el NodeList completo;
console.log(botonesAccion);
// muestra la cantidad de elementos encontrados;
console.log(botonesAccion.length)
// recorre el NodeList mediante forEach();
botonesAccion.forEach(boton=>{
    console.log(boton.textContent);
});
// muestra únicamente el texto de cada botón seleccionado.
// Restricciones
// Debes utilizar querySelectorAll().
// Debes usar un selector CSS que combine la etiqueta y el atributo.
// No utilices getElementsByTagName().
// No selecciones el botón con type="submit".
// No selecciones el enlace.
// No conviertas el NodeList en un array.
// Utiliza textContent.

// EJERCICIO 9
// Enunciado

// Selecciona todos los enlaces que tengan el atributo target 
// con el valor "_blank".

// Guarda el resultado en una constante llamada enlacesExternos.
const enlacesExternos = document.querySelectorAll(`a[target="_blank"]`);
// Después:

// muestra el resultado completo;
console.log(enlacesExternos);
// muestra cuántos enlaces se han encontrado;
console.log(enlacesExternos.length);
// recorre el resultado;
// muestra únicamente el texto de cada enlace.
enlacesExternos.forEach(enlace=>{
    console.log(enlace.textContent);
});
// Restricciones
// Elige tú el método de selección.
// Debes resolverlo mediante una única llamada a un selector.
// No selecciones todos los enlaces para filtrarlos posteriormente con JavaScript.
// No selecciones el <button>, aunque tenga el mismo atributo.
// No conviertas el resultado en un array.
// Utiliza forEach() para recorrerlo.
// Utiliza textContent.

// EJERCICIO 10

// Enunciado

// Selecciona todos los elementos con la clase "recurso" que estén 
// dentro de la sección con la clase "frontend".

// Guarda el resultado en una constante llamada recursosFrontend.
const recursosFrontend = document.querySelectorAll(".frontend .recurso");
// Después:

// muestra el resultado completo;
console.log (recursosFrontend);
// muestra la cantidad de elementos encontrados;
console.log (recursosFrontend.length);
// recorre el resultado;
// muestra únicamente el texto de cada elemento.
recursosFrontend.forEach(temario=>{
    console.log(temario.textContent);
});
// Restricciones
// Elige tú el método de selección.
// Debes resolver la búsqueda mediante una única llamada a un selector.
// El selector debe incluir tanto el contenedor como los elementos buscados.
// No selecciones primero la sección y después busques dentro de ella.
// No deben aparecer los recursos de la sección backend.
// No conviertas el resultado en un array.
// Utiliza forEach() y textContent.

// EJERCICIO 11

// Enunciado

// Selecciona todos los elementos con la clase "tema" que estén 
// dentro de la sección "javascript".

// Después:

// guarda el NodeList en una constante llamada temasJavaScript;
const temasJavaScript = document.querySelectorAll(".javascript .tema");
// conviértelo en un array real mediante el operador spread y guárdalo en arrayTemas;
const arrayTemas = [...temasJavaScript];

// utiliza map() sobre arrayTemas para crear un nuevo array llamado nombresTemas;

const nombresTemas = arrayTemas.map(tema=>{
    return tema.textContent
});
console.log (nombresTemas);

// cada posición de nombresTemas debe contener únicamente el texto del elemento correspondiente;
// muestra temasJavaScript, arrayTemas y nombresTemas en la consola.
console.log(temasJavaScript , arrayTemas , nombresTemas);
// Restricciones
// Utiliza querySelectorAll().
// La búsqueda debe resolverse con un único selector CSS.
// No deben seleccionarse los temas de la sección HTML.
// La conversión debe realizarse obligatoriamente con spread.
// map() debe aplicarse sobre el array real, no directamente sobre el NodeList.
// Utiliza textContent.
// No utilices forEach().

// EJERCICIO 12
// Enunciado

// Selecciona todos los elementos que tengan la clase "curso".

// Después:

// guarda la colección obtenida en una constante llamada cursos;
const cursos = document.getElementsByClassName("curso");
// conviértela en un array real mediante spread y guárdala en arrayCursos;
const arrayCursos = [...cursos];

// utiliza filter() para crear un array llamado cursosJavaScript 
// que contenga únicamente los elementos cuyo texto incluya "JavaScript";
const cursosJavaScript = arrayCursos.filter(modulo =>{
    return modulo.textContent.includes("JavaScript");
});


// utiliza map() sobre cursosJavaScript para crear un nuevo array llamado 
// nombresCursos;
// nombresCursos debe contener únicamente los textos de los cursos seleccionados;
const nombresCursos = cursosJavaScript.map(nombre =>{
    return nombre.textContent
})
// console.log(cursos);
// console.log(arrayCursos);
// console.log(cursosJavaScript);
// console.log(nombresCursos);
// muestra las cuatro variables en la consola.
// Restricciones
// Debes utilizar getElementsByClassName().
// La conversión debe hacerse mediante spread.
// filter() y map() deben aplicarse sobre arrays reales.
// No utilices querySelectorAll().
// No utilices forEach().
// Utiliza textContent.
// Puedes utilizar includes().

// EJERCICIO 13
// Enunciado

// Obtén únicamente los enlaces que cumplan simultáneamente estas condiciones:

// están dentro de la sección con clase "javascript";
// son elementos <a>;
// tienen target="_blank".

// Después:

// // guarda el resultado de la selección en enlacesJavaScript;
// const enlacesJavaScript = document.querySelectorAll(`.javascript a[target="_blank"]`);

// // conviértelo en un array real llamado arrayEnlaces;
// const arrayEnlaces = [...enlacesJavaScript];

// // utiliza map() para crear nombresEnlaces;
// const nombresEnlaces= arrayEnlaces.map(nombre=>{
//     return nombre.textContent
// });

// nombresEnlaces debe contener solamente el texto de cada enlace;
// muestra las tres variables en la consola.
// console.log(enlacesJavaScript);
// console.log(arrayEnlaces);
// console.log(nombresEnlaces);
// Restricciones
// Elige tú el método de selección.
// Debes utilizar una única llamada al selector.
// El selector debe expresar las tres condiciones.
// No selecciones primero todos los recursos para filtrarlos después.
// No debe seleccionarse el botón.
// No debe seleccionarse el enlace de Python.
// La conversión debe realizarse mediante spread.
// map() debe aplicarse sobre el array real.
// No utilices filter() ni forEach().

// EJERCICIO 14

// Enunciado

// Crea una constante llamada nombresRecursosDomExternos que 
// contenga únicamente el texto de los elementos que 
// cumplan simultáneamente estas condiciones:

// son enlaces <a>;
// están dentro de la sección .javascript;
// tienen target="_blank";
// su texto contiene "DOM".
// const enlaces= document.querySelectorAll(`.javascript a[target="_blank"]`)
// const arrayDeEnlaces =[...enlaces];
// const enlacesConDOM = arrayDeEnlaces.filter(enlace=>{
//     return enlace.textContent.includes("DOM");
// });

// const nombresRecursosDomExternos = enlacesConDOM.map(enlace=>{
//     return enlace.textContent
// })
// console.log(nombresRecursosDomExternos);


// Muestra el array final en la consola.

// Restricciones
// Utiliza una única llamada a un selector del DOM.
// No modifiques el HTML.
// No utilices índices manuales.
// No utilices forEach().
// El resultado final debe ser un array de cadenas, no un array de elementos HTML.
// No deben aparecer el botón, el enlace de CSS, el enlace local ni el enlace de eventos.

// EJERCICIO 15

// Enunciado

// Crea una constante llamada nombresRecursosFinales que contenga únicamente los textos de los elementos que cumplan todas estas condiciones:

// están dentro de .javascript;
// son enlaces <a>;
// tienen la clase recurso;
// tienen target="_blank";
// su texto contiene "DOM" o "Arrays".
const primerRecurso = document.querySelectorAll(`.javascript  a.recurso[target="_blank"]  `);
const segundoRecurso = [...primerRecurso];
const tercerRecurso = segundoRecurso.filter(recurso=>{
    return recurso.textContent.includes("DOM")||
           recurso.textContent.includes("Arrays");
});
const nombresRecursosFinales= tercerRecurso.map(recurso=>{
    return recurso.textContent
});
console.log(nombresRecursosFinales);
console.log(nombresRecursosFinales.length);




// Muestra en consola:

// el array final;
// la cantidad de elementos que contiene.
// Restricciones
// Solo puedes hacer una llamada a un selector del DOM.
// No modifiques el HTML.
// No utilices índices manuales.
// No utilices forEach().
// Debes trabajar con un array real antes de utilizar métodos de array.
// El resultado final debe contener cadenas de texto, no elementos HTML.
// Puedes resolverlo mediante varios pasos.