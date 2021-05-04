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
from ctf.serializers import TeamSerializer

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
    return Response({'message': 'Questions View here'})


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
        objUser = User.objects.filter(username=username)[0]
        objTeam = Team.objects.filter(userId=objUser)[0]
        teamid = objTeam.id
        return Response({'isLogin': True, 'msg': 'Login Successful', 'teamId': teamid})
    else:
        return Response({'isLogin': False, 'msg': 'Login Unsuccessful'}, status=status.HTTP_406_NOT_ACCEPTABLE)


@api_view(['POST'])
def getQuestions(request):
    # Get team id from frontend
    teamId = int(request.data['teamId'])
    team = Team.objects.filter(id=teamId)[0]
    teamQ = UserQuestion.objects.filter(userId=team)
    questions = []
    for i in Question.objects.all().order_by('id'):
        cur = i.__dict__
        del cur['_state']
        del cur['answer']
        cur['isAns'] = False
        curQ = teamQ.filter(questionId=i)[0]
        if curQ.score > 0:
            cur['isAns'] = True
        cur['isHint1'] = True
        cur['isHint2'] = True
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
        questions.append(cur)

    return Response({'questions': questions, 'score': team.score, 'team_name': team.team_name, 'team_roll_number': team.roll_number, 'teamid': team.id})


@api_view(['POST'])
def getHints(request):
    # Retrieving data
    qid = int(request.data['questionId'])
    teamid = int(request.data['teamId'])
    hid = int(request.data['hintId'])

    # Finding corresponding objects
    team = Team.objects.filter(id=teamid)[0]
    ques = Question.objects.filter(id=qid)[0]
    tq = UserQuestion.objects.filter(questionId=ques, userId=team)[0]

    # Few fail cases, not exhaustive
    hintUrl = ''
    flag = False
    if hid != 1 and hid != 2:
        flag = True
    if hid == 1 and ques.hint_1_url == None:
        flag = True
    if hid == 2 and ques.hint_2_url == None:
        flag = True
    if flag:
        return Response({'hintUrl': '', 'checkFail': True})

    # For hid 1 and hid 2
    if hid == 1:
        if not tq.hint_1:
            tq.hint_1 = True
            tq.score -= ques.points//3
            tq.save()
        hintUrl = ques.hint_1_url
    elif hid == 2:
        if not tq.hint_2:
            tq.hint_2 = True
            tq.score -= ques.points//3
            tq.save()
        hintUrl = ques.hint_2_url
    # Response
    return Response({'hintUrl': hintUrl, f'usedHint{hid}': True, 'checkFail': False})


@api_view(['POST'])
def ansQuestion(request):
    # Get data
    qid = int(request.data['questionId'])
    teamid = int(request.data['teamId'])
    ans = request.data['answer']

    # Finding corresponding objects
    team = Team.objects.filter(id=teamid)[0]
    ques = Question.objects.filter(id=qid)[0]
    tq = UserQuestion.objects.filter(questionId=ques, userId=team)[0]
    corAns = ques.answer

    # Checking if correct
    flag = False
    if ans == corAns:
        if tq.score <= 0:
            tq.score += ques.points
            tq.save()
            team.score += tq.score
            team.save()
        flag = True

    # Returning response
    return Response({'questionId': ques.id, 'isCorrect': flag, 'score': team.score})


@api_view(['GET'])
def getLB(request):
    # Get list of team objects
    teamList = Team.objects.all().order_by("-score")
    tlist = []
    for i in teamList:
        team_data = TeamSerializer(i).data

        # Delete user id data
        del team_data["userId"]
        tlist.append(team_data)

    # Response
    return Response({'teamList': tlist})
