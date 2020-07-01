from django.urls import path, include
from account import views

app_name = 'account'
urlpatterns = [
    path('login/', views.loginView, name = 'login'),
    path('logout/', views.logoutView, name = 'logout'),
    path('edit/', views.editView, name = 'edit'),
    path('change_password/', views.changePasswordView, name = 'change_password'),
]