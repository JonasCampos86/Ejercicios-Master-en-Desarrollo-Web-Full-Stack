/*
24 Cantidad de huéspedes

Crear un programa que pida al usuario ingresar, 
de a uno por vez, cuántas habitaciones tiene un hotel 
para 2, 3 y 4 personas, y muestre el máximo de 
huéspedes que puede albergar.



*/

let hab2 = parseInt(prompt(`Cuantas habitaciones para dos personas hay en el hotel: `));
let hab3 = parseInt(prompt(`Cuantas habitaciones para tres personas hay en el hotel: `));
let hab4 = parseInt(prompt(`Cuantas habitaciones para cuatro personas hay en el hotel: `));

let per2 = hab2*2;
let per3 = hab3*3;
let per4 = hab4*4;

let huespedesTotales = per2+per3+per4;

window.alert(`El número total de huespedes que pueden ingresar al hotel es de: ${huespedesTotales}.`);
