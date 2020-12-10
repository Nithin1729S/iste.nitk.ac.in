from django.urls import path,include
from event import views

app_name = 'event'
urlpatterns = [
    path('', views.indexView, name='index'),
    path('add/', views.addView, name='add'),
    path('edit/<event_id>', views.editView, name='edit'),
    #Make sure this is the last route always
    path('<event_name>/', views.detailsView, name='details'),
]