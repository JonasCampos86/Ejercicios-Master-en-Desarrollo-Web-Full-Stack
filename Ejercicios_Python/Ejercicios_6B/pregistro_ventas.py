'''
Tienes una tienda y deseas realizar un seguimiento de las ventas diarias
de tus productos. Cada producto tiene un nombre y una cantidad
vendida. Implementa un programa en Python que utilice un diccionario
para almacenar la información de las ventas. El programa debe permitir
registrar las ventas de productos, actualizar la cantidad vendida de un
producto existente y calcular el total de ventas diarias.
(Pista: puedes comenzar con un diccionario vacío e ir añadiendo cada
producto)
'''
tienda = {}
continuar = True

while continuar:
    #Añadimos valos a la tienda
    articulo=input("Nombre del articulo o salir si n o deseas añadir más: ")
    if articulo.lower()=="salir":
        continuar=False
    else:
        cantidad =int(input("Número de articulos vendidos: "))
        tienda[articulo]=cantidad
        #suma total de articulos vendidos 
        total_venta_articulos = sum(tienda.values())
        print("Número total de articulos vendidos es: ",total_venta_articulos)
    
print(tienda)  
    
    





































'''
añadirProducto = "si"
while añadirProducto =="si":
    tienda = input("Nombre del producto: ")
    tienda = input("Candidad vendida: ")
   # tienda["nombre"]=producto
    #tienda["ventas"]=venta
    añadirProducto = input("¿Desea añadir más productos? si/no ")

print(tienda)
'''
















