'''nuevatupla = (1,2,3,4,5)
print(nuevatupla.count(2))
print(nuevatupla.index(1))
print(min(nuevatupla))
print(max(nuevatupla))
la_tupla = ((1,2,3),(4,5,6),(7,8,9))
print(la_tupla[1][0:2])
mi_diccionario={}
print(type(mi_diccionario),mi_diccionario)

def potencia (num,exponente):
    """Calcula la potencia de un número"""
    #Input :
    # num = el numero que queremos elevar
    # potencia = por el que queremos elevar
    # Output
    # resultado = positivo

    if potencia==0:
        return 1
    #sentencia recursiva
    else:
        return num*exponente(num,exponente-1)
#caso de uso
potencia(10,2)'''
def hacer_piza(*ingredientes):
    print (ingredientes)
hacer_piza("peperonni")

def fibonacci(indice):
    if indice ==1:
        return indice
    else:
        return fibonacci(indice-1)+ fibonacci(indice-2)
fibonacci(5)