import numpy as np

#1. Crea un array con 15 números enteros aleatorios entre 1 y 100
array_aleatorio= np.random.randint(1,101,15)
print(array_aleatorio)


#2. Multiplica todos los elementos del array usando un bucle y después usando un
#método de numpy. Compara los resultados
resultado = 0
for numero in array_aleatorio:
    resutado = resultado * numero
#print(resultado)
multi_numpay = np.prod(array_aleatorio)
#print(multi_numpay)

#3. Crea otro array con 15 números decimales aleatorios entre 0 y 
array_aleatorio_decimales= np.random.random(15)
print(array_aleatorio_decimales)

#4. Suma los elementos de ambos arrays elementos por elemento. Resuélvelo usando un
#   operador y después con una función de numpy
#(Pista: busca en google que función de numpy hace esto)
suma_operador = array_aleatorio+array_aleatorio_decimales 
print(suma_operador)
suma_funcion = np.add(array_aleatorio,array_aleatorio_decimales)
print(suma_funcion)
#5. Ahora réstalos. Resuélvelo usando un operador y después con una función de numpy
#(Pista: busca en google que función de numpy hace esto)
resta_operador = array_aleatorio-array_aleatorio_decimales
print(resta_operador)
resta_funcion = np.subtract(array_aleatorio,array_aleatorio_decimales)
print(resta_funcion)


#6. Haz lo mismo con la multiplicación elemento por elemento. Usa un operador y
#después con una función de numpy
#(Pista: busca en google que función de numpy hace esto)
multi_operador = array_aleatorio*array_aleatorio_decimales
print(multi_operador)
multi_funcion = np.multiply(array_aleatorio,array_aleatorio_decimales)
print(multi_funcion)


#7. Encuentra el valor más alto del primer array que has creado.
print(f"El  valor mas alto es {np.max(array_aleatorio)}")
#8. Calcula la media (mean), la mediana (median) y al deviación estandar (standard
#deviation) de los arrays (Nota: No nos importa el significado matemático de estos
#valores, lo importante es que encuentres que función de numpy necesitas. Puedes
#hacer la búsqueda en castellano o en inglés, aunque en inglés muchas veces suele
#haber más resultados).
print(f"la media es :{np.mean(array_aleatorio)}")
print(f"La median es: {np.median(array_aleatorio)}")
print(f"la deviacion estandar es: {np.std(array_aleatorio)}")




