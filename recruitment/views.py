from django.shortcuts import render
from account.models import SIG
from .models import Round
from account.models import Core

# Create your views here.
def indexView(request):
    context = {}
    sigs = SIG.objects.all()
    context['sigs'] = sigs
    return render(request, 'recruitment/index.html',context)

def detailView(request,sig_name):
    if sig_name == 'faq':
        return render(request, 'recruitment/faq.html')

    context = {}
    rounds = Round.objects.filter(
        sig__name=sig_name,
    ).order_by('date_time')

    if sig_name!='Chronicle' and sig_name!='Create':
        context['test_url'] = SIG.objects.get(
            name=sig_name
        ).test_url
    reg_url = SIG.objects.get(
        name=sig_name
    ).reg_url
    context['rounds'] = rounds
    context['reg_url'] = reg_url
    context['POC'] = Core.objects.filter(role__contains=sig_name) 
    return render(request, 'recruitment/details.html', context)    