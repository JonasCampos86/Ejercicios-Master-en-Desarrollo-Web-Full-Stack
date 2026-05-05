/*
Una panadería vende barras de pan a 3,49€ cada una. 
El pan que no es el día tiene un descuento del 60%. 
Escribir un programa que comience leyendo el número de 
barras vendidas que no son del día. Después del programa 
debe mostrar el precio habitual de una barra de pan, el 
descuento que se le hace por no ser fresca y el coste final total.
*/
const numBreadDay = prompt("Indique cuantas barras del día a va a comprar: ");
const numBreadNotDay = prompt("Indique cuantas barras que no son de hoy a va a comprar: ");

const priceBreadDay = 3.49;
const priceBreadNotDay = (priceBreadDay*60)/100;

console.log("La compra de "+ numBreadDay + " de pan reciente hacen un total de :"+ (priceBreadDay+numBreadDay)+"€");
console.log("La compra de "+ numBreadNotDay + " de pan de ayer hacen un total de :"+ (priceBreadNotDay+numBreadNotDay)+"€");
