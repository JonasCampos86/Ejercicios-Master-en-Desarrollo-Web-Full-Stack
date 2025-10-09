
#En la competición de skeleton de las olimpiadas de invierno hay tres finalistas. El cronómetro mide
#los siguientes tiempos:
#***Hannah Neise: 8 minutos 3 segundos y 10 centésimas
#***Jackie Narracott: 12 minutos 7 segundos y 8 centésimas
#***Kimberley Bos: 9 minutos 14 segundos y 3 centésimas
# 1. Crea un script que pida los tiempos por pantalla para cada uno de los finalistas
# 2. Convierte los tiempos de minutos-segundos-centésimas a segundos
# 3. Sabiendo que la pista es de 100 metros calcula la velocidad media de cada uno de ellos en
# metros por segundo.
#4. Imprime los resultados por pantalla

print("Dime el timepo de Hannah Neise")
minutos_hannah = float(input("¿Minutos?" ))
segundos_hannah = float(input("¿Segundos?" ))
centesimas_hannah = float(input("¿Centesimas?" ))
print("Dime el timepo de Jackie Narracott")
minutos_jackie = float(input("¿Minutos?" ))
segundos_jackie = float(input("¿Segundos?" ))
centesimas_jackie = float(input("¿Centesimas?" ))
print("Dime el tiempo de Kimberley Bos")
minutos_kimber = float(input("¿Minutos?" ))
segundos_kimber = float(input("¿Segundos?" ))
centesimas_kimber = float(input("¿Centesimas?" ))
## Tiempos Hannah y velocidad en pista
total_segundos_hannah = (minutos_hannah * 60)+ segundos_hannah + (centesimas_hannah/100)
velocidad_hannah =100/total_segundos_hannah
## Tiempos Jakie y velocidad en pista
total_segundos_jakie = (minutos_jackie * 60) + segundos_jackie + (centesimas_jackie/100)
velocidad_jakie =  100/total_segundos_jakie 
## Tiempos Kimberly y velocidad en pista
total_segundos_kimber = (minutos_kimber * 60) + segundos_kimber + (centesimas_kimber/100)
velocidad_kimber =  100/total_segundos_kimber
##exponer los resultados
print("La velocidad de las corredoras son:")
print("Hannah con una velocidad de:", velocidad_hannah,"M/S")
print("Jakie con una velocidad de:", velocidad_jakie,"M/S")
print("Kmberly con una velocidad de:",velocidad_kimber,"M/S")








