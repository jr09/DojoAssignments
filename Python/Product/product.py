class Product():
    def __init__(self, price, item_name, weight_lbs, brand, cost_dollars):
        self.price = price
        self.item_name = item_name
        self.weight_lbs = weight_lbs
        self.brand = brand
        self.cost_dollars = cost_dollars
        self.status = 'for sale'

    def sell(self):
        self.status = 'sold'
        return self

    def tax(self, sales_tax_percent):
        return self.price + self.price*sales_tax_percent/100

    def returnProduct(self, reason):
        if reason == 'defective':
            self.status = reason
            self.price = 0
        elif reason == 'opened':
            self.status = reason
            self.price -= self.price*0.2
        elif reason == 'no reason':
            self.status = 'for sale'
        return self

    def displayInfo(self):
        print '\nItem Name\t:{}'.format(self.item_name)
        print 'Brand\t:{}'.format(self.brand)
        print 'Price\t:{}'.format(self.price)
        print 'Weight(llbs)\t:{}'.format(self.weight_lbs)
        print 'Status\t:{}'.format(self.status)
        return self

# item1 = Product(100, 'tshirt', 1, 'Nike', 20)
#
# item1.displayInfo()
# print '\nPrice after tax :{}'.format(item1.tax(10))
# item1.returnProduct('opened')
# item1.displayInfo()
# item1.returnProduct('defective')
# item1.displayInfo()
