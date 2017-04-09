#Odd-Even
def odd_even():
    for idx in range(1,2001,1):
        if(idx%2==0):
            print "Number is {}. This is an even number.".format(idx)
        else:
            print "Number is {}. This is an odd number.".format(idx)

odd_even()

#Multiply
def multiply(arg1, arg2):
    list1 = [];
    for item in arg1:
        list1.append(item*arg2)
    return list1

a=[2,4,5]
print a
b = multiply(a,3)
print b

#Hacker Challenge
def layered_multiply(arr):
    list1 = [1];
    list2 = [];
    for item in arr:
        list2.append(list1*item)
    return list2

print(layered_multiply(multiply(a,3)))
