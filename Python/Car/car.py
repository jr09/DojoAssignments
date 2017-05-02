class Car():
    def __init__(self, name, price, speed, fuel, mileage):
        self.name = name
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12

    def displayInfo(self):
        print '\nName\t:{}'.format(self.name)
        print 'Price\t:{}'.format(self.price)
        print 'Speed\t:{}'.format(self.speed)
        print 'Fuel\t:{}'.format(self.fuel)
        print 'Mileage\t:{}'.format(self.mileage)
        print 'Tax\t:{}'.format(self.tax)



car1 = Car('Car1', 10500, '100mph', 'empty', '23mpg')
car2 = Car('Car2', 20500, '120mph', 'full', '25mpg')
car3 = Car('Car3', 11500, '130mph', 'empty soon', '13mpg')
car4 = Car('Car4', 10540, '90mph', 'full', '25mpg')
car5 = Car('Car5', 30500, '115mph', 'empty', '33mpg')
car6 = Car('Car6', 17500, '200mph', 'half full', '23mpg')

car1.displayInfo()
car2.displayInfo()
car3.displayInfo()
car4.displayInfo()
car6.displayInfo()
car6.displayInfo()
