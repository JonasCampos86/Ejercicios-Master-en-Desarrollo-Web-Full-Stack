#importamos las librerias necesarias
import numpy as np

#generamos una poblacion de ejemplo
poblacion =  np.arange(1,101) #poblacion del 1 a 100 (recordamos el n+1)

tamaño_muestra = 10

#Seleccionamos la muestra usando un muestreo simple

muestra_aleatoria_simple = np.random.choice(poblacion,tamaño_muestra,replace=False)
print("Muestra aleatoria simple:", muestra_aleatoria_simple)
