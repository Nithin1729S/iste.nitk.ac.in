from django.shortcuts import render
from account.models import User,Core

# Create your views here.

def indexView(request):
    context = {}
    
    core = Core.objects.all()
    core_names = []
    for member in core:
        core_names.append(member.user.first_name + member.user.last_name)
    team = []
    for member in User.objects.all().order_by('first_name','last_name'):
        if member.first_name+member.last_name not in core_names:
            team.append(member)

    context['core'] = core
    context['team'] = team
    
    return render(request, 'team/index.html', context)