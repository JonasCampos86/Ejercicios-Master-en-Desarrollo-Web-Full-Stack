/* 

Escribir un programa que pregunte al usuario por el número de horas trabajadas
y el costo por hora. Después debe mostrar por pantalla la paga que le corresponde.

*/

const numHoras = prompt("Dime cuantas horas has trabajado: ");
const precioHoras = prompt("Dime le precio de la hora: ")

console.log("Si trabajaste "+ numHoras + " a un precio de " + precioHoras + "€ tengo que pagarte: " + numHoras*precioHoras);