from django.db import models

# Create your models here.
class Model(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    link = models.URLField()

    def __str__(self):
        return self.title
