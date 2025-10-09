'''
Crea un script que pida al usuario una palabra y luego muestre por pantalla una a una las letras
de la palabra introducida empezando por la última.
'''
#Pedir una palabra 
palabra = input("Escribe una palabra y te la pongo del reves jijijiji ")
#ponemos la palabra del reves
#  palabra[::-1]
#Bucle para mostra la palabra del reves

for letra in palabra[::-1]:
    print(letra)





