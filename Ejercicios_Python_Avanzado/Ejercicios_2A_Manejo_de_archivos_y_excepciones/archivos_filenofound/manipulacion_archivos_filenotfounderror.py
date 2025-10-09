'''
MANIPULACION DE ARCHIVOS Y FILENOTFOUNDERROR
Crea dos archivos, cats.txt y dogs.txt. Almacena al menos tres nombres de
gatos en el primer archivo y tres nombres de perros en el segundo archivo.
Escribe un programa que intente leer estos archivos e imprima el contenido
de cada archivo en la pantalla. Envuelve tu código en un bloque try-except
para capturar el error de FileNotFoundError, e imprime un mensaje amigable
si falta algún archivo. Mueve uno de los archivos a una ubicación diferente
en tu sistema y asegúrate de que el código en el bloque except se ejecute
correctamente. Modifica tu bloque except para que falle en silencio si falta
alguno de los archivos.
'''
#comprobamos que los archivos esta disponibles
#si estan imprimir el contenido
filenames=['gatos.txt','perros.txt']

for filename in filenames:
    try:
        with open(filename,"r") as file:
            print(f"El contenido de {filename} es :")
            contenido =file.read()
            print(contenido)
    except FileNotFoundError :
       pass
       # print(f"El archivo {filename} no se encuentra disponible")










