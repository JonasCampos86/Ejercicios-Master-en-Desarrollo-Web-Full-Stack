'''
En programación, un "stack" es una estructura de datos que sigue el
principio de LIFO (Last In, First Out), lo que significa que el último elemento
agregado a la pila es el primero en ser retirado. Imagina una pila de platos:
cuando apilas un nuevo plato, este se coloca en la parte superior de la pila,
y cuando retiras un plato, siempre tomas el de arriba primero.
En Python, puedes implementar un stack utilizando una lista. Puedes
agregar elementos a la pila utilizando el método `append()`, y puedes retirar
elementos de la pila utilizando el método `pop()` sin ningún índice
especificado, ya que `pop()` por defecto elimina y devuelve el último
elemento de la lista.
Los stacks son útiles en muchas situaciones, como algoritmos de búsqueda
y recorrido, manejo de llamadas a funciones (con la pila de llamadas),
manejos de historial y navegación y más.
Crea una clase "Pila" que represente una pila (stack) básica. Implementa
métodos para agregar elementos a la pila, quitar elementos y mostrar el
contenido actual.
Por supuesto, estaré encantado de explicarte qué es un "stack" en el
contexto de la programación y cómo se utiliza en Python.
'''
class Pila:
    def __init__(self):
        self.stack = []

    def añadir(self,elemento):
        self.stack.append(elemento)

    def quitar(self):
        print(self.stack.pop())

    def mostrar(self):
        for elemento in self.stack:
            print(elemento)
        
#Ejemplo de uso:
algo = Pila()

algo.añadir(1)
algo.añadir(2)
algo.añadir(3)
algo.añadir(4)
algo.añadir(5)
algo.añadir(6)
algo.añadir(7)
algo.mostrar()
algo.quitar()
algo.mostrar()



