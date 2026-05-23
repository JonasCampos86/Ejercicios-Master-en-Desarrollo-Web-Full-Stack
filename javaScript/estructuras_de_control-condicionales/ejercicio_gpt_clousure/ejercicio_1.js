// crear un funcion clousure.

function crearContador(){
    let contador = 0;
    
    return function(){
        contador++;
        return contador
    };
}

const contar = crearContador();

console.log(contar());
console.log(contar());
console.log(contar());