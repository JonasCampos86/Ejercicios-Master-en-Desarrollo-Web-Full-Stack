'''
#1. Escribe un programa en Python para encontrar los elementos duplicados de una lista,
#añadirlos a una nueva lista y borrarlos de la lista. Después imprime una lista con tan solo los
#elementos únicos.
lista = [1,2,3,4,5,6,7,8,9,10,1,3,7,8,4,8,9]
lista_duplicados = []
lista_unicos = []
print('----------------------')
print('lista original',lista)
print('-----------------------')
for elemento in lista:
    if lista.count(elemento)>1:
        if elemento  not in lista_duplicados: 
            lista_duplicados.append(elemento)
    else :
        lista_unicos.append(elemento)       
for elemento in lista_duplicados:
    lista.remove(elemento)
print(lista)
print(lista_duplicados)
print(lista_unicos)
print('-----------------------')
#2. Escribe un programa en Python para unir dos listas y ordenarlas en orden ascendente.
print('-------------------------------------------')
lista2=[1,2,3,4,5,6,7,8,9,10]
lista3=[11,12,13,14,15,16,17,18,19,20]
lista_nueva = lista3 + lista2
lista_nueva.sort() 
print(lista_nueva)
print('-------------------------')
#3. Escribe un script que encuentre el segundo número más grande de una lista.
print(lista_nueva[-2])
print('-------------------------')

#4. Crea un script que cuente el número de elementos más grandes que un determinado número
#    dado por el usuario (supón una lista numérica).
num_usuario = int(input('Dime un número del 1 al 20 y te digo aqui cuando snumero hay por encima '))
num=0
for elemento in lista_nueva:
    if num_usuario< elemento:
        num =num+1
print('Hay ',num,'por encima')
        
print('-------------------------')

#5. Crea un script dado un número introducido por el usuario o determinado al inicio del
#programa, realice la suma de aquellos números que sean divisibles por este.

divisor = 3
suma_divisibles = 0
for numero in lista_nueva:
    if numero % divisor ==0 :
        suma_divisibles+=numero
print(suma_divisibles)
print('-------------------------')
print('-------------------------')
#6. Escribe un script que pida un número al usuario y dada una lista encuentre el número más alto
#que es inferior al número introducido o determinado al inicio del programa.
otro_numero_usuario = int(input("Dime un número  del 0 al 20 "))

for numero in lista_nueva:
    if numero < otro_numero_usuario:
        resultado = numero


#7. Crea un script que extraiga los elementos comunes entre dos listas.
lista1 = [10,12,15,1,2,3,4,17,19,20,13]
lista2 = [1,12,3,2,56,13,17,19,20,123]
comunes = []

for elemento in lista1:
    if elemento in lista2:
        comunes.append(elemento)
print(comunes)

#8. Crea un script que cuente el número de apariciones de un elemento de una lista en dicha lista
###(P.e. en la lista lista=[23, 65, 23] el número de apariciones de 23 es 2)
lista1 = [10,12,15,1,1,1,1,2,2,2,3,4,5,1,2,3,4,17,19,20,13]
numero_repetido = 1
print(lista1.count(2))

contador = 0
for elemento in lista1:
    if elemento == numero_repetido:
        contador =contador+1
print(contador)



#9. Escribe un programa que lea una lista de enteros y cree una nueva lista que contenga solo
#números positivos de la lista original.
lista1 = [10,-12,15,1,1,1,-1,2,2,2,3,-4,5,1,2,-3,4,-20,-13]
lista_positivos = []
for elemento in lista1:
    if elemento > 0:
        lista_positivos.append(elemento)
print(lista_positivos)  
print(lista1)      

#10. Crea un script que tome una lista de strings y cree una nueva lista que contenga el tamaño de
#los strings de la lista original.
lista = ['Lucas','Iris','Victor','Aitor','Thiago','Cristina','Jonás','Irene']
lista_numeros = []
for nombre in lista:
    lista_numeros.append(len(nombre))
print(lista_numeros)

'''
#11. Crea un programa que dada una lista de strings, devuelva otra lista con los strings en mayúscula.
lista = ['Lucas','Iris','Victor','Aitor','Thiago','Cristina','Jonás','Irene']
lista_mayusculas =[]
for nombre in lista:
    lista_mayusculas.append(nombre.upper())
print(lista_mayusculas)




