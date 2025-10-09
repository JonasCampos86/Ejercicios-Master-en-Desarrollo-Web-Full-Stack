class CuentaBancaria:
    def __init__(self, numero_cuenta, saldo):
        self._numero_cuenta = numero_cuenta#atributo protegido
        self.__saldo = saldo#atributo privado
    
    def get_saldo(self):
        return self.__saldo
    
    def depositar(self,ingreso):
        self.__saldo += ingreso

    def retirar(self,retirada):
        if self.__saldo>=retirada:
            self.__saldo -= retirada
        else:
            print("No hay suficiente dinero en la cuenta")

#Modo de uso

cuenta = CuentaBancaria("123456",10000)
#print(cuenta._numero_cuenta)
#Esta forma no es la recomendable
#print(cuenta._CuentaBancaria__saldo)
#Esta es la forma correcta con un getter
#valor =cuenta.get_saldo()

cuenta.depositar(120)
cuenta.retirar(60)
print(cuenta.get_saldo())


