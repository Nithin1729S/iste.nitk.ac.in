from django.db import models

class Meet(models.Model):
    title = models.TextField(
        blank = False,
        editable = True
    )
    venue = models.CharField(
        max_length = 100,
        blank = False,
        editable = True
    )
    date_time = models.DateTimeField(
        auto_now = False
    )
    minutes_of_meet = models.TextField(
        blank = True,
        editable = True
    )