from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User


def index(request):
    if 'user' in request.session:
        context = {
            'message':'Hi {}, you\'re already logged in!'.format(request.session['user'])
        }
    else:
        context = {
            'message':'Welcome to the Login and Registration Assignment'
        }
    return render(request, 'first_app/index.html', context)

def register(request):
    if request.method == 'POST':
        errors = User.objects.check_create(request.POST)
        if errors[0] == False:
            for error in errors[1]:
                messages.add_message(request, messages.ERROR, error)
            return redirect('/')
        else:
            print errors[1]
            request.session['user'] = errors[1]
            request.session.modified = True
            return redirect('/showResult')

def showResult(request):
    context = {
        'user':request.session['user']
    }
    return render(request, 'first_app/result.html', context)

def logout(request):
    if request.method == 'POST' and request.session['user']:
        request.session.pop('user')
    return redirect('/')

def login(request):
    if request.method == 'POST':
        errors = User.objects.get_login(request.POST)
        if errors[0] == True:
            request.session['user'] = errors[1]
            return redirect('/showResult')
        elif errors[0] == False:
            for error in errors[1]:
                messages.add_message(request, messages.ERROR, error)
            return redirect('/')
