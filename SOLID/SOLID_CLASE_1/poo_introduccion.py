class Empleados():
    numero_empleados = 0 #Atributo de clase

    #Creacion del constructor
    #nombre, cargo y salario--> atributos de instancia
    def __init__(self, nombre, cargo, salario):
        #DATOS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        self.nombre = nombre
        self.cargo = cargo
        self.salario = salario
        Empleados.numero_empleados += 1 #incrementa el número de empleados cuando un empleado se registre
        #COMPORTAMIENTO \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    def presentarse(self):
        print(f"Hola soy {self.nombre} y mi cargo es {self.cargo}.")
    
    def aumentar_salario(self, porcentaje):
        self.salario *= (1+porcentaje/100)
        print(f"Nuevo salario de {self.nombre}:{self.salario}")
    
    @classmethod
    def desde_string(cls, datos_empleado):#metodo de clase
        nombre, cargo, salario = datos_empleado.split(",")#el .split es el separador.
        return cls(nombre, cargo, float(salario))
    @staticmethod
    def es_fiesta(dia):
        festivos = [1, 10, 27]
        return dia in festivos
    
#INSTANCIAR UNA CLASE
#Utilizamos los metodos de instancia
empleado1 = Empleados("Jonás Campos","Gerente",50000)
empleado2 = Empleados("Irene Exposito","Enfermera",43000)
#Utilizamos el metod de clase
empleado3 = Empleados.desde_string("Lucas Campos,Niño,30000")
empleado4 = Empleados.desde_string("Iris Campos,Niña,31000")
#Utilizar los metodos de instancia

empleado1.presentarse()
#empleado2.presentarse()
#empleado3.presentarse()
empleado1.aumentar_salario(5)
#Utilizamos metodo estatico
print(Empleados.es_fiesta(1))

#Acecer al atributo de clase
print(Empleados.numero_empleados)