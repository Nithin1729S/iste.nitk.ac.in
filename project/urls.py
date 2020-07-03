from django.urls import path,include
from project import views

app_name = 'project'
urlpatterns = [
    path('', views.indexView, name='index'),
    path('add/', views.addView, name='add'),
    path('project/<project_id>', views.editView, name='edit'),
    #Make sure this is the last route always
    path('<project_name>/', views.detailsView, name='details'),
]