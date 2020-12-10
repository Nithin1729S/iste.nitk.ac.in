from django.contrib import admin
from home.models import Carousel

@admin.register(Carousel)
class CarouselAdmin(admin.ModelAdmin):
    list_display = ('name','url',)