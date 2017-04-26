from flask import Flask, request, redirect, render_template, flash, session
import re
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app, 'email_validation')

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
app.secret_key = 'looool'

# print mysql.query_db("SELECT * FROM users")
# mysql.query_db("INSERT INTO users (f_name, l_name) values ('jivesh', 'rajpal')")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/validate', methods = ['POST'])
def validate_email():
    if len(request.form['emailid']) <= 2:
        flash('Email needs to be longer than 2 characters')
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['emailid']):
        flash('Email needs to be a valid email address')
        return redirect('/')
    user_obj = {
    'email' : request.form['emailid']
    }
    mysql.query_db("INSERT into email_users(email, created_at) values(:email, now())", user_obj)
    return redirect('/success')

@app.route('/success')
def show_success():
    last_email = mysql.query_db("SELECT email FROM email_users where id = (SELECT MAX(id) FROM email_users)")
    all_list = mysql.query_db("SELECT *FROM email_users")
    return render_template('success.html', all_usrs = all_list, new_email = last_email)

@app.route('/delete/<user_id>', methods = ['POST'])
def delete_entry(user_id):
    user_obj = {
        'id' : user_id
    }
    mysql.query_db("DELETE FROM email_users WHERE id = :id", user_obj)
    flash('Email id successfully deleted!')
    return redirect('/')

app.run(debug=True)
