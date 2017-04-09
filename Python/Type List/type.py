# arr = [int, float, str, bool ,list]

def filter_type(arg):
    str = "String:"
    sum = 0
    arr = [0,0,0,0,0]
    for item in arg:
        if(type(item) is int):
            arr[0]=1
            sum+=item
            print "{} is an int".format(item)
        elif isinstance(item, basestring):
            arr[2]=1
            type_str = 1
            str=str+' '+item
            print "{} is a str".format(item)
        elif (type(item) is float):
            arr[1]=1
            sum+=item
            print "{} is a float".format(item)
        elif (type(item) is bool):
            arr[3]=1
            print "{} is a bool".format(item)
        elif (type(item) is list):
            arr[4]=1
            print "{} is a list".format(item)

    if(arr.count(1)>1):
        print "Array is mixed type"
    print "Sum = {}".format(sum)
    if(arr[2]):
        print str


l = ['magical unicorns',19,'hello',98.98,'world']
filter_type(l)
