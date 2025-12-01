from django.urls import path
from .views import login_view, inscription, accueil, logout_view  # ⚡ ajouter logout_view

urlpatterns = [
    path('', accueil, name='accueil'),
    path('login/', login_view, name='login'),
    path('inscription/', inscription, name='inscription'),
    path('logout/', logout_view, name='logout'),  # ⚡ ajouter le path pour logout
]
