console.log("LOGIN.JS EST CHARGÉ");


document.addEventListener('DOMContentLoaded', function() {
    const errorUsername = document.getElementById("error-username");
    const errorPassword = document.getElementById("error-password");

    // Lire les paramètres d'erreur dans l'URL
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");

    if (error === "username") {
        errorUsername.textContent = "❌ Nom d’utilisateur incorrect";
    }

    if (error === "password") {
        errorPassword.textContent = "❌ Mot de passe incorrect";
    }
});
