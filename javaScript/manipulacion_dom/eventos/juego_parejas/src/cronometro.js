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
    count = setInterval(function () {
      // Gestiona el paso de centésimas a segundos y de segundos a minutos.
      // Este bloque conserva la lógica original, que comprueba los límites
      // antes de incrementar los valores.
      if (ms == 100) {
        ms = 0;

        if (sec == 60) {
          sec = 0;
          min++;
        } else {
          sec++;
        }
      } else {
        ms++;
      }

      // Añade un cero delante de los valores menores que diez.
      malt = stopwatch.pad(min);
      salt = stopwatch.pad(sec);
      msalt = stopwatch.pad(ms);

      // Forma el texto minutos:segundos:centésimas y lo muestra.
      stopwatch.update(malt + ":" + salt + ":" + msalt);

      // Reúne los valores numéricos actuales en un objeto.
      const tiempoActual = {
        min: min,
        sec: sec,
        ms: ms,
      };

      // Convierte el objeto en texto y sobrescribe el tiempo guardado.
      // Al recargar, se recuperará la última actualización almacenada.
      localStorage.setItem("tiempoActual", JSON.stringify(tiempoActual));
    }, 10);
  },

  // Detiene las actualizaciones y el guardado periódico del tiempo.
  // Conserva los valores actuales en las variables y en localStorage.
  stop: function () {
    clearInterval(count);
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