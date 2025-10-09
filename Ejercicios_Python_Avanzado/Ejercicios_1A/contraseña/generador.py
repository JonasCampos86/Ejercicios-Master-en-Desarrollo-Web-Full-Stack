import random
import string



def generar_contraseña_segura(longitud,incluir_mayusculas=True,incluir_minuculas=True,incluir_numeros=True,incluir_caracteres_especiales=True):
    """Genera una contraseña segura dada una longitud"""
    #longitud : numero de caracteres de la contaseña
    #incluir_mayusculas: si true la contraseña incluira al menos un mayuscula
    #incluir_minusculas: si true la contraseña incluira al menos un minuscula
    #incluir_numero: si true la contraseña incluira al menos un numero
    #incluir_caracter_ especial: si true la contraseña incluira al menos un caracter especial

    caracteres = ""
    #incluimos una mayuscula
    if incluir_mayusculas:
        caracteres += string.ascii_uppercase
    #incluimos una minuscula
    if incluir_minuculas:
        caracteres+= string.ascii_lowercase
    #incluimos un número
    if incluir_numeros:
        caracteres+= string.digits
    #incluimos caracteres especiales
    if incluir_caracteres_especiales:
        caracteres+= string.punctuation   
    #con lo anterior generamos una contraseña ramdon 
    contraseña ="".join(random.choice(caracteres)for i in range(longitud))
    #retornamos una contraseña
    return contraseña




