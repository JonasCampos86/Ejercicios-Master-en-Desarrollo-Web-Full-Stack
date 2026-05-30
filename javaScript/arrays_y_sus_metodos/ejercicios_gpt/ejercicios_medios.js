/*
🟣 1️⃣ map() con objetos

Obtén un array solo con las edades.

🟢

const usuarios = [
   {nombre:"Ana", edad:20},
   {nombre:"Luis", edad:30},
   {nombre:"Pepe", edad:40}
];

Resultado esperado:

🟢

[20,30,40]
*/
const usuarios = [
   {nombre:"Ana", edad:20},
   {nombre:"Luis", edad:30},
   {nombre:"Pepe", edad:40}
];

const edades = usuarios.map(u => u.edad);
console.log(edades);

/*
🟣 2️⃣ filter() con objetos

Filtra usuarios menores de 18.

🟢

const usuarios = [
   {nombre:"Ana", edad:15},
   {nombre:"Luis", edad:22},
   {nombre:"Pepe", edad:12}
];
*/
const usuarios = [
   {nombre:"Ana", edad:15},
   {nombre:"Luis", edad:22},
   {nombre:"Pepe", edad:12}
];
const usuariosMayoresEdad = usuarios.filter(u => u.edad <18);
console.log (usuariosMayoresEdad);


/*
🟣 3️⃣ reduce()

Calcula el total.

🟢

const precios = [10, 20, 15, 5];

Resultado esperado:

🟢

50
*/
const precios = [10, 20, 15, 5];
const total = precios.reduce((a,b)=>{
    return a+b;
},0);
console.log (total);


/*

🟣 4️⃣ some()

Comprueba si algún usuario es administrador.

🟢

const usuarios = [
   {nombre:"Ana", admin:false},
   {nombre:"Luis", admin:true},
   {nombre:"Pepe", admin:false}
];
*/
const usuarios = [
   {nombre:"Ana", admin:false},
   {nombre:"Luis", admin:true},
   {nombre:"Pepe", admin:false}
];
const administrador = usuarios.some(u=> u.admin===true);
console.log(administrador);

/*
🟣 5️⃣ every()

Comprueba si TODOS aprobaron.

🟢

const notas = [7,8,5,9];

⭐⚫ Aprobado = nota >= 5
*/
const notas = [7,8,5,9];
const aprobaron = notas.every(n=> n >=5);
console.log(aprobaron);


/*
🟣 6️⃣ find()

Encuentra el primer usuario mayor de 25.

🟢

const usuarios = [
   {nombre:"Ana", edad:20},
   {nombre:"Luis", edad:30},
   {nombre:"Pepe", edad:40}
];
*/
const usuarios = [
   {nombre:"Ana", edad:20},
   {nombre:"Luis", edad:30},
   {nombre:"Pepe", edad:40}
];
const mayoresEdad = usuarios.find(u=> u.edad>=25);
console.log(mayoresEdad);

/*
🟣 7️⃣ sort() números

Ordena de menor a mayor.

🟢

const numeros = [8,2,15,1,9];
*/
const numeros = [8,2,15,1,9];
const ordenacion = numeros.sort((a,b)=> a-b);
console.log(ordenacion);



/*
🟣 8️⃣ sort() descendente

Ordena de mayor a menor.

🟢

const numeros = [8,2,15,1,9];

*/
const numeros = [8,2,15,1,9];
const ordenacion = numeros.sort((a,b)=> b-a);
console.log(ordenacion);



/*

🟣 9️⃣ sort() objetos

Ordena usuarios por edad.

🟢

const usuarios = [
   {nombre:"Ana", edad:40},
   {nombre:"Luis", edad:20},
   {nombre:"Pepe", edad:30}
];
*/
const usuarios = [
   {nombre:"Ana", edad:40},
   {nombre:"Luis", edad:20},
   {nombre:"Pepe", edad:30}
];
const ordenEdad= usuarios.sort((a,b)=> a.edad -b.edad);
console.log(ordenEdad);

/*
🟣 🔟 Encadenamiento simple

Quédate con:
⭐⚫ números pares multiplicados por 2***

🟢

const numeros = [1,2,3,4,5,6];

Resultado esperado:

🟢

[4,8,12]

*/
const numeros = [1,2,3,4,5,6];
const paresPorDos = numeros
.filter(n=> n%2 === 0)
.map(n=> n*2);

console.log(paresPorDos);

/*
🟣 1️⃣1️⃣ spread operator arrays

Copia el array sin modificar el original.

🟢

const numeros = [1,2,3];

*/
const numeros = [1,2,3];
const copia = [...numeros];
console.log(copia);


/*
🟣 1️⃣2️⃣ spread operator objetos

Crea copia añadiendo:
⭐⚫ admin: true***

🟢

const usuario = {
   nombre:"Jonás",
   edad:40
};
*/
const usuario = {
   nombre:"Jonás",
   edad:40
};
const copia ={...usuario, admin:true};
console.log(copia);


/*
🟣 1️⃣3️⃣ replaceAll()

Reemplaza todas las "a" por "X".

🟢

const texto = "banana";

Resultado esperado:

🟢

"bXnXnX"
*/
const texto = "banana";
const remplazo = texto.replaceAll("a","X");
console.log(remplazo);

/*
🟣 1️⃣4️⃣ reduce() promedio

Calcula la media.

🟢

const notas = [5,8,10,7];

Resultado esperado:

🟢

7.5

*/
const notas = [5,8,10,7];
const cantidad = notas.length;
const suma = notas.reduce((a,b)=>{
    return a+b;
},0);
const media = (suma/cantidad);
console.log(media);

/*
🟣 1️⃣5️⃣ filter() + map()

Obtén nombres de usuarios mayores de 18.

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
const usuariosMayoresEdad = usuarios.filter(a => a.edad >=18).map(a => a.nombre);
console.log(usuariosMayoresEdad);
/*
🟣 1️⃣6️⃣ concat() + sort()

Une y ordena.


const a = [8,2];
const b = [1,5];

Resultado esperado:



[1,2,5,8]
*/
const a = [8,2];
const b = [1,5];

const c = a.concat(b);

c.sort((a,b)=> a-b);
console.log(c);




/*
🟣 1️⃣7️⃣ splice() reemplazar

Reemplaza "verde" por "azul".



const colores = ["rojo", "verde", "amarillo"];
*/
const colores = ["rojo", "verde", "amarillo"];
const sustitucion = colores.splice(1,1,"azul");
console.log(colores);
/*
🟣 1️⃣8️⃣ Vaciar array

Vacía completamente el array.

const datos = [1,2,3,4];

⭐⚫ Usa splice o length

*/
const datos = [1,2,3,4];
datos.splice(0);
console.log(datos);

/*

🟣 1️⃣9️⃣ reduce() contador

Cuenta cuántos números hay.

const numeros = [5,8,2,9,1];

Resultado esperado:
5
⭐⚫ Usa reduce aunque parezca innecesario 😄
*/
const numeros = [5,8,2,9,1];
const cantidad = numeros.reduce((a,b)=>{
   return a +=1;
},0);
console.log(cantidad);

/*
🟣 2️⃣0️⃣ Encadenamiento más completo

🔵 Haz esto:
⚫ mayores de edad
⚫ ordenados por edad
⚫ obtener solo nombres


const usuarios = [
   {nombre:"Ana", edad:15},
   {nombre:"Luis", edad:22},
   {nombre:"Pepe", edad:30},
   {nombre:"Carlos", edad:19}
];

Resultado esperado:
["Carlos", "Luis", "Pepe"]
*/
const usuarios = [
   {nombre:"Ana", edad:15},
   {nombre:"Luis", edad:22},
   {nombre:"Pepe", edad:30},
   {nombre:"Carlos", edad:19}
];

const orenenadosPorEdad = usuarios.filter( a => a.edad>=18)
                                  .sort((a,b)=> a.edad-b.edad)
                                  .map(a=> a.nombre);

console.log(orenenadosPorEdad);
