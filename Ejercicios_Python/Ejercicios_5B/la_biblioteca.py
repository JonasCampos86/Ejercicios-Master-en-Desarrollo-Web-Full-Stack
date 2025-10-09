'''
Una biblioteca tiene una lista de libros y sus autores. Crea un programa que tome la lista
de libros y sus autores como una lista de tuplas, donde cada tupla contiene el título del
libro y el nombre del autor, y devuelva una nueva lista de tuplas que contenga el título del
libro y el apellido del autor.
Pista: Tus datos de entrada podrían ser así —> lista_libros = [(‘El aleph', ‘Jorge Luis
Borges'), ('Cien años de soledad', ‘Garbriel Garcia Márquez'), ('La ciudad y los perros',
‘Mario Vargas Llosa')]
'''
# y devuelva una nueva lista de tuplas que contenga el título del
#libro y el apellido del autor.


lista_libros = [('El aleph', 'Jorge Luis Borges'),
                ('Cien años de soledad', 'Garbriel Garcia Márquez'),
                ('La ciudad y los perros','Mario Vargas Llosa')]
t_de_libros =[]
espacio = " "
for titulo , autor in lista_libros:
    apellido = autor.split()[-1]
    t_de_libros.append((titulo,apellido))
    print("Libro", titulo ,"apellido autor: ",apellido)
