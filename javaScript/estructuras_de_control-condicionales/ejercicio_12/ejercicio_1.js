/*
Condicional swich

12 📺 Televisor

Hacer un programa que empiece preguntando si se desea prender el televisor. 
Si elige que no, el programa debe terminar. Si elige que sí, debe mostrar 
un mensaje con el canal actual y el el nivel de volumen de un televisor, 
y debe permitir realizar las siguientes operaciones:

CAMBIAR CANAL: permite ingresar un canal (0 al 99)
CANAL SIGUIENTE: sube un canal
CANAL ANTERIOR: baja un canal
SUBIR VOLUMEN: sube en volumen en 5
BAJAR VOLUMEN: disminuye en volumen en 5
MUTEAR: pone el volumen en 0

Una vez elegida la opción e ingresado el valor si corresponde, 
debe mostrar un mensaje con el canal y el nivel del volumen actual.

*/

let respuesta ;

do{
    respuesta=prompt(`¿Quieres encender la television? Si o no: `).toLowerCase().trim();

    if ( respuesta === `no`){
        window.alert(`Adios buenas tardes`)
    }else if ( respuesta === `si`){
        window.alert(`Genial, a continuacion te esplicamos las opciones que tienes.`);
    }else{
        window.alert(`No entendí tu respuesta.`)
    }
}while(respuesta !== `no`&& respuesta !== `si`);

let canal = 23;
let volumen = 10;

while(respuesta === `si`){
    
    window.alert(`Aqui le paso las instrucciones a seguir:
        CAMBIAR CANAL: permite ingresar un canal (0 al 99)
        CANAL SIGUIENTE: sube un canal
        CANAL ANTERIOR: baja un canal
        SUBIR VOLUMEN: sube en volumen en 5
        BAJAR VOLUMEN: disminuye en volumen en 5
        MUTEAR: pone el volumen en 0
        APAGAR : apaga el televisor.
        `);


    let opcion;

    
    do{
        opcion= prompt(`Elige la opcion deseada`).toUpperCase().trim();

        if(opcion !== `CAMBIAR CANAL`&&
            opcion !== `CANAL SIGUIENTE`&&
            opcion !== `CANAL ANTERIOR`&&
            opcion !== `SUBIR VOLUMEN`&&
            opcion !== `BAJAR VOLUMEN`&&
            opcion !== `MUTEAR`&&
            opcion !== `APAGAR`)
            {
                opcion = `error`
                window.alert(`No te entiendo`);
            }
    }while(opcion===`error`);

    
    
    
    switch (opcion){
        


        case `CAMBIAR CANAL`:
           let canalUsuario;
            do{
                canalUsuario = parseInt(prompt(`Introduce el número del nuevo canal:`));
                if( canalUsuario >=0 && canalUsuario<=99){
                    canal = canalUsuario;
                    window.alert(`El canal ahora es: ${canalUsuario}`);
                }else{
                    window.alert(`Introduce un canal valido`);
                    canalUsuario=`error`;
                }
            }while(canalUsuario === `error`);
            break;
        case `CANAL SIGUIENTE`:
            canal+=1
            if ( canal > 99){
                window.alert(`No se puede realizar esta opcion`);
                canal-=1

            }else if ( canal <= 99){
                
                window.alert(`Cambio de canal realizado con exito, tu canal actual es: ${canal}.`);
            }
           break;
        case `CANAL ANTERIOR`:
            canal -=1
            if ( canal < 0){
                window.alert(`No se puede realizar esta opcion`);
                canal+=1
            }else if ( canal >= 0){
                
                window.alert(`Cambio de canal realizado con exito, tu canal actual es: ${canal}.`);
            }
           break;
        case `SUBIR VOLUMEN`:
            volumen+=5;
            window.alert(`El volumen actual es de: ${volumen} puntos.`);
           
            break;
        case `BAJAR VOLUMEN`:
            volumen-=5;
            if(volumen < 0){
                window.alert(`Menos que nada no se puede escuchar ajjajajaja.`);
                volumen +=5;
            }else {
                
                window.alert(`El volumen actual es de: ${volumen} puntos.`);
            }
            break;
        case `MUTEAR`:
            volumen = 0;
            window.alert(`MUTE`);
            break;

        case `APAGAR`:
            respuesta = `no`;
            window.alert(`Chau pescau.`);
            break;
    
    }
    

    window.alert(`La tele se encuentra en el canal ${canal} y su volumen es de ${volumen}`)
}