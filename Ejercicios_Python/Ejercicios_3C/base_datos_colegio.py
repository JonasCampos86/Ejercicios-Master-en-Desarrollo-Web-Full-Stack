'''
Trabajas en colegio y estas encargado de mantener un seguimiento de las notas de los
estudiantes de un clase. En tu base de datos tienes una lista con los nombres de los estudiantes y
para cada estudiante debes guardar sus notas provenientes de deberes, exámenes y proyectos.
También necesitas calcular a nota media de cada estudiante y la nota media de la clase al
completo.
Pista: Para resolver este problema puedes usar una lista anidada donde guardes las notas para
cada estudiante. Entonces puedes usar un bucle para recorrer la lista de listas y calcular la nota
media de cada estudiante. También puedes usar otro bucle para calcular la nota media de toda la
clase.
'''
#-------lista de alumnos y sus notas
#clase_infantil_1b =['Lucas','Victor','Iris','Aitor','Thiago','Diego']
 #notasdatos = [ ['Lucas',[9.5,8.6,9.1]] , ['Victor',[9.2,7.9,9.3]] , ['Iris',[9.9,8.7,8.3]] ]
#-------calculamos la nota media de cada alumno

#Creamos la lista de alumnos vacia 
alumnos=[]
#Introducimos un valor "condicional" para obtener la salida del bucle while
ingresarmas = "si"
#Creamos el bucle con el que introducimos los nombres de los alumnos, todos los que queramos 
while ingresarmas=="si":
   #Pedimo sel nombre del alumno
   alumno = input("introduzca el nombre del alumno " )
   #Lo añadimos a la lista
   alumnos.append(alumno)
   #preguntamos el condicional de salida
   ingresarmas = input("Quieres añadir otro alumno, responde si o no ")

database=[]

for alumno in alumnos:
   notas=[]
   print(f"Introduzca las notas de {alumno}")
   #Pedimos las notas de los deveres y lo añadimos a notas
   deveres = float(input("Ingrese la nota de los deberes" ))
   notas.append(deveres)
   #Pedimo las notas de los examenes y lo añadimos a notas
   examenes = float(input("Ingrrese la nota de los examenes" ))
   notas.append(examenes)
   #Pedimos las notas de los proyectos y lo añadimos a notas
   proyectos = float(input("Ingrese la nota de los proyectos" ))
   notas.append(proyectos)
   #añadimos el nombre del alumno y las notas a la database
   database.append([alumno,notas])
print(database)


mediaTotal=0
sumaDeNotas=0
for dato in database:
   nombre = dato[0]
   notas = dato[1]
   media =sum(notas)/len(notas)
   mediaTotal = mediaTotal + sum(notas)
   sumaDeNotas = sumaDeNotas+len(notas)
   
   print(f'La notas de {nombre} son {notas} y la media es {media:.2f}')
#---------calculamos la media de la clase

mediaClase = mediaTotal/sumaDeNotas

print(f"Media de la clase es de {mediaClase:.2f}")