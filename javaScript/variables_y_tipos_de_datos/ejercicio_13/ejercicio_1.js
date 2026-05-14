/*
13 Área de un triangulo

Crear un programa que pida al usuario ingresar el valor 
de la base y el valor de la altura de un triangulo, 
calcular su área y mostrarlo en un mensaje.
*/

let base = prompt(`Dime el tamaño de la base del triangulo en cms: `);

let altura = prompt(`Ahora necesito la altura: `);

let area = (base*altura)/2;

window.alert(`El área del triangulo es: ${area}cm.`);
