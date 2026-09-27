// Reúne el estado de la partida y la lógica que responde a los clics.
// export permite importar la clase desde main.js.
export class JuegoParejas {
  // Se ejecuta al crear una instancia con new JuegoParejas(...).
  // Recibe el total de casillas, el elemento del mensaje de victoria
  // y el objeto que controla el cronómetro.
  constructor(cuadrosTotales, mensaje, stopwatch) {
    // Número de casillas seleccionadas en el intento actual: 0, 1 o 2.
    this.sumaCasillas = 0;

    // Colores que se compararán para comprobar si hay una pareja.
    this.color1 = "";
    this.color2 = "";

    // Referencias a los elementos seleccionados.
    // Permiten volver a ocultarlos si sus colores no coinciden.
    this.casillaElegida1 = "";
    this.casillaElegida2 = "";

    // Evita arrancar un nuevo intervalo en cada selección.
    // Empieza en false también al recuperar una partida:
    // el tiempo continuará cuando se seleccione una casilla cerrada.
    this.inicioCrono = false;

    // Guarda los datos y objetos recibidos para usarlos en los métodos.
    // this se refiere a la instancia actual del juego.
    this.cuadrosTotales = cuadrosTotales;
    this.mensaje = mensaje;
    this.stopwatch = stopwatch;
  }

  // Se ejecuta desde el listener de clic de cada casilla.
  // event contiene la información del clic.
  // casilla es el elemento al que se ha conectado ese listener.
  manejarClick(event, casilla) {
    // Ignora nuevos clics mientras hay dos casillas seleccionadas.
    // Esto bloquea la selección durante la espera de una pareja fallida.
    if (this.sumaCasillas === 2) {
      return;
    }

    // Lee el color guardado en el elemento pulsado y lo muestra.
    const fondo = event.target.dataset.color;
    casilla.style = `background-color:${fondo}`;

    // Si no hay ninguna selección pendiente, intenta registrar la primera.
    if (this.sumaCasillas === 0) {
      // Solo cuentan las casillas cerradas.
      // Las parejas acertadas y la casilla ya seleccionada se ignoran.
      if (casilla.dataset.open === "0") {
        // Arranca o reanuda el cronómetro en la primera selección válida.
        if (this.inicioCrono === false) {
          this.stopwatch.start();
        }

        // Marca la casilla como abierta y guarda su referencia y color.
        casilla.dataset.open = "1";
        this.casillaElegida1 = casilla;
        this.sumaCasillas += 1;
        this.color1 = fondo;

        // Impide volver a arrancar el cronómetro en siguientes intentos.
        this.inicioCrono = true;
      }
    }

    // Si ya hay una casilla seleccionada, intenta registrar la segunda.
    // Este bloque también se comprueba tras seleccionar la primera,
    // pero no la cuenta dos veces porque su data-open ya vale "1".
    if (this.sumaCasillas === 1) {
      if (casilla.dataset.open === "0") {
        casilla.dataset.open = "1";
        this.casillaElegida2 = casilla;
        this.sumaCasillas += 1;
        this.color2 = fondo;
      }
    }

    // Compara los colores cuando se han seleccionado dos casillas.
    if (this.sumaCasillas === 2) {
      if (this.color1 != this.color2) {
        // Si no coinciden, deja visibles los colores durante 500 ms.
        // Mientras espera, sumaCasillas sigue en 2 y bloquea otros clics.
        // La función flecha conserva el this de la instancia del juego.
        setTimeout(() => {
          // Permite comenzar otro intento y marca ambas casillas
          // como cerradas para que puedan volver a seleccionarse.
          this.sumaCasillas = 0;
          this.casillaElegida1.dataset.open = "0";
          this.casillaElegida2.dataset.open = "0";

          // Oculta de nuevo sus colores.
          this.casillaElegida1.style = `background-color: black`;
          this.casillaElegida2.style = `background-color: black`;
        }, 500);
      } else {
        // Si coinciden, permanecen abiertas y se permite otro intento.
        this.sumaCasillas = 0;

        // Consulta las casillas abiertas después de cada acierto.
        // La consulta se repite porque querySelectorAll devuelve
        // una colección que no se actualiza automáticamente.
        let abiertos = document.querySelectorAll(`[data-open="1"]`);

        // Recoge solo sus posiciones en el tablero.
        // Guardamos estos datos, no los elementos del DOM.
        // dataset devuelve las posiciones como texto.
        let posicionesAbiertas = [];
        for (const dato of abiertos) {
          posicionesAbiertas.push(dato.dataset.position);
        }

        // Guarda todas las posiciones acertadas para recuperarlas
        // al volver a abrir o recargar la página.
        // Al hacerlo en la rama del acierto, no guarda intentos fallidos
        // ni selecciones pendientes.
        localStorage.setItem(
          "posicionesAbiertas",
          JSON.stringify(posicionesAbiertas),
        );

        // Si todas las casillas están abiertas, la partida ha terminado.
        // Muestra el mensaje de victoria y detiene el cronómetro.
        if (abiertos.length === this.cuadrosTotales) {
          this.mensaje.hidden = false;
          this.stopwatch.stop();
        }
      }
    }
  }
}