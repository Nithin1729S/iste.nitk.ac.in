from rest_framework import serializers
from home.models import Carousel
from website.serializers import DynamicFieldsModelSerializer

class CarouselSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Carousel
        fields= '__all__'