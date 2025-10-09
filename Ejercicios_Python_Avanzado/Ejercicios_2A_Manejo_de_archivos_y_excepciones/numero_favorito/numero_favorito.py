import json

#pedir num favorito al usuario
#guardas el num favorito
#comprobar si esta guardado anteriomente
#imprimir el num favorito


def comprobar_numero_favorito():
    """Comprobamos si exite un archivo con el numero favorito
    y si ya existe va a devolver el numero"""
    try:
        with open("numero_favorito.json","r")as file:  
            n_fav = json.load(file)
            return(n_fav)
    except FileNotFoundError:
        return None
def guardar_num_fav(n_fav):
    """Guarda el numero en un archivo json"""
    #abrimos el archivo
    with open("numero_favorito.json","w") as file:
        #guardamos los datos del numero favorito
        json.dump(n_fav,file)
def pedir_num_fav():
    n_fav=int(input("Dime tu numero favorito:  "))
    guardar_num_fav(n_fav)
    return n_fav
def print_num_fav(n_fav):
    print(f"Tu numero favorito es......{n_fav}")
#parte del programa
numero_favorito = comprobar_numero_favorito()
if numero_favorito:
    print_num_fav(numero_favorito)
else:
    numero_favorito=pedir_num_fav()
    print_num_fav(numero_favorito)



