/*
19 Celsius a Fahrenheit

Crear un programa que pida ingresar una cantidad de grados 
Celsius y muestre un mensaje con el resultado de la 
conversión a grados Fahrenheit.

*/

let celsius = parseFloat(prompt(`Dime cuantos grados Celsius y te los transfomo en Fahrenheit: `))

window.alert("Pues los grados Fahrenheit son : "+ ((celsius*1.8)+32) + " grados.")