from django.urls import path, include
from squareonelb import views

app_name = "squareonelb"

# URLs
urlpatterns = [
    path("", views.leaderboard, name="leaderboard"),
]
