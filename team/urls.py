from django.urls import path,include
from team import views

app_name = 'sig'
urlpatterns = [
    path('', views.indexView, name='index'),
]