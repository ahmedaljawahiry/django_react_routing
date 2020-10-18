from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LoginView, LogoutView
from django.shortcuts import render


@login_required()
def index(request, *args):
    return render(request, 'index.html')


class Login(LoginView):
    template_name = 'frontend/login.html'
    redirect_authenticated_user = True


class Logout(LogoutView):
    pass


@login_required()
def server_page(request, *args):
    return render(request, 'frontend/server.html')