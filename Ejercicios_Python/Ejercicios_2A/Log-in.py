'''
LOG-IN:
Crea un script que pida una contraseña al usuario (el script sabe cual es la contraseña correcta).
Si la contraseña es correcta el script debe darle la bienvenida al usuario. De lo contrario debe
indicarle que la contraseña es incorrecta y darle una segunda oportunidad de introducir la
contraseña. Al segundo fallo debe mostrar un mensaje de error y terminar de ejecutarse.
Cambia el script para que no distinga entre mayúsculas y minúsculas.
(Pista: Necesitarás in If Statement anidado)
'''

#asignamos una contraseña correcta
contraseña = "Jonas"
#predimos la contraseña y si es corecta saludamos y sino damos otra oportunidad
contraseña_usu =input(print("Contraseña:"))

if contraseña == contraseña_usu:
    print("Bienvenido jefe")
else :
     print("La contraseña es incorrecta, vuelve a intenarlo")
     input(contraseña_usu)

     if contraseña_usu == contraseña :
       print("Bienvenido jefe,me habias asustado")
     else:
         print("Errorrrrrrrrr")
    
    













