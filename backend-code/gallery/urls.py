from django.urls import path,include
from gallery import views

app_name = 'team'
urlpatterns = [
    path('', views.indexView, name='index'),
    path('event/',views.eventIndex,name='event'),
    path('socialInitiative/',views.socialView,name='social')
]