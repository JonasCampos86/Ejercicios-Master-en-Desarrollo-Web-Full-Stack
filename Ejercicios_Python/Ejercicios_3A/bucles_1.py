'''
Escribe un programa que pida al usuario un número entero y muestre por pantalla una
estructura como la de más abajo, donde el valor de entrada es el número de estrellas en el
centro de la estructura.
*
**
***
****
*****
****
***
**
*
'''
#Pedir un número al usuario
tamaño = int(input(("Dime un número y dibujare una piramide lateral ")))
#Bucle ascendente
for i in range(1 ,tamaño + 1):
    print("*" * i )

#Bucle descendente
for i in range(tamaño-1,0,-1):
    print("*" * i)
 

