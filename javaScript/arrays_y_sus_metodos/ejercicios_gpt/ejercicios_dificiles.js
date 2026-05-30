/*
🟣 1️⃣ Usuarios activos

Obtén solo los nombres de usuarios activos.

🟢

const usuarios = [
   {nombre:"Ana", activo:true},
   {nombre:"Luis", activo:false},
   {nombre:"Pepe", activo:true}
];

Resultado esperado:

🟢

["Ana", "Pepe"]
*/
const usuarios = [
   {nombre:"Ana", activo:true},
   {nombre:"Luis", activo:false},
   {nombre:"Pepe", activo:true}
];

const activos = usuarios.filter(a=> a.activo===true)
                        .map(a=>a.nombre);
console.log(activos);

/*
🟣 2️⃣ Precio total carrito

Calcula el total del carrito.

🟢

const carrito = [
   {producto:"teclado", precio:50},
   {producto:"raton", precio:20},
   {producto:"monitor", precio:200}
];

Resultado esperado:

🟢

270
*/
const carrito = [
   {producto:"teclado", precio:50},
   {producto:"raton", precio:20},
   {producto:"monitor", precio:200}
];
const precioTotal = carrito.map(a=>a.precio)
                           .reduce((a,b)=>{
    return a+b;
},0);
console.log(precioTotal);

/*
🟣 3️⃣ Buscar producto caro

Encuentra el primer producto con precio mayor de 100.

🟢

const productos = [
   {nombre:"cable", precio:10},
   {nombre:"teclado", precio:80},
   {nombre:"monitor", precio:200}
];
*/
const productos = [
   {nombre:"cable", precio:10},
   {nombre:"teclado", precio:80},
   {nombre:"monitor", precio:200}
];
const masCaroDeCien = productos.find(a=> a.precio >=100);
console.log(masCaroDeCien);

/*
🟣 4️⃣ Ordenar strings

Ordena alfabéticamente.

🟢

const nombres = ["Luis", "Ana", "Pepe", "Carlos"];
*/
const nombres = ["Luis", "Ana", "Pepe", "Carlos"];
const ordenados = nombres.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(ordenados);

/*
🟣 5️⃣ some() avanzado

Comprueba si existe algún número múltiplo de 7.

🟢

const numeros = [10,14,22,31];
*/
const numeros = [10,14,22,31];
const comprobacion= numeros.some(a=> a%7===0);
console.log(comprobacion);

/*
🟣 6️⃣ every() avanzado

Comprueba si todos los usuarios tienen email.

🟢

const usuarios = [
   {nombre:"Ana", email:"ana@mail.com"},
   {nombre:"Luis", email:""},
   {nombre:"Pepe", email:"pepe@mail.com"}
];
*/
const usuarios = [
   {nombre:"Ana", email:"ana@mail.com"},
   {nombre:"Luis", email:""},
   {nombre:"Pepe", email:"pepe@mail.com"}
];
const compEmail = usuarios.every(a => a.email.includes("@mail"));
console.log(compEmail);


/*
🟣 7️⃣ filter + sort

Quédate solo con números mayores de 10 y ordénalos.

🟢

const numeros = [4,20,15,2,30,8];

Resultado esperado:

🟢

[15,20,30]
*/
const numeros = [4,20,15,2,30,8];
const mayorerDeDiez= numeros.filter(a=> a>10)
                            .sort((a,b)=>a-b);

console.log(mayorerDeDiez);

/*
🟣 8️⃣ map() strings

Convierte todas las palabras a mayúsculas.

🟢

const palabras = ["hola", "adios", "javascript"];
*/
const palabras = ["hola", "adios", "javascript"];
const enMayusculas= palabras.map(a=> a.toUpperCase());
console.log(enMayusculas);

/*

🟣 9️⃣ reduce() multiplicación

Multiplica todos los números.

🟢

const numeros = [2,3,4];

Resultado esperado:

🟢

24
*/
const numeros = [2,3,4];
const multiplicados= numeros.reduce((a,b)=>{
    return a*b;
},1);
console.log(multiplicados);

/*

🟣 🔟 Contar aprobados

Cuenta cuántas notas son >= 5.

🟢

const notas = [3,7,5,2,9,4];

Resultado esperado:

🟢

3
*/
const notas = [3,7,5,2,9,4];
const superiores = notas.filter(a=> a>=5).length;

console.log(superiores);


/*
🟣 1️⃣1️⃣ find() con strings

Encuentra la primera palabra con más de 5 letras.

🟢

const palabras = ["sol", "javascript", "mesa", "ordenador"];

*/
const palabras = ["sol", "javascript", "mesa", "ordenador"];
const palabraConMasDeCinco= palabras.find(a=> a.length>5);
console.log(palabraConMasDeCinco);




/*
🟣 1️⃣2️⃣ sort() objetos descendente

Ordena usuarios de mayor a menor edad.

🟢

const usuarios = [
   {nombre:"Ana", edad:20},
   {nombre:"Luis", edad:40},
   {nombre:"Pepe", edad:30}
];
*/
const usuarios = [
   {nombre:"Ana", edad:20},
   {nombre:"Luis", edad:40},
   {nombre:"Pepe", edad:30}
];
const deMayorAMenor = usuarios.sort((a , b) => b.edad - a.edad);
console.log(deMayorAMenor);

/*
🟣 1️⃣3️⃣ Encadenamiento

Obtén nombres de usuarios mayores de 18 ordenados alfabéticamente.

🟢

const usuarios = [
   {nombre:"Carlos", edad:15},
   {nombre:"Luis", edad:22},
   {nombre:"Ana", edad:30},
   {nombre:"Pepe", edad:17}
];

Resultado esperado:

🟢

["Ana", "Luis"]
*/
const usuarios = [
   {nombre:"Carlos", edad:15},
   {nombre:"Luis", edad:22},
   {nombre:"Ana", edad:30},
   {nombre:"Pepe", edad:17}
];
const mayoresEdad = usuarios.filter(a=> a.edad>=18)
                            .sort((a,b)=> a.nombre.localeCompare(b.nombre))
                            .map(a=>a.nombre);
console.log(mayoresEdad);


/*
🟣 1️⃣4️⃣ reduce() string gigante 😄

Une todas las palabras en una frase.

🟢

const palabras = ["Hola", "me", "gusta", "JavaScript"];

Resultado esperado:

🟢

"Hola me gusta JavaScript"
*/
const palabras = ["Hola", "me", "gusta", "JavaScript"];
const palabraGigante = palabras.reduce((a,b)=>{
    return  a+" "+ b ;
},);
console.log(palabraGigante);


/*
🟣 1️⃣5️⃣ filter() objetos

Quédate con productos baratos (<50).

🟢

const productos = [
   {nombre:"monitor", precio:300},
   {nombre:"raton", precio:20},
   {nombre:"teclado", precio:40}
];
*/
const productos = [
   {nombre:"monitor", precio:300},
   {nombre:"raton", precio:20},
   {nombre:"teclado", precio:40}
];
const baratos = productos.filter(a=> a.precio<50).map(a=>a.nombre);
console.log(baratos);

/*
🟣 1️⃣6️⃣ map() objetos

Obtén array de strings así:

🟢

"Ana tiene 20 años"

Usando:

🟢

const usuarios = [
   {nombre:"Ana", edad:20},
   {nombre:"Luis", edad:30}
];
*/
const usuarios = [
   {nombre:"Ana", edad:20},
   {nombre:"Luis", edad:30}
];
const frase = usuarios.map(a=>{
    return `${a.nombre} tiene ${a.edad} años`
});
console.log(frase);

/*
🟣 1️⃣7️⃣ Spread + objetos

Crea copia cambiando solo la edad.

🟢

const usuario = {
   nombre:"Jonás",
   edad:40,
   admin:false
};

Resultado esperado:

🟢

{
   nombre:"Jonás",
   edad:41,
   admin:false
}
*/
const usuario = {
   nombre:"Jonás",
   edad:40,
   admin:false
};
const copiaMod = {...usuario,edad:41};
console.log(copiaMod);


/*

🟣 1️⃣8️⃣ reduce() máximo

Obtén el número más grande.

🟢

const numeros = [5,80,12,150,3];

Resultado esperado:

🟢

150
*/
const numeros = [5,80,12,150,3];
const masAlto = numeros.reduce((a,b)=>{
    if (a > b){
        return a
    }else{
        return b
    }
    
},0)
console.log(masAlto);

/*
🟣 1️⃣9️⃣ Encadenamiento más serio 😄

Obtén:
⚫ usuarios mayores de edad
⚫ ordenados por edad descendente
⚫ solo nombres
⚫ en MAYÚSCULAS

🟢

const usuarios = [
   {nombre:"Ana", edad:15},
   {nombre:"Luis", edad:22},
   {nombre:"Pepe", edad:30},
   {nombre:"Carlos", edad:19}
];

Resultado esperado:

🟢

["PEPE", "LUIS", "CARLOS"]
*/
const usuarios = [
   {nombre:"Ana", edad:15},
   {nombre:"Luis", edad:22},
   {nombre:"Pepe", edad:30},
   {nombre:"Carlos", edad:19}
];
const ordenadosEnMayusculas = usuarios.filter(a=> a.edad >=18)
                                      .sort((a,b)=>b.edad - a.edad)
                                      .map(a=>a.nombre.toUpperCase());

console.log(ordenadosEnMayusculas);
/*

🟣 2️⃣0️⃣ El más difícil 😄

Calcula la media SOLO de números aprobados.

⭐⚫ Aprobado = >=5

🟢

const notas = [2,8,10,4,6];

Resultado esperado:

🟢

8

🔵 Porque:
⚫ aprobados → [8,10,6]
⚫ suma → 24
⚫ cantidad → 3
⚫ media → 8
*/
const notas = [2,8,10,4,6];
const aprobados = notas.filter(a=> a>=5);
const cantidad =aprobados.length;
const sumaDeNotas = aprobados.reduce((a,b)=>{
    return a+b;
},0);
const notaMedia = (sumaDeNotas/cantidad);
console.log(notaMedia);


                            
