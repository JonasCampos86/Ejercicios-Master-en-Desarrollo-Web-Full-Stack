/*
4 🎓 Examen aprobado

Crear un programa que pida al usuario ingresar la nota un examen y mostrar 
en un mensaje si el examen está aprobado, si debe recuperar o es un aplazo. 
Si la nota es mayor a 7 aprueba, si es mayor a 4 recupera y si es menor a 4 es un aplazo.
*/

let notaUsuario;

do {
    notaUsuario =parseFloat(prompt(`Dime tu nota por favor:`));
    if (isNaN(notaUsuario)){
        window.alert(`Esto no es un número, por favor ingrese su nota`);
    }else if (notaUsusario<1 || notaUsuario>10){
        window.alert(`Escribe tu nota real.`);
        notaUsuario = NaN;
    }
}while(isNaN(notaUsuario));

if (notaUsuario >=7){
    window.alert(`Aprovaste.`);
}else if(notaUsuario>=4){
    window.alert(`Lo siento pero tienes que recuperar.`);
}else{
    window.alert(`Tienes un aplazamiento de examen.`)
}