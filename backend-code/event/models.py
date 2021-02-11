from django.db import models
from website.settings import SIG_CHOICES
from website.helperFunctions import event_poster_upload_path, default_event_poster_path
from account.models import User, SIG
from ckeditor_uploader.fields import RichTextUploadingField

class Event(models.Model):
    name = models.CharField(
        max_length=100,
        blank=False,
        editable=True
    )
    date_time = models.DateTimeField(
        auto_now=False
    )
    no_of_participants = models.IntegerField(
        default=3
    )
    contacts = models.ManyToManyField(
        to=User
    )
    #Used to provide edit access of an event object to others
    editable_by = models.ManyToManyField(
        to=User,
        related_name='editable_by'
    )
    # poster = models.ImageField(
    #     default=default_event_poster_path,
    #     upload_to=event_poster_upload_path,
    #     blank=True
    # )
    poster = models.TextField(
        default=""
    )
    sigs = models.ManyToManyField(
        to=SIG,
        related_name='sigs'
    )
    #Google form link for registration
    form_link = models.URLField(
        blank=True,
        max_length=200
    )
    #Whatsapp spam message, will be used as event details
    publicity_message = RichTextUploadingField(
        blank=True,
        editable=True
    )
    venue = models.CharField(
        max_length=100,
        blank=True,
        editable=True
    )

    def __str__(self):
        return self.name + 'id' + str(self.id)