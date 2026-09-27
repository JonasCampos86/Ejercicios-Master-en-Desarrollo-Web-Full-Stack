// Carga los estilos del juego mediante Vite.
import "./style.css";

// Importa las funciones que preparan los colores, las casillas
// y las dimensiones del tablero.
import {
  crearColor,
  creaCasilla,
  shuffle,
  pedirDimensiones,
} from "./funciones";

// Importa la clase que gestiona la partida y el objeto del cronómetro.
// Al cargar cronometro.js, ese archivo recupera y muestra el tiempo guardado.
import { JuegoParejas } from "./JuegoParejas";
import { stopwatch } from "./cronometro";

// Recupera los colores de la partida anterior, conservando su orden.
// getItem devuelve texto o null si la clave no existe.
// JSON.parse convierte el texto guardado de nuevo en un array.
const losColoresParejaGuardados = localStorage.getItem("losColoresPareja");
const losColoresParejaRecuperados =
  losColoresParejaGuardados === null
    ? null
    : JSON.parse(losColoresParejaGuardados);

// Recupera el número de filas elegido para esa partida.
const lasFilasGuardadas = localStorage.getItem("filas");
const lasFilasRecuperadas =
  lasFilasGuardadas === null ? null : JSON.parse(lasFilasGuardadas);

// Recupera el número de columnas elegido para esa partida.
const lasColumnasGuardadas = localStorage.getItem("columnas");
const lasColumnasRecuperadas =
  lasColumnasGuardadas === null ? null : JSON.parse(lasColumnasGuardadas);

// Recupera las posiciones de las casillas que ya estaban acertadas.
// Si no hay ninguna lista guardada, utiliza un array vacío.
// Así podemos consultar sus posiciones con includes en ambos casos.
const posicionesAbiertasGuardadas = localStorage.getItem("posicionesAbiertas");
const posicionesAbiertasRecuperadas =
  posicionesAbiertasGuardadas === null
    ? []
    : JSON.parse(posicionesAbiertasGuardadas);

// Conecta el botón de nueva partida con las acciones de reinicio.
const reiniciar = document.getElementById("nuevaPartida");
reiniciar.addEventListener("click", () => {
  // Detiene el cronómetro antes de borrar los datos.
  // Así su intervalo no vuelve a guardar el tiempo durante el reinicio.
  stopwatch.stop();

  // Elimina únicamente las cinco claves que utiliza este juego.
  localStorage.removeItem("losColoresPareja");
  localStorage.removeItem("filas");
  localStorage.removeItem("columnas");
  localStorage.removeItem("posicionesAbiertas");
  localStorage.removeItem("tiempoActual");

  // Recarga la página. Al no encontrar una partida guardada,
  // el programa volverá a pedir las dimensiones y creará una nueva.
  location.reload();
});

// Estas variables se utilizan tanto para recuperar una partida
// como para crear una nueva. Se declaran fuera del if para poder
// usarlas después al construir el tablero.
let cuadrosTotales;
let losColoresPareja;
let filas;
let columnas;

// La existencia de colores guardados decide si se recupera la partida.
// Esta rama utiliza también las dimensiones guardadas con esos colores.
if (losColoresParejaRecuperados != null) {
  losColoresPareja = losColoresParejaRecuperados;
  filas = lasFilasRecuperadas;
  columnas = lasColumnasRecuperadas;
  cuadrosTotales = filas * columnas;
} else {
  // Si no hay partida guardada, prepara una lista de colores nueva.
  const colores = [];

  // Pregunta las dimensiones y recoge los valores del objeto devuelto.
  const dimensiones = pedirDimensiones();
  filas = dimensiones.filas;
  columnas = dimensiones.columnas;

  // Calcula el total de casillas y cuántos colores hay que generar.
  // Cada color se utilizará dos veces para formar una pareja.
  cuadrosTotales = filas * columnas;
  let cantidadColores = cuadrosTotales / 2;

  // Genera un color por pareja y lo añade al array.
  for (let i = 0; i < cantidadColores; i++) {
    let color = crearColor();
    colores.push(color);
  }

  // Copia dos veces los colores en un nuevo array y mezcla su orden.
  // Cada posición del resultado corresponderá a una casilla del tablero.
  losColoresPareja = shuffle([...colores, ...colores]);

  // Guarda el orden de los colores y las dimensiones de la nueva partida.
  // JSON.stringify convierte los datos en texto para localStorage.
  // Estas escrituras solo se realizan al crear una partida nueva.
  localStorage.setItem("losColoresPareja", JSON.stringify(losColoresPareja));
  localStorage.setItem("filas", JSON.stringify(filas));
  localStorage.setItem("columnas", JSON.stringify(columnas));
}

// Obtiene los elementos del HTML donde se dibuja el tablero
// y se muestra el mensaje de victoria.
const tablero = document.getElementById("tablero");
const mensaje = document.getElementById("mensaje");

// Entrega las dimensiones elegidas al CSS mediante propiedades
// personalizadas, también llamadas variables CSS.
// El CSS las utiliza en pantallas grandes; en móvil adapta las columnas
// al espacio disponible sin cambiar el total ni el orden de las casillas.
tablero.style.setProperty("--columnas", columnas);
tablero.style.setProperty("--filas", filas);

// Crea la instancia que gestionará las selecciones y las parejas.
// Recibe el total de casillas, el mensaje de victoria y el cronómetro.
// Crear la instancia no arranca el cronómetro.
const juego = new JuegoParejas(cuadrosTotales, mensaje, stopwatch);

// Construye todas las casillas, una por cada posición del array de colores.
for (let cuadrado = 0; cuadrado < cuadrosTotales; cuadrado++) {
  // Crea una casilla con el color correspondiente a esta posición.
  const casilla = creaCasilla(losColoresPareja[cuadrado]);

  // Guarda su posición para identificarla al guardar y recuperar aciertos.
  // El atributo convierte el índice numérico en texto.
  casilla.setAttribute("data-position", cuadrado);

  // Añade la casilla al tablero de la página.
  tablero.append(casilla);

  // Comprueba si esta posición estaba entre las parejas acertadas.
  // String convierte el índice en texto para compararlo con los valores
  // guardados anteriormente desde dataset.position.
  if (posicionesAbiertasRecuperadas.includes(String(cuadrado))) {
    // Recupera tanto el estado abierto como el color visible.
    // Esto se hace al cargar, sin necesidad de pulsar la casilla.
    casilla.dataset.open = "1";
    casilla.style.backgroundColor = casilla.dataset.color;
  }

  // Conecta el clic con el método del juego y le pasa el evento
  // y la referencia de esta casilla.
  // La llamada juego.manejarClick(...) permite que el método
  // use this para acceder al estado de esa instancia.
  casilla.addEventListener("click", (event) => {
    juego.manejarClick(event, casilla);
  });
}