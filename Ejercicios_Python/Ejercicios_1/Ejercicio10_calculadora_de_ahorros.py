'''
Ahora que ya tienes soltura con los fundamentos de Python toca poner tus conocimientos en
práctica en un proyecto más extenso. El objetivo es crear un programa con el que puedas calcular
tus ahorros anuales. El programa deberá calcular cuánto puede ahorrar una persona dado sus
ingresos por hora, sus horas trabajadas y su gasto de vida semanal.
1. Primero haremos que el programa nos pida nuestro nombre y después imprima un saludo por
pantalla de tipo: ‘Hola <Nombre>’
2. Guarda el dinero ganado por hora y las horas trabajadas en la semana en dos variables
diferentes
3. Multiplica ambas variables para obtener el salario semanal
4. Ahora calcula las ganancias anuales. Guarda el valor en una variable.
5. Ahora imprime por pantalla un mensaje del tipo: ‘<Nombre> tiene unas ganancias anuales de:
<cantidad> euros’
6. Pide los gastos semanales por pantalla y guárdalos en una variable.
7. Calcula el gasto anual
8. ¡Recuerda añadir comentarios sobre lo que esta haciendo cada parte del código!
9. Los ahorros anuales serán la resta entre lo ganado durante el año menos los gastos anuales.
10. Imprime los resultados por pantalla
¿Si el usuario decidiese trabajar a tiempo parcial (25 horas semanales) y decidiese reducir sus
gastos a 3/4 de lo que gastaba antes, tendría suficiente dinero para sus gastos?
(Pista: tan solo necesitas cambiar los valores de las variables de ‘horas trabajadas por semana’ y
‘gastos semanales’)

'''

#--- Pedir el nombre y saludar

nombre = input("¿Como te llamas?" )
print ("Hola ", nombre, "un placer coonocerte.")
print("¡¡¡Esto es una calculadora de ahorros!!!")
# Pedir cuanto gana "nombre" por hora y cuantas horas trabaja a la semana
euros_hora = float(input("¿Cuanto ganas a la hora?" ))
horas_semana = float(input("¿Cuantas horas trabajas a la semana?" ))

# Calcualamos las ganacias semanales
ganancia_semanal = euros_hora * horas_semana

# Calcualamos las ganacias anuales
ganancias_anuales = ganancia_semanal * 52.1

# Decimos cuanto gana al año
print(nombre,"ganas una cantidad de : ",ganancias_anuales,"Euros al año")

# Pedimos los ganastos semanales y calculamos el anual
gastos_semana = float(input("¿Cuantos son tus gastos semananes?" ))
gastos_anuales = gastos_semana * 52.1
print("Gastas al año:",gastos_anuales,"euros")

# Calcular los ahorros anuales. 
ahorro_anual = ganancias_anuales - gastos_anuales

# Decimos cuanto ahorra al año
print("Tus ahorros anuales son de: ",ahorro_anual, "euros")

# Informamos de sus ganancias trabajando solo 25 horas y de si redugera el gasto a 3/4
ganacia_25_horas = euros_hora * 25
ganancia_25_anual = ganacia_25_horas * 52.1
gastos_anuales_reducidos = (gastos_anuales / 4) * 3
ahorro_anual_reduciendo = ganancia_25_anual - gastos_anuales_reducidos

print("Si decidieras trabajar 25 horas a la semana ganarias:",ganacia_25_horas,"euros a la semana")
print("Y ganarias al año:",ganancia_25_anual,"euros")
print("Y si redujeras tus gastos a 3/4 solo gastarias:",gastos_anuales)
print("Y ahorrarias un total de:",ahorro_anual_reduciendo,"euritos")

                     
                     





































