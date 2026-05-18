/*
2 📆 Días del mes

Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.

*/

let mesUsuario = prompt(`Dime un mes y te digo cuantos días tiene: `).trim().toLowerCase();

if( mesUsuario === `enero` || 
    mesUsuario === `marzo` ||
    mesUsuario === `mayo`  ||
    mesUsuario === `julio` ||
    mesUsuario === `agosto` ||
    mesUsuario === `octubre` ||
    mesUsuario === `diciembre`){
        window.alert(`${mesUsuario} tiene 31 días.`);
    }else if(
        mesUsuario === `abril` ||
        mesUsuario === `junio` ||
        mesUsuario === `septiembre` ||
        mesUsuario === `noviembre`){
            window.alert(`${mesUsuario} tiene 30 días.`);
    }else if (
        mesUsuario === `febrero`){
            window.alert(`${mesUsuario} tiene 28 o 29 días dependiendo de si es año bisiesto o no.`);

    }else{
        window.alert(`Esto ${mesUsuario} no es ningun mes de año.`);
    }
    