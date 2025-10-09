# Pedir por consola cuantos € quiere cambiar a dolares
# 1€=1.2$
# cobrar al cliente una tasa del 10% y decirle lo q recibira.
Euros = 1.2 
print("Cuantos € me entregas para cambio")
cantidad = float(input())
total_dolares = cantidad * Euros
print("El total de € entregados coresponden a:",total_dolares,"$")
tasa_gestion = total_dolares / 10
pago_cliente = total_dolares - tasa_gestion


