/*
3 Datos personales

Crear un programa que pida al usuario ingresar, por separado, nombre, 
apellido, edad, nacionalidad, documento, y muestre luego un mensaje 
que diga: "Nuevo usuario agregado al sistema:" y liste 
todos los datos juntos.

*/

let name = prompt(`¿Como te llamas? `);
let surName = prompt(`¿Cual es tu primer apellido? `);
let age = prompt(`¿Cuantos años tienes? `);
let nationality = prompt(`¿Cual es tu nacionalidad? `);
let documento = prompt(`¿Cual es tu número de documento? `);

window.alert(`Nuevo usuario agregado al sistema:
    ${name}.
    ${surName}.
    ${age}.
    ${nationality}.
    ${documento}.`);