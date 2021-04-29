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

from .models import *
from account.models import User

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
    # user = request.user 

    user = User.objects.filter(username='Arjun')[0]
    team = Team.objects.filter(userId=user)[0]
    teamQ= UserQuestion.objects.filter(userId=team)
    questions = []
    for i in Question.objects.all().order_by('id'):
        cur = i.__dict__
        del cur['_state']
        cur['isAns'] = False
        curQ = teamQ.filter(questionId=i)[0]
        if curQ.score >= 0:
            cur['isAns'] = True
        questions.append(cur)
        cur['isHint1'] = True
        cur['isHint2'] = True
        if cur['hint_1_url'] == None:
            print('True')
        if cur['hint_1_url'] == None:
            cur['isHint1'] = False
        else:
            if curQ.hint_1:
                cur['usedHint1'] = True
            else:
                cur['usedHint1'] = False 
        del cur['hint_1_url']
        if cur['hint_2_url'] == None:
            cur['isHint2'] = False
        else:
            if curQ.hint_2:
                cur['usedHint2'] = True
            else:
                cur['usedHint2'] = False
        del cur['hint_2_url']       

    return Response({'questions':questions, 'score':team.score, 'team_name':team.team_name})

@api_view(['GET'])
def getHints(request):
    return Response({'hints': 1})

@api_view(['POST'])
def ansQuestion(request):
    return Response({'hints': 1})

@api_view(['GET'])
def getLB(request):
    return Response({'leaderboard': 1})