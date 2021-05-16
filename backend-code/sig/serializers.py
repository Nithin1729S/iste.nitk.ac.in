from rest_framework import serializers
from sig.models import SIG
from website.serializers import DynamicFieldsModelSerializer

class SIGSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = SIG
        fields= '__all__'