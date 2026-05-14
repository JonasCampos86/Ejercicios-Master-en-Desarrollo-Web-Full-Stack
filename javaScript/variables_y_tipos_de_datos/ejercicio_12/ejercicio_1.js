/*
12 Kilómetros a millas

Crear un programa que pida ingresar una cantidad de kilómetros 
y muestre un mensaje con el resultado de la conversión en millas.
*/

let km = prompt(`Dime la cantidad de kilometros que queras pasar a millas: `);

window.alert(`Las millas totales son: `+ (km*0.621371).toFixed(2)+`millas.`);