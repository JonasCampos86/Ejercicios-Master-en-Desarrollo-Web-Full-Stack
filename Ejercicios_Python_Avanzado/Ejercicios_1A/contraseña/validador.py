def validar_contraseña(contraseña):
    """Esta funcion valida la contraseña dad como argumento"""
    #condiciones minimas
    longitud_minima =8
    tiene_mayuscula = False
    tiene_minuscula = False
    tiene_numero = False
    tiene_caracter_especial = False

    #comprobamos la longitud
    if len(contraseña)<longitud_minima:
        return False
    #comprobamso los caracteres de la contraseña
    for caracter in contraseña:
        #comprobamos la mayuscula
        if caracter.isupper():
            tiene_mayuscula=True
        #comprobamos la minuscula
        elif caracter.islower():
            tiene_minuscula=True
        #comprobamos el número
        elif caracter.isdigit():
            tiene_numero=True
        else:
            tiene_caracter_especial=True
    #si todos estos condicionales son true el return sera true, sino sera un false
    return tiene_mayuscula and tiene_minuscula and tiene_numero and tiene_caracter_especial



