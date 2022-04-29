from django.shortcuts import render

# Create your views here.
from cryptonite.questions import question1,question2,question3,question4,question5,question6,question7,question8,question9
from rest_framework.response import Response
from rest_framework.decorators import api_view



@api_view(['GET'])
def q1(request):
    query = request.GET['query']
    try:
        if query.isdigit() is False :
            return Response({'msg': "Wrong Input"})
        elif int(query) < 0:
            return Response({'msg': "Wrong Input"})
        else :
            answer = question1(int(query))
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
        else :
            answer = question3(int(query))
            return Response({'ans': answer})
    except:
        return Response({'msg': "Wrong Input"})

@api_view(['GET'])
def q4(request):
    query = request.GET['query']
    try:
        if len(query) > 1 :
            print("Err1")
            return Response({'msg': "Wrong Input"})
        elif query.isalpha() is False:
            return Response({'msg': "Wrong Input"})
        else :
            answer = question4(query)
            return Response({'ans': answer})
    except:
        print("Err3")
        return Response({'msg': "Wrong Input"})

@api_view(['GET'])
def q5(request):
    query = request.GET['query']
    try:
        if query.isdigit() is False :
            return Response({'msg': "Wrong Input"})
        elif int(query) < 0:
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
        answer = question7(query)
        return Response({'ans': answer})
    except:
        return Response({'msg': "Wrong Input"})

@api_view(['GET'])
def q8(request):
    query = request.GET['query']
    try:
        if len(query) > 1 :
            return Response({'msg': "Wrong Input"})
        elif query.isalpha() is False:
            return Response({'msg': "Wrong Input"})
        else :
            answer = question8(query)
            return Response({'ans': answer})
    except:
        return Response({'msg': "Wrong Input"})
    
@api_view(['GET'])
def q9(request):
    query = request.GET['query']
    try:
        if query.isdigit() is False :
            return Response({'msg': "Wrong Input"})
        elif int(query) < 0:
            return Response({'msg': "Wrong Input"})
        else :
            answer = question9(int(query))
            return Response({'ans': answer})
    except:
        return Response({'msg': "Wrong Input"})