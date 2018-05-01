from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers
from .models import Model

# Create your views here.

def models(request):
    model_data = []

    for model in Model.objects.all():
        model_data.append({'title': model.title, 'description': model.description, 'link': model.link})

    return JsonResponse({'models': model_data})
