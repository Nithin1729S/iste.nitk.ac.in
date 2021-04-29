from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from website.helperFunctions import user_avatar_upload_path
from website.decorators import check_member_year, login_required
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.core.files.storage import default_storage
from django.contrib.auth import update_session_auth_hash

# Create your views here.

class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'team_name': user.first_name,
            'last_name': user.last_name,
            'email': user.email
        })

@api_view(['GET'])
def questionsView(request):
    return Response({'message': 'Questions View'})

@api_view(['POST'])
def isLogin(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    if not username == None:
        username = username.strip()
    if not password == None:
        password = password.strip()
    user = authenticate(
        request,
        username=username,
        password=password
    )
    if user is not None:
        login(request, user)
        return Response({'isLogin': True, 'msg': 'Login Successful'})
    else:
        return Response({'isLogin': False, 'msg': 'Login Unsuccessful'}, status=status.HTTP_406_NOT_ACCEPTABLE)

@api_view(['GET'])
def getQuestions(request):
    return Response({'questions': 1})

@api_view(['GET'])
def getHints(request):
    return Response({'hints': 1})

@api_view(['GET'])
def getLB(request):
    return Response({'leaderboard': 1})