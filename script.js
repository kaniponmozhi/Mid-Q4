document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", function () {
        if (navbar.style.display === "none" || navbar.style.display === "") {
            navbar.style.display = "grid";
        } else {
            navbar.style.display = "none";
        }
    });  
});
