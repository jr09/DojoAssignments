from django.shortcuts import render, redirect
import random
import datetime

# Create your views here.
def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
    if 'activities' not in request.session:
        request.session['activities'] = []
    return render(request, 'first_app/index.html')

def restart(request):
    if 'gold' in request.session:
        request.session.pop('gold')
    if 'activities' in request.session:
        request.session.pop('activities')
    return redirect('/')

def processFarm(request):
    if request.method == 'POST':
        gold_earned = random.randint(10,20)
        request.session['gold'] += gold_earned
        request.session['activities'].append('Earned {} gold from the Farm! ({})'.format(gold_earned, datetime.datetime.now().strftime('%x %-I:%M %p')))
    return redirect('/')

def processCave(request):
    if request.method == 'POST':
        gold_earned = random.randint(5,10)
        request.session['gold'] += gold_earned
        request.session['activities'].append('Earned {} gold from the Cave! ({})'.format(gold_earned, datetime.datetime.now().strftime('%x %-I:%M %p')))
    return redirect('/')

def processHouse(request):
    if request.method == 'POST':
        gold_earned = random.randint(2,5)
        request.session['gold'] += gold_earned
        request.session['activities'].append('Earned {} gold from the House! ({})'.format(gold_earned, datetime.datetime.now().strftime('%x %-I:%M %p')))
    return redirect('/')

def processCasino(request):
    if request.method == 'POST':
        result = random.choice([-1,1])
        gold_earned = random.randint(0,50)
        request.session['gold'] += result*gold_earned
        if result == -1:
            request.session['activities'].append('Entered a casino and lost {} gold....Ouch ({})'.format(gold_earned, datetime.datetime.now().strftime('%x %-I:%M %p')))
        elif result == 1:
            request.session['activities'].append('Entered a casino and won {} gold....Yay!({})'.format(gold_earned, datetime.datetime.now().strftime('%x %-I:%M %p')))
    return redirect('/')
