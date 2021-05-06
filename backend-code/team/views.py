from django.shortcuts import render
from account.models import User,Core, AuxCore
from account.serializers import CoreSerializer, AuxCoreSerializer, UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from datetime import datetime

# Create your views here.

# def indexView(request):
#     context = {}
    
#     core = Core.objects.all()
#     aux_core = AuxCore.objects.all()

#     core_names = []
#     for member in core:
#         core_names.append(member.user.first_name + member.user.last_name)
#     for member in aux_core:
#         core_names.append(member.user.first_name + member.user.last_name)
#     team = []
#     for member in User.objects.all().order_by('first_name','last_name'):
#         if member.first_name+member.last_name not in core_names and member.first_name!='ISTE' and member.is_active:
#             team.append(member)

#     context['core'] = core
#     context['team'] = team
#     context['aux_core'] = aux_core
#     return render(request, 'team/index.html', context)

@api_view(['GET'])
def indexView(request):    
    core_objs = Core.objects.all()
    aux_core_objs = AuxCore.objects.all()

    core_data = CoreSerializer(core_objs, many=True).data
    aux_core_data = AuxCoreSerializer(aux_core_objs, many=True).data

    this_year = datetime.now().year
    this_month = datetime.now().month
    if this_month<7:
        this_year = this_year-1
        
    core_names = []
    for member in core_objs:
        core_names.append(member.user.first_name + member.user.last_name)
    for member in aux_core_objs:
        core_names.append(member.user.first_name + member.user.last_name)
    members = []
    for member in User.objects.filter(batch_of__gt=this_year-1).order_by('first_name','last_name'):
        if member.first_name+member.last_name not in core_names and member.first_name!='ISTE' and member.is_active:
            members.append(member)

    
    members_data = UserSerializer(members, many=True).data
    return Response({'core':core_data,
                    'aux_core':aux_core_data,
                    'members':members_data})

@api_view(['GET'])
def coreView(request):    
    core_objs = Core.objects.all()
    aux_core_objs = AuxCore.objects.all()

    core_data = CoreSerializer(core_objs, many=True).data
    aux_core_data = AuxCoreSerializer(aux_core_objs, many=True).data

    return Response({'core':core_data,
                    'aux_core':aux_core_data})