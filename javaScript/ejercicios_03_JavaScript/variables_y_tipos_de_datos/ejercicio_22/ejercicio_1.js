/*
22 Cantidad de caracteres

Crear un programa que pida al usuario ingresar un texto y
muestre un mensaje con la cantidad de caracteres que 
tiene ese texto.


*/

let texto = prompt(`Escribe un terxto y te dire los caracteres que tiene: `);

let resultado = texto.length;

window.alert(`Ese texto tiene ${resultado} caracteres.`)