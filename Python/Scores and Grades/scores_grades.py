import random

def scores_grades():
    score = random.randrange(60,101)
    if(score >=60 and score<70):
        grade = 'D'
    elif(score>=70 and score<80):
        grade = 'C'
    elif(score>=80 and score<90):
        grade = 'B'
    elif(score>=90 and score<=100):
        grade = 'A'
    return (score,grade)

print "Scores and grades"
for idx in range(10):
    (score,grade) = scores_grades()
    print "Score: {}; Your grade is {}".format(score,grade)
print "End of program. Bye!"
