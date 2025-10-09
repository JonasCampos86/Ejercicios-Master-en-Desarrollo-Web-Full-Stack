# Pedir por consola cuantos € quiere cambiar a dolares
# 1€=1.2$
# cobrar al cliente una tasa del 10% y decirle lo q recibira.
dolar =1.2
salir = True
while salir:
    try:
        cantidad = float(input("Cuantos euros quieres cambiar: "))
        total_dolares = cantidad*dolar
        tasa_gestion = total_dolares/10
        pago_cliente = total_dolares-tasa_gestion
        print("El total de € entregados coresponden a:",total_dolares,"$")
        print("La tasa de gestión es del 10% y suma un total de:",tasa_gestion,"$")
        print("El total de $ que uste recibirá es de:",pago_cliente,"$")
        salida= str(input("Desea salir del programa si/no"))
        if salida=="si":
            salir=False
    except ValueError:
        print("Ingresa una cantidad de dinero porfavor.")








