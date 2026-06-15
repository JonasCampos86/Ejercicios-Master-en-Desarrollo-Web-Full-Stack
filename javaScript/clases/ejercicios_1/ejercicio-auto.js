
class Auto{
    #encendido = false;
    #velocidad = 0 ;
    #marca;
    #modelo;
    #patente;

    constructor(marca, modelo, patente){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#patente = patente;
    }

    arrancar(){
        if(this.#encendido === false){
            console.log(`${this.#modelo} encendido BRUM BRUM`)
            return this.#encendido = true;
        }else{
            console.log(`El ${this.#modelo} ya esta arrancado`)
        }
       
    }

    apagar(){
        if(this.#encendido === false){
            console.log(`El ${this.#modelo} ya esta apagado`)
           
        }
        else if(this.#encendido === true && this.#velocidad === 0){
            console.log(`${this.#modelo} se esta apagando. CHAO`)
            return this.#encendido = false;
        }else{
            console.log(`El ${this.#modelo} no se puede apagar si la velocidad es superior a 0 km/h`)
        }
        
    }

    acelerar(){
        if(this.#encendido === true){
            this.#velocidad += 10;
            console.log(`Acelerando a ${this.#velocidad} BRUUUUUUUMMMMMM PA PA PA `)
            return this.#velocidad
        }else{
            console.log(`Si arrancas el ${this.#modelo} podras acelerar.`)
        }
       
    }

    desacelerar(){
        if (this.#encendido === true && this.#velocidad > 0){
            this.#velocidad -= 10;
            console.log(`Desacelerando a ${this.#velocidad} `)
            return this.#velocidad
        }else if(this.#encendido === false){
            console.log(`Teniendo el coche apagado no puedes hacer nada`)
        }else {
            console.log(`No puedes bajar mas la velocidad , ya estas a 0km/h`)
        }
        
    }

    toString(){
        return `${this.#marca}, ${this.#modelo}, ${this.#patente}`;
    }

    informacionActual(){
        console.log(`
            Marca: ${this.#marca}
            Modelo: ${this.#modelo}
            Patente: ${this.#patente}
            Encendido: ${this.#encendido ? "Sí" : "No"}
            Velocida:${this.#velocidad} `)
    }
}

const miCoche = new Auto("Ford","Focus ST ranchera", "2hslsma77qwejkqwseojh");
miCoche.arrancar();
miCoche.acelerar();
miCoche.informacionActual();
miCoche.acelerar();
miCoche.apagar();
