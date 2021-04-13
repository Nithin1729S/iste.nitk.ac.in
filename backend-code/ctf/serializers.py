from rest_framework import serializers
from website.serializers import DynamicFieldsModelSerializer
from account.serializers import UserSerializer
from ctf.models import Team,Question,UserQuestion

class TeamSerializer(DynamicFieldsModelSerializer):
    userId = UserSerializer()

    class Meta:
        model = Team
        fields = '__all__'

class QuestionSerializer(DynamicFieldsModelSerializer):

    class Meta:
        model = Question

class UserQuestion(DynamicFieldsModelSerializer):
    userId = UserSerializer()
    questionId = QuestionSerializer()

    class Meta:
        model = UserQuestion
