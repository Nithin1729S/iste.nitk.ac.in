from rest_framework import serializers
from project.models import Project
from website.serializers import DynamicFieldsModelSerializer
from account.serializers import UserSerializer
from sig.serializers import SIGSerializer

class ProjectSerializer(DynamicFieldsModelSerializer):
    editable_by = UserSerializer(many=True)
    sigs = SIGSerializer(many=True)
    class Meta:
        model = Project
        fields= '__all__'