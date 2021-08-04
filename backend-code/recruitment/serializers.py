from rest_framework import serializers
from recruitment.models import Round
from website.serializers import DynamicFieldsModelSerializer
from sig.serializers import SIGSerializer

class RoundSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Round
        fields = ['name','description','date_time','isDone']
