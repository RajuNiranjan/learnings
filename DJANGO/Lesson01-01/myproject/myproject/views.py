# from django.http import HttpResponse
from django.shortcuts import render

def HomePage(request):
  # return HttpResponse("Hello World!...")
  return render(request, 'home.html')


def About(request):
  # return HttpResponse("I am About Page...")
  return render(request, 'about.html')