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
    banner_url = "#"

    # add why SMPs text here
    why_smps_text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \
            printer took a galley of type and scrambled it to make a type specimen book. It has survived \
                not only five centuries, but also the leap into electronic typesetting, remaining essentially \
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing \
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus \
                            PageMaker including versions of Lorem Ipsum."

    smps = {}
    sigs = ['Catalyst', 'Charge', 'Chronicle', 'Clutch',
            'Concrete', 'Create', 'Credit', 'Crypt']
    for sig in sigs:
        smps_obj = SMP.objects.filter(
            sigs__name=sig
        ).order_by('name')
        smps_data = SMPSerializer(smps_obj, many=True, fields=[
            'name', 'id', 'summary', 'file_url', 'img_url']).data
        smps[sig] = smps_data
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
                              'name', 'id', 'summary', 'file_url', 'img_url']).data
    return Response(smps_data)
