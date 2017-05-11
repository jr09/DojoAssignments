from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return render(request, 'first_app/index.html')

def showProject(request):
    return render(request, 'first_app/projects.html')

def aboutMe(request):
    return render(request, 'first_app/about.html')

def testimonials(request):
    return render(request, 'first_app/testimonials.html')
