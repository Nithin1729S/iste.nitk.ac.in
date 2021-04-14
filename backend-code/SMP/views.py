from django.shortcuts import render
from account.models import SIG
from SMP.models import SMP
from SMP.serializers import SMPSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


@api_view(['GET'])
def indexView(request):
    # add banner URL here
    banner_url = "backend-code/media/SMP_banner.jpeg"

    # add why SMPs text here
    why_smps_text = "A shortcut to making your summer a more productive one, with specifically\
        designed courses and projects available, get the chance to explore a new avenue, add on \
        a skillset or work on an exciting project to gain mastery over both the theoretical\
        and practical aspects of a subject. Make your resume stand out with the certificates \
        and skills that you will earn by being a part of the SMPs!"

    smps = {}
    sigs = ['Catalyst', 'Charge', 'Chronicle', 'Clutch',
            'Concrete', 'Create', 'Credit', 'Crypt']
    for sig in sigs:
        smps_obj = SMP.objects.filter(
            sigs__name=sig
        ).order_by('name')
        smps_data = SMPSerializer(smps_obj, many=True, fields=[
            'name', 'id', 'summary', 'file_url', 'img_url','softwares']).data
        smps[sig] = smps_data
        for i in range(len(smps[sig])):
            smps[sig][i]['softwares'] = smps[sig][i]['softwares'].strip().split(',')
    return Response({
        'banner_url': banner_url,
        'why_smps_text': why_smps_text,
        'smps': smps
    })


@api_view(['GET'])
def detailsView(request, sig_name):
    sig = SIG.objects.get(
        name=sig_name
    )

    smps = SMP.objects.filter(
        sigs__name=sig_name
    ).order_by('name')

    smps_data = SMPSerializer(smps, many=True, fields=[
                              'name', 'id', 'summary', 'file_url', 'img_url','softwares']).data
    for i in range(len(smps_data)):
        smps_data[i]['softwares'] = smps_data[i]['softwares'].strip().split(',')
    return Response(smps_data)
