from django.urls import path,include
from sig import views

app_name = 'sig'
urlpatterns = [
    path('<sig_name>/', views.detailsView, name='details'),
]