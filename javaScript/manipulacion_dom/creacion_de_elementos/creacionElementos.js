// EJERCICIO 1

// Enunciado

// Crea desde JavaScript un elemento <p> y guárdalo en una constante llamada nuevoParrafo.

// Añade mediante textContent el siguiente texto:

// Soy un párrafo creado desde JavaScript

// Después muestra en la consola:

// el elemento completo;
// su contenido textual;
// el valor de su propiedad isConnected.

//RESOSLUCION
// const nuevoParrafo = document.createElement("p");
// nuevoParrafo.textContent= "Soy un párrafo creado desde JavaScript";
// console.log(nuevoParrafo);
// console.log(nuevoParrafo.textContent);
// console.log(nuevoParrafo.isConnected);

// En este ejercicio no debes insertar todavía el párrafo en el contenedor.

// Restricciones
// Utiliza document.createElement().
// Utiliza obligatoriamente textContent.
// No utilices innerHTML.
// No utilices createTextNode().
// No utilices appendChild().
// No selecciones todavía #contenedor.
// Reutiliza la constante nuevoParrafo.

// EJERCICIO 2

// Enunciado

// Desde JavaScript:

// crea un elemento <p> y guárdalo en una constante llamada mensaje;
// crea un nodo de texto con createTextNode()
// y guárdalo en una constante llamada contenidoMensaje;
// el texto debe ser:
// Este texto es un nodo independiente
// inserta contenidoMensaje dentro de mensaje utilizando appendChild();
// muestra en consola:
// el nodo de texto;
// el elemento <p> completo;
// el valor de mensaje.isConnected.

// En este ejercicio todavía no debes insertar el párrafo en el documento.
//RESOLUCION
// const mensaje = document.createElement("p");
// const contenidoMensaje = document.createTextNode("Este texto es un nodo independiente");
// mensaje.appendChild(contenidoMensaje);
// console.log(contenidoMensaje);
// console.log(mensaje);
// console.log(mensaje.isConnected);

// Restricciones
// Utiliza document.createElement().
// Utiliza obligatoriamente document.createTextNode().
// Utiliza appendChild() para insertar el texto dentro del párrafo.
// No utilices textContent.
// No utilices innerHTML.
// No selecciones #zona-mensajes.
// No insertes mensaje en document.body ni en ningún elemento del HTML.

// EJERCICIO 3
// Enunciado

// Desde JavaScript:

// selecciona el elemento con id="zona-mensajes" y guárdalo en una 
// constante llamada zonaMensajes;
// crea un elemento <p> y guárdalo en una constante llamada nuevoMensaje;
// añade mediante textContent este texto:
// El párrafo ya pertenece al documento
// antes de insertarlo, muestra en consola el valor de nuevoMensaje.isConnected;
// inserta nuevoMensaje dentro de zonaMensajes mediante appendChild();
// después de insertarlo, muestra otra vez:
// nuevoMensaje.isConnected;
// el elemento zonaMensajes completo.
//RESOSLUCION
// const zonaMensajes = document.getElementById("zona-mensajes");
// const nuevoMensaje = document.createElement("p");
// nuevoMensaje.textContent  = "El párrafo ya pertenece al documento";
// console.log(nuevoMensaje.isConnected);
// zonaMensajes.appendChild(nuevoMensaje);
// console.log(nuevoMensaje.isConnected);
// console.log(zonaMensajes);

// Restricciones
// Utiliza getElementById().
// Utiliza document.createElement().
// Utiliza obligatoriamente textContent.
// Utiliza appendChild().
// No utilices innerHTML.
// No utilices createTextNode().
// No insertes el párrafo directamente en document.body.

// EJERCICIO 4
// Enunciado

// Desde JavaScript:

// selecciona el elemento con id="resultados" y guárdalo en una 
// constante llamada resultados;
// crea dos elementos <p>:
// parrafoTexto;
// parrafoHtml;
// utiliza en ambos esta misma cadena:
// Hola <strong>DOM</strong>
// añade la cadena a parrafoTexto mediante textContent;
// añade la cadena a parrafoHtml mediante innerHTML;
// inserta ambos párrafos dentro de resultados mediante appendChild();
// muestra los dos elementos completos en la consola.
//RESOSLUCION
// const resultados = document.getElementById("resultados");
// const parrafoTexto = document.createElement("p");
// const parrafoHtml = document.createElement("p");
// parrafoTexto.textContent = "Hola <strong>DOM</strong>";
// parrafoHtml.innerHTML = "Hola <strong>DOM</strong>";
// resultados.appendChild(parrafoTexto);
// resultados.appendChild(parrafoHtml);
// console.log(parrafoTexto);
// console.log(parrafoHtml);


// Restricciones
// Utiliza getElementById().
// Utiliza document.createElement().
// Debes utilizar una vez textContent y una vez innerHTML.
// Utiliza appendChild() para insertar los dos párrafos.
// No utilices createTextNode().
// No crees el <strong> mediante createElement().
// Inserta primero parrafoTexto y después parrafoHtml.

// EJERCICIO 5
// Enunciado

// Desde JavaScript:

// selecciona el elemento con id="contenido" y guárdalo en una 
// constante llamada contenido;
// crea un nodo comentario mediante document.createComment();
// guarda el comentario en una constante llamada comentario;
// el texto interno del comentario debe ser:
// Este comentario fue creado desde JavaScript
// muestra comentario.isConnected antes de insertarlo;
// inserta el comentario como último hijo de contenido mediante appendChild();
// vuelve a mostrar comentario.isConnected;
// muestra en consola el elemento contenido completo.
//RESOLUCION
// const contenido = document.getElementById ("contenido");
// const comentario = document.createComment ("Este comentario fue creado desde JavaScript");
// console.log (comentario.isConnected);
// contenido.appendChild(comentario);
// console.log(comentario.isConnected);
// console.log(contenido);
// Restricciones
// Utiliza getElementById().
// Utiliza obligatoriamente document.createComment().
// Utiliza appendChild().
// No utilices createElement().
// No utilices textContent.
// No utilices innerHTML.
// El comentario debe insertarse dentro de #contenido, no directamente 
// en document.body.

// EJERCICIO 6
// Enunciado

// Desde JavaScript:

// selecciona la sección #pendientes y guárdala en pendientes;
// selecciona la sección #completados y guárdala en completados;
// selecciona el párrafo #mensaje-importante y guárdalo en mensajeImportante;
// muestra en consola:
// mensajeImportante.isConnected;
// la sección pendientes;
// utiliza appendChild() para insertar mensajeImportante dentro de completados;
// después del movimiento, muestra en consola:
// mensajeImportante.isConnected;
// la sección pendientes;
// la sección completados.
//RESOLUCION
// const pendientes = document.getElementById("pendientes");
// const completados = document.getElementById("completados");
// const mensajeImportante = document.getElementById("mensaje-importante");
// console.log(mensajeImportante.isConnected);
// console.log(pendientes);
// completados.appendChild(mensajeImportante);
// console.log(mensajeImportante.isConnected);
// console.log(pendientes);
// console.log(completados);

// Restricciones
// Utiliza getElementById().
// Utiliza appendChild() una sola vez.
// No utilices createElement().
// No utilices cloneNode().
// No modifiques el texto del párrafo.
// No utilices innerHTML.
// No elimines manualmente el párrafo de pendientes.

// EJERCICIO 7
// Enunciado

// Desde JavaScript, crea esta estructura:

// <article>
//     <h2>Nueva clase disponible</h2>
//     <p>Ya puedes practicar la creación de elementos del DOM.</p>
// </article>

// Después insértala dentro del elemento #lista-noticias.

// Para hacerlo:

// selecciona #lista-noticias y guarda el resultado en listaNoticias;
// crea un <article> y guárdalo en noticia;
// crea un <h2> y guárdalo en tituloNoticia;
// crea un <p> y guárdalo en descripcionNoticia;
// añade los textos mediante textContent;
// inserta primero el <h2> y después el <p> dentro del <article>;
// inserta el <article> dentro de listaNoticias;
// muestra en consola:
// noticia;
// noticia.isConnected;
// tituloNoticia.isConnected;
// descripcionNoticia.isConnected;
// listaNoticias.
//RESOLUCION
// const listaNoticias = document.getElementById("lista-noticias");
// const noticia = document.createElement("article");
// const tituloNoticia = document.createElement("h2");
// const descripcionNoticia = document.createElement("p");
// tituloNoticia.textContent = "Nueva clase disponible";
// descripcionNoticia.textContent = "Ya puedes practicar la creación de elementos del DOM.";
// noticia.appendChild(tituloNoticia);
// noticia.appendChild(descripcionNoticia);
// listaNoticias.appendChild(noticia);
// console.log(noticia);
// console.log(noticia.isConnected);
// console.log(tituloNoticia.isConnected);
// console.log(descripcionNoticia.isConnected);
// console.log(listaNoticias);
// Restricciones
// Utiliza getElementById().
// Utiliza document.createElement().
// Utiliza textContent.
// Utiliza appendChild().
// No utilices innerHTML.
// No utilices createTextNode().
// No crees los elementos directamente dentro de listaNoticias.
// Primero debes construir completamente el <article> en memoria y después conectarlo al documento.
// Respeta el orden: título antes que descripción.

// EJERCICIO 8
// Enunciado

// A partir del array contenidos, crea mediante JavaScript la siguiente estructura:

// <ul>
//     <li>Seleccionar elementos</li>
//     <li>Crear elementos</li>
//     <li>Insertar nodos</li>
//     <li>Comprobar conexiones</li>
// </ul>

// Después insértala dentro de #temario.

// Para conseguirlo:

// selecciona #temario y guarda el elemento en temario;
// crea un <ul> y guárdalo en listaContenidos;
// recorre el array contenidos con forEach();
// en cada vuelta:
// crea un elemento <li>;
// introduce en él el texto correspondiente del array;
// insértalo dentro de listaContenidos;
// construye la lista completamente en memoria;
// cuando termine el recorrido, inserta listaContenidos dentro de temario;
// muestra en consola:
// listaContenidos;
// listaContenidos.isConnected;
// temario.
//RESOLUCION
// const contenidos = [
//     "Seleccionar elementos",
//     "Crear elementos",
//     "Insertar nodos",
//     "Comprobar conexiones"
// ];
// const temario = document.getElementById("temario");
// const listaContenidos = document.createElement("ul");
// contenidos.forEach(tema =>{
//     const nuevoLi = document.createElement("li");
//     nuevoLi.textContent = tema;
//     listaContenidos.appendChild(nuevoLi);
// });
// temario.appendChild(listaContenidos);
// console.log(listaContenidos);
// console.log(listaContenidos.isConnected);
// console.log(temario);



// Restricciones
// Utiliza getElementById().
// Utiliza document.createElement().
// Utiliza textContent.
// Utiliza appendChild().
// Utiliza forEach().
// No utilices innerHTML.
// No utilices createTextNode().
// No escribas manualmente cuatro instrucciones para crear los cuatro <li>.
// No insertes cada <li> directamente dentro de #temario.
// La lista <ul> debe conectarse al documento únicamente después de estar completa.

// EJERCICIO 9
// Enunciado

// A partir del array recursos, crea esta estructura dentro de #panel-recursos:

// <div>
//     <article>
//         <h2>Selectores del DOM</h2>
//         <p>Permiten localizar elementos del documento.</p>
//     </article>

//     <article>
//         <h2>Creación de elementos</h2>
//         <p>Permite construir nuevos nodos desde JavaScript.</p>
//     </article>

//     <article>
//         <h2>Inserción de nodos</h2>
//         <p>Permite conectar estructuras nuevas al documento.</p>
//     </article>
// </div>

// Debes:

// seleccionar #panel-recursos y guardarlo en panelRecursos;
// crear un <div> llamado contenedorRecursos;
// recorrer recursos con forEach();
// crear en cada vuelta un <article>, un <h2> y un <p>;
// añadir el título mediante textContent;
// crear la descripción mediante createTextNode() e insertarla dentro del <p>;
// introducir el título y el párrafo dentro del artículo;
// introducir cada artículo dentro de contenedorRecursos;
// mostrar contenedorRecursos.isConnected antes de conectarlo;
// insertar el contenedor completo dentro de panelRecursos;
// volver a mostrar contenedorRecursos.isConnected y después panelRecursos.
//RESOLUCION
// const recursos = [
//     {
//         titulo: "Selectores del DOM",
//         descripcion: "Permiten localizar elementos del documento."
//     },
//     {
//         titulo: "Creación de elementos",
//         descripcion: "Permite construir nuevos nodos desde JavaScript."
//     },
//     {
//         titulo: "Inserción de nodos",
//         descripcion: "Permite conectar estructuras nuevas al documento."
//     }
// ];
// const panelRecursos = document.getElementById("panel-recursos");
// const contenedorRecursos = document.createElement("div");
// recursos.forEach(recurso =>{
//     const nuevoArticle = document.createElement("article");
//     const nuevoH2 = document.createElement("h2");
//     const nuevoP = document.createElement("p");
//     nuevoH2.textContent= recurso.titulo;
//     const descripcion = document.createTextNode(recurso.descripcion);
//     nuevoP.appendChild(descripcion);
//     nuevoArticle.appendChild(nuevoH2);
//     nuevoArticle.appendChild(nuevoP);
//     contenedorRecursos.appendChild(nuevoArticle);
// });
// console.log(contenedorRecursos.isConnected);
// panelRecursos.appendChild(contenedorRecursos);
// console.log(contenedorRecursos.isConnected);
// console.log(panelRecursos);

// Restricciones
// Utiliza getElementById().
// Utiliza createElement().
// Utiliza textContent para los títulos.
// Utiliza obligatoriamente createTextNode() para las descripciones.
// Utiliza appendChild().
// Utiliza forEach().
// No utilices innerHTML.
// No insertes los artículos directamente en #panel-recursos.
// No conectes contenedorRecursos hasta que todos los artículos estén terminados.
// No escribas manualmente tres estructuras distintas.

// EJERCICIO 10
// Enunciado

// A partir del array proyectosCurso, construye esta estructura:

// <section id="proyectos">
//     <ul>
//         <li>
//             <h2>Calculadora</h2>
//             <p>Estado: Terminado</p>
//         </li>

//         <li>
//             <h2>Cuaderno Digital</h2>
//             <p>Estado: En desarrollo</p>
//         </li>

//         <li>
//             <h2>Gestor de tareas</h2>
//             <p>Estado: Pendiente</p>
//         </li>
//     </ul>
// </section>

// Debes:

// seleccionar #proyectos y guardarlo en contenedorProyectos;
// crear una lista <ul> llamada listaProyectos;
// recorrer proyectosCurso;
// crear en cada vuelta:
// un <li>;
// un <h2>;
// un <p>;
// utilizar los datos del objeto correspondiente para completar el título y el estado;
// introducir el <h2> y el <p> dentro del <li>;
// introducir cada <li> dentro de la lista;
// construir toda la lista en memoria;
// mostrar listaProyectos.isConnected antes de insertarla;
// insertar la lista terminada en contenedorProyectos;
// volver a mostrar listaProyectos.isConnected y el contenedor completo.
//RESOLUCION
// const proyectosCurso = [
//     {
//         nombre: "Calculadora",
//         estado: "Terminado"
//     },
//     {
//         nombre: "Cuaderno Digital",
//         estado: "En desarrollo"
//     },
//     {
//         nombre: "Gestor de tareas",
//         estado: "Pendiente"
//     }
// ];
// const contenedorProyectos = document.getElementById("proyectos");
// const listaProyectos = document.createElement("ul");
// proyectosCurso.forEach(proyecto=>{
//     const nuevoLi = document.createElement("li");
//     const nuevoH2 = document.createElement("h2");
//     const nuevoP = document.createElement("p");
//     nuevoH2.textContent = proyecto.nombre;
//     nuevoP.textContent = "Estado: "+ proyecto.estado;
//     nuevoLi.appendChild(nuevoH2);
//     nuevoLi.appendChild(nuevoP);
//     listaProyectos.appendChild(nuevoLi);
// });
// console.log(listaProyectos.isConnected);
// contenedorProyectos.appendChild(listaProyectos);
// console.log(listaProyectos.isConnected);
// console.log(contenedorProyectos);

// Restricciones
// Utiliza getElementById().
// Utiliza createElement().
// Utiliza textContent.
// Utiliza appendChild().
// Utiliza forEach().
// No utilices innerHTML.
// No utilices createTextNode().
// No escribas manualmente tres bloques diferentes.
// No insertes los <li> directamente en #proyectos.
// No conectes el <ul> hasta que esté completamente construido.
// No se permite utilizar return dentro del forEach().

// EJERCICIO 11

// Enunciado

// Construye en memoria un <div> llamado contenedorLecciones que termine 
// teniendo esta estructura:

// <div>
//     <article>
//         <h2>Selectores</h2>
//         <p>Permiten encontrar elementos del documento.</p>
//     </article>

//     <article>
//         <h2>Creación de elementos</h2>
//         <p>Permite construir nuevos nodos desde JavaScript.</p>
//     </article>

//     <article>
//         <h2>Inserción de nodos</h2>
//         <p>Permite conectar estructuras al documento.</p>
//     </article>

//     <p id="aviso-general">
//         Repasa cada lección antes de continuar.
//     </p>

//     <!-- Panel construido desde JavaScript -->
// </div>

// Después conecta el <div> completo dentro de #panel-lecciones.

// También debes mostrar en consola:

// avisoGeneral.isConnected antes de moverlo;
// contenedorLecciones.isConnected antes de conectarlo;
// avisoGeneral.isConnected después de moverlo al contenedor todavía desconectado;
// ambos valores después de insertar el contenedor en #panel-lecciones;
// el elemento panelLecciones completo.
//RESOLUCION
// const lecciones = [
//     {
//         titulo: "Selectores",
//         descripcion: "Permiten encontrar elementos del documento."
//     },
//     {
//         titulo: "Creación de elementos",
//         descripcion: "Permite construir nuevos nodos desde JavaScript."
//     },
//     {
//         titulo: "Inserción de nodos",
//         descripcion: "Permite conectar estructuras al documento."
//     }
// ];
// const panelLecciones = document.getElementById("panel-lecciones");
// const contenedorLecciones = document.createElement("div");
// const comentario = document.createComment("Panel construido desde JavaScript");
// const avisoGeneral = document.getElementById("aviso-general");
// lecciones.forEach(leccion=>{
//     const nuevoArticulo = document.createElement("article");
//     const nuevoH2 = document.createElement("h2");
//     const nuevoP = document.createElement("p");
//     nuevoH2.textContent=leccion.titulo;
//     const descripcion = document.createTextNode(leccion.descripcion);
//     nuevoP.appendChild(descripcion);
//     nuevoArticulo.appendChild(nuevoH2);
//     nuevoArticulo.appendChild(nuevoP);
//     contenedorLecciones.appendChild(nuevoArticulo);
// });
// console.log(avisoGeneral.isConnected);
// console.log(contenedorLecciones.isConnected);
// contenedorLecciones.appendChild(avisoGeneral);
// contenedorLecciones.appendChild(comentario);
// console.log(avisoGeneral.isConnected);
// panelLecciones.appendChild(contenedorLecciones);
// console.log(avisoGeneral.isConnected);
// console.log(contenedorLecciones.isConnected);
// console.log(panelLecciones);

// Restricciones
// Utiliza una sola vez getElementById() para cada elemento necesario.
// Recorre lecciones con forEach().
// Crea los títulos mediante textContent.
// Crea las descripciones mediante createTextNode().
// Crea el comentario mediante createComment().
// Utiliza exclusivamente appendChild() para insertar o mover nodos.
// No utilices innerHTML.
// No crees un aviso nuevo: debes mover el ya existente.
// No conectes contenedorLecciones hasta que tenga dentro todos los artículos, el aviso y el comentario.
// No escribas manualmente los tres artículos.

// EJERCICIO 12
// Enunciado

// Construye mediante JavaScript esta estructura dentro de #panel-avisos:

// <div>
//     <article>
//         <h2>Recordatorio</h2>
//         <p>Repasa los ejercicios antes de continuar.</p>
//     </article>

//     <article>
//         <h2>Clase destacada</h2>
//         <p>
//             Nueva clase de <strong>creación del DOM</strong> disponible.
//         </p>
//     </article>

//     <article>
//         <h2>Consejo</h2>
//         <p>Comprueba siempre si el nodo está conectado.</p>
//     </article>

//     <!-- Avisos generados desde JavaScript -->
// </div>

// Cada objeto tiene una propiedad tipo:

// cuando sea "texto", el contenido debe añadirse como texto plano;
// cuando sea "html", la cadena debe interpretarse como HTML.

// Construye toda la estructura en memoria y conéctala al documento únicamente cuando esté terminada.

// Después muestra en consola:

// el contenedor completo antes de insertarlo;
// su propiedad isConnected antes de insertarlo;
// su propiedad isConnected después de insertarlo;
// el elemento panelAvisos completo.
//RESOLUCION
// const avisos = [
//     {
//         titulo: "Recordatorio",
//         contenido: "Repasa los ejercicios antes de continuar.",
//         tipo: "texto"
//     },
//     {
//         titulo: "Clase destacada",
//         contenido: "Nueva clase de <strong>creación del DOM</strong> disponible.",
//         tipo: "html"
//     },
//     {
//         titulo: "Consejo",
//         contenido: "Comprueba siempre si el nodo está conectado.",
//         tipo: "texto"
//     }
// ];
// const panelAvisos = document.getElementById("panel-avisos");
// const contenedorAvisos = document.createElement("div");
// const comentario = document.createComment("Avisos generados desde JavaScript")
// avisos.forEach(aviso =>{
//     const articulos = document.createElement("article");
//     const titulos = document.createElement("h2");
//     const contenidos = document.createElement("p");

//     titulos.textContent = aviso.titulo;
//     if ( aviso.tipo === "html"){
//         contenidos.innerHTML = aviso.contenido;
//     }else{
//         contenidos.textContent = aviso.contenido
//     }
//     articulos.appendChild(titulos);
//     articulos.appendChild(contenidos);
//     contenedorAvisos.appendChild(articulos);
// });
// contenedorAvisos.appendChild(comentario);
// console.log(contenedorAvisos);
// console.log(contenedorAvisos.isConnected);
// panelAvisos.appendChild(contenedorAvisos);
// console.log(contenedorAvisos.isConnected);
// console.log(panelAvisos);
// Restricciones
// Utiliza getElementById().
// Utiliza createElement().
// Recorre avisos con forEach().
// Utiliza un condicional para elegir entre textContent e innerHTML.
// Los títulos deben añadirse siempre mediante textContent.
// Crea el comentario con createComment().
// Utiliza únicamente appendChild() para insertar nodos.
// No utilices createTextNode().
// No escribas manualmente los tres artículos.
// No conectes cada artículo directamente a #panel-avisos.
// No conectes el <div> hasta que contenga los tres artículos y el comentario.

// EJERCICIO 13
// Enunciado

// Construye completamente en memoria esta estructura:

// <div>
//     <article>
//         <h2>Nuevo tema</h2>
//         <p>Ya está disponible la clase de creación de elementos.</p>
//         <p>Nota: Repasa primero los selectores.</p>
//     </article>

//     <article>
//         <h2>Contenido destacado</h2>
//         <p>
//             Practica el flujo
//             <strong>crear → preparar → insertar</strong>.
//         </p>
//     </article>

//     <article>
//         <h2>Consejo del día</h2>
//         <p>Comprueba isConnected antes y después de insertar.</p>
//         <p>Nota: No confundas comprobar con modificar.</p>
//     </article>

//     <!-- Actualizaciones creadas desde JavaScript -->
// </div>

// Después inserta el <div> dentro de #panel-actualizaciones.

// Cada objeto debe generar un <article> con:

// un <h2> cuyo contenido proceda de titulo;
// un <p> principal cuyo contenido proceda de contenido;
// un segundo <p> solamente cuando nota sea diferente de null.

// El contenido principal deberá añadirse:

// con textContent cuando formato sea "texto";
// con innerHTML cuando formato sea "html".

// La nota deberá crearse utilizando obligatoriamente createTextNode() y deberá comenzar por:

// Nota:
// Comprobaciones en consola

// Muestra:

// el contenedor completo antes de conectarlo;
// contenedorActualizaciones.isConnected antes de conectarlo;
// contenedorActualizaciones.isConnected después de conectarlo;
// el elemento panelActualizaciones completo.
//RESOLUCION
// const actualizaciones = [
//     {
//         titulo: "Nuevo tema",
//         contenido: "Ya está disponible la clase de creación de elementos.",
//         formato: "texto",
//         nota: "Repasa primero los selectores."
//     },
//     {
//         titulo: "Contenido destacado",
//         contenido: "Practica el flujo <strong>crear → preparar → insertar</strong>.",
//         formato: "html",
//         nota: null
//     },
//     {
//         titulo: "Consejo del día",
//         contenido: "Comprueba isConnected antes y después de insertar.",
//         formato: "texto",
//         nota: "No confundas comprobar con modificar."
//     }
// ];
// const panelActualizaciones = document.getElementById("panel-actualizaciones");
// const contenedorActualizaciones = document.createElement("div");
// const comentario = document.createComment("Actualizaciones creadas desde JavaScript");
// actualizaciones.forEach(actualizacion =>{
//     const articulo = document.createElement("article");
//     const titulo = document.createElement("h2");
//     const contenido = document.createElement("p");
//     titulo.textContent = actualizacion.titulo;
//     if(actualizacion.formato === "html"){
//         contenido.innerHTML = actualizacion.contenido;
//     }else{
//         contenido.textContent = actualizacion.contenido;
//     }
//     articulo.appendChild(titulo);
//     articulo.appendChild(contenido);
//     if (actualizacion.nota !== null){
//         const nota = document.createElement("p");
//         const infoExtra = document.createTextNode("Nota: " + actualizacion.nota);
//         nota.appendChild(infoExtra);
//         articulo.appendChild(nota);
//     }
//     contenedorActualizaciones.appendChild(articulo);
// });
// contenedorActualizaciones.appendChild(comentario);
// console.log(contenedorActualizaciones);
// console.log(contenedorActualizaciones.isConnected);
// panelActualizaciones.appendChild(contenedorActualizaciones);
// console.log(contenedorActualizaciones.isConnected);
// console.log(panelActualizaciones);

// Restricciones
// Utiliza getElementById().
// Utiliza createElement().
// Recorre el array con forEach().
// Utiliza un condicional para decidir entre textContent e innerHTML.
// Utiliza otro condicional para decidir si debes crear la nota.
// Los títulos deben añadirse siempre con textContent.
// Las notas deben crearse con createTextNode().
// Crea el comentario mediante createComment().
// Inserta nodos exclusivamente mediante appendChild().
// No utilices innerHTML para construir artículos completos.
// No escribas manualmente tres artículos.
// No conectes el contenedor hasta que esté completamente terminado.
// No crees ningún párrafo de nota cuando nota sea null.

// EJERCICIO 14
// Resultado que debes construir

// Dentro de #panel-modulos debe terminar esta estructura:

// <div>
//     <header>
//         <h2>Ruta de aprendizaje del DOM</h2>

//         <p id="mensaje-general">
//             Completa cada módulo antes de pasar al siguiente.
//         </p>
//     </header>

//     <section>
//         <article>
//             <h3>Selectores</h3>
//             <p>Aprende a localizar elementos del documento.</p>
//             <p>
//                 Consejo: Comprueba siempre qué devuelve cada selector.
//             </p>
//         </article>

//         <article>
//             <h3>Creación de elementos</h3>
//             <p>
//                 Sigue el flujo
//                 <strong>crear → preparar → insertar</strong>.
//             </p>
//         </article>

//         <article>
//             <h3>Inserción de nodos</h3>
//             <p>Utiliza appendChild() para insertar o mover nodos.</p>
//             <p>
//                 Consejo: Un nodo solo puede ocupar un lugar del DOM.
//             </p>
//         </article>
//     </section>

//     <!-- Itinerario construido desde JavaScript -->
// </div>
// Enunciado

// Crea un <div> llamado contenedorModulos completamente en memoria.

// Dentro tendrá:

// un <header>;
// un <h2> con el texto "Ruta de aprendizaje del DOM";
// el párrafo #mensaje-general, que debes mover desde su ubicación original;
// una <section> que contendrá los artículos generados desde modulos;
// un comentario creado desde JavaScript.

// Cada objeto de modulos generará un <article> con:

// un <h3> cuyo texto proceda de titulo;
// un <p> principal cuyo contenido proceda de contenido;
// un segundo <p> únicamente cuando consejo sea diferente de null.

// Para el contenido principal:

// usa textContent cuando formato sea "texto";
// usa innerHTML cuando formato sea "html".

// El consejo debe comenzar por "Consejo: " y crearse obligatoriamente 
// mediante createTextNode().

// Comprobaciones obligatorias

// Muestra en consola:

// mensajeGeneral.isConnected antes de moverlo;
// contenedorModulos.isConnected antes de conectarlo;
// mensajeGeneral.isConnected después de moverlo al <header>, mientras el contenedor sigue en memoria;
// ambos valores después de insertar contenedorModulos en #panel-modulos;
// panelModulos completo.
//RESOLUCION
// const modulos = [
//     {
//         titulo: "Selectores",
//         contenido: "Aprende a localizar elementos del documento.",
//         formato: "texto",
//         consejo: "Comprueba siempre qué devuelve cada selector."
//     },
//     {
//         titulo: "Creación de elementos",
//         contenido: "Sigue el flujo <strong>crear → preparar → insertar</strong>.",
//         formato: "html",
//         consejo: null
//     },
//     {
//         titulo: "Inserción de nodos",
//         contenido: "Utiliza appendChild() para insertar o mover nodos.",
//         formato: "texto",
//         consejo: "Un nodo solo puede ocupar un lugar del DOM."
//     }
// ];
// const contenedorModulos = document.createElement("div");
// const tituloSecundario = document.createElement("h2");
// const headerPrincipal = document.createElement("header");
// const panelModulos = document.getElementById("panel-modulos");
// tituloSecundario.textContent = "Ruta de aprendizaje del DOM";
// headerPrincipal.appendChild(tituloSecundario);
// const mensajeGeneral = document.getElementById("mensaje-general");
// console.log(mensajeGeneral.isConnected);
// headerPrincipal.appendChild(mensajeGeneral);
// console.log(contenedorModulos.isConnected);
// console.log(mensajeGeneral.isConnected);
// contenedorModulos.appendChild(headerPrincipal);
// const seccion = document.createElement("section");
// contenedorModulos.appendChild(seccion);
// const comentario = document.createComment("Itinerario construido desde JavaScript")
// modulos.forEach(modulo => {
//     //creamos el aricle el titulo y el contenido
//     const articulo = document.createElement("article");
//     const titulo = document.createElement("h3");
//     const contenido = document.createElement("p");
//     //insertamos el titulo en el article
//     titulo.textContent= modulo.titulo;
//     articulo.appendChild(titulo);
//     //comprobamos como insertamos el texto en el contenido
//     if(modulo.formato === "html"){
//         contenido.innerHTML = modulo.contenido;

//     }else{
//         contenido.textContent = modulo.contenido;
//     }
//     //insertamos el contenido en el aticulo 
//     articulo.appendChild(contenido);
//     //comprobamos si creamos el consejo y si se crea lo añadimos al articulo
//     if(modulo.consejo !== null){
//         const consejo = document.createElement("p");
//         const textoConsejo = document.createTextNode("Consejo: " + modulo.consejo);
//         consejo.appendChild(textoConsejo);
//         articulo.appendChild(consejo);
//     }
//     seccion.appendChild(articulo);
    
// });
// contenedorModulos.appendChild(comentario);
// panelModulos.appendChild(contenedorModulos);
// console.log(mensajeGeneral.isConnected);
// console.log(contenedorModulos.isConnected);
// console.log(panelModulos);
// Restricciones
// Usa getElementById() una sola vez por cada elemento existente que necesites.
// Recorre modulos con forEach().
// Usa exclusivamente appendChild() para insertar o mover nodos.
// No utilices remove().
// No utilices innerHTML para construir estructuras completas.
// No crees un nuevo mensaje general: mueve el existente.
// No crees el párrafo del consejo cuando su valor sea null.
// No conectes contenedorModulos hasta que toda la estructura esté terminada.
// No escribas manualmente los tres artículos.

// EJERCICIO 15
// Enunciado

// Crea toda la estructura desde JavaScript.

// El <div> principal debe guardarse en una constante llamada:

// contenedorPracticas

// El párrafo #mensaje-principal ya existe y debe moverse dentro del <header>. No debes crear una copia.

// Cada objeto de practicas debe generar un <article>:

// titulo será el contenido de un <h3>;
// descripcion será el contenido de un <p>;
// cuando formato sea "html", la descripción deberá interpretarse como HTML;
// cuando formato sea "texto", deberá tratarse como texto plano;
// solamente se creará el párrafo de observación cuando observacion sea diferente de null;
// la observación debe crearse mediante createTextNode() y comenzar por "Observación: ".

// Construye toda la estructura en memoria y conéctala al documento únicamente cuando esté completamente terminada.

// Comprobaciones obligatorias

// Muestra en la consola:

// mensajePrincipal.isConnected antes de moverlo;
// contenedorPracticas.isConnected antes de conectarlo;
// mensajePrincipal.isConnected después de moverlo al header desconectado;
// contenedorPracticas completo antes de conectarlo;
// mensajePrincipal.isConnected después de conectar el contenedor;
// contenedorPracticas.isConnected después de conectarlo;
// panelPracticas completo.
// const practicas = [
//     {
//         titulo: "Selectores",
//         descripcion: "Localiza elementos antes de trabajar con ellos.",
//         formato: "texto",
//         observacion: "Comprueba si obtienes un elemento o una colección."
//     },
//     {
//         titulo: "Creación de elementos",
//         descripcion: "Sigue el flujo <strong>crear → preparar → insertar</strong>.",
//         formato: "html",
//         observacion: null
//     },
//     {
//         titulo: "Conexión de nodos",
//         descripcion: "Utiliza isConnected para comprobar el estado del nodo.",
//         formato: "texto",
//         observacion: "Crear un elemento no significa conectarlo."
//     }
// ];
// const panelPracticas = document.getElementById("panel-practicas");
// const contenedorPracticas = document.createElement("div");
// const headerPrincipal = document.createElement("header");
// const tituloSecundario = document.createElement("h2");
// const seccionPrincipal = document.createElement("section");
// const comentario = document.createComment("Panel final creado desde JavaScript ");
// tituloSecundario.textContent = "Entrenamiento práctico del DOM";
// const mensajePrincipal = document.getElementById("mensaje-principal");
// contenedorPracticas.appendChild(headerPrincipal);
// headerPrincipal.appendChild(tituloSecundario);
// //1
// console.log(mensajePrincipal.isConnected);
// //2
// console.log(contenedorPracticas.isConnected);

// headerPrincipal.appendChild(mensajePrincipal);
// //3
// console.log(mensajePrincipal.isConnected);
// contenedorPracticas.appendChild(seccionPrincipal);

// practicas.forEach(practica =>{
//     const articulo = document.createElement("article");
//     const titulo = document.createElement("h3");
//     titulo.textContent = practica.titulo;
//     articulo.appendChild(titulo);
//     const descripcion = document.createElement("p");
//     //Comprobacion del formato
//     if ( practica.formato === "html"){
//         descripcion.innerHTML = practica.descripcion;
//     }else{
//         descripcion.textContent = practica.descripcion;
//     }
//     articulo.appendChild(descripcion);
//     //Comprobacion observacion
//     if ( practica.observacion !== null){
//         const textoObservacion = document.createTextNode("Observación: " + practica.observacion);
//         const observacion = document.createElement("p");
//         observacion.appendChild(textoObservacion);
//         articulo.appendChild(observacion);
//     }
//     seccionPrincipal.appendChild(articulo);

// });

// //4
// console.log(contenedorPracticas);
// panelPracticas.appendChild(contenedorPracticas);
// panelPracticas.appendChild(comentario);
// //5
// console.log(mensajePrincipal.isConnected);
// //6
// console.log(contenedorPracticas.isConnected);
// //7 
// console.log(panelPracticas);



// Restricciones
// Utiliza getElementById() una sola vez por cada elemento existente necesario.
// Utiliza createElement(), createTextNode() y createComment().
// Recorre practicas mediante forEach().
// Utiliza condicionales para el formato y para la observación.
// Inserta y mueve nodos únicamente mediante appendChild().
// No utilices remove().
// No utilices innerHTML para construir estructuras completas.
// No escribas manualmente los tres artículos.
// No crees un nuevo mensaje principal.
// No conectes contenedorPracticas hasta haber terminado toda la estructura.
// Cada nodo estructural debe insertarse una sola vez en su padre.
