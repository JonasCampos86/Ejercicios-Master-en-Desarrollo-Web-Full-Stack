'''
Una compañía de automóviles vende tres tipos de coche: RBM Serie 1, RMB Serie plus, RBM
todoterreno. Cada uno de estos coches tiene un precio de venta y el vendedor recibe una
comisión diferente por cada tipo de coche que ha vendido.
Suponga que los precios y las comisiones son:
RBM Serie 1:
precio: 20.000 EU, comisión: 3%
RMB Serie plus:
precio: 35.000 EU, comisión: 5%
RBM todoterreno:
precio: 60.000 EU, comisión: 7%
Crea un programa donde el usuario introduzca el numero de coches vendidos de cada tipo ese
mes y que le devuelva la cantidad en euros a comisionar ese mes.
'''
coche_serie1 = float(input("¿Cunatos RMB Serie 1 vendiste este mes?" ))
coche_serieplus = float(input("¿Cunatos RMB Serie Plus vendiste este mes?" ))
coche_todoterreno = float(input("¿Cunatos RMB Todoterreno vendiste este mes?" ))
# calcular los porcentajes de cada coche
comision_serie1 = (3 * 20000)/100 * coche_serie1
comision_serieplus = (5 * 35000)/100 * coche_serieplus
comision_todoterreno = (7 * 60000)/100 * coche_todoterreno
comision_total = comision_serie1 + comision_serieplus + comision_todoterreno
print("Tus comisiones este mes son:",comision_total,"€ FELICIDADES")















