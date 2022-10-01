from django.db import models

# Create your models here.
class team(models.Model):
    username = models.CharField(
        max_length=200,
        unique=True
    )
    password = models.CharField(
        max_length=200,
    )
    total_score = models.IntegerField(
        default=2000
    )

    def __str__(self):
        return self.username
    