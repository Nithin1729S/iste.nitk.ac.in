from .models import GalleryImages
from rest_framework import serializers
from website.serializers import DynamicFieldsModelSerializer


class GallerySerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = GalleryImages
        fields = "__all__"