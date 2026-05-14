/*
6 Meses por día

Crear variables que contengan arrays de strings con los nombres 
de meses, un array para meses de 31 días, uno para de 30, y otro 
para 29. Completar cada array con los nombres correspondientes. 
Mostrarlos en un mensaje indicando cuál es cuál, 
p.ej: "Meses con 31 días: Enero, Marzo, Mayo...".
*/

const months_31 = [`Enero`,`Marzo`,`Mayo`,`Julio`,`Agosto`,`Octubre`,`Diciembre`];
const months_30 = [`Abril`,`Junio`,`Septiembre`,`Noviembre`];
const months_29 = [`Febrero`];

window.alert(`Meses con 31 días: ${months_31}.
    Meses con 30 días: ${months_30}.
    Meses con 28/29 días: ${months_29}.`);