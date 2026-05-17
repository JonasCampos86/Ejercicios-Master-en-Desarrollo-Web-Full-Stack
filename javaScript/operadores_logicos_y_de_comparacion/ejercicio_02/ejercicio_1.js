/*
2 Número dentro de rango

Crear un programa que pida al usuario ingresar un número que 
represente el límite inferior del rango, uno que represente 
el límite mayor, y luego otro cualquiera y mostrar en un mensaje 
si el último número se encuentra dentro del rango ingresado.
*/

let valorMin = parseInt(prompt(`Dime el valor minimo del rango: `));
let valorMax = parseInt(prompt(`Dime el valor maximo del rango: `));
let comprobacion = parseInt(prompt(`Dime un número para comprobar si esta dentro del rango: `));

if (comprobacion>=valorMin && comprobacion<=valorMax){
    window.alert(`El ${comprobacion} está dentro del rango.`)
}else{
    window.alert(`El ${comprobacion} está fuera del rango.`)
}
