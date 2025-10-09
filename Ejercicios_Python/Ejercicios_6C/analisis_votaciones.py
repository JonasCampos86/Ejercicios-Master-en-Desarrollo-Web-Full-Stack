'''
ANÁLISIS DE VOTACIONES:
Supongamos que tienes los resultados de una elección con los nombres
de los candidatos y la cantidad de votos obtenidos por cada uno.
Implementa un programa en Python que permita registrar los votos,
mostrar la lista completa de candidatos y sus votos, encontrar al
candidato ganador (con más votos) y calcular el porcentaje de votos que
obtuvo cada candidato.

'''
votaciones = {}
continuar = True

while continuar:
    print("Opcion 1 : Introduzcir nombre del candidato y sus votos")
    print("Opcion 2 : Lista de candidatos y sus votos")
    print("Opcion 3 : Candidato ganador")
    print("Opcion 4 : El porcentaje de votos de cada candidato")
    print("Opcion 5 : Salir del programa")
    opcion = int(input("Elije una opción: "))
    #introducir el nombre del candidato y sus votaciones
    if opcion==1:
        nombre=input("Ingrese el nombre del candidato :").title()
        if nombre.title() in votaciones:
            #sumamos el voto.
            votaciones[nombre]=votaciones[nombre]+1

        else:
            votaciones[nombre]=1
    #sacamos el listado de candidatos y sus votos        
    elif opcion == 2:
        for candidato , votos in votaciones.items():
            print("El candidato ",candidato,"tiene ",votos,"votos")
    #sacamos al ganador     
    elif opcion ==3:
        #comprobamos que tengamos votos

        if len(votaciones)==0:#sino ha votos
            print("no hay resultados")
        #si los hay    
        else:
            #extraemo las clave asociada el númeor de votos
            ganador = max(votaciones,key=votaciones.get)
            print("El ganador es: ",ganador)
    #sacamos el porcentaje de votos
    elif opcion ==4:
        if len(votaciones)==0:#sino ha votos
            print("no hay resultados")
        #si los hay    
        else:
            total_votos =sum(votaciones.values())
            print("Porcentaje de votos por candidato")
            for candidato,votos in votaciones.items():
                porcentaje = (votos/total_votos)*100
                print(f"El candidato {candidato},tiene un porcentaje del {porcentaje:.2f} de los votos")
    elif opcion==5:
        print("Cerrando programa")
        continuar=False
    else:
        print("Elija una opcion valida.")

            

        





