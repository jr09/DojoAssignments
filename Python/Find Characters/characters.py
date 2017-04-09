def get_words(list1, char1):
    str = [];
    for item in list1:
        if(char1) in item:
            str.append(item)

    if(len(str)==0):
        print "Character was not present in any word in the given list"
    else:
        print str

l = ['hello','world','my','name','is','Anna']
char = 'o'
get_words(l,char)
