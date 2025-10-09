#Importamos las librerias necesarias
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from scipy.stats import pearsonr, spearmanr

# Datos de ejemplo
X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)  # Variable independiente (reshape para convertirlo en una matriz columna)
Y = np.array([2, 3, 5, 7, 11])  # Variable dependiente

#Ajustar el modelo

modelo = LinearRegression()

modelo.fit(X,Y)

Y_pred = modelo.predict(X)

a = modelo.intercept_
b = modelo.coef_[0]

print(f"Intersección (a):{a}")
print(f"Pendiente (b): {b}")

#calculo de la correlacion de Pearson

correlacion_pearson, _ =pearsonr(X.flatten(),Y)  

#Calcular el coeficiente de Spearman

correlacion_spearman = spearmanr(X.flatten(),Y)

print(f"Coeficiente de correlación de Pearson: {correlacion_pearson}")
print(f"Coeficiente de correlación de Spearman: {correlacion_spearman}")

#Hacemos el grafico

plt.scatter(X,Y,color="blue") #Datos originales
plt.plot(X,Y_pred,color="red")
plt.xlabel("X")
plt.ylabel("Y")
plt.title("Regresión lineal")
plt.show()
