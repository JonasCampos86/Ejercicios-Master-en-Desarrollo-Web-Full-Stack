class Ejemplo:
    def __init__(self):
        self.__atributo_privado = 40
    def getter(self):
        return self.__atributo_privado
    def setter(self,valor):
        if valor>0:
            self.__atributo_privado = valor
        else:
            print("El valos tiene que ser positivo")

ejemplo = Ejemplo()
print(ejemplo.getter())
ejemplo.setter(3)
print(ejemplo.getter())