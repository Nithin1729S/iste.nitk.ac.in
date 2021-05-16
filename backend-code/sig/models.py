from django.db import models
from website.settings import SIG_CHOICES
from website.helperFunctions import sig_avatar_upload_path, default_sig_poster_path

# Create your models here.
class SIG(models.Model):
    name = models.CharField(
        max_length=9, 
        choices=SIG_CHOICES
    )
    #Picture of the SIG
    avatar = models.ImageField(
        default=default_sig_poster_path,
        upload_to=sig_avatar_upload_path,
        blank=True
    )
    #Text on SIG card, home page
    summary = models.TextField(
        default='SIG Summary',
        blank=False,
        editable=True
    )
    #Text on SIG page
    description = models.TextField(
        blank=False,
        editable=True,
    )
    #Link to google form for recs application
    reg_url = models.URLField(
        blank=False,
        editable=True,
        default=''
    )
    #Link to the video on SIG page
    website_talk_url = models.URLField(
        blank=False,
        editable=True,
        default=''
    )
    def __str__(self):      
        return self.name