#importamos las librerias necesarias
import scipy.stats as stats

#parametros de la distribucion

mu = 170 #media
sigma = 12 #desbiacion standar

x1 = 165 #limite inferior
x2 = 166 #limite superior

prob = stats.norm.cdf(x2,mu,sigma)-stats.norm.cdf(x1,mu,sigma)

print(f"La probabilidad es: {prob*100:.2f}%")

