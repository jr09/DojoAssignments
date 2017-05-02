class Bike():
    def __init__(self, name, price, max_speed):
        self.name = name
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def displayInfo(self):
        print 'Price = {}, Max Speed = {}, Miles = {}'.format(self.price, self.max_speed, self.miles)
        return self

    def ride(self):
        print 'Riding {}'.format(self.name)
        self.miles += 10
        return self

    def reverse(self):
        print 'Reversing {}'.format(self.name)
        if self.miles >= 5:
            self.miles -= 5
        return self

bike1 = Bike('Bike1', 200, "100mph")
bike2 = Bike('Bike1', 500, "200mph")
bike3 = Bike('Bike1', 350, "150mph")

bike1.ride().ride().ride().reverse().displayInfo()

bike2.ride().ride().reverse().reverse().displayInfo()

bike3.reverse().reverse().reverse().displayInfo()
