
#1. Crea una lista llamada “numeros“ que contenga los siguientes numeros enteros: [1,2,3,4,5,6,7,8,9,10].
###numeros=[1,2,3,4,5,6,7,8,9,10]
numeros = list(range(1,11))
#2. Crea una nueva lista con los números pares de la lista anterior en orden inverso
numeros_pares = list(range(10,0,-2))
print(numeros_pares)
print(numeros)
#3. Escribe un bucle que recorra la lista “numeros“ e imprima el cuadrado de cada numero por consola.
for numero in numeros:
    cuadrado = numero**2
    print(cuadrado)
#4. Intenta rehacer los pasos 2 y 3 con el menor número de lineas posible (método de compresión).
cuadrado = [numero**2 for numero in range(0,11)]
print(cuadrado)
#5. Usa un método que te devuelva el número más pequeño de la lista e imprímelo por pantalla
print(min(cuadrado))
#6. Haz lo mismo con el número más alto
print(max(cuadrado))
#7. Suma todos los elementos de la lista con y sin un bucle.
suma=0
for numero in numeros:
    suma = suma+numero
print("--------")
print(sum(numeros))
print(suma)
print(sum(cuadrado))
#8. Encuentra el índice correspondiente al número 8 en la lista original y en la lista resultante tras el punto 2.
print("-------")
indice_del_8 = numeros.index(8)
print(indice_del_8)
indice_del_8_en_pares = numeros_pares.index(8)
print(indice_del_8_en_pares)
print("-------")
print(numeros)
print(numeros_pares)



