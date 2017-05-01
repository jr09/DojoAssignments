from flask import Flask, request, redirect, render_template, flash, session
import re
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt

app = Flask(__name__)
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app, 'TheWall')

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
app.secret_key = 'looool'


# register form validation

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


# login form validation

def check_form_login(user_login):
    error = 0
    if not EMAIL_REGEX.match(user_login['email']):
        flash('Please enter a valid email!', 'login_email')
        error = -1

    if len(user_login['pwd']) < 8:
        flash('Password cannot be less than 8 characters!', 'login_pwd')
        error = -1
    return error


# retrieve all posts/messages

def check_messages():
    message_list = mysql.query_db("SELECT users.id as 'user_id', CONCAT(first_name, ' ', last_name) as 'user_fullname', messages.id as 'message_id', message, DATE_FORMAT(messages.created_at, '%M %D %Y') as 'msg_created_at' from messages join users ON users.id = messages.user_id");
    return message_list


# retrieve all comments

def check_comments():
    comments_list = mysql.query_db("SELECT messages.id as 'message_id', users.id as 'user_id', CONCAT(users.first_name, ' ', users.last_name) as 'user_fullname', comment as 'comment_text', DATE_FORMAT(comments.created_at, '%M %D %Y') as 'comment_created_at' from comments join messages on comments.message_id = messages.id join users on comments.user_id = users.id ORDER BY comments.created_at DESC")
    print comments_list
    return comments_list


# default route before login

@app.route('/')
def index():
    if 'id' in session:
        print session['id']
    else:
        print -8888
    if 'id' not in session:
        session['id'] = -999
    print session['id']
    return render_template('index.html')


# route for registration

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
    insert_query = "INSERT into users (first_name, last_name, email, password, created_at, updated_at) values (:f_name, :l_name, :email, :password, now(), now())"
    mysql.query_db(insert_query, user_obj)
    message_success = 'You have been successfully registered!'
    return render_template('success.html', message = message_success)


# route for login


@app.route('/login', methods=['POST'])
def user_login():
    error = check_form_login(request.form)
    if error == -1:
        return render_template('index.html')

    login_obj = {
        'email' : request.form['email']
    }
    check_query = "SELECT * from users WHERE email = :email"
    user = mysql.query_db(check_query, login_obj)
    if not user:
        flash('Invalid email or password', 'login_email')
        return render_template('index.html')
    if bcrypt.check_password_hash(user[0]['password'], request.form['pwd']):
        session['id'] = user[0]['id']  # add user id to session id which will be used in wall.html
        return redirect('/home/'+str(user[0]['id']))
    else:
        flash('Invalid email or password', 'login_email')
        return render_template('index.html')


# route when user login is successfull, show the wall html


@app.route('/home/<user_id>')
def show_all(user_id):
    login_obj = {
        'user_id' : user_id
    }
    check_query = "SELECT * from users WHERE id = :user_id"
    user = mysql.query_db(check_query, login_obj)
    messages_list = check_messages();
    comments_list = check_comments();
    return render_template('wall.html', user_obj = user[0], messages = messages_list, comments = comments_list)


# route when user adds a new message/post


@app.route('/add_message/<user_id>', methods=['POST'])
def add_message(user_id):
    message = {
        'user_id' : user_id,
        'message_text' : request.form['message_text']
    }
    insert_msg_query = "INSERT into messages (user_id, created_at, updated_at, message) values (:user_id, now(), now(), :message_text)"
    mysql.query_db(insert_msg_query, message)
    return redirect('/home/'+str(user_id))


# route when user adds a comment to a post


@app.route('/add_comment/<user_id>/<message_id>', methods=['POST'])
def add_comment(user_id, message_id):
    comment = {
        'message_id' : message_id,
        'user_id' : user_id,
        'comment_text' : request.form['comment_text']
    }
    insert_comment_query = "INSERT into comments (message_id, user_id, comment, created_at, updated_at) values (:message_id, :user_id, :comment_text, now(), now())"
    mysql.query_db(insert_comment_query, comment)
    return redirect('/home/'+str(user_id))


# route to delete a message


@app.route('/delete_msg/<user_id>/<message_id>', methods=['POST'])
def delete_msg(user_id, message_id):
    delete_obj = {
        'message_id' : message_id
    }
    time_elapsed = mysql.query_db("SELECT TIMESTAMPDIFF(SECOND, created_at, now()) as 'time_diff_secs' from messages where id = :message_id ", delete_obj)
    if(time_elapsed[0]['time_diff_secs'] < 18000):     # check if post was created in last 30 mins, then only allow to delete
        delete_comment_query = "DELETE FROM comments WHERE message_id = :message_id"
        delete_msg_query = "DELETE from messages WHERE id = :message_id"

        mysql.query_db(delete_comment_query, delete_obj)
        mysql.query_db(delete_msg_query, delete_obj)
    return redirect('/home/'+str(user_id))



# logout a user


@app.route('/logout/<user_id>', methods=['POST'])
def logout(user_id):
    session['id'] = -999        # setting to -999 so that user requires to login back; workaround to deleting cookies
    return redirect('/home/'+str(user_id))


app.run(debug=True)
