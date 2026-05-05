/*
Escribir un programa que pida al usuario dos números enteros 
y muestre por pantalla: La división resultande de dividir <n> entre <m> 
da un cociente <c> y un resto <r> donde <n> y <m> son los números 
introducidos por el usuario, y <c> y <r> son el cociente y el resto de la 
división entera respectivamente.
 */

const n= prompt("Introduce un número: ");
const m=prompt("Introduce otro número: ");
const c= n/m;
const r= n%m;

console.log("El resultado de la división es: "+c)
console.log("Y el resto es: "+r);
