/*
23 Días de vacaciones

Crear un programa que pida al usuario ingresar cuántos años 
lleva trabajando en una empresa, y le devuelva la cantidad de 
días de vacaciones al año que le corresponden, siendo 15 días 
hasta 3 años y 2 días más por cada año extra 
(p. ej.: a 6 años corresponden 21 días).


*/

let antiguedad = parseInt(prompt(`Cuantos años llevas trabajando en la misma empresa: `));

if (antiguedad<=3){
    window.alert(`Te coresponden 15 días de vacaciones.`)
} else{
    let extraYears = antiguedad-3;
    let vacaciones = (extraYears*2)+15;
    window.alert(`Te coresponden ${vacaciones} días al año.`)
};                                                                                                                     