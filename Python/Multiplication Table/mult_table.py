def create_head_list():
    list1 = ['x']
    for idx in range(1,13,1): #change table length here
        list1.append(idx)
    print(' '.join(map(str,list1)))


def create_multiplier_list(arg1):
    for idx in range(1,13,1): #change table length here
        arg1.append(idx)

def create_table():
    for idx in range(1,13,1):
        list2 = [];
        for item in list_mult:
            list2.append(item*idx)
        print(' '.join(map(str,list2)))


list_mult = [1];
create_head_list()
create_multiplier_list(list_mult)
create_table()
