#part1
def draw_stars(arg1):
    for item in arg1:
        list1 = ['*']
        list2 = list1*item
        print(' '.join(map(str,list2)))

x = [4, 6, 1, 3, 5, 7, 25]
draw_stars(x)

#part2

def draw_star2(arg1):
    for item in arg1:
        if isinstance(item, int):
            list1 = ['*']
            list2 = list1*item
            print(' '.join(map(str,list2)))
        elif isinstance(item, str):
            list1[0]=item[0].lower()
            list2 = list1*len(item)
            print(' '.join(map(str,list2)))

x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_star2(x)
