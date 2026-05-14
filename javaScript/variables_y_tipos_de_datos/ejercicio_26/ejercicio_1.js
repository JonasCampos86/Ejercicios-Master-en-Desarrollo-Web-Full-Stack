/*
26 Orden de compras

Crear un programa que tome la orden de compra de un local. 
Pedir al usuario que ingrese la cantidad que desea comprar de 
tres productos distintos, uno por uno, mostrar el valor total 
de la compra y preguntar en cuántas cuotas desea realizar el pago. 
Mostrar un mensaje final con el detalle y el valor total la compra, 
cantidad de cuotas y valor de cada una de las cuotas. Los precios 
de los productos deben estar definidos de antemano en variables



*/

let tele = 700;
let movil = 250;
let tablet = 300;

let compraTele = parseInt(prompt(`¿Cuantas teles quieres a 700€ cada una? `));
let compraMovil = parseInt(prompt(`¿Cuantos moviles quieres a 250€ casa uno? `));
let compraTablet = parseInt(prompt(`¿Cuantas tablets quieres a 300€ la unidad? `));

let totalTele = tele * compraTele;
let totalMovil = movil * compraMovil;
let totalTablet = tablet * compraTablet;

let precioTotal = totalTele+totalMovil+totalTablet;

let cuotas = parseInt(prompt(`El valor total de la compra es de: ${precioTotal}euros.
    En cuantas cuotas lo quieres pagar: `));

let precioCuota = precioTotal/cuotas;

window.alert(`La cantidad de cuotas es de: ${cuotas}.
    El precio de cada cuota es de: ${precioCuota.toFixed(2)}Euros.
    Que disfrute de sus productos.`);