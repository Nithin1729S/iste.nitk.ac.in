from django.shortcuts import render,redirect
from website.decorators import check_member_year, check_edit_access_project, login_required, check_core_member
from .forms import ProjectForm
from .models import Project
from account.models import SIG,User
from datetime import datetime
from django.contrib import messages

def indexView(request, sig_name):
    projects = {}
    context = {}
    # years = [r for r in range(2018, datetime.today().year+1)]
    #Render projects as a 2D array indexed by year and sig
    # for year in years:
    #     projects[year] = {}
    #     for sig in SIG.objects.all():
    #         projects[year][sig] = Project.objects.filter(
    #             year=year,
    #             sigs__name=sig.name
    #         )
    if sig_name=='Catalyst':
        start_year = 2019
    else:
        start_year = 2018
    for year in range(start_year,datetime.today().year+1):
        projects[str(year)+'-'+str(year+1)[2:]] = Project.objects.filter(
            sigs__name=sig_name,
            year=year
        ).order_by('name')
    context['sig_name'] = sig_name
    context['projects'] = projects
    return render(request, 'project/index.html', context)

@login_required
@check_core_member
def addView(request):
    context = {}
    if request.method == 'GET':
        form = ProjectForm
        context['form'] = form
        return render(request, 'project/add.html', context)

    else:
        form = ProjectForm(request.POST, request.FILES)
        context['form'] = form
        if form.is_valid:
            form.save()

            messages.add_message(
                request,
                messages.SUCCESS,
                'New project '+request.POST['name']+' created successfully!'
            )
            return redirect('/project/add/')

        else:
            messages.add_message(
                request,
                messages.ERROR,
                'Invalid project details'
            )
    return render(request, 'project/add.html', context)

@login_required
@check_member_year(3,4)
@check_edit_access_project(Project)
def editView(request, project_id):
    context = {}
    form  = ProjectForm(
        instance= Project.objects.get(id=project_id)
        )

    project = Project.objects.get(id=project_id)
    context['project'] = project
    if request.method == 'GET':
        context['form'] = form
        return render(request, 'project/edit.html', context)

    else:
        form = ProjectForm(request.POST, request.FILES,instance = project)
        context['form'] = form
        if form.is_valid:
            form.save()

            messages.add_message(
                request,
                messages.SUCCESS,
                'Project '+request.POST['name']+' edited successfully!'
            )
            return redirect('project:details',project_id)

        else:
            messages.add_message(
                request,
                messages.ERROR,
                'Invalid project details'
            )
    return render(request, 'project/edit.html', context)

def detailsView(request, project_id):
    context = {}
    project = Project.objects.get(
        id=project_id
    )
    context['project'] = project
    return render(request, 'project/details.html', context)