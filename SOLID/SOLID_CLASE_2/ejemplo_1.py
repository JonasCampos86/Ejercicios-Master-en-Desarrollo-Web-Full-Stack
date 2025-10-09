#Ejercicio
class Animal:
    def __init__(self, nombre):
        self.nombre = nombre
    def hacer_sonidos(self):
        pass

class Conejo(Animal):
    def hacer_sonidos(self):
       return "Hola soy un conejo"

mi_conejo = Conejo("Zanahoria")
#print(mi_conejo.nombre)
#print(mi_conejo.hacer_sonidos())

#ejemplo2---Herencia multiple
class Vehiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

    def conducir(self):
        return "BRUM BRUM"

#class Persona (Vehiculo,Animal1):
#    def __init__(self, nombre, marca, modelo):
#        Vehiculo.__init__(self, marca, modelo)
#        Animal1.__init__(self, nombre)
    
#    def presentarse(self):
#        return f"Soy {self.nombre}, y conduzco un {self.marca} {self.modelo}"
#    def hacer_sonidos(self):
#       return "Hola soy una persona"



#persona1= Persona("Jonás","Ford","Focus ST")
#print(persona1.presentarse())
#print(persona1.conducir())
#print(persona1.hacer_sonidos())

#Clases compluestas
class Persona:
    def __init__(self,nombre, vehiculo, animal):
        self.nombre = nombre
        self.vehiculo = vehiculo
        self.animal = animal
    def presentarse(self):
        return f"Soy {self. nombre} y conduzco un {self.vehiculo.marca} {self.vehiculo.modelo} y mi mascota se llama {self.animal.nombre}"
    
vehiculo1 = Vehiculo("Ford", "Focus ST")
animal1 = Animal("Thor")
persona2 = Persona("Jonás", vehiculo1,animal1)
print(persona2.presentarse())
print(persona2.vehiculo.conducir())
