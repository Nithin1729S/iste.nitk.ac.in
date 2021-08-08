from django.contrib import admin
from .models import RegLink, Round

@admin.register(Round)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        'name','sig'
    )

@admin.register(RegLink)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        'link', 'sig', 'descriptionSIG'
    )
