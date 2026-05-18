/**
5 Grupo de letras

Crear un programa que pida al usuario ingresar una letra y 
mostrar en un mensaje a qué grupo pertenece.

grupo A = {a, e, i, o ,u}
grupo B = {b, c, d, f, g}
grupo C = {h, j, k , l, m}
grupo D = {n, p, q, r}
grupo E = {s, t, v, w, x, y, z} 

*/

let letrita = prompt(`Escribe una letra y te digo en que grupo esta:`).toLowerCase().trim();

if( letrita === `a`||
    letrita === `e`||
    letrita === `i`||
    letrita === `o`||
    letrita === `u`){
        window.alert(`Esta en el grupo A`);
}else if (
    letrita ===`b`|| 
    letrita ===`c`||
    letrita ===`d`||
    letrita ===`f`||
    letrita ===`g`){
        window.alert(`Esta en el grupo B`);
}else if (
    letrita ===`h`|| 
    letrita ===`j`||
    letrita ===`k`||
    letrita ===`l`||
    letrita ===`m`){
        window.alert(`Esta en el grupo C`); 
}else if (
    letrita ===`n`|| 
    letrita ===`p`||
    letrita ===`q`||
    letrita ===`r`){
        window.alert(`Esta en el grupo D`);
}else{
        window.alert(`Esta en el grupo E`);

}    