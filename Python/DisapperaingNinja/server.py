from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/ninja')
def show_ninja():
    return render_template('ninja.html', mode = 'All')

@app.route('/ninja/<color>')
def show_ninja_color(color):
    if(color == 'blue'):
        return render_template('ninja.html', mode = 'Blue')
    elif(color == 'red'):
        return render_template('ninja.html', mode = 'Red')
    elif(color == 'orange'):
        return render_template('ninja.html', mode = 'Orange')
    elif(color == 'purple'):
        return render_template('ninja.html', mode = 'Purple')
    else:
        return render_template('ninja.html', mode = 'Invalid Color')

app.run(debug = 'true')
