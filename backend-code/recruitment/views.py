from django.shortcuts import render
from sig.models import SIG

from recruitment.models import Round
from recruitment.models import RegLink
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from recruitment.serializers import RoundSerializer
from team.models import Core

# GET API for recs backend
@api_view(['GET'])
def roundInfo(request,sig_name):
    context = {}
    # sig = 
    sig = SIG.objects.get(
        name=sig_name )
    
    regLink = RegLink.objects.get(sig=sig).link
    context['registerLink'] = regLink
    roundData = Round.objects.filter(
        sig=sig,
    ).order_by('date_time')
    rounds = RoundSerializer(roundData, many=True).data
    context['rounds'] = rounds

    return Response(context)