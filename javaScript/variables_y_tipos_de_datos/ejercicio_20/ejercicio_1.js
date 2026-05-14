/*
20 Múltiplos

Crear un programa que pida al usuario un número, 
luego otro y mostrar en un mensaje si el primer 
valor es múltiplo del segundo. *

*/


let numero = parseFloat(prompt(`Dime un número: `));

let multi = parseFloat(prompt(`Dime otro número: `));

if (numero%multi ===0){
    window.alert(`Es multiple`)
}else{
    window.alert(`No es multiple`)
}