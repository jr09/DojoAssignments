def part1(arg1):
    for item in students:
        list1 = item.values()
        print list1[0], list1[1]


def part2(arg1):
    list1_keys = arg1.keys()
    list1_values = arg1.values()
    for idx in range(len(list1_keys)):
        print list1_keys[idx]
        for jdx in range(len(list1_values[idx])):
            first,last = list1_values[idx][jdx].values()
            print '{} - {} {} - {}'.format(jdx+1, first, last, len(first)+len(last))


students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

part2(users)
