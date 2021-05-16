from django.urls import path,include
from ctf import views

app_name = 'ctf'

# URLs
urlpatterns = [
    path('dummy/', views.questionsView, name='dummy'),
    path('login/', views.isLogin, name='login'),
    path('questions/', views.getQuestions, name='questions'),
    path('checkAns/', views.ansQuestion, name='ansQuestion'),
    path('hints/', views.getHints, name='hints'),
    path('leaderboard/', views.getLB, name='leaderboard'),
    path('get_auth_token/',views.CustomAuthToken.as_view(), name='get_auth_token')
]