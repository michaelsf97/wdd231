//* place.js - Malta Place page functionality
//* Author: Michael Smith Saavedra Forero

// Set current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculator Function (Metric - Celsius and km/h)
function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

// Static values for temperature and wind speed (matching displayed values)
const temperature = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

// Calculate and display wind chill
let windChillDisplay;

// Check conditions: temp <= 10°C and wind > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
    const windChillValue = calculateWindChill(temperature, windSpeed);
    windChillDisplay = Math.round(windChillValue * 10) / 10 + "°C"; // Round to 1 decimal
} else {
    windChillDisplay = "N/A";
}

// Display the wind chill result
document.getElementById("windChill").textContent = windChillDisplay;