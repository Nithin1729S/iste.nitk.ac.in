from django.db import models
from django.contrib.auth.models import User
from website import settings

# Create your models here.
class Team(models.Model):

    userId = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete = models.CASCADE)
    team_name = models.CharField(max_length = 100)
    score = models.IntegerField(default=0)

    def __str__(self):
        return self.team_name

class Question(models.Model):
    title = models.CharField(max_length= 200)
    description = models.TextField()
    points = models.IntegerField(default=100)
    url = models.URLField()
    hint_1_url = models.URLField(null=True)
    hint_2_url = models.URLField(null=True)

    def __str__(self):
        return self.title

class UserQuestion(models.Model):
    userId = models.ForeignKey(Team,on_delete = models.CASCADE)
    questionId = models.ForeignKey(Question,on_delete = models.CASCADE)
    hint_1 = models.BooleanField(default=False)
    hint_2 = models.BooleanField(default=False)
    score = models.IntegerField(default=-1)

    def __str__(self):
        return str(self.userId) + ' ' + str(self.questionId) + ' ' + str(self.score)