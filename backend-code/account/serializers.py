from rest_framework import serializers
from account.models import Core, AuxCore, User
from website.serializers import DynamicFieldsModelSerializer

class UserSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = User
        fields= ['id','first_name','last_name','avatar']
        # fields = '__all__'
        

class CoreSerializer(DynamicFieldsModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Core
        fields= '__all__'

class AuxCoreSerializer(DynamicFieldsModelSerializer):
    user = UserSerializer()
    class Meta:
        model = AuxCore
        fields= '__all__'