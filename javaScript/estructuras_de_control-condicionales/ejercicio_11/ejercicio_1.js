/*
Condicional swich

11 🧮 Calculadora

Crear un programa que permita elegir entre las operaciones: SUMA, RESTA, DIVISION y MULTIPLICACION, 
y luego de elegida, ingresar dos números y hacer dicha operación con ella.

*/

let operacion ;

do{
    operacion= prompt(`Elige que operación quieres realizar: suma, resta, multiplicación o división. `).toLowerCase().trim();

    if( operacion!==`suma` &&
        operacion!==`resta` &&
        operacion!==`multiplicacion` &&
        operacion!==`division` 
    ){
        window.alert(`Elige correctamente.`);
        operacion=`error`;
    }

}while(operacion ===`error`);

let numero1;
    do{
    numero1=parseFloat(prompt(`Escribe el primer número: `));
    if (isNaN(numero1)){
        window.alert(`Esto no es un número, por favor ingrese un número`);
    }

    }while(isNaN(numero1))

    let numero2;
    do{
    numero2=parseFloat(prompt(`Escribe el segundo número: `));
    if (isNaN(numero2)){
        window.alert(`Esto no es un número, por favor ingrese un número`);
    }

    }while(isNaN(numero2))

window.alert(`Vamos a realizar la operación de ${operacion} de estos dos números ${numero1} y ${numero2}.`)   

let resultado;

switch(operacion){
    case `suma`:
    resultado = numero1+numero2;
    window.alert(`El resultado de la suma es de: ${resultado}`);
    break;
    
    case `resta`:
        resultado = numero1-numero2;
        window.alert(`El resultado de resta es de: ${resultado}`);
        break;

    case `multiplicacion`:
   
        resultado = numero1*numero2;
        window.alert(`El resultado de la multiplicación es de: ${resultado}`);
        break;
        
    case `division`:
        do{
            if (numero2 ===0){
                window.alert(`El 0 no se puede dividir, por favor introduzca un número distinto a 0. `);
                numero2=parseFloat(prompt(`Escriba otro número que sea distinto a 0:`));
            }else if(isNaN(numero2)){
                window.alert(`Escribe un número por favor.`);
                numero2=parseFloat(prompt(`Escriba un número distinto a 0 y no pongas ninguna letra.....`));
            }
        }while(isNaN(numero2)|| numero2 ===0);
    resultado = numero1/numero2;
    window.alert(`El resultado de la división es de: ${resultado}`);
    break;
}
