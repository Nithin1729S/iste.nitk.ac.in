# Contributing to the backend

Follow <a href="https://www.python.org/dev/peps/pep-0008/">PEP 8</a> Python style guide for writing code as much as you can. In brief, do not have lines longer than 80 characters, use snake_case for all local/global variable names, indent using 4 spaces, use a single space between all operators (=, +, -, etc.). Do not use single space around `=` while assigning function parameters.

## Creating Apps

1. Use singular nouns as app names
2. Define all URLs of the app in `app/urls.py`, give appropriate names to each URL
3. Include app name within the appropriate section in the `INSTALLED_APPS` variable in `website/settings.py`
4. Assign namespaces to entry in `website/urls.py` to easily access app relative URLs in templates

Example - 
```
#In website/urls.py
path('event/', include('event.urls', namespace = 'event')),

#In event/urls.py
path('edit/<event_id>', views.editView, name = 'edit'),
```

<a href="https://docs.djangoproject.com/en/3.0/ref/applications/">Learn about Django apps</a>

Examples - 
```
#If the form is a ModelForm for a Model named Event
class EventForm(forms.ModelForm):
  #Form definition

#If the form is a Form, name it depending on the function provided
class ChangePasswordForm(forms.Form):
  #Form definition

```

## Creating Forms

1. Make sure all form names are PascalCase
2. Use appropriate names, end the form name with `Form`

<a href="https://docs.djangoproject.com/en/3.0/topics/forms/">Learn about Django forms</a>

Examples - 

```
#If the form is a ModelForm for a Model named Event
class EventForm(forms.ModelForm):
  #Form definition

#If the form is a Form, name it depending on the function provided
class ChangePasswordForm(forms.Form):
  #Form definition

```

## Defining Models

1. Make sure all model names are PascalCase
2. Use appropriate names

<a href="https://docs.djangoproject.com/en/3.0/topics/db/models/">Learn about Django models</a>

Example - 

```
class Event(models.Model):
  #Model definition
```

## Wrting Utility Functions

1. Make sure such function names are snake_case
2. If the defined function is used within applications, define then in `website/helperFunctions.py` 
3. If the defined function is used just to interact with the database, define them in `utils/helperFunctions.py`

## Writing View Functions

1. Make sure such function names are camelCase. End the function name with `View`
2. Handle `GET` and `POST` request separtely within the view. This can be done by check `request.method`
3. Use a global `context` for the view, append key, value pairs to `context` appropriately for `GET` and `POST` blocks
4. Return `render` only at the end of the function call, if you are not returning `redirect`
5. If handling a request requires you to return `redirect`, the return statement can be included within the `GET` and `POST` blocks

Examples -

```
def myView(request):
  context = {}
  if request.method == 'GET':
    #Handle GET
  else:
    #Handle POST
  return render(request, 'template/directory/..', context)
```
OR 
```
def myView(request):
  context = {}
  if request.method == 'GET':
    #Handle GET
    return render(request, 'template/directory/..', context)
  #Assume you redirect on POST
  else:
    #Handle POST
    return redirect('app:name')
```

## Handling Static Files

1. Statics files such as `.js` and `.css` files should be saved in `static/js/app_name/my_js.js` and `static/css/app_name/my_css.css` respectively
2. Load `.css` files before `{% block content %}` of a html template within `{% block styles %}`. Don't forget to include `{% load static %}`
 within the styles block otherwise the file won't render
2. Load `.js` files after `{% block content %}` of a html template within `{% block scripts %}`. Don't forget to include `{% load static %}`
 within the styles block otherwise the file won't render

<a href="https://docs.djangoproject.com/en/3.0/howto/static-files/">Learn about Django static files</a>

# Contributing to the frontend

## HTML

1. Make sure you use 4 spaces to indent code (configure your editor to do so, you dont have to hit the space button 4 times)
2. Single spaces around `=` of attribute names can be avoided
3. Try naming class names/element IDs using snake_case
4. Files should be saved in `templates/app/template_name.html`, file name can be used to match its corresponding view function, avoid the `View` word from the function name.

## CSS
1. Make sure you use 4 spaces to indent code
2. Indent and split up rules appropriately. Make sure each property, value pair is in a new line.
3. Use file name as `main.css` if it contains code that needs to be used in multiple templates within an app
4. Check the [Using Static Files](#Using-Static-Files) section to see where to save the files

Example - 
```
.class_name{
  property: value,
  property: value
}
```

## JavaScript

1. Try naming functions using camelCase
2. Variable names can be camelCase or snake_case
3. Use file name as `main.js` if it contains code that needs to be used in multiple templates within an app
4. Check the [Using Static Files](#Using-Static-Files) section to see where to save the files

# Test Objects

## Account

`coremember` - A male core member in crypt and chronicle

`fourthyear` - A male member in charge

`thirdyear` - A male member in charge and crypt

`secondyear` - A female member in charge, chronicle, crypt

## Event

`Cryptober` - A crypt event editable by `coremember`, `thirdyear`. Point of contacts - `thirdyear`, `secondyear`. 

## Project

`Arduino Uno` - A charge project made in 2020, editable by `thirdyear`. Project members - `thirdyear`, `secondyear`. 
