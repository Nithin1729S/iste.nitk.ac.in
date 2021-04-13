from django.urls import path,include
from ctf import views

app_name = 'ctf'

#dummy url patterns for now
urlpatterns = [
    'questions/',views.questionsView,name = 'questions'
]