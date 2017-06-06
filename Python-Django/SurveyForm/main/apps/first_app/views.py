from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, 'first_app/index.html')

def process(request):
    if request.method == 'POST':
        user_obj = {
            'name':request.POST['name'],
            'location':request.POST['location'],
            'language':request.POST['language'],
            'comment':request.POST['comment']
        }
        request.session['user_obj'] = user_obj
    return redirect('/result')

def showResult(request):
    return render(request, 'first_app/result.html')
