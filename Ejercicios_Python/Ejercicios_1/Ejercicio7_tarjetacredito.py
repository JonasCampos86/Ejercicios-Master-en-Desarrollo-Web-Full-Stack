'''
Crea un script que reciba como input un número de tarjeta de crédito e imprima por pantalla todos
los caracteres en forma de asterisco salvo los últimos cuatro. Si por ejemplo el número de tarjeta
es 1234 2345 3456 5678, el output deberá ser **** **** **** 5678.

'''
num_tarjeta = input("¿Introduzca los número de su tarjeta de credito?" )
log_targeta = len(num_tarjeta)
print("**** **** **** ", num_tarjeta[log_targeta-4:log_targeta])












