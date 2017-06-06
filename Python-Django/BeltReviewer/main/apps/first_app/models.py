from __future__ import unicode_literals
from django.db import models
from django.db.models import Count
from ..logreg.models import Userdb
import datetime

class Author(models.Model):
    fname = models.CharField(max_length=45)
    lname = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'AuthorFname: %s | AutorLname: %s' %(self.fname, self.lname)


class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Author, related_name='author_book_reverse')
    created_at = created_at = models.DateTimeField(auto_now_add=True)

    def getName(self):
        return '%s' %(self.fname + ' ' + self.lname)

    def __str__(self):
        return 'Title: %s | Author: %s' %(self.title, self.author.fname+self.author.lname)

class Review(models.Model):
    reviewer = models.ForeignKey(Userdb, related_name='reviewer_review_userdb')
    book = models.ForeignKey(Book, related_name='book_review_book')
    review = models.TextField()
    rating = models.IntegerField()
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return 'ReviewerFName: %s | Book: %s | Rating: %s' %(self.reviewer.fname, self.book.title, self.rating)


def getHomeObject():
    review_objs = Review.objects.all().order_by('-id')[:3]
    book_title_list = Book.objects.values_list('title', flat=True).distinct()
    book_objs= []
    for book in book_title_list:
        book_objs.append(Book.objects.filter(title__contains=book).first())

    homeObject = {
        'reviews':review_objs,
        'books':book_objs
    }
    return homeObject

def getGoToBookObject(book_id):
    book = Book.objects.get(id=book_id)
    reviews = Review.objects.all().filter(book__title__contains=book.title)
    goToBookObject = {
        'book': book,
        'reviews': reviews
    }
    return goToBookObject

def getGoToReviewerObject(user_id):
    user_info = Userdb.objects.get(id=user_id)
    reviews = Review.objects.filter(reviewer__id=user_id)
    reviews_count = reviews.count()
    goToReviewerObject = {
        'reviews': reviews,
        'review_count': reviews_count,
        'user_info': user_info
    }
    return goToReviewerObject
