
class Televisor {
    #encendido = false;
    #canal = 0;
    #canales ;
    #volumen =0;
    #marca;

    constructor(marca , canales){
        this.#marca = marca;
        this.#canales = canales;
    }

    #estaEncendido(){
        if(!this.#encendido){
            console.log(`La television esta apagada.`);
            return false;
        }
        return true;
    }

    #validarCanal(canal){
        if(typeof canal !== "number" || Number.isNaN(canal)){
            console.error (`No se ha introducido un número válido`);
            return false;
        }
        return true
    }

    encender(){
        if( this.#encendido === false){
            console.log(`Acabas de encender tu televisor ${this.#marca}`)
            this.#encendido= true;   
        }
        
    }

    apagar(){
      
        if( this.#encendido === true){
            console.log(`Acabas de apagar tu televisor ${this.#marca}`)
            this.#encendido= false;   
        }
    }

    verCanalSiguiente(){
        if (!this.#estaEncendido()) return;

        if(this.#canal === this.#canales){
            this.#canal=0;
        }else{
            this.#canal+=1;
        }
        return this.#canal;
    } 

    verCanalAnterior(){
        if (!this.#estaEncendido()) return;

        if(this.#canal === 0){
            this.#canal=this.#canales;
        }else{
            this.#canal-=1;
        }
        
        return this.#canal;
    }

    cambiarCanal(canal){
        if (!this.#estaEncendido()) return;
        if (!this.#validarCanal(canal)) return;

        if(canal>this.#canales || canal < 0){
            console.error(`No existen canales por encima de ${this.#canales} ni por debajo del 0.`);
            return;
        }

        this.#canal= canal;
        
    }

    subirVolumen(){
        if (!this.#estaEncendido()) return;

        if (this.#volumen === 100){
            console.error(`No puedes subir el volumen a más de 100`)
            return;
        }
        this.#volumen+=1;
        
    }

    bajarVolumen() {
        if (!this.#estaEncendido()) return;

        if (this.#volumen === 0){
            console.error(`No puedes bajar  el volumen a menos de 0`)
            return;
        }
       
        this.#volumen-=1;
        
    }

    toString(){
        if (!this.#estaEncendido()) return;
        return `Televisor de la marca ${this.#marca}
            - Canales: ${this.#canales}
            - Canal actual: ${this.#canal}
            - Volumen actual: ${this.#volumen}`
    }
}

const tele = new Televisor(`Pili`, 50);


tele.apagar();

tele.encender()
tele.cambiarCanal(50);
tele.encender();
tele.apagar();
tele.apagar();
tele.apagar();
tele.encender();
tele.encender();
tele.encender();
tele.apagar();
tele.encender();


console.log(tele.toString())