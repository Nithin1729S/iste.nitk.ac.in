from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from gallery.models import GalleryImage
from gallery.serializers import GallerySerializer

@api_view(['GET'])
def indexView(request):
    
    images_obj = GalleryImage.objects.all().order_by('-date').values()
    images_data = GallerySerializer(images_obj,many=True).data

    print(images_obj[0]['caption'])

    return Response({'images':images_data})

@api_view(['GET'])
def eventIndex(request):
    
    images_obj = GalleryImage.objects.all().order_by('-date').values()

    event_dict={}
    images_data=[]
    for img_obj in images_obj:
        res=event_dict.get(img_obj['event'])
        
        if(res is None):
            ind=len(images_data)
            event_dict[img_obj['event']]=ind
            images_data.append({
                "event":img_obj['event'],
                "imageLinks":[img_obj['imageLink']]
            })
            print(images_data)
        else:
            ind=res
            images_data[ind]["imageLinks"].append(img_obj['imageLink'])
            print(images_data)
   
    return Response({'images':images_data})


@api_view(['GET'])
def socialView(request):
    images_obj = GalleryImage.objects.filter(event="SI").order_by('-date').values()
    images_data = GallerySerializer(images_obj,many=True).data

    return Response({'images':images_data})