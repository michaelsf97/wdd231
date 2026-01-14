// temples.js - Temple album specific JavaScript functionality
// Author: Michael Smith Saavedra Forero

// Set current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    
    
    if (navMenu.classList.contains("active")) {
        hamburger.textContent = "✕";
    } else {
        hamburger.textContent = "☰";
    }
});