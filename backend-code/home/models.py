from django.db import models

CAROUSEL_TYPES = (('1','Mobile'),
                ('2','Desktop'))

class Carousel(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(default="carousel_image", max_length=200)
    url = models.CharField(max_length=200)
    type = models.CharField(choices=CAROUSEL_TYPES, max_length=1, default="2")
    