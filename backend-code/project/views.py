from datetime import datetime
from rest_framework.decorators import api_view
from rest_framework.response import Response

from website.decorators import check_member_year, check_edit_access_project, login_required, check_core_member
from project.models import Project
from account.models import User
from sig.models import SIG
from project.serializers import ProjectSerializer


# def mapNewId(projects):
#     l = []
#     current_ids = {
#         18: 'catalyst1',
#         20: 'catalyst2',
#         103: 'catalyst3',

#         4: 'charge1',
#         31: 'charge2',
#         25: 'charge3',
#         26: 'charge4',
#         102: 'charge5',
#         28: 'charge6',

#         37: 'chronicle1',
#         84: 'chronicle2',
#         35: 'chronicle3',

#         34: 'clutch1',
#         29: 'clutch2',
#         22: 'clutch3',
#         2: 'clutch4',

#         100: 'concrete2',
#         15: 'concrete1',
#         5: 'concrete4',
#         32: 'concrete3',
#         8: 'concrete5',

#         17: 'create1',
#         35: 'create2',

#         21: 'credit5',
#         11: 'credit6',
#         3: 'credit3',
#         16: 'credit4',
#         9: 'credit2',
#         7: 'credit1',
#         27: 'credit7',

#         19: 'crypt2',
#         14: 'crypt5',
#         99: 'crypt1',
#         13: 'crypt4',
#         30: 'crypt3',
#         24: 'crypt6'

#     }
#     for project in projects:
#         if project['id'] in current_ids:
#             d = project
#             d['id'] = current_ids[project['id']]
#             l.append(d)
#     return l


@api_view(['GET'])
def indexViewAll(request, sig_name):
    projects = {}
    if sig_name == 'Catalyst':
        start_year = 2019
    else:
        start_year = 2018
    for year in range(start_year, datetime.today().year+1):
        projects_obj = Project.objects.filter(
            sigs__name=sig_name,
            year=year
        ).order_by('name')
        projects_data = ProjectSerializer(projects_obj, many=True).data
        projects[str(year)+'-'+str(year+1)[2:]] = projects_data
    return Response(projects)


@api_view(['GET'])
def indexViewCurrent(request, sig_name):
    this_year = datetime.now().year
    this_month = datetime.now().month
    if this_month < 7:
        this_year = this_year-1
    sig = SIG.objects.get(
        name=sig_name
    )
    projects_obj = Project.objects.filter(
        sigs__name=sig.name,
        year=this_year
    ).order_by('name')
    projects_data = ProjectSerializer(projects_obj, many=True).data

    # mapping for custom id, to be removed later
    # projects_data = mapNewId(projects_data)

    return Response(projects_data)


@api_view(['GET'])
def detailsView(request, project_id):
    try:
        project_obj = Project.objects.get(
            id=project_id
        )
    except:
        return Response({})
    project_data = ProjectSerializer(project_obj).data
    return Response(project_data)
