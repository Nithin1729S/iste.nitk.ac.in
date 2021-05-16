from django.contrib import admin
from team.models import Core, AuxCore

# Register your models here.


@admin.register(Core)
class CoreAdmin(admin.ModelAdmin):
    list_display = ('user', 'role')


@admin.register(AuxCore)
class AuxCoreAdmin(admin.ModelAdmin):
    list_display = ('user', 'role')
