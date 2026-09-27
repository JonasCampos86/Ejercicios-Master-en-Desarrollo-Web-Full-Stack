// export permite importar estas funciones desde otros archivos,
// como main.js.

// Genera un color combinando cantidades aleatorias de rojo, verde y azul.
export function crearColor() {
  // Cada componente recibe un número entero entre 0 y 255.
  // Math.random() genera un decimal entre 0 incluido y 1 excluido.
  // Multiplicar por 256 y redondear hacia abajo permite obtener ese rango.
  let rojo = Math.floor(Math.random() * (255 + 1));
  let verde = Math.floor(Math.random() * (255 + 1));
  let azul = Math.floor(Math.random() * (255 + 1));

  // Construye un texto que CSS reconoce como color.
  // Por ejemplo: "rgb(120,45,200)".
  let color = `rgb(${rojo},${verde},${azul})`;

  // Entrega el color al código que ha llamado a la función.
  return color;
}

// Crea una casilla y prepara los datos que necesita el juego.
// Recibe como parámetro el color que tendrá al descubrirse.
export function creaCasilla(color) {
  const casilla = document.createElement("div");

  // Aplica la clase que define su tamaño y aspecto en el CSS.
  casilla.setAttribute("class", "casilla");

  // Guarda el color sin mostrarlo todavía.
  // El juego puede leerlo después mediante casilla.dataset.color.
  casilla.setAttribute("data-color", color);

  // Marca la casilla como cerrada.
  // Los atributos guardan texto: "0" significa cerrada y "1", abierta.
  casilla.setAttribute("data-open", "0");

  // Devuelve el elemento creado.
  // Añadirlo al tablero y conectar su evento de clic se hace desde main.js.
  return casilla;
}

// Mezcla las posiciones de un array sin añadir ni quitar elementos.
// Modifica el array recibido y devuelve ese mismo array mezclado.
export function shuffle(array) {
  // Recorre el array desde la última posición hasta la segunda.
  for (let i = array.length - 1; i > 0; i--) {
    // Elige una posición aleatoria entre 0 e i, ambas incluidas.
    const j = Math.floor(Math.random() * (i + 1));

    // Intercambia los elementos de las posiciones i y j.
    // Así, en cada vuelta queda elegida la posición de un elemento.
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

// Pregunta las dimensiones del tablero.
// Repite las preguntas mientras el total de casillas no sea par.
export function pedirDimensiones() {
  // Estas variables solo se usan dentro de esta función.
  let filas = 0;
  let columnas = 0;
  let cuadrosTotales = filas * columnas;

  // do...while ejecuta las preguntas al menos una vez
  // y comprueba después si tiene que repetirlas.
  do {
    // prompt devuelve texto; parseInt intenta convertirlo en un entero.
    filas = parseInt(prompt("Dime el numero de filas quieres usar"));
    columnas = parseInt(prompt("Dime el numero de columnas quieres usar"));

    // Calcula cuántas casillas tendrá el tablero.
    cuadrosTotales = filas * columnas;

    // % obtiene el resto de la división.
    // Si el resto al dividir entre dos no es cero, vuelve a preguntar.
  } while (cuadrosTotales % 2 != 0);

  // Devuelve ambos valores dentro de un objeto.
  // Es la forma abreviada de { filas: filas, columnas: columnas }.
  return { filas, columnas };
}