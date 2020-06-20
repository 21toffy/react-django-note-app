
from django.contrib import admin
from django.urls import path, include
# import blog.urls
# from blog import urls
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('blog/', include('blog.urls')),
    path('books/', include('books.urls')),

    path('token-auth/', obtain_jwt_token)
]

