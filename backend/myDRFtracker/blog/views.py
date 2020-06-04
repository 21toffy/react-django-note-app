from rest_framework import generics

from rest_framework import viewsets

from django.http import HttpResponseRedirect, HttpResponse
from rest_framework.decorators import api_view
# from rest_framework import response
from rest_framework.response import Response

from django.shortcuts import get_object_or_404


from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .serializers import *



from django.shortcuts import render 
from django.views.decorators.csrf import csrf_exempt


from rest_framework.parsers import JSONParser 
from rest_framework import status 
from .models import *
from blog.serializers import BlogSerializer





# class BlogListView(generics.ListAPIView): 
#     queryset = Blog.objects.all() 
#     serializer_class = BlogSerializer



# class BlogRetrieveView(generics.RetrieveAPIView): 
#     queryset = Blog.objects.all() 
#     serializer_class = BlogSerializer



class BlogListCreateView(generics.ListCreateAPIView): 
    queryset = Blog.objects.all() 
    serializer_class = BlogSerializer

class BlogRetrieveView(generics.RetrieveUpdateDestroyAPIView): 
    queryset = Blog.objects.all() 
    serializer_class = BlogSerializer


# class BlogRetrieveView(generics.RetrieveAPIView): 
#     queryset = Blog.objects.all() 
#     serializer_class = BlogSerializer

# class BlogCreateView(generics.CreateAPIView): 
#     queryset = Blog.objects.all() 
#     serializer_class = BlogSerializer



























# @api_view(['GET', 'POST'])
# def blog_collection(request):
#     if request.method == 'GET':
#         blogs = Blog.objects.all()
#         serializer = BlogSerializer(blogs, many=True)
#         return Response(serializer.data)
#     elif request.method == 'POST':
#         data = {'title': request.data.get('title'), 'content': request.data.get('content')}
#         serializer = BlogSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# @api_view(['GET'])
# def blog(request):
#     if request.method == 'GET':
#         blog = Blog.objects.all()
#         serializer = BlogSerializer(blog, many=True)
#         return Response(serializer.data)


# @api_view(['GET'])
# def blog_detail(request, pk):
#     try:
#         blog = Blog.objects.get(pk=pk)
#     except Blog.DoesNotExist:
#         return HttpResponse(status=404)

#     if request.method == 'GET':
#         serializer = BlogSerializer(blog)
#         return Response(serializer.data)
























# class BlogViewSets(viewsets.ModelViewSet):
#     serializer_class = BlogSerializer
#     queryset = Blog.objects.all() 

    # def list(self, request):
    #     queryset = Blog.objects.all()
    #     serializer_class = BlogSerializer(queryset, many = True)
    #     return Response(serializer_class.data)

    # def create(self, request):
    #     queryset = Blog.objects.all()
    #     serializer_class = BlogSerializer(queryset, many = True)
    #     return Response(serializer_class.data)

    # def retrieve(self, request, pk = None):
    #     queryset = Blog.objects.all()
    #     blog_post = get_object_or_404(queryset, pk = pk)
    #     serializer_class = BlogSerializer(blog_post)
    #     return Response(serializer_class.data)




















# @api_view(['GET', 'POST'])
# def blog(request):
#     if request.method == 'GET':
#         data = []
#         nextPage = 1
#         previousPage = 1
#         blog = Blog.objects.all()
#         page = request.GET.get('page', 1)
#         paginator = Paginator(blog, 10)
#         try:
#             data = paginator.page(page)
#         except PageNotAnInteger:
#             data = paginator.page(1)
#         except EmptyPage:
#             data = paginator.page(paginator.num_pages)

#         serializer = BlogSerializer(data,context={'request': request} ,many=True)
#         if data.has_next():
#             nextPage = data.next_page_number()
#         if data.has_previous():
#             previousPage = data.previous_page_number()

#         return Response({'data': serializer.data , 'count': paginator.count, 'numpages' : paginator.num_pages, 'nextlink': '/blog/?page=' + str(nextPage), 'prevlink': '/blog/?page=' + str(previousPage)})

#     elif request.method == 'POST':
#         serializer = BlogSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# @api_view(['GET', 'PUT', 'DELETE'])
# def blog_detail(request, pk):
#     """
#  Retrieve, update or delete a customer by id/pk.
#  """
#     try:
#         blog = Blog.objects.get(pk=pk)
#     except Blog.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'GET':
#         serializer = BlogSerializer(blog,context={'request': request})
#         return Response(serializer.data)

#     elif request.method == 'PUT':
#         serializer = BlogSerializer(blog, data=request.data,context={'request': request})
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         blog.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


# .RetrieveUpdateDestroyAPIView)





