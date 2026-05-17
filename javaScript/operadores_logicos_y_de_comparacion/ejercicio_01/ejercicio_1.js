/*
1 Número mayor a 100

Crear un programa que permita ingresar tres número y muestre si alguno de ellos es mayor a 100
*/

let num1 = parseFloat(prompt(`Escribe el primero de tres números: `));
let num2 = parseFloat(prompt(`Escribe el segundo de tres números: `));
let num3 = parseFloat(prompt(`Escribe el tercer y último número: `));

let numeros = [num1,num2,num3];

for( let i = 0; i<numeros.length ; i++){
    if(numeros[i]>100){
        window.alert(numeros[i]);
    }
}