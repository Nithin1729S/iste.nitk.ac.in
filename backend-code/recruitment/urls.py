from django.urls import path,include
from recruitment import views

app_name = 'recruitment'
urlpatterns = [

    path('<sig_name>/',views.roundInfo, name = 'recs')
]