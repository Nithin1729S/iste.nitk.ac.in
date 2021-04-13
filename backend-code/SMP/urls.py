from django.urls import path,include
from SMP import views

app_name = 'SMP'
urlpatterns = [
    path('', views.indexView, name='index'),
    path('<sig_name>/', views.detailsView, name='details'),
]