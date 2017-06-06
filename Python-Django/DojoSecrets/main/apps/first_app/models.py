from __future__ import unicode_literals
from django.db import models
from django.db.models import Count
import bcrypt, re

EMAIL_REGEX = re.compile(r'[a-zA-z0-9.-_+]+@[a-zA-Z0-9.-_+]+\.[a-zA-Z]*$')
NAME_REGEX = re.compile(r'([a-zA-Z]{2,50})$')
PWD_REGEX = re.compile(r'(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$')

class UserdbManager(models.Manager):
    def checkRegister(self, data):
        errors = []
        if not NAME_REGEX.match(data['fname']):
            errors.append('First Name must be at least 2 characters long')
        if not NAME_REGEX.match(data['lname']):
            errors.append('Last Name must be at least 2 characters long')
        if not EMAIL_REGEX.match(data['email']):
            errors.append('Please enter a valid email')
        if not PWD_REGEX.match(data['pwd']):
            errors.append('Password must be at least 8 characters and must contain at least 1 uppercase letter, 1 digit and 1 special character')
        if data['pwd'] != data['conf_pwd']:
            errors.append('Confirm password does not match Password')
        if errors:
            return [False, errors]
        if Userdb.objects.filter(email=data['email']).first():
            errors.append('Email already in use, please use another email')
            return [False, errors]
        user_created = Userdb.objects.create(fname=data['fname'], lname=data['lname'], email=data['email'], password=bcrypt.hashpw(data['pwd'].encode(), bcrypt.gensalt()))
        print user_created
        user_obj = {
            'name': user_created.fname,
            'id': user_created.id
        }
        return [True, user_obj]

    def check_login(self, data):
        errors = []
        user_obj = Userdb.objects.filter(email=data['email']).first()
        if not user_obj:
            errors.append('Invalid email or password')
        elif not bcrypt.checkpw(data['pwd'].encode(), user_obj.password.encode()):
            errors.append('Invalid email or password')
        if errors:
            return [False, errors]
        user = {
            'name': user_obj.fname,
            'id': user_obj.id
        }
        return [True, user]

class Userdb(models.Model):
    fname = models.CharField(max_length=25)
    lname = models.CharField(max_length=25)
    email = models.CharField(max_length=25)
    password = models.CharField(max_length=25)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    objects = UserdbManager()

    def __str__(self):
        return 'First Name: %s | Last Name: %s | Email: %s' %(self.fname, self.lname, self.email)

class SecretManager(models.Manager):
    def check_secret(self, data):
        errors = []
        if len(data['secret']) == 0:
            errors.append('Secret text cannot be empty')
        if errors:
            return [False, errors]
        secret_obj = Secret.objects.create(author=Userdb.objects.get(id=data['user_id']), secret=data['secret'])
        return [True]


class Secret(models.Model):
    author = models.ForeignKey(Userdb, related_name='userdb_reverse_secret')
    secret = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    objects = SecretManager()

    def __str__(self):
        return 'Author: %s | Secret: %s' %(self.author.fname, self.secret)

class Like(models.Model):
    user = models.ForeignKey(Userdb, related_name='userdb_reverse_like')
    secret = models.ForeignKey(Secret, related_name='secret_reverse')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'Secret : %s| User: %s' %(self.secret.secret, self.user.fname)

def getZipObject(user_id):
    user_id_int = int(user_id)
    likes = []
    curr_user_present = []
    secrets = Secret.objects.all().order_by('-id')[:5]
    for secret in (secrets):
        liked_objs = secret.secret_reverse.all()
        likes.append(liked_objs.count())
        likes_users = liked_objs.values_list('user_id', flat=True)
        if user_id_int in likes_users:
            curr_user_present.append(1)
        else:
            curr_user_present.append(0)
        print curr_user_present
    zipObject = {
        'secrets': secrets,
        'likes':likes,
        'curr_user_present':curr_user_present
    }
    print zipObject
    return zipObject

def getZipObjectSecrets(user_id):
    user_id_int = int(user_id)
    likes = []
    curr_user_present = []
    liked_users = []
    secrets = Secret.objects.annotate(idx=Count('secret_reverse')).order_by('-idx')
    likes = secrets.values_list('idx', flat=True)
    for secret in secrets:
        like_objs = secret.secret_reverse.all()
        liked_users = like_objs.values_list('user_id', flat=True)
        if user_id_int in liked_users:
            curr_user_present.append(1)
        else:
            curr_user_present.append(0)
    zipObject = {
        'secrets': secrets,
        'likes': likes,
        'curr_user_present': curr_user_present
    }
    return zipObject
