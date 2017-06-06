from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    url(r'^addcourse$', views.addCourse, name = 'addCourse'),
    url(r'^destroy/(?P<idx>\d+)$', views.destroyConfirmation, name = 'destroyConfirm'),
    url(r'^delete/(?P<idx>\d+)$', views.delete, name = 'deleteCourse'),
    url(r'^comments/(?P<idx>\d+)$', views.showComments, name = 'showComments'),
    url(r'^addComment/(?P<idx>\d+)$', views.addComment, name = 'addComment')
]
