'''
Crea un script que dado un número y una potencia compruebe si ese numero elevado a esa
potencia es par o impar. (Pista: los números pares tiene resto = 0 al dividirlos por 2)


'''

#pedimos un número y por cuanto lo quiere elevar(potencia)
num = int(input("Dime un número del 1 al 10" ))
poten = int(input("Dime a que número lo quieres elevado del 2 al 6 "))
#hacemos la cuenta de la potencia
resultado = num ** poten
# ahora comprobamos en un if statemen si es par o impar

if resultado % 2 == 0:
    print("El resutado es un número par")
else:
    print("El resultado es un número impar")









