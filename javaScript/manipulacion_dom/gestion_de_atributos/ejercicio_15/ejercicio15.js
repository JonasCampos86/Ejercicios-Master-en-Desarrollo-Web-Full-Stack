// Parte 1 — El input

// Selecciona el elemento #resumen mediante getElementById().

// Después:

// Muestra su atributo inicial value mediante getAttribute().
// Muestra su valor actual mediante la propiedad .value.
// Cambia únicamente la propiedad .value por:
// Revisión completada
// Vuelve a mostrar el atributo value.
// Vuelve a mostrar la propiedad .value.

// El resultado debe demostrar que el atributo inicial continúa siendo "Pendiente de revisión", mientras que la propiedad actual pasa a ser "Revisión completada".

// Parte 2 — Los recursos

// Selecciona todos los elementos con la clase "recurso" mediante querySelectorAll() y guárdalos en una constante llamada recursos.

// Recorre la colección mediante forEach().

// En cada vuelta:

// Lee mediante dataset:
// el estado;
// el tipo;
// la prioridad.
// Selecciona desde el recurso actual:
// su botón y guárdalo en boton;
// su párrafo .aviso y guárdalo en aviso.
// Cuando el estado sea "activo"
// Añade la clase "recurso-activo".
// Crea o modifica title con el valor "Recurso disponible".
// Asegúrate de que el botón esté habilitado mediante .disabled.
// Crea en el botón:
// data-acceso="permitido"
// Asegúrate de que el aviso tenga el atributo hidden, utilizando toggleAttribute() con segundo parámetro.
// Cuando el estado sea "inactivo"
// Añade la clase "recurso-inactivo".
// Crea o modifica title con el valor "Recurso no disponible".
// Deshabilita el botón mediante .disabled.
// Crea en el botón:
// data-acceso="bloqueado"
// Elimina hidden del aviso mediante toggleAttribute() con segundo parámetro, para que el mensaje sea visible.
// Condiciones adicionales
// Cuando el tipo sea "video", añade la clase "recurso-video".
// Cuando la prioridad sea "alta":
// añade la clase "recurso-prioritario";
// cambia background-color a "yellow" mediante la propiedad style;
// añade un border-radius de "8px".
// Sustituye la clase "sin-revisar" por "revisado" utilizando classList.replace().
// Añade mediante dataset:
// data-revisado="si"
// Muestra en consola:
// el recurso completo;
// su botón;
// su aviso;
// los nombres de todos los atributos del recurso.
// Resultado conceptual esperado
// Primer recurso
// <article
//     class="
//         recurso
//         revisado
//         recurso-activo
//         recurso-video
//         recurso-prioritario
//     "
//     data-estado="activo"
//     data-tipo="video"
//     data-prioridad="alta"
//     data-revisado="si"
//     title="Recurso disponible"
//     style="
//         padding: 10px;
//         background-color: yellow;
//         border-radius: 8px;
//     "
// >
//     <p class="aviso" hidden>
//         Este recurso no está disponible.
//     </p>

//     <button
//         class="boton-acceso"
//         data-acceso="permitido"
//     >
//         Abrir recurso
//     </button>
// </article>
// Segundo recurso
// Debe tener las clases "revisado" y "recurso-inactivo".
// El botón debe estar deshabilitado.
// El botón debe tener data-acceso="bloqueado".
// El aviso no debe tener hidden.
// Debe tener title="Recurso no disponible".
// Tercer recurso
// Debe tener las clases "revisado" y "recurso-activo".
// El botón debe estar habilitado.
// El botón debe tener data-acceso="permitido".
// El aviso debe conservar hidden.
// No debe recibir los estilos destinados a la prioridad alta.
// Restricciones
// Usa getElementById() una sola vez para el input.
// Usa querySelectorAll() una sola vez para seleccionar los recursos.
// Recorre la colección mediante forEach().
// Selecciona boton y aviso desde cada recurso, no desde document.
// Usa dataset para leer y crear atributos data-*.
// Usa classList.add() y classList.replace().
// Usa setAttribute() únicamente para gestionar title.
// Usa .disabled para gestionar el estado del botón.
// Usa toggleAttribute() con segundo parámetro para gestionar hidden.
// Modifica los estilos mediante propiedades individuales de style.
// Conserva padding: 10px.
// No uses className.
// No uses setAttribute() para disabled, hidden, style ni data-*.
// No escribas manualmente las modificaciones de cada recurso.
// Tu código
// Escribe aquí tu solución

// Parte 1
// Selección
const resumen = document.getElementById("resumen");
//1
console.log(resumen.getAttribute("value"));
//2
console.log(resumen.value);
//3
resumen.value = "Revisión completada";
//4
console.log(resumen.getAttribute("value"));
//5
console.log(resumen.value);

// Parte 2
// Selección
const recursos = document.querySelectorAll(".recurso");
// El forEach()
recursos.forEach(recurso => {
    
    //1
    const boton = recurso.querySelector("button");
    const aviso = recurso.querySelector(".aviso");
    if(recurso.dataset.estado === "activo"){
        recurso.classList.add("recurso-activo");
        recurso.setAttribute("title", "Recurso disponible");
        boton.disabled = false;
        boton.dataset.acceso = "permitido";
        aviso.toggleAttribute("hidden", true);
    }else{
        
        recurso.classList.add("recurso-inactivo");
        recurso.setAttribute("title", "Recurso no disponible");
        boton.disabled = true;
        boton.dataset.acceso = "bloqueado";
        aviso.toggleAttribute("hidden", false);
    }
    if(recurso.dataset.tipo === "video"){
        recurso.classList.add("recurso-video");
    }
    if(recurso.dataset.prioridad === "alta"){
        recurso.classList.add("recurso-prioritario");
        recurso.style.backgroundColor = "yellow";
        recurso.style.borderRadius = "8px";
    }
    recurso.classList.replace("sin-revisar", "revisado");
    recurso.dataset.revisado = "si";
    console.log(recurso);
    console.log(boton);
    console.log(aviso);
    console.log(recurso.getAttributeNames());
});