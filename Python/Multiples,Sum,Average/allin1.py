# Multiple Par 1

for idx in range(1,100,2):
    print idx

# Multiples Part 2
for idx in range(5,1000000,1):
    if(idx%5==0):
        print idx

# Sum List
a = [1, 2, 5, 10, 255, 3]
sum = 0
for item in a:
    sum += item
print sum

# Average
a = [1, 2, 5, 10, 255, 3]
sum_a = 0
for item in a:
    sum_a += item
print "Average of a = {}".format(sum_a/float(len(a)))
