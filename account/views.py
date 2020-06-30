from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.core.files.storage import default_storage
from .models import User
from .helperFunctions import user_avatar_upload_path

def loginView(request):
    if request.method != "POST":
        return render(request, 'account/login.html', {})

    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(
        request, 
        username = username, 
        password = password
    )

    if user is not None:
        login(request, user)
        return redirect('home:index')
    else:
        messages.add_message(
            request,messages.ERROR,
            'Invalid username or password'
        )
        return render(request, 'account/login.html', {})

def logoutView(request):
    logout(request)
    return redirect('home:home')

@login_required
def editView(request):
    if request.method != "POST":
        return render(request, 'account/edit.html', {})
    
    user = request.user
    user.phone_number = request.POST['phone_number']
    newAvatar = request.FILES['avatar']
    user.avatar = newAvatar
    user.hostel_address = request.POST['hostel_address']
    user.save()

    messages.add_message(
        request,messages.INFO,
        'Profile Updated'
    )

    return render(request, 'account/edit.html', {})
