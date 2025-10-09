class vehiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
        self.encendido = False
        self.velocidad = 0
    
    def mostrar_vehiculo(self):
        print(f"Este  coche es un {self.marca} {self.modelo}")
    
    def encender(self):
        self.encendido= True
        print(f"El vehiculo {self.marca} {self.modelo} esta encendido")
    
    def apagado(self):
        self.encendido= False
        print(f"El vehiculo {self.marca} {self.modelo} esta apagado")

    def acelerar(self, aumento):
        if self.encendido:
            self.velocidad += aumento
            print(f"El vehiculo {self.marca} {self.modelo} esta acelerando a {self.velocidad} km/h")
        else:
            print(f"El vehiculo {self.marca} {self.modelo} esta apagado, encienda el vehiculo")
    
    def frenar (self, disminucion):
        if self.encendido:
            if self.velocidad - disminucion > 0:
                self.velocidad-=disminucion
                print(f"El vehiculo {self.marca} {self.modelo} esta frenando a {self.velocidad} km/h")
            else:
                self.velocidad = 0
                print("El vehiculo ya esta parado")
        else:
            print("El vehiculo no puede frenar, encienda el vehiculo")

vehiculo1= vehiculo("Ford","Focus")
vehiculo2= vehiculo("Peugeot","208")
vehiculo1.mostrar_vehiculo()
vehiculo1.encender()
vehiculo1.acelerar(120)
vehiculo1.frenar(119)
vehiculo1.apagado()



        



    