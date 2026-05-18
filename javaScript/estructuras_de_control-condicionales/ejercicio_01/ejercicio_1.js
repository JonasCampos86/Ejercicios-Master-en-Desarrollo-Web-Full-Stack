/*
1 🔢 Número par o impar

Crear un programa que pida al usuario ingresar un numero y 
mostrar en un mensaje si el valor ingresado es par o impar.
*/

let numero = parseInt(prompt(`Introduce el número que quieras y te digo si es par o impar: `));

if (numero % 2 === 0){
    window.alert(`Es un número par.`);
}else{
    window.alert(`Es un número impar`);
}