/*
🟣 1️⃣ Función flecha básica
 Crea una arrow function llamada saludar que devuelva:
"Hola"
*/

const saludar= () => "hola";


/*
2️⃣ Multiplicar

Crea una arrow function que reciba 2 números y devuelva la multiplicación.

Ejemplo:

multiplicar(2, 5)

Resultado:

10

*/

const multiplicar = (a, b) => a*b;


/*
3️⃣ Número par

Crea una arrow function que devuelva true si un número es par.

Pista:
%
*/

const esPar = (n)=>{if (n % 2 === 0) {return true}};

/*
4 Return implícito
Reescribe esta función usando return implícito:

function doble(n) {
   return n * 2;
}

*/
const doble = (n)=>  n * 2;

/*
5️⃣ Un parámetro

Haz una arrow function que reciba un nombre y devuelva:

"Hola Jonás"

*/

const saludo =(nombre=`Jonas`)=>`Hola ${nombre}`;

/*
6️⃣ Array con map()

Usa map() y arrow function para duplicar este array:
[1,2,3,4]

Resultado esperado:
[2,4,6,8]

*/

const numeros =[1,2,3,4];

const dobles = numeros.map(n => n*2);

/*
7️⃣ filter()

Usa filter() para quedarte solo con números mayores que 5.

[2,7,1,9,3]

Resultado:
[7,9]
*/

const numeros = [2,7,1,9,3];

const mayoresDeCinco = numeros.filter(n=> n>5);









/*
8️⃣ forEach()

Usa forEach() y arrow function para imprimir:
"Ana"
"Luis"
"Pepe"

*/

const nombres =[`Ana`, `Luis`,`Pepe`];

nombres.forEach(n=>{
    console.log(n);
});




/*
9️⃣ Objeto sencillo

Crea un objeto persona con:

nombre
edad
método mostrarNombre
Usa función normal para el método.
*/

const usuario ={
    nombre:`Jonás`,
    edad: 40,

    mostrarNombre(){
        console.log(this.nombre);
    }

}


    

/*
🔟 Error con this
Convierte el método anterior a arrow function.

¿Qué ocurre con this?

Este ejercicio es MUY importante
*/
const usuario ={
    nombre:`Jonás`,
    edad: 40,
    laQueHaceExterna(){
        return ()=>{
        console.log(this.nombre);
    }
    }
    
    
}







/*
1️⃣1️⃣ Closure + arrow function
Completa:


function crearSumador(x) {

   return ????

}
 Debe funcionar así:


const sumar5 = crearSumador(5);

console.log(sumar5(10));

Resultado:

15
*/
function crearSumador(x) {
   let resultado = 0;

    const sumar = (b) => {
        resultado = x+b;
        return resultado;
    };
   return sumar
   

};
 //Debe funcionar así:


const sumar5 = crearSumador(5);

console.log(sumar5(10));

Resultado:

15





/*
1️⃣2️⃣ Arrow function con objeto

Usa map() para obtener solo los nombres:


const usuarios = [
   {nombre:"Ana"},
   {nombre:"Luis"},
   {nombre:"Pepe"}
];

Resultado:

["Ana", "Luis", "Pepe"]

*/

const usuarios = [
   {nombre:"Ana"},
   {nombre:"Luis"},
   {nombre:"Pepe"}
];

const nombres = usuarios.map( usuario => usuario.nombre);








/*
1️⃣3️⃣ filter() con objetos

Filtra usuarios mayores de 18.



const usuarios = [
   {nombre:"Ana", edad:15},
   {nombre:"Luis", edad:22},
   {nombre:"Pepe", edad:30}
];
*/

const usuarios = [
   {nombre:"Ana", edad:15},
   {nombre:"Luis", edad:22},
   {nombre:"Pepe", edad:30}
];
const mayoresDeEdad = usuarios.filter(usuario => usuario.edad>18);

console.log(edad)


/*
1️⃣4️⃣ Arrow function y ternario

Haz una arrow function que devuelva:

"Aprobado" si nota >= 5
"Suspenso" si nota < 5

Usa operador ternario

*/
const notaExamen=(x)=> x >= 5 ? `Aprobado`:`Suspenso`



/*
1️⃣5️⃣ Nivel más difícil 

Crea una función:
crearContador()
Que devuelva:
incrementar
disminuir
Ambas deben ser arrow functions.
Debe funcionar así:
const contador = crearContador();
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.disminuir());

Resultado:

1
2
1

*/

const crearContador=()=>{
    let contador=0;

    const incrementar =()=>++contador;
    const disminuir =()=> --contador;

    return{
        incrementar,
        disminuir
    };
};

const contador = crearContador();
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.disminuir());
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.disminuir());
console.log(contador.disminuir());