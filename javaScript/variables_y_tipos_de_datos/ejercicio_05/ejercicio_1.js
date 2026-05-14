/*
5 Dirección completa

Crear un programa que pida al usuario ingresar, 
por separado, la calle, el número, el departamento, el 
código postal, la ciudad y el país, y muestre un mensaje con 
toda la dirección completa, p.ej.: "La dirección que ha 
ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".
*/

let street = prompt(`Escriba aquí su el nombre de su calle: `);
let departamet = prompt(`Escriba aquí el número de departamenteo en el que vive: `);
let postalCod = prompt(`Escriba aquí su código postal: `);
let city = prompt(`Escrita aquí su ciudad: `);
let country = prompt(`Escriba aqui su país:`);

window.alert(`La dirección que a ingresado es:
    ${street}, ${departamet}, ${postalCod}, ${city}, ${country}.`);