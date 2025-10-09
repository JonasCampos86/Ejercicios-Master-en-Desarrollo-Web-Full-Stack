import seaborn as sns
import matplotlib.pyplot as plt


datos=sns.load_dataset("iris")
#print(data)

#Grafico de dispersión

sns.scatterplot(data=datos, x = "sepal_length", y = "sepal_width")
plt.title("Grafico de dispersión de longitud del sepalo vs ancho")
plt.xlabel = "sepal_length"
plt.ylabel = "sepal_width"
plt.show()

#Grafico de barras

sns.barplot(data=datos, x = "species", y = "sepal_length")
plt.title("Grafico de barras  longitud del sepalo por la especie")
plt.xlabel="Specie"
plt.ylabel="sepal_length"
plt.show()

#Histograma

sns.histplot(datos["sepal_length"],bins=5)#bins = numero de barras en los que quieras dividir la grafica
plt.title("Histograma de la longitud del sepalo")
plt.xlabel = "Longitud del sepalo"
plt.ylabel = "Número de repeticiones"
plt.show()

#Grafico de violin

sns.violinplot(data=datos,x="species",y="sepal_length")
plt.title("Grafica de violin")
plt.show()

#Como hacer un heatmap

sns.pairplot(data=datos,hue="species")
plt.show()

#heatmap

corr=datos.corr()
sns.heatmap(corr,annot=True,cmap="coolwarm")
plt.title("Mapa de calor de las correlaciones")
plt.show()
