# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-05-23 03:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('first_app', '0002_user_pwd'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='pwd',
            field=models.CharField(max_length=255),
        ),
    ]