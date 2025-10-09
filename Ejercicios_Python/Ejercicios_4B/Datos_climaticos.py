'''
Supongamos que tienes un conjunto de datos de clima que contiene información sobre la
temperatura, la humedad y la presión atmosférica en una ciudad durante un año. Quieres
analizar estos datos para determinar cuál fue la temperatura promedio de cada mes, cuál
fue la humedad promedio y la presión atmosférica promedio durante todo el año. Para
ello, puedes usar NumPy para cargar los datos en un array de 3 columnas y n filas, donde
n es el número de mediciones. Luego, puedes usar operaciones de NumPy para filtrar los
datos por mes y calcular las medias de temperatura, humedad y presión atmosférica
correspondientes.
(Pista 1) Tu array de entrada podría
'''


import numpy as np

clima = np.array([
    [20, 70, 1009, 1],
    [18, 75, 1012, 2],
    [16, 72, 1011, 2],
    [19, 73, 1011, 2],
    [22, 65, 1008, 3],
    [25, 60, 1010, 4],
    [22, 60, 1013, 4],
    [24, 59, 1010, 4],
    [25, 61, 1011, 4],
    [28, 50, 1007, 5],
    [30, 45, 1005, 6],
    [10, 45, 1005, 6],
    [32, 40, 1002, 7],
    [30, 35, 1003, 8],
    [33, 35, 1001, 8],
    [32, 35, 1004, 8],
    [31, 45, 1003, 9],
    [28, 50, 1006, 10],
    [27, 48, 1008, 10],
    [25, 60, 1010, 11],
    [22, 70, 1011, 12]
])
temperatura = clima [:,0]
humedad = clima[:,1]
presion_atmosferica = clima[:,2]
mes = clima[:,3]
#calcula la temperatura promedio de cada mes
media_temp = np.zeros(12)
for meses in range(1,13):
    temperatura_mes = temperatura[meses==mes]
   # print(temperatura_mes)
   # print("------")
    media_temp[meses-1]= np.mean(temperatura_mes)
temperatura_media= media_temp.astype(int)
for i in range(0,12):
    print("La temperatura media del mes ",i+1,"es de: ",temperatura_media[i])
#calcula la humedad promedio del año
print(f"La humedad promedio es : {humedad.mean()}")
#calcula cual cue la presion atmosferiaca promedio del año
print(f"La presion promedio es : {presion_atmosferica.mean()}")





































