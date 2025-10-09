from abc import ABC, abstractmethod

class Swichable(ABC):
    @abstractmethod
    def turn_on(self)->None:
        pass
    @abstractmethod
    def turn_off(self)->None:
        pass

class TemperatureRegulatable(ABC):
    @abstractmethod
    def set_temperature(self,temperature:int)->None:
        pass

class SmartLigth(Swichable):
        
    def turn_on(self):
        print("Turning ligts on")
    
    def turn_off(self):
        print("Turning ligts off")

class SmartTherm(Swichable,TemperatureRegulatable):
    def turn_on(self):
        print("Turning ligts on")
    def turn_off(self):
        print("Turning ligts off")
    def set_temperature(self,temperatura:int):
        print(f"Change temperature at {temperatura} ")

smartLigth = SmartLigth()
smartLigth.turn_on()
smartLigth.turn_off()

smartTherm = SmartTherm()
smartTherm.turn_on()
smartTherm.turn_off()
smartTherm.set_temperature(12)