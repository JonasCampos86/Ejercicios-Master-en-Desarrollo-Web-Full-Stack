import numpy as np

productos = [
    ["Camisa", 25.99, "ropa"],
    ["Pantalón", 39.90, "ropa"],
    ["Zapatos", 59.99, "calzado"],
    ["Reloj", 120.00, "accesorio"],
    ["Gorra", 15.00, "accesorio"],
    ["Zapatillas", 89.99, "calzado"],
    ["Sudadera", 45.50, "ropa"]
]
nombre = [producto[0] for producto in  productos]
precios = [producto[1] for producto in productos]
categorias = [producto[2]for producto in productos]
#-------- Calcular el precio medio de todos los productos
valor_medio = np.mean(precios)
print(valor_medio)

#---------Contar cuántos productos hay por categoría.
categoria , conteos = np.unique(categorias,return_counts=True)

for i in range(len(categoria)):
    print(f"De {categoria[i]} hay {conteos[i]} productos ")

#---------- Encontrar el producto más caro y el más barato.
#for i in range(len(precios)):
indice_valor_maximo = np.argmax(precios)
indice_valor_minimo = np.argmin(precios)
print(f"El producto más caro es {nombre[indice_valor_maximo]} con un precio de {precios[indice_valor_maximo]} €")
print(f"El producto más barato es {nombre[indice_valor_minimo]} con un precio de {precios[indice_valor_minimo]} €")
#---------------Calcular el precio medio por categoría (ropa, calzado, accesorio).
categorias=np.array(categorias)
precios=np.array(precios)

for i in range(len(categoria)):
    print("El precio medio del ",categoria[i],"es de", np.mean(precios[categorias==categoria[i]]),"€")

#------- Filtrar y mostrar todos los productos que cuesten más de 50 €.
arg = 50

indices_productos_caros = np.where(precios> arg)[0]
for i in indices_productos_caros:
    print(f"El producto {nombre[i]} cuesta {precios[i]} €")
#-------Mostrar el número total de productos y su valor total en stock (suma de precios).
total_productos = np.size(nombre)
print(f"La cantidad de productos total es :{total_productos}")
valor_total = np.sum(precios)
print(f"El valor total del stock es de : {valor_total} €")
#-------🔢 Ordenar la lista de productos por precio de menor a mayor.
# ordenamos los precios de menos a mayor 
indices_precios_desc = np.argsort(precios)
productos_ordenados =[nombre[i]for i in indices_precios_desc]
print("Los productos ordenados con precio de menor a mayor son: ")

for producto in productos_ordenados:
    print(producto)
#-------🧾 Mostrar todos los productos con su nombre en mayúsculas y su precio con 2 decimales.
print("La lista de  procuctos y sus precios")

for i in range(len(productos)):
    print(f"{nombre[i].upper()} y su precio es de {precios[i]:.2f}€")

#------🧪 Bonus: Buscar productos por palabra clave introducida por el usuario.
#pedimos al usuario que introduzca la prenda que quiere
'''
mas_busquedas = "si"
while mas_busquedas == "si":
    eleccion_usuario=input("Dime que producto necesitas: " ).title()
    encontrado=False
    for i in range(len(productos)):

        if productos[i][0]== eleccion_usuario:
            print(f"El producto que as seleccionado es : {productos[i][0]}y tiene un valor de: {precios[i]}")
            encontrado=True
    if not encontrado:
            print(f"El producto {eleccion_usuario}  no se encuentra en nuestro catalogo")
    mas_busquedas=input(print("Quieres seguir buscando: si/no " ))

'''

mas_busquedas = "si"
while mas_busquedas == "si":
    eleccion_usuario = input("Dime qué producto necesitas: ").title()
    encontrado = False
    for i in range(len(productos)):
        if productos[i][0] == eleccion_usuario:
            print(f"El producto que has seleccionado es: {productos[i][0]} y tiene un valor de: {precios[i]} €")
            encontrado = True
    if not encontrado:
        print(f"El producto {eleccion_usuario} no se encuentra en nuestro catálogo")
    mas_busquedas = input("¿Quieres seguir buscando? si/no: ")



























    
'''
📊 Calcular el precio medio de todos los productos.

📈 Contar cuántos productos hay por categoría.

🔝 Encontrar el producto más caro y el más barato.

🧮 Calcular el precio medio por categoría (ropa, calzado, accesorio).

🔍 Filtrar y mostrar todos los productos que cuesten más de 50€.

📦 Mostrar el número total de productos y su valor total en stock (suma de precios).

🗃️ Crear un diccionario con categorías como claves y listas de productos como valores.





🧪 Bonus: Buscar productos por palabra clave introducida por el usuario.
'''


