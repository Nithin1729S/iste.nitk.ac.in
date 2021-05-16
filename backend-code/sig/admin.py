from django.contrib import admin
from sig.models import SIG

# Register your models here.
@admin.register(SIG)
class SIGAdmin(admin.ModelAdmin):
    list_display = ('name',)