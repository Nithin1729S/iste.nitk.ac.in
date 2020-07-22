from django.shortcuts import render
from account.models import SIG
# Create your views here.
def indexView(request):
    context = {}
    sigs = SIG.objects.all()
    context['sigs'] = sigs
    return render(request, 'recruitment/index.html',context)

def detailView(request,sig_name):
    return render(request, 'recruitment/details.html')

def FAQView(request):
    return render(request, 'recruitment/faq.html')