/*
5 Mantenimiento

Hacer un programa que pregunte por separado si el auto 
tiene aceite, agua, y neumáticos con presión. 
Mostrar en un mensaje si tiene que hacer mantenimiento 
o no si alguna de las respuestas es negativa
*/

let aceite = prompt(`¿Tiene bien el nivel de aceite? Si o no:`).toLowerCase().trim();
let agua = prompt(`¿Tiene agua el coche? Si o no:`).toLowerCase().trim();
let presionNeumaticos = prompt(`¿Tiene presión los neumaticos? Si o no`).toLowerCase().trim();

if(aceite ===`si` && agua === `si` && presionNeumaticos === `si`){
    window.alert(`Buen viaje amigo`)
}else{
    window.alert(`Tienes que revisar algun elemento del vehiculo`)
};
