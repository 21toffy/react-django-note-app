
from django.urls import path, include
from . import views
from rest_framework import routers

app_name = 'blog'



# router = routers.DefaultRouter()
# router.register(r'blog', views.BlogViewSets, basename = 'blog')
# blog_collection

urlpatterns = [
    # path(r'', include(router.urls)),

    path('', views.BlogListCreateView.as_view()),
    path('<pk>/', views.BlogRetrieveView.as_view()),
    path('current_user/', views.current_user),
    path('users/', views.UserList.as_view())



    
]

