'''
BUSCANDO EN PI
Busca si tu fecha de nacimiento esta en los primeros 10000 digitos de pi (y
en que posición. Puedes usar find()).
'''

def buscar_en_pi(filename,fecha):
    """ busca la fecha de nacimiento en el archivo
      de las 10000 primeras cifras de pi"""

    with open(filename)as file:
        n_pi=file.read()
        indice = n_pi.find(fecha)
        return indice
#Ejemplo de uso
filename="pi_1000.txt"
fecha = "12457896"
busqueda = buscar_en_pi(filename,fecha)   
if busqueda==-1:
    print("Tu cumpleaños no esta en pi")
else:
    print("Tu cumpleaños si esta en pi y en la posicion: ",busqueda) 






