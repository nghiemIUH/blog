from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=255, blank=False, null=False)
    list = models.TextField(max_length=1000, blank=False, null=False)
    description = models.TextField(default='')
    active = models.BooleanField(default=True)

class Product(models.Model):
    title = models.CharField(max_length=255, blank=False, default='')
    description = models.TextField(default='')
    active = models.BooleanField(default=True)
