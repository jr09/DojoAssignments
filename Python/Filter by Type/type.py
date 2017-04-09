def filter_type(arg):
    if (type(arg) is int):
        if(arg>=100):
            print "{}: That's a big number!".format(arg)
        else:
            print "{}: That's a small number".format(arg)
    elif (type(arg) is str):
        if(len(arg)>=50):
            print "{}: Long Sentence".format(arg)
        else:
            print "{}: Short Sentence".format(arg)
    elif (type(arg) is list):
        if(len(arg)>=10):
            print "{}: Big list!".format(arg)
        else:
            print "{}: Short list!".format(arg)


sI = 45
filter_type(sI)
mI = 100
filter_type(mI)
bI = 455
filter_type(bI)
eI = 0
filter_type(eI)
spI = -23
filter_type(spI)
sS = "Rubber baby buggy bumpers"
filter_type(sS)
mS = "Experience is simply the name we give our mistakes"
filter_type(mS)
bS = "Tell me and I forget. Teach me and I remember. Involve me and I learn."
filter_type(bS)
eS = ""
filter_type(eS)
aL = [1,7,4,21]
filter_type(aL)
mL = [3,5,7,34,3,2,113,65,8,89]
filter_type(mL)
lL = [4,34,22,68,9,13,3,5,7,9,2,12,45,923]
filter_type(lL)
eL = []
filter_type(eL)
spL = ['name','address','phone number','social security number']
filter_type(spL)
