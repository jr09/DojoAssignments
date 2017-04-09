# part 1
str = "It's thanksgiving day. It's my birthday,too!"
print str.index("day")
str2 = str.replace("day", "month");
print str2

#part 2
vals = [2,54,-2,7,12,98]
print min(vals)
print max(vals)

#part3
x = ["hello",2,54,-2,7,12,98,"world"]
print x[0]
print x[len(x)-1]

#part4
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
half_len = len(x)/2;
new_arr = []
for idx in range(0,half_len,1):
    new_arr.append(x.pop(0))
x.insert(0,new_arr)
print x
