from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from ckeditor_uploader.fields import RichTextUploadingField
from django.conf import settings
from website.helperFunctions import default_user_avatar_path, user_avatar_upload_path, sig_avatar_upload_path

class SIG(models.Model):
    name = models.CharField(
        max_length = 9, 
        choices = settings.SIG_CHOICES
    )
    #Picture of the SIG
    avatar = models.ImageField(
        upload_to = sig_avatar_upload_path,
        blank = True
    )
    description = RichTextUploadingField()

    def __str__(self):
        return self.name

class User(AbstractUser):
    GENDER_CHOICES = (
        ('F', 'Female',),
        ('M', 'Male',)
    )
    phone_regex = RegexValidator(
        regex = r'^\+?1?\d{9,15}$', 
        message = "Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed."
    )
    phone_number = models.CharField(
        validators = [phone_regex], 
        max_length = 17, 
        blank = True,
        editable = True
    )
    avatar = models.ImageField(
        default = default_user_avatar_path,
        upload_to = user_avatar_upload_path,
        blank = True
    )
    sigs = models.ManyToManyField(
        SIG, 
        editable = True
    )
    batch_of = models.IntegerField(
        default = 2020, 
        editable = True
    )
    gender = models.CharField(
        max_length = 1,
        choices = GENDER_CHOICES
    )
    #Used as contact details for girls in case they are the point of contact for an event
    hostel_address = models.CharField(
        default = 'N/A',
        editable = True,
        max_length = 50
    )

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)

class Core(models.Model):
    user = models.ForeignKey(
        User,
        on_delete = models.CASCADE
    )
    #Role within the core - Convener, President etc.
    role = models.CharField(
        default = "",
        max_length = 100
    )

class SIGHead(models.Model):
    user = models.ForeignKey(
        User,
        on_delete = models.CASCADE
    )
    #Type of sig head - Crypt SIG Head, Charge SIG Head etc.
    role = models.CharField(
        default="",
        max_length=100
    )