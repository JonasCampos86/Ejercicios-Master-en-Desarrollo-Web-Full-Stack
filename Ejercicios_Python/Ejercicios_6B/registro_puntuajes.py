'''
Implementa un programa en Python que permita registrar y mantener un
seguimiento de los puntajes de un juego. El programa debe permitir a los
jugadores ingresar sus nombres y puntajes, almacenarlos en un
diccionario y proporcionar funcionalidades para mostrar el puntaje más
alto, el promedio de puntajes y la cantidad total de jugadores.
'''
puntuajes ={}
nombre=""

#hacemos un bucle para pedir nombres y puntos
while nombre != "salir":
    #pedimos el nombre o si quieren dejar de añadir
    nombre = input("Escribe el nombre del juga@r o salir si no deseas añadir más: ")
    #si pone nombres entonces dejamos poner puntos
    if nombre!="salir":
        puntos = int(input("Escribe los puntos del jugad@r: "))
        puntuajes[nombre]=puntos
        #mostramos el puntuaje mas alto
        jugador_mas_alto = max(puntuajes,key= puntuajes.get)
        puntos_mas_alto = puntuajes[jugador_mas_alto]
        print("El jugad@r con mas puntos es: ",jugador_mas_alto)
        print("Y sus puntos son:",puntos_mas_alto)
        #mostramos el promedio de puntos
        total_puntos  = sum(puntuajes.values())
        jugadores = len(puntuajes)
        promedio = total_puntos/jugadores
        print("El promedio de puntos es: ",promedio)
        #mostramos el totalde jugadores 
        print("El número de jugadores es: ",jugadores)











print(puntuajes)







