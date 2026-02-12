import { pointsOfInterest } from "../data/pointsOfInterest.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".points-of-interest");
  if (!section) return;
  section.innerHTML = "";
  pointsOfInterest.forEach(item => {
    const article = document.createElement("article");
    article.innerHTML = `
      <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
      <h3>${item.name}</h3>
      <p><strong>Address:</strong> ${item.address}</p>
      <p>${item.description}</p>
    `;
    section.appendChild(article);
  });
});
