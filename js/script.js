document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector("#pata");
    const navLinks = document.querySelector(".nav-links2");


    navLinks.style.display = "none";



    hamburgerMenu.addEventListener("click", function () {
        // Cambia el display al hacer clic
        if (navLinks.style.display === "none" || navLinks.style.display === "") {
            navLinks.style.display = "block";
        } else {
            navLinks.style.display = "none";
        }
    });
});
 


