from abc import ABC, abstractmethod

class atackManager(ABC):
    @abstractmethod
    def atack(self, superhero):
        pass

class PunchAtack(atackManager):
    def atack(self, superhero):
        return f"{superhero.name} attacks with a powerfull punch!!!!"

class FireBall(atackManager):
    def atack(self, superhero):
        return f"{superhero.name} attacks with a powerfull fireball!!!!"


class LaserAtack(atackManager):
    def atack(self, superhero):
        return f"{superhero.name} attacks with a powerfull laser!!!!"

class SuperHeroe:
    def __init__(self, name, healt, atackManager)->None:
        self.name = name
        self.healt = healt
        self.atackManager = atackManager
   
    def attack(self):
        return self.atackManager.atack(self)

class Game:
    def __init__(self)->None:
        self.superheroes = []

    def add_superheroes(self, superhero):
        self.superheroes.append(superhero)
    
    def superheroe_action(self):
        for superhero in self.superheroes:
            print(superhero.attack())

game = Game()
superman = SuperHeroe("SuperMan",100,PunchAtack())
cyclope = SuperHeroe("Cyclops", 80, LaserAtack())
cinder = SuperHeroe("Cinder",150,FireBall())

game.add_superheroes(superman)
game.add_superheroes(cyclope)
game.add_superheroes(cinder)

game.superheroe_action()