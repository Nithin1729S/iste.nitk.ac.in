from django.urls import path,include
from project import views

app_name = 'recruitment'
urlpatterns = [
    path('', views.indexView, name = 'index'),
]