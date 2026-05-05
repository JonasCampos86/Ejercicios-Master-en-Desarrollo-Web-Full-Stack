/*
 Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), 
 calcule el índice de masa corporal y lo almacene en una variable, 
 y muestre por pantalla la frase Tu índice de masa corporal es <imc> donde <imc> 
 es el índice de masa corporal calculado redondeado con dos decimales.
 */

 const peso = prompt("Dime tu peso por favor: ");
 const altura = prompt("Dime tu altura en metros, ejemplo 1.70 ");
 const imc = peso / altura**2 ;
 const imcRedondeado =Math.round(imc*100)/100;
 

 console.log("Tu <IMC> es de: "+ imcRedondeado+" .");