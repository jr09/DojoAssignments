def read_dict(arg1):
    print arg1
    if(isinstance(arg1, dict)):
        for item in arg1:
            print "My {} is {}".format(item, arg1[item])

info = {
    'name':'Simba',
    'age':'3',
    'country of birth':'Ireland',
    'fav language':'bow bow'
}

read_dict(info)
