from rest_framework import serializers
from obscura.models import team, score
from website.serializers import DynamicFieldsModelSerializer

class ScoreSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = score
        fields = ['firstYear','secondYear','thirdYear','fourthYear']


