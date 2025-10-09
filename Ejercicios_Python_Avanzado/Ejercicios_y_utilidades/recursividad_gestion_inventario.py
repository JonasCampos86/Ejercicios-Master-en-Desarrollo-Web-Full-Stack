def cantidad_producto ( inventario,codigo_producto,inicio=0,fin=None):
    if fin is None:
        fin = len(inventario)-1
    #Caso base: si el rango no es valido
    if inicio > fin:
        return 0
    
    medio = (inicio+fin)//2

    #Comparar el codigo del producto con la posicion de medio
    if inventario [medio]["codigo"] == codigo_producto:
        #caso base
        return inventario[medio]["cantidad"]
    elif inventario[medio]["codigo"]<codigo_producto:
        #El codigo va estar en el lado derecho del inventario
        return cantidad_producto(inventario,codigo_producto,medio+1,fin)
    else:
        #El codigo va esta al lado izquierdo del inventario
        return cantidad_producto(inventario,codigo_producto,inicio,medio-1)
#Daclaramo el inventario

inventario = [
    {"codigo": 101 ,"cantidad": 50},
    {"codigo": 202 ,"cantidad": 100},
    {"codigo": 303 ,"cantidad": 60},
    {"codigo": 404 ,"cantidad": 90},
    {"codigo": 505 ,"cantidad": 80},
    {"codigo": 606 ,"cantidad": 14},
    {"codigo": 707 ,"cantidad": 56},
    {"codigo": 808 ,"cantidad": 98},
    {"codigo": 909 ,"cantidad": 79},
    {"codigo": 910 ,"cantidad": 12},
    {"codigo": 920 ,"cantidad": 15},
    {"codigo": 930 ,"cantidad": 47}
]

codigo_producto = 930
cantidad_disponible = cantidad_producto(inventario,codigo_producto)
print(f"La cantidad del producto {codigo_producto} es de {cantidad_disponible}")