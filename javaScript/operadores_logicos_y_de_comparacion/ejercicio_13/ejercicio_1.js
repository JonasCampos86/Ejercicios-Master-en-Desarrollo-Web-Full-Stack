/*
13 Juez de gusto

Crear un programa que pida al usuario evaluar del 1 al 10 cuánto 
le gusta X cosa (a elección). Dependiendo de la respuesta, debe mostrar 
un mensaje en consonancia. Hacer mínimo 4 casos posibles. Si se ingresa 
algo que no sea un número del 1 al 10, mostrar un mensaje de advertencia 
y volver a pedir dicho número.
*/

let respuesta1 ;

do{
    respuesta1 = parseFloat(prompt(`Del 1 al 10, ¿cuanto te gusta el café?`));

    if(isNaN(respuesta1)){
        window.alert(`¡¡Introduce un número!!`);
    }else if( respuesta1<1 || respuesta1>10){
        window.alert(`Escribe un número entre 1 y 10`);
        respuesta1 = NaN;
    }
}while (isNaN(respuesta1));


if( respuesta1 < 3 ){
    window.alert(`Pues no te gusta .....`);
}else if(respuesta1 <=7){
    window.alert(`Pues te gusta si.`);
}else{
    window.alert(`Pues te gusta mucho¡¡¡`);
}
////////////////////////////////////////////////////////////////////
let respuesta2 ;

do {
    respuesta2 = parseFloat(prompt(`Del 1 al 10, ¿cuanto te gusta el té?`));

    if (isNaN(respuesta2)){
        window.alert(`¡¡Introduce un número!!`);
    }else if (respuesta2 < 1 || respuesta2 >10){
        window.alert(`Escribe un número entre 1 y 10`);
        respuesta2 = NaN;
    }
        
}while(isNaN(respuesta2));

if ( respuesta2 < 3){
    window.alert(`Pues no te gusta .....`);
}else if(respuesta2 <= 7 ){
    window.alert(`Pues te gusta si.`);
}else{
    window.alert(`Pues te gusta mucho¡¡¡`);
}
///////////////////////////////////////////////////////////////////////

let respuesta3;

do {
    respuesta3 = parseFloat(prompt(`Del 1 al 10, ¿cuanto te gusta el redBull?`));

    if (isNaN(respuesta3)){
        window.alert(`¡¡Introduce un número!!`);
    }else if (respuesta3 < 1 || respuesta3 > 10){
        window.alert(`Escribe un número entre 1 y 10`);
        respuesta3 = NaN;
    }
}while (isNaN(respuesta3));

if (respuesta3 < 3){
    window.alert(`pues no te gusta .....`);
}else if (respuesta3<=7){
    window.alert(`Pues te gusta si.`);
}else{
    window.alert(`Pues te gusta mucho¡¡¡`);
}

////////////////////////////////////////////////////////////////////////////////////////
let respuesta4;

do{
    respuesta4 = parseFloat(prompt(`Del 1 al 10, ¿cuanto te gusta el helado?`));

    if(isNaN(respuesta4)){
        window.alert(`¡¡Introduce un número!!`);
    }else if (respuesta4 < 1 || respuesta4 > 10){
        window.alert(`Escribe un número entre 1 y 10`);
        respuesta4 = NaN;
    }
}while (isNaN(respuesta4));

if (respuesta4 < 3){
    window.alert(`pues no te gusta .....`);
}else if (respuesta4 <= 7 ){
    window.alert(`Pues te gusta si.`);
}else{
    window.alert(`Pues te gusta mucho¡¡¡`);
}





