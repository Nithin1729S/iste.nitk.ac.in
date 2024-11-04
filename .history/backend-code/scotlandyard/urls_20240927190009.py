from django.urls import path

from . import views

app_name="scotlandyard"
urlpatterns = [
    path("", views.index, name="index"),
    path("admin/", views.admin, name="admin"),
]