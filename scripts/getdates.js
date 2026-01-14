// getdates.js - Dynamic date functionality for WDD 131 website
// Author: Michael Smith Saavedra Forero

// Populate current year in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Populate last modified date in footer using document.lastModified property
document.getElementById("lastModified").innerHTML = document.lastModified;