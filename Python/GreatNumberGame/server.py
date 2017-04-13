from flask import Flask, render_template, redirect, request, session
import random

app = Flask(__name__)
app.secret_key = "hahahaha"


@app.route('/')
def index():
    if 'number' not in session:
        session['number'] = random.randint(1,100)
    return render_template('index.html', result=-1)


@app.route('/calculate', methods=['POST'])
def calc_result():
    print 'got post info'
    num = request.form["user_num"]
    print session['number']
    if(int(num) < session['number']):
        result_html = 0
    elif(int(num) > session['number']):
        result_html = 1
    elif(int(num) == session['number']):
        result_html = 2
    return render_template('index.html', result=result_html)

@app.route('/clear')
def clear_session():
    session.pop('number')
    return redirect('/')

app.run(debug='true')
