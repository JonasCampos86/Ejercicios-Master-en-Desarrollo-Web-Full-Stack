/*
7 Miembros de la familia

Crear una variable que contengan un array de strings 
con los nombres de integrantes de la familia y completarlo 
con todos o algunos nombres. Mostrarlos en un mensaje que los liste.
*/
let family = [`Miguel`,`MariCruz`,`Jonás`];

let sister = prompt(`¿Como se llama tu hermana? `);

family.push(sister);

window.alert(`Los miembros de la familia son: ${family}.`)