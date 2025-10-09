'''
Supongamos que eres un administrador de sistemas y necesitas validar el acceso de los usuarios
a un sitio web. Crea un script que verifique si el nombre de usuario y la contraseña ingresados son
correctos y permita el acceso solo si ambos son correctos.
Pista 1: Puedes crear dos listas, una con los nombre de usuario como por ejemplo…
nombres_usuario = ["juan123", "ana456", „pedro789"]
Y otra lista con las contraseñas guardadas para cada usuario…
contraseñas = ["clave123", "clave456", „clave789"]
Otra opción puede ser que crees una lista de listas con la forma:
nombres_contraseñas = [ ["juan123“,"clave123"] , ["ana456“,“clave456“] , ["pedro789“,
"clave789“] ]
Despues puedes pedir el usuario y contraseña y comprobar si coinciden.
Pista 2: Para verificar si el usuario y contraseña son correctos puedes crear un bucle donde
recorras los nombres de usuario y compruebes con un if si el nombre de usuario introducido y la
contraseña coinciden con los datos de tus listas.
'''
nombres_usuario = ["juan123", "ana456", "pedro789"]

contraseñas = ["clave123", "clave456", "clave789"]

nombres_contraseñas = [ ["juan123","clave123"] , ["ana456","clave456"] , ["pedro789","clave789"] ]

#Pedimos al usuario que introzuca su 
nombre = input("Introduzca el nunmbre de usuario: " )
#pedimos al usuario que introduzca la contraseña
contraseña = input("Intruduzca la contraseña: ")

#comprobamos que los datos son correctos con un simple bucle while y un if
acreditacion = False
i = 0
while i < len(nombres_usuario):
    if nombre == nombres_usuario[i] and contraseña == contraseñas[i]:
        acreditacion = True
    i = i + 1
#si son correctos los datos le damos la bienvenida 
if acreditacion ==True:
    print(f"Bienvenido {nombre}")
#si no lo son le denegamso el acceso
else:
    print("Usuario o contraseña incorrectos ")

