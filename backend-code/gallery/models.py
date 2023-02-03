from django.db import models

# Create your models here.
class GalleryImage(models.Model):
    caption= models.CharField(
        default="",
        max_length=100
    )
    imageLink= models.CharField(
        blank=True,
        max_length=200
    )
    event= models.CharField(
        default="",
        max_length=100
    )

