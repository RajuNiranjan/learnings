from django.shortcuts import render

# Create your views here.

def home(request):
  return render(request, 'home/index.html')

def students(request):
  studentsData = [
    {"name":"Emily", "age":20, "branch":"CSE", "isHostler":True, "city":"Hyderabad"},
    {"name":"Michael", "age":23, "branch":"EEE", "isHostler":False, "city":"Bangalore"},
    {"name":"Sophia", "age":19, "branch":"ME", "isHostler":True, "city":"Guntur"},
    {"name":"David", "age":22, "branch":"IT", "isHostler":False, "city":"Mumbai"},
    {"name":"Anna", "age":21, "branch":"ECE", "isHostler":True, "city":"Delhi"},
    {"name":"James", "age":24, "branch":"CSE", "isHostler":False, "city":"Hyderabad"},
    {"name":"Isabella", "age":18, "branch":"CE", "isHostler":True, "city":"Chennai"},
    {"name":"Daniel", "age":22, "branch":"IT", "isHostler":False, "city":"Bangalore"},
    {"name":"Sophia", "age":20, "branch":"EEE", "isHostler":True, "city":"Guntur"},
    {"name":"John", "age":25, "branch":"ME", "isHostler":False, "city":"Mumbai"}
]

  return render(request, 'home/students.html', context={'students':studentsData})