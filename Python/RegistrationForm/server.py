from flask import Flask, render_template, redirect, session, flash, request
import re

app = Flask(__name__)
app.secret_key = "loooool"

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
PWD_REGEX = re.compile(r'^(?=.*?[0-9])(?=.*?[A-Z])')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods = ['POST'])
def process_form():
    err = 0
    err = check_email()
    err = check_firstName()
    err = check_lastName()
    err = check_password()
    err = check_confPassword()
    err = check_bday()

    if(err == 0):
        flash('Thank you for registering!', 'success')
    return redirect('/')

def check_email():
    err = 0
    if len(request.form['email']) < 1:
        flash('Email cannot be blank', 'email_err')
        err = -1
    elif not EMAIL_REGEX.match(request.form['email']):
        flash('Invalid email address', 'email_err')
        err = -1
    return err

def check_firstName():
    err = 0
    if len(request.form['first_name']) < 1:
        flash('First Name cannot be blank', 'fname_err')
        err = -1
    elif(request.form['first_name'].isalpha() == False):
        flash('First Name cannot have digits', 'fname_err')
        err = -1
    return err

def check_lastName():
    err = 0
    if len(request.form['last_name']) < 1:
        flash('Last Name cannot be blank', 'lname_err')
        err = -1
    elif(request.form['first_name'].isalpha() == False):
        flash('Last Name cannot have digits', 'lname_err')
        err = -1
    return err

def check_password():
    err = 0
    if len(request.form['pwd']) < 1:
        flash('Password cannot be blank', 'pwd_err')
        err = -1
    elif len(request.form['pwd']) < 8:
        flash('Password should be at least 8 characters', 'pwd_err')
        err = -1
    elif not PWD_REGEX.match(request.form['pwd']):
        flash('Password must have at least 1 Uppercase letter and 1 number', 'pwd_err')
        err = -1
    return err

def check_confPassword():
    err = 0
    if len(request.form['conf_pwd']) < 1:
        flash('Confirm Password cannot be blank', 'cpwd_err')
        err = -1
    elif(request.form['pwd'] != request.form['conf_pwd']):
        flash('Password and Confirm Password do not match!', 'cpwd_err')
        err = -1
    return err

def check_bday():
    err = 0
    print request.form['bday']
    return err;

app.run(debug = 'true')
