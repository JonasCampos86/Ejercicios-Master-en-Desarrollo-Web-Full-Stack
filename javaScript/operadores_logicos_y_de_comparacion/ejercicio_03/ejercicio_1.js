/*
3 Donación de sangre

Crear un programa que realice al usuario 3 preguntas: 
si se ha hecho tatuajes recientemente, 
si ha tenido o tiene hepatitis, 
si tiene anemia. 
Si responde a alguna de ellas afirmativamente, 
debe mostrar un mensaje que indique si puede o no donar sangre

*/

let tatuajes = prompt(`¿Tienes tatuajes? si o no: `);
let hepatitis = prompt(`¿Has tenido hepatitis? si o no: `);
let anemia = prompt(`¿Tienes anemia? si o no: `);

if (tatuajes == "no" && hepatitis == "no" && anemia == "no"){
    window.alert(`Puedes ser donante de sange. ¡¡Enorabuena!!`)
}else{
    window.alert(`Lo sentimos pero no puedes ser donante de sangre.`)
};