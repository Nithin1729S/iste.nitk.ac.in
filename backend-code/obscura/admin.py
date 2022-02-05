from calendar import c
from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(team)
class teamadmin(admin.ModelAdmin):
    list_display = ("username", 'password', 'yearPassed', 'total_score')


@admin.register(score)
class scoreadmin(admin.ModelAdmin):
    list_display = ("username", 'firstYear', 'secondYear', 'thirdYear', 'fourthYear', 'firstYearQuestion','secondYearQuestion', 'thirdYearQuestion', 'fourthYearQuestion')

@admin.register(attempt)
class attemptadmin(admin.ModelAdmin):
    list_display = ('username', 'firstYear', 'secondYear', 'thirdYear', 'fourthYear')

@admin.register(question)
class questionamin(admin.ModelAdmin):
    list_display = ('username', 'firstYear', 'secondYear', 'thirdYear', 'fourthYear')