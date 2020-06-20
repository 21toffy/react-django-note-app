from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from books import views

urlpatterns = [
    path('', views.BookList.as_view()),
    path('<int:pk>/', views.BookDetail.as_view()),
]