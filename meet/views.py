from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from website.decorators import check_member_year
from website.helperFunctions import form_error_checker
from .models import Meet

#Display all meets here, filter based on SIG, orderg by date
@login_required
def indexView(request):
    return None

@login_required
@check_member_year(3,4)
def addView(request):
    if request.method != 'POST':
        return render(request, 'meet/add.html', {})
    