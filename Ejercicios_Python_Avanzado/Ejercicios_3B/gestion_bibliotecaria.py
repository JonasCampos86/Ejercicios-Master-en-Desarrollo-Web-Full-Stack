'''
SISTEMA DE GESTION DE BIBLIOTECA
Crea un sistema de gestión de una biblioteca utilizando clases en Python.
Debes implementar las siguientes clases:
1. “Libro”: Representa un libro con atributos como título, autor y número de
ejemplares disponibles.
2. “Usuario”: Representa a un usuario de la biblioteca con atributos como
nombre, número de identificación y lista de libros prestados.
3. “Biblioteca”: Representa la biblioteca en sí, con métodos para agregar
libros, prestar libros a usuarios, devolver libros y mostrar el inventario.
'''

class Libro:
    def __init__(self,titulo,autor,ejemplares):
        self.titulo = titulo
        self.autor = autor
        self.ejemplares = ejemplares

class Usuario:
    def __init__(self,nombre,ide,):
        self.nombre = nombre
        self.ide = ide
        self.lista_libros_prestados = []
class Biblioteca:
    def __init__(self):
        self.libros = []

    def agregar_libro(self,libro):
        self.libros.append(libro)

    def prestar(self,usuario,titulo):
        #comprobamos que tengamos el libro.
        for libro in self.libros:
            #comprobamos tener al menos 1 libro 
            if libro.titulo == titulo and libro.ejemplares>0:
                #si hay al menos 1 libro lo prestamos y le restamos de los ejemplares
                usuario.lista_libros_prestados.append(libro)
                libro.ejemplares -= 1
                print(f"El libro {titulo} ha sido prestado a {usuario.nombre}.")
                return
        
        print("No hay ejemplareas para prestamo")

 
    def devolver(self,usuario,titulo):
        #comprobamos que el usuario tenga el libro
        for libro in usuario.lista_libros_prestados:
            if libro ==  titulo:
            #si lo tiene lo quitamos de su lista y añadimos el ejemplar
                usuario.lista_libros_prestados.remove(libro)
                libro.ejemplares +=1
                print(f"El libro {libro} ha sido devuelto por: {usuario.nombre}")
        #si no lo tiene se lo decimos
        else:
            print("Ese libro no lo tienes prestado")
    
    def mostrar(self):
        for libro in self.libros:
            print(f" Libro: {libro.titulo}\n Autor: {libro.autor}\n Nº de ejemplares: {libro.ejemplares}.\n ")

#ejemplo de uso:
libro1 = Libro("Cien años de soledad" ,"Gabriel García Márquez" , 10)
libro2 = Libro ("Don Quijote de la Mancha" , "Miguel de Cervantes Saavedra" , 10)
libro3 = Libro ("1984" , "George Orwell" , 10)
libro4 = Libro ("El amor en los tiempos del cólera" ,"Gabriel García Márquez" , 10)
jonas = Usuario ( "Jonas",1234)
irene = Usuario ("Irene",5678)
lucas = Usuario ("Lucas",3450)
biblio = Biblioteca()
biblio.agregar_libro(libro1)
biblio.agregar_libro(libro2)
biblio.agregar_libro(libro3)
biblio.agregar_libro(libro4)
biblio.prestar(irene,"1984")
biblio.prestar(jonas,"El amor en tiempos de cólera")
biblio.prestar(lucas,"Don Quijote de la Mancha")
biblio.mostrar()


        
        
        

















