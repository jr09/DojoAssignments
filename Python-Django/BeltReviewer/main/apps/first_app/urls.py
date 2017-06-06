from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^books$' , views.home, name='books'),
    url(r'^books/(?P<book_id>\d+)$', views.goToBook, name='goToBook'),
    url(r'^users/(?P<user_id>\d+)$', views.goToReviewer, name='goToReviewer'),
    url(r'^add$', views.addBookReview, name='addBookReview'),
    url(r'^addReview/(?P<book_id>\d+)/(?P<author_id>\d+)$', views.addReview, name='addReview'),
    url(r'^deleteReview/(?P<review_i>\d+)/(?P<book_id>\d+)$', views.deleteReview, name='deleteReview'),
    url(r'^addthisbook$', views.addthisbook, name='addthisbook'),
]
