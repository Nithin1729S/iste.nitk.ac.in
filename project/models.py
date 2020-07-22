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
    #Members of the project, 'editable_by' is used due 
    #to RBAC logic used in @check_ edit_access decorator
    editable_by = models.ManyToManyField(User)
    sigs = models.ManyToManyField(SIG)
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
    isFeatured = models.BooleanField(
        default = False
    )
    img_url = models.TextField(
        default="",
        blank=False,
        editable=True
    )

    def __str__(self):
        return self.name 