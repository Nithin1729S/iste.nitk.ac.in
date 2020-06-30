from django.urls import path,include
from event import views

app_name = 'event'
urlpatterns = [
    path('', views.indexView, name = 'index'),
]