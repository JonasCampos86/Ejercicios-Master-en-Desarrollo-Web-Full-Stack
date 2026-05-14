/*
4 Lista de reproducción

Crear un programa que pida al usuario ingresar, por separado, 
el nombre de una playlist y el título de tres canciones, y al 
finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado 
la playlist 'Hits de los 80s' con las canciones 'Africa', 
'Maniac', 'Final Countdown'".
*/

let namePlaylist = prompt(`¿Como quieres llamar a tu Playlist nueva? `);
let fistSong = prompt(`¿Qué canción quieres meter la primera? `);
let secondSong = prompt(`¿Qué canción metemos la segunda? `);
let thirdSong = prompt(`¿Qué canción metemos la tercera? `);
window.alert(`Se ha creado la playlist ${namePlaylist} con los temas: 
    ${fistSong}, ${secondSong} y ${thirdSong}.
    Esperamos que las disfrute mucho.`)

