from django.shortcuts import render
from project.models import Project
from sig.models import SIG
from datetime import datetime
from sig.serializers import SIGSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def detailsView(request,sig_name):
    sig_object = SIG.objects.get(name=sig_name)
    sig_data = SIGSerializer(sig_object).data
    return Response(sig_data)