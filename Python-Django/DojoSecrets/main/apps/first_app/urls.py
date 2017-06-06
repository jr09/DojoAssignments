from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),

    url(r'^landing/(?P<user_id>\d+)$', views.landing, name='landing'),

    url(r'^login$', views.login, name='login'),

    url(r'^register$', views.register, name='register'),

    url(r'^addSecret/(?P<user_id>\d+)$', views.addSecret, name='addSecret'),

    url(r'^logout$', views.logout, name='logout'),

    url(r'^popularSecrets/(?P<user_id>\d+)$', views.popularSecrets, name='popularSecrets'),

    url(r'^like/(?P<user_id>\d+)/(?P<secret_id>\d+)$', views.like, name='like'),

    url(r'^delete/(?P<secret_id>\d+)$', views.delete, name='delete')
]
