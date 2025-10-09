import numpy as np
'''






'''

#----------1. Crea un array_1 lleno ceros con una longitud de 8 elementos.
array_1 = np.zeros(8)
#----------2. Haz que todos los elementos de este array sean igual a 2
array_1[:]=2
#print(array_1)
#----------3. Crea un array_2 que contenga todos los números pares del 1 al 10.
array_2 = np.arange(2,11,2)
#print(array_2)
#----------4. Suma todos los elementos del array_2 usando un bucle y después usando un método
#              de numpy. Compara los resultados
resultado=0
for numero in array_2:
    resultado= resultado +numero
#print(f"El resultado de la suma en con un bucle es: {resultado}")
#print(f"El resultado de la suma con un metodeo de numpy es : {array_2.sum()}")
#----------5. Revierte array_2 y guárdalo en una variable independiente.
array_2_reverse = array_2[::-1].copy()

#----------6. Encuentra los elementos comunes entre array_1 y array_2 y entre array_2 y
#              array_2_revertido (Pista: Investiga el uso de intersect1d() de numpy)
print(array_1)
print(array_2)
print(array_2_reverse)

comunes1y2 = np.intersect1d(array_1,array_2)
print(comunes1y2)
comunes2y3 =np.intersect1d(array_2,array_2_reverse)
print(comunes2y3)
# 7. Crea un arrays lleno de 1s con una longitud dada por el usuario
longitud = int(input("pon la longitud del array: "))
array_usuario = np.ones(longitud)
print(array_usuario)



