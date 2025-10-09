#crear una funcion para agregar una tarea 
#crear una funcion para mostrar todas las tareas pendientes
#crear una funcion para elimimar una tarea
#hacer un menu de opciones

f_name = "tareas.txt"


def agregar_tarea(tarea,f_name):
    with open(f_name,"r")as f:
        #comprobamos que no exista esa tarea
        if tarea in f_name:
            print("Esa tarea ya existe")
        #si no esta la añadimos a la lista
        else:
            with open(f_name,"a")as f:
                f.write(tarea)
    return f_name

def mostrar_tareas(f_name):
    #abrimos el archivo
    with open(f_name,"r")as f:
        #el archivo esta en una sola linea, pasemoslo a más
        lineas= f.readlines()
        for linea in lineas:
            print(linea.rstrip())



















