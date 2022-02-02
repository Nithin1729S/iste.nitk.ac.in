from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(SquareOneUser)
class SquareOneUserAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "rollno",
        "score",
    )
