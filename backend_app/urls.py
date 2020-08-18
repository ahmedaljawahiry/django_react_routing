from django.urls import path

from backend_app.views import some_api

urlpatterns = [
    path('', some_api, name='backend-api'),
]
