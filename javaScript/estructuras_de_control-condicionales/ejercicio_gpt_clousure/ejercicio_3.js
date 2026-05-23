/*
🟣 🎯 Objetivo

🔵 Crear un contador privado que:

⚫ incremente
⚫ disminuya

*/


function crearContador(){
    let contador = 0;

    function incrementar(){

        contador++;
        return contador;
    }

    function disminuir(){
        contador--;
        return contador;
    }

    return{
        incrementar,
        disminuir
    }
}

const contador = crearContador();

console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.disminuir());
console.log(contador.incrementar());
