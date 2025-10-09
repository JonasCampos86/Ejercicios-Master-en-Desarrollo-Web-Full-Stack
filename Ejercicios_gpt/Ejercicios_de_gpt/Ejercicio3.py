'''
Enunciado:

Simula un cajero automático que permita:

Ver saldo

Depositar dinero

Retirar dinero (solo si hay suficiente saldo)

Usa un menú interactivo con input() para que el usuario elija qué acción realizar.

'''
#creamos la variable con saldo en la cuenta
saldo_total = 1000
retirar=0
#creamos la estructura del cajero 

otra_operacion="si"
print("Bienvenido estes es tu cajero automatico")

while otra_operacion.lower() == "si":
    
    eleccion =input(" Que desea hacer : ver saldo, depositar dinero o retirar dinero ")

    if eleccion.lower()== "ver saldo":
        print(f"Su saldo actual en la cuenta es de {saldo_total}€")
    if eleccion.lower()=="depositar dinero":
        ingreso = int(input("Cuanto desea ingresar: "))
        saldo_total+=ingreso
    if eleccion.lower()== "retirar dinero":
        retirar = int(input("Cuanto desea retirar : "))
        if saldo_total > retirar:
            saldo_total =saldo_total-retirar
        else:
            print("No dispone de tanto dinero en su cuenta")
    otra_operacion = input("Desea realizar otra operacion: si/no ")

print("Muchas gracias por su confianza")
