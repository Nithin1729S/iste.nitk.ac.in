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
    admin_core_data = core_data[:7] if len(core_data) >= 7 else core_data[:]
    if core_data:  # Only append last item if list isn't empty
        admin_core_data.append(core_data[-1])
    print(admin_core_data)
    fac_ad_data = {
            "id": 17,
            "user": {
                "id": 587,
                "first_name": "Dr. Vaishakh",
                "last_name": " Nair",
                "avatar": "/media/profile_pictures/nair.jpeg"
            },
            "role": "Faculty Advisor",
            "department":"Chemical Engineering",
            "description": "Dr. Vaishakh Nair is the Faculty Advisor for ISTE NITK and an Assistant Professor in the Department of Chemical Engineering at NITK Surathkal. A leading researcher in lignin valorization, photocatalysis, and nanotechnology, he has made groundbreaking contributions to sustainable chemical processes. With over 25 research papers published in high-impact journals, an h-index of 21, and more than 2,000 citations, his work is widely recognized in the scientific community. He has successfully secured multiple funded research projects, delivered expert lectures at renowned institutions, and continues to push the boundaries of chemical engineering innovation. His dedication to academia and research excellence cements his reputation as a thought leader in his field.",
            "email": "vaishakhnair@nitk.edu.in",
            "linkedin_url": "https://www.linkedin.com/in/dr-vaishakh-nair-32a31a1b/?originalSubdomain=in"
    }

    admin_core_data.append(fac_ad_data)


    fac_ad_data = {
            "id": 18,
            "user": {
                "id": 597,
                "first_name": "Dr. Shashi",
                "last_name": "Bushan Arya",
                "avatar": "/media/profile_pictures/586_Shashi_Bushan_Arya.jpeg"
            },
            "role": "Professor In Charge of Technical Clubs at NITK",
            "department":"Metallurgical and Materials Engineering",
            "description": "Dr. S. B. Arya is the Professor in Charge of Technical Clubs at NITK and an associate professor in the Metallurgical and Materials Engineering at NITK. He is an expert in all things corrosion, novel materials developments and metallic passivation. Currently, he is researching in niche and innovative fields such as Li-ion Battery monitoring, corrosion behaviour and steel response to stimuli. Having multiple funded research projects, delivered lectures at several organizations and published 100+ papers, he is more than just a specialist when it comes to his field of study.",
            "email": "sbarya@nitk.edu.in",
            "linkedin_url": "https://www.linkedin.com/in/shashi-bhushan-arya-4a06236/"
    }

    admin_core_data.append(fac_ad_data)


    # Safely handle remaining core data
    if len(core_data) > 7:
        core_data = core_data[7:]
        if core_data:  # Only pop if there's data to pop
            core_data.pop()
    else:
        core_data = []
    aux_core_data = AuxCoreSerializer(aux_core_objs, many=True).data

    core_names = []
    for member in core_objs:
        core_names.append(member.user.first_name + member.user.last_name)
    for member in aux_core_objs:
        core_names.append(member.user.first_name + member.user.last_name)
    members = []
    for member in User.objects.all().order_by('first_name', 'last_name'):
        if member.first_name+member.last_name not in core_names and member.first_name != 'ISTE' and member.first_name.strip() != '' and member.is_active and member.batch_of >= 2024:
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
    admin_core_data = core_data[:7] if len(core_data) >= 7 else core_data[:]
    if core_data:  # Only append last item if list isn't empty
        admin_core_data.append(core_data[-1])

    core_data = core_data[7:] if len(core_data) > 7 else []
    return Response({'admin_core':admin_core_data,
                    'core': core_data,
                    'aux_core': aux_core_data})
