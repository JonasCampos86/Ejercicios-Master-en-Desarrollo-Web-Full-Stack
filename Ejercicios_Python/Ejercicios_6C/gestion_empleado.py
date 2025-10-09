'''
GESTIÓN DE EMPLEADOS:
Imagina que eres el gerente de recursos humanos de una empresa y
necesitas gestionar la información de los empleados. Cada empleado
tiene un nombre, salario y departamento al que pertenece. Implementa
un programa en Python que permita agregar nuevos empleados,
actualizar el salario de un empleado existente, mostrar la lista completa
de empleados y calcular el promedio salarial por departamento.


'''
#añadir nuevos empleados con su salario
#modificar el salario de empleados existentes
#mostrar un listado con los empleados y sueldos
#mostrar el promedio de salarios en la empresa
empleados = {}
continuar = True

while continuar:
    #le doy las opciones del programa
    print("Elija la opcion que desee:")
    print("Opcion 1 : Añadir un nuevo trabajador y su salario")
    print("Opcion 2 : Modificar el salario de un tabajador existente")
    print("Opcion 3 : Sacar una lista de los empleados ")
    print("Opcion 4 : Sacar el promedio de los salarios de los empleados")
    print("Opcion 5 : Finalizar el programa")
    opcion = int(input( ))
    #comprobamos que a elegido correctamente
    if opcion <1 and opcion > 6 :
        print("Opcion no valida")
        #opcion 1
    elif opcion == 1:
        nombre= input("Escriba el nombre del nuevo empleado: ").title()
        #verificamos que el empleado no esta en la base de datos
        if nombre.title() in empleados:
           print("Ese empleado ya existe")
        else:
            salario=int(input("Ingrese su salario anual: "))
            #añadimo los datos en la base
            empleados[nombre]={"Salario":salario}
    elif opcion == 2 :
        nombre = input("Escriba el nombre del trabajador al que le quieras cambiar el sueldo: ").title()
        #comprobamos que el trabajado esta en la base de datos
        if nombre.title() in empleados:
            salario_nuevo = int(input("Introduzca el nuevo salario: "))
            #actualizamos su salario
            empleados[nombre]={"Salario":salario_nuevo}
        else:
            print("Ese empleado no existe.")
    elif opcion == 3 :
        #hacemos un bucle para mostrar los trabajadores
        for empeado in empleados:
            print(empeado)
    elif opcion == 4 :
        #el promedio es la suma de todos los salarios dividido entre el total de trabajadores
        total_salarios = sum(datos["Salario"]for datos in empleados.values())
        total_trabajadores = len(empleados)
        salario_promedio = total_salarios/total_trabajadores
        print("El promedio de los salarios es de : ",salario_promedio)
    elif opcion ==5:
        print("Cerrando programa en 3 .....2.......1......chau pescau")
        continuar=False
    






        
    
