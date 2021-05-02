from django.shortcuts import render
from datetime import datetime
from account.models import SIG, User, Core, AuxCore
from home.models import Carousel
from project.models import Project
from home.serializers import CarouselSerializer
from sig.serializers import SIGSerializer
from account.serializers import CoreSerializer,AuxCoreSerializer
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.core.management import call_command
from django.core.wsgi import get_wsgi_application 
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
import subprocess

# def indexView(request):
#     this_year = datetime.now().year
#     this_month = datetime.now().month
#     years_in_operation = this_year-1995
#     if this_month<7:
#         this_year = this_year-1
#     sigs = SIG.objects.all()
#     member_count = User.objects.filter(
#         batch_of__in=[this_year+3, this_year+2, this_year+1],
#         # batch_of__gt=this_year-1,
#         # is_active=True
#     )
#     member_count = len(member_count) - 1
    
#     sig_count = sigs.count()
#     project_count = Project.objects.filter(
#         year=this_year
#     ).count()
    
#     core = Core.objects.all()
#     aux_core = AuxCore.objects.all()
#     context = {
#         'core':core, 'sigs':sigs,
#         'year':years_in_operation, 'member':member_count,
#         'sig':sig_count, 'project':project_count,
#         'aux_core':aux_core
#     }
#     return render(request,'home/index.html',context)

@require_POST
@csrf_exempt
def deployView(request):
    subprocess.check_output(['git', 'pull'])
    subprocess.check_output(['pip3', 'install', '-r', 'requirements.txt'])
    application = get_wsgi_application()
    call_command('makemigrations')
    call_command('migrate')

    return render(request,'home/index.html',{})

@api_view(['GET'])
def indexView(request):
    #Carousel images
    carousel_obj = Carousel.objects.all()
    carousel_data = CarouselSerializer(carousel_obj,many=True,fields=['name','url','type','id']).data

    #summary of sigs
    sig_obj = SIG.objects.all()
    sig_data = SIGSerializer(sig_obj, many=True, fields=['name','avatar','summary']).data

    #stats
    this_year = datetime.now().year
    this_month = datetime.now().month
    years_in_operation = this_year-1995
    if this_month<7:
        this_year = this_year-1
    member_count = User.objects.filter(
        batch_of__in=[this_year+3, this_year+2, this_year+1],
    )
    member_count = len(member_count) - 1    
    project_count = Project.objects.filter(
        year=this_year
    ).count()    
    core = Core.objects.all()
    aux_core = AuxCore.objects.all()
    stats = {
        'years_in_operation':years_in_operation,
        #to be changed back after CTF
        'member_count':112,
        'project':project_count,
    }

    #Team
    core_objs = Core.objects.all()
    aux_core_objs = AuxCore.objects.all()

    core_data = CoreSerializer(core_objs, many=True).data
    aux_core_data = AuxCoreSerializer(aux_core_objs, many=True).data

    return Response({'carousel':carousel_data,
                    'sigs':sig_data,
                    'stats':stats,
                    'core':core_data,
                    'aux_core':aux_core_data})