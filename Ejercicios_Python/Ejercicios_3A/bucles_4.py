'''
Crea un programa en el que se pregunte al usuario por una frase y una letra, y muestre por
pantalla el número de veces que aparece la letra en la frase.
'''

#---- Pedir una frase
frase = input("Escribe una frase porfis ")
#---- Pedir una letra para ver el número de veces que aparece
letra = input("Dime la letra que necesitas que busque ")
#---- un bucle que recorra letra letra la frase 
num = 0
for l in frase:
    #Contamos le número de veces que aparece la letra
    if l == letra:
        num = num + 1
#---- Decimos el número de veces que aparece la letra que nos ha dicho
print("La letra que buscas aparce ",num ,"veces.")






