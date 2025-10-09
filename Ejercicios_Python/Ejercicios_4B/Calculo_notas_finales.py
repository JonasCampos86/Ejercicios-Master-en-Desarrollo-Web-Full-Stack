'''
Supongamos que tienes un conjunto de calificaciones de un grupo de estudiantes en un
curso. Cada estudiante tiene cuatro calificaciones: dos exámenes, un trabajo final y una
participación en clase. Quieres calcular la nota final de cada estudiante, donde los
exámenes valen un 30% cada uno, el trabajo final vale un 30% y la participación en clase
vale un 10%. Para ello, puedes usar NumPy para crear un array de 4 columnas y n filas,
donde n es el número de estudiantes. Cada columna representa una de las calificaciones
y cada fila representa un estudiante. Luego, puedes usar operaciones de NumPy para
calcular la nota final de cada estudiante y almacenarla en un nuevo array de una sola
columna.
'''
#Importar modulos
import numpy as np

calificaciones = np.array([
    [8, 7, 9, 10],
    [6, 8, 7, 9],
    [9, 9, 8, 8],
    [7, 6, 6, 7],
    [10, 9, 10, 10]])

# la nota final es 30% de examen1 , el 30% de examen 2 , el 30% de trabajofinal y el 10% la participacion
#calcular la nota final de cada estudiante
examen1 = calificaciones[:,0]
examen2 = calificaciones[:,1]
finaljob = calificaciones[:,2]
participacion = calificaciones[:,3]
#asi calculamos la nota final 
nota_final = examen1*0.3 + examen2*0.3 + finaljob*0.3 + participacion*0.1
#sacamos la nota fianal de cada estudiante

for i in range(len(nota_final)):
    print("La nota final del almumno",i+1," es de: ",nota_final[i] )








