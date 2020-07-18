from django.shortcuts import render,redirect
from django.contrib import messages
from account.models import User,SIG
from .models import Event
from django.db.models import Q
from .forms import EventForm
from datetime import datetime, timedelta
from website.decorators import check_core_member, check_member_year, check_edit_access, login_required

def indexView(request):
    context = {}
    yesterday = datetime.today() - timedelta(days=1)

    if request.user.is_authenticated:
        #Show all events to club members
        events = Event.objects.exclude(
            date_time__lte=yesterday
        )
    else:
        #Show events with poster, form_link, message to general public
        events = Event.objects.exclude(
            Q(date_time__lte=yesterday) |
            Q(poster='') |
            Q(form_link='') |
            Q(publicity_message='')
        )
    context['events'] = events 

    return render(request, 'event/index.html', context)

@login_required
@check_core_member
def addView(request):
    context = {}

    if request.method == "GET":
        form = EventForm()
        context['form'] = form
        return render(request, 'event/add.html', context)
    else:
        form = EventForm(request.POST, request.FILES)
        context['form'] = form
        if form.is_valid():
            data = form.cleaned_data

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

            messages.add_message(
                request,
                messages.SUCCESS,
                'New event '+data['name']+' created successfully!'
            )

            return redirect('/event/')
        else:
            messages.add_message(
                request,
                messages.ERROR,
                'Invalid event details'
            )    
    return render(request, 'event/add.html', context)

@login_required
@check_member_year(3,4)
@check_edit_access(Event)
def editView(request, event_id):
    context = {'id':event_id}
    event = Event.objects.get(id=event_id)

    if request.method == "GET":
        form = EventForm(
            instance=event
        )
        context['form'] = form
        context['poster'] = event.poster.url
    else:
        form = EventForm(request.POST, request.FILES)
        context['form'] = form
        if form.is_valid():
            data = form.cleaned_data

            event.name = data['name']
            event.date_time = data['date_time']
            event.no_of_participants = data['no_of_participants']
            if 'poster' in request.FILES:
                event.poster = request.FILES['poster']
            event.form_link = data['form_link']
            event.publicity_message = data['publicity_message']
            event.venue =data['venue']
            event.save()

            event.contacts.set(data['contacts'])
            event.editable_by.set(data['editable_by'])
            event.sigs.set(data['sigs'])
            event.save()

            messages.add_message(
                request,
                messages.SUCCESS,
                data['name']+' edited successfully!'
            )

            return redirect('/event/')
        else:
            messages.add_message(
                request,
                messages.ERROR,
                'Invalid event details'
            )
    return render(request, 'event/edit.html', context)

def detailsView(request, event_name):
    context = {}
    event = Event.objects.get(
        name = event_name
    )
    context['event'] = event
    return render(request, 'event/details.html', context)