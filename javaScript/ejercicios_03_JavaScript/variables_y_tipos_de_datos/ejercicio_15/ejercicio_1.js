/*

15 Porcentaje

Crear un programa que pida al usuario ingresar un número, 
y luego el porcentaje que se desea obtener del mismo. Devolver un 
mensaje muestre el porcentaje de dicho número.
*/
let peticion = prompt(`Dime un número: `);

let porcentaje = prompt(`Dime un porcentaje: `);

let resultado =(peticion*porcentaje)/100;

window.alert(`El porcentaje del número es: ${resultado}.`);
