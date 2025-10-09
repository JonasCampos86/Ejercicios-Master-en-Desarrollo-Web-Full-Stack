'''
PALABRAS COMUNES
Encuentra o crea algunos textos que te gustaría analizar (puedes visitar
Project Gutenberg (http://gutenberg.org/) o crear textos usando ChatGPT).
Copia el texto sin formato desde tu navegador en un archivo de texto en tu
computadora (o descarga los archivos). Averigua cuántas veces aparece una
palabra o frase en el texto (puedes usar el método count()).
'''
#contar el numero de veces que aparece una palabra a tu eleccion en un texto
def contar_palabras (filename,palabra):
    """ Con esto contamos el numero de 
        veces que aparce una palabra"""
    #abrimos el texto
    with open(filename,"r") as file:
        #guardamo sel texto en una variable
        texto = file.read()
        #contamos vas veces que aparce la palabra
        count = texto.count(palabra)
        return count

#Ejemplo de uso
filename ="texto.txt"
palabra = "jonas"
apariciones = contar_palabras(filename,palabra)

print(f"La palabra {palabra} aparece {apariciones} veces")






