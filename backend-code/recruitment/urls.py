from django.urls import path,include
from recruitment import views

app_name = 'recruitment'
urlpatterns = [

    path('',views.detailView, name = 'recs'),
]