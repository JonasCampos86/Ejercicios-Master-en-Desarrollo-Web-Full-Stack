/*
4 Autenticación

Crear un programa que pida ingresar el usuario y la contraseña 
y los compare con el usuario y contraseña guardados en variables, 
y muestre en un mensaje si tiene el acceso autorizado
*/
let nombre = "Jonas Campos"
let contrasena = "Lucas1234" 
let peticionUsuario = prompt(`Escriba su nombre de usuario:`).trim();
let peticionContrasena = prompt(`Escriba su contraseña`).trim();

if(nombre === peticionUsuario && contrasena === peticionContrasena){
    window.alert(`Acceso autorizado ${nombre}, Cuidado con el T-Virus JAJAJAJAJA.`)
}else{
    window.alert(`La corporacion Umbrela no le permite el acceso a las instalaciones`)
}

