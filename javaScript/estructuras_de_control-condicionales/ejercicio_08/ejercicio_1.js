/*
8 🎨 Simón dice

Crear un programa que muestre una secuencia de 5 nombres de colores en orden aleatorio. 
Los colores posibles son 4: rojo, verde, azul y amarillo. 
Pedir luego ingresar 5 colores uno por uno, y mostrar al finalizar si acertó la secuencia.

Ejemplo
Simón dice: rojo, rojo, azul, verde, amarillo.

Ingrese el primer color: rojo
Ingrese el primer color: rojo
Ingrese el primer color: azul
Ingrese el primer color: verde
Ingrese el primer color: amarillo

Felicitaciones! Has ganado!
*/

window.alert(`Vamos a jugar al Simon dice. El ordenador te va a dar una secuencia de 5 colores y tu tienes que repetirlos
      ¡¡¡¡¡¡MUCHA SUERTE!!!!!!!    `)

let simon1 = Math.floor(Math.random()*4);
let simon1Color;
if(simon1 === 0){
    simon1Color = `rojo`;
}else if(simon1 === 1){
    simon1Color = `verde`
}else if(simon1 === 2){
    simon1Color = `azul`
}else if(simon1 === 3){
    simon1Color = `amarillo`
}

let simon2 = Math.floor(Math.random()*4);
let simon2Color;
if(simon2 === 0){
    simon2Color = `rojo`;
}else if(simon2 === 1){
    simon2Color = `verde`
}else if(simon2 === 2){
    simon2Color = `azul`
}else if(simon2 === 3){
    simon2Color = `amarillo`
}

let simon3 = Math.floor(Math.random()*4);
let simon3Color;
if(simon3 === 0){
    simon3Color = `rojo`;
}else if(simon3 === 1){
    simon3Color = `verde`
}else if(simon3 === 2){
    simon3Color = `azul`
}else if(simon3 === 3){
    simon3Color = `amarillo`
}

let simon4 = Math.floor(Math.random()*4);
let simon4Color;
if(simon4 === 0){
    simon4Color = `rojo`;
}else if(simon4 === 1){
    simon4Color = `verde`
}else if(simon4 === 2){
    simon4Color = `azul`
}else if(simon4 === 3){
    simon4Color = `amarillo`
}

let simon5= Math.floor(Math.random()*4);
let simon5Color;
if(simon5 === 0){
    simon5Color = `rojo`;
}else if(simon5 === 1){
    simon5Color = `verde`
}else if(simon5 === 2){
    simon5Color = `azul`
}else if(simon5 === 3){
    simon5Color = `amarillo`
}

window.alert(`Simon dice: ${simon1Color},${simon2Color},${simon3Color},${simon4Color},${simon5Color},`);

window.alert(`Ahora te toca a ti¡¡¡`);

let respuestaUsuario1;
do{
    respuestaUsuario1= prompt(`Elige la primera: rojo, verde, azul o amarillo:`).toLowerCase().trim();
    if (respuestaUsuario1 !== `rojo` &&
        respuestaUsuario1 !== `verde` &&
        respuestaUsuario1 !== `azul`&&
        respuestaUsuario1 !== `amarillo`    
    ){
        respuestaUsuario1 = `incorrecta`
        window.alert(`Elige solo entra esas cuatro opciones.`);
    }
}while(respuestaUsuario1 ===`incorrecta`);

let respuestaUsuario2;
do{
    respuestaUsuario2= prompt(`Elige la segunda: rojo, verde, azul o amarillo:`).toLowerCase().trim();
    if (respuestaUsuario2 !== `rojo` &&
        respuestaUsuario2 !== `verde` &&
        respuestaUsuario2 !== `azul`&&
        respuestaUsuario2 !== `amarillo`    
    ){
        respuestaUsuario2 = `incorrecta`
        window.alert(`Elige solo entra esas cuatro opciones.`);
    }
}while(respuestaUsuario2 ===`incorrecta`);

let respuestaUsuario3;
do{
    respuestaUsuario3= prompt(`Elige la tercera: rojo, verde, azul o amarillo:`).toLowerCase().trim();
    if (respuestaUsuario3 !== `rojo` &&
        respuestaUsuario3 !== `verde` &&
        respuestaUsuario3 !== `azul`&&
        respuestaUsuario3 !== `amarillo`    
    ){
        respuestaUsuario3 = `incorrecta`
        window.alert(`Elige solo entra esas cuatro opciones.`);
    }
}while(respuestaUsuario3 ===`incorrecta`);

let respuestaUsuario4;
do{
    respuestaUsuario4= prompt(`Elige la cuarta: rojo, verde, azul o amarillo:`).toLowerCase().trim();
    if (respuestaUsuario4 !== `rojo` &&
        respuestaUsuario4 !== `verde` &&
        respuestaUsuario4 !== `azul`&&
        respuestaUsuario4 !== `amarillo`    
    ){
        respuestaUsuario4 = `incorrecta`
        window.alert(`Elige solo entra esas cuatro opciones.`);
    }
}while(respuestaUsuario4 ===`incorrecta`);

let respuestaUsuario5;
do{
    respuestaUsuario5= prompt(`Elige la quinta: rojo, verde, azul o amarillo:`).toLowerCase().trim();
    if (respuestaUsuario5 !== `rojo` &&
        respuestaUsuario5 !== `verde` &&
        respuestaUsuario5 !== `azul`&&
        respuestaUsuario5 !== `amarillo`    
    ){
        respuestaUsuario5 = `incorrecta`
        window.alert(`Elige solo entra esas cuatro opciones.`);
    }
}while(respuestaUsuario5 ===`incorrecta`);

window.alert(`Tus respuestas son :${respuestaUsuario1},${respuestaUsuario2},${respuestaUsuario3},${respuestaUsuario4} y ${respuestaUsuario5}.`);

if( simon1Color === respuestaUsuario1 && simon2Color === respuestaUsuario2 && simon3Color === respuestaUsuario3 && simon4Color === respuestaUsuario4 && simon5Color === respuestaUsuario5){
    window.alert(`GANASTE`);
}else{
    window.alert(`PERDISTE AMIGO`);
}