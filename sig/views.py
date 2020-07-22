from django.shortcuts import render
from project.models import Project
from account.models import SIG
from datetime import datetime

# Create your views here.

def detailsView(request, sig_name):
    context = {}
    this_year = datetime.now().year
    this_month = datetime.now().month
    if this_month<7:
        this_year = this_year-1

    sig = SIG.objects.get(
        name=sig_name
    )
    projects = Project.objects.filter(
        sigs__name=sig.name,
        year=this_year
    )
    context['year'] = str(this_year)+'-'+str(this_year+1)[2:]
    context['sig'] = sig
    context['projects'] = projects
    return render(request, 'sig/details.html', context)