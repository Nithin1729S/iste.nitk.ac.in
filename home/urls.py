from django.urls import path,include
from home import views

app_name = 'home'
urlpatterns = [
    path('', views.indexView, name='index'),
    path('deploy/', views.deployView, name='deploy'),
]