from django.urls import path,include
from obscura import views

app_name = 'obscura'
urlpatterns = [
    path('login/', views.loginView, name='login'),    
    path('user/', views.userView, name='user'),
    path('leaderboard/', views.leaderboardView, name='leaderboard'),
    path('user/updatescore/<year>', views.updatescoreView, name='updatescore'),
    path('user/year/<year>', views.questionView, name='question')                            
]