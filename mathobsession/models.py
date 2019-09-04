from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Subject(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
        return self.name

class Exercise(models.Model):
    content = models.CharField(max_length=200)
    level = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(3)])
    user = models.ForeignKey(User, related_name='exercises', on_delete=models.CASCADE)
    subject = models.ManyToManyField(Subject, related_name='exercies', blank=True)


    def __str__(self):
        return f'{self.content} level {self.level}'
