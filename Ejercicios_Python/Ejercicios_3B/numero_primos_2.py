'''
Dado una lista de números enteros, escribe un script en Python que devuelva una nueva lista con
los números primos de la lista original. Además, el script debe devolver el número total de
números primos encontrados y la suma de los números primos encontrados
'''
numeros= list(range(2,101))
print(numeros)
lista_primos=[]
lista_suma_primos=0

for numero in numeros:
    primo = True
    for i in range(2,numero):
        if numero%i ==0:
            primo=False
    if primo==True:
        lista_primos.append(numero)
        lista_suma_primos=lista_suma_primos+1

print(lista_primos)
print(sum(lista_primos))
print(lista_suma_primos)












