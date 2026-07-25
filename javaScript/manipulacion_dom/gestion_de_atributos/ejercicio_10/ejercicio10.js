// Enunciado

// Selecciona:

// el <input> y guárdalo en una constante llamada correo;
// el <button> y guárdalo en una constante llamada botonEnviar.

// Después realiza estas operaciones en orden:

// Muestra el valor de botonEnviar.disabled.
// Comprueba mediante hasAttribute() si el botón tiene el atributo disabled.
// Habilita el botón utilizando su propiedad disabled.
// Vuelve a mostrar botonEnviar.disabled.
// Vuelve a comprobar si existe el atributo disabled.
// Añade al input el atributo booleano required mediante setAttribute().
// Muestra el valor de correo.required.
// Comprueba si el input tiene el atributo required.
// Elimina required mediante removeAttribute().
// Vuelve a mostrar correo.required.
// Vuelve a comprobar si existe el atributo required.
// Muestra ambos elementos completos en consola.
// Resultado esperado
// true
// true
// false
// false
// true
// true
// false
// false

// Al finalizar:

// el botón debe estar habilitado;
// el input no debe tener el atributo required.
// Restricciones
// Usa getElementById() una sola vez para cada elemento.
// Habilita el botón mediante:
// botonEnviar.disabled = false;
// Añade required mediante setAttribute().
// Elimina required mediante removeAttribute().
// Usa hasAttribute() para comprobar la presencia de los atributos.
// No uses toggleAttribute().
// No uses setAttribute("disabled", false).
// No modifiques el HTML manualmente.
// Tu código
// Escribe aquí tu solución
const correo = document.getElementById("correo");
const botonEnviar = document.getElementById("boton-enviar");
console.log(botonEnviar.disabled);
console.log( botonEnviar.hasAttribute("disabled"));
botonEnviar.disabled = false;
console.log(botonEnviar.disabled);
console.log( botonEnviar.hasAttribute("disabled"));

correo.setAttribute("required","");
console.log(correo.required);
console.log(correo.hasAttribute("required"));
correo.removeAttribute("required");
console.log(correo.required);
console.log(correo.hasAttribute("required"));

console.log(correo);
console.log(botonEnviar);