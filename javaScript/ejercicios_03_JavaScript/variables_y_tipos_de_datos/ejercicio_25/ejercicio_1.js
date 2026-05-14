/*
25 Calculador gastos

Crear un programa que pida al usuario cuanto dinero disponible 
tiene, y vaya preguntando cuánto tiene que pagar por cada 
servicio, pidiendo el nombre del servicio y el monto a pagar, 
uno a la vez. Cada vez que pide ingresar un nuevo servicio, 
el mensaje debe mostrar cuántos servicios quedan por ingresar, 
utilizando una variable, y mostrar cuánto dinero disponible queda. 
Al final debe mostrar una lista con todos los servicios a pagar y 
el monto de cada uno, además del dinero disponible que le queda. 
Hacerlo con 3 servicios.

*/
let serviciosTotales = 3;
let dineroDisponible = parseFloat(prompt(`De cuanto dinero dispones: `));

let servicio1 = prompt(`Te quedan ${serviciosTotales} servicios por ingresar.
     tienes ${dineroDisponible} Euros disponibles.
     Como se llama este servicio: `);
let servicio1Euros = parseFloat(prompt(`Cuanto vale: `));

let servicio2 = prompt(`Te quedan ${--serviciosTotales} servicios por ingresar.
     tienes ${dineroDisponible-servicio1Euros} Euros disponibles.
     Como se llama este servicio: `);
let servicio2Euros = parseFloat(prompt(`Cuanto vale: `));

let servicio3 = prompt(`Te quedan ${--serviciosTotales} servicios por ingresar.
     tienes ${dineroDisponible-servicio1Euros-servicio2Euros} Euros disponibles.
     Como se llama este servicio: `);
let servicio3Euros = parseFloat(prompt(`Cuanto vale: `));

let dineroTotal = dineroDisponible-servicio1Euros-servicio2Euros-servicio3Euros;

window.alert(`
    ${servicio1} = ${servicio1Euros} Euros
    ${servicio2} = ${servicio2Euros} Euros
    ${servicio3} = ${servicio3Euros} Euros
    Tienes aun disponibles: ${dineroTotal} Euros.
    `);



