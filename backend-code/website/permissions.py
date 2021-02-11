from rest_framework.permissions import BasePermission
from account.models import Core

class IsCoreMember(BasePermission):
    def has_permission(self, request, view):
        coreObject = Core.objects.filter(user=request.user)
        if len(coreObject) == 1:
            return True
        else:
            return False

