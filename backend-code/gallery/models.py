from django.db import models
from website.helperFunctions import default_gallery_image_path, gallery_image_upload_path

# Create your models here.
class GalleryImages(models.Model):
    caption= models.CharField(
        default="",
        max_length=100
    )
    image= models.ImageField(
        default=default_gallery_image_path,
        upload_to=gallery_image_upload_path,
        blank=True
    )

