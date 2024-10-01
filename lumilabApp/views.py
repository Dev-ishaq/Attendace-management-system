from django.shortcuts import render
# Create your views here.

def index(request):
    return render(request, 'index.html')

def dash(request):
    return render(request, 'dash/dash.html')

def add_staff(request):
    return render(request, 'dash/add-staff.html')

def add_student(request):
    return render(request, 'dash/add-student.html')

def add_visitors(request):
    return render(request, 'dash/add-visitors.html')

def attend(request):
    return render(request, 'dash/attend.html')

def view(request):
    return render(request, 'dash/view.html')

def manage_student(request):
    return render(request, 'dash/manage-student.html')

def manage_staff(request):
    return render(request, 'dash/manage-staff.html')