'''
En una hamburguesería han abierto la posibilidad de hacer pedidos online. Ofrecen básicamente
dos productos de fama mundial: su hamburguesa clásica y la hamburguesa vegana.
Los ingredientes extra de la hamburguesa clásica son:
- Queso Idiazabal
- Bacon
- Huevo
Los ingredientes extra de la hamburguesa vegana son:
- Tofu
- Cebolla caramelizada
Crea un script que le pregunte al usuario que tipo de hamburguesa quiere. En función de la
respuesta debe enseñarle los ingredientes extra disponibles y permitirle escoger uno de ellos.
Finalmente debe imprimir por pantalla que tipo de hamburguesa se ha elegido y cuales son sus
ingredientes.
'''
#pedirle al cliente que Hamburguesa quiere.
tipo_hamburguesa = str(input("¿Que hamburguesa quieres? Clasica o Vegana "))
tipo_hamburguesa = tipo_hamburguesa.lower()
#DEcirle al cliente a razon de la hamburguesa que ha elejido, los extra que tiene cada una
#pero solo puede elegir 1 de ellos
if tipo_hamburguesa == "clasica":
    print("Esta hamburguesa tiene 3 ingredientes extra de los cuales puedes escojer 1 son;\n" \
    "Queso Idiazabal \n" \
    "Bacon \n" \
    "Huevo\n" \
    "¿Cual quieres de los 3?")
    extra = input()
    extra = extra.lower()
    print("Tu elección es hamburguesa clasica con ",extra)
elif tipo_hamburguesa == "vegana":
    print("Esta hamburguesa tiene 2 ingredientes extra de los cuales puedes escojer 1 son;\n" \
    "Tofu \n" \
    "Cebolla caramelizada \n"
    "¿Cual quieres de los 2?")
    extra2 = input()
    extra2 = extra2.lower()
    print("Tu elección es hamburgesa vegana con ",extra2)










