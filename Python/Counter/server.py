from flask import Flask, render_template, session, redirect

app=Flask(__name__)
app.secret_key = 'hahaa'

@app.route('/')
def index():
    if 'counter' not in session:
        session['counter']=1
    else:
        session['counter']+=1
    print session['counter']
    return render_template('index.html')


@app.route('/ninja')
def incr_2():
    if 'counter' in session:
        session['counter'] += 1
    return redirect('/')

@app.route('/hacker')
def reset_session():
    session.clear()
    return redirect('/')

app.run(debug='true')
