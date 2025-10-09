'''
Desarrolla un script en Python que dado una cadena de caracteres con la siguiente información:
nombre, apellido, DNI, código_asignatura, convocatoria, nota1, nota2, nota3 …
Por ejemplo:David Fernandez 12311267A 43527 2 2.1 4.6 3.4.
El script debe crear una lista con esos datos,
introducirlo en una lista de listas donde se encuentra la información de todos los alumnos eupón ahora que tu input es un string como este:
‘’'David Fernandez 12311267A 43527 2 9.1 7.6 2.4\n
Maria Garcia 12316487A 43527 2 7.1 8.6 5.4\n
Juan Perez 647829236A 43527 2 8.1 8.5 8.4\n ‚’’
imprimir la nota media de los alumnos junto con el DNI.
S
Reescribe el script para que procese ese input adecuadamente e imprima la nota media y el DNI
de todos los alumnos en ese string.
'''

#la base de datos principal
base_datos = [['Lucas', 'Campos', '09047174D','43527','2','7.6','8.9','6.5']]


#combertir esta cadena en un lista y metarla en una base de datos
cadena = "David Fernandez 12311267A 43527 2 2.1 4.6 3.4"
#convertimos la cadena en una lista con el metodo split()
datos_alumno = cadena.split()
#metemos la lista nueva en la base de datos
base_datos.append(datos_alumno)
# sacar de esa lista el dni y la nota media de cada alumno
#recorremos cada lista en la base de datos
for alumno in base_datos:
    dni=alumno[2]#sacamos el dni de cada alumno
    #sacamos sus notas
    notas = 0 #inicializamos la suma de las notas
    numero_notas = 0 # inicializamos el total de notas
    for i in range(5,len(alumno)):
        notas = notas + float(alumno[i])#hacemos la suma de todas las notas
        numero_notas = numero_notas+1 #sumamos el numero de notas para luego hacer la media
    nota_media = notas /numero_notas #hacemos la media con el numero de notas sacado antes
#imprimimos lo que nos piden que es el dni y la media

    print(f"El alumno con DNI {dni} tiene una nota media de {nota_media:.2f}")











