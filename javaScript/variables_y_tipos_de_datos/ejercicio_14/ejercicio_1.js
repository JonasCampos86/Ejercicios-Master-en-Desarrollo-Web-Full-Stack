/*
14 Perímetro de un rectángulo

Crear un programa que pida al usuario ingresar el valor de 
la altura y el valor del ancho de un rectángulo, calcular 
su perímetro y mostrarlo en un mensaje.
*/

let anchura = prompt(`Dime la anchura del rectangulo en cms: `);

let altura = prompt(`Dime la altura del rectangulo en cms: `);

let area = anchura*altura;

window.alert(`El área del rectangulo es: ${area}cm.`);
