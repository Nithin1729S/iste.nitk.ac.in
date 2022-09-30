from django.contrib import admin
from .models import *
# Register your models here.
@admin.register(team)
class teamadmin(admin.ModelAdmin):
    list_display = ("username", 'password', 'total_score')