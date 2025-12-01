from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .models import Student
from django.contrib.auth import logout

# ============================
# Accueil
# ============================
def accueil(request):
    return render(request, "accueil.html")


# ============================
# Inscription
# ============================
def inscription(request):
    if request.method == "POST":
        nom = request.POST.get("nom")
        prenom = request.POST.get("prenom")
        date_naissance = request.POST.get("date_naissance")
        adresse = request.POST.get("adresse")
        wilaya = request.POST.get("wilaya")
        matricule = request.POST.get("matricule")
        level = request.POST.get("level")
        departement = request.POST.get("departement")
        specialite = request.POST.get("specialite")
        email = request.POST.get("email")
        username = request.POST.get("username")
        password = request.POST.get("password")

        # Vérifier si username ou email existent
        if User.objects.filter(username=username).exists():
            messages.error(request, "Ce nom d'utilisateur existe déjà.")
            return render(request, "inscription.html")
        if User.objects.filter(email=email).exists():
            messages.error(request, "Cet email est déjà utilisé.")
            return render(request, "inscription.html")

        # ⚡ Créer l'utilisateur Django avec mot de passe hashé
        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )

        # Enregistrer les infos supplémentaires dans Student
        Student.objects.create(
            nom=nom,
            prenom=prenom,
            date_naissance=date_naissance,
            adresse=adresse,
            wilaya=wilaya,
            matricule=matricule,
            level=level,
            departement=departement,
            specialite=specialite,
            email=email,
            username=username
        )

        # Connecter automatiquement l'utilisateur
        login(request, user)
        return redirect("accueil")

    return render(request, "inscription.html")


# ============================
# Login
# ============================
def login_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)  # Crée la session
            return redirect("accueil")
        else:
            messages.error(request, "Identifiants incorrects")

    return render(request, "login.html")



def logout_view(request):
    logout(request)
    return redirect('login')  # après déconnexion → page login
