from django.shortcuts import render, redirect
from .models import Student


def inscription(request):
    if request.method == "POST":
        nom = request.POST.get("nom")
        prenom = request.POST.get("prenom")
        genre = request.POST.get("genre")
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
        confirm_password = request.POST.get("confirm_password")

        # Vérification des mots de passe
        if password != confirm_password:
            # Plus de messages Django → on renvoie un signal via GET
            return redirect("/inscription/?error=password")

        # Création utilisateur dans MySQL
        Student.objects.create(
            nom=nom,
            prenom=prenom,
            genre=genre,
            date_naissance=date_naissance,
            adresse=adresse,
            wilaya=wilaya,
            matricule=matricule,
            level=level,
            departement=departement,
            specialite=specialite,
            email=email,
            username=username,
            password=password  # NON HASHÉ, comme tu veux
        )
        
        return redirect("/login/?success=1")

    return render(request, "inscription.html")



def login(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        # Vérifie si l'utilisateur existe
        try:
            student = Student.objects.get(username=username)
        except Student.DoesNotExist:
            return redirect("/login/?error=username")

        # Vérifie le mot de passe
        if password != student.password:
            return redirect("/login/?error=password")

        # Si OK → connexion
        request.session["student_id"] = student.id
        request.session["username"] = student.username
        request.session["genre"] = student.genre

        return redirect("accueil")

    return render(request, "login.html")



def logout(request):
    request.session.flush()
    return redirect("accueil")


def accueil(request):
    username = request.session.get("username")
    genre = request.session.get("genre")

    return render(request, "accueil.html", {
        "username": username,
        "genre": genre
    })


