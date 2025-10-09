'''
Imagina que estás desarrollando un sistema de reservas de vuelos para una
aerolínea. Crea un sistema de clases que permita a los usuarios realizar
reservas de vuelos. Aquí tienes una posible estructura:
- Clase base: `Vuelo`
- Atributos: número de vuelo, origen, destino, capacidad máxima, lista de
pasajeros
- Métodos: agregar pasajero, verificar disponibilidad de asientos
- Clase derivada: `VueloEspecial` (hereda de `Vuelo`)
- Atributos adicionales: motivo del vuelo especial (por ejemplo, vacaciones,
trabajo)
Resuelve el problema creando instancias de estas clases y realizando
reservas para diferentes vuelos y tipos de vuelos especiales.
'''

#Creamos la clase principal

class Vuelo:
    def __init__(self,numero,origen,destino,cap_maxima):
        self.numero = numero
        self.origen = origen
        self.destino = destino
        self.cap_maxima = cap_maxima
        self.list_pasajeros = []

    #Método para saber la disponibilidad del asientos
    def disponibilidad_de_asientos(self):
        return(self.cap_maxima - len(self.list_pasajeros))

    #Método para añadir pasajero al vuelo
    def agregar_pasajero(self,pasajero):
        if self.disponibilidad_de_asientos()>0:
           self.list_pasajeros.append(pasajero)
           print(f"Pasajero {pasajero} agregado al vuelo {self.numero} correctamente")
        else:
            print("No hay asientos disponibbles en este vuelo ")

    #Método para saber la disponibilidad del asientos
    def disponibilidad_de_asientos(self):
        return(self.cap_maxima - len(self.list_pasajeros))
        
class VueloEspecial(Vuelo):
    def __init__(self, numero, origen, destino, cap_maxima,motivo):
        super().__init__(numero, origen, destino, cap_maxima)
        self.motivo = motivo

#Ejemplo de uso

vuelo_regular = Vuelo("UA30","NY","MAD",150)
vuelo_regular.agregar_pasajero("Jonás")
print("Asientos disponibles:",vuelo_regular.disponibilidad_de_asientos())
vuelo_especial = VueloEspecial("UA31","MIL","CDM",100,"Vacaciones")
vuelo_especial.agregar_pasajero("Irene")
print("Asientos disponibles:",vuelo_especial.disponibilidad_de_asientos())
print("El motivo del viaje es:",vuelo_especial.motivo)
