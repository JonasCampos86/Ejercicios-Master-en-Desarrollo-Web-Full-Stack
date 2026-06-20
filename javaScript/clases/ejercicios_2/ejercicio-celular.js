

class celular{
    #contactos = [];// contactos (array de objetos), inicializa vacío

    #llamadas = [];// llamadas (array de strings), inicializa vacío


        // Métodos

    // agregarContacto(contacto) agrega contacto a contactos
    agregarContacto(contacto){
        
        const validarContacto = this.#contactos.some(contactoAgenda=>
           contactoAgenda.nombre === contacto.nombre ||
            contactoAgenda.numero === contacto.numero
        )

        if (validarContacto){
            console.log (`No se puede añadir un caontacto que ya existe`);
        }else{
            this.#contactos.push(contacto);
            console.log(`Contacto añadido`);
        }
        
    }
        
    
    
    // buscarPorNombre(nombre) devuelve el contacto con dicho nombre en el array contactos o undefined si no lo encuentra
    buscarPorNombre(nombre){
        const contactoNombre = this.#contactos.find(contactoAgenda => contactoAgenda.nombre === nombre);

        
            return contactoNombre
        
        

    }

    // buscarPorNumero(numero) devuelve el contacto con dicho número en el array contactos o undefined si no lo encuentra
    buscarPorNumero(numero){
        const contactoNumero = this.#contactos.find(contactoAgenda => contactoAgenda.numero === numero);

        
            return contactoNumero
        

    }

    // eliminarContacto(nombre)elimina el contacto con nombrenombredecontactos`
    eliminarContacto(nombre){
        const indiceEliminar=this.#contactos.findIndex(contactoAgenda => contactoAgenda.nombre === nombre);

        
        if(indiceEliminar === -1){
            console.log (`No se puede eliminar un contacto que no existe`);
        }
        else{
            this.#contactos.splice(indiceEliminar,1);
            console.log(`Contacto eliminado.`);
        }
    }   
    


    // llamar(nombre) si existe un contacto con nombre nombre en la lista contactos, agrega a llamadas un string que representa un registro de la misma, 
    // usando la plantilla `Llamada a ${nombre} con número ${numero} realizada
    llamar(nombre){
        const realizarLlamada = this.buscarPorNombre(nombre);

        if(realizarLlamada === undefined){
            console.log(`No se puede llamar a un contacto inexitente`);
        }
        else{
            this.#llamadas.push(`Llamada a ${realizarLlamada.nombre} con número ${realizarLlamada.numero} realizada`);
        }
    }

    


    // verContactos() devuelve un string listando todos los contactos, con sus nombres y números
    verContactos(){
        const contactosFormateados = this.#contactos.map(contacto=>`${contacto.nombre} - ${contacto.numero}`)
                                                    .join("\n");
        return contactosFormateados
    }

    


    // verHistorial() devuelve un string con la lista de llamadas realizadas
    verHistorial(){
        const llamadasFormateadas = this.#llamadas.join("\n");

        return llamadasFormateadas
    }

    
}


// Observaciones
// contacto es un objeto con las propiedades nombre y numero
// no se puede agregar un contacto si ya existe en el celular alguno con el mismo nombre o número




// Método de la clase	Lo que necesita hacer	Método que "huele" bien
// agregarContacto	    comprobar existencia	some() o find()
// buscarPorNombre	    devolver contacto	    find()
// buscarPorNumero	    devolver contacto	    find()
// eliminarContacto	    localizar posición	    findIndex()
// llamar	            obtener contacto	    find() o reutilizar buscarPorNombre()
// verContactos	       transformar objetos	     map()
// verHistorial	mostrar strings	aquí te dejo pensar 😉



const movil = new celular();

contacto ={nombre:"Jonás",numero: 123456789};
movil.agregarContacto(contacto);
contacto ={nombre:"Irene",numero: 987465231};
movil.agregarContacto(contacto);
console.log(movil.buscarPorNombre("Jonás"));
console.log(movil.buscarPorNombre("Jonas"));
console.log(movil.buscarPorNumero(987465231));
movil.llamar("Irene");
console.log(movil.verHistorial());
movil.eliminarContacto("Jonás");
console.log(movil.verContactos());

