'''
Eres un gerente de proyectos y necesitas un programa para administrar
las tareas y responsabilidades de tu equipo. Cada tarea tiene un nombre,
una descripción y un responsable asignado. Implementa un programa en
Python que utilice un diccionario para almacenar la información de las
tareas. El programa debe permitir agregar nuevas tareas, asignar
responsables a las tareas existentes, actualizar las descripciones de las
tareas y mostrar la lista completa de tareas y responsables.
(Pista: puedes comenzar con un diccionario vacío y construir un
diccionario de diccionarios)
'''

tareas = {}
terminar = True
#Hacemos un bucle para poder hacer las funciuones requeridas

while terminar:
    print("¿Que deseas hacer? \n Elige el número de una de las siguentes opciones:\n 1:Agregar una nueva tarea.\n 2:Modificar una tarea exixtente"
          "\n 3:Asignar un nuevo responsable\n 4:Mostrar la lista de tareas\n 5: Salir")
    respuesta = int(input( ))
    #Eleccion 1
    if respuesta==1:
        numero_tarea = input("Escriba la palabra 'tarea' seguida del número que desea asignar: ")
        descripcion = input("Describa la tarea en cuestion: ")
        responsables = input("Asigne responsable a la tarea: ")
        #Añadimos los datos al diccionario
        tareas[numero_tarea]={"Descripcion":descripcion,"Responsables":responsables}
    #Elec cion 2
    elif respuesta==2:
        #necesitamos que número de tarea quiere cambiar y que parte quiere modificar
        numero_tareaM=input("Que tarea necesitas modificar? ")
        #comprobamos que este en el diccionario
        if numero_tareaM in tareas:
            #si esta preguntamos que clave necesita modificar
            print("Elige la opción que necesites:\n1:Modificar la descripción\n2:modificar el responsable ")
            respuesta1=int(input( ))
            if respuesta1==1:
                nueva_descripcion=input("Escriba la nueva descripción: ")
                tareas[numero_tareaM]["Descripcion"]=nueva_descripcion
            elif respuesta1==2:
                nuevo_responsables=(input("Escriba el nombre del nuevo responsable: "))
                tareas[numero_tareaM]["Responsables"]=nuevo_responsables
        else:
            print("Esa tarea no esta en el sistema.")
    #Eleccion 3
    elif respuesta ==3:
        #necesitamos saber a que tarea le quiuere cambiar el respònsable
        numero_tareaM=input("A que tarea necesitas modificarle el responsable? ")
        #comprobamos que este en el diccionario
        if numero_tareaM in tareas:
            otro_responsables=input("Cual es el nuevo responsable: ")
            #añadimos el nuevo responsable
            tareas[numero_tareaM]["Responsables"]=otro_responsables
        else:
            print("Esa tarea no esta en el sistema.")
    #Eleccion 4
    elif respuesta == 4:
        #hacemos un bucle para enseñar las tareas la descripcion y los responsables

        for clave , valor in tareas.items():
           print(clave)
           for campo,datos in valor.items():
               print(campo ,":",datos)
    #Eleccion 5
    elif respuesta==5:

        print("Cerrando programa en 3....2....1....chau pescau")
        terminar= False
print(tareas)      
    





          

     
     
     
'''
quit()

tareas = {}









#Añadir tareas al diccionario
tareas["tarea1"]={"descripcion": "cambiar las valvulas","responsables": "Pepe"}
tareas["tarea2"]={"descripcion": "cambiar selectores","responsables": "Lolo"}
tareas["tarea3"]={"descripcion": "cambiar cigüeñal ","responsables": "Jose"}
#Añadir responsables
tareas["tarea1"]["responsables"]="Jonás"
print(tareas)
#Modificar las descripción
tareas["tarea2"]["descripcion"]="mirar presiones"
print(tareas)
#mostrar bien los datos que tenemos

for clave ,valor in tareas.items():
    print("Tarea: ",clave)
    print("Descripcion: ",valor["descripcion"])
    print("Responsable:" ,valor["responsables"])
    print(" ")
print(tareas)
'''