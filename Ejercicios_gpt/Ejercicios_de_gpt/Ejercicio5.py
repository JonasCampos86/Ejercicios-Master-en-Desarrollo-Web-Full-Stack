'''
Pida al usuario varios nombres.

Para cada nombre, pida el año de nacimiento.

Calcule la edad aproximada.

Al final, imprima una lista con:
👉 Nombre - Edad
'''
#creamos la lista  donde ingresar los nombres
nombres=[]
#creamos el condicional para salidel bucle IMPORTANTE

mas_nombres = "si"
#bucle WHILE
while mas_nombres == "si":
    nombre = input("Introduce un nombre: ")
    nombres.append(nombre)
    #preguntamos por el condicional
    mas_nombres= input("¿Ingresamos más nombres? si/no:  ")

mayor_edad = 18
año_actual=2025
base_datos= []

for nombre in  nombres:
    año=int(input(f"Escribe el año de nacimiento de {nombre}: "))
    edad = año_actual-año
    if edad > mayor_edad:
        print(f"{nombre} es mayor de edad.")
        estatus = "mayor de edad"
    else:
        print(f"{nombre} no es mayor de edad.")
        estatus = "menor de edad "
    base_datos.append([nombre,edad,estatus])
    print(f"La edad de {nombre} es de {edad} años.")

