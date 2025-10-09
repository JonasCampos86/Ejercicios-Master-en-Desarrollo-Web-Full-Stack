'''
Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.

'''
#Pedir que ingrese su contraseña
contraseña = input("Introduce la contraseña ")

#El bucle que le pegrunte por la contraseña hasta que de con la buena
peticion = ""
while contraseña != peticion :
    peticion = input("Introduzca de nuevo su contraseña ")
    if contraseña != peticion:
        print("Contraseña incorrecta, intentelo de nuevo")
print("Contraseña correcta")









