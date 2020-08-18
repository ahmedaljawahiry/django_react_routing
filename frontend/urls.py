from django.urls import path, re_path

from frontend.views import index, Login, Logout

urlpatterns = [
    path('server/login/', Login.as_view(), name='login'),
    path('server/logout/', Logout.as_view(), name='logout'),
    re_path('^ui.*', index, name='spa'),
]
