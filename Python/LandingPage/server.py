from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def greeting():
    return render_template("index.html")

@app.route('/ninjas')
def ninja_page():
    return render_template("ninjas.html")

@app.route('/dojo/new')
def dojo_new():
    return render_template("dojo.html");
app.run(debug='true')
