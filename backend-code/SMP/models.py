from django.db import models
from sig.models import SIG

# Create your models here.


class SMP(models.Model):
    name = models.CharField(
        default="",
        max_length=200
    )
    sigs = models.ManyToManyField(
        to=SIG
    )
    summary = models.TextField(
        default="SMP Summary",
        blank=False,
        editable=True
    )
    file_url = models.URLField(
        max_length=250,
        blank=False,
        editable=True,
        default="https://youtu.be/dQw4w9WgXcQ"
    )
    img_url = models.URLField(
        default="https://res.cloudinary.com/dogygnvzl/image/upload/v1618295702/logo_2_ratj0j.png",
        blank=False,
        editable=True
    )
    softwares = models.TextField(
        default="",
        blank=True,
        editable=True
    )

    def __str__(self):
        return self.name
