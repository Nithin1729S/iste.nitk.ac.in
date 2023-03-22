from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from clutchMysteryBox.questions import question1, question2, question3, question4, question5, question6 ,question7, question8, question9, question10
# Create your views here.

@api_view(['GET'])
def indexView(request):
    return Response("bru")

@api_view(['GET'])
def q1(request):
    query= request.GET['query']
    [query1,query2]=query.strip().split(',')
    try:
        if query1.isdigit() is False or query2.isdigit() is False:
            return Response({'msg': "Wrong Input"})
        else :
            answer = question1(int(query1),int(query2))
            return Response({'ans': answer})
    except:
        return Response({'msg': "Wrong Input"})

@api_view(['GET'])
def q2(request):
    query = request.GET['query']
    try:
        if query.isdigit() is False :
            return Response({'msg': "Wrong Input"})
        elif int(query) < 0:
            return Response({'msg': "Wrong Input"})
        else :
            answer = question2(int(query))
            return Response({'ans': answer})
    except:
        return Response({'msg': "Wrong Input"})

@api_view(['GET'])
def q3(request):
    query = request.GET['query']
    try:
        if query.isdigit() is False :
            return Response({'msg': "Wrong Input"})
        elif int(query) < 0:
            return Response({'msg': "Wrong Input"})
        else :
            answer = question3(int(query))
            return Response({'ans': answer})
    except:
        return Response({'msg': "Wrong Input"})

@api_view(['GET'])
def q4(request):
    query= request.GET['query']
    [query1,query2]=query.strip().split(',')
    try:
        if query1.isdigit() is False or query2.isdigit() is False :
            return Response({'msg': "Wrong Input"})
        else :
            answer = question4(int(query1),int(query2))
            return Response({'ans': answer})
    except:
        return Response({'msg': "Wrong Input"})
    
@api_view(['GET'])
def q5(request):
    query = request.GET['query']
    try:
        if query.isdigit() is False :
            return Response({'msg': "Wrong Input"})
        else :
            answer = question5(int(query))
            return Response({'ans': answer})
    except:
        return Response({'msg': "Wrong Input"})

@api_view(['GET'])
def q6(request):
    query = request.GET['query']
    try:
        if query.isdigit() is False :
            return Response({'msg': "Wrong Input"})
        elif int(query) < 0:
            return Response({'msg': "Wrong Input"})
        else :
            answer = question6(int(query))
            return Response({'ans': answer})
    except:
        return Response({'msg': "Wrong Input"})

@api_view(['GET'])
def q7(request):
    query = request.GET['query']
    try:
        if query.isdigit() is False :
            return Response({'msg': "Wrong Input"})
        else :
            answer = question7(int(query))
            return Response({'ans': answer})
    except:
        return Response({'msg': "Wrong Input"})
    
@api_view(['GET'])
def q8(request):
    query= request.GET['query']
    [query1,query2]=query.strip().split(',')
    try:
        if query1.isdigit() is False or query2.isdigit() is False :
            return Response({'msg': "Wrong Input"})
        else :
            answer = question8(int(query1),int(query2))
            return Response({'ans': answer})
    except:
        return Response({'msg': "Wrong Input"})
    
@api_view(['GET'])
def q9(request):
    query= request.GET['query']
    [query1,query2]=query.strip().split(',')
    try:
        if query1.isdigit() is False or query2.isdigit() is False :
            return Response({'msg': "Wrong Input"})
        else :
            answer = question9(int(query1),int(query2))
            return Response({'ans': answer})
    except:
        return Response({'msg': "Wrong Input"})
    
@api_view(['GET'])
def q10(request):
    query= request.GET['query']
    [query1,query2]=query.strip().split(',')
    try:
        if query1.isdigit() is False or query2.isdigit() is False :
            return Response({'msg': "Wrong Input"})
        else :
            answer = question10(int(query1),int(query2))
            return Response({'ans': answer})
    except:
        return Response({'msg': "Wrong Input"})