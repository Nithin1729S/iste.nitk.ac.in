from rest_framework import serializers
from SMP.models import SMP
from website.serializers import DynamicFieldsModelSerializer
from sig.serializers import SIGSerializer

class SMPSerializer(DynamicFieldsModelSerializer):
    sigs = SIGSerializer(many=True)
    class Meta:
        model = SMP
        fields= '__all__'