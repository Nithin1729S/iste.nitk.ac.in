from django.db import models
from account.models import User

# Create your models here.


class Core(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    # Role within the core - Convener, President, Crypt SIG Head etc.
    role = models.CharField(
        default="",
        max_length=100
    )
    description = models.TextField(
        default=""
    )
    linkedin_url = models.URLField(
        blank=True,
        max_length=100
    )


class AuxCore(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    role = models.CharField(
        default="",
        max_length=100
    )
    description = models.TextField(
        default=""
    )
    linkedin_url = models.URLField(
        blank=True,
        max_length=100
    )
