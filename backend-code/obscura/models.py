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
    yearPassed = models.IntegerField(
        default=0
    )
    total_score = models.IntegerField(
        default=0
    )

    def __str__(self):
        return self.username


class score(models.Model):
    username = models.CharField(
        max_length=200,
        unique=True
    )
    firstYear = models.IntegerField(
        default=0
    )
    secondYear = models.IntegerField(
        default=0
    )
    thirdYear = models.IntegerField(
        default=0
    )
    fourthYear = models.IntegerField(
        default=0
    )
    firstYearQuestion = models.IntegerField(
        default=0
    )
    secondYearQuestion = models.IntegerField(
        default=0
    )
    thirdYearQuestion = models.IntegerField(
        default=0
    )
    fourthYearQuestion = models.IntegerField(
        default=0
    )

    def __str__(self):
        return str(self.firstYear+self.secondYear+self.thirdYear+self.fourthYear+self.firstYearQuestion+self.secondYearQuestion+self.thirdYearQuestion+self.fourthYearQuestion)


class attempt(models.Model):
    username = models.CharField(
        max_length=200,
        unique=True
    )
    firstYear = models.IntegerField(
        default=0
    )
    secondYear = models.IntegerField(
        default=0
    )
    thirdYear = models.IntegerField(
        default=0
    )
    fourthYear = models.IntegerField(
        default=0
    )

    def __str__(self):
        return str(self.firstYear+self.secondYear+self.thirdYear+self.fourthYear)


class question(models.Model):
    username = models.CharField(
        max_length=200,
        unique=True
    )
    firstYear = models.IntegerField(
        default=0
    )
    secondYear = models.IntegerField(
        default=0
    )
    thirdYear = models.IntegerField(
        default=0
    )
    fourthYear = models.IntegerField(
        default=0
    )

    def __str__(self):
        return str(self.firstYear+self.secondYear+self.thirdYear+self.fourthYear)
