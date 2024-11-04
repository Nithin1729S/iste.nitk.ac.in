import json
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
from django.http import HttpResponse, JsonResponse


from .models import CellColor  # Import the model

def index(request):
    # Retrieve all colors from the database
    colors = CellColor.objects.all()
    grid_colors = [[None for _ in range(5)] for _ in range(5)]  # Initialize a 5x5 grid

    for cell in colors:
        grid_colors[cell.row][cell.col] = cell.color  # Populate grid with colors

    # Return the grid colors as JSON
    return JsonResponse({'grid_colors': grid_colors})

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

@csrf_exempt
def update_color(request):
    if request.method == 'POST':
        try:
            body = json.loads(request.body.decode('utf-8'))
            row = body.get('row')
            col = body.get('col')
            color = body.get('color')

            # Update or create the cell color in the database
            CellColor.objects.update_or_create(
                row=row,
                col=col,
                defaults={'color': color}
            )

            return JsonResponse({'status': 'success', 'message': 'Color updated successfully'})

        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON payload'}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)

def yard(request):
    return HttpResponse("Yard!")