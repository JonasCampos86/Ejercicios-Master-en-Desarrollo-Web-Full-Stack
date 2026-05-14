/*
2 Heladería

Crear un programa que pida al usuario ingresar, 
por separado, tres gustos de helado, y luego muestre un mensaje que 
diga, por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche 
y menta granizada".

*/
let primerSabor = prompt(`Dime el primer sabor de helado por favor: `);
let segundoSabor = prompt(`Dime el segundo sabor de helado por favor: `);
let tercerSabor = prompt(`Dime el tercer sabor de helado por favor: `);

window.alert(`Aquí tienes tu helado de ${primerSabor}, ${segundoSabor} y ${tercerSabor}, que lo disfrute.`);