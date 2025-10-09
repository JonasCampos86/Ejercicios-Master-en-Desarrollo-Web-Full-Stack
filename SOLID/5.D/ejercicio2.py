from abc import ABC , abstractmethod

#Definir abstracciones del servicio de almacenamiento de productos
class AlmacenamientoProducto(ABC):
    @abstractmethod
    def agregar_producto(self,nombre:str,cantidad:int):
        pass
    @abstractmethod
    def obtener_stock(self,nombre:str)->int:
        pass

#implemantacion de almacenamiento de productos
#metodo de bajo nivel-->detallado
class MemoriaAlmacenamientoProducto(AlmacenamientoProducto):
    def __init__(self):
        self.inventario = {}
    
    def agregar_producto(self, nombre:str, cantidad:int):
        if nombre in self.inventario:
            self.inventario[nombre] += cantidad
        else:
            self.inventario[nombre]= cantidad

    def obtener_stock(self,nombre:str)->int:
        return self.inventario.get(nombre, 0)


#metodo de alto nivel
#logica de negocias

class GestorProductos:
    def __init__(self, almacenamiento:AlmacenamientoProducto):
        self.almacenamiento = almacenamiento

    def agregar_producto(self, nombre: str, cantidad:int):
        self.almacenamiento.agregar_producto(nombre,cantidad)
        print(f"Producto {nombre} en la cantidad de {cantidad} a sido añadido al stock")
    
    def obtener_stock (self,nombre:str):
        stock =self.almacenamiento.obtener_stock(nombre)
        print(f"El stock de {nombre}:{stock}")
        return stock
    
almacenamiento_memoria = MemoriaAlmacenamientoProducto()
gestor_productos = GestorProductos(almacenamiento_memoria)
gestor_productos.agregar_producto("pegamento", 5)
gestor_productos.agregar_producto("folio", 100)
gestor_productos.obtener_stock("pegamento")
