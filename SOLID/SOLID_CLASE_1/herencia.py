class Vehiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

    def mostrar_vehiculo(self):
        print(f"Este  coche es un {self.marca} {self.modelo}")

class Automovil(Vehiculo):
    def __init__(self, marca, modelo, puertas):
        super().__init__(marca, modelo)
        self.puertas = puertas

    def describir(self):
        print(f"Este  automovil es un {self.marca} {self.modelo} con {self.puertas} puertas")

class Camion(Vehiculo):
    def __init__(self, marca, modelo, puertas, carga ):
        super().__init__(marca, modelo)
        self.puertas = puertas
        self.carga = carga
    def describir(self):
        print(f"Este camión es un {self.marca} {self.modelo} con {self.puertas} puertas y una capacidad de {self.carga} kg")

vehiculo1 = Automovil("Ford","Focus",5)
vehiculo2 = Camion("Scania","F180",3,2500)

vehiculo1.describir()
vehiculo2.describir()
