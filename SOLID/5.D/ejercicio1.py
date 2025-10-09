#EJEMPLO DE APLICACI0N CON OTIFICACIONES
from abc import ABC, abstractmethod

#Abstracción para el servicio de notiificaciones (interface)
class Notificador(ABC):
    @abstractmethod
    def enviar(self, mensaje:str):
        pass

#Implementacion dsel servicio de notificacion para el correro electronico
#Clase de BAJO NIVEL
class EmailNotificador(Notificador):
    def enviar(self, mensaje:str):
        print(f"Enviando el Email: {mensaje}") 

#Implementacion dsel servicio de notificacion para el sms
class SmsNotificador(Notificador):
    def enviar(self, mensaje:str):
        print(f"Enviando el sms: {mensaje}")

#Clase o modulo de ALTO NIVEL  que maneja la logica de negocios
class APP:
    def __init__(self, notificador:Notificador):
        self.notificador = notificador
    
    def enviar_notificacion(self, mensaje:str):
        self.notificador.enviar(mensaje)
        print("Notificación enviada correctamente")

#   MODO DE USOS

email_notificador = EmailNotificador()
app_con_mail = APP(email_notificador)
app_con_mail.enviar_notificacion("Este es un mensaje de prueba de correo electronico")
        
sms_notificador = SmsNotificador()
sms_notificador = APP(sms_notificador)
sms_notificador.enviar_notificacion("Este es un mensaje de prueba de sms")