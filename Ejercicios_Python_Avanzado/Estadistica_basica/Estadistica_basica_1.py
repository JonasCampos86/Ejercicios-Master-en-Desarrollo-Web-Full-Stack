import pandas as pd
import numpy as np






def calculo(vector):
    #media
    suma=0
    n=0

    for elemento in vector:
        suma += elemento
        n+=1

    media = (1/n)*suma
    
    print(media)

    #Alternativas

    suma = sum(vector)
    n=len(vector)
    media_2 =(1/n)*suma
    print(media_2)

    #Moda
    moda = 0
    repeticiones = 0

    diccionario ={}
    
    for elemento in vector:
        if not diccionario.get(elemento):
            diccionario[elemento]=1 #si el elemento no esta en el dic lo añade
        else:
            diccionario[elemento]+1 #si el elemento esta le suma 1
        
        if diccionario[elemento]>repeticiones:
            repeticiones = diccionario[elemento]
            moda=elemento
        
    print("Moda es:", moda)

    #Mediana

    vector.sort(reverse=False) # oredenar de menos a mayor

    punto_medio = int(len(vector)/2)
    if len(vector) % 2 ==0:
        
        mediana = (vector[punto_medio] + vector[punto_medio+1])/2
    else:

        mediana = vector[punto_medio]
    
    print("La media es:",mediana)




vector = [1,2,3,4,5,6,7,8,9,8,6,5,7,5] 

#calculo(vector)

# CON PANDAS
df = pd.read_csv(
    r"C:\Users\PC\Ejercicios_curso_conquer\Ejercicios_Python_Avanzado\Estadistica_basica\salary_data.csv",
    sep=";")

#cabecera con Pandas
#print(df.head())

#media con Pandas
print(df.age.mean())
#moda con Pandas
print(df.age.mode())

# CON NUMPY

v=np.array(vector)
#media con Numpy
print(v.mean())
#moda con Pandas no se puede resolver

