from rest_framework import generics


from django.http import HttpResponseRedirect, HttpResponse
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .serializers import *
from rest_framework.parsers import JSONParser 
from rest_framework import status 
from .models import *
from blog.serializers import BlogSerializer
from .serializers import UserSerializer, UserSerializerWithToken

from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.views import APIView





class BlogListCreateView(generics.ListCreateAPIView): 
    queryset = Blog.objects.all() 
    serializer_class = BlogSerializer

class BlogRetrieveView(generics.RetrieveUpdateDestroyAPIView): 
    queryset = Blog.objects.all() 
    serializer_class = BlogSerializer

@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """
    permission_classes = (permissions.AllowAny,)
    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)