class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def dispalyHealth(self):
        print '\nName\t:{}'.format(self.name)
        print('Health\t:{}').format(self.health)
        return self

class Dog(Animal):
    def __init__(self,name):
        super(Dog, self).__init__(name)
        self.health = 150
    def pet(self):
        self.health += 5
        return self

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170
    def fly(self):
        self.health -= 10
        return self

# driver program
# 
# simba = Dog('simba')
# simba.walk().walk().walk().run().run().pet().dispalyHealth()
#
# pete = Dragon('pete')
# pete.walk().walk().walk().run().run().fly().fly().dispalyHealth()
