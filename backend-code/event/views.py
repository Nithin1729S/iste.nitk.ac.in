from django.shortcuts import render, redirect
from django.contrib import messages
from django.db.models import Q
from datetime import datetime, timedelta
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
import cloudinary.uploader as up
import cloudinary

from website.permissions import IsCoreMember
from account.models import User
from sig.models import SIG
from event.models import Event
from event.serializers import EventSerializer
from website.decorators import check_core_member, check_member_year, check_edit_access_event, login_required


@api_view(['GET'])
def indexView(request):
    yesterday = datetime.today() - timedelta(days=1)

    events_obj = Event.objects.exclude(
        date_time__lte=yesterday
    ).order_by('date_time')
    events_data = EventSerializer(events_obj, many=True, fields=[
                                  'name', 'date_time', 'poster', 'sigs', 'venue']).data
    return Response(events_data)

# This API is not yet being used


@api_view(['POST'])
@permission_classes([IsAuthenticated, IsCoreMember])
def addView(request):
    data = request.POST
    event = Event(
        name=data['name'],
        date_time=data['date_time'],
        no_of_participants=data['no_of_participants'],
        poster=request.FILES['poster'],
        form_link=data['form_link'],
        publicity_message=data['publicity_message'],
        venue=data['venue'],
    )
    event.save()
    event.contacts.set(data['contacts'])
    event.editable_by.set(data['editable_by'])
    event.sigs.set(data['sigs'])
    event.save()
    return Response({'msg': 'Event added successfully'})

# Create more APIs to edit and delete Events, making it easier for core members to edit stuff


@api_view(['GET'])
def detailsView(request, event_name):
    event_obj = Event.objects.get(
        name=event_name
    )
    event_data = EventSerializer(event_obj).data
    return Response(event_data)
