from django.urls import path

from .views import random_quote

urlpatterns = [
    path('', random_quote, name='random-quote'),
]
