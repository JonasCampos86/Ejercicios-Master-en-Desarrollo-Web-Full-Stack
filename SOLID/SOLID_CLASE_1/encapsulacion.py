#Atributos privados
#class Ejemplo:
#    def __init__(self):
#        self.__atributo_privado = "Carla"
#    def mostrar_atributo(self):
#        print(f"El nombre puede ser Tatiana o {self.__atributo_privado}")

#valor = Ejemplo()
#print(valor.__atributo_privado)asi te daria AttributeError
#valor.mostrar_atributo()

#Atributo protegido
class Ejemplo:
    def __init__(self):
        self._atributo_protegido = 20

    def get_atributo(self):
        print(self._atributo_protegido)

valor = Ejemplo()
print(valor._atributo_protegido)#esta no es la manera correcta/ se puede conseguir
valor.get_atributo()