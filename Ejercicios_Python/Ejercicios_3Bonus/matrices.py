'''
Crea un script que dada una lista de listas M (numérica), identifique si se trata de una matriz y en
ese caso imprima dos listas correspondientes a:
1. La fila cuyos elementos suman el máximo
2. La columna cuyos elementos suman el máximo
Si no se trata de una matriz devolverá dos listas vacías.
Por ejemplo:
M1=[[2,5,3],[6,1,8],[7,5,4]] devolverá: L1 = [7,5,4] y L2 = [2,6,9,7]
M2 = [[4,2,3],[4,5],[6,8,2]] devolverá: L1 = [] y L2 = []
(Nota: Definimos matriz como una lista de listas donde todas las listas internas tienen el mismo
numero de objetos)

'''
M=[[2,5,3],
   [6,1,8],
   [7,5,4]]

#M2 = [[4,2,3],
#      [4,5],
#     [6,8,2]]
#identrificar si es una matriz

n_columnas = len(M[0])
n_filas = len(M)
verificacion=True

#pasamos por cada lista de la matriz

for i in range(0,n_filas):
    #Comprobamos que la fila i tiene la misma longitud q la escogida anteriormente
    if len(M[i]) != n_columnas:# si no tiene la misma longitud que la escogida 
        verificacion=False     # no seri auna matriz y seri falso
        break



fila_mayor =[]
suma_max = 0
if verificacion == True:
    #recoremos las filas
    for i in range(0,n_filas):
        
        fila = M[i]
        suma_fila = sum(fila)
        if suma_fila> suma_max:
            suma_max = suma_fila
            fila_mayor=i
print(f"La fila es {M[fila_mayor]} y la suma es {suma_max}")


'''
M=[[2,5,3],
   [6,1,8],
   [7,5,4]]
'''
if verificacion:
     suma_max = 0
     for j in range(0,n_columnas):
        columna_mayor = []
        suma_columna = 0
        for fila in M:
            suma_columna = suma_columna + fila[j]
            columna_mayor.append(fila[j])
            if suma_columna > suma_max:
                suma_max =suma_columna
                column_max = columna_mayor[:]

print(f"La columna con es {column_max} y su suma es {suma_max}")  
 






