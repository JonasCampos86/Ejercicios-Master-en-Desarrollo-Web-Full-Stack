/*
Condicional swich
10 ❄️ Estaciones del año II

Crear un programa que pida una estación del año y mostrar en un 
mensaje la fecha en la que comienza y termina

*/

let estacionUsuario ; 

do{
    estacionUsuario = prompt(`Dime la estación del año y te digo de cuando empiez y cuando termina`).toLowerCase().trim();

    if ( estacionUsuario !== `invierno` &&
        estacionUsuario !== `primavera` &&
        estacionUsuario !== `verano` &&
        estacionUsuario !== `otoño` 
    ){
        window.alert(`No has introducido ninguna estación correcta, vuelve a intentarlo`)
    }
}while(estacionUsuario !== `invierno` &&
        estacionUsuario !== `primavera` &&
        estacionUsuario !== `verano` &&
        estacionUsuario !== `otoño`
);

switch(estacionUsuario){
    case`invierno`:
        window.alert(`Empieza el 21 de diciembre a las 16:03h y acaba el 20 de marzo a las 15:45h`);
        break;
    
    case `primavera`:
        window.alert(`La primavera empieza el 20 de marzo a las 15:46h y acaba el 21 de junio a las 9:23h`);
        break;
    
    case `verano`:
        window.alert(`El verano empieza el 21 de junio a las 9:24h y acaba el 23 de septiembre a las 01:04h`);
        break;
    
    case `otoño`:
        window.alert(`El otoño empieza el 23 de septiembre a las 01:05h y acaba el 21 de diciembre a las 16:02h`);
        break;

}