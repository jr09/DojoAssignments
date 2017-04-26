from flask import Flask, render_template, request, session, redirect
import random
import datetime
import time

app = Flask(__name__)
app.secret_key = "loooool"

@app.route('/')
def index():
    if 'score' not in session:
        session['score'] = 0
    if 'activities' not in session:
        session['activities'] = [];
    if 'curr_time' not in session:
        session['curr_time'] = ''
    return render_template('index.html')


@app.route('/process_money', methods = ['POST'])
def update_score():
    session['curr_time'] = datetime.datetime.now().strftime("(%Y-%d-%m %I:%M%p)")
    if(request.form['building'] == 'farm'):
        goto_farm();
    elif(request.form['building'] == 'cave'):
        goto_cave();
    elif(request.form['building'] == 'house'):
        goto_house();
    elif(request.form['building'] == 'casino'):
        goto_casino();
    return redirect('/')

def goto_farm():
    gold_earned = random.randint(10,20)
    session['score'] += gold_earned
    session['activities'].append('Earned {} golds from the farm!'.format(gold_earned) + session['curr_time']);

def goto_cave():
    gold_earned = random.randint(5,10)
    session['score'] += gold_earned
    session['activities'].append('Earned {} golds from the cave!'.format(gold_earned) + session['curr_time']);

def goto_house():
    gold_earned = random.randint(2,5)
    session['score'] += gold_earned
    session['activities'].append('Earned {} golds from the house!'.format(gold_earned) + session['curr_time']);

def goto_casino():
    choice = random.choice([0,1]);
    if(choice == 0):
        session['score'] -= 50
        session['activities'].append('Entered a casino and lost 50 golds...Ouch..!' + session['curr_time']);
    elif(choice == 1):
        session['score'] += 50
        session['activities'].append('Entered a casino and won 50 golds...Yayy!..!' + session['curr_time']);

@app.route('/reset')
def clear_session():
    session.pop('score')
    session.pop('activities')
    session.pop('curr_time')
    return redirect('/')

app.run(debug='true')
