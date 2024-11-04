from django.db import models

# Create your models here.

class Cell(models.Model):
    grid_index = models.IntegerField()
    cell_index = models.IntegerField()
    color = models.CharField(max_length=10, blank=True, null=True)
    red_count = models.IntegerField(default=0)
    green_count = models.IntegerField(default=0)
    blue_count = models.IntegerField(default=0)

    def __str__(self):
        return f'Grid {self.grid_index} - Cell {self.cell_index}'

# This creates a simple Cell model, storing grid index, cell index, color, and color counts.
