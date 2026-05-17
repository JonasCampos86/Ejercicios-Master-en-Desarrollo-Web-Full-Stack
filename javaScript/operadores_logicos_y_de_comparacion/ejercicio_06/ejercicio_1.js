/*
6 Acceso restringido

Un club tiene las siguientes reglas: sólo pueden entrar miembros que 
tengan la cuota al día, o no miembros que tengan autorización. 
Hacer un programa que pregunte estas si es miembro, 
si tiene la cuota al día y si tiene autorización y muestre 
luego un mensaje indicando si tiene el acceso permitido o no.

*/

let miembro = prompt(`¿Eres miembro del club? Si o no:`).toLowerCase().trim();
let cuota = prompt(`¿Tienes las cuotas al día? Si o no:`).toLowerCase().trim();
let autorizacion = prompt(`¿Tienes autorización? Si o no:`).toLowerCase().trim();

if( miembro === `si`&& cuota === `si`){
    window.alert(`Puedes pasar.`)
}else{
    if(autorizacion === `si`){
        window.alert(`Puedes pasar invitado.`)
    }else{
        window.alert(`Lo sentimos pero no puede pasar.`)
    }
}

