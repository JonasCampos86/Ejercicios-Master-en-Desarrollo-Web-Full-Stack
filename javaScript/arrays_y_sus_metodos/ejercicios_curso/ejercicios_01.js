const alumnos = [
  {
    id: 1,
    nombre: 'Zamora',
    edad: 15,
    master: 'FullStack'
  },
  {
    id: 2,
    nombre: 'Jose Luís',
    edad: 22,
    master: 'BlockChain'
  },
  {
    id: 3,
    nombre: 'Lucía',
    edad: 19,
    master: 'IA'
  },
  {
    id: 4,
    nombre: 'Felipe',
    edad: 49,
    master: 'FullStack'
  },
  {
    id: 5,
    nombre: 'María',
    edad: 17,
    master: 'IA'
  },
  {
    id: 6,
    nombre: 'Cecilia',
    edad: 16,
    master: 'FullStack'
  },
  {
    id: 7,
    nombre: 'Cecilia',
    edad: 16,
    master: 'BlockChain'
  }
];
const datosAleatorios = [
  "Paisa",
  66,
  "Qué tal estás",
  {},
  { name: 'Bienve' },
  [1, 2, 3],
  ['Hola que tal'],
  true
]



/* Ejercicio 1

Dado un array de números, crear una función vAbsoluto que reciba un array y que devuelve 
un array con los valores absolutos de los números del array que se pasa como parámetro

Pista: usar Math.abs

*/
function vAbsoluto(arr) {
    return arr.map(a=> Math.abs(a));
}

const numeros =[1, 3,-89, 30, -98, 1.50, 78];


console.log(vAbsoluto(numeros));

/* Ejercicio 2

Dado un array de datos aleatorios, crear una función llamada porTipos que devuelve un objeto con 
claves por tipo de dato y clasifique los valores del array pasado como parámetro segun su tipo

Pista: usar typeof para determinar el tipo

*/
function porTipos(arr){
    return arr.map(a=> typeof(a));
}
console.log(porTipos(datosAleatorios));

function porTipos(arr){
  let tipos ={};
  return arr.reduce((a,b)=>{
    const tipo = typeof b;
    
    if (!a[tipo]){
      a[tipo]=[];
    }
    a[tipo].push(b);
    return a;
  },{})
};


/* Ejercicio 3

Dado el array de alumnos, crear una función getFullStackStudents a la que se lo pasamos como parámetro 
y nos devuelva únicamente a los alumnos que pertenezcan a la formación Full Stack

Pista: usar filter

*/
function getFullStackStudents (arr){
  return arr.filter(a=> a.master === `FullStack`)
            .map(a=> a.nombre);
}

console.log(getFullStackStudents(alumnos));

/* Ejercicio 4

Dado el array de alumnos, crear una función llamada nStudentFullStack que nos devuelva el número 
de usuarios que pertenecen a dicha formación. De igual manera para el resto de las formaciones

Pista: usar reduce o filter (más eficiente reduce)

*/
function nStudentFullStack (arr,curso){
  
  return arr.reduce((a,alumno)=>{
    
        if(alumno.master === curso){
          return a+1
        }
        return a;
  },0);
};

console.log(nStudentFullStack(alumnos, "FullStack"));

/* Ejercicio 5

Dado el array de alumnos, crear una función llamada getAdultStudents que reciba el array por 
parámetro y devuelva un array únicamente de los mayores de edad

*/
function getAdultStudents(arr){

  return arr.filter(a=> a.edad>=18);
}

console.log(getAdultStudents(alumnos));

/* Ejercicio 6

Dado el array de alumnos, crear una función llamada mayor que reciba el array como parámetro y 
que devuelva el alumno mayor de toda la lista de alumnos

Pista: usa reduce o for

*/
function mayor(arr){
  return arr.reduce((a,alumno)=>{
    if(alumno.edad > a.edad){
      a=alumno;
    }
    return a
  },arr[0])
};
console.log(mayor(alumnos));
/* Ejercicio 7

Haz el ejercicio 2 usando "reduce"
*/
function porTipos(arr){
  let tipos ={};
  return arr.reduce((a,b)=>{
    const tipo = typeof b;
    
    if (!a[tipo]){
      a[tipo]=[];
    }
    a[tipo].push(b);
    return a;
  },{})
};

/* Ejercicio 8

Dado el array de alumnos, crear una función llamada agruparPor que reciba dos parámetros, 
primero el array y luego un string con la propiedad por la que queremos 
agrupar de las posibles de los alumnos. La función devolverá un objeto con una propiedad 
por cada uno de los valores posibles de la propiedad pasada como parámetro. 
Te lo explico con un ejemplo mejor.

*/

function agruparPor (arr,propiedad){
  
  return arr.reduce((acc,alumno)=>{
    let localizador =alumno[propiedad];
    if (!acc[localizador]){
      acc[localizador]=[]
    }
    acc[localizador].push(alumno);
    return acc
  },{});
};

console.log(agruparPor(alumnos,"edad"))