from abc import ABC ,abstractmethod

#Clase Maestra
class ManejadorPedidos(ABC):
    @abstractmethod
    def procesar_pedido(self, detalles):
        pass

class PedidoParaLlevar(ManejadorPedidos):
     
    def procesar_pedido(self, detalles):
        print(f"Procesando pedido para llevar : {detalles}")

class PedidoLocal(ManejadorPedidos):
     
    def procesar_pedido(self, detalles):
        print(f"Procesando pedido para local : {detalles}")

class PedidoEntregaDomicilio(ManejadorPedidos):
     
    def procesar_pedido(self, detalles):
        print(f"Procesando pedido para domicilio : {detalles}")

class PedidoEspecial(ManejadorPedidos):
     
    def procesar_pedido(self, detalles):
        print(f"Procesando pedido especial : {detalles}")


class Restaurante:
    def __init__(self, nombre)->None:
        self.nombre = nombre
        self.manejadores_pedido = []
    
    def registrar_pedidos(self,pedido):
        
        self.manejadores_pedido.append(pedido)
    
    def realizar_pedido(self,pedido,detalles):

        pedido.procesar_pedido(detalles)
       
restaurante = Restaurante("Casa Caro")
restaurante.realizar_pedido(PedidoEntregaDomicilio(),"Gachas")
restaurante.realizar_pedido(PedidoEspecial(),"Macarrones Guarros")

