from django.db import models

# Create your models here.
class GalleryImage(models.Model):
    caption= models.CharField(
        default="",
        max_length=100
    )
    imageLink= models.ImageField(
        blank=True
    )
    event= models.CharField(
        default="",
        max_length=100
    )

