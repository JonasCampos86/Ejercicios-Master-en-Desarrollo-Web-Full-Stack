'''
TIENDA ONLINE
Crea una clase "Producto" con atributos como nombre, precio y cantidad en
stock. Luego, crea una clase "Tienda" que contenga una lista de productos
disponibles y métodos para agregar productos, mostrar el inventario y
realizar una compra.
'''
class Producto:
    def __init__(self,nombre,precio,stock):
        self.nombre = nombre
        self.precio = precio
        self.stock = stock

class Tienda:
    def __init__(self):
        self.lista_productos = []

    def agregar(self,producto):
        self.lista_productos.append(producto)
    
    def inventario(self):
        for producto in self.lista_productos:
            print(f"{producto.nombre} - Precio: {producto.precio} - Stock: {producto.stock}")
    
    def comprar(self,nombre,cantidad):
        for producto in self.lista_productos:
            if producto.nombre == nombre :
                if producto.stock >= cantidad:
                    producto.stock -= cantidad
                    print(f"Compra exitosa. Total: {producto.precio*cantidad} €.")
                else:
                    print("No hay suficiente stock")
                return
        print("Producto no encontrado")



#Ejemplo de uso
tienda = Tienda()
producto1 = Producto("Pera",2.5,100)
producto2 = Producto("Kiwy",3.95,100)
producto3 = Producto("Melon",4,100)
tienda.agregar(producto1)
tienda.agregar(producto2)
tienda.agregar(producto3)
tienda.comprar("Pera",150)
tienda.inventario()


