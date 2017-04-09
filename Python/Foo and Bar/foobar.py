def check_square(arg1):
    if(arg1**0.5 == int(arg1**0.5)):
        print '{} : Bar'.format(arg1)
        return 1;
    return 0;

def check_prime(arg1):
    if(arg1==1):
        return 0
    elif (arg1>1 and arg1 <=3):
        print '{} : Foo'.format(arg1)
        return 1
    else:
        if(arg1%2==0 or arg1%3==0):
            return 0
        i=5
        while(i*i <= arg1):
            if(arg1%i==0 or arg1%(i+2)==0):
                return 0
            i=i+6
    print '{} : Foo'.format(arg1)
    return 1



for idx in range(100,100000,1):
    if(check_prime(idx)==0 and check_square(idx)==0):
        print '{} : FooBar'.format(idx)
