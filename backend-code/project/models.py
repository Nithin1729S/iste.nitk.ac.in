from django.db import models
from datetime import datetime
from ckeditor_uploader.fields import RichTextUploadingField

from website.helperFunctions import project_poster_upload_path, default_project_image_path
from account.models import User
from sig.models import SIG

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
    #Members of the project, 'editable_by' is used due 
    #to RBAC logic used in @check_ edit_access decorator
    editable_by = models.ManyToManyField(User)
    sigs = models.ManyToManyField(
        to=SIG)
    year = models.IntegerField(
        choices = year_choices(),
        default=datetime.today().year
    )
    summary = models.TextField(
        default="Project Summary",
        blank=False,
        editable=True
    )
    description = RichTextUploadingField()
    image = models.ImageField(
        default=default_project_image_path,
        upload_to=project_poster_upload_path,
        blank=True
    )

    def __str__(self):
        return self.name 