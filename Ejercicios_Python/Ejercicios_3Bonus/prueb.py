import numpy as np
a = np.zeros((4,4),dtype = np.int64)
a[:]=2
b = np.arange(1,17).reshape((4,4))
print(a)
print(b)
print("--------")
print(b.mean(0))





