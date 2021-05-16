from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.core.files.storage import default_storage
from django.contrib.auth import update_session_auth_hash
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

from account.models import User
from website.helperFunctions import user_avatar_upload_path
from website.decorators import check_member_year, login_required

# REST API endpoint for btaining user object token


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

# REST API endpoint for logging in


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


# REST API endpoint for logging out
@api_view(['POST'])
def logoutView(request):
    logout(request)
    return Response({'isLogin': False, 'msg': 'Successfully Logged out'})


# REST API endpoint for updating profile details
@login_required
@api_view(['POST'])
def editView(request):
    user = request.user
    user.phone_number = request.POST['phone_number']
    user.hostel_address = request.POST['hostel_address']
    user.email = request.POST['email']
    if request.FILES:
        user.avatar = request.FILES['avatar']
    user.save()
    return Response({'msg': 'Profile updated'})


# REST API endpoint for changing password
@login_required
@api_view(['POST'])
def changePasswordView(request):
    request.user.set_password(request.POST['password'])
    request.user.save()
    return Response({'msg': 'Password updated'})
