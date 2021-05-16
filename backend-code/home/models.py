from django.db import models
from website.helperFunctions import carousel_upload_path, default_carousel_image_path


class Carousel(models.Model):
    id = models.AutoField(
        primary_key=True
    )
    name = models.CharField(
        default="carousel_image",
        max_length=200
    )
    image = models.ImageField(
        default=default_carousel_image_path,
        upload_to=carousel_upload_path,
        blank=False
    )
