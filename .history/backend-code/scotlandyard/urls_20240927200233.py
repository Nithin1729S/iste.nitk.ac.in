from django.urls import path

from . import views

app_name="scotlandyard"
urlpatterns = [
    path("", views.index, name="index"),
    path("admin/", views.admin, name="admin"),
    path("update_color/", views.update_color, name="update_color"),
    path("yard/", views.admin, name="yard"),
]