'''
Crea un script que pida al usuario 4 números diferentes y imprima el mayor de los cuatro por
pantalla.

'''
#Pedir los 4 numeros
print("Vas a escribir cuato númeor y te voy a decir cual es el mayor")
num1 = input("Escribe el primer número ")
num2 = input("Escribe el segundo número ")
num3 = input("EScribe el tercer número ")
num4 = input("Escribe el cuarto número ")
# buscamos el número más alto
if (num1>num2) and (num1>num3) and (num1>num4):
    print("El",num1,"es el númeor mas alto")
elif (num2>num1) and (num2>num3) and (num2>num4):
    print("El",num2,"es el númeor mas alto")
elif (num3>num1) and (num3>num2) and (num3>num4):
    print("El",num3,"es el númeor mas alto")
else :
    print("El",num4,"es el númeor mas alto")







