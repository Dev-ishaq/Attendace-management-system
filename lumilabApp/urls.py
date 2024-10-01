from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('dash/', views.dash, name='dash'),
    path('add-staff/', views.add_staff, name='add-staff'),
    path('add-student/', views.add_student, name='add-student'),
    path('add-visitors/', views.add_visitors, name='add-visitors'),
    path('attend/', views.attend, name='attend'),
    path('view/', views.view, name='view'),
    path('manage-student/', views.manage_student, name='manage-student'),
    path('manage-staff/', views.manage_staff, name='manage-staff')
]
