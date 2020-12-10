from rest_framework import serializers
from event.models import Event
from sig.serializers import SIGSerializer
from website.serializers import DynamicFieldsModelSerializer
from account.serializers import UserSerializer

class EventSerializer(DynamicFieldsModelSerializer):
    sigs = SIGSerializer(many=True,fields=['name'])
    contacts = UserSerializer(many=True)
    editable_by = UserSerializer(many=True)
    class Meta:
        model = Event
        fields= '__all__'