from django.contrib import admin
from .models import *
# Register your models here.
@admin.register(GalleryImages)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ('caption','image')
