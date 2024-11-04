import json
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
from django.http import HttpResponse, JsonResponse


def index(request):
    return HttpResponse("Scotland yard 24 works!")

@csrf_exempt
def admin(request):
    authorised_users = [
        {'username': 'sudarshan', 'password': 'xxx123'}
    ]

    if request.method == 'POST':
        try:
            # Parse the JSON body to retrieve the credentials
            body = json.loads(request.body.decode('utf-8'))
            username = body.get('username')
            password = body.get('password')

            # Check credentials against authorized users
            for user in authorised_users:
                if user['username'] == username and user['password'] == password:
                    return JsonResponse({'status': 'success', 'message': 'Authenticated'})

            return JsonResponse({'status': 'error', 'message': 'Invalid credentials'}, status=401)
        
        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON payload'}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)

def yard(request):
    return HttpResponse("Yard!")