//* w06project.js - Project for WDD131 Week 6.
//* Author: Michael Smith Saavedra Forero
//* Trycicle WorldWide Ride-Sharing Service

// Set current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date in footer

const lastModified = document.getElementById("lastModified");
if (lastModified) {
    lastModified.textContent = document.lastModified;
}
