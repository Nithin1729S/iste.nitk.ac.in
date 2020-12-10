from django.contrib import admin
from .models import Round

@admin.register(Round)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        'name','sig'
    )
