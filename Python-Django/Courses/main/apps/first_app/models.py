from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Course(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.CharField(max_length=100)

class Comment(models.Model):
    course_id = models.ForeignKey(Course)
    comment = models.TextField()
    created_at = models.CharField(max_length=100)
