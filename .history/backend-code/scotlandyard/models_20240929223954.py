# models.py
from django.db import models

class CellColor(models.Model):
    row = models.IntegerField()
    col = models.IntegerField()
    color = models.CharField(max_length=7)  # To store color hex codes
    red_count = models.IntegerField(default=0)   # Count for red
    green_count = models.IntegerField(default=0) # Count for green
    blue_count = models.IntegerField(default=0)  # Count for blue

    def increment_color_count(self, color):
        if color == 'red':
            self.red_count += 1
        elif color == 'green':
            self.green_count += 1
        elif color == 'blue':
            self.blue_count += 1
        self.color = color  # Update the current color
        self.save()  # Save the changes