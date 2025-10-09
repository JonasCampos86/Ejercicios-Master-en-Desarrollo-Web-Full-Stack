'''
Supongamos que estás construyendo un sistema de gestión de empleados
para una empresa. Crea un sistema de clases que maneje la información de
los empleados, incluyendo empleados a tiempo completo y empleados a
tiempo parcial.
- Clase base: `Empleado`
- Atributos: nombre, apellido, salario base

- Clase derivada: `EmpleadoTiempoCompleto` (hereda de `Empleado`)
- Atributo adicional: bono anual

- Clase derivada: `EmpleadoTiempoParcial` (hereda de `Empleado`)
- Atributo adicional: horas trabajadas por semana

Resuelve el problema creando instancias de estas clases y calculando los
salarios totales para diferentes tipos de empleados.
'''
#Creamos nuestra parentclass
class Empleado:
    def __init__(self,nombre, apellido, salario_base):
        self.nombre = nombre
        self.apellido = apellido
        self.salario_base = salario_base

#Creamos la subclass que trabaja a tiempo completo
class EmpleadoTiempoCompleto(Empleado):
    def __init__(self, nombre, apellido, salario_base,bono_anual):
        super().__init__(nombre, apellido, salario_base)        
        self.bono_anual = bono_anual

    def calcular_salario_total(self):

        return(self.salario_base + self.bono_anual)

#Creamos la subclass que trabaja a tiempo parcial
class EmpleadoTiempoParcial(Empleado):
    def __init__(self, nombre, apellido, salario_base,horas_semana):
        super().__init__(nombre, apellido, salario_base)
        self.horas_semana = horas_semana
    def salario_tiempo_parcial(self):
        salario_semanal = self.salario_base/52
        salario_hora = salario_semanal/40
        salario_total = salario_hora*self.horas_semana
        salario_total_format = salario_total
        return(round(salario_total_format*4,2))

#Ejemplo de uso

trabajador1 = EmpleadoTiempoCompleto("Jonás","Campos",30000,5000)
trabajador2 = EmpleadoTiempoParcial("Lucas","Campos",25000,20)
trabajador3 = EmpleadoTiempoCompleto("Irene","Exposito",44000,3000)
trabajador4 = EmpleadoTiempoParcial("Ines","Caro",23000,15)
print("El tragajador", trabajador2.nombre,"cobra", trabajador2.salario_tiempo_parcial(),"euros al mes")
print("El trabajador",trabajador1.nombre,"gana",trabajador1.calcular_salario_total(),"euros al año")
print("El trabajador",trabajador3.nombre,"gana",trabajador3.calcular_salario_total(),"euros al año")
print("El tragajador", trabajador4.nombre,"cobra", trabajador4.salario_tiempo_parcial(),"euros al mes")

