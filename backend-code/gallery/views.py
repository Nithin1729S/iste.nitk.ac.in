from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from gallery.models import GalleryImage
from gallery.serializers import GallerySerializer
from django.db.models import DateTimeField
from django.db.models.functions import Trunc

@api_view(['GET'])
def indexView(request):
    
    images_obj = GalleryImage.objects.all().order_by('-date').values()
    images_data = GallerySerializer(images_obj,many=True).data

    return Response({'images':images_data})


@api_view(['GET'])
def socialView(request):
    images_obj = GalleryImage.objects.filter(event="SI").order_by('-date').values()
    images_data = GallerySerializer(images_obj,many=True).data

    return Response({'images':images_data})