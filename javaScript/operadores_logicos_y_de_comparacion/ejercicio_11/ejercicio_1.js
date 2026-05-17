/*
11 Quizz
Crear un programa que sea un cuestionario con 3 
preguntas de sí o no. Al finalizar, mostrar un mensaje 
de felicitaciones si se respondió bien a todas, o uno de 
que ha perdido el juego si respondió mal al menos una.

*/

const respuesta1 = `si`;
const respuesta2 = `no`;
const respuesta3 = `si`;

let pregunta1 = prompt(`¿2+4 es igual a 6? si o no`).toLowerCase().trim();
let pregunta2 = prompt(`¿2+6 es igual a 9? si o no`).toLowerCase().trim();
let pregunta3 = prompt(`¿5+5 es igual a 10? si o no`).toLowerCase().trim();

if ( respuesta1 === pregunta1 && respuesta2 === pregunta2 && respuesta3 === pregunta3){
    window.alert(`Felicicades APROBASTE`);
}else{
    window.alert(`Lo sentimos mucho, SUSPENDISTE.`);
}