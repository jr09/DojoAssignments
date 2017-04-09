def toggle_arr(list1):
    for idx in range(len(list1)):
        list1[idx] = 1 - list1[idx]


def print_checker_line(list1):
    str1 = '';
    for item in list1:
        if item==1:
            str1+="*"
        elif item==0:
            str1+="  "

    print str1

def checkerboard():
    arr = [1,0,1,0,1,0,1,0]
    for idx in range(0,8,1):
        print_checker_line(arr)
        toggle_arr(arr)


checkerboard()
