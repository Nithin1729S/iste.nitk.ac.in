from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

admin.site.site_header = "ISTE Website Admin Page"
admin.site.index_title = "Admin page"
urlpatterns = [
    path("admin/", admin.site.urls),
    path("home/", include("home.urls", namespace="home")),
    path("account/", include("account.urls", namespace="account")),
    path("project/", include("project.urls", namespace="project")),
    path("event/", include("event.urls", namespace="event")),
    path("recs/", include("recruitment.urls", namespace="recruitment")),
    path("sig/", include("sig.urls", namespace="sig")),
    path("team/", include("team.urls", namespace="team")),
    path("smp/", include("SMP.urls", namespace="SMP")),
    path("ctf/", include("ctf.urls", namespace="CTF")),
    path("ckeditor/", include("ckeditor_uploader.urls")),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("squareoneleaderboard/",include("squareonelb.urls", namespace="squareonelb")),
    path('obscura/', include('obscura.urls', namespace='obscura')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
