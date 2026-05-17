/*
7 Cátedra promocionada

Hacer un programa que pida ingresar los valores de los 
tres parciales de la cátedra mostrar un mensaje indicando 
si promociona o no la cátedra. La misma se promociona si al  
menos dos de ellos fueron aprobados con una nota de 8 o más.
*/

let cat1 = parseFloat(prompt(`Ingrese la nota de la primera asignatura: `));
let cat2 = parseFloat(prompt(`Ingrese al nota de la segunda asignatura: `));
let cat3 = parseFloat(prompt(`Ingrese al nota de la tercera asignatura:`));

if(cat1>=8 && cat2>=8 || cat1>=8 && cat3>=8 || cat3>=8 && cat2>=8){
    window.alert(`Felicidades PROMOCIONASTE`)
}else{
    window.alert(`Lo sentimo pero NO promocionaste`)
}