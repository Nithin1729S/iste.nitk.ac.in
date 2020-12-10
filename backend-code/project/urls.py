from django.urls import path,include
from project import views

app_name = 'project'
urlpatterns = [
    path('all/<sig_name>/', views.indexViewAll, name='indexAll'),
    path('current/<sig_name>/', views.indexViewCurrent, name='indexCurrent'),
    # path('add/', views.addView, name='add'),
    # path('edit/<int:project_id>/', views.editView, name='edit'),
    #Make sure this is the last route always
    path('<int:project_id>/', views.detailsView, name='details'),

]