from website.serializers import DynamicFieldsModelSerializer
from team.models import Core, AuxCore
from account.serializers import UserSerializer

class CoreSerializer(DynamicFieldsModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Core
        fields = '__all__'


class AuxCoreSerializer(DynamicFieldsModelSerializer):
    user = UserSerializer()

    class Meta:
        model = AuxCore
        fields = '__all__'