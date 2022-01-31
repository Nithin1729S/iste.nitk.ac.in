from django.db import models

# Create your models here.
class SquareOneUser(models.Model):
    name = models.CharField(max_length=100, null=False)
    rollno = models.CharField(max_length=10, null=False)
    score = models.IntegerField(default=0, null=False)

    def __str__(self):
        return str(self.name) + " - " + str(self.rollno) + " - " + str(self.score)
