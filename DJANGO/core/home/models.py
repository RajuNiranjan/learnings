from django.db import models

# Create your models here.

class Students(models.Model):
  name = models.CharField(max_length=100)
  age = models.PositiveIntegerField()
  branch = models.CharField(max_length=10)
  is_hostler = models.BooleanField(default=False)
  city = models.CharField(max_length=50)