/* Ejercicio 1

Crea un nuevo array donde cada elemento del array original se duplique

*/
const array1 =[1,4,7,9,1.4,56,99.99];

let dobles= array1.map(a => a*2);
console.log(dobles);

/* Ejercicio 2

Calcula la suma de todos los elementos en el array creado en el ejercicio 1 e imprímelo.

*/
let suma = array1.reduce((acu, b)=>{
    return acu+b;
},0);

console.log(suma);

/* Ejercicio 3

Crea un nuevo array que contenga solo los números pares del array original.

*/
let pares = array1.filter(a => a%2 ===0);
console.log(pares);


/* Ejercicio 4

Pide al usuario que ingrese un número y verifica si está presente en el array.

*/
let peticion = parseFloat(prompt(`Introduce un número y comprobamos si esta en el array: `));

const comprobacion = array1.includes(peticion);
console.log(comprobacion);





//6-Ordena el array de números en orden descendente y imprímelo.
let ordenacion = array1.sort((a,b)=> a-b);
console.log(ordenacion);


//7- Dado dos arrays de números, array1 y array2, crea una función que devuelva un nuevo array que
//contenga los elementos que son múltiplos de 3 y no sean múltiplos de 5. Además, 
// asegúrate de que el nuevo array no contenga duplicados.

const array3 = [2, 3, 5, 9, 12, 15];
const array2 = [4, 6, 9, 12, 18, 20];

function unionDeArrays (array3,array2){
    const arrayMezclado=[];
    let primerFiltro = array2.filter(a=>a%3===0 && a%5!==0);
    let segundoFiltro = array3.filter(a=>a%3===0 && a%5!==0);
    arrayMezclado.push(segundoFiltro);
    
    

    primerFiltro.forEach(a=>{
        if (arrayMezclado.includes(a)===false){
            arrayMezclado.push(a)
        }
    })
                 
    return arrayMezclado;
    
    
}
console.log(unionDeArrays(array3,array2));


//8-// Ejercicio: Filtrar y transformar datos en un array

// Dado un array de objetos que representan libros,
// cada objeto tiene propiedades como título, autor y año de publicación.
// Filtra los libros que fueron publicados después de 2000
// y crea un nuevo array con los títulos de esos libros en mayúsculas.

const libros = [
     { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', año: 1954 },
     { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', año: 1997 },
     { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', año: 1967 },
     { titulo: 'El código Da Vinci', autor: 'Dan Brown', año: 2003 },
     { titulo: '1984', autor: 'George Orwell', año: 1949 },
     { titulo: 'El hobbit', autor: 'J.R.R. Tolkien', año: 1937 },
     { titulo: 'Los juegos del hambre', autor: 'Suzanne Collins', año: 2008 },
 ];


//crear array con esos titulos en mayusuculas
const filtradosEnMayusculas= libros.filter(a=> a.año >2000)
                                   .map(a=> a.titulo.toUpperCase());
console.log(filtradosEnMayusculas);


 //9-
const estudiantes = [
     { nombre: 'Ana', edad: 20, calificaciones: [10, 90, 87] },
     { nombre: 'Carlos', edad: 22, calificaciones: [78, 92, 87] },
     { nombre: 'Elena', edad: 19, calificaciones: [75, 88, 91] },
     { nombre: 'Daniel', edad: 18, calificaciones: [82, 79, 90] },
     { nombre: 'Luisa', edad: 21, calificaciones: [88, 85, 89] },
     { nombre: 'Miguel', edad: 17, calificaciones: [76, 84, 80] },
     { nombre: 'Sara', edad: 23, calificaciones: [91, 9, 94] },
];
// //Filtra los estudiantes que tienen una edad mayor o igual a 18 años y 
// guárdalos en un nuevo array llamado estudiantesMayoresDeEdad.
let estudiantesMayoresDeEdad = estudiantes.filter(a=> a.edad>=18);


//Calcula el promedio de calificaciones para cada estudiante en el 
// array estudiantesMayoresDeEdad y almacena los resultados en un nuevo 
// array llamado promediosCalificaciones.
let promediosCalificaciones= estudiantesMayoresDeEdad.map(a=>{
    return{nombre: a.nombre,
           promedio : a.calificaciones.reduce((acu,b)=>{
               return  acu+b;
            },0)/(a.calificaciones.length)
            }
            
});
console.log(promediosCalificaciones);

//Encuentra al estudiante con la calificación más alta en el array promediosCalificaciones 
// y muestra su nombre y calificación máxima en la consola.
let elMejor= promediosCalificaciones.reduce((a,alumno)=>{
    if (alumno.promedio > a.promedio){
        a=alumno
    }
    return a
},promediosCalificaciones[0]);

console.log(elMejor);



//10-
const ventas = [
    { producto: 'Camiseta', cantidad: 10, precioUnitario: 15 },
    { producto: 'Zapatos', cantidad: 5, precioUnitario: 50 },
    { producto: 'Sombrero', cantidad: 8, precioUnitario: 20 },
    { producto: 'Pantalones', cantidad: 12, precioUnitario: 30 },
    { producto: 'Bufanda', cantidad: 15, precioUnitario: 10 },
];
//Filtra las ventas que tienen una cantidad mayor a 8 unidades y guárdalas en un nuevo array llamado ventasElevadas.
let ventasElevadas= ventas.filter(a=> a.cantidad>8);
console.log(ventasElevadas);

// Calcula el total de ingresos para cada venta multiplicando la cantidad por el precio unitario y 
// almacena los resultados en un nuevo array llamado ingresosTotales.
let ingresosTotales= ventas.map(a=>{
    return{
        producto: a.producto,
        ingresos: a.precioUnitario * a.cantidad,
    }
});
console.log(ingresosTotales);


//Encuentra la venta con el ingreso total más alto en el array ingresosTotales y muestra el producto y 
// el ingreso total en la consola.

let ingresoMasAlto = ingresosTotales.reduce((a,producto)=>{
    if(producto.ingresos > a.ingresos){
        a=producto
    }
    return a
},ingresosTotales[0]);

console.log(ingresoMasAlto);

//Ordena el array original ventas de manera ascendente según la cantidad de productos vendidos.

let ordenMenorMayor = ventas.sort((a,b)=> a.cantidad - b.cantidad);
console.log(ordenMenorMayor);
