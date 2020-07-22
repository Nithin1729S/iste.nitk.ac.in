from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

admin.site.site_header = 'ISTE Website Admin Page'
admin.site.index_title = 'Admin page'
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls', namespace = 'home')),
    path('account/', include('account.urls', namespace = 'account')),
    path('project/', include('project.urls', namespace = 'project')),
    path('event/', include('event.urls', namespace = 'event')),
    path('recs/', include('recruitment.urls', namespace = 'recruitment')),
    path('sig/',include('sig.urls', namespace = 'sig')),
    path('ckeditor/',include('ckeditor_uploader.urls')),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)