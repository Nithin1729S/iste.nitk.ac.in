from django.db import models

# Create your models here.
class SquareOneUser(models.Model):
    name = models.CharField(max_length=100, null=False)
    rollno = models.CharField(max_length=10, null=False)
    score = models.DecimalField(default=0, null=False, decimal_places = 2, max_digits = 6)

    def __str__(self):
        return str(self.name) + " - " + str(self.rollno) + " - " + str(self.score)
