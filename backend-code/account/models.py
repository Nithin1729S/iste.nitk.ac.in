from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from ckeditor_uploader.fields import RichTextUploadingField
from website.settings import SIG_CHOICES
from website.helperFunctions import default_user_avatar_path, user_avatar_upload_path, sig_avatar_upload_path
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

class User(AbstractUser):
    GENDER_CHOICES = (
        ('F', 'Female',),
        ('M', 'Male',)
    )
    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,15}$', 
        message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed."
    )
    phone_number = models.CharField(
        validators=[phone_regex], 
        max_length=17, 
        blank=True,
        editable=True
    )
    avatar = models.ImageField(
        default=default_user_avatar_path,
        upload_to=user_avatar_upload_path,
        blank=True
    )
    username = models.CharField(
        max_length=200,
        unique=True
    )
    batch_of = models.IntegerField(
        default=2023, 
        editable=True,
        blank=True
    )
    gender = models.CharField(
        max_length=1,
        choices=GENDER_CHOICES,
        default='M',
    )
    #Used as contact details for girls in case they are the points of contact for an event
    hostel_address = models.CharField(
        default='N/A',
        editable=True,
        max_length=50
    )
    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)

