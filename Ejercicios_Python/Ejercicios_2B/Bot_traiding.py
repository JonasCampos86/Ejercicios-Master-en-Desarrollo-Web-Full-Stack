'''
Un bot de trading está programado para realizar ciertas acciones con respecto a un producto
financiero. Crea un script de manera que dado un precio introducido por el usuario, si el precio del
producto está por debajo de 100 dólares, el bot imprima por pantalla la orden de comprar. Si está
entre 100 y 150 dolores (ambos incluidos) el bot deberá imprimir la orden de hold. Si el precio está
estrictamente por encima de 150 el bot deberá imprimir la orden de vender.
'''
#Pedimos el precio de la accion en cuestion
valor_accion = float(input("¿Cual es el precio de la acción? "))
#comprobamos y damos la orden adecuanda

if valor_accion<100:
    print("COMPRA YA¡¡")
elif (valor_accion>=100) and (valor_accion<=150):
    print("HOLD")
else:
    print("VENDE AMIGO")








