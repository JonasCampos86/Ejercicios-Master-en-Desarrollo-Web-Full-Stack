
class Calculadora{
    #resultado;

    constructor(){
        this.#resultado = 0;
    }
    
    obtenerResultado(){
        return this.#resultado;
    }

    reiniciar(){
        this.#resultado = 0;
    }

    #validarNumero(numero){
        if(typeof numero !== "number" || Number.isNaN(numero)){
            console.error (`No se ha introducido un número válido`);
            return false;
        }
        return true
    }

    sumar(numero){
        if(!this.#validarNumero(numero)) return;
        this.#resultado+=numero
    }

    restar(numero){
        if(!this.#validarNumero(numero)) return;
        this.#resultado-=numero
    }

    multiplicar(numero){
        if(!this.#validarNumero(numero)) return;
        this.#resultado*=numero
    }

    dividir(numero){
        if(!this.#validarNumero(numero)) return;

        if(numero === 0){
            console.error("No se puede dividir entre 0");
            return;
        }
        this.#resultado/=numero
    }
}

let calc = new Calculadora();
console.log(calc.obtenerResultado());
calc.sumar(5);
console.log(calc.obtenerResultado());
calc.restar(`h`);
calc.dividir(0);
calc.multiplicar(5);
console.log(calc.obtenerResultado());
