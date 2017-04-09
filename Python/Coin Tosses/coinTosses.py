import random

def coin_toss():
    coin = round(random.random())
    if(coin==0.0):
        str1="head"
    elif(coin==1.0):
        str1="tail"
    return (coin,str1)


#0-head, 1-tail
heads=0
tails=0
print "Starting the program...."
for idx in range(1,5001,1):
    (coin,str1) = coin_toss()
    if str1=="head":
        heads+=1
    elif str1=="tail":
        tails+=1
    print "Attempt #{}: Throwing a coin... It's a {}! ... Got {} head(s) so far and {} tail(s) so far".format(idx,str1,heads,tails)
