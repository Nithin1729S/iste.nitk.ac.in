from django.urls import path,include
from team import views

app_name = 'team'
urlpatterns = [
    path('', views.indexView, name='index'),
    path('core',views.coreView, name='core'),
]