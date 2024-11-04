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
        # Extract username and password from the POST request
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Check if the user exists in the authorised_users list
        for user in authorised_users:
            if user['username'] == username and user['password'] == password:
                return JsonResponse({'status': 'success', 'message': 'Authenticated'})
        
        # Return failure if credentials don't match
        return JsonResponse({'status': 'error', 'message': 'Invalid credentials'}, status=401)
    
    # Handle case where request is not a POST request
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)

def yard(request):
    return HttpResponse("Yard!")