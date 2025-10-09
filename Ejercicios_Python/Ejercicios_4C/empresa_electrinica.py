'''
Supongamos que trabajas en una empresa que fabrica dispositivos electrónicos y quieres
analizar los datos de calidad de los componentes utilizados en la producción de dichos
dispositivos. Tienes un conjunto de datos que contiene información sobre la fecha de
producción, el tipo de componente, el lote al que pertenece el componente y la
puntuación de calidad del componente (un número entre 0 y 100).
 Quieres analizar estos datos para determinar: 
 cuál es el tipo de componente con la puntuación de calidad más alta 
 cuántos componentes se produjeron en cada mes 
 y cuál es la puntuación de calidad promedio de cada tipo de componente.
(Pista 1: Tu array de entrada puede tener la forma…)
(Pista 2: puede ser util investigar np.unique y np.argmax)

'''




import numpy as np

# Crear un array con los datos
            #Fecha producción   Tipo componente    Lote   calidad
datos = np.array([['2022-01-01', 'Componente 1', 'Lote A', 80],
                  ['2022-01-15', 'Componente 1', 'Lote B', 90],
                  ['2022-02-01', 'Componente 2', 'Lote C', 85],
                  ['2022-02-15', 'Componente 2', 'Lote D', 95],
                  ['2022-03-01', 'Componente 1', 'Lote E', 75],
                  ['2022-03-15', 'Componente 2', 'Lote F', 90]])

#--------cuál es el tipo de componente con la puntuación de calidad más alta 
componentes = datos[:,1]
calidad = datos[:,3].astype(float)
tipos_unicos =np.unique(componentes)
print(tipos_unicos)
promedios = np.zeros(len(tipos_unicos))
i=0
for componente in tipos_unicos:
    #print(componente)
    #print(calidades[componentes==componente])
    promedios[i]=np.mean(calidad[componentes==componente])
    i=i+1
#necesitamos saber en que posicion esta el mayor promedio
indice_maximo = np.argmax(promedios)
#sabiendo el indice del promedio maximo 
componente_mayor_calidad = tipos_unicos[indice_maximo]
print("El tipo de componente con  la mayor calidas es: ",componente_mayor_calidad)
#cuántos componentes se produjeron en cada mes 
fechas = datos[:,0]
meses, count = np.unique([fecha[5:7]for fecha in fechas], return_counts=True)
for i in range(len(meses)):
    print("en el mes",meses[i],"se produjeron",count[i],"componentes")
# y cuál es la puntuación de calidad promedio de cada tipo de componente.
calidad_promedio = np.zeros(len(tipos_unicos))
print(calidad_promedio)
#quit()
for i in range(len(tipos_unicos)):
    calidad_promedio[i]=  np.mean(calidad[componentes==tipos_unicos[i]])
    print("La calidad media del",tipos_unicos[i],"es de: " ,calidad_promedio[i])
