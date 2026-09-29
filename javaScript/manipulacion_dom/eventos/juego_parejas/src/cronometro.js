// Valores del cronómetro:
// min: minutos.
// sec: segundos.
// ms: centésimas de segundo, aunque el nombre sugiera milisegundos.
// count: identificador del intervalo, necesario para detenerlo.
// malt, salt y msalt: valores preparados para mostrarlos con dos cifras.
var min, sec, ms, count, malt, salt, msalt;

// Lee el tiempo guardado en el navegador.
// localStorage conserva los datos aunque se recargue o cierre la página.
const tiempoActualGuardados = localStorage.getItem("tiempoActual");

// Si hay datos, convierte el texto guardado en un objeto de JavaScript.
// Si no existe un tiempo guardado, mantiene el valor null.
const tiempoActualRecuperados =
  tiempoActualGuardados === null
    ? null
    : JSON.parse(tiempoActualGuardados);

// Recupera los valores de la partida anterior.
// Si no hay datos, prepara el cronómetro para empezar desde cero.
if (tiempoActualRecuperados != null) {
  min = tiempoActualRecuperados.min;
  sec = tiempoActualRecuperados.sec;
  ms = tiempoActualRecuperados.ms;
} else {
  ms = 0;
  sec = 0;
  min = 0;
}

// Convierte el tiempo recuperado a milisegundos.
// La variable ms del código anterior representa centésimas.
let tiempoAcumulado = min * 60000 + sec * 1000 + ms * 10;

// Instante de inicio, compartido por los métodos del cronómetro.
let tiempoInicio;

// Agrupa las operaciones del cronómetro.
// export permite importarlo desde main.js y pasarlo al juego.
export var stopwatch = {
  // Arranca el cronómetro desde los valores que tenga en ese momento.
  // No los pone a cero, para poder continuar una partida recuperada.
  start: function () {
    // Solicita ejecutar este bloque cada 10 milisegundos.
    // Guarda el identificador del intervalo para poder detenerlo después.
    // El navegador puede retrasar las ejecuciones: no es una medida exacta
    // del tiempo real transcurrido.

    // Guarda el instante de inicio para medir cuánto tiempo pasa desde aquí.
    tiempoInicio = performance.now();

    // Recuerda cuándo se guardó el tiempo por última vez.
    let ultimoGuardado = tiempoInicio;
    
    count = setInterval(function () {

      // Suma el tiempo de partidas anteriores y lo transcurrido desde este inicio.
      const tiempoTranscurrido =
        tiempoAcumulado + (performance.now() - tiempoInicio);

      // Convierte el total a minutos, segundos y centésimas para mostrarlo.
      min = Math.floor(tiempoTranscurrido / 60000);
      sec = Math.floor(tiempoTranscurrido / 1000) % 60;
      ms = Math.floor(tiempoTranscurrido / 10) % 100;

      // Añade un cero delante de los valores menores que diez.
      malt = stopwatch.pad(min);
      salt = stopwatch.pad(sec);
      msalt = stopwatch.pad(ms);

      // Forma el texto minutos:segundos:centésimas y lo muestra.
      stopwatch.update(malt + ":" + salt + ":" + msalt);

      // Guarda como máximo una vez por segundo.
      const ahora = performance.now();

      if (ahora - ultimoGuardado >= 1000) {
              // Reúne los valores numéricos actuales en un objeto.
        const tiempoActual = {
          min: min,
          sec: sec,
          ms: ms,
        };
            // Convierte el objeto en texto y sobrescribe el tiempo guardado.
            // Al recargar, se recuperará la última actualización almacenada.
        localStorage.setItem("tiempoActual", JSON.stringify(tiempoActual));
      } ultimoGuardado = ahora;
    } ,10);
  },

  // Detiene las actualizaciones y el guardado periódico del tiempo.
  // Conserva los valores actuales en las variables y en localStorage.
  stop: function () {
  // Si ya está parado, no vuelve a sumar el tiempo.
  if (count == null) return;

  clearInterval(count);
  count = null;

  // Añade el tiempo transcurrido desde el último arranque.
  tiempoAcumulado += performance.now() - tiempoInicio;

  // Calcula los valores finales, aunque el intervalo no haya actualizado aún.
  min = Math.floor(tiempoAcumulado / 60000);
  sec = Math.floor(tiempoAcumulado / 1000) % 60;
  ms = Math.floor(tiempoAcumulado / 10) % 100;

  // Guarda el tiempo final, incluida la fracción pendiente del último segundo.
  localStorage.setItem(
    "tiempoActual",
    JSON.stringify({ min, sec, ms })
  );

  // Muestra el mismo tiempo que acaba de guardarse.
  stopwatch.update(
    stopwatch.pad(min) + ":" +
    stopwatch.pad(sec) + ":" +
    stopwatch.pad(ms)
  );
},

  // Sustituye el texto del elemento con id="timer".
  // firstChild accede al nodo de texto que contiene ese elemento.
  update: function (txt) {
    var temp = document.getElementById("timer");
    temp.firstChild.nodeValue = txt;
  },

  // Prepara un valor para mostrarlo con al menos dos cifras.
  // Por ejemplo, convierte 4 en "04" y deja 15 como está.
  pad: function (time) {
    var temp;

    if (time < 10) {
      temp = "0" + time;
    } else {
      temp = time;
    }

    return temp;
  },
};

// Muestra el tiempo inicial o recuperado cuando se carga este archivo.
// No arranca el intervalo: el tiempo permanece parado hasta que el juego
// llama a stopwatch.start() al seleccionar una casilla cerrada.
malt = stopwatch.pad(min);
salt = stopwatch.pad(sec);
msalt = stopwatch.pad(ms);
stopwatch.update(malt + ":" + salt + ":" + msalt);

// Detiene y guarda el cronómetro al abandonar o recargar la página.
window.addEventListener("pagehide", () => {
  stopwatch.stop();
});