from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(request):
    return HttpResponse("Scotland yard 24 works!")

def admin(request):
    authorised_users = [
        {
            'username': 'sudarshan',
            'password': 'xxx123'
        }
    ]
    return HttpResponse("Scotland yard 24 admin only!")

def yard(request):
    return HttpResponse("The main yard!")