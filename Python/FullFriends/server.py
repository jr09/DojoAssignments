from flask import Flask, request, redirect, render_template, flash, session
import re
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app, 'full_friends')

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
app.secret_key = 'looool'

# print mysql.query_db("SELECT * FROM users")
# mysql.query_db("INSERT INTO users (f_name, l_name) values ('jivesh', 'rajpal')")

def check_form(user):
    print 'looool'
    print user
    error = 0
    if len(user['f_name']) == 0:
        flash('First Name cannot be blank')
        error = -1
    if len(user['l_name']) == 0:
        flash('Last Name cannot be blank')
        error = -1
    if len(user['email']) == 0:
        flash('Email cannot be blank')
        error = -1
    elif not EMAIL_REGEX.match(user['email']):
        flash('Please enter a valid email address')
        error = -1
    return error

@app.route('/')
def index():
    users = mysql.query_db("SELECT * FROM full_friends")
    print users
    return render_template('index.html', user_objs = users)


@app.route('/friends', methods = ['POST'])
def create():
    error = 0
    if len(request.form['f_name']) == 0:
        flash('First Name cannot be blank')
        error = -1
    if len(request.form['l_name']) == 0:
        flash('Last Name cannot be blank')
        error = -1
    if len(request.form['email']) == 0:
        flash('Email cannot be blank')
        error = -1
    elif not EMAIL_REGEX.match(request.form['email']):
        flash('Please enter a valid email address')
        error = -1
    if error == -1:
        return redirect('/')
    user_obj = {
        'f_name' : request.form['f_name'],
        'l_name' : request.form['l_name'],
        'email' : request.form['email']
    }
    mysql.query_db("INSERT into full_friends (f_name, l_name, email) values(:f_name, :l_name, :email)", user_obj)
    return redirect('/')


@app.route('/friends/<user_id>/edit')
def edit(user_id):
    user = {
        'id' : user_id
    }
    user_entry = mysql.query_db("SELECT * from full_friends WHERE id = :id", user)
    return render_template('edit.html', user_obj = user_entry)


@app.route('/friends/<user_id>', methods=['POST'])
def update(user_id):
    print user_id
    print request.form['f_name']
    error = 0
    if len(request.form['f_name']) == 0:
        flash('First Name cannot be blank')
        error = -1
    if len(request.form['l_name']) == 0:
        flash('Last Name cannot be blank')
        error = -1
    if len(request.form['email']) == 0:
        flash('Email cannot be blank')
        error = -1
    elif not EMAIL_REGEX.match(request.form['email']):
        flash('Please enter a valid email address')
        error = -1

    if error == -1:
        return redirect('/friends/'+user_id+'/edit')
    user_obj = {
        'id' : user_id,
        'f_name' : request.form['f_name'],
        'l_name' : request.form['l_name'],
        'email' : request.form['email']
    }
    print user_obj['f_name']
    mysql.query_db("UPDATE full_friends SET f_name = :f_name, l_name = :l_name, email = :email WHERE id = :id", user_obj)
    return redirect('/')


@app.route('/friends/<user_id>/delete')
def delete_user(user_id):
    user = {
        'id': user_id
    }
    mysql.query_db("DELETE from full_friends WHERE id = :id", user)
    return redirect('/')

app.run(debug=True)
