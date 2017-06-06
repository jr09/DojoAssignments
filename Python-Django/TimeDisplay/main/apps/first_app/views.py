from django.shortcuts import render, redirect
import datetime

# Create your views here.

def index(request):
    date_obj = {
    'curr_date' : datetime.datetime.now().strftime('%b %d, %Y'),
    'curr_time' : datetime.datetime.now().strftime('%I:%M %p')
    }
    return render(request, 'first_app/index.html', date_obj)
