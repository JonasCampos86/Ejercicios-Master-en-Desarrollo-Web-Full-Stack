def resolver_laberinto(laberinto,fila,columna,camino=None):
    if camino is None:
        camino = []
    
    if not(0<=fila<len(laberinto)) or not (0<=columna<len(laberinto[0])) or laberinto[fila][columna]==1 or (fila,columna) in camino:
        return None
    camino.append((fila,columna))

    #caso base /////// si ya nos encontramos en la salida
    
    if laberinto[fila][columna]== 9:
        return camino
    
    #Definir los moviemientos posibles
    movimientos = [(-1,0),(1,0),(0,-1),(0,1)]

    for movimiento in movimientos:
        nueva_fila, nueva_columna = fila+movimiento[0],columna+movimiento[1]
        resultado = resolver_laberinto(laberinto,nueva_fila,nueva_columna,camino.copy())
        if resultado:
            return resultado
    return None # no ha salida desde la posicion

def imprimir_laberinto(laberinto,camino):
    for fila in range(len(laberinto)):
        for columna in range(len(laberinto[0])):
            if (fila,columna) in camino:
                print("*",end=" ")#representamos el camino
            else:
                print(laberinto[fila][columna],end=" ")
        print()

laberinto = [
    [0, 1, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 9, 0],
    [0, 0, 0, 0, 0]
]

camino_solucion = resolver_laberinto(laberinto,0,0)

if camino_solucion:
    print("El camino para salir del laberinto es:")
    imprimir_laberinto(laberinto,camino_solucion)
else:
    print("No existe o no hay solucion para este laberinto")