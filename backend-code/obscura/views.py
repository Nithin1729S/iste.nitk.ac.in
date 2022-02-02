from django.shortcuts import render

from obscura.models import team
from obscura.models import score
from obscura.models import attempt
from obscura.models import question
from rest_framework.response import Response
from rest_framework.decorators import api_view
from obscura.serializers import ScoreSerializer
# Create your views here.


@api_view(['GET'])
def loginView(request):
    username = request.GET['username']
    password = request.GET['password']
    try:
        team_details = team.objects.get(username=username)
        if(team_details.password == password):
            status = {}
            status['yearPassed'] = team_details.yearPassed
            scores = score.objects.filter(username=username)
            team_scores = ScoreSerializer(scores, many=True).data
            status['scores'] = team_scores
            return Response(status)
        else:
            return Response({'isLogin': False, 'msg': 'Password Wrong'})
    except:
        return Response({'isLogin': False, 'msg': 'Username Wrong'})


@api_view(['GET'])
def userView(request):
    username = request.GET['username']
    try:
        team_details = team.objects.get(username=username)
        status = {}
        status['username'] = username
        status['yearPassed'] = team_details.yearPassed
        status['total_score'] = team_details.total_score
        scores = score.objects.filter(username=username)
        team_scores = ScoreSerializer(scores, many=True).data
        status['scores'] = team_scores
        return Response(status)
    except:
        return Response({'msg': 'No User Exists'})


@api_view(['GET'])
def leaderboardView(request):
    data = {}
    teams = team.objects.order_by('-total_score')
    counter = 0
    for user in teams.iterator():
        counter += 1
        indi = {}
        indi['username'] = user.username
        indi['total_score'] = user.total_score
        indi['yearPassed'] = user.yearPassed
        scores = score.objects.filter(username=user.username)
        print(scores)
        team_scores = ScoreSerializer(scores, many=True).data
        indi['scores'] = team_scores
        data[counter] = indi
    return Response(data)


@api_view(['POST'])
def updatescoreView(request, year):
    username = request.GET['username']
    total = int(request.GET['score'])
    has_passed = int(request.GET['has_passed'])
    numberQuestionSolved = int(request.GET['numberQuestionSolved'])
    questionScore = int(request.GET['questionScore'])

    team_details = team.objects.get(username=username)
    scores = score.objects.get(username=username)
    questions = question.objects.get(username=username)
    attempts = attempt.objects.get(username=username)

    if year == '1':
        year_score = int(scores.firstYear)
        question_score = int(scores.firstYearQuestion)

        year_score = max(year_score, total)
        question_score = questionScore
        scores.firstYear = year_score
        scores.firstYearQuestion = question_score
        questions.firstYear = numberQuestionSolved
        attempts.firstYear += 1
    elif year == '2':
        year_score = int(scores.secondYear)
        question_score = int(scores.secondYearQuestion)

        year_score = max(year_score, total)
        question_score = max(question_score, questionScore)
        scores.secondYear = year_score
        scores.secondYearQuestion = question_score
        questions.secondYear = numberQuestionSolved
        attempts.secondYear += 1

    elif year == '3':
        year_score = int(scores.thirdYear)
        question_score = int(scores.thirdYearQuestion)

        year_score = max(year_score, total)
        question_score = max(question_score, questionScore)
        scores.thirdYear = year_score
        scores.thirdYearQuestion = question_score
        questions.thirdYear = numberQuestionSolved
        attempts.thirdYear += 1

    elif year == '4':
        year_score = int(scores.fourthYear)
        question_score = int(scores.fourthYearQuestion)

        year_score = max(year_score, total)
        question_score = max(question_score, questionScore)
        scores.fourthYear = year_score
        scores.fourthYearQuestion = question_score
        questions.fourthYear = numberQuestionSolved
        attempts.fourthYear += 1

    if has_passed == 1 and int(year) > team_details.yearPassed:
        team_details.yearPassed = int(year)

    team_details.total_score = int(
        scores.firstYear + scores.secondYear + scores.thirdYear + scores.fourthYear)
    team_details.save()
    scores.save()
    questions.save()
    attempts.save()
    return Response({'msg': 'Score Updated'})


@api_view(['GET'])
def questionView(request, year):
    username = request.GET['username']
    questions = question.objects.get(username=username)
    attempts = attempt.objects.get(username=username)
    scores = score.objects.get(username=username)
    result = {}
    if year == '1':
        result['numAttempts'] = attempts.firstYear
        result['numQuestionsSolved'] = questions.firstYear
        result['questionScore'] = scores.firstYearQuestion
    elif year == '2':
        result['numAttempts'] = attempts.secondYear
        result['numQuestionsSolved'] = questions.secondYear
        result['questionScore'] = scores.secondYearQuestion
    elif year == '3':
        result['numAttempts'] = attempts.thirdYear
        result['numQuestionsSolved'] = questions.thirdYear
        result['questionScore'] = scores.thirdYearQuestion
    elif year == '4':
        result['numAttempts'] = attempts.fourthYear
        result['numQuestionsSolved'] = questions.fourthYear
        result['questionScore'] = scores.fourthYearQuestion
    return Response(result)
