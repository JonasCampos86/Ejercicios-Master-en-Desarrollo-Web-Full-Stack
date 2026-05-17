/*
8 Número más grande (2 números)

Hacer un programa que pida ingresar 2 números, 
y muestre como resultado el más grande de ellos. 
Una vez hecho esto, agregar la funcionalidad de que si 
alguno de los números es igual a otro, 
debe mostrar un mensaje diciéndolo.
*/

let num1 = parseInt(prompt(`Dime un número:`));
let num2 = parseInt(prompt(`Dime otro número:`));

if ( num1 === num2 ){
    window.alert(`Los números son iguales`)
}else if( num1 > num2 ){
    window.alert(`El número mas alto es ${num1}.`)
}else{
    window.alert(`El número mas alto es ${num2}`)
}

