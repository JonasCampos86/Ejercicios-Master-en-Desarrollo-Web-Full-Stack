from typing import Protocol

class IDepositar(Protocol):
    def depositar(self, monto:float)->None: ...

class IRetira(Protocol):
    def retirar(self, monto:float)->None: ...

class ITransferir(Protocol):
    def transferir(self, monto:float,a_cuenta:str)->None: ...

class CuentaAhorros():
    def depositar(self,amount:float)->None:
        print(f"Depositando {amount} en la cuenta de ahorros")
    def retirar(self, amount:float)->None:
        print(f"Retirando {amount} de la cuenta de ahorros")

class CuentaCorriente(): 
    def depositar(self,amount:float)->None:
        print(f"Depositando {amount} en la cuenta corriente")
    def retirar(self, amount:float)->None:
        print(f"Retirando {amount} de la cuenta corriente")
    def transferir(self, amount:float, a_cuenta:str)->None:
        print(f"Se ha transferido {amount}  de tu cuenta corriente a la cuenta {a_cuenta}")


def realizar_pago(cuenta:ITransferir,monto:float,a_cuenta:str)->None:
    cuenta.transferir(monto,a_cuenta)







cuentaAhorros = CuentaAhorros()
#realizar_pago(cuentaAhorros,23)
#cuentaAhorros.depositar(123)
#cuentaAhorros.retirar(100)

cuenta_corriente = CuentaCorriente()
realizar_pago(cuenta_corriente,12,"paramilolytwich")
#cuenta_corriente.depositar(154)
#cuenta_corriente.retirar(45)
#cuenta_corriente.transferir(40,"amicuentadelolytwich")
