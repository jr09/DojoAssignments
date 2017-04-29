from flask import Flask, request, redirect, render_template, flash, session
import re
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt

app = Flask(__name__)
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app, 'login_register')

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
app.secret_key = 'looool'

def check_form(user):
    error = 0
    if len(user['f_name']) < 3:
        flash('First Name canot be less than 3 characters!', 'f_name')
        error = -1
    elif not user['f_name'].isalpha():
        flash('First Name cannot have digits!', 'f_name')
        error = -1;

    if len(user['l_name']) < 3:
        flash('Last Name canot be less than 3 characters!', 'l_name')
        error = -1
    elif not user['l_name'].isalpha():
        flash('Last Name cannot have digit!', 'l_name')
        error = -1;

    if not EMAIL_REGEX.match(user['email']):
        flash('Please enter a valid email!', 'email')
        error = -1

    if len(user['pwd']) < 8:
        flash('Password cannot be less than 8 characters!', 'pwd')
        error = -1
    elif user['pwd'] != user['pwd_confirm']:
        flash('Password and Confirm password dont match', 'pwd')
        error = -1

    return error

def check_form_login(user_login):
    error = 0
    if not EMAIL_REGEX.match(user_login['email']):
        flash('Please enter a valid email!', 'login_email')
        error = -1

    if len(user_login['pwd']) < 8:
        flash('Password cannot be less than 8 characters!', 'login_pwd')
        error = -1
    return error

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    error = check_form(request.form)
    if error == -1:
        return render_template('index.html')

    pwd_hash = bcrypt.generate_password_hash(request.form['pwd'])

    user_obj = {
        'f_name' : request.form['f_name'],
        'l_name' : request.form['l_name'],
        'email' : request.form['email'],
        'password' : pwd_hash
    }
    insert_query = "INSERT into users_login_register (f_name, l_name, email, password) values (:f_name, :l_name, :email, :password)"
    mysql.query_db(insert_query, user_obj)
    message_success = 'You have been successfully registered!'
    return render_template('success.html', message = message_success)


@app.route('/login', methods=['POST'])
def user_login():
    error = check_form_login(request.form)
    if error == -1:
        return render_template('index.html')

    login_obj = {
        'email' : request.form['email']
    }
    check_query = "SELECT * from users_login_register WHERE email = :email"
    user = mysql.query_db(check_query, login_obj)
    print user
    if not user:
        flash('Invalid email or password', 'login_email')
        return render_template('index.html')
    if bcrypt.check_password_hash(user[0]['password'], request.form['pwd']):
        message_success = 'You have successfully logged in!'
        return render_template('success.html', message = message_success)
    return render_template('index.html')


app.run(debug=True)
