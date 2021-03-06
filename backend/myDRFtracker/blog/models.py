from django.db import models
from django.conf import settings

class Blog (models.Model):
    # user = models.CharField(max_length=120,null=True, blank=True)
    title = models.CharField(max_length=120,null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add =True)

    def __str__(self):
        return self.title
