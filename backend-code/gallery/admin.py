from django.contrib import admin
from .models import *
# Register your models here.
@admin.register(GalleryImage)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ('caption','imageLink','event')
