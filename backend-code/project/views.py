from django.shortcuts import render,redirect
from website.decorators import check_member_year, check_edit_access_project, login_required, check_core_member
from .forms import ProjectForm
from .models import Project
from account.models import SIG,User
from project.serializers import ProjectSerializer
from datetime import datetime
from django.contrib import messages
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def indexViewAll(request, sig_name):
    projects = {}
    if sig_name=='Catalyst':
        start_year = 2019
    else:
        start_year = 2018
    for year in range(start_year,datetime.today().year+1):
        projects_obj = Project.objects.filter(
            sigs__name=sig_name,
            year=year
        ).order_by('name')
        projects_data = ProjectSerializer(projects_obj,many=True).data
        projects[str(year)+'-'+str(year+1)[2:]] = projects_data
    return Response(projects)

@api_view(['GET'])
def indexViewCurrent(request, sig_name):
    this_year = datetime.now().year
    this_month = datetime.now().month
    if this_month<7:
        this_year = this_year-1
    sig = SIG.objects.get(
        name=sig_name
    )
    projects_obj = Project.objects.filter(
        sigs__name=sig.name,
        year=this_year
    ).order_by('name')
    projects_data = ProjectSerializer(projects_obj,many=True).data
    return Response(projects_data)

# @login_required
# @check_core_member
# def addView(request):
#     context = {}
#     if request.method == 'GET':
#         form = ProjectForm
#         context['form'] = form
#         return render(request, 'project/add.html', context)

#     else:
#         form = ProjectForm(request.POST, request.FILES)
#         context['form'] = form
#         if form.is_valid:
#             form.save()

#             messages.add_message(
#                 request,
#                 messages.SUCCESS,
#                 'New project '+request.POST['name']+' created successfully!'
#             )
#             return redirect('/project/add/')

#         else:
#             messages.add_message(
#                 request,
#                 messages.ERROR,
#                 'Invalid project details'
#             )
#     return render(request, 'project/add.html', context)

# @login_required
# @check_member_year(3,4)
# @check_edit_access_project(Project)
# def editView(request, project_id):
#     context = {}
#     form  = ProjectForm(
#         instance= Project.objects.get(id=project_id)
#         )

#     project = Project.objects.get(id=project_id)
#     context['project'] = project
#     if request.method == 'GET':
#         context['form'] = form
#         return render(request, 'project/edit.html', context)

#     else:
#         form = ProjectForm(request.POST, request.FILES,instance = project)
#         context['form'] = form
#         if form.is_valid:
#             form.save()

#             messages.add_message(
#                 request,
#                 messages.SUCCESS,
#                 'Project '+request.POST['name']+' edited successfully!'
#             )
#             return redirect('project:details',project_id)

#         else:
#             messages.add_message(
#                 request,
#                 messages.ERROR,
#                 'Invalid project details'
#             )
#     return render(request, 'project/edit.html', context)

@api_view(['GET'])
def detailsView(request, project_id):
    project_obj = Project.objects.get(
        id=project_id
    )
    project_data = ProjectSerializer(project_obj).data
    return Response(project_data)