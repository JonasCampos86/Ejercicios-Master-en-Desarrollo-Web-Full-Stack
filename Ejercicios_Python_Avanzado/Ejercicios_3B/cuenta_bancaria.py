'''
CUENTA BANCARIA
Crea una clase "CuentaBancaria" con atributos como número de cuenta y
saldo. Implementa métodos para depositar y retirar dinero, y muestra el
saldo actual.
'''
class  CuentaBancaria:
    def __init__(self,num_cuenta,saldo):
        self.numCuenta = num_cuenta
        self.saldo = saldo

    def retirada(self,dinero_sacar):
        """Para sacar dinero"""
        self.dinero_sacar=dinero_sacar
        if self.dinero_sacar > self.saldo:
            print("No puedes sacar esa cantidad porque excede tu saldo en la cuenta corriente")
        else:
            self.saldo = self.saldo-self.dinero_sacar
        

    def ingreso(self,dinero_meter):
        '''Para ingresar dinero'''
        self.dinero_meter = dinero_meter
        self.saldo = self.saldo + self.dinero_meter
        

    def mostrar_saldo(self):
        print(f"El dinero que hay en la cuenta  es de: {self.saldo}")

cuenta = CuentaBancaria(12345678910,1500)
print(cuenta.numCuenta," ",cuenta.saldo)
cuenta.retirada(50)
cuenta.mostrar_saldo()
cuenta.ingreso(2000)
cuenta.mostrar_saldo()




















