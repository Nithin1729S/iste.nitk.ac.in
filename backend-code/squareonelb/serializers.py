from .models import SquareOneUser
from rest_framework import serializers
from website.serializers import DynamicFieldsModelSerializer


class SquareOneUserSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = SquareOneUser
        fields = "__all__"
