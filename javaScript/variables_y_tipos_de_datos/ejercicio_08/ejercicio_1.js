/*
8 Listas de gustos

Crear variables que contengan arrays de strings con los 
nombres de distintas categorías de gustos, por ejemplo, 
películas, cantantes, libros. Completar cada array con algunos 
valores. Mostrarlos en un mensaje indicando cuál es cuál.
*/

let movie =[`Seven`]
let singer =[`Michel Jackson`]

let fristMovie= prompt(`Dime una pelicula que te guste`);
let secondMovie= prompt(`Dime otra pelicula que te guste`);
let thirtMovie= prompt(`Dime otra pelicula que te guste`);

let fristSinger= prompt(`Dime un cantante que te guste`);
let secondSinger= prompt(`Dime otr@ cantante que te guste`);
let thirtSinger= prompt(`Dime otr@ cantante que te guste`);

movie.push(fristMovie,secondMovie,thirtMovie);
singer.push(fristSinger,secondSinger,thirtSinger);

window.alert(`Esta es tu lista de pelis favoritas: ${movie}, 
    y estos son tus cantantes favoritos: ${singer}.`);


