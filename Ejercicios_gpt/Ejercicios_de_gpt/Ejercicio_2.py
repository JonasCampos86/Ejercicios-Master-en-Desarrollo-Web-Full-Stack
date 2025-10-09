'''
Escribe una función que determine si un número entero positivo es primo (solo divisible por 1 y por sí mismo).

'''
#pedimos un numero al usuario
numero= int(input("Escribe un número y te digo si es primo o no :  " ))

# hacemos el condicional

if numero<2:
    print("No es primo")

else:
    es_primo = True

    for i in range(2,numero):
        if numero % i == 0:
            es_primo= False
            break
    if es_primo:
            print("Es primo")
    else:
            
            print("No es primo")    

