def compare_lists(list1, list2):
    if(cmp(list1, list2)!=0):
        print "The lists are not the same"
    else:
        print "THe lists are the same"

list_one = [1,2,5,6,2]
list_two = [1,2,5,6,2]

list_three = [1,2,5,6,5]
list_four = [1,2,5,6,5,3]

list_five = [1,2,5,6,5,16]
list_six = [1,2,5,6,5]

list_seven = ['celery','carrots','bread','milk']
list_eight = ['celery','carrots','bread','cream']

compare_lists(list_one, list_two)
compare_lists(list_three, list_four)
compare_lists(list_five, list_six)
compare_lists(list_seven, list_eight)
