'''
Una red social tiene una base de datos de usuarios y sus correspondientes amistades.
Crea un programa que tome una base de datos de una red social como una lista de
tuplas, donde cada tupla contiene el nombre del usuario y una lista de sus amigos. Los
nombres repetidos en la lista de amigos corresponden a usuarios con varias cuentas
diferentes. Deberas eliminar las cuentas duplicadas y después devolver una tupla de
tuplas que contiene el número real de amigos por usuario y el usuario con más amigos.
Pista 1: Tus datos de entrada podrían ser así —> red_social = [("Juan", ["Maria", "Pedro",
"Luis"]), ("Maria", ["Juan", “Pedro”,”Juan”]), ("Pedro", ["Juan", "Maria"]), ("Luis", [“Juan”])]
Pista 2: Para eliminar duplicidades puedes usar sets
'''
import numpy as np
#base de datos:

red_social = [("Juan", ["Maria", "Pedro","Luis"]),
              ("Maria", ["Juan", "Pedro","Juan"]),
              ("Pedro", ["Juan", "Maria"]),
              ("Luis", ["Juan"])]

#Eliminar cuantas duplicadas
red_social_sin_duplicados=[]
for i in range (len(red_social)):
    usuario , amigos = red_social[i]
    amigos_sin_duplicados = list(set(amigos))
    red_social_sin_duplicados.append((usuario,amigos_sin_duplicados))
tupla_red_social_sin_duplicados=tuple(red_social_sin_duplicados)
print(tupla_red_social_sin_duplicados)
#contas los amigos de cada 
t_final = []
for usuario , amigos in tupla_red_social_sin_duplicados:
    print(f"El número de amigos de {usuario} son {len(amigos)}")
    t_final.append((usuario,len(amigos)))
tupla_final=tuple(t_final)
print(tupla_final)
#obtener el usuario con m 
cantidades=[]
usuarios=[]
for usuario , cantidad in tupla_final:
    usuarios.append(usuario)
    cantidades.append(cantidad)
posicion_mas_amigos = np.argmax(cantidades)
print("El usuario con mas amigos es: ",usuarios[posicion_mas_amigos])