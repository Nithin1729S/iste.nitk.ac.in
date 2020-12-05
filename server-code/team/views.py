from django.shortcuts import render
from account.models import User,Core, AuxCore

# Create your views here.

def indexView(request):
    context = {}
    
    core = Core.objects.all()
    aux_core = AuxCore.objects.all()

    core_names = []
    for member in core:
        core_names.append(member.user.first_name + member.user.last_name)
    for member in aux_core:
        core_names.append(member.user.first_name + member.user.last_name)
    team = []
    for member in User.objects.all().order_by('first_name','last_name'):
        if member.first_name+member.last_name not in core_names and member.first_name!='ISTE' and member.is_active:
            team.append(member)

    context['core'] = core
    context['team'] = team
    context['aux_core'] = aux_core
    return render(request, 'team/index.html', context)