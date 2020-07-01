from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.core.files.storage import default_storage
from django.contrib.auth import update_session_auth_hash
from .models import User
from .forms import LoginForm, PasswordChangeForm, EditProfileForm
from website.helperFunctions import user_avatar_upload_path
from website.decorators import check_member_year

def loginView(request):
    if request.method != "POST":
        form = LoginForm()
        return render(request, 'account/login.html', {'form': form})

    form = LoginForm(data = request.POST)

    if form.is_valid():
        user = authenticate(
            request, 
            username = form.cleaned_data['username'], 
            password = form.cleaned_data['password']
        )
        login(request, user)
        return redirect('home:index')
    else:
        messages.add_message(
            request,messages.ERROR,
            'Invalid username or password'
        )
        return redirect('account:login')

def logoutView(request):
    logout(request)
    return redirect('home:index')

@login_required
def editView(request):
    if request.method != "POST":
        form = EditProfileForm(instance = request.user)
        return render(request, 'account/edit.html', {'form': form})
    
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

    return redirect('account:edit')

@login_required
def changePasswordView(request):
    if request.method != "POST":
        form = PasswordChangeForm(user = request.user)
        return render(request, 'account/change_password.html', {'form': form})
    
    
    form = PasswordChangeForm(user = request.user, data = request.POST)
    #For some reason, PasswordChangeForm always returns invalid 
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
        update_session_auth_hash(request, request.user)

    return redirect('account:change_password')
