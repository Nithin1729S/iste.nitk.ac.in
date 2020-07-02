from datetime import datetime
from django.core.exceptions import PermissionDenied
from django.contrib.auth.decorators import login_required
from account.models import Core

def check_member_year(*years):
    def decorator(view):
        def wrapped_view(request, *args, **kwargs):
            this_year = datetime.today().year
            member_year_offset = request.user.batch_of - this_year
            
            #Ex - In 2020, batch_of 21 student will be 4th year
            if this_year % 2 == 0:
                subtract_by = 5
            else:
                subtract_by = 4

            if subtract_by - member_year_offset in years:
                return view(request, *args, **kwargs)
            else:
                raise PermissionDenied('You do not have access to view this page', '403.html')

        return wrapped_view
    return decorator

def check_edit_access(model):
    def decorator(view):
        def wrapped_view(request, obj_id, *args, **kwargs):
            obj = model.objects.get(pk = obj_id)
            #Allow access only if user can edit the object
            if request.user in obj.editable_by.all():
                return view(request, obj_id)
            else:
                raise PermissionDenied('You do not have access to view this page', '403.html')

        return wrapped_view
    return decorator


def check_core_member(view):
    def wrapped_view(request, *args, **kwargs):
        print(1)
        core_users = map(lambda obj: obj.user, Core.objects.all())
        print('Core', core_users)
        #Allow access only if user is in core
        if request.user in core_users:
            return view(request)
        else:
            raise PermissionDenied('You do not have access to view this page', '403.html')

    return wrapped_view