from django.contrib import admin
from .models import SMP


@admin.register(SMP)
class SMPAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ('name', 'sigs', 'summary')
