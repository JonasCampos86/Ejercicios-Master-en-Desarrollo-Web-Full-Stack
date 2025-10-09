'''
Crear un programa que:

Pida al usuario el nombre de un estudiante.

Le pida una lista de 3 notas.

Guarde esa información en una estructura (diccionario).

Calcule el promedio de las notas.

Muestre el nombre del estudiante, sus notas y su promedio.
'''
#creamos una lista
alumnos =[]

ingresar_mas = "si"

while ingresar_mas=="si":
    alumno=input("Nombre del alumno: ")
    alumnos.append(alumno)
    ingresar_mas=input("¿Quieres añadir más alumnos? si/no: ")

base_datos=[]

for alumno in alumnos:
    notas=[]
    nota1=int(input("Ingrese la nota1: "))
    notas.append(nota1)
    nota2=int(input("Ingrese la nota2: "))
    notas.append(nota2)
    nota3=int(input("Ingrese la nota3: "))
    notas.append(nota3)
    base_datos.append([alumno,notas])


media=0

for dato in base_datos:
    nombre=dato[0]
    nota = dato[1]
    media = sum(nota)/len(nota)
    print(f"La nota media de {nombre} es de {media}")











