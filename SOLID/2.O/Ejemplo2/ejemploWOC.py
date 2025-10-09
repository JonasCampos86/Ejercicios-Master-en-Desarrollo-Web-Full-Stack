class Superhero:
    def __init__(self, name, health, attack_type):
        self.name = name
        self.health = health
        self.attack_type = attack_type

    def attack(self):
        if self.attack_type == "punch":
            return f"{self.name} attacks with a powerful punch!"
        elif self.attack_type == "laser":
            return f"{self.name} attacks with a laser beam!"
        else:
            return f"{self.name} attacks with a regular attack!"


class Game:
    def __init__(self):
        self.superheroes = []

    def add_superhero(self, superhero):
        self.superheroes.append(superhero)

    def superhero_actions(self):
        for superhero in self.superheroes:
            print(superhero.attack())


game = Game()
superhero1 = Superhero("Superman", 100, "punch")
superhero2 = Superhero("Cyclops", 80, "laser")
game.add_superhero(superhero1)
game.add_superhero(superhero2)
game.superhero_actions()
