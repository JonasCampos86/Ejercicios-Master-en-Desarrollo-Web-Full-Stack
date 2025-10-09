#Pida al usuario que introduzca datos de una persona (nombre, edad, email).
#Valide la información (por ejemplo, que la edad sea un número).
#Guarde los datos en un archivo JSON.
#Permita leer ese archivo para mostrar todos los contactos guardados

import json

def pedir_contacto():
    """Pide los datos y comprueva que la edad un número 
        y que el mail este completo"""
    try:
        email_ok=True
        nombre = input("Ingrese el nombre: ")
        edad = int(input("Ingrese su edad:  "))
        while email_ok:
            email = input("Ingrese su e-mail: ")
            #comprobamos que el mail esta bien
            signo ="@"
            punto = "."
            if signo in email and punto in email:
                email_ok=False
            else:
                print("Algo esta mal en tu e-mail")
        contacto ={"nombre":nombre,"edad":edad,"e-mail":email}
        return contacto
    except ValueError:
        print("La edad en número porfavor")
        return None

def guardar_contacto(contacto,file_agenda="agenda.json"):
    """Guarda el contacto en un fichero json"""
    try:
        try:

            with open("agenda.json","r")as agenda:
                 contactos=json.load(agenda)
        except FileNotFoundError:
            contactos=[]    
        contactos.append(contacto)


        with open(file_agenda,"w") as agenda:
            json.dump(contactos,agenda,indent=4)

        print("Contacto guardado con exito")
    except Exception as e:
        print("Error al guardar el contacto")



def mostrar_agenda (file_agenda = "agenda.json"):
    """Muestra la agenda"""
    with open(file_agenda)as agenda:
        contactos = json.load(agenda)
        for contac in contactos:
            print(contac)
###Programa prncipal
contacto =pedir_contacto()
if contacto:
    guardar_contacto(contacto)
    mostrar_agenda("agenda.json")













