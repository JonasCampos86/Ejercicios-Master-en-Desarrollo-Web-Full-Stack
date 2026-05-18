/*
3 🔐 Cambio de contraseña

Hacer un programa que permita cambiar la contraseña de usuario. 
Para eso tiene que responder las tres preguntas de seguridad. 
Si las tres preguntas son respondidas correctamente, tiene que 
pedir por la nueva contraseña y luego mostrar un mensaje que fue cambiada. 
En caso de que al menos alguna pregunta fue respondida incorrectamente 
debe mostrar un mensaje advirtiéndolo. 
Definir de antemano (hardcodear) preguntas y respuestas.
*/

let usuario = `jonas`;
var contrasena = `lucas`;
let preguntaSeguridad1 = `nadar`;
let preguntaSeguridad2 = `lol`;
let preguntaSeguridad3 = `ford`;
// aqui verificamos al usuario.

let nombreUsuario;
do{
    nombreUsuario = prompt(`Escriba su nombre de usuario para poder cambiar la contraseña: `).toLowerCase().trim();
    if(nombreUsuario === usuario){
        window.alert(`Usuario correcto, ahora deberás responder a 3 preguntas de control. `);
        
    }else{
        window.alert(`Usuario incorrecto, por favor introduzca un usuario correcto `);
        
    }
}while(nombreUsuario!== usuario );
// ahora le hacemos responder bien a 3 preguntas

let respuestaPregunta1 = prompt(`¿Qué deporte practica Lucas los Lunes y los Miercoles? `).toLowerCase().trim();
let respuestaPregunta2 = prompt(`¿A que juega Irene en el ordenador?`).toLowerCase().trim();
let respuestaPregunta3 = prompt(`De que marca es el coche de Jonás:`).toLowerCase().trim();

if(preguntaSeguridad1 === respuestaPregunta1 && 
   preguntaSeguridad2 === respuestaPregunta2 &&
   preguntaSeguridad3 === respuestaPregunta3){
    window.alert(`Muy bien respondido a las 3 preguntas, ahora podras cambiar la contraseña.`);
    var nuevaContrasena =prompt(`Introduce la nueva contraseña: `);
    contrasena = nuevaContrasena;
    window.alert(`Contraseña cambiada a; ${contrasena}`);
}else{
    window.alert(`Algo has respondido mal...No puedes cambiar la contraseña.`);
}

