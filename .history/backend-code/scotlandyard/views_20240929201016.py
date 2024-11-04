import json
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
from django.http import HttpResponse, JsonResponse


from .models import Cell, CellColor  # Import the model

def index(request):
    # Retrieve all colors from the database
    colors = CellColor.objects.all()
    grid_colors = [[None for _ in range(4)] for _ in range(3)]  # Initialize a 3x4 grid

    for cell in colors:
        # Ensure row and column indices are within bounds
        if 0 <= cell.row < 3 and 0 <= cell.col < 4:
            grid_colors[cell.row][cell.col] = cell.color  # Populate grid with colors
        else:
            print(f"Invalid cell coordinates: ({cell.row}, {cell.col})")  # Log any out-of-bound cells

    # Return the grid colors as JSON
    return JsonResponse({'grid_colors': grid_colors})

# Retrieve the grid data
def get_grid_data(request):
    cells = Cell.objects.all()
    data = {}
    
    for cell in cells:
        grid_index = cell.grid_index
        cell_index = cell.cell_index
        color_data = {
            'color': cell.color,
            'counts': {
                'red': cell.red_count,
                'green': cell.green_count,
                'blue': cell.blue_count,
            }
        }
        
        if grid_index not in data:
            data[grid_index] = {}
        data[grid_index][cell_index] = color_data

    return JsonResponse(data)

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
        body = json.loads(request.body)
        grid_index = body['grid']
        cell_index = body['cell']
        color = body['color']
        
        # Fetch or create the Cell
        cell, created = Cell.objects.get_or_create(
            grid_index=grid_index,
            cell_index=cell_index,
            defaults={'color': color}
        )
        
        # Update the color count and save
        if color == 'red':
            cell.red_count += 1
        elif color == 'green':
            cell.green_count += 1
        elif color == 'blue':
            cell.blue_count += 1
        
        cell.color = color
        cell.save()

        return JsonResponse({'message': 'Color updated successfully'})
    
    return JsonResponse({'error': 'Invalid request'}, status=400)
def yard(request):
    return HttpResponse("Yard!")