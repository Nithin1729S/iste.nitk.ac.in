from datetime import datetime
from django.core.exceptions import PermissionDenied

def check_member_year(*years):
    def decorator(view):
        def wrapped_view(request, *args, **kwargs):
            this_year = datetime.today().year
            member_year_offset = request.user.batch_of - this_year

            if 4 - member_year_offset in years:
                return view(request, *args, **kwargs)
            else:
                raise PermissionDenied('You do not have access to view this page', '403.html')

        return wrapped_view
    return decorator
