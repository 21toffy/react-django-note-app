
from django.contrib import admin
from django.urls import path, include
# import blog.urls
# from blog import urls

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('blog/', include('blog.urls')),
]

