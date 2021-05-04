from rest_framework.response import Response
from rest_framework.decorators import api_view
from website.helperFunctions import user_avatar_upload_path
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.files.storage import default_storage

from cryptonite.blackbox import *
# Create your views here.

@api_view(['POST'])
def blackbox(request):
    # Get id from frontend
    bbid = int(request.data['id'])
    inp = request.data['input']
    li = [i.strip() for i in inp.split(',')]
    finalLi = []
    for i in li:
        try:
            finalLi.append(int(i))
        except ValueError:
            return Response({'answer': 'Input not viable.'})

    decision = {1:function1, 2:function2, 3:function3, 4:function4, 5:function5, 6:function6, 7:function7, 8:function8, 9:function9, 10:function10}
    # Dictionary for easy selection of function
    return Response({'answer': decision[bbid](finalLi)})