//* place.js - Malta Place page functionality
//* Author: Michael Smith Saavedra Forero

// Set current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculator Function
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = 13.22 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16); + 0.3965 * temp * Math.pow
        return Math.round(windChill * 10) / 10; // Round to one decimal place.
    }
    return "N/A"; // Wind chill not applicable. 
}