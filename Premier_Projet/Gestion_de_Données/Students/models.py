from django.db import models


class Student(models.Model):
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    date_naissance = models.DateField()
    adresse = models.CharField(max_length=255)
    wilaya = models.CharField(max_length=50)
    matricule = models.CharField(max_length=9, unique=True)
    level = models.CharField(max_length=10)
    departement = models.CharField(max_length=50)
    specialite = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return f"{self.nom} {self.prenom}"

# Create your models here.
