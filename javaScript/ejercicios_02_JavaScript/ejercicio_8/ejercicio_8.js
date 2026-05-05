/*
Escribir un programa que pregunte al usuario una cantidad a invertir, 
el interés anual y el número de años, y muestre por pantalla el capital 
obtenido en la inversión.
*/

const inversion=prompt("Indique cuanto dinero desea invertir: ");
const interes = prompt("Indique el porcentaje de intereses que genera anualmente la inversión: ");
const years = prompt("Indique los años que va a mantener esa inversión: ")
const gananciaAnual = (inversion*interes)/100;
const gananciaTotal = gananciaAnual*years;

console.log("El capital que van a generar es de: "+gananciaTotal+"€ totales.")