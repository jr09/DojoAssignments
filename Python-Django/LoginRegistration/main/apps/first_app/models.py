from __future__ import unicode_literals
from django.db import models
import re
EMAIL_REGEX = re.compile(r'[a-zA-z0-9.-_+]+@[a-zA-Z0-9.-_+]+\.[a-zA-Z]*$')
NAME_REGEX = re.compile(r'([a-zA-Z]{2,50})$')
PWD_REGEX = re.compile(r'(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$')

# '^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$'
# '^([a-zA-Z]{2,50})$'
# '[a-zA-z0-9.-+_]+@[a-zA-Z0-9.-+_]+\.[a-zA-Z]*$'
# Create your models here.
class UserdbManager(models.Manager):
    def check_create(self, data):
        errors = []
        if not NAME_REGEX.match(data['f_name']):
            errors.append('First name must be min 2 characters and max 50')
        if not NAME_REGEX.match(data['l_name']):
            errors.append('Last name must be min 2 characters and max 50')
        if not EMAIL_REGEX.match(data['email']):
            errors.append('Not a valid email')
        if not PWD_REGEX.match(data['pwd']):
            errors.append('Password must have min 8 characters including at least 1 Uppercase, 1 number and 1 specialcharacter')
        if data['pwd'] != data['conf_pwd']:
            errors.append('Confirm password does not match Password')
        if User.objects.filter(email=data['email']).first():
            errors.append('Email already registered')
        if errors:
            return [False, errors]
        else:
            User.objects.create(f_name=data['f_name'], l_name=data['l_name'], email=data['email'], pwd=data['pwd'])
            return [True, data['f_name']]


    def get_login(self, data):
        errors = []
        if len(data['email']) == 0:
            errors.append('Email cannot be blank')
        if len(data['pwd']) == 0:
            errors.append('Password cannot be blank')
        if errors:
            return [False, errors]
        else:
            user_obj = User.objects.filter(email=data['email']).first()
            if not user_obj:
                errors.append('Email does not exist')
                return [False, errors]
            else:
                if user_obj.pwd == data['pwd']:
                    return [True, user_obj.f_name]
                else:
                    errors.append('Password is incorrect')
                    return [False, errors]

class User(models.Model):
    f_name = models.CharField(max_length=255)
    l_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    pwd = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserdbManager()
