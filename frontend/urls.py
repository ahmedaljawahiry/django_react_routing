from django.urls import path, re_path

from frontend.views import index, Login, Logout, server_page

urlpatterns = [
    path('user/login/', Login.as_view(), name='login'),
    path('user/logout/', Logout.as_view(), name='logout'),
    path('server/page/', server_page, name='server-page'),
    re_path('^ui.*', index, name='spa'),
]
