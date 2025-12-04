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


function updateLiveHour() {
    const liveHourElement = document.getElementById("liveHour");
    if (liveHour) {
        const now = new Date();
        liveHour.textContent = now.toLocateTimeString();
    }
}

setInterval(updateLiveHour, 1000); // Update every second
updateLiveHour(); // Initial call to set immediately