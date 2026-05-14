/*
21 
Segundos a horas, minutos y segundos

Crear un programa que pida ingresar una cantidad en segundos y 
muestre un mensaje con el resultado de la conversión en horas,
minutos y segundos que corresponde a esa cantidad 
(p.ej. 3602 segundos = 1 hora 2 segundos). 
(Usar operador módulo)

*/
let segundos = parseFloat(prompt(`Dime el numero de segundos que quieras que te pase a minutos y horas: `));

let minutos = segundos/60;
let horas = minutos/60;

let resultado1 = (segundos/60);
let resultado2 = (resultado1/60);
window.alert(resultado2.toFixed(2));