from django.shortcuts import render, redirect
from ..logreg.models import Userdb
from .models import getHomeObject, getGoToBookObject, Review, Book, getGoToReviewerObject, Author

# Create your views here.

#first_app views

def index(request):
    if 'user_name' in request.session:
        return redirect('first_app:books')
    else:
        return render(request, 'first_app/index.html')

def home(request):
    homeObject = getHomeObject()
    context= {
        'user_name': request.session['user_name'],
        'user_id':request.session['user_id'],
        'reviews': homeObject['reviews'],
        'books': homeObject['books']
    }
    return render(request, 'first_app/home.html', context)

def goToBook(request, book_id):
    goToBookObject = getGoToBookObject(book_id)
    context = {
        'user_name':request.session['user_name'],
        'user_id': request.session['user_id'],
        'book': goToBookObject['book'],
        'reviews': goToBookObject['reviews']
    }
    return render(request, 'first_app/book.html', context)

def goToReviewer(request, user_id):
    goToReviewerObject = getGoToReviewerObject(user_id)
    context = {
        'user_name': request.session['user_name'],
        'user_id': request.session['user_id'],
        'reviews': goToReviewerObject['reviews'],
        'review_count': goToReviewerObject['review_count'],
        'user_info': goToReviewerObject['user_info']
    }
    return render(request, 'first_app/user.html', context)

def addBookReview(request):
    authors = Author.objects.all()
    context = {
        'user_name': request.session['user_name'],
        'user_id': request.session['user_id'],
        'authors':authors
    }
    return render(request, 'first_app/addbook.html', context)

def addthisbook(request):
    if request.method == 'POST':
        if len(request.POST['title']) == 0 or len(request.POST['review']) == 0:
            return redirect(request, 'first_app:addBookReview')
        else:
            review = request.POST['review']
            if request.POST['author_method'] == 'author_add':
                author = request.POST['author']
                author_obj = Author.objects.create(fname=author.split()[0],lname=author.split()[1])
            elif request.POST['author_method'] == 'author_select':
                author_obj = Author.objects.get(fname=request.POST['author_list'].split()[0])
            reviewer_id = request.session['user_id']
            title = request.POST['title']
            rating = request.POST['rating']
            book_obj = Book.objects.create(title=title, author=author_obj)
            review_obj = Review.objects.create(reviewer=Userdb.objects.get(id=reviewer_id), book=book_obj, review=review, rating=rating)
            return redirect('first_app:goToBook', book_id=book_obj.id)
    return redirect(request, 'first_app:addaddBookReview')

def addReview(request, book_id, author_id):
    if request.method == 'POST':
        if len(request.POST['review']) > 0:
            review_obj = Review.objects.create(reviewer=Userdb.objects.get(id=request.session['user_id']),
                                                book=Book.objects.get(id=book_id),
                                                review=request.POST['review'],
                                                rating=request.POST['rating'])
    return redirect('first_app:goToBook', book_id=book_id)


def deleteReview(request, review_i, book_id):
    Review.objects.get(id=review_i).delete()
    return redirect('first_app:goToBook', book_id=book_id)
