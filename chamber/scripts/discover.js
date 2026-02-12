import { pointsOfInterest } from "../data/pointsOfInterest.mjs";

document.addEventListener("DOMContentLoaded", () => {
  // Visitor message logic
  const visitorMsg = document.getElementById("visitor-message");
  if (visitorMsg) {
    const lastVisit = localStorage.getItem("chamberLastVisit");
    const now = Date.now();
    let message = "";
    if (!lastVisit) {
      message = "Welcome! Let us know if you have any questions.";
    } else {
      const diffMs = now - Number(lastVisit);
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      if (diffMs < 1000 * 60 * 60 * 24) {
        message = "Back so soon! Awesome!";
      } else if (diffDays === 1) {
        message = "You last visited 1 day ago.";
      } else {
        message = `You last visited ${diffDays} days ago.`;
      }
    }
    visitorMsg.textContent = message;
    localStorage.setItem("chamberLastVisit", now.toString());
  }
  const section = document.querySelector(".points-of-interest");
  if (!section) return;
  section.innerHTML = "";
  pointsOfInterest.forEach(item => {
    const card = document.createElement("article");
    card.className = "poi-card";
    card.innerHTML = `
      <h2>${item.name}</h2>
      <figure>
        <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
      </figure>
      <address>${item.address}</address>
      <p>${item.description}</p>
      <button type="button">Learn more</button>
    `;
    section.appendChild(card);
  });
});
