import pandas as pd
import numpy as np

df = pd.read_csv(
    r"C:\Users\PC\Ejercicios_curso_conquer\Ejercicios_Python_Avanzado\Estadistica_basica\salary_data.csv",
    sep=";")

#Rango con Pandas
Rango = df.income.max()-df.income.min()
print(Rango)

#Rango con Numpy
rango_numpy=np.max(df.age)-np.min(df.age)
print(rango_numpy)

#Varianza con Pandas
#varianza =df.age.var()
#print("Varianza Edad", varianza)

#varianza con numpy
#varianza_np=np.var(df.age)
#print("Varianza Edad", varianza_np)

print("VARIANZAS POBLACIONALES")
#Varianza con pandas
Varianza = df.age.var(ddof=0)
print("Varianza Edad", Varianza)
#Varianza con numpy
Varianza_np = np.var(df.age,ddof=0)
print("Varianza_np Edad", Varianza_np)

#Desviación standard
#con Pandas
ds = df.age.std()
print("Desviacion Std",ds)

#con Numpy
ds_np = np.std(df.age)
print("Desviacion std_np",ds_np)

