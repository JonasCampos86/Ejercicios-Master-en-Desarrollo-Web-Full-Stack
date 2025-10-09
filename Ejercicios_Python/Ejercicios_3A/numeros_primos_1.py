'''
Crea un programa que imprima todos los números primos entre el 2 y el 100. Un numero primo es
un numero positivo y entero mayor que uno que no tiene un divisor positivo y entero que no sea 1
o sí mismo.
'''

#--- Hacer un bucle que recorra del 2 al 100

for num in range(2,101):
    primo = True
    i = 2
    while primo == True and i < num :
        if num % i ==0 :
            primo = False
            i =+1
    if primo == True:
        print(num)










