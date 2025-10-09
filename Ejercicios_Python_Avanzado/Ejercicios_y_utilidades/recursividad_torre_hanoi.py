def mover_disco(desde,hacia,disco):
    print(f"Mover disco {disco} de la torre {desde} hacia la torre {hacia}")
def torres_de_hanoi(n,origen,destino,axuliar):
    
    #Caso base de recursividad
    if n ==1:
        mover_disco(origen,destino,n)
        return
    #Continuamo scon la recursividad
    torres_de_hanoi(n-1,origen,axuliar,destino)
    mover_disco(origen,destino,n)
    torres_de_hanoi(n-1,axuliar,destino,origen)
 
   


torres_de_hanoi(2,"A","C","B")