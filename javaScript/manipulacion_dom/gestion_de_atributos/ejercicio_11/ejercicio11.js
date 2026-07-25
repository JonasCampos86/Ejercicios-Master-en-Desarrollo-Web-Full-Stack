// Enunciado

// Selecciona:

// el <input> con id="usuario" y guárdalo en una constante llamada usuario;
// la sección con id="panel-ayuda" y guárdala en una constante llamada panelAyuda.

// Después realiza estas operaciones en orden:

// Comprueba si usuario tiene el atributo required.
// Alterna el atributo required mediante toggleAttribute().
// Vuelve a comprobar si existe required.
// Alterna nuevamente required.
// Comprueba otra vez si existe.
// Elimina el atributo hidden de panelAyuda utilizando toggleAttribute() con segundo parámetro.
// Comprueba si panelAyuda sigue teniendo hidden.
// Añade otra vez hidden utilizando toggleAttribute() con segundo parámetro.
// Comprueba de nuevo si existe hidden.
// Muestra ambos elementos completos en consola.
// Resultado esperado
// false
// true
// false
// false
// true

// Al terminar:

// usuario no debe tener required;
// panelAyuda debe volver a tener hidden.
// Restricciones
// Usa getElementById() una sola vez por cada elemento.
// Usa toggleAttribute() sin segundo parámetro para alternar required.
// Usa toggleAttribute() con segundo parámetro para controlar hidden.
// Usa hasAttribute() para todas las comprobaciones.
// No uses setAttribute().
// No uses removeAttribute().
// No modifiques las propiedades .required ni .hidden.
// Recordatorio permitido
// elemento.toggleAttribute("atributo");

// Alterna según el estado actual.

// elemento.toggleAttribute("atributo", true);
// elemento.toggleAttribute("atributo", false);

// El segundo parámetro obliga a que el atributo exista o no exista.

// Tu código
// Escribe aquí tu solución
const usuario = document.getElementById("usuario");
const panelAyuda = document.getElementById("panel-ayuda");

//1
console.log(usuario.hasAttribute("required"));
//2
usuario.toggleAttribute("required");
//3
console.log(usuario.hasAttribute("required"));
//4
usuario.toggleAttribute("required");
//5
console.log(usuario.hasAttribute("required"));
//6
panelAyuda.toggleAttribute("hidden", false);
//7
console.log(panelAyuda.hasAttribute("hidden"));
//8
panelAyuda.toggleAttribute("hidden", true);
//9
console.log(panelAyuda.hasAttribute("hidden"));
//10
console.log(usuario);
console.log(panelAyuda);