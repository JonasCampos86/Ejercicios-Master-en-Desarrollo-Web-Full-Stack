/*
🟣 🎯 Objetivo

🔵 Crear una “cuenta bancaria” privada usando closures.



*/

function crearCuenta(){

    let dinero = 100;

    function verDinero(){

        return dinero;
        
    }

    function ingresarDinero(cantidad=0){

        dinero += cantidad;
        
        return dinero;
    }
    return{verDinero, ingresarDinero }

}


const cuenta = crearCuenta();

console.log(cuenta.verDinero());
cuenta.ingresarDinero(50);
console.log(cuenta.verDinero());