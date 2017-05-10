def getListSum(args):
    list_sum = 0
    for idx in args:
        list_sum += idx
    return list_sum

class MathDojo():
    def __init__(self):
        self.result = 0

    def add(self, arg1, *arg2):
        if isinstance(arg1, list) or isinstance(arg1, tuple):
            self.result += getListSum(arg1)
        else:
             self.result += float(arg1)

        if isinstance(arg2, list) or isinstance(arg2, tuple):
            list_sum2 = 0
            for idx in arg2:
                if isinstance(idx,list):
                    list_sum2 += getListSum(idx)
                else:
                    list_sum2 += float(idx)
            self.result += list_sum2
        else:
             self.result += float(arg2)
        return self

    def subtract(self, arg1, *arg2):
        if isinstance(arg1, list) or isinstance(arg1, tuple):
            self.result -= getListSum(arg1)
        else:
             self.result -= float(arg1)

        if isinstance(arg2, list) or isinstance(arg2, tuple):
            list_sum2 = 0
            for idx in arg2:
                if isinstance(idx,list):
                    list_sum2 -= getListSum(idx)
                else:
                    list_sum2 -= float(idx)
            self.result += list_sum2
        else:
             self.result -= float(arg2)
        return self


    def showResult(self):
        print self.result
        return self

# MathDojo().add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).showResult()
