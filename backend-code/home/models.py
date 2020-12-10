from django.db import models

class Carousel(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(default="carousel_image", max_length=200)
    url = models.CharField(max_length=200)
    