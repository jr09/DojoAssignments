from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, 'first_app/index.html')

def showNinja(request, color):
    if color == 'blue':
        ninja = 'leonardo.jpg'
    elif color == 'purple':
        ninja = 'donatello.jpg'
    elif color == 'red':
        ninja = 'raphael.jpg'
    elif color == 'orange':
        ninja = 'michelangelo.jpg'
    else:
        ninja = 'notapril.jpg'
    context = {
        'color':color,
        'ninja':ninja
    }
    return render(request, 'first_app/ninja.html', context)
