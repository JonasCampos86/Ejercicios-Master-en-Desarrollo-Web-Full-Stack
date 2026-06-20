class Operacion{
    #descripcion;
    #cantidad;
    #fecha;
    #categoria;
    #tipo;
    constructor(desc, cantidad, fecha, categoria, tipo ){
        this.#descripcion=this.#validarDescripcion(desc);
        this.#cantidad=this.#validarCantidad(cantidad);
        this.#fecha=this.#validarFecha(fecha);
        this.#categoria = this.#validarCategoria(categoria);
        this.#tipo = this.#validarTipo(tipo); 
    }
    //getters
    get descripcion(){
        return this.#descripcion;
    }
    get cantidad(){
        return this.#cantidad;
    }
    get fecha(){
        return this.#fecha;
    }
    get categoria(){
        return this.#categoria;
    }
    get tipo(){
        return this.#tipo;
    }
    //validaciones
    #validarDescripcion(desc){
        if (typeof(desc)!=="string"){
            throw new Error("La descripcion debe ser un texto");
            
        }
        if(desc.trim().length === 0 ){
            throw new Error("La descripcion no puede estar vacía");
            
        }
        return desc.trim()
    }
    #validarCantidad(cantidad){
        if (typeof(cantidad)!=="number"){
            throw new Error("La cantidad tiene que ser un numero");
        }
        if (Number.isNaN(cantidad)){
            throw new Error("Introduce una cantidad válida");
        }
        if (cantidad <= 0){
            throw new Error("La cantidad tiene no puede ser menos de 0");
        }
        return cantidad
    }
    #validarFecha(fecha){
        if (!(fecha instanceof Date)) {
        throw new Error("La fecha debe ser un objeto Date");
        }
        if(Number.isNaN(fecha.getTime())){
            throw new Error("La fecha tiene q ser válida");
        }
        return fecha
    }
    #validarCategoria(categoria){
        if (typeof(categoria)!=="string"){
            throw new Error("La categoria debe ser un texto");    
        }
        if(categoria.trim().length === 0 ){
            throw new Error("La categoria no puede estar vacía");    
        }
        return categoria.trim()
    }
    #validarTipo(tipo){
        if (typeof(tipo)!=="string"){
            throw new Error("El tipo debe ser texto");
        }
        const tipoNormalizado = tipo.trim().toUpperCase();

        switch(tipoNormalizado){
            case `GASTO`:
                return tipoNormalizado;  
            case `GANANCIA`:
                return tipoNormalizado; 
            default:
                throw new Error("No has introducido un tipo valido.");
        }
    }
}
class BilleteraVirtual{
    #monto;
    #operaciones=[];
    constructor(saldo){
        this.#monto += saldo;

    }
    //metodos PRIVADOS
    #validarOperacion(operacion){
       if( operacion instanceof Operacion){
       }else{
        throw new Error("No añadiste un Operacion valida");
       }   
    }
    #calcularBalance(operacion){
        return operacion.reduce((acc , ticket)=>{
            if (ticket.tipo === `GANANCIA`){
            return acc + ticket.cantidad
            }else{
            return acc - ticket.cantidad
        }
    },0);
    }
    agregarOperacion(operacion){
        this.#validarOperacion(operacion);
        switch (operacion.tipo) {
            case `GASTO`:
               this.#monto-=operacion.cantidad;
               break;
                
            case`GANANCIA`:
               this.#monto+=operacion.cantidad;
               break;
        
            default:
               throw new Error(`Algo raro pasa. Avisar al torpe del progamador.`);
               
                
        }
        this.#operaciones.push(operacion);
        console.log(`Operacion ${operacion} agregada con exito`);
        
    }
    // obtenerGastosPorMes(mes) devuelve un array con todos los gastos hechos en mes
    obtenerGastosPorMes(mes){
        const gastosMesFiltrado = this.#operaciones.filter(ticket => ticket.tipo === `GASTO`&& ticket.fecha.getMonth()+1 === mes);
        return gastosMesFiltrado; 
    }
    // obtenerGanaciasPorMes(mes) devuelve un array con todas los ganancias obtenidas en mes
    obtenerGanaciasPorMes(mes){
        const gananciasMesFiltrado = this.#operaciones.filter(ticket => ticket.tipo === `GANANCIA`&& ticket.fecha.getMonth()+1 === mes);
        return gananciasMesFiltrado;    
    }
    // obtenerGastosPorCategoria(categoria) devuelve un array con todos los gastos de cierta categoria
    obtenerGastosPorCategoria(categoria){
        const gastosCategoriaFiltrados = this.#operaciones.filter(ticket => ticket.tipo === `GASTO` && ticket.categoria === categoria);
        return gastosCategoriaFiltrados;
    }
    // obtenerGanaciasPorCategoria(categoria) devuelve un array con todas las ganancias de cierta categoria
    obtenerGanaciasPorCategoria(categoria){
        const gananciasCategoriaFiltrados = this.#operaciones.filter(ticket => ticket.tipo === `GANANCIA` && ticket.categoria === categoria);
        return gananciasCategoriaFiltrados;
    }
    // calcularTotalPorMes(mes) devuelve el total resultante de restar todos los gastos hechos y sumar todas las ganancias obtenidas en un cierto mes
    calcularTotalPorMes(mes){
        const totalMesFiltrado = this.#operaciones.filter(ticket=> ticket.fecha.getMonth()+1 === mes);                                              
        return this.#calcularBalance(totalMesFiltrado)
    } 
    // calcularTotalPorCategoria(categoria) devuelve el total resultante de restar todos los gastos hechos y sumar todas las ganancias obtenidas en cierta `categoria
    calcularTotalPorCategoria(categoria){
        const totalCategoriaFiltrado = this.#operaciones.filter(ticket=> ticket.categoria === categoria );                                             
        return this.#calcularBalance(totalCategoriaFiltrado);
    }
// **obtenerMonto()** devuelve monto
    get monto(){
        return this.#monto;
    }
}
const m1 = new Operacion(`Chucherias de cumpleaños`, 150,new Date(2026,6,20),`Varios`,`GASTO`);
const m2 = new Operacion(`Salario`,1600,new Date (2026,5,6),`Sueldo de Jonás`,`GANANCIA`);
const m3 = new Operacion(`Salario`,2200,new Date (2026,6,2),`Sueldo de Irene`,`GANANCIA`);
const m4 = new Operacion(`Cena`, 50,new Date(2026,6,7),`Varios`,`GASTO`);
const m5 = new Operacion(`Comida`, 60,new Date(2026,5,8),`Varios`,`GASTO`);
const m6 = new Operacion(`Videojuegos`, 69,new Date(2026,4,9),`Varios`,`GASTO`);
const m7 = new Operacion(`Cine`, 140,new Date(2026,3,25),`Varios`,`GASTO`);
const misGastos = new BilleteraVirtual(0);
misGastos.agregarOperacion(m1);
misGastos.agregarOperacion(m2);
misGastos.agregarOperacion(m3);
misGastos.agregarOperacion(m4);
misGastos.agregarOperacion(m5);
misGastos.agregarOperacion(m6);
misGastos.agregarOperacion(m7);
console.log(misGastos.obtenerGastosPorMes(6));
console.log(misGastos.calcularTotalPorMes(6));
console.log(misGastos.obtenerGanaciasPorMes(6));
console.log(misGastos.calcularTotalPorCategoria(`Varios`))
