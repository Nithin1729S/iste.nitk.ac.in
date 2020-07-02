from django.shortcuts import render
from .models import Event
from django.db.models import Q
from .forms import EventForm
from datetime import datetime
from website.decorators import check_core_member, check_member_year, check_edit_access, login_required

def indexView(request):
    context = {}
    today = datetime.today()

    if request.user.is_authenticated:
        #Show all events to club members
        events = Event.objects.exclude(
            date_time__lte = today
        )
    else:
        #Show events with poster, form_link, message to general public
        events = Event.objects.exclude(
            Q(date_time__lte = today) |
            Q(poster = '') |
            Q(form_link = '') |
            Q(publicity_message = '')
        )
    context['events'] = events 

    return render(request, 'event/index.html', context)

@login_required
@check_core_member
def addView(request):
    context = {}
    form = EventForm()
    return render(request, 'event/add.html', context)

@login_required
@check_member_year(3,4)
@check_edit_access(Event)
def editView(request, event_id):
    context = {}
    form = EventForm(
        instance = Event.objects.get(event_id)
    )
    return render(request, 'event/edit.html', context)

def detailsView(request, event_name):
    event = Event.objects.get(
        name = event_name
    )
    context = {'event': event}
    return render(request, 'event/details.html', context)