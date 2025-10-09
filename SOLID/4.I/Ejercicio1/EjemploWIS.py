#importamos librerias
from abc import ABC,abstractmethod

#Interface
class SmartDevide(ABC):
    @abstractmethod
    def turn_on(self)->None:
        pass

    @abstractmethod
    def turn_off(self)->None:
        pass

    @abstractmethod
    def set_temperature(self)->None:
        pass

#Subclases-> implements INTERFACE
class SmartLingt(SmartDevide):
    def turn_on(self):
        print("Turning ligts on")

    def turn_off(self):
        print("Turning ligts off")

    #THIS IS NOT INTERFACE SEGREGATION PRINCIPLE
    def set_temperature(self,temperatura):
       raise NotImplementedError("Smart ligts device cannot set temperature")
     
class SmartTherm(SmartDevide):
    def turn_on(self):
        print("Turning ligts on")
    def turn_off(self):
        print("Turning ligts off")
    def set_temperature(self,temperatura):
        print(f"Change temperature at {temperatura} ")

smartLingt = SmartLingt()
smartLingt.turn_on()
smartLingt.turn_off()
#smartLingt.set_temperature(10)
smartTherm = SmartTherm()
smartTherm.turn_on()
smartTherm.turn_off()
smartTherm.set_temperature(12)
