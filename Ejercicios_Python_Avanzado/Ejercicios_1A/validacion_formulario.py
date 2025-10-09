'''
VALIDACIÓN DE FORMULARIO
Crea un programa que valide un formulario de registro. Crea una función
llamada validar_formulario que reciba diferentes campos de un formulario
(nombre, correo electrónico y número de teléfono) y verifique si los valores
ingresados cumplen con los requisitos especificados, siendo estos:
1. Que el nombre tenga una longitud minima de 3 caracteres
2. Que el teléfono este conformado por dígitos y tenga una longitud de 9
caracteres
3. Que el email contenga un “@“ y un “.”
'''
def validar_formulario(nombre,tlf,email):
    letra = "@"
    punto ="."
    long=len(nombre)
    if (long>2 )and (tlf.isdigit()) and ( len(tlf) == 9 )and (letra in email )and ( punto in email):
        return True
print("Rellene el formulario siguendo las instrucciones:")
print("Ingrese su nombre , es necesario que contenga más de 3 caracteres:")
nombre_usuario=input( )
print("Ingrese su número de telefono:")
telefono=input( )
print("Ingrese su e-mail:")
email_usuario=input()

if validar_formulario(nombre=nombre_usuario,tlf=telefono,email=email_usuario):
    print("REGISTRO COMPLETO¡¡¡")
else:
    print("Registro fallido.......")

    



















