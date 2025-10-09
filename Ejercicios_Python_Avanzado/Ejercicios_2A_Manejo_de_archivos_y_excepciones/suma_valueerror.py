'''
SUMA Y VALUEERROR
Un problema común al solicitar una entrada numérica ocurre cuando las
personas ingresan texto en lugar de números. Cuando intentas convertir la
entrada a un entero (int), obtendrás un ValueError. Escribe un programa que
solicite dos números. Suma los números y muestra el resultado. Captura el
ValueError si alguno de los valores de entrada no es un número e imprime un
mensaje de error amigable. Prueba tu programa ingresando dos números y
luego ingresando texto en lugar de un número. Envuelve tu código del en un
bucle while para que el usuario pueda continuar ingresando números incluso
si comete un error ingresando texto en lugar de un número.

'''
#solicictar 2 numeros y dar el resultado
#encontrar el ValueError y hacer que no de chaseh el scrip
salir=True

print("Este programa funciona solo para sumas númerop enteros")
while salir:
        try:
          num1 = int(input("Introduce el primer número: "))
          num2 = int(input("Introduce el segundo número: "))
        except ValueError:
          print("Vuelve a intentarlo poniendo un número entero")
        else:
             resultado = num1+num2
             print("El resultado es: " ,resultado)
             escape = input("¿Desea continuar? escriba si/no: ")
             if escape=="no":
                 salir=False
    
















