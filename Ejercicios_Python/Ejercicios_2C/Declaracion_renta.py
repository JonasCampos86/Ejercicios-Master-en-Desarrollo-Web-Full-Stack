'''
Para tributar en un determinado país es necesario ser mayor de edad y cobrar más de 1000 euros
al mes. Además los tramos impositivos de la renta anual son los siguientes:
RENTA TIPO IMPOSITIVO
Menos de 15.000 eu 5%
Entre 15.000 y 25.000 eu 15%
Entre 25.000 y 35.000 eu 20%
Entre 35.000 y 60.000 eu 30%
Más de 60.000 eu 45%
Escribe un script que primero compruebe si eres susceptible de que se te aplique algún tipo
impositivo y en caso afirmativo imprima por pantalla cuál te tocaría.
'''
#Pedir al cliente la edad
edad= float(input("¿Cuantos años tienes? "))
#Pedir al cliente cuanto gana al mes
mensualidad =float(input("¿Cuanto ganas al mes? "))
#Comprobaciones
if (edad<17.0) or (mensualidad<1000):
    print("Estas exento de cualquier impositivo")
else:
    sueldo_año = mensualidad*12
    if (sueldo_año<15000):
        pagar =(5/100)*sueldo_año
        print("Tienes que pagar el 5% que es un total de: ",pagar,"Euros")
    elif (sueldo_año>=15000) and(sueldo_año<25000):
         pagar =(15/100)*sueldo_año
         print("Tienes que pagar el 15% que es un total de: ",pagar,"Euros")
    elif(sueldo_año>=25000) and (sueldo_año<35000):
        pagar =(20/100)*sueldo_año
        print("Tienes que pagar el 20% que es un total de: ",pagar,"Euros")
    elif(sueldo_año>=35000) and (sueldo_año<60000):
        pagar =(30/100)*sueldo_año
        print("Tienes que pagar el 30% que es un total de: ",pagar,"Euros")
    else:
        pagar =(45/100)*sueldo_año
        print("Tienes que pagar el 45% que es un total de: ",pagar,"Euros")
























