/*
18 Incremento

Crear un programa que pida ingresar una número de partida y una cantidad 
a ir incrementando y mostrar cinco mensajes seguidos que muestren el número 
del mensaje y el total incrementado hasta el momento 
(p. ej.: empezando con 5 e incrementando 5, "Incremento 1)
 Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.).
*/

let inicial = parseInt(prompt(`Dime el número inicial: `))
let incremento = parseInt(prompt(`Dime el incremento que deseas hacer:`))

let resul1 = inicial + incremento;
let resul2 = resul1+ incremento;
let resul3 = resul2 + incremento;
let resul4 = resul3+ incremento;
let resul5 = resul4 + incremento;
let resul6 = resul5+ incremento;

window.alert(`Empezando en ${inicial} e incrementando ${incremento} 6 veces sale esto:
    Incremento 1 = ${resul1}.
    Incremento 2 = ${resul2}.
    Incremento 3 = ${resul3}.
    Incremento 4 = ${resul4}.
    Incremento 5 = ${resul5}.
    Incremento 6 = ${resul6}.`)


