/*
10 Términos y condiciones de uso

Crear un programa que pregunte si acepta los términos 
y condiciones de uso. Si el usuario responde que sí, 
debe mostrar un mensaje que diga 
"Continuando con el proceso...". 
Si responde que no, debe mostrar un mensaje que diga 
"No se puede continuar con el proceso si no se aceptan los términos y condiciones de uso".
*/

let respuesta =  prompt(`¿Acepta los terminos y condiciones de uso?`).toLowerCase().trim();

if(respuesta ===`si`){
    window.alert(`Continuando el proceso.......`)
}else{
    window.alert("No se puede continuar con el proceso si no se aceptan los términos y condiciones de uso")
}