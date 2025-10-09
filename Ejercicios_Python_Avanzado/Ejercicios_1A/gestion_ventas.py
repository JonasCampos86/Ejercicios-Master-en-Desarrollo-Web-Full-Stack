'''
GESTIÓN DE VENTAS
Crea un programa que permita gestionar las ventas de una tienda. Utiliza una
estructura de datos adecuada para almacenar la información de las ventas
(por ejemplo, una lista de diccionarios). Implementa dos funciones, una para
agregar el producto vendido con su precio y otro para mostrar las ventas de
productos con sus respectivos precios.
(La base de datos puede tener la forma [{“Producto”: producto1, “Precio”:
precio1}, {“Producto”: producto2, “Precio”: precio2}…])
'''
data_base =[]
salir=True
## funcion para agregar productos a una lista de diccionarios
def añadir_producto(producto,precio):
    
    genero={
        "producto":producto,
        "precio":precio,
    }
    
    data_base.append(genero)

    
##funcion para mostrar las ventas y el precio del producto
def mostrar_ventas():
    for genero in data_base:
        print("producto",genero["producto"])
        print("precio",genero["precio"])
        print("------")





while salir:
    print("Opciones:\n " \
      "Opción 1: Agregar producto y su precio.\n "
      "Opción 2: Mostrar listado de productos con su precio.\n" \
      "Opción 3: Finalizar programa")
    opcion=int(input("Cual eliges: "))
    if opcion==1:
        print("Agrege el producto y después su precio")
        print("Nombre del producto")
        producto=str(input( ))
        print("Precio")
        precio=float(input( ))
        añadir_producto(producto,precio)
    elif opcion ==2:
        mostrar_ventas()
    elif opcion==3:
        print("chau pescau")
        salir = False
    else:
        print("Esa opcion no se contempla en las opciones,\n" \
        "Elige otra vez sabiamente.")
        print("--------")
     





