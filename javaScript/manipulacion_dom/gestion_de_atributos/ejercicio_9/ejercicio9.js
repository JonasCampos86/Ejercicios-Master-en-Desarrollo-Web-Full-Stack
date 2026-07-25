// Enunciado

// Selecciona el elemento con id="producto" y guárdalo en una constante llamada producto.

// Después, trabajando mediante dataset:

// Muestra en consola el valor de data-id.
// Muestra en consola el valor de data-category.
// Muestra en consola el valor de data-user-id.
// Cambia data-id a "40".
// Cambia data-category a "programacion".
// Crea un nuevo atributo data-estado con el valor "disponible".
// Muestra en consola los cuatro valores finales.
// Muestra el elemento producto completo.
// Conversión importante
// data-id       → dataset.id
// data-category → dataset.category
// data-user-id  → dataset.userId
// data-estado   → dataset.estado
// Resultado inicial esperado
// 25
// libros
// 8
// Resultado final esperado
// 40
// programacion
// 8
// disponible

// El elemento debe terminar conceptualmente así:

// <article
//     id="producto"
//     data-id="40"
//     data-category="programacion"
//     data-user-id="8"
//     data-estado="disponible"
// >
// Restricciones
// Usa getElementById() una sola vez.
// Lee y modifica los atributos exclusivamente mediante dataset.
// No uses getAttribute().
// No uses setAttribute().
// No elimines ningún atributo.
// No cambies data-user-id.
// Tu código
// Escribe aquí tu solución
const producto = document.getElementById("producto");
console.log(producto.dataset.id);
console.log(producto.dataset.category);
console.log(producto.dataset.userId);
producto.dataset.id = "40";
producto.dataset.category = "programacion";
producto.dataset.estado = "disponible";
console.log(producto);