'''
Supongamos que tienes un conjunto de datos de películas que contiene información
sobre su título, género, duración, año de lanzamiento y calificación. Quieres analizar
estos datos para determinar cuál es el género de película más popular, cuántas películas
se lanzaron en cada década y cuál es la duración promedio de cada género de película.
(Pista 1: Tu array de entrada puede tener la forma…)
(Pista 2: puede ser util investigar np.unique, np.argsort y np.count_nonzero)


'''



# import modules
import numpy as np

# array con datos de peliculas
peliculas = np.array([   
  #nombre      genero    duracion año calificacion 
    ['Peli 1', 'Comedia', 120, 1990, 8.5],
    ['Peli 2', 'Acción', 110, 2005, 7.8],
    ['Peli 3', 'Drama', 95, 2010, 6.9],
    ['Peli 4', 'Comedia', 100, 1985, 7.5],
    ['Peli 5', 'Acción', 130, 2015, 8.1],
    ['Peli 6', 'Drama', 115, 2000, 6.7],
    ['Peli 7', 'Comedia', 90, 1995, 8.2],
    ['Peli 8', 'Acción', 105, 2010, 7.4],
    ['Peli 9', 'Drama', 125, 1980, 6.8],
    ['Peli 10', 'Comedia', 95, 2000, 8.0]
])
nombre_pelicula = peliculas[:,0]
tipos_pelis = peliculas[:,1]
duracion = peliculas[:,2]
fechas = peliculas[:,3]
#Genero de pelicicula mas popular
generos , conteos = np.unique(peliculas[:,1],return_counts=True)
#ordenamos los conteos de mayo a menos
conteos_desc = np.argsort(conteos)[::-1]#nos da los indices de elementos del 
#print(conteos_desc)                     # array conteos de mayor a menos
#extraemos el genero mas popular con el array conteos_desc
genero_popular = generos[conteos_desc[0]]
print(f"El genero mas popular es {genero_popular}")


#Cuantas peliculas se lanzaron en cada decada
#creamos un array con las decadas a tratar
decadas = np.unique(fechas.astype(int) // 10*10)# ha esto se le llama hacer una flordivision
#contamos las peliculas en cada decada
conteos_decadas =[]
for decada in decadas:
    conteo = np.count_nonzero((fechas.astype(int)>=decada) & (fechas.astype(int)<decada+10))
    
    conteos_decadas.append(conteo)
    print("En la decada ", decada,"se hicieron",conteo,"peliculas")

#duracion promedio de cada genero de pelicula
duracion_media = np.zeros(len(generos))
for i in range (len(generos)):
    print("Del genero",generos[i],"la duracion media de las peliculas es:",np.mean(duracion[tipos_pelis == generos[i]].astype(float)))
    
    
    #duracion_media[i] = np.mean (duracion[tipos_pelis == generos[i]].astype(float))



