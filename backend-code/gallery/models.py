from django.db import models
from django.utils import timezone

# Create your models here.
class GalleryImage(models.Model):
    caption= models.CharField(
        default="",
        max_length=200
    )
    imageLink= models.CharField(
        blank=True,
        max_length=200
    )
    event= models.CharField(
        default="",
        max_length=200
    )
    date = models.DateTimeField(auto_now=False, default=timezone.now)

