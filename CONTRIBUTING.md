## Writing Views

1. Make sure all the function names are camelCase. End the function name with `View`, for example a login view function should be named - `loginView()`
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

## Test Objects

### Account

`coremember` - A male core member in crypt and chronicle

`fourthyear` - A male member in charge

`thirdyear` - A male member in charge and crypt

`secondyear` - A female member in charge, chronicle, crypt

### Event

`Cryptober` - A crypt event editable by coremember, thirdyear. Point of contacts - thirdyear, secondyear. 

### Project

`Arduino Uno` - A charge project made in 2020, editable by thirdyear. Project members - thirdyear, secondyear. 
