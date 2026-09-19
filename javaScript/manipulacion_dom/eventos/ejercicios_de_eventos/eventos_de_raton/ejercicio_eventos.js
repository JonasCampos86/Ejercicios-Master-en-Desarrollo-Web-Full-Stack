
let elementos = document.body.getElementsByTagName("*")

function colorRamdom(){
    let rojo = Math.floor(Math.random() * 255);
    let verde = Math.floor(Math.random() * 255);
    let azul = Math.floor(Math.random() * 255);
    return `rgb(${rojo}, ${verde}, ${azul}`;
} 

for (let elemento of elementos){
    elemento.addEventListener("mouseenter", (evento)=>{
        evento.target.style.backgroundColor = colorRamdom();

    });
        elemento.addEventListener("mouseleave", (evento)=>{
        evento.target.style.backgroundColor = "white"

    });
            elemento.addEventListener("contextmenu", (evento)=>{
        evento.preventDefault()

    });
}