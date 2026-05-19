/*
6 🥪 Sandwich

Crear un programa que pregunte al usuario paso por paso qué 
opciones desea elegir para armar su pedido. En caso de que 
no se elija una opción válida en cualquier paso debe mostrar 
un mensaje alertando que el pedido saldrá incompleto. 
Mostrar al final un mensaje con el pedido resultante. Debe preguntar:

Tipo de pan: blanco, negro, integral
Ingrediente 1: tomate, lechuga, pimiento
Ingrediente 2: cebolla, aceituna, pepino
Aderezos: mostaz, mayonesa, picante
Gaseosa: Coca Cola, Pepsi, Sprite

*/
let tipoPan ;

switch(tipoPan=prompt(`Que tipo de pan quieres: blanco, negro o integral:`).toLowerCase().trim()){
    case`blanco`:
    
    break
    case`negro`:

    break
    case `integral`:
        
    break
    default:
        tipoPan = `incompleto`;
        window.alert(`El pedido va a quedar incompleto`)
    break
}
let ingrediente1;

switch(ingrediente1=prompt(`Que ingrediente quieres: tomate, lechuga o pimiento:`).toLowerCase().trim()){
    case`tomate`:
        
    case`lechuga`:
        
    break
    case `pimiento`:
        
    break
    default:
        ingrediente1 = `incompleto`;
        window.alert(`El pedido va a quedar incompleto`)
    break
}

let ingrediente2;


switch(ingrediente2=prompt(`Que ingrediente quieres: cebolla, aceituna o pepino:`).toLowerCase().trim()){
    case`cebolla`:
        
    break
    case`aceituna`:
        
    break
    case `pepino`:
    
    break
    default:
        ingrediente2 = `incompleto`;
        window.alert(`El pedido va a quedar incompleto`)
    break
}

let aderezo;

switch(aderezo=prompt(`Que aderezo quieres: mostaza, mayonesa o picante:`).toLowerCase().trim()){
    case`mostaza`:
        
    break
    case`mayonesa`:
        
    break
    case `picante`:
        
    break
    default:
        aderezo = `incompleto`;
        window.alert(`El pedido va a quedar incompleto`)
    break
}

let bebida ;

switch(bebida=prompt(`Que bebida quieres: Coca Cola, Pepsi, Sprite:`).toLowerCase().trim()){
    case`coca cola`:
    break

    case`pepsi`:
    break
    
    case `sprite`:

    break
    default:
        bebida = `incompleto`;
        window.alert(`El pedido va a quedar incompleto`)
    break
}


window.alert(`Su pedido es: 
    pan : ${tipoPan}
    ingrediente 1 : ${ingrediente1}
    ingrediente 2 : ${ingrediente2}
    aderezo : ${aderezo}
    bebida : ${bebida}
    Esperamos disfrute el mismo.`);