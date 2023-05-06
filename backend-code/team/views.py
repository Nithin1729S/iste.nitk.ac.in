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
    admin_core_data = core_data[:7]

    print(admin_core_data)
    fac_ad_data = {
            "id": 17,
            "user": {
                "id": 587,
                "first_name": "Shashi",
                "last_name": "Bushan Arya",
                "avatar": "/media/profile_pictures/586_Shashi_Bushan_Arya.jpeg"
            },
            "role": "Faculty Advisor",
            "description": "Dr. S. B. Arya is the faculty advisor for ISTE NITK and an assistant professor in the Metallurgical and Materials Engineering at NITK. He is an expert in all things corrosion, novel materials developments and metallic passivation. Currently, he is researching in niche and innovative fields such as Li-ion Battery monitoring, corrosion behaviour and steel response to stimuli. Having multiple funded research projects, delivered lectures at several organizations and published 80+ papers, he is more than just a specialist when it comes to his field of study.",
            "email": "sbarya@nitk.edu.in",
            "linkedin_url": "https://www.linkedin.com/in/shashi-bhushan-arya-4a06236/"
    }

    admin_core_data.append(fac_ad_data)

    core_data = core_data[7:]
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
    return Response({'admin_core':admin_core_data,
                    'core': core_data,
                    'aux_core': aux_core_data,
                    'members': members_data})


@api_view(['GET'])
def coreView(request):
    core_objs = Core.objects.all()
    aux_core_objs = AuxCore.objects.all()

    core_data = CoreSerializer(core_objs, many=True).data
    aux_core_data = AuxCoreSerializer(aux_core_objs, many=True).data
    admin_core_data = core_data[:7]
    core_data = core_data[7:]
    return Response({'admin_core':admin_core_data,
                    'core': core_data,
                    'aux_core': aux_core_data})
