class MetodoPagoBase:
    def procesar_pago():
        pass

class MetodoPagoAuto(MetodoPagoBase):
    def procesar_pago(self, cantidad):
        pass

class MetodoPagoManual(MetodoPagoBase):
    def procesar_pago(self, cantidad):
        pass

##Metodos de pago automaticos
class PagoTarjeta(MetodoPagoAuto):
    def __init__(self, numero_tarjeta):
        self.numero_tarjeta = numero_tarjeta
    
    def procesar_pago(self,cantidad):
        print(f"Procesando pago de {cantidad} de la tarjeta nº {self.numero_tarjeta}")
    
class PagoPaypal(MetodoPagoAuto):
    def __init__(self, cuenta_paypal):
        self.cuenta_paypal = cuenta_paypal
    
    def procesar_pago(self,cantidad):
        print(f"Procesando pago de {cantidad} de la cuenta nº {self.cuenta_paypal}")

class PagoBitcoin(MetodoPagoAuto):
    def __init__(self, direccion_bitcoin):
        self.direccion_bitcoin = direccion_bitcoin
    
    def procesar_pago(self,cantidad):
        print(f"Procesando pago de {cantidad} de la direccion {self.direccion_bitcoin} de Bitcoin")

##Metodos de pago manuales
class PagoCheque(MetodoPagoManual):
    def __init__(self,numero_cheque):
        self.numero_cheque = numero_cheque

    def procesar_pago(self,cantidad):
        print(f"El pago de {cantidad} con cheque {self.numero_cheque}")
    
    

def realizar_pago_auto(metodo_pago:MetodoPagoAuto, cantidad):
    metodo_pago.procesar_pago(cantidad)  


def realizar_pago_manual(metodo_pago:MetodoPagoManual, cantidad):
    metodo_pago.procesar_pago(cantidad)  



#Instanciamos las clases
pago_tarjeta = PagoTarjeta("123.456.789.125")
pago_paypal = PagoPaypal("mi_cuenta@pago.com")
pago_bitcoin = PagoBitcoin("lksdf63240#~$%ASDF()=1233")
pago_cheque = PagoCheque("01011986")

realizar_pago_auto(pago_tarjeta,1550)
realizar_pago_auto(pago_paypal,1890)
realizar_pago_auto(pago_bitcoin,3000)

realizar_pago_manual(pago_cheque,1234)
realizar_pago_auto(pago_cheque,56)