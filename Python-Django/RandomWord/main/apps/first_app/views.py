from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string

# Create your views here.
def index(request):
    if 'attempt' not in request.session:
        request.session['attempt'] = 1
    else:
        request.session['attempt'] += 1
    request.session['word'] = get_random_string()
    print request.session['attempt']
    print request.session['word']
    return render(request, 'first_app/index.html')

def generate_word():
    return get_random_string(length=14)


def restart(request):
    if 'attempt' in request.session:
        request.session.pop('attempt')
    return redirect('/')
