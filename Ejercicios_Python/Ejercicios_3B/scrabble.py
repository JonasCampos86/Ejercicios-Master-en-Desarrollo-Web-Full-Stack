'''
Supongamos una lista de de caracteres llamada “palabras“ que representa una mano de
Scrabble. Cada string contiene dos caracteres: el primer carácter es la letra de una ficha y el
segundo el numero que representa los puntos de la ficha. Por ejemplo, el string "A5" representa la
ficha con la letra A y un valor de 5 puntos. Crea un script que calcule el valor total de los puntos
en una mano de scrabble. El valor total será la suma de los puntos de todas las fichas de la mano
'''
#creamos la lista que nos pide

palabras = ['S1','R1','C3','B3','B3','A1','E1','L1','J8','I4']
#calcular el valos de la lista segun el valode las fichas
numeros_en_letras=[]
lista_de_numero_enteros = []
#pasar de string en string y divirle en 2 elementos cada uno
for palabra in palabras:
    numeros_en_letras.append(int(palabra[1:]))
print('el valor de la palabra es:',sum(numeros_en_letras))





