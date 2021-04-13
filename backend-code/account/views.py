from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.core.files.storage import default_storage
from django.contrib.auth import update_session_auth_hash
from .models import User
from .forms import LoginForm, PasswordChangeForm, EditProfileForm
from website.helperFunctions import user_avatar_upload_path
from website.decorators import check_member_year, login_required
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token


class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email': user.email
        })


@api_view(['POST'])
def loginView(request):
    username = request.POST['username'].strip()
    password = request.POST['password'].strip()

    user = authenticate(
        request,
        username=username,
        password=password
    )
    if user is not None:
        login(request, user)
        return Response({'isLogin': True, 'msg': 'Login Successful'})
    else:
        return Response({'isLogin': False, 'msg': 'Login Unsuccessful'}, status=status.HTTP_406_NOT_ACCEPTABLE)


def logoutView(request):
    logout(request)
    return redirect('home:index')


#REST API endpoint for log out
@api_view(['POST'])
def logoutView_REST(request):
    logout(request)
    return Response({'isLogin': False,'msg': 'Successfully Logged out'})


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
        # For some reason, PasswordChangeForm always returns invalid
        # Hence is_valid is not used here
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
            # Saves the pain of logging in again

        context['form'] = form

    return render(request, 'account/change_password.html', context)
