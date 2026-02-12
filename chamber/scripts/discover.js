import { pointsOfInterest } from "../data/pointsOfInterest.mjs";

document.addEventListener("DOMContentLoaded", () => {
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
