# from django.http import HttpResponse
from django.shortcuts import render

def homepage(request):
  # return HttpResponse("Hello Worlds!")
  return render(request, "home.html")

def about(request):
  # return HttpResponse("I am from About Page")
  return render(request, "about.html")
