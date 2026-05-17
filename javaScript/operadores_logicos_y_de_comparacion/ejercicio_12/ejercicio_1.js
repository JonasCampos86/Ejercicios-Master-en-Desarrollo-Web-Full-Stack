/*
12 Autenticación

Crear un programa que pida ingresar el usuario y la contraseña y 
los compare con el usuario y contraseña guardados en variables. 
Si coinciden debe mostrar un mensaje que diga "Autenticación exitoso" 
y si no, debe mostrar "Usuario o contraseña equivocados".
*/

let nombre = "Jonas Campos"
let contrasena = "Lucas1234" 
let peticionUsuario = prompt(`Escriba su nombre de usuario:`).toLowerCase().trim();
let peticionContrasena = prompt(`Escriba su contraseña`).toLowerCase().trim();

if(nombre === peticionUsuario && contrasena === peticionContrasena){
    window.alert(`Autenticación exitoso.`)
}else{
    window.alert(`Usuario o contraseña equivocados`)
}
