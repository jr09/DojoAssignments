from django.shortcuts import render, redirect
import datetime
from .models import Course, Comment

# Create your views here.

def index(request):
    context = {
        'courses':Course.objects.all()
    }
    return render(request, 'first_app/index.html',context)

def addCourse(request):
    if request.method == 'POST':
        if checkArgs(request.POST['name'], request.POST['description']) == True:
            Course.objects.create(name=request.POST['name'], description=request.POST['description'], created_at=datetime.datetime.now().strftime('%b %d %Y %I:%-M %p'))
    return redirect('index')

def checkArgs(*args):
    for idx in args:
        if len(idx) == 0:
            return False
    return True

def destroyConfirmation(request, idx):
    context = {
    'course':Course.objects.get(id=idx)
    }
    return render(request, 'first_app/course_delete.html', context)

def delete(request, idx):
    course_obj_deleted = Course.objects.get(id=idx).delete()
    print course_obj_deleted
    return redirect('index')

def showComments(request, idx):
    context = {
        'course':Course.objects.get(id=idx),
        'course_comments':Comment.objects.filter(course_id=idx)
    }
    return render(request, 'first_app/course_comments.html', context)

def addComment(request, idx):
    if request.method=='POST' and len(request.POST['comment'])>0:
        course = Course.objects.get(id=idx)
        Comment.objects.create(course_id=course, comment=request.POST['comment'], created_at=datetime.datetime.now().strftime('%b %d %Y %I:%-M %p'))
    return redirect('showComments', idx=idx)
