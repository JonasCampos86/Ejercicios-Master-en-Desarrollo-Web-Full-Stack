'''
a. Crea un script que muestre por pantalla el resultado de la siguiente operación aritmética:


b. Escribe un programa que lea un entero positivo, n, introducido por el usuario y después
muestre por pantalla el resultado de la siguiente operación:


c. Escribe un programa que pida al usuario dos números enteros y muestre por pantalla los
números de entrada, el cociente y el resto.
'''


operacion = ((3+2)/(2*5))**2
print(operacion)

# Parte B
# pedir el número

n = float(input("Dimen un número" ))
operacion2 = n * (n +1)/2
print("El resultado de la operación es:",operacion2)

# Parte C
# Pedir 2 número y mostrar los numero pedidos , el cociente y el resto
n1 = int(input("Escribe un número entero: "))
n2 = int(input("Escribe un número entero: "))
Cociente = n1//n2
resto = n1 % n2

print("Los número que me has dado son: ",n1,"y",n2,"y el cociente es:",Cociente,\
      " y el resto es:",resto)



