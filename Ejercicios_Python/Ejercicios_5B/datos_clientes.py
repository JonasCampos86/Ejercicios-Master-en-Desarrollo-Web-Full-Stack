'''
Una compañía tiene dos bases de datos de clientes. La primera base de datos contiene
el nombre del cliente, la dirección de correo electrónico y el número de teléfono. La
segunda base de datos contiene el nombre del cliente, la dirección y el historial de
pedidos. Escribe un programa que tome las dos bases de datos como listas de tuplas y
devuelva una nueva lista de tuplas que contenga solo los clientes que aparecen en
ambas bases de datos. Los clientes se consideran iguales si tienen el mismo nombre.
Pista: Tus datos de entrada podrían ser así —>
'''
base_datos1 = [("Juan", "juan@example.com", "555-1234"), ("Maria",
"maria@example.com", "555-5678"), ("Pedro", "pedro@example.com", "555-9012")]
                                   
base_datos2 = [("Juan", "Calle 123", ["Libro1", "Libro2"]), ("Maria", "Calle 456", ["Libro3"]),
("Luis", "Calle 789", ["Libro4"])]
#sacamos los nombres comunes de las 2 listas
nombres1 = set([cliente[0]for cliente in base_datos1])#sacamos los nombres y los convertimos a sets de un paso
nombres2 = set([cliente[0]for cliente in base_datos2])
nombres_comunes = nombres1.intersection(nombres2) #obtenemos los nombres comnues
#creamos la lista con los nombres comunes
clientes_comunes=[]
for cliente1 in base_datos1:
    if cliente1[0]in nombres_comunes:
        for cliente2 in base_datos2:
            if cliente2[0]==cliente1[0]:
                clientes_comunes.append((cliente1[0],cliente1[1],cliente1[2],cliente2[1],cliente2[2]))

print(clientes_comunes)


