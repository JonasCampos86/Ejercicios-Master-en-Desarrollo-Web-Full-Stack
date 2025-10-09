class Engine:
    def getRPM(self):
        return 3000#valor por defecto del motor
    
class Vehicle:
    def __init__(self, name, speed, _engine):
        self._name = name
        self._speed = speed
        self._engine = _engine
        
    def getName(self):
        return self._name
    
    def getEngineRpm(self):
        return self._engine.getRPM()
    
    def getMaxSpeed(self):
        return self._speed

class VehiculePrinter:
    def __init__(self, vehicle):
        self._vehicle = vehicle
    def printInfo(self):
        print(
            "El vehiculo: {}, Max speed: {}, RPM: {},".format(
                self._vehicle.getName(),
                self._vehicle.getMaxSpeed(),
                self._vehicle.getEngineRpm()))

class VehiculoPersistance:
    def __init__(self,vehicle, db):
        self._vehicle = vehicle
        self._persitance = db
        print("HEY storing data¡",)

if __name__ == "__main__":
    engine = Engine()
    vehicle = Vehicle(name="FORD",_engine=engine,speed=254)
    persistance = VehiculoPersistance(vehicle=vehicle,db="Firebase")
    printer= VehiculePrinter(vehicle=vehicle)
    printer.printInfo()


    