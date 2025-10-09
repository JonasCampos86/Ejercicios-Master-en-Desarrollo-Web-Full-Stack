'''
Define una lista de 5 palabras aleatorias y una lista de letras prohibidas que contenga tres letras.
Filtra las palabras en tu lista original crea una nueva lista de palabras filtradas que solo contenga
aquellas palabras que no tienen ninguna letra prohibida
'''
lista = ['lucas','iris','victor','aitor','thiago','cristina','jonás','irene']
letras_prohibidas = ['u','s','t']
lista_sin_prohibidas = []

for nombre in lista:
    incluir = True
    for letras_prohibida in letras_prohibidas:
        if letras_prohibida in nombre:
            incluir=False
    if incluir:
        lista_sin_prohibidas.append(nombre)
print(lista_sin_prohibidas)       
            

