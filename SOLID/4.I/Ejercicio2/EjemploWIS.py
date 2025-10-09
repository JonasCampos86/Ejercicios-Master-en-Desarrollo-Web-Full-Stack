#using PROTOCOL

from typing import Protocol

class IOperacionFinanciera(Protocol): 
    def depositar(self,amount:float)->None: ...
    def retirar(self, amount:float)->None: ...
    def transferir(self, amount:float, a_cuenta:str)->None: ...

class CuentaAhorros:
    def depositar(self,amount:float)->None:
        print(f"Depositando {amount} en la cuenta de ahorros")
    def retirar(self, amount:float)->None:
        print(f"Retirando {amount} de la cuenta de ahorros")
#      RAISE una excepcion rompre ISP  
    def transferir(self, amount:float, a_cuenta: str)->None:
        raise NotImplementedError("La cuenta de ahorros no puede transferir")

class CuentaCorriente: 
    def depositar(self,amount:float)->None:
        print(f"Depositando {amount} en la cuenta corriente")
    def retirar(self, amount:float)->None:
        print(f"Retirando {amount} de la cuenta corriente")
    def transferir(self, amount:float, a_cuenta:str)->None:
        print(f"Se ha transferido {amount}  de tu cuenta corriente a la cuenta {a_cuenta}")


cuenta_ahorros = CuentaAhorros()
cuenta_ahorros.depositar(100)
cuenta_ahorros.retirar(50)
#cuenta_ahorros.transferir(15,"assdads23@@sdrsdr€~¬€¬")

cuenta_corriente = CuentaCorriente()
cuenta_corriente.depositar(150)
cuenta_corriente.retirar(50)
cuenta_corriente.transferir(42,"amicuentadelolytwich")