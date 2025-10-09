class Figura:
    def area(self):
        pass
class Circulo(Figura):
    def __init__(self,radio):
        self.radio= radio
    def area(self):
        return 3.14*self.radio**2

class Cuadrado(Figura):
    def __init__(self,lado):
        self.lado = lado
    def area(self):
        return self.lado**2    

def calcular_area(figura):
    return figura.area()


circulo = Circulo(5)
cuadrado = Cuadrado(10)
print(f"Area del circulo : {calcular_area(circulo)}")
print(f"Area del cuadrado : {calcular_area(cuadrado)}")