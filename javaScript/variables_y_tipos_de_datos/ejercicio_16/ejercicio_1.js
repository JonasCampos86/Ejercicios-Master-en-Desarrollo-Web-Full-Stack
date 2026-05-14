/* 
16 Tiempo de viaje

Crear un programa que pida al usuario la distancia de su recorrido 
y mostrar en un mensaje cuánto tiempo tardaría en completar el 
recorrido en distintos medios de transporte, definiendo de 
antemano distintas velocidades para distintos medios de 
transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).

*/

let caminando = 5;
let bicicleta = 10;
let coche = 40;

let distancia = prompt(`Dime cuantos kilometros vas a recorer: `)

let tiempoCami = distancia/caminando;
let tiempoBici = distancia/bicicleta;
let tiempoCoche = distancia/coche;

window.alert(`El tiempo que vas a tardar eh recorer ${distancia}Kms es:
    Tiempo andando: ${tiempoCami} horas.
    Tiempo en bici: ${tiempoBici} horas.
    Tiempo en coche: ${tiempoCoche} horas`);