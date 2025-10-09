'''
El gobierno quiere otorgar becas de excelencia a los estudiantes con un mínimo de un 8 de media.
Además para acceder a la beca el estudiante debe tener entre 17 y 21 años. Crea un script que
pida el nombre, la edad y la nota media del estudiante e indique si puede optar a la beca o no.
*Los ejercicios bonus no se resolverán directamente en clase si no que están pensados para que
los alumnos los discutan por el chat de Discord y compartan sus soluciones. Las soluciones
compartidas de los alumnos se subirán en un archivo a la academia.
'''
#Crea el escrip q pida nombre , edad y nota media
nombre=input("¿Como te llamas?" )
edad=float(input("Que edad tienes?: "))
nota=float(input("¿Que nota media tines?"))
#Comprobar la nota media
if nota >= 8:
    if (edad >= 17) and (edad < 22):
        print("Tienes derecho a la beca")
    else:
        print("No tiene derecho a la beca")
else:
    print("No tienes derecho a la beca")































