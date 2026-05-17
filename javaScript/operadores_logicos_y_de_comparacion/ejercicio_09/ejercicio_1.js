/*
9 Número más grande (3 números)

Hacer un programa que pida ingresar 3 números, 
y muestre como resultado el más grande de ellos. 
Una vez hecho esto, agregar la funcionalidad de que si 
alguno de los números es igual a otro, 
debe mostrar un mensaje diciéndolo.
*/

let num1 = parseFloat(prompt(`Dime el primer número: `));
let num2 = parseFloat(prompt(`Dime el segundo número: `));
let num3 = parseFloat(prompt(`Dime el tercer número:` ));

if( num1 > num2 && num1 > num3 ){
    window.alert(`El primer número es el mayor.`);
}else if ( num2 > num1 && num2 > num3 ){
    window.alert(`El segundo número es el mayor.`);
}else if(num3 > num1 && num3 > num2){
    window.alert(`El tercer número es el mayor.`);
}

if( num1 === num2 ){
    window.alert(`El primer número es igual que el segundo.`);

}else if( num1 === num3){
    window.alert(`El primer número es igual que el tercero,`);

}else if( num2 === num3 ){
    window.alert(`El segundo número y el tercero son iguales.`);
}else{
    window.alert(`No hay número iguales.`);
}
    

