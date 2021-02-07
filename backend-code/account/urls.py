from django.urls import path, include
from account import views
from rest_framework.authtoken import views as rest_framework_views

app_name = 'account'
urlpatterns = [
    path('login/', views.loginView, name='login'),
    path('logout/', views.logoutView, name='logout'),
    path('edit/', views.editView, name='edit'),
    path('change_password/', views.changePasswordView, name='change_password'),
    path('get_auth_token/',views.CustomAuthToken.as_view(), name='get_auth_token')
]