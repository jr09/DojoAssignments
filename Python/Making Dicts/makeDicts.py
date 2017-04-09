def give_dict(list1, list2):
    new_dict = dict(zip(list1, list2))
    return new_dict

name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

print give_dict(name,favorite_animal)
