#importamos las librerias necesarias
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import poisson

#Simular el proceso de dropout

#parametros
num_neuronas = 100
lambda_poisson = 0.5
num_iteraciones = 1000

#simular proceso de apagado de neuronas

def simular_dropout(num_neuronas,lambda_poisson):
    
    return poisson.rvs(mu=lambda_poisson,size=num_neuronas)

neuronas_off_counts = [] #Cantidad de neuronas apagadas en cada iteración

for _ in range(num_iteraciones):

    dropout_mask = simular_dropout(num_neuronas,lambda_poisson)
    #print(dropout_mask)
    num_neuronas_off=np.sum(dropout_mask)
    neuronas_off_counts.append(num_neuronas_off)

#calculamos la media de neuronas desacctivadas

mean_neuronas_off = np.mean(neuronas_off_counts)
print(f"Número medio de neuronas desactivas en {num_iteraciones} son {mean_neuronas_off:.2f}")

#Hacemos el histograma de nuestro número medio de neuronas deactivadas

plt.hist(neuronas_off_counts,bins=20,density=True,alpha=0.6,color="g",edgecolor="black")
plt.title("Distribución de neuronas desactivadas en 1000 iteraciones")
plt.xlabel("Número de neurnas desactivadas")
plt.ylabel("Frecuencia")
plt.show()
