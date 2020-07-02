from django.db import models
from account.models import SIG, User
from datetime import datetime
from ckeditor_uploader.fields import RichTextUploadingField

def year_choices():
    return [(r,r) for r in range(2018, datetime.today().year +1)]

class Project(models.Model):
    name = models.CharField(
        default = "",
        max_length = 200
    )
    tags = models.CharField(
        default = "",
        max_length = 200
    )
    members = models.ManyToManyField(User)
    sig = models.ManyToManyField(SIG)
    year = models.IntegerField(
        choices = year_choices(),
        default=datetime.today().year
    )
    description = RichTextUploadingField()