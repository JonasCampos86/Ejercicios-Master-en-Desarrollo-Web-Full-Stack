'''
Por motivos de seguridad una contraseña debe tener una vocal en minúscula, dos símbolos
especiales diferentes (pueden ser solo * o #). Dada una contraseña ingresada por el usuario,
comprueba si es una contraseña segura e indícalo por pantalla.
'''
#pedimos una contraseña q si tiene a i u y ademas tambien tiene * y # diga q es segura
#de lo contario decimo q no lo es

contraseña = input("Introduce una contraseña ")

if ("a" in contraseña or "i" in contraseña or "u" in contraseña) and("*"in contraseña or "#" in contraseña):
    print('La contraseña es segura')
else:
    print('La contraseña es insegura')










