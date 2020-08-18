from django.urls import path

from backend_app.api import APIWithoutAuth, APIWithAuth

urlpatterns = [
    path('no-auth/', APIWithoutAuth.as_view(), name='no-auth-api'),
    path('auth/', APIWithAuth.as_view(), name='session-auth-api'),
]
