import os
import django
from datetime import datetime

os.environ['DJANGO_SETTINGS_MODULE'] = 'website.settings'
django.setup()

from recruitment.models import Round

for i in Round.objects.all():
    i.date_time = datetime(2021, 12, 31, 0, 0, 0, 0)
    i.save()