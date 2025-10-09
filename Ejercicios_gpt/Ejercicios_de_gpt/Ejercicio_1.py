'''

Enunciado:

Escribe una función que reciba una cadena de texto y devuelva cuántas vocales (a, e, i, o, u) contiene.

Ejemplo de entrada:
'''
#pedir al ususario una frase

frase = input("Escribe lo que quieras y te dire cuantas vocales hay: " )

#cogemos la frase y la pasamos por un bucle que añada cada vez que hay una vocal el valos 1 a la variable "vocales_totales"
vocales_totales = 0

#el bucle
for letra in frase:
    #El condicional
    if letra.lower() in "aeiou":
       
        vocales_totales = vocales_totales +1
print(vocales_totales)









