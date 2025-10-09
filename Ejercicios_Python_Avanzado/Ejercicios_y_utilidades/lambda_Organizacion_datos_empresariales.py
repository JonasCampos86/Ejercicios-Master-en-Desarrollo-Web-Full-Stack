from itertools import groupby

def ordenar_empleados(empleados):
    empleados_ordenados =sorted(empleados,key=lambda emp: (emp["rendimiento"],-emp["edad"]),reverse=True)
    return empleados_ordenados

def agrupar_empleados_por_pais(empleados_ordenados):
    #agrupar empleados por pais
    empleados_agrupados ={pais:list(grupo_empleados)for pais,grupo_empleados in groupby(empleados_ordenados,key=lambda emp:emp["pais"]) }
    return empleados_agrupados
def mostrar_empleados_agrupados(empleados_agrupados):
    for pais, grupo_empleados in empleados_agrupados.items():
        print(f"\nPais:{pais}")
        for empleado in grupo_empleados:
            print(empleado)

empleados = [
    {"nombre": "Jonás Campos",   "edad":39,"pais":"España",  "rendimiento": 90},
    {"nombre": "Irene Exposito", "edad":36,"pais":"España",  "rendimiento": 99},
    {"nombre": "Lucas Campos",   "edad":3, "pais":"Portugal","rendimiento": 85},
    {"nombre": "Jose Caro",      "edad":46,"pais":"Portugal","rendimiento": 95},
    {"nombre": "Helena Galdon",  "edad":36,"pais":"Portugal","rendimiento": 97},
    {"nombre": "Inés Caro",      "edad":6, "pais":"Italia",  "rendimiento": 99},
    {"nombre": "Martin Caro",    "edad":4, "pais":"Italia",  "rendimiento": 98}
]

empleados_ordenados= ordenar_empleados(empleados)
empleados_agrupados= agrupar_empleados_por_pais(empleados_ordenados)
mostrar_empleados_agrupados(empleados_agrupados)
