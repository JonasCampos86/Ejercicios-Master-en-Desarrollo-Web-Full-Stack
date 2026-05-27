/*
🟣 1️⃣ push()

Añade "pera" al array.

🟢

const frutas = ["manzana"];

Resultado esperado:

🟢

["manzana", "pera"]

*/
const frutas = ["manzana"];
frutas.push("pera");
console.log(frutas);

/*

🟣 2️⃣ pop()

Elimina el último elemento.

🟢

const numeros = [1,2,3];

Resultado esperado:

🟢

[1,2]
*/
const numeros = [1,2,3];
numeros.pop();
console.log(numeros);

/*
🟣 3️⃣ unshift()

Añade "inicio" al principio.

🟢

const palabras = ["medio", "final"];
*/
const palabras = ["medio", "final"];
palabras.unshift("inicio");
console.log(palabras);

/*
🟣 4️⃣ shift()

Elimina el primer elemento.

🟢
const colores = ["rojo", "verde", "azul"];
*/
const colores = ["rojo", "verde", "azul"];
colores.shift();
console.log(colores);

/*
🟣 5️⃣ length

Muestra cuántos elementos tiene el array.

🟢

const animales = ["gato", "perro", "loro"];
*/
const animales = ["gato", "perro", "loro"];
const longitudAnimales = animales.length;
console.log(longitudAnimales);

/*
🟣 6️⃣ splice() eliminar

Elimina "Luis".

🟢

const nombres = ["Ana", "Luis", "Pepe"];
*/
const nombres = ["Ana", "Luis", "Pepe"];
nombres.splice(1,1);
console.log(nombres);

/*
🟣 7️⃣ splice() añadir

Añade "sandía" entre "pera" y "uva".

🟢

const frutas = ["pera", "uva"];
*/
const frutas = ["pera", "uva"];
frutas.splice(1,0,"sandia");
console.log(frutas);

/*
🟣 8️⃣ slice()

Crea un nuevo array con:
⭐⚫ solo los 2 primeros elementos***

🟢

const numeros = [10,20,30,40];
*/
const numeros = [10,20,30,40];
const dosPrimeros = numeros.slice(0,2);
console.log(dosPrimeros);

/*
🟣 9️⃣ concat()

Une estos arrays:

🟢

const a = [1,2];
const b = [3,4];

Resultado esperado:

🟢

[1,2,3,4]
*/
const a = [1,2];
const b = [3,4];
const c = a.concat(b);
console.log(c);

/*
🟣 🔟 join()

Convierte el array en string separado por " - ".

🟢

const palabras = ["hola", "mundo"];

Resultado esperado:

🟢

"hola - mundo"

*/
const palabras = ["hola", "mundo"];
const frase = palabras.join(" - ");
console.log(frase);

/*
🟣 1️⃣1️⃣ indexOf()

Busca la posición de "verde".

🟢

const colores = ["rojo", "verde", "azul"];
*/
const colores = ["rojo", "verde", "azul"];
const position = colores.indexOf("verde");
console.log(position);

/*
🟣 1️⃣2️⃣ includes()

Comprueba si existe "uva".

🟢

const frutas = ["pera", "manzana", "uva"];
*/
const frutas = ["pera", "manzana", "uva"];
const comprobacion = frutas.includes("uva");
console.log(comprobacion);

/*
🟣 1️⃣3️⃣ map()

Multiplica todos los números por 3.

🟢

const numeros = [1,2,3];

Resultado esperado:

🟢

[3,6,9]
*/
const numeros = [1,2,3];
const triples = numeros.map(n=>n*3);
console.log (triples);

/*
🟣 1️⃣4️⃣ filter()

Quédate solo con números mayores que 5.

🟢

const numeros = [2,8,3,10,1];
*/
const numeros = [2,8,3,10,1];
const mayoresDeCinco = numeros.filter(n => n > 5);
console.log(mayoresDeCinco);

/*
🟣 1️⃣5️⃣ forEach()

Imprime todos los nombres por consola.

🟢

const nombres = ["Ana", "Luis", "Pepe"];
*/
const nombres = ["Ana", "Luis", "Pepe"];
nombres.forEach(n=>{
    console.log(n)
});

/*
🟣 1️⃣6️⃣ some()

Comprueba si existe algún número negativo.

🟢

const numeros = [4,8,-2,10];
*/
const numeros = [4,8,-2,10];
const negativo = numeros.some( n => n<0);
console.log(negativo);

/*
🟣 1️⃣7️⃣ every()

Comprueba si TODOS son mayores que 0.

🟢

const numeros = [1,2,3,4];
*/
const numeros = [1,2,3,4];
const mayoresCero = numeros.every(n => n>0);
console.log (mayoresCero);

/*
🟣 1️⃣8️⃣ find()

Encuentra el primer número mayor que 10.

🟢

const numeros = [3,7,15,20];
*/
const numeros = [3,7,15,20];
const numeroMayorDiez = numeros.find(n=> n>10);
console.log(numeroMayorDiez);

/*
🟣 1️⃣9️⃣ reduce()

Suma todos los números.

🟢

const numeros = [1,2,3,4];

Resultado esperado:

🟢

10
*/
const numeros = [1,2,3,4];
const reduccion = numeros.reduce((a,b)=>{
return  a+b;
} ,0);

/*
🟣 2️⃣0️⃣ Encadenamiento

🔵 Usa:
⚫ filter()
⚫ map()

Para:
⭐⚫ quedarte solo con mayores de edad y obtener sus nombres***
🟢
const usuarios = [
   {nombre:"Ana", edad:15},
   {nombre:"Luis", edad:22},
   {nombre:"Pepe", edad:30}
];
Resultado esperado:
🟢
["Luis", "Pepe"]
*/
const usuarios = [
   {nombre:"Ana", edad:15},
   {nombre:"Luis", edad:22},
   {nombre:"Pepe", edad:30}
];

const mayoresEdad = usuarios
    .filter(n =>n.edad >=18)
    .map(n=> n.nombre);

console.log(mayoresEdad);    