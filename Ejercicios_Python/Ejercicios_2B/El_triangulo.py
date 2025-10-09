'''
En una obra es necesario construir para el tejado de una casa una estructura triangular con tres
piezas. El ingeniero se pregunta si dadas la largura de las piezas que ha recibido podrá construir
este estructura. Crea un script que dados tres longitudes indique si podría construirse un triangulo
con esas piezas.
(Pista: la suma de dos piezas tiene que ser mayor que el lado restante. Esto debe ser así para
todas las posibles combinaciones)

'''
#Pedimos la medida de las piezas
x = float(input("Dime la medida de la primera pieza: "))
y = float(input("Dime la medida de la segunda pieza: "))
z = float(input("Dime la medida de la tercera pieza: "))
# Comprobamos 
if (y+z>x):
    print("Puedes hacer el tejado usando de base la primera pieza")
elif(x+z>y):
    print("Puedes hacer el tejado usando de base la segunda pieza")
elif(x+y>z):
    print("Puedea hacer el tejado usando de base la tercera pieza")
else:
    print("Lo lamento pero no puedes hacer el tejado con las piezas que te han proporcionado")    



















