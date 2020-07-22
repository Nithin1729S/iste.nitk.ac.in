from django.urls import path,include
from recruitment import views

app_name = 'recruitment'
urlpatterns = [
    path('', views.indexView, name = 'index'),
    path('<sig_name>/',views.detailView, name = 'details'),
    path('faq/', views.FAQView, name = 'FAQ')
]