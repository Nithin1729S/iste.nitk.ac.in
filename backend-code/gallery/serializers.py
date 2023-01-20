from .models import GalleryImage
from rest_framework import serializers
from website.serializers import DynamicFieldsModelSerializer


class GallerySerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = GalleryImage
        fields = "__all__"