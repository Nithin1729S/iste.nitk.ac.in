from django.shortcuts import render
from account.models import SIG
from .models import Round

# Create your views here.
def indexView(request):
    context = {}
    sigs = SIG.objects.all()
    context['sigs'] = sigs
    return render(request, 'recruitment/index.html',context)

def detailView(request,sig_name):
    context = {}
    rounds = Round.objects.filter(
        sig__name=sig_name,
    ).order_by('date_time')

    reg_url = SIG.objects.get(
        name=sig_name
    ).reg_url
    context['rounds'] = rounds
    context['reg_url'] = reg_url
    return render(request, 'recruitment/details.html', context)

def FAQView(request):
    return render(request, 'recruitment/faq.html')