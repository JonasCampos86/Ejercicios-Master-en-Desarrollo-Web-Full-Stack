'''
En un restaurante el menú consta de las siguientes opciones:
Ensalada mixta ———————— 12 EU
Sopa de pescado ——————— 10 EU
Dorada al horno ———————— 18 EU
Arroz al curry ————————— 14 EU
Lasaña de carne ——————— 15 EU
Brownie de chocolate ————— 8 EU
Helado ——————————— 6 EU
Refrescos —————————— 5,5 EU
Café ———————————— 3,5 EU
Escribe un script que lea la cantidad de cada alimento consumido y que calcule e imprima el total
de la cuenta.
'''
# pedimos las cantidades que han consumido
ensalada_mixta = float(input("¿Cuántas ensaladas mixtas habéis pedido?" ))
sopa_de_pescado = float(input("¿Cuántas sopas de pescado habéis pedido?" ))
dorada_al_horno = float(input("¿Cuántas doradas habéis pedido?" ))
arroz_al_curry = float(input("¿Cuánto arróz al curry habéis pedido?" ))
lasaña_de_carne = float(input("¿Cuántas lasañas de carne habéis pedido?" ))
brownie_de_chocolate = float(input("¿Cuántos brownies habéis pedido?" ))
helado = float(input("¿Cuántos helados habéis pedido?" ))
refrescos = float(input("¿Cuántos refrescos habéis pedido?" ))
cafe = float(input("¿Cuántos cafés habéis pedido?" ))
# calculamos el total de la cuenta
cuenta = (ensalada_mixta * 12) + (sopa_de_pescado * 10) + (dorada_al_horno * 18) + (arroz_al_curry * 14) + (lasaña_de_carne * 15)  + (brownie_de_chocolate * 8) + (helado * 6) + (cafe *3.5 )
# imprimimos la cuenta
print("La cuenta asciende a:",cuenta,"Euros")