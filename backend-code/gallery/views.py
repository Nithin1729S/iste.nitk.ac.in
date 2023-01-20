from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from gallery.models import GalleryImage
from gallery.serializers import GallerySerializer

@api_view(['GET'])
def indexView(request):
    images_obj = GalleryImage.objects.all()
    images_data = GallerySerializer(images_obj,many=True).data

    return Response({'images':images_data})

