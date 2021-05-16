from django.contrib import admin
from event.models import Event

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('name', 'date_time')
    search_fields = ('name',)