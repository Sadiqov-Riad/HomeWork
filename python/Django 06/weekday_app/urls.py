from django.urls import path

from .views import current_weekday

urlpatterns = [
    path('', current_weekday, name='current-weekday'),
]
