# Cromemoria

Cromemoria es un juego de memoria de parejas de colores desarrollado como proyecto académico para practicar JavaScript, manipulación del DOM y gestión de eventos.

[Probar el juego](https://cromemoria.netlify.app/)

## Funcionalidades

- Configuración del número de filas y columnas, con validación para mantener un número par de casillas.
- Generación aleatoria de colores y mezcla de las parejas.
- Gestión de selecciones, coincidencias y final de partida.
- Cronómetro basado en tiempo transcurrido real.
- Guardado y recuperación del tablero, las parejas acertadas y el tiempo mediante localStorage y JSON.
- Diseño responsive con CSS Grid.
- Cartas utilizables con ratón, teclado y nombres accesibles para lectores de pantalla.
- Reinicio completo desde el botón Nueva partida.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- DOM y eventos
- Clases y módulos ES6
- localStorage y JSON
- Vite
- Netlify

## Organización del código

- `main.js`: inicia o recupera la partida, construye el tablero y conecta los eventos.
- `JuegoParejas.js`: reúne el estado y la lógica de selección y comparación.
- `funciones.js`: crea colores y casillas y mezcla las parejas.
- `cronometro.js`: mide, muestra y conserva el tiempo de juego.
- `style.css`: define la presentación responsive y los estados de foco.

## Proceso de desarrollo

La primera versión partió de un ejercicio del Máster en Desarrollo Web Full Stack de Conquer Blocks y fue desarrollada por mí. Después refactoricé la solución con apoyo de IA para separar responsabilidades, mejorar el cronómetro, conservar el estado y añadir accesibilidad por teclado. Revisé y probé cada cambio para comprender su funcionamiento y mantener el control sobre el resultado.

## Desarrollo local

```bash
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
```
