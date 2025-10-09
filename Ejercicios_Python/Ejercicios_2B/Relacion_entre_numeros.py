'''
Crea un script que pida al usuario 3 números diferentes y le indique si alguno de ellos es la suma
de los otros 25
'''
#Pedir los número al ususario
print("Dime tres número y te digo si la suma de alguno de ellos es la suma de alguno")
x = int(input("Dime el primer número "))
y = int(input("Dime el segundo número "))
z = int(input("Dime el tercer número "))
# Hacemos las comprobaciones de las sumas

if(x==y+z):
      print("La suma del segundo y el tercer número dan el primero")
elif(y==x+z):
      print("La suma del primer y el tercer número dan el segundo")
elif(z==x+y):
     print("La suma del primer y el segundo número dan el tercero")  
else:
      print("No coincide na de na")  








