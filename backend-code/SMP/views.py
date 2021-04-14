from django.shortcuts import render
from account.models import SIG
from account.serializers import SIGSerializer
from SMP.models import SMP

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

    sigs = []
    for sig in SIG.objects.all().order_by('name'):
        sig_data = SIGSerializer(sig, fields=['name','avatar']).data
        print(sig_data)

        smps_obj = SMP.objects.filter(
            sigs__name=sig.name
        ).order_by('name')
        l=[]
        for smp in smps_obj:
            l.append(smp.name)
        sigs.append({
            'name': sig_data['name'],
            'avatar': 'backend'+sig_data['avatar'],
            'summary': l
        })
    return Response({
        'banner_url': banner_url,
        'why_smps_text': why_smps_text,
        'sigs': sigs
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
                              'name', 'id', 'summary', 'file_url', 'img_url', 'softwares']).data
    for i in range(len(smps_data)):
        smps_data[i]['softwares'] = smps_data[i]['softwares'].strip().split(',')
    return Response(smps_data)
