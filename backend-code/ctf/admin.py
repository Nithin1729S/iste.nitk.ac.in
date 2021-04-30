from django.contrib import admin
from .models import Team, Question, UserQuestion
# Register your models here.

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('team_name','score',)

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('title','description', 'points', )

@admin.register(UserQuestion)
class UserQuestionAdmin(admin.ModelAdmin):
    list_display = ('userId','questionId', 'score', )