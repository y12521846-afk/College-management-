// script.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully ✅");

    // Example: Toggle mobile menu
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // Example: Show alert on button click
    const shopBtn = document.getElementById("shop-btn");
    if (shopBtn) {
        shopBtn.addEventListener("click", function () {
            alert("Thanks for visiting our shop! 🛒");
        });
    }
});
