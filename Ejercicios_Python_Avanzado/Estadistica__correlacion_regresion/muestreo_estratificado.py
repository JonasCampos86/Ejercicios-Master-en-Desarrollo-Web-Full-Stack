#importamos las librerias necesarias
import numpy as np
import pandas as pd

#generamos nuestros datos

data = {

    "individuos":np.arange(1,101),
    "estratos":np.repeat(["A","B","C","D"],25)
}
poblacion = pd.DataFrame(data)
#print(poblacion)

tamaño_muestra= 12

#~muestra estratificada

muestra_estratificada = poblacion.groupby("estratos",group_keys=False).apply(lambda x: x.sample(int(np.rint(tamaño_muestra * len(x)/len(poblacion)))))

print("Muestra estratificada",muestra_estratificada)