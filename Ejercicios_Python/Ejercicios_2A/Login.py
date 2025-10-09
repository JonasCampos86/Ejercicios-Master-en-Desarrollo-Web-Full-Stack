'''
Crea un script que pida una contraseña al usuario (el script sabe cual es la contraseña correcta).
Si la contraseña es correcta el script debe darle la bienvenida al usuario. De lo contrario debe
indicarle que la contraseña es incorrecta y darle una segunda oportunidad de introducir la
contraseña. Al segundo fallo debe mostrar un mensaje de error y terminar de ejecutarse.
Cambia el script para que no distinga entre mayúsculas y minúsculas.
(Pista: Necesitarás in If Statement anidado)
'''
#creamos la contraseña corecta
key = "Jonas"
#pedimo al ususario que introduzca la contraseña
usu_key = input(print("Intruduce la contraseña" ))
#comprobamos q la contraseña coincida

if usu_key.lower()==key.lower():
    print("Bienvenido jefe")
else:
    print("Contraseña incorrecta, vualva a intentarlo")
    usu_key = input(print("Intruduce la contraseña" ))
    if usu_key.lower()==key.lower():
        print("Bienvenido jefe")
    else:
        print("Error, cerrando sistemas")    








