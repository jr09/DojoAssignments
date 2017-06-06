from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Userdb, Secret, Like, getZipObject, getZipObjectSecrets
# Create your views here.

def index(request):
    if 'user_name' in request.session:
        return redirect('first_app:landing', user_id=request.session['user_id'])
    return render(request, 'first_app/index.html')

def landing(request, user_id):
    zipObject = getZipObject(user_id)
    context = {
        'name': request.session['user_name'],
        'user_id': user_id,
        'secrets_likes': zip(zipObject['secrets'],zipObject['likes'], zipObject['curr_user_present']),
    }
    print 'context'
    print context
    return render(request, 'first_app/landing.html', context)

def login(request):
    if request.method == 'POST':
        print 'im here'
        response = Userdb.objects.check_login(request.POST)
        print response
        if response[0] == False:
            for error in response[1]:
                messages.add_message(request, messages.ERROR, error)
            return redirect('first_app:index')
        request.session['user_name'] = response[1]['name']
        request.session['user_id'] = response[1]['id']
        request.session.modified = True
        return redirect('first_app:landing', user_id=response[1]['id'])

def register(request):
    if request.method == 'POST':
        print 'im here'
        response = Userdb.objects.checkRegister(request.POST)
        if response[0] == False:
            for error in response[1]:
                messages.add_message(request, messages.ERROR, error)
            return redirect('first_app:index')
        request.session['user_name'] = response[1]['name']
        request.session['user_id'] = response[1]['id']
        request.session.modified = True
        return redirect('first_app:landing', user_id=response[1]['id'])

def addSecret(request, user_id):
    if request.method == 'POST':
        data = {
            'secret': request.POST['secret'],
            'user_id': user_id
        }
        response = Secret.objects.check_secret(data)
        if response[0] == False:
            for error in response[1]:
                messages.add_message(request, messages.ERROR, error)
        return redirect('first_app:landing', user_id=user_id)


def logout(request):
    if request.method == 'POST':
        request.session.pop('user_name')
        request.session.pop('user_id')
        request.session.modified = True
    return redirect('first_app:index')

def popularSecrets(request, user_id):
    zipObject = getZipObjectSecrets(user_id)
    context = {
        'name': request.session['user_name'],
        'user_id': user_id,
        'secrets_likes': zip(zipObject['secrets'],zipObject['likes'], zipObject['curr_user_present']),
    }
    return render(request, 'first_app/secrets.html', context)

def like(request, user_id, secret_id):
    if not Like.objects.filter(user=Userdb.objects.get(id=user_id), secret=Secret.objects.get(id=secret_id)):
        like_obj = Like.objects.create(user=Userdb.objects.get(id=user_id), secret=Secret.objects.get(id=secret_id))
    return redirect('first_app:landing', user_id=user_id)

def delete(request, secret_id):
    Secret.objects.get(id=secret_id).delete()
    Like.objects.filter(secret__id=secret_id).delete()
    return redirect('first_app:index')
