from datetime import datetime
from django.core.wsgi import get_wsgi_application
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
import subprocess

from home.models import Carousel
from project.models import Project
from account.models import User
from team.models import Core, AuxCore
from sig.models import SIG
from home.serializers import CarouselSerializer
from sig.serializers import SIGSerializer
from team.serializers import CoreSerializer, AuxCoreSerializer


@api_view(['GET'])
def indexView(request):
    # Carousel images
    carousel_obj = Carousel.objects.all().order_by("-id")
    carousel_data = CarouselSerializer(carousel_obj, many=True).data

    # summary of sigs
    sig_obj = SIG.objects.all().order_by('name')
    sig_data = SIGSerializer(sig_obj, many=True, fields=[
                             'name', 'avatar', 'summary']).data

    # stats
    this_year = datetime.now().year
    this_month = datetime.now().month
    years_in_operation = this_year-1995
    if this_month < 5:
        this_year = this_year-1
    member_count = User.objects.filter(
        batch_of__in=[this_year+3, this_year+2, this_year+1],
    )
    #Excluding ISTE NITK admin account
    member_count = len(member_count)
    project_count = Project.objects.filter(
        year=this_year
    ).count()
    stats = {
        'years_in_operation': years_in_operation,
        'member_count': member_count,
        'project': project_count,
    }

    # Team
    core_objs = Core.objects.all()
    aux_core_objs = AuxCore.objects.all()

    core_data = CoreSerializer(core_objs, many=True).data
    aux_core_data = AuxCoreSerializer(aux_core_objs, many=True).data

    return Response({'carousel': carousel_data,
                    'sigs': sig_data,
                     'stats': stats,
                     'core': core_data,
                     'aux_core': aux_core_data})
