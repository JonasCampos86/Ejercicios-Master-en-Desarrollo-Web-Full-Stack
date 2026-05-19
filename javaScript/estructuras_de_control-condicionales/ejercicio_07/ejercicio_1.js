/*
7 ✊🤚✌️ Piedra, papel o tijera

Crear un programa que permita ingresar al jugador 
piedra, papel o tijera, genere de forma aleatoria 
la jugada de la computadora, y muestre en un mensaje 
quién ganó, con las jugadas respectivas.
*/


let respuestaUsuario;

do{
    respuestaUsuario= prompt(`Elige: piedra, papel o tijera:`).toLowerCase().trim();
    if (respuestaUsuario !== `piedra` &&
        respuestaUsuario !== `papel` &&
        respuestaUsuario !== `tijera` 
    ){
        respuestaUsuario = `incorrecta`
        window.alert(`Elige solo entra esas tres opciones, se que lagarto y Spot no estan.....`)
    }
}while(respuestaUsuario ===`incorrecta`);

window.alert(`Empieza la partida`)

let makina = Math.floor(Math.random()*3);
let makinaDecision;
if(makina === 0){
    makinaDecision = `piedra`;
}else if(makina === 1){
    makinaDecision = `papel`;
}else if(makina === 2){
    makinaDecision = `tijera`;
}

window.alert(`Tu elejiste ${respuestaUsuario} y la maquina eligió ${makinaDecision}.`)

if ( makinaDecision === `piedra` && respuestaUsuario === `piedra`){
    window.alert(`Empate`);
}else if(makinaDecision === `piedra` && respuestaUsuario ===`papel`){
    window.alert(`Ganaste`);
}else if (makinaDecision === `piedra` && respuestaUsuario ===`tijera`){
    window.alert(`Perdiste`);
}else if(makinaDecision === `papel` && respuestaUsuario === `piedra`){
    window.alert(`Perdiste`);
}else if(makinaDecision === `papel` && respuestaUsuario === `papel`){
    window.alert(`Empate`);
}else if(makinaDecision === `papel` && respuestaUsuario === `tijera`){
    window.alert(`Ganaste`);
}else if(makinaDecision === `tijera` && respuestaUsuario === `piedra`){
    window.alert(`Ganaste`);
}else if(makinaDecision === `tijera` && respuestaUsuario === `papel`){
    window.alert(`Perdiste`);
}else if(makinaDecision === `tijera` && respuestaUsuario === `tijera`){
    window.alert(`Empate`);
}

