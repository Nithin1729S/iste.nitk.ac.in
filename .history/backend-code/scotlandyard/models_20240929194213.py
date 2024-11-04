from django.db import models

# Create your models here.

class CellColor(models.Model):
    row = models.IntegerField()
    col = models.IntegerField()
    color = models.CharField(max_length=3)  # Storing colors as hex codes
