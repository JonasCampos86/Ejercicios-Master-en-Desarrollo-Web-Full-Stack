'''
Supón ahora que tu input es un string como este:
‘’'David Fernandez 12311267A 43527 2 9.1 7.6 2.4\n
Maria Garcia 12316487A 43527 2 7.1 8.6 5.4\n
Juan Perez 647829236A 43527 2 8.1 8.5 8.4\n ‚’’

'''

#la base de datos principal
base_datos = [['Lucas', 'Campos', '09047174D','43527','2','7.6','8.9','6.5']]


cadena_alumnos ="David Fernandez 12311267A 43527 2 9.1 7.6 2.4\n\
 Maria Garcia 12316487A 43527 2 7.1 8.6 5.4\n\
Juan Perez 647829236A 43527 2 8.1 8.5 8.4\n "

#formateamos a lista el strim
alumnos = cadena_alumnos.split('\n')
#hacemos el bucle para acceder a aca alumno
for alumno in alumnos:
    alumno = alumno.strip()#quitamos el posible espacio antes o despues del strim
    #pasamos el alumno a una lista
    alumno = alumno.split()
    #vemos que hay una lista vacia, hacemos un if para añadir listas llenas a la base de dato
    if alumno:
        base_datos.append(alumno)
#nos piden el dni y la nota media de cada alumno
#pasamos de alumno en alumno
for alumno in base_datos:
    #sacamos su dni
    dni = alumno[2]
    #sacar la nota media
    suma_notas = 0
    numero_notas = 0
    for i in range(5,len(alumno)):#pasamos por las notas, desde la posicion hasta la q sea necesaria
        suma_notas = suma_notas + float(alumno[i]) # aqui sumas todas las notas
        numero_notas = numero_notas + 1 # aqui sumas el numero de notas q hay
    nota_media = suma_notas / numero_notas# hacemos la media
    #imprimimos los que nos piden 
    print(f"El alumno con DNI {dni} tiene una nota media de  {nota_media:.2f}")


    




