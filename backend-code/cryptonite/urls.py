from django.urls import path,include
from cryptonite import views

app_name = 'cryptonite'

# URLs
urlpatterns = [
    path('blackbox/', views.blackbox, name='dummy'),
]