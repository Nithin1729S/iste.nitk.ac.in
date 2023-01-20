from django.urls import path,include
from gallery import views

app_name = 'team'
urlpatterns = [
    path('', views.indexView, name='index'),
]