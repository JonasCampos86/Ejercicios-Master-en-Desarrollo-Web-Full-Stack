'''
DIVISION:
Escribir un programa que pida al usuario dos números y muestre por pantalla su división. Si el
divisor es cero el programa debe mostrar un error.

'''

#pedimos el número del dividendo
dividendo = float(input("Introduce el dividendo "))
#pedimos el número del divisor
divisor = float(input("Introduce el divisor"))
#comprobamos que el divisor no es 0 y si lo es daremos un error

if divisor==0:
    print("ERROR")
else :
    resultado = dividendo/divisor
    print("El resutado de la division es:",resultado)




