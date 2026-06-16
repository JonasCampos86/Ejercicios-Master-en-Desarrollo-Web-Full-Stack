

class Anotador{
    #titulo;
    #notas=[]
    
    constructor(titulo){
        this.#titulo=titulo;
    }

    #validarId(id){
        if(typeof id !== "number" || !Number.isInteger(id)||id >= this.#notas.length || this.#notas.length === 0 || id < 0){
            console.error (`No se ha introducido un id valido`);
            return false;
        }
        return true
    }

    agregarNota(nota){
        this.#notas.push(nota);
    }

    actualizarNota(id, nota){
        if (!this.#validarId(id)) return;
        this.#notas.splice(id,1,nota);
    }

    obtenerNota(id){
        if (!this.#validarId(id)) return;
        return this.#notas[id];
    } 


    eliminarNota(id){
        if (!this.#validarId(id)) return;
        this.#notas.splice(id,1);
    }



    eliminarNotas(){
        if (!this.#validarId(id)) return;
        this.#notas.splice(0);
    }
    


    listarNotas(){
        
        const listaEscrita = this.#notas.map((nota , indice )=>{
            indice+=1;
            return `${indice}.  ${nota}`
        }).join("\n")

        return `${this.#titulo}
-----------------------
${listaEscrita}`;
    }
}

const tareas = new Anotador("Collejas recibidas");

tareas.agregarNota("De Victor");
tareas.agregarNota("De Lucas");
tareas.agregarNota("De Alvaro");
tareas.agregarNota("De Marius");

tareas.obtenerNota(50);
tareas.actualizarNota(1, "De GePeTo");
tareas.eliminarNota(2);
console.log(tareas.listarNotas());
