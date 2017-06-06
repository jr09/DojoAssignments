from django.shortcuts import render, redirect
from .models import Book
# Create your views here.

def index(request):
    context = {
        'books':Book.objects.all()
    }
    return render(request, 'first_app/index.html', context)

def addBook(request):
    if request.method == 'POST':
        print request.POST['title']
        print request.POST['category']
        print request.POST['author']
        Book.objects.create(title=request.POST['title'], category=request.POST['category'], author=request.POST['author'])
    return redirect('index')
