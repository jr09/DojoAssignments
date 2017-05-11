from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^projects$', views.showProject),
    url(r'^about$', views.aboutMe),
    url(r'^testimonials$', views.testimonials)
]
