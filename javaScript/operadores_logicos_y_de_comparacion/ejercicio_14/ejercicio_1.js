/*
Calificación

Crear un programa que permita ingresar el resultado de una evaluación con un puntaje del 1 al 10, 
y muestre un mensaje que diga:

¡Excelente!, si la nota es 10

¡Muy bien!, si la nota es 8 o 9

Aprobado, si la nota es 6 o 7

Reprobado, si la nota es menor a 6
*/

let nota = parseFloat(prompt(`Dime que nota has sacado en el examen`));

switch(true){
    case nota === 10:
        window.alert(`¡Excelente!`);
        break;
    case nota >=8:
        window.alert(`¡Muy bien!`);
        break;
    case nota >=6:
        window.alert(`Aprobado`);
        break;
    default:
        window.alert(`Suspenso`);
    break;
}