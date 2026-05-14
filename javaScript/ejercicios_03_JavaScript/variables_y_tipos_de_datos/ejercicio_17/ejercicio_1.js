/*
17 Duración vuelo

Crear un programa que pida al usuario ingresar, por separado, 
3 destinos de las escalas de un vuelo, y la duración de cada 
uno de ellos. Al final debe mostrar un mensaje que liste todas 
las escalas con su duración y la duración total del vuelo.


*/

let destinoUno = prompt(`Dime tu primer destino: `);
let duracionUno = parseFloat(prompt(`Dime el tiempo de vuelo del primer destino: `));
let escalaUno = parseFloat(prompt(`Dime el tiempo de escala del primer vuelo: `));

let destinoDos = prompt(`Dime tu segundo destino: `);
let duracionDos = parseFloat(prompt(`Dime el tiempo de vuelo del segundo destino: `));
let escalaDos = parseFloat(prompt(`Dime el tiempo de escala del segundo vuelo: `));

let destinoTres = prompt(`Dime tu tercer destino: `);
let duracionTres = parseFloat(prompt(`Dime el tiempo de vuelo del tercer destino: `));
let escalaTres = parseFloat(prompt(`Dime el tiempo de escala del tercer vuelo: `));

let duracionVuelos = (duracionUno+duracionDos+duracionTres);
let escalaVuelos = (escalaUno+escalaDos+escalaTres);
let duracionTotal = (duracionVuelos+escalaVuelos);

window.alert("La duracion total de los vuelos es de" + duracionVuelos.toFixed(2) +"horas .La duracion total de las escalas es de"+  escalaVuelos.toFixed(2)+" horas.En total el viaje  entre "+ destinoUno +", "+destinoDos+" y "+destinoTres+ " es de: "+duracionTotal.toFixed(2)+ " horas");