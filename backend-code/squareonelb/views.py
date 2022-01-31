# from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from squareonelb.serializers import *

# Create your views here.
@api_view(["GET"])
def leaderboard(request):
    leaderboard = SquareOneUser.objects.all().order_by("-score")
    data = SquareOneUserSerializer(leaderboard, many=True).data
    return Response({"teamList": data})
