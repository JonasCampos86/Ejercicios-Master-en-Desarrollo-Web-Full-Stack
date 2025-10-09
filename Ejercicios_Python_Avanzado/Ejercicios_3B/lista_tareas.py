'''
LISTA DE TAREAS
Crea una clase "ListaTareas" que contenga una lista de tareas pendientes.
Implementa métodos para agregar una tarea, marcar una tarea como
completada y mostrar todas las tareas
'''

class ListaTareas:
    def __init__(self):
        
        self.tareas = []
    
    def agregar_tarea(self,tarea):
        
        self.tareas.append({"tarea": tarea,"completada":False})
    
    def tarea_completada(self,indice):
        if 0<=indice<len(self.tareas):
            self.tareas[indice]["completada"]=True

    def mostrar_lista(self):
        for indice ,tarea in enumerate(self.tareas):
            estado = "Completado" if tarea["completada"] else "Pendiente"
            print(f"{indice+1}. {tarea["tarea"]} - {estado}")





#Preogarma principal

lista_tareas = ListaTareas()
lista_tareas.agregar_tarea("Comprar el SlikSong")
lista_tareas.agregar_tarea("Ir a buscar tambien el Ninja Gaiden")
lista_tareas.tarea_completada(0)
lista_tareas.mostrar_lista()






