//* w06project.js - Project for WDD131 Week 6.
//* Author: Michael Smith Saavedra Forero

//* Trycicle WorldWide Ride-Sharing Service




// Set last modified date in footer

const lastModified = document.getElementById("lastModified");
if (lastModified) {
    lastModified.textContent = document.lastModified;
}


function updateLiveHour () {
    const liveHourElement = document.getElementById("liveHour");
     if (liveHourElement) {
        const now = new Date();
        liveHourElement.textContent = now.toLocaleTimeString();
    }
}

setInterval(updateLiveHour, 1000); // Update every second
updateLiveHour(); // Initial call to set immediately



//Hamburger menu functionality

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navigation");
if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
    });
}


// Setting up lazy loading for images

img.setAttribute("loading", "lazy");






