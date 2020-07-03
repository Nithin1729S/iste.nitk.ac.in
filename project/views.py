from django.shortcuts import render
from website.decorators import check_member_year, check_edit_access, login_required
from .forms import ProjectForm
from .models import Project
from account.models import SIG
from datetime import datetime

def indexView(request):
    projects = {}
    context = {}
    years = [r for r in range(2019, datetime.today().year+1)]
    #Render projects as a 2D array indexed by year and sig
    for year in years:
        projects[year] = {}
        for sig in SIG.objects.all():
            projects[year][sig] = Project.objects.filter(
                year = year,
                sigs__name = sig.name
            )
    context['projects'] = projects
    return render(request, 'project/index.html', context)

@login_required
@check_member_year(3,4)
def addView(request):
    context = {}

    return render(request, 'project/add.html', context)

@login_required
@check_member_year(3,4)
@check_edit_access(Project)
def editView(request, project_id):
    context = {}

    return render(request, 'project/edit.html', context)

def detailsView(request, project_name):
    context = {}
    project = Project.objects.get(
        name = project_name
    )
    context['project'] = project
    return render(request, 'project/details.html', context)