from django.shortcuts import render
from account.models import User
from team.models import Core, AuxCore
from account.serializers import UserSerializer
from team.serializers import CoreSerializer, AuxCoreSerializer  
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


@api_view(['GET'])
def indexView(request):
    core_objs = Core.objects.all()

    aux_core_objs = AuxCore.objects.all()

    core_data = CoreSerializer(core_objs, many=True).data
    print(core_data[0])
    aux_core_data = AuxCoreSerializer(aux_core_objs, many=True).data

    core_names = []
    for member in core_objs:
        core_names.append(member.user.first_name + member.user.last_name)
    for member in aux_core_objs:
        core_names.append(member.user.first_name + member.user.last_name)
    members = []
    for member in User.objects.all().order_by('first_name', 'last_name'):
        if member.first_name+member.last_name not in core_names and member.first_name != 'ISTE' and member.first_name.strip() != '' and member.is_active:
            members.append(member)

    members_data = UserSerializer(members, many=True).data
    return Response({'core': core_data,
                    'aux_core': aux_core_data,
                     'members': members_data})


@api_view(['GET'])
def coreView(request):
    core_objs = Core.objects.all()
    aux_core_objs = AuxCore.objects.all()

    core_data = CoreSerializer(core_objs, many=True).data
    aux_core_data = AuxCoreSerializer(aux_core_objs, many=True).data

    return Response({'core': core_data,
                    'aux_core': aux_core_data})
