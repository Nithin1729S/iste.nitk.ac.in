from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Team(models.Model):

    userId = models.ForeignKey(User,on_delete=models.CASCADE)
    team_name = models.CharField(max_length = 100)
    score = models.IntegerField()
    rank = models.IntegerField()

    def __str__(self):
        return self.teamName

class Question(models.Model):
    title = models.CharField(max_length= 200)

    description = models.TextField()

    points = models.IntegerField()

    url = models.URLField()

    hint_1_url = models.URLField()

    hint_2_url = models.URLField()

    def __str__(self):
        return self.title

class UserQuestion(models.Model):

    userId = models.ForeignKey(Team,on_delete = models.CASCADE)

    questionId = models.ForeignKey(Question,on_delete = models.CASCADE)

    hint_1 = models.BooleanField(default=False)

    hint_2 = models.BooleanField(default=False)
    
    score = models.IntegerField()

    def __str__(self):
        return str(questionId) + '' + str(score)