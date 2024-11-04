import json
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
from django.http import HttpResponse, JsonResponse


from .models import CellColor  # Import the model

def index(request):
    # Retrieve all colors from the database
    colors = CellColor.objects.all()
    grid_colors = [[None for _ in range(4)] for _ in range(3)]  # Initialize a 3x4 grid
    counts = [[{'red': 0, 'green': 0, 'blue': 0} for _ in range(4)] for _ in range(3)]  # Initialize counts

    for cell in colors:
        # Ensure row and column indices are within bounds
        if 0 <= cell.row < 3 and 0 <= cell.col < 4:
            grid_colors[cell.row][cell.col] = cell.color  # Populate grid with colors
            counts[cell.row][cell.col] = {
                'red': cell.red_count,
                'green': cell.green_count,
                'blue': cell.blue_count,
            }  # Populate counts
        else:
            print(f"Invalid cell coordinates: ({cell.row}, {cell.col})")  # Log any out-of-bound cells

    # Return the grid colors and counts as JSON
    return JsonResponse({'grid_colors': grid_colors, 'counts': counts})


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
            cell, created = CellColor.objects.update_or_create(
                row=row,
                col=col,
                defaults={'color': color}
            )

            # Update color count
            if color == 'red':
                cell.red_count += 1
            elif color == 'green':
                cell.green_count += 1
            elif color == 'blue':
                cell.blue_count += 1
            cell.save()

            return JsonResponse({'status': 'success', 'message': 'Color updated successfully'})

        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON payload'}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)

def yard(request):
    return HttpResponse("Yard!")