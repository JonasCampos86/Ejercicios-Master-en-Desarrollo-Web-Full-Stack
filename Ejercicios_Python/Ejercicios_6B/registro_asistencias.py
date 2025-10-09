'''
Eres un profesor y deseas realizar un seguimiento de la asistencia de tus
estudiantes a lo largo del semestre. Cada estudiante tiene un nombre y
una lista de fechas en las que asistió a clases. Implementa un programa
en Python que utilice un diccionario para almacenar la información de las
asistencias. El programa debe permitir registrar la asistencia de los
estudiantes, agregar nuevas fechas de asistencia y mostrar la lista de
estudiantes y las fechas en las que asistieron.
(Pista: puedes comenzar con un diccionario vacío y construir un
diccionario de listas)

'''
clase = {}
#Añadimos los alumnos
clase["alumno1"] = {"nombre": "Jonás" ,"Asistencias":["01/01/2025","02/01/2025"]}
clase["alumno2"] = {"nombre": "Mario" ,"Asistencias":["03/01/2025","04/01/2025"]}
clase["alumno3"] = {"nombre": "Victor" ,"Asistencias":["05/01/2025","06/01/2025"]}
clase["alumno4"] = {"nombre": "Cesar" ,"Asistencias":["07/01/2025","08/01/2025"]}
print(clase)
#Añadimos más alumnos
clase["alumno5"]= {"nombre": "Ruben" ,"Asistencias":["09/01/2025","10/01/2025"]}
#Añadimos fechas de asistencia
clase["alumno2"]["Asistencias"].append("11/01/2025")
#Mostrar todos los alumnos y sus fechas de asistencias
for clave,valor in clase.items():
    print(f"El alumno {valor["nombre"]} a asistido a clase los siguientes días:")
    for dia in valor["Asistencias"]:
        print(dia)
    print("")
