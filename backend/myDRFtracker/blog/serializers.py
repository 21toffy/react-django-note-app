from rest_framework import serializers 
from .models import *
from django.conf import settings


class BlogSerializer(serializers.ModelSerializer):
      class Meta:
        model = Blog
        fields = ('id', 'title', 'content', 'timestamp')

# class BlogSerializer(serializers.Serializer): 
#     # user = serializers.CharField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
#     title = serializers.CharField(max_length=120)
#     content = serializers.CharField(max_length=120)
#     timestamp = serializers.DateTimeField()
#     # pk = serializers.IntegerField(read_only=True) 
#     def create(self, validated_data): 
#         return Blog.objects.create(**validated_data) 

#     def update(self, instance, validated_data): 
#         instance.user = validated_data.get('user', instance.user) 
#         instance.title = validated_data.get('title', instance.title) 
#         instance.content = validated_data.get('content', instance.content) 
#         instance.timestamp = validated_data.get('timestamp', instance.timestamp) 
 
#         instance.save() 
#         return instance
   


