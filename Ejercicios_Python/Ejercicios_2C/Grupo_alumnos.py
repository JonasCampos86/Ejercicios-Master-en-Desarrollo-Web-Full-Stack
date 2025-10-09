'''
En uno de los cursos se ha dividido a una clase en dos grupos A y B. Para mezclar a los alumnos
lo mejor posible se ha asignado a todas las chicas con nombres empezando por la letra E hasta la
M en el grupo A y el resto en el B. A los chicos con nombres empezando por la letra A hasta la H y
R hasta la Z se les ha asignado al grupo A también, el resto están en el B.
Crea un script que pregunte al usuario si es chica o chico y el nombre. El script debe mostrar por
pantalla el grupo que le corresponde a ese alumno.
'''
print("Tenemos que asignarte una clase segun unos criterios y necesitamos 2 datos:")
# Pedir si es chico o chica
genero = str(input("Dime si eres chico o chica "))
genero = genero.title()
# Perdir su nombre
nombre = str(input("¿Como te llamas? "))
nombre = nombre.title()
#Asignarles una clase segun : chicas con inicial de la E hasta la M al grupo A
#                             resto de chica al grupo B
#                             Chicos con iniciales entre la A y la H, la R u la Z al grupo A
#                             resto al grupo B  
if genero == "Chica":
    if nombre[0] == 'E'or 'F'or 'G'or 'H'or 'I'or 'J'or 'K'or 'L'or 'M':
        print("Tu grupo es el A DISFRUTA")
    else:
        print("Tu grupo es el B DISFRUTA")
elif genero == "Chico":
    if nombre[0] == "I"or'J'or "K"or "L"or "M"or "N"or "Ñ"or "O"or "P"or "Q":
        print("Tu grupo es el B DISFRUTA")
    else:
        print("Tu grupo es el A DISFRUTA")
        








