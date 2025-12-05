from django.urls import path
from . import views

urlpatterns = [
    path("", views.accueil, name="accueil"),
    path("login/", views.login, name="login"),
    path("inscription/", views.inscription, name="inscription"),
    path("logout/", views.logout, name="logout"),
]
