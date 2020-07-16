from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.core.files.storage import default_storage
from django.contrib.auth import update_session_auth_hash
from .models import User
from .forms import LoginForm, PasswordChangeForm, EditProfileForm
from website.helperFunctions import user_avatar_upload_path
from website.decorators import check_member_year, login_required

def loginView(request):
    context = {}

    if request.method == "GET":
        form = LoginForm()
        context['form'] = form
    else:
        form = LoginForm(data=request.POST)
        context['form'] = form
        if form.is_valid():
            user = authenticate(
                request, 
                username=form.cleaned_data['username'], 
                password=form.cleaned_data['password']
            )
            login(request, user)
            return redirect('home:index')
        else:
            messages.add_message(
                request,
                messages.ERROR,
                'Invalid username or password'
            )    

    return render(request, 'account/login.html', context)

def logoutView(request):
    logout(request)
    return redirect('home:index')

@login_required
def editView(request):
    context = {}

    if request.method == "GET":
        form = EditProfileForm(instance=request.user)
        context['form'] = form
    else:
        user = request.user
        user.phone_number = request.POST['phone_number']
        user.hostel_address = request.POST['hostel_address']
        user.email = request.POST['email']
        if request.FILES:
            user.avatar = request.FILES['avatar']
        user.save()

        form = EditProfileForm(
            data=request.POST, 
            files=request.FILES,
            instance=request.user 
        )
        context['form'] = form 

        messages.add_message(
            request,
            messages.INFO,
            'Profile Updated'
        )

    return render(request, 'account/edit.html', context)

@login_required
def changePasswordView(request):
    context = {}
    if request.method == "GET":
        form = PasswordChangeForm(user=request.user)
        context['form'] = form
    else:
        form = PasswordChangeForm(
            user=request.user,
            data=request.POST
        )
        #For some reason, PasswordChangeForm always returns invalid
        #Hence is_valid is not used here 
        password_changeable = True

        if not request.user.check_password(request.POST.get('old_password')):
            messages.add_message(
                request,
                messages.ERROR,
                'Old password incorrect'
            )
            password_changeable = False

        if request.POST.get('new_password1') != request.POST.get('new_password2'):
            messages.add_message(
                request,
                messages.ERROR,
                'New password field does not match New password confirmation field'
            )
            password_changeable = False

        if password_changeable:
            request.user.set_password(request.POST.get('new_password1'))
            request.user.save()
            messages.add_message(
                request,
                messages.INFO,
                'Password Updated'
            )
            #Saves the pain of logging in again

        context['form'] = form

    return render(request, 'account/change_password.html', context)
