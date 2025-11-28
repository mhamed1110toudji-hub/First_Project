

window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (window.scrollY > 20) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
});


//==============blur effect + dropdown menu================//

document.querySelectorAll(".menu-item > a").forEach(item => {
    item.addEventListener("click", function(e) {
        e.preventDefault();

        const dropdown = this.parentElement.querySelector(".dropdown");
        const blur = document.getElementById("page-blur");

        // Fermer tous les autres dropdowns
        let isOpening = dropdown.style.display !== "flex";

        document.querySelectorAll(".dropdown").forEach(d => {
            d.style.display = "none";
        });

        // Ouvrir le bon
        dropdown.style.display = isOpening ? "flex" : "none";

        // Gérer le flou
        if (isOpening) {
            blur.classList.add("active");
        } else {
            blur.classList.remove("active");
        }
    });
});

// Fermer drop + flou si clic ailleurs
document.addEventListener("click", function(e) {
    if (!e.target.closest(".menu-item")) {
        document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");
        document.getElementById("page-blur").classList.remove("active");
    }
});


//==============dark mode toggle================//
const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

     
    if (document.body.classList.contains("dark-mode")) {
        btn.innerText = "☀️";
    } else {
        btn.innerText = "🌙 ";
    }
})



const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    nav.style.display = nav.style.display === "block" ? "none" : "block";
});



//=================fin==================//